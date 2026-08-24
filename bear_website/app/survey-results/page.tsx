import type { Metadata } from "next";
import Link from "next/link";
import {
  meta,
  headline,
  demographics,
  habits,
  missedMoment,
  purchase,
  receptiveness,
  whereWantBuy,
  design,
  maxPrice,
} from "./data";
import {
  Eyebrow,
  SectionHeading,
  StatTile,
  BarList,
  DivergingLikert,
  DivergingLikertLegend,
} from "./components";

export const metadata: Metadata = {
  title: "Survey Results — BEAR",
  robots: { index: false, follow: false },
};

export default function SurveyResultsPage() {
  return (
    <div className="bg-[#302621] text-[#eae4d7] min-h-screen font-sans">
      {/* ── Header ────────────────────────────────────────────────────────── */}
      <header className="px-8 pt-32 pb-24 text-center">
        <Eyebrow dark>Research</Eyebrow>
        <h1 className="mt-6 text-[clamp(2.5rem,7vw,5rem)] font-bold leading-[1.05]">
          WHAT PEOPLE
          <br />
          TOLD US.
        </h1>
        <p className="mt-8 max-w-md mx-auto text-base text-[#9a8d81] leading-relaxed">
          {meta.total} people answered our condom survey between {meta.dateRange}
          {" "}— {meta.swedenPct}% of them based in Sweden. Here is what came back.
        </p>
        <Link
          href="/"
          className="mt-10 inline-block text-sm tracking-[0.25em] uppercase text-[#735a4c] hover:text-[#eae4d7] transition-colors duration-300"
        >
          ← Back to Bear
        </Link>
      </header>

      {/* ── Headline stats ───────────────────────────────────────────────── */}
      <section className="bg-[#eae4d7] py-20 px-8 border-t border-[#302621]/10">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10">
          <StatTile value={`${headline.missedMomentPct}%`} label="Have wanted a condom mid-moment and not had one" />
          <StatTile value={`${headline.fitPct}%`} label="Name fit as a top factor in choosing a condom" />
          <StatTile value={`${headline.neverUsedPct}%`} label="Used no condom at all in the past 12 months" />
          <StatTile value={`${headline.payMorePct}%`} label="Would pay more for better product & packaging" />
        </div>
      </section>

      {/* ── Who we talked to ─────────────────────────────────────────────── */}
      <section className="bg-[#eae4d7] py-24 px-8 border-t border-[#302621]/10">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            eyebrow="Who we talked to"
            title="Mostly women, mostly Sweden, mostly late twenties."
            intro="Skewed toward a young, Swedish, mostly heterosexual audience — worth keeping in mind when reading everything that follows."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div>
              <p className="text-sm tracking-[0.2em] uppercase text-[#735a4c] mb-6">Age</p>
              <BarList items={demographics.age} />
            </div>
            <div>
              <p className="text-sm tracking-[0.2em] uppercase text-[#735a4c] mb-6">Gender</p>
              <BarList items={demographics.gender} />
              <p className="text-sm tracking-[0.2em] uppercase text-[#735a4c] mt-10 mb-6">Orientation</p>
              <BarList items={demographics.orientation} />
            </div>
            <div>
              <p className="text-sm tracking-[0.2em] uppercase text-[#735a4c] mb-6">Relationship status</p>
              <BarList items={demographics.relationship} />
            </div>
          </div>
        </div>
      </section>

      {/* ── Habits today ─────────────────────────────────────────────────── */}
      <section className="bg-[#2a1f1a] py-24 px-8 border-t border-[#302621]/10">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            dark
            eyebrow="Habits today"
            title="Condoms are a sometimes thing."
            intro="Most people don't carry one and don't reach for one often — even though most also keep some at home."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div>
              <p className="text-sm tracking-[0.2em] uppercase text-[#9a8d81] mb-6">Used in the past 12 months</p>
              <BarList items={habits.used12mo} dark />
            </div>
            <div>
              <p className="text-sm tracking-[0.2em] uppercase text-[#9a8d81] mb-6">Carries condoms</p>
              <BarList items={habits.carryFreq} dark />
            </div>
            <div>
              <p className="text-sm tracking-[0.2em] uppercase text-[#9a8d81] mb-6">Keeps condoms at home</p>
              <BarList items={habits.homeFreq} dark />
            </div>
          </div>
        </div>
      </section>

      {/* ── The gap moment ───────────────────────────────────────────────── */}
      <section className="bg-[#eae4d7] py-24 px-8 border-t border-[#302621]/10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-start gap-16">
            <div className="md:w-1/3 shrink-0">
              <Eyebrow>The gap moment</Eyebrow>
              <h2 className="mt-5 text-[clamp(1.75rem,3vw,2.75rem)] font-semibold leading-tight text-[#302621]">
                {headline.missedMomentPct}% have wanted one
                <br />
                and not had one.
              </h2>
              <p className="mt-4 text-sm text-[#735a4c] leading-relaxed">
                Only 14 of 73 people said this has never happened to them. The rest named a real reason it didn&apos;t
                happen in the moment.
              </p>
            </div>
            <div className="md:w-2/3">
              <p className="text-sm tracking-[0.2em] uppercase text-[#735a4c] mb-6">Why it didn&apos;t happen</p>
              <BarList items={missedMoment.reasons} />
            </div>
          </div>
        </div>
      </section>

      {/* ── What matters when choosing ───────────────────────────────────── */}
      <section className="bg-[#2a1f1a] py-24 px-8 border-t border-[#302621]/10">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            dark
            eyebrow="What matters"
            title="Fit and trust beat price and brand."
            intro="Packaging and brand rank low today — but that's before people compared them against a product built around fit and discretion."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
            <div>
              <p className="text-sm tracking-[0.2em] uppercase text-[#9a8d81] mb-6">Top decision factors</p>
              <BarList items={purchase.decisionFactors} dark />
            </div>
            <div>
              <p className="text-sm tracking-[0.2em] uppercase text-[#9a8d81] mb-6">Brands used</p>
              <BarList items={purchase.brandsUsed} dark />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <p className="text-sm tracking-[0.2em] uppercase text-[#9a8d81] mb-6">Where they buy today</p>
              <BarList items={purchase.whereBuyNow} dark />
            </div>
            <div>
              <p className="text-sm tracking-[0.2em] uppercase text-[#9a8d81] mb-6">Who normally buys</p>
              <BarList items={purchase.whoBuys} dark />
            </div>
          </div>
        </div>
      </section>

      {/* ── Would Bear change that ───────────────────────────────────────── */}
      <section className="bg-[#eae4d7] py-24 px-8 border-t border-[#302621]/10">
        <div className="max-w-4xl mx-auto">
          <SectionHeading
            eyebrow="Would a better product change that?"
            title="More people lean toward paying more than carrying more."
            intro="Carrying and home habits are hard to shift — but nearly half would pay more for a product and packaging worth choosing."
          />
          <DivergingLikertLegend />
          {receptiveness.map((r) => (
            <DivergingLikert key={r.label} data={r} />
          ))}
        </div>
      </section>

      {/* ── Where they'd want to buy Bear ────────────────────────────────── */}
      <section className="bg-[#2a1f1a] py-24 px-8 border-t border-[#302621]/10">
        <div className="max-w-3xl mx-auto">
          <SectionHeading
            dark
            eyebrow="Distribution"
            title="Pharmacy and supermarket still win."
            intro="The brand's own website ranks third — ahead of every impulse-buy channel we asked about."
          />
          <BarList items={whereWantBuy} dark />
        </div>
      </section>

      {/* ── Design & pricing ─────────────────────────────────────────────── */}
      <section className="bg-[#eae4d7] py-24 px-8 border-t border-[#302621]/10">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            eyebrow="Design & price"
            title="Style and colour sell it — before quality does."
            intro="Design 2 led every packaging concept we tested. People chose it for how it looks, not for what it promises."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
            <div>
              <p className="text-sm tracking-[0.2em] uppercase text-[#735a4c] mb-6">Most appealing design</p>
              <BarList items={design.topChoice} />
            </div>
            <div>
              <p className="text-sm tracking-[0.2em] uppercase text-[#735a4c] mb-6">Why it won</p>
              <BarList items={design.topChoiceReasons} />
            </div>
          </div>
          <div>
            <p className="text-sm tracking-[0.2em] uppercase text-[#735a4c] mb-6">
              Max price for a pack of 12
            </p>
            <BarList items={maxPrice} />
          </div>
        </div>
      </section>

      {/* ── Footer ───────────────────────────────────────────────────────── */}
      <footer className="py-16 px-8 border-t border-[#3a2e26] text-center">
        <p className="text-sm tracking-[0.3em] uppercase text-[#735a4c]">
          {meta.total} respondents · {meta.dateRange} · Bear Nordic internal research
        </p>
        <Link
          href="/"
          className="mt-6 inline-block text-sm tracking-[0.25em] uppercase text-[#9a8d81] hover:text-[#eae4d7] transition-colors duration-300"
        >
          ← Back to Bear
        </Link>
      </footer>
    </div>
  );
}
