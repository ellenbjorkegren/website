// Aggregated from survey_results/*.csv — 73 completed responses, Aug 21–23, 2026.
// Percentages are rounded and computed against each question's own respondent count.

export type Item = { label: string; value: number; pct: number };
export type Likert = { label: string; disagree: number; neutral: number; agree: number; n: number };

const items = (n: number, entries: [string, number][]): Item[] =>
  entries.map(([label, value]) => ({ label, value, pct: Math.round((value / n) * 100) }));

export const meta = {
  total: 73,
  dateRange: "21–23 Aug 2026",
  swedenPct: 88,
};

export const headline = {
  missedMomentPct: 81, // wanted a condom, didn't use one
  fitPct: 71, // named "fit" as a top decision factor
  neverUsedPct: 42, // no condom use in past 12 months
  payMorePct: 44, // probably/definitely would pay more for better product & packaging
};

export const demographics = {
  age: items(73, [
    ["Below 23", 2],
    ["23–28", 25],
    ["28–33", 38],
    ["33–38", 5],
    ["38–43", 2],
    ["43+", 1],
  ]),
  gender: items(73, [
    ["Woman", 49],
    ["Man", 24],
  ]),
  relationship: items(73, [
    ["Living with a partner", 27],
    ["Single", 21],
    ["In a relationship", 13],
    ["Married", 6],
    ["Dating casually", 4],
    ["Dating someone", 2],
  ]),
  orientation: items(73, [
    ["Heterosexual", 66],
    ["Bisexual", 5],
    ["Gay / lesbian", 2],
  ]),
  otherCountries: items(9, [
    ["Greece", 3],
    ["Netherlands", 1],
    ["Dominican Republic", 1],
    ["Switzerland", 1],
    ["Spain", 1],
    ["United States", 1],
    ["Syria", 1],
  ]),
};

export const habits = {
  used12mo: items(73, [
    ["No", 31],
    ["Once or twice", 15],
    ["Occasionally", 15],
    ["Frequently", 12],
  ]),
  carryFreq: items(73, [
    ["Never", 41],
    ["Rarely", 16],
    ["Sometimes", 9],
    ["Often", 4],
    ["Always", 3],
  ]),
  homeFreq: items(73, [
    ["Never", 15],
    ["Rarely", 6],
    ["Sometimes", 9],
    ["Usually", 17],
    ["Always", 26],
  ]),
};

export const missedMoment = {
  breakdown: items(73, [
    ["No", 14],
    ["Yes, once or twice", 36],
    ["Yes, several times", 23],
  ]),
  reasons: items(73, [
    ["We didn't want to interrupt the moment", 34],
    ["Neither of us had one", 20],
    ["I didn't think the STI risk was high", 16],
    ["Alcohol or drugs affected the decision", 16],
    ["I felt awkward suggesting it", 15],
    ["We relied on another form of contraception", 11],
    ["My partner didn't want to use one", 9],
    ["Condoms reduce sensation", 9],
  ]),
};

export const purchase = {
  decisionFactors: items(73, [
    ["Fit", 52],
    ["Safety / trust", 51],
    ["Lubrication", 31],
    ["Availability", 27],
    ["Price", 25],
    ["Packaging / design", 12],
    ["Brand", 8],
    ["Discretion", 5],
    ["Sustainability", 5],
  ]),
  brandsUsed: items(73, [
    ["RFSU", 25],
    ["I never buy condoms", 19],
    ["Durex", 14],
    ["I don't remember", 13],
    ["Other", 6],
    ["MR SIZE", 2],
  ]),
  whereBuyNow: items(73, [
    ["Pharmacy", 22],
    ["Supermarket", 22],
    ["Online", 12],
    ["Not applicable", 12],
    ["Other", 7],
    ["Convenience store", 4],
    ["Sex shop", 2],
  ]),
  whoBuys: items(66, [
    ["Me", 26],
    ["My partner", 21],
    ["Both of us", 19],
  ]),
};

export const receptiveness: Likert[] = [
  {
    label: "I'd be more likely to carry condoms with me",
    disagree: 36,
    neutral: 19,
    agree: 18,
    n: 73,
  },
  {
    label: "I'd be more likely to keep condoms accessible at home",
    disagree: 32,
    neutral: 19,
    agree: 22,
    n: 73,
  },
  {
    label: "I'd pay more for a better product & better-designed packaging",
    disagree: 21,
    neutral: 20,
    agree: 32,
    n: 73,
  },
];

export const whereWantBuy = items(73, [
  ["Pharmacy", 55],
  ["Supermarket", 50],
  ["Brand's own website", 37],
  ["Convenience store", 29],
  ["Department store", 19],
  ["Delivery app", 15],
  ["Vending machine", 12],
  ["Hotel room / minibar", 11],
  ["Nightclub / bar", 9],
  ["Restaurant bathroom", 8],
  ["Fashion / concept store", 4],
]);

export const design = {
  topChoice: items(68, [
    ["Design 2", 23],
    ["Design 6", 12],
    ["Design 1", 11],
    ["Design 4", 11],
    ["Design 3", 9],
    ["Design 5", 2],
  ]),
  topChoiceReasons: items(73, [
    ["Looks most stylish", 31],
    ["I like the colours", 28],
    ["I like the logo / typography", 25],
    ["Looks most premium", 19],
    ["Looks highest quality", 19],
    ["Most discreet", 18],
    ["Comfortable leaving it visible at home", 15],
    ["Most distinctive", 7],
    ["Comfortable carrying it", 6],
  ]),
};

export const maxPrice = items(73, [
  ["Less than 129 SEK", 8],
  ["129 SEK", 6],
  ["149 SEK", 23],
  ["169 SEK", 20],
  ["189 SEK", 7],
  ["199 SEK", 7],
  ["219 SEK or more", 2],
]);
