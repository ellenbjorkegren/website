import Image from "next/image";
import type { DesignComment, DesignItem, Item, Likert, Quote } from "./types";

const light = {
  fill: "#302621",
  track: "rgba(48,38,33,0.10)",
  text: "#302621",
  sub: "#735a4c",
};

const dark = {
  fill: "#eae4d7",
  track: "rgba(234,228,215,0.12)",
  text: "#eae4d7",
  sub: "#9a8d81",
};

export function Eyebrow({ children, dark: isDark }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <span
      className="text-sm tracking-[0.5em] uppercase"
      style={{ color: isDark ? "#9a8d81" : "#735a4c" }}
    >
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  dark: isDark,
  intro,
}: {
  eyebrow: string;
  title: React.ReactNode;
  dark?: boolean;
  intro?: string;
}) {
  return (
    <div className="mb-14 max-w-2xl">
      <Eyebrow dark={isDark}>{eyebrow}</Eyebrow>
      <h2
        className="mt-5 text-[clamp(1.75rem,3.5vw,2.75rem)] font-semibold leading-tight"
        style={{ color: isDark ? "#eae4d7" : "#302621" }}
      >
        {title}
      </h2>
      {intro && (
        <p className="mt-4 text-sm leading-relaxed" style={{ color: isDark ? "#9a8d81" : "#735a4c" }}>
          {intro}
        </p>
      )}
    </div>
  );
}

export function StatTile({
  value,
  label,
  dark: isDark,
}: {
  value: string;
  label: string;
  dark?: boolean;
}) {
  const c = isDark ? dark : light;
  return (
    <div className="flex flex-col gap-2">
      <span className="font-semibold leading-none" style={{ fontSize: "clamp(2.5rem,5vw,4rem)", color: c.text }}>
        {value}
      </span>
      <span className="text-sm leading-snug" style={{ color: c.sub }}>
        {label}
      </span>
    </div>
  );
}

export function EmptyNote({ dark: isDark, children }: { dark?: boolean; children: React.ReactNode }) {
  const c = isDark ? dark : light;
  return (
    <p className="text-sm italic" style={{ color: c.sub }}>
      {children}
    </p>
  );
}

function Select({
  value,
  onChange,
  options,
  dark: isDark,
}: {
  value: string;
  onChange: (v: string) => void;
  options: { value: string; label: string }[];
  dark?: boolean;
}) {
  const c = isDark ? dark : light;
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="text-sm tracking-[0.1em] uppercase px-4 py-2.5 border bg-transparent focus:outline-none appearance-none cursor-pointer"
      style={{ color: c.text, borderColor: isDark ? "rgba(234,228,215,0.25)" : "rgba(48,38,33,0.25)" }}
    >
      {options.map((o) => (
        <option key={o.value} value={o.value} style={{ color: "#302621" }}>
          {o.label}
        </option>
      ))}
    </select>
  );
}

export function FilterBar({
  gender,
  age,
  genderOptions,
  ageOptions,
  onGenderChange,
  onAgeChange,
  onReset,
  matchCount,
  totalCount,
  dark: isDark,
}: {
  gender: string | null;
  age: string | null;
  genderOptions: string[];
  ageOptions: string[];
  onGenderChange: (v: string | null) => void;
  onAgeChange: (v: string | null) => void;
  onReset: () => void;
  matchCount: number;
  totalCount: number;
  dark?: boolean;
}) {
  const c = isDark ? dark : light;
  const filtered = gender !== null || age !== null;
  return (
    <div className="flex flex-wrap items-center gap-4">
      <Select
        dark={isDark}
        value={gender ?? "all"}
        onChange={(v) => onGenderChange(v === "all" ? null : v)}
        options={[{ value: "all", label: "All genders" }, ...genderOptions.map((g) => ({ value: g, label: g }))]}
      />
      <Select
        dark={isDark}
        value={age ?? "all"}
        onChange={(v) => onAgeChange(v === "all" ? null : v)}
        options={[{ value: "all", label: "All ages" }, ...ageOptions.map((a) => ({ value: a, label: a }))]}
      />
      {filtered && (
        <button
          onClick={onReset}
          className="text-sm tracking-[0.2em] uppercase underline underline-offset-4"
          style={{ color: c.sub }}
        >
          Reset
        </button>
      )}
      <span className="text-sm ml-auto" style={{ color: c.sub }}>
        Showing {matchCount} of {totalCount} responses
      </span>
    </div>
  );
}

