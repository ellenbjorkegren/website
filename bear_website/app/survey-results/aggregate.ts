import type { DesignComment, DesignItem, Filters, Item, Likert, Quote, Respondent } from "./types";

export const AGE_OPTIONS = ["Below 23", "23–28", "28–33", "33–38", "38–43", "43+"];
export const GENDER_OPTIONS = ["Woman", "Man"];
export const DESIGN_LETTERS = ["A", "B", "C", "D", "E", "F"];

const USED12MO_ORDER = ["No", "Once or twice", "Occasionally", "Frequently"];
const CARRY_ORDER = ["Never", "Rarely", "Sometimes", "Often", "Always"];
const HOME_ORDER = ["Never", "Rarely", "Sometimes", "Usually", "Always"];
const MISSED_ORDER = ["No", "Yes, once or twice", "Yes, several times"];
const MAXPRICE_ORDER = [
  "Less than 129 SEK",
  "129 SEK",
  "149 SEK",
  "169 SEK",
  "189 SEK",
  "199 SEK",
  "219 SEK or more",
];
export function applyFilters(respondents: Respondent[], filters: Filters): Respondent[] {
  return respondents.filter((r) => {
    if (filters.gender && r.gender !== filters.gender) return false;
    if (filters.age && r.age !== filters.age) return false;
    return true;
  });
}

const round = (v: number, n: number) => (n === 0 ? 0 : Math.round((v / n) * 100));

// Fixed order, keeps zero-count categories (shows the full scale).
function ordinal(rs: Respondent[], field: keyof Respondent, order: string[]): Item[] {
  const answered = rs.filter((r) => (r[field] as string).trim() !== "");
  const n = answered.length;
  const counts = new Map(order.map((o) => [o, 0]));
  for (const r of answered) {
    const v = r[field] as string;
    if (counts.has(v)) counts.set(v, (counts.get(v) ?? 0) + 1);
  }
  return order.map((label) => ({ label, value: counts.get(label) ?? 0, pct: round(counts.get(label) ?? 0, n) }));
}

// Sorted by count desc, zero-count categories dropped.
function nominalSingle(rs: Respondent[], field: keyof Respondent): Item[] {
  const answered = rs.filter((r) => (r[field] as string).trim() !== "");
  const n = answered.length;
  const counts = new Map<string, number>();
  for (const r of answered) {
    const v = r[field] as string;
    counts.set(v, (counts.get(v) ?? 0) + 1);
  }
  return [...counts.entries()]
    .sort((a, b) => b[1] - a[1])
    .map(([label, value]) => ({ label, value, pct: round(value, n) }));
}

// Multi-select: denominator is total respondents (they may pick any number of options).
function nominalMulti(rs: Respondent[], field: keyof Respondent): Item[] {
  const n = rs.length;
  const counts = new Map<string, number>();
  for (const r of rs) {
    for (const v of r[field] as string[]) {
      counts.set(v, (counts.get(v) ?? 0) + 1);
    }
  }
  return [...counts.entries()]
    .filter(([, value]) => value > 0)
    .sort((a, b) => b[1] - a[1])
    .map(([label, value]) => ({ label, value, pct: round(value, n) }));
}

function likert(rs: Respondent[], field: keyof Respondent, label: string): Likert {
  const answered = rs.filter((r) => (r[field] as string).trim() !== "");
  const n = answered.length;
  const c = (v: string) => answered.filter((r) => r[field] === v).length;
  return {
    label,
    disagree: c("Definitely not") + c("Probably not"),
    neutral: c("Maybe"),
    agree: c("Probably") + c("Definitely"),
    n,
  };
}

const designImage = (letter: string) => `/survey/design-${letter.toLowerCase()}.jpg`;

