import type { Item, Likert } from "./data";

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

export function BarList({
  items,
  dark: isDark,
  showPct = true,
}: {
  items: Item[];
  dark?: boolean;
  showPct?: boolean;
}) {
  const c = isDark ? dark : light;
  const max = Math.max(...items.map((i) => i.value));
  return (
    <div className="flex flex-col gap-4">
      {items.map((item) => (
        <div key={item.label} className="group">
          <div className="flex items-baseline justify-between gap-4 mb-1.5">
            <span className="text-sm" style={{ color: c.text }}>
              {item.label}
            </span>
            <span className="text-sm tabular-nums shrink-0" style={{ color: c.sub }}>
              {item.value}
              {showPct && <span style={{ color: c.sub }}> · {item.pct}%</span>}
            </span>
          </div>
          <div className="h-[10px] w-full" style={{ backgroundColor: c.track }}>
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