export function QuoteGrid({ quotes, dark: isDark }: { quotes: Quote[]; dark?: boolean }) {
  const c = isDark ? dark : light;
  const border = isDark ? "rgba(234,228,215,0.12)" : "rgba(48,38,33,0.10)";
  if (quotes.length === 0) return <EmptyNote dark={isDark}>No comments in this segment.</EmptyNote>;
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-px" style={{ backgroundColor: border }}>
      {quotes.map((q, i) => (
        <div
          key={i}
          className="p-8 flex flex-col justify-between gap-6"
          style={{ backgroundColor: isDark ? "#302621" : "#eae4d7" }}
        >
          <p
            className="font-light leading-relaxed"
            style={{ fontSize: "clamp(1.05rem,1.6vw,1.3rem)", color: c.text }}
          >
            &ldquo;{q.text}&rdquo;
          </p>
          <span className="text-sm tracking-[0.2em] uppercase" style={{ color: c.sub }}>
            {q.tag}
            {q.translated && <span> · translated from Swedish</span>}
          </span>
        </div>
      ))}
    </div>
  );
}

export type GalleryDesign = {
  letter: string;
  image: string;
  topCount: number;
  secondCount: number;
  reasons: Item[];
  comments: DesignComment[];
};

export function DesignGallery({
  gallery,
  dark: isDark,
}: {
  gallery: GalleryDesign[];
  dark?: boolean;
}) {
  const c = isDark ? dark : light;
  const border = isDark ? "rgba(234,228,215,0.12)" : "rgba(48,38,33,0.10)";
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-px" style={{ backgroundColor: border }}>
      {gallery.map((g) => (
        <div key={g.letter} className="flex flex-col" style={{ backgroundColor: isDark ? "#302621" : "#eae4d7" }}>
          <div className="relative aspect-[16/10] shrink-0" style={{ backgroundColor: isDark ? "#2a1f1a" : "#eae4d7" }}>
            <Image
              src={g.image}
              alt={`Bear packaging design ${g.letter}`}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
            <span
              className="absolute top-3 left-3 flex items-center justify-center w-7 h-7 text-sm font-semibold"
              style={{ backgroundColor: c.fill, color: isDark ? "#302621" : "#eae4d7" }}
            >
              {g.letter}
            </span>
          </div>
          <div className="p-6 flex flex-col gap-5">
            <p className="text-sm tabular-nums" style={{ color: c.sub }}>
              {g.topCount} picked it as their top choice · {g.secondCount} as their second favorite
            </p>
            {g.reasons.length > 0 ? (
              <BarList items={g.reasons} dark={isDark} compact />
            ) : (
              <EmptyNote dark={isDark}>No one in this segment picked it, so no reasons to show.</EmptyNote>
            )}
            {g.comments.length > 0 && (
              <div className="flex flex-col gap-4 pt-2 border-t" style={{ borderColor: border }}>
                {g.comments.map((cm, i) => (
                  <div key={i}>
                    <p className="text-sm italic leading-relaxed" style={{ color: c.text }}>
                      &ldquo;{cm.text}&rdquo;
                    </p>
                    <p className="mt-1.5 text-sm tracking-[0.15em] uppercase" style={{ color: c.sub }}>
                      {cm.tag}
                      {cm.translated && <span> · translated</span>}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export function DesignBarList({ items, dark: isDark }: { items: DesignItem[]; dark?: boolean }) {
  const c = isDark ? dark : light;
  const max = Math.max(1, ...items.map((i) => i.value));
  return (
    <div className="flex flex-col gap-5">
      {items.map((item) => (
        <div key={item.letter} className="flex items-center gap-4">
          <div className="relative w-14 h-14 shrink-0 overflow-hidden" style={{ backgroundColor: isDark ? "#2a1f1a" : "#eae4d7" }}>
            <Image src={item.image} alt={`Design ${item.letter}`} fill sizes="56px" className="object-cover" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-baseline justify-between gap-4 mb-1.5">
              <span className="text-sm" style={{ color: c.text }}>
                {item.label}
              </span>
              <span className="text-sm tabular-nums shrink-0" style={{ color: c.sub }}>
                {item.pct}%
              </span>
            </div>
            <div className="h-[10px] w-full" style={{ backgroundColor: c.track }}>
              <div
                className="h-full rounded-r-[4px]"
                style={{ width: `${(item.value / max) * 100}%`, backgroundColor: c.fill }}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export function BarList({
  items,
  dark: isDark,
  compact = false,
  multiSelect = false,
}: {
  items: Item[];
  dark?: boolean;
  compact?: boolean;
  multiSelect?: boolean;
}) {
  const c = isDark ? dark : light;
  if (items.length === 0) return <EmptyNote dark={isDark}>No responses in this segment.</EmptyNote>;
  const max = Math.max(1, ...items.map((i) => i.value));
  return (
    <div className={`flex flex-col ${compact ? "gap-3" : "gap-4"}`}>
      {multiSelect && (
        <p className="text-sm italic -mt-1 mb-1" style={{ color: c.sub }}>
          People could pick more than one, so this adds up to over 100%.
        </p>
      )}
      {items.map((item) => (
        <div key={item.label} className="group">
          <div className="flex items-baseline justify-between gap-4 mb-1.5">
            <span className="text-sm" style={{ color: c.text }}>
              {item.label}
            </span>
            <span className="text-sm tabular-nums shrink-0" style={{ color: c.sub }}>
              {item.pct}%
            </span>
          </div>
          <div className={compact ? "h-[7px] w-full" : "h-[10px] w-full"} style={{ backgroundColor: c.track }}>
            <div
              className="h-full rounded-r-[4px] transition-[width] duration-700 ease-out"
              style={{ width: `${(item.value / max) * 100}%`, backgroundColor: c.fill }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export function DivergingLikertLegend({ dark: isDark }: { dark?: boolean }) {
  const c = isDark ? dark : light;
  const neutralColor = isDark ? "rgba(234,228,215,0.35)" : "rgba(48,38,33,0.22)";
  const disagreeColor = isDark ? "#4a3d33" : "#c9bfa9";
  return (
    <div className="flex items-center gap-6 mb-10 text-sm" style={{ color: c.sub }}>
      <span className="flex items-center gap-2">
        <span className="w-3 h-3 shrink-0" style={{ backgroundColor: disagreeColor }} />
        Disagree
      </span>
      <span className="flex items-center gap-2">
        <span className="w-3 h-3 shrink-0" style={{ backgroundColor: neutralColor }} />
        Neutral
      </span>
      <span className="flex items-center gap-2">
        <span className="w-3 h-3 shrink-0" style={{ backgroundColor: c.fill }} />
        Agree
      </span>
    </div>
  );
}

export function DivergingLikert({ data, dark: isDark }: { data: Likert; dark?: boolean }) {
  const c = isDark ? dark : light;
  const neutralColor = isDark ? "rgba(234,228,215,0.35)" : "rgba(48,38,33,0.22)";
  const disagreeColor = isDark ? "#4a3d33" : "#c9bfa9";

  if (data.n === 0) {
    return (
      <div className="mb-10">
        <p className="text-sm mb-3" style={{ color: c.text }}>
          {data.label}
        </p>
        <EmptyNote dark={isDark}>No responses in this segment.</EmptyNote>
      </div>
    );
  }

  const unit = 50 / data.n; // % of container per respondent, container spans -n..+n
  const disagreeW = data.disagree * unit;
  const neutralW = data.neutral * unit;
  const agreeW = data.agree * unit;

  const disagreePct = Math.round((data.disagree / data.n) * 100);
  const neutralPct = Math.round((data.neutral / data.n) * 100);
  const agreePct = Math.round((data.agree / data.n) * 100);

  return (
    <div className="mb-10">
      <p className="text-sm mb-3" style={{ color: c.text }}>
        {data.label}
      </p>
      <div className="relative h-[14px] w-full">
        <div
          className="absolute top-0 h-full rounded-l-[4px]"
          style={{
            width: `${disagreeW}%`,
            right: `${50 + neutralW / 2}%`,
            backgroundColor: disagreeColor,
          }}
        />
        <div
          className="absolute top-0 h-full"
          style={{
            width: `${neutralW}%`,
            left: `${50 - neutralW / 2}%`,
            backgroundColor: neutralColor,
          }}
        />
        <div
          className="absolute top-0 h-full rounded-r-[4px]"
          style={{
            width: `${agreeW}%`,
            left: `${50 + neutralW / 2}%`,
            backgroundColor: c.fill,
          }}
        />
      </div>
      <p className="mt-2 text-sm tabular-nums" style={{ color: c.sub }}>
        {disagreePct}% disagree · {neutralPct}% neutral · {agreePct}% agree
      </p>
    </div>
  );
}
