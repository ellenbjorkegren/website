"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { AGE_OPTIONS, GENDER_OPTIONS, computeDashboard } from "./aggregate";
import type { Respondent } from "./types";
import {
  Eyebrow,
  SectionHeading,
  StatTile,
  BarList,
  DesignGallery,
  DesignBarList,
  DivergingLikert,
  DivergingLikertLegend,
  QuoteGrid,
  FilterBar,
} from "./components";

const DATE_RANGE = "21–23 Aug 2026";

export default function DashboardClient({ respondents }: { respondents: Respondent[] }) {
  const [gender, setGender] = useState<string | null>(null);
  const [age, setAge] = useState<string | null>(null);

  const d = useMemo(() => computeDashboard(respondents, { gender, age }), [respondents, gender, age]);

  const filterBar = (dark?: boolean) => (
    <FilterBar
      dark={dark}
      gender={gender}
      age={age}
      genderOptions={GENDER_OPTIONS}
      ageOptions={AGE_OPTIONS}
      onGenderChange={setGender}
      onAgeChange={setAge}
      onReset={() => {
        setGender(null);
        setAge(null);
      }}
      matchCount={d.total}
      totalCount={respondents.length}
    />
  );

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
          {respondents.length} people answered our condom survey between {DATE_RANGE} — 88% of them based in Sweden.
          Here is what came back.
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
          <StatTile value={`${d.headline.missedMomentPct}%`} label="Have wanted a condom mid-moment and not had one" />
          <StatTile value={`${d.headline.fitPct}%`} label="Name fit as a top factor in choosing a condom" />
          <StatTile value={`${d.headline.neverUsedPct}%`} label="Used no condom at all in the past 12 months" />
          <StatTile value={`${d.headline.payMorePct}%`} label="Would pay more for better product & packaging" />
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
            <div>
              <p className="text-sm tracking-[0.2em] uppercase text-[#735a4c] mb-6">Age</p>
              <BarList items={d.demographics.age} />
            </div>
            <div>
              <p className="text-sm tracking-[0.2em] uppercase text-[#735a4c] mb-6">Gender</p>
              <BarList items={d.demographics.gender} />
              <p className="text-sm tracking-[0.2em] uppercase text-[#735a4c] mt-10 mb-6">Orientation</p>
              <BarList items={d.demographics.orientation} />
            </div>
            <div>
              <p className="text-sm tracking-[0.2em] uppercase text-[#735a4c] mb-6">Relationship status</p>
              <BarList items={d.demographics.relationship} />
            </div>
          </div>
          <div className="border-t border-[#302621]/10 pt-10">
            <p className="text-sm tracking-[0.2em] uppercase text-[#735a4c] mb-5">
              Filter every chart below by gender or age
            </p>
            {filterBar(false)}
          </div>
        </div>
      </section>

      {d.total === 0 ? (
        <section className="bg-[#2a1f1a] py-24 px-8 border-t border-[#302621]/10 text-center">
          <p className="text-base text-[#9a8d81]">No respondents match this filter combination. Try resetting it.</p>
        </section>
      ) : (
        <>
          {/* ── Habits today ─────────────────────────────────────────────── */}
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
                  <BarList items={d.habits.used12mo} dark />
                </div>
                <div>
                  <p className="text-sm tracking-[0.2em] uppercase text-[#9a8d81] mb-6">Carries condoms</p>
                  <BarList items={d.habits.carryFreq} dark />
                </div>
                <div>
                  <p className="text-sm tracking-[0.2em] uppercase text-[#9a8d81] mb-6">Keeps condoms at home</p>
                  <BarList items={d.habits.homeFreq} dark />
                </div>
              </div>
            </div>
          </section>

          {/* ── The gap moment ───────────────────────────────────────────── */}
          <section className="bg-[#eae4d7] py-24 px-8 border-t border-[#302621]/10">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col md:flex-row md:items-start gap-16">
                <div className="md:w-1/3 shrink-0">
                  <Eyebrow>The gap moment</Eyebrow>
                  <h2 className="mt-5 text-[clamp(1.75rem,3vw,2.75rem)] font-semibold leading-tight text-[#302621]">
                    {d.headline.missedMomentPct}% have wanted one and not had one.
                  </h2>
                  <p className="mt-4 text-sm text-[#735a4c] leading-relaxed">
                    The rest named a real reason it didn&apos;t happen in the moment.
                  </p>
                </div>
                <div className="md:w-2/3">
                  <p className="text-sm tracking-[0.2em] uppercase text-[#735a4c] mb-6">Why it didn&apos;t happen</p>
                  <BarList items={d.missedMoment.reasons} multiSelect />
                </div>
              </div>
            </div>
          </section>

          {/* ── What matters when choosing ───────────────────────────────── */}
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
                  <BarList items={d.purchase.decisionFactors} dark multiSelect />
                </div>
                <div>
                  <p className="text-sm tracking-[0.2em] uppercase text-[#9a8d81] mb-6">Brands used</p>
                  <BarList items={d.purchase.brandsUsed} dark multiSelect />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                <div>
                  <p className="text-sm tracking-[0.2em] uppercase text-[#9a8d81] mb-6">Where they buy today</p>
                  <BarList items={d.purchase.whereBuyNow} dark multiSelect />
                </div>
                <div>
                  <p className="text-sm tracking-[0.2em] uppercase text-[#9a8d81] mb-6">Who normally buys</p>
                  <BarList items={d.purchase.whoBuys} dark />
                </div>
              </div>
            </div>
          </section>

          {/* ── Would Bear change that ───────────────────────────────────── */}
          <section className="bg-[#eae4d7] py-24 px-8 border-t border-[#302621]/10">
            <div className="max-w-4xl mx-auto">
              <SectionHeading
                eyebrow="Would a better product change that?"
                title="More people lean toward paying more than carrying more."
                intro="Carrying and home habits are hard to shift — but nearly half would pay more for a product and packaging worth choosing."
              />
              <DivergingLikertLegend />
              {d.receptiveness.map((r) => (
                <DivergingLikert key={r.label} data={r} />
              ))}
            </div>
          </section>

          {/* ── Where they'd want to buy Bear ────────────────────────────── */}
          <section className="bg-[#2a1f1a] py-24 px-8 border-t border-[#302621]/10">
            <div className="max-w-3xl mx-auto">
              <SectionHeading
                dark
                eyebrow="Distribution"
                title="Pharmacy and supermarket still win."
                intro="The brand's own website ranks third — ahead of every impulse-buy channel we asked about."
              />
              <BarList items={d.whereWantBuy} dark multiSelect />
            </div>
          </section>

          {/* ── Design & pricing ─────────────────────────────────────────── */}
          <section className="bg-[#eae4d7] py-24 px-8 border-t border-[#302621]/10">
            <div className="max-w-6xl mx-auto">
              <SectionHeading
                eyebrow="Design & price"
                title="Style and colour sell it — before quality does."
                intro="People chose their favorite for how it looks, not for what it promises."
              />
              <p className="text-sm text-[#735a4c] mb-10">{d.design.noneP}% didn&apos;t pick a favorite design at all.</p>
              <div className="mb-10">
                <p className="text-sm tracking-[0.2em] uppercase text-[#735a4c] mb-6">
                  The six concepts tested — with why people picked each one
                </p>
                <DesignGallery gallery={d.designGallery} />
              </div>
              {d.generalDesignComments.length > 0 && (
                <div className="mb-16 max-w-2xl">
                  <p className="text-sm tracking-[0.2em] uppercase text-[#735a4c] mb-4">
                    Feedback not tied to one design
                  </p>
                  <ul className="space-y-2">
                    {d.generalDesignComments.map((cm, i) => (
                      <li key={i} className="text-sm italic leading-relaxed text-[#735a4c]">
                        &ldquo;{cm.text}&rdquo;
                        {cm.translated && <span className="not-italic"> · translated</span>}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
                <div>
                  <p className="text-sm tracking-[0.2em] uppercase text-[#735a4c] mb-6">Most appealing design</p>
                  <DesignBarList items={d.design.topChoice} />
                </div>
                <div>
                  <p className="text-sm tracking-[0.2em] uppercase text-[#735a4c] mb-6">Why it won, overall</p>
                  <BarList items={d.design.topChoiceReasons} multiSelect />
                </div>
              </div>
              <div>
                <p className="text-sm tracking-[0.2em] uppercase text-[#735a4c] mb-6">
                  Max price for a pack of 12
                </p>
                <BarList items={d.maxPrice} />
              </div>
            </div>
          </section>

          {/* ── In their own words ───────────────────────────────────────── */}
          <section className="bg-[#2a1f1a] py-24 px-8 border-t border-[#302621]/10">
            <div className="max-w-5xl mx-auto">
              <SectionHeading
                dark
                eyebrow="In their own words"
                title="What people told us, unprompted."
                intro="Every free-text comment left on the survey — on quality, design, price, and everything in between."
              />
              <QuoteGrid quotes={d.quotes} dark />
            </div>
          </section>
        </>
      )}

      {/* ── Footer ───────────────────────────────────────────────────────── */}
      <footer className="py-16 px-8 border-t border-[#3a2e26] text-center">
        <p className="text-sm tracking-[0.3em] uppercase text-[#735a4c]">
          {respondents.length} respondents · {DATE_RANGE} · Bear Nordic internal research
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