export function computeDashboard(respondents: Respondent[], filters: Filters) {
  const rs = applyFilters(respondents, filters);
  const total = rs.length;

  const demographics = {
    age: ordinal(rs, "age", AGE_OPTIONS),
    gender: nominalSingle(rs, "gender"),
    relationship: nominalSingle(rs, "relationship"),
    orientation: nominalSingle(rs, "orientation"),
  };

  const habits = {
    used12mo: ordinal(rs, "used12mo", USED12MO_ORDER),
    carryFreq: ordinal(rs, "carryFreq", CARRY_ORDER),
    homeFreq: ordinal(rs, "homeFreq", HOME_ORDER),
  };

  const missedMoment = {
    breakdown: ordinal(rs, "missedMoment", MISSED_ORDER),
    reasons: nominalMulti(rs, "whyMissed"),
  };

  const purchase = {
    decisionFactors: nominalMulti(rs, "decisionFactors"),
    brandsUsed: nominalMulti(rs, "brandsUsed"),
    whereBuyNow: nominalMulti(rs, "whereBuyNow"),
    whoBuys: nominalSingle(rs, "whoBuys"),
  };

  const receptiveness: Likert[] = [
    likert(rs, "agreeCarryMore", "I'd be more likely to carry condoms with me"),
    likert(rs, "agreeHomeMore", "I'd be more likely to keep condoms accessible at home"),
    likert(rs, "agreePayMore", "I'd pay more for a better product & better-designed packaging"),
  ];

  const whereWantBuy = nominalMulti(rs, "whereWantBuy");
  const maxPrice = ordinal(rs, "maxPrice", MAXPRICE_ORDER);

  // Design: top-choice distribution + how many didn't pick a favorite.
  const topChoiceAnswered = rs.filter((r) => r.topChoice !== "");
  const noneCount = total - topChoiceAnswered.length;
  const noneP = round(noneCount, total);
  const topChoiceCounts = new Map(DESIGN_LETTERS.map((l) => [l, 0]));
  for (const r of topChoiceAnswered) topChoiceCounts.set(r.topChoice, (topChoiceCounts.get(r.topChoice) ?? 0) + 1);
  const topChoice: DesignItem[] = DESIGN_LETTERS.map((letter) => ({
    letter,
    label: `Design ${letter}`,
    value: topChoiceCounts.get(letter) ?? 0,
    pct: round(topChoiceCounts.get(letter) ?? 0, topChoiceAnswered.length),
    image: designImage(letter),
  })).sort((a, b) => b.value - a.value);

  const topChoiceReasons = nominalMulti(topChoiceAnswered, "topChoiceReasons");

  // Per-design breakdown: who picked it top/second, why (structured reasons), and free-text comments.
  const designGallery = DESIGN_LETTERS.map((letter) => {
    const topPickers = rs.filter((r) => r.topChoice === letter);
    const secondPickers = rs.filter((r) => r.secondChoice === letter);
    const reasons = nominalMulti(topPickers, "topChoiceReasons").slice(0, 5);

    const comments: DesignComment[] = [
      ...topPickers
        .filter((r) => r.topChoiceOtherText)
        .map((r) => ({ text: r.topChoiceOtherText, tag: "Top choice", translated: r.topChoiceOtherTranslated })),
      ...secondPickers
        .filter((r) => r.secondChoiceOtherText)
        .map((r) => ({
          text: r.secondChoiceOtherText,
          tag: "Second favorite",
          translated: r.secondChoiceOtherTranslated,
        })),
    ];

    return {
      letter,
      image: designImage(letter),
      topCount: topPickers.length,
      secondCount: secondPickers.length,
      reasons,
      comments,
    };
  }).sort((a, b) => b.topCount - a.topCount || b.secondCount - a.secondCount);

  const generalDesignComments: DesignComment[] = [
    ...rs
      .filter((r) => r.topChoice === "" && r.topChoiceOtherText)
      .map((r) => ({ text: r.topChoiceOtherText, tag: "General", translated: r.topChoiceOtherTranslated })),
    ...rs
      .filter((r) => r.secondChoice === "" && r.secondChoiceOtherText)
      .map((r) => ({ text: r.secondChoiceOtherText, tag: "General", translated: r.secondChoiceOtherTranslated })),
  ];

  const quotes: Quote[] = rs
    .filter((r) => r.comment)
    .map((r) => ({ text: r.comment, tag: "General", translated: r.commentTranslated }));

  const used12moAnswered = rs.filter((r) => r.used12mo !== "");
  const payAnswered = rs.filter((r) => r.agreePayMore !== "");
  const missedAnswered = rs.filter((r) => r.missedMoment !== "");

  const headline = {
    missedMomentPct: round(
      missedAnswered.filter((r) => r.missedMoment !== "No").length,
      missedAnswered.length
    ),
    fitPct: round(rs.filter((r) => r.decisionFactors.includes("Fit")).length, total),
    neverUsedPct: round(used12moAnswered.filter((r) => r.used12mo === "No").length, used12moAnswered.length),
    payMorePct: round(
      payAnswered.filter((r) => r.agreePayMore === "Probably" || r.agreePayMore === "Definitely").length,
      payAnswered.length
    ),
  };

  return {
    total,
    demographics,
    habits,
    missedMoment,
    purchase,
    receptiveness,
    whereWantBuy,
    design: { topChoice, topChoiceReasons, noneP },
    designGallery,
    generalDesignComments,
    quotes,
    maxPrice,
    headline,
  };
}
