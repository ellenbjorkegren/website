"use client";

import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const specs = [
  { title: "Ultra-thin latex", desc: "0.05mm. You'll feel the difference." },
  { title: "Three sizes", desc: "Classic, Fitted, Large. Try at home, find yours, subscribe." },
  { title: "ISO 4074 certified", desc: "Top-tier quality standards. Non-negotiable." },
];

const features = [
  {
    num: "01",
    title: "Good stuff only",
    desc: "Natural latex, sustainably sourced. No nasties, no compromise. Just a product that's genuinely worth choosing.",
  },
  {
    num: "02",
    title: "It actually fits",
    desc: "Three sizes. Try at home, find yours. A condom that fits properly changes everything — and that's not marketing speak.",
  },
  {
    num: "03",
    title: "Never scramble again",
    desc: "Monthly drop to your door. No pharmacy runs, no 3am panic. Just sorted.",
  },
];

const freqLabels = ["Monthly", "Bimonthly"];
const freqDiscounts = [0, 5];
const qtyOptions = ["12 condoms", "24 condoms", "36 condoms"];
const basePrices = [12, 20, 28];

const onePacks = [
  { name: "Tester",   price: "£4",  qty: "3 condoms",  sub: "One of each size",   desc: "Try Classic, Fitted and Large before committing." },
  { name: "Stash",    price: "£11", qty: "12 condoms", sub: "Your chosen size",    desc: "Stocked up without the subscription." },
  { name: "Bulk",     price: "£20", qty: "24 condoms", sub: "Your chosen size",    desc: "Best per-unit price for a single order." },
];


export default function Home() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {

      // ── Hero BEAR: zooms toward you and fades as you scroll past ──────────
      gsap.to(".bear-hero-text", {
        scale: 2,
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero-section",
          start: "top top",
          end: "bottom top",
          scrub: 1.5,
        },
      });

      gsap.to(".hero-sub-content", {
        y: -80,
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero-section",
          start: "top top",
          end: "55% top",
          scrub: 1,
        },
      });

      // ── Section content: zooms in from slightly small as it enters ────────
      gsap.utils.toArray<Element>(".zoom-in").forEach((el) => {
        gsap.fromTo(
          el,
          { scale: 0.88, y: 40 },
          {
            scale: 1,
            y: 0,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 90%",
              end: "top 30%",
              scrub: 1.8,
            },
          }
        );
      });

      // ── Titles: slide up on enter ─────────────────────────────────────────
      gsap.utils.toArray<Element>(".anim-up").forEach((el) => {
        gsap.from(el, {
          y: 55,
          opacity: 0,
          duration: 1.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            toggleActions: "play none none reverse",
          },
        });
      });

      // ── Cards: stagger up on enter ────────────────────────────────────────
      gsap.utils.toArray<Element>(".card-group").forEach((group) => {
        const cards = (group as Element).querySelectorAll(".anim-card");
        if (!cards.length) return;
        gsap.from(cards, {
          y: 65,
          opacity: 0,
          stagger: 0.13,
          duration: 0.9,
          ease: "power2.out",
          scrollTrigger: {
            trigger: group as Element,
            start: "top 82%",
            toggleActions: "play none none reverse",
          },
        });
      });

      // ── Product visual: rings rotate continuously ──────────────────────────
      gsap.to(".ring-outer-product", {
        rotation: 360,
        duration: 18,
        repeat: -1,
        ease: "none",
        transformOrigin: "center center",
      });
      gsap.to(".ring-inner-product", {
        rotation: -360,
        duration: 12,
        repeat: -1,
        ease: "none",
        transformOrigin: "center center",
      });

      // ── Hero rings: slow drift ────────────────────────────────────────────
      gsap.to(".ring-hero", {
        rotation: 360,
        duration: 70,
        repeat: -1,
        ease: "none",
        transformOrigin: "center center",
      });

    });

    return () => ctx.revert();
  }, []);

  const [showMemberModal, setShowMemberModal] = useState(false);
  const [showTesterModal, setShowTesterModal] = useState(false);
  const [testerMode, setTesterMode] = useState<"all" | "same">("all");
  const [testerSize, setTesterSize] = useState("B4");
  const [step, setStep] = useState(1);
  const [selectedSize, setSelectedSize] = useState("");
  const [freqIndex, setFreqIndex] = useState(0);
  const [qtyIndex, setQtyIndex] = useState(0);

  const discount = freqDiscounts[freqIndex];
  const price = Math.round(basePrices[qtyIndex] * (1 - discount / 100));

  return (
    <div className="bg-[#302621] text-[#eae4d7] min-h-screen font-sans">

      {/* ── Navigation ────────────────────────────────────────────────────── */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 bg-[#302621]/80 backdrop-blur-md border-b border-[#ffffff08]">
        <span className="text-sm font-semibold tracking-[0.4em] uppercase select-none">
          Bear
        </span>
        <div className="hidden md:flex items-center gap-10 text-xs tracking-[0.25em] uppercase text-[#735a4c]">
          {["Mission", "Product", "Subscription"].map((label) => (
            <a
              key={label}
              href={`#${label.toLowerCase()}`}
              className="group relative py-1 hover:text-[#eae4d7] transition-colors duration-300"
            >
              {label}
              <span className="absolute bottom-0 left-0 h-px w-0 bg-[#eae4d7] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={() => setShowMemberModal(true)}
            className="text-xs tracking-[0.2em] uppercase text-[#735a4c] hover:text-[#eae4d7] transition-colors duration-300"
          >
            Already a member?
          </button>
          <a
            href="#subscription"
            className="text-xs tracking-[0.25em] uppercase border border-[#4a3d33] px-5 py-2.5 hover:border-[#9a8d81] hover:text-[#eae4d7] transition-all duration-300"
          >
            Subscribe
          </a>
        </div>
      </nav>

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="hero-section relative flex flex-col items-center justify-center min-h-screen text-center px-8 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="ring-hero absolute w-[700px] h-[700px] rounded-full border border-[#ffffff04]" />
          <div className="absolute w-[500px] h-[500px] rounded-full border border-[#ffffff06]" />
          <div className="absolute w-[300px] h-[300px] rounded-full border border-[#ffffff08]" />
        </div>

        <h1
          className="bear-hero-text font-bold leading-none cursor-default select-none"
          style={{
            fontSize: "clamp(5rem, 22vw, 18rem)",
            letterSpacing: "0.08em",
            color: "#302621",
            textShadow: "-2px -2px 4px rgba(0,0,0,0.7), 2px 2px 3px rgba(255,255,255,0.07)",
          }}
        >
          BEAR
        </h1>

        <div className="hero-sub-content flex flex-col items-center">
          <p className="mt-6 text-xs tracking-[0.5em] uppercase text-[#7a715c]">
            Protection · Fit · Confidence
          </p>
          <p className="mt-6 max-w-sm text-sm text-[#7a715c] leading-relaxed">
            No shame. No excuses. Just a condom worth choosing.
          </p>
          <a
            href="#mission"
            className="group mt-12 inline-flex items-center gap-3 border border-[#4a3d33] px-9 py-4 text-xs tracking-[0.3em] uppercase hover:border-[#9a8d81] transition-all duration-500"
          >
            See Why
            <span className="transition-transform duration-300 group-hover:translate-x-1.5">→</span>
          </a>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
          <span className="text-[10px] tracking-[0.4em] uppercase text-[#735a4c]">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-[#735a4c] to-transparent" />
        </div>
      </section>

      {/* ── Mission ──────────────────────────────────────────────────────── */}
      <section id="mission" className="py-40 px-8 bg-[#eae4d7] border-t border-[#302621]/10">
        <div className="zoom-in max-w-4xl mx-auto">
          <p className="anim-up text-[clamp(1.5rem,3.5vw,2.75rem)] font-light leading-[1.4] text-[#735a4c]">
            Somewhere along the way, condoms became{" "}
            <span className="text-[#302621]">the thing people avoided.</span>
          </p>
          <p className="anim-up mt-16 text-[clamp(1.75rem,4vw,3rem)] font-semibold text-[#302621]">
            We got tired of it.
          </p>
        </div>
      </section>

      {/* ── Why ──────────────────────────────────────────────────────────── */}
      <section className="py-40 px-8">
        <div className="zoom-in max-w-4xl mx-auto space-y-12">
          <p className="anim-up text-[clamp(1.1rem,2.5vw,1.5rem)] font-light leading-relaxed text-[#7a715c]">
            Condoms shouldn&apos;t kill the mood. They shouldn&apos;t be
            something you negotiate your way out of. And they definitely
            shouldn&apos;t feel like a compromise.
          </p>
          <p className="anim-up text-[clamp(1.5rem,3.5vw,2.5rem)] font-semibold leading-[1.3] text-[#eae4d7]">
            What if the problem isn&apos;t condoms — it&apos;s that no
            one&apos;s made them worth choosing?
          </p>
          <p className="anim-up text-[clamp(1.1rem,2.5vw,1.5rem)] font-light leading-relaxed text-[#7a715c]">
            BEAR exists to change that. We&apos;re not here to reinvent the
            product. We&apos;re here to make people actually want to use it.
            Starting with fit, because a condom that fits properly changes
            everything.
          </p>
        </div>
      </section>

      {/* ── Product ──────────────────────────────────────────────────────── */}
      <section id="product" className="py-32 px-8 border-t border-[#ffffff06]">
        <div className="zoom-in max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          {/* Abstract visual */}
          <div className="group relative aspect-square max-w-[380px] mx-auto cursor-default">
            <div className="ring-outer-product absolute inset-0 rounded-full border border-[#735a4c] group-hover:border-[#7a715c] transition-colors duration-700" />
            <div className="ring-inner-product absolute inset-[14%] rounded-full border border-[#7a715c] group-hover:border-[#735a4c] transition-colors duration-700" />
            <div className="absolute inset-[28%] rounded-full bg-[#2a1f1a] transition-colors duration-700 group-hover:bg-[#2f2318]" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-4xl font-bold tracking-[0.35em] text-[#735a4c] group-hover:text-[#7a715c] transition-colors duration-700 select-none">
                BEAR
              </span>
            </div>
            <div className="absolute inset-[20%] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[radial-gradient(circle,#ffffff04,transparent)]" />
          </div>

          {/* Specs */}
          <div>
            <span className="anim-up text-[10px] tracking-[0.5em] uppercase text-[#735a4c]">
              The Product
            </span>
            <h2 className="anim-up mt-5 text-[clamp(1.75rem,3vw,2.75rem)] font-semibold leading-tight">
              It&apos;s better when it fits.
            </h2>
            <p className="anim-up mt-6 text-sm text-[#7a715c] leading-relaxed max-w-sm">
              Find your perfect fit from the privacy of home.
            </p>
            <div className="mt-10">
              {specs.map((item) => (
                <div
                  key={item.title}
                  className="group/row flex items-start justify-between py-6 border-b border-[#3a2e26] hover:border-[#4a3d33] transition-colors duration-300 cursor-default"
                >
                  <div className="pr-8">
                    <h3 className="text-sm font-medium transition-colors duration-300 group-hover/row:text-[#eae4d7]">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-xs text-[#7a715c] leading-relaxed">{item.desc}</p>
                  </div>
                  <span className="shrink-0 text-[#735a4c] text-sm transition-all duration-300 group-hover/row:text-[#7a715c] group-hover/row:translate-x-0.5 mt-0.5">
                    →
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Vision ───────────────────────────────────────────────────────── */}
      <section className="py-40 px-8 bg-[#eae4d7] border-t border-[#302621]/10">
        <div className="zoom-in max-w-4xl mx-auto flex flex-col md:flex-row md:items-start gap-16">
          <div className="md:w-1/3 shrink-0">
            <span className="anim-up text-[10px] tracking-[0.5em] uppercase text-[#735a4c]">
              Our Vision
            </span>
            <h2 className="anim-up mt-5 text-[clamp(1.75rem,3vw,2.5rem)] font-semibold leading-tight text-[#302621]">
              Zero shame.
              <br />
              Zero excuses.
            </h2>
            <p className="anim-up mt-4 text-xs text-[#735a4c] leading-relaxed">
              Inspired by Sweden&apos;s <em>nollvisionen</em> — the goal of zero road deaths.
            </p>
          </div>
          <div className="md:w-2/3 space-y-6 pt-1">
            <p className="anim-up text-[clamp(1rem,2vw,1.25rem)] font-light leading-relaxed text-[#735a4c]">
              We want condoms to feel as normal as deodorant. You don&apos;t
              explain deodorant. You don&apos;t hide it. You just use it.
            </p>
            <p className="anim-up text-[clamp(1rem,2vw,1.25rem)] font-light leading-relaxed text-[#735a4c]">
              Not dirty. Not embarrassing.{" "}
              <span className="text-[#302621]">Just part of the routine.</span>
            </p>
            <p className="anim-up text-[clamp(1rem,2vw,1.25rem)] font-light leading-relaxed text-[#735a4c]">
              The goal? A generation where STDs and unplanned pregnancies are
              the exception — not the risk you just shrug at.
            </p>
          </div>
        </div>
      </section>

      {/* ── Why Bear ─────────────────────────────────────────────────────── */}
      <section className="py-32 px-8 border-t border-[#ffffff06]">
        <div className="max-w-6xl mx-auto">
          <div className="zoom-in text-center mb-20">
            <span className="anim-up text-[10px] tracking-[0.5em] uppercase text-[#735a4c]">
              Why Bear
            </span>
            <h2 className="anim-up mt-5 text-[clamp(1.75rem,3vw,2.75rem)] font-semibold">
              Built different.
            </h2>
          </div>
          <div className="card-group grid grid-cols-1 md:grid-cols-3 gap-px bg-[#3a2e26]">
            {features.map((f) => (
              <div
                key={f.num}
                className="anim-card group relative bg-[#302621] p-10 hover:bg-[#352a1f] transition-colors duration-500 cursor-default overflow-hidden"
              >
                <div className="absolute top-0 left-0 h-px w-0 bg-[#eae4d7] transition-all duration-500 group-hover:w-full" />
                <span className="text-[10px] tracking-[0.4em] text-[#735a4c]">{f.num}</span>
                <h3 className="mt-7 text-base font-medium transition-colors duration-300 group-hover:text-[#eae4d7]">
                  {f.title}
                </h3>
                <p className="mt-4 text-xs text-[#7a715c] leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <a
              href="#fit"
              className="group inline-flex items-center gap-3 border border-[#4a3d33] px-9 py-4 text-xs tracking-[0.3em] uppercase hover:border-[#9a8d81] transition-all duration-500"
            >
              Find your perfect fit
              <span className="transition-transform duration-300 group-hover:translate-x-1.5">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* ── Test it out ──────────────────────────────────────────────────── */}
      <section id="fit" className="py-32 px-8 bg-[#eae4d7] border-t border-[#302621]/10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[10px] tracking-[0.5em] uppercase text-[#735a4c]">Sizing Guide</span>
            <h2 className="mt-5 text-[clamp(1.75rem,3vw,2.75rem)] font-semibold text-[#302621]">Find your perfect fit.</h2>
            <p className="mt-4 text-sm text-[#7a715c] max-w-sm mx-auto leading-relaxed">
              Two measurements. Thirty seconds. A condom that actually fits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div className="space-y-10">
              {[
                { num: "01", title: "Measure length", desc: "When erect, measure from the base to the tip along the top side." },
                { num: "02", title: "Measure girth", desc: "Wrap a flexible tape measure around the widest part of the shaft." },
                { num: "03", title: "Order a tester", desc: "Get one of each size, try them at home, and subscribe to the one that fits." },
              ].map((step) => (
                <div key={step.num} className="flex gap-6">
                  <span className="text-[10px] tracking-[0.4em] text-[#735a4c] shrink-0 pt-1">{step.num}</span>
                  <div>
                    <h3 className="text-sm font-medium text-[#302621]">{step.title}</h3>
                    <p className="mt-1 text-xs text-[#7a715c] leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="border border-[#302621]/10">
              <div className="grid grid-cols-3 border-b border-[#302621]/10">
                {["Size", "Length", "Girth"].map((h) => (
                  <div key={h} className="p-4 text-[10px] tracking-[0.3em] uppercase text-[#735a4c] [&:not(:first-child)]:border-l [&:not(:first-child)]:border-[#302621]/10">{h}</div>
                ))}
              </div>
              {[
                { size: "Fitted",  length: "Up to 16cm", girth: "Up to 11cm" },
                { size: "Classic", length: "16 – 18cm",  girth: "11 – 12.5cm" },
                { size: "Large",   length: "18cm+",      girth: "12.5cm+" },
              ].map((row) => (
                <div key={row.size} className="grid grid-cols-3 border-b border-[#302621]/10 last:border-b-0">
                  <div className="p-4 text-sm font-medium text-[#302621]">{row.size}</div>
                  <div className="p-4 text-xs text-[#7a715c] border-l border-[#302621]/10">{row.length}</div>
                  <div className="p-4 text-xs text-[#7a715c] border-l border-[#302621]/10">{row.girth}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => setShowTesterModal(true)}
              className="group inline-flex items-center gap-3 bg-[#302621] text-[#eae4d7] px-9 py-4 text-xs tracking-[0.3em] uppercase hover:bg-[#3d3028] transition-all duration-300"
            >
              Order your test kit
              <span className="transition-transform duration-300 group-hover:translate-x-1.5">→</span>
            </button>
            <a
              href="#subscription"
              className="group inline-flex items-center gap-3 border border-[#302621]/30 px-9 py-4 text-xs tracking-[0.3em] uppercase text-[#735a4c] hover:border-[#302621] hover:text-[#302621] transition-all duration-300"
            >
              Already know your size? Subscribe
              <span className="transition-transform duration-300 group-hover:translate-x-1.5">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* ── Subscription ─────────────────────────────────────────────────── */}
      <section id="subscription" className="py-32 px-8 bg-[#2a1f1a] border-t border-[#ffffff06]">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[10px] tracking-[0.5em] uppercase text-[#735a4c]">
              Subscription
            </span>
            <h2 className="mt-5 text-[clamp(1.75rem,3vw,2.75rem)] font-semibold">
              Always sorted.
            </h2>
            <p className="mt-4 text-sm text-[#7a715c] max-w-xs mx-auto leading-relaxed">
              To your door. Cancel whenever.
            </p>
          </div>

          <div className="bg-[#eae4d7] text-[#302621] p-10">
            {step === 1 ? (
              /* ── Step 1: Size ── */
              <div className="space-y-8">
                <div>
                  <p className="text-[10px] tracking-[0.4em] uppercase text-[#735a4c] mb-4">Select your size</p>
                  <div className="flex gap-3">
                    {["B3", "B4", "B5"].map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`flex-1 py-3 text-xs tracking-[0.3em] uppercase border transition-all duration-200 ${
                          selectedSize === size
                            ? "bg-[#302621] text-[#eae4d7] border-[#302621]"
                            : "border-[#302621]/20 hover:border-[#302621]/60"
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
                <button
                  onClick={() => { if (selectedSize) setStep(2); }}
                  className={`w-full py-3.5 text-xs tracking-[0.3em] uppercase border transition-all duration-200 flex items-center justify-center gap-3 ${
                    selectedSize
                      ? "border-[#302621] hover:bg-[#302621] hover:text-[#eae4d7]"
                      : "border-[#302621]/20 text-[#302621]/30 cursor-not-allowed"
                  }`}
                >
                  Choose delivery <span>→</span>
                </button>
              </div>
            ) : (
              /* ── Step 2: Frequency + Pack size ── */
              <div className="space-y-8">
                <button
                  onClick={() => setStep(1)}
                  className="flex items-center gap-2 text-[10px] tracking-[0.3em] uppercase text-[#735a4c] hover:text-[#302621] transition-colors duration-200"
                >
                  ← {selectedSize}
                </button>

                <div className="h-px bg-[#302621]/10" />

                <div>
                  <p className="text-[10px] tracking-[0.4em] uppercase text-[#735a4c] mb-4">How often</p>
                  <div className="flex gap-3">
                    {freqLabels.map((label, i) => (
                      <button
                        key={label}
                        onClick={() => setFreqIndex(i)}
                        className={`flex-1 py-3 text-xs tracking-[0.3em] uppercase border transition-all duration-200 ${
                          freqIndex === i
                            ? "bg-[#302621] text-[#eae4d7] border-[#302621]"
                            : "border-[#302621]/20 hover:border-[#302621]/60"
                        }`}
                      >
                        {label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="h-px bg-[#302621]/10" />

                <div>
                  <p className="text-[10px] tracking-[0.4em] uppercase text-[#735a4c] mb-4">Pack size</p>
                  <div className="flex gap-3">
                    {qtyOptions.map((qty, i) => (
                      <button
                        key={qty}
                        onClick={() => setQtyIndex(i)}
                        className={`flex-1 py-3 text-xs tracking-[0.3em] uppercase border transition-all duration-200 ${
                          qtyIndex === i
                            ? "bg-[#302621] text-[#eae4d7] border-[#302621]"
                            : "border-[#302621]/20 hover:border-[#302621]/60"
                        }`}
                      >
                        {qty}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Price + CTA */}
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-baseline gap-3 flex-wrap">
              <span className="text-3xl font-semibold">£{price}</span>
              <span className="text-sm text-[#7a715c]">per delivery · {freqLabels[freqIndex].toLowerCase()}</span>
              {discount > 0 && (
                <span className="text-[10px] tracking-[0.3em] uppercase text-[#735a4c]">Save {discount}%</span>
              )}
            </div>
            <button className="shrink-0 border border-[#eae4d7] px-10 py-4 text-xs tracking-[0.3em] uppercase hover:bg-[#eae4d7] hover:text-[#302621] transition-all duration-300">
              Subscribe Now
            </button>
          </div>

          <p className="mt-6 text-center text-[11px] text-[#4a3d33] tracking-wide">
            No commitment. Pause or cancel at any time.
          </p>
          <div className="mt-4 text-center">
            <a href="#order" className="text-[11px] tracking-wide text-[#4a3d33] hover:text-[#735a4c] transition-colors duration-200 underline underline-offset-4">
              Not ready? Try a one-off order instead →
            </a>
          </div>
        </div>
      </section>

      {/* ── One-time order ────────────────────────────────────────────────── */}
      <section id="order" className="py-32 px-8 border-t border-[#ffffff06]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[10px] tracking-[0.5em] uppercase text-[#735a4c]">One-time order</span>
            <h2 className="mt-5 text-[clamp(1.75rem,3vw,2.75rem)] font-semibold">Commitment issues?</h2>
            <p className="mt-4 text-sm text-[#7a715c] max-w-xs mx-auto leading-relaxed">
              Not ready to subscribe? Order once, no strings attached.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {onePacks.map((pack) => (
              <div key={pack.name} className="p-8 bg-[#eae4d7] text-[#302621]">
                <span className="text-[10px] tracking-[0.4em] uppercase text-[#735a4c]">{pack.name}</span>
                <div className="mt-3 flex items-baseline gap-2">
                  <span className="text-4xl font-semibold">{pack.price}</span>
                </div>
                <div className="my-6 h-px bg-[#302621]/10" />
                <p className="text-sm font-medium">{pack.qty}</p>
                <p className="mt-1 text-xs text-[#7a715c]">{pack.sub}</p>
                <p className="mt-4 text-xs text-[#7a715c] leading-relaxed">{pack.desc}</p>
                <button className="mt-8 w-full py-3.5 text-[10px] tracking-[0.3em] uppercase border border-[#302621] hover:bg-[#302621] hover:text-[#eae4d7] transition-all duration-300">
                  Order Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ────────────────────────────────────────────────────── */}
      <section className="py-40 px-8 border-t border-[#ffffff06] text-center">
        <div className="zoom-in max-w-2xl mx-auto">
          <p className="anim-up text-xs tracking-[0.5em] uppercase text-[#735a4c] mb-8">
            Confident. Reliable. Daring.
          </p>
          <h2 className="anim-up text-[clamp(2.5rem,8vw,6rem)] font-bold tracking-wide leading-[1.05]">
            BEAR
            <br />
            <span className="text-[#735a4c] transition-colors duration-500 hover:text-[#7a715c] cursor-default">
              CONFIDENCE.
            </span>
          </h2>
          <a
            href="#subscription"
            className="group mt-14 inline-flex items-center gap-4 border border-[#4a3d33] px-10 py-5 text-xs tracking-[0.3em] uppercase hover:border-[#9a8d81] transition-all duration-500"
          >
            Subscribe Now
            <span className="transition-transform duration-300 group-hover:translate-x-1.5">→</span>
          </a>
        </div>
      </section>

      {/* ── Footer ───────────────────────────────────────────────────────── */}
      <footer className="py-10 px-8 border-t border-[#3a2e26]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-[#735a4c]">
          <span className="text-xs tracking-[0.5em] uppercase">Bear</span>
          <p className="text-[11px] italic tracking-wide text-[#7a715c]">
            Bear with us. Bear necessities. You can barely feel it.
          </p>
          <div className="flex items-center gap-8 text-[11px] tracking-wider">
            {["Privacy", "Terms", "Contact"].map((link) => (
              <a key={link} href="#" className="hover:text-[#7a715c] transition-colors duration-200">
                {link}
              </a>
            ))}
          </div>
        </div>
      </footer>

      {/* ── Tester modal ─────────────────────────────────────────────────── */}
      {showTesterModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center px-6"
          onClick={() => setShowTesterModal(false)}
        >
          <div className="absolute inset-0 bg-[#302621]/80 backdrop-blur-sm" />
          <div
            className="relative bg-[#eae4d7] text-[#302621] max-w-sm w-full p-10"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowTesterModal(false)}
              className="absolute top-5 right-5 text-[#735a4c] hover:text-[#302621] transition-colors duration-200 text-xs tracking-[0.3em] uppercase"
            >
              Close
            </button>

            <span className="text-[10px] tracking-[0.5em] uppercase text-[#735a4c]">Test Kit</span>
            <h3 className="mt-3 text-xl font-semibold">£4 · 3 condoms</h3>
            <p className="mt-2 text-xs text-[#7a715c] leading-relaxed">Try before you commit. Find out what fits.</p>

            <div className="my-7 h-px bg-[#302621]/10" />

            <p className="text-[10px] tracking-[0.4em] uppercase text-[#735a4c] mb-4">What would you like?</p>
            <div className="flex gap-3 mb-6">
              {(["all", "same"] as const).map((mode) => (
                <button
                  key={mode}
                  onClick={() => setTesterMode(mode)}
                  className={`flex-1 py-3 text-xs tracking-[0.2em] uppercase border transition-all duration-200 ${
                    testerMode === mode
                      ? "bg-[#302621] text-[#eae4d7] border-[#302621]"
                      : "border-[#302621]/20 hover:border-[#302621]/60"
                  }`}
                >
                  {mode === "all" ? "All sizes" : "3 of one size"}
                </button>
              ))}
            </div>

            {testerMode === "all" ? (
              <p className="text-xs text-[#7a715c] leading-relaxed">One B3, one B4, one B5 — try them all and find your fit.</p>
            ) : (
              <div>
                <p className="text-[10px] tracking-[0.4em] uppercase text-[#735a4c] mb-3">Choose size</p>
                <div className="flex gap-3">
                  {["B3", "B4", "B5"].map((size) => (
                    <button
                      key={size}
                      onClick={() => setTesterSize(size)}
                      className={`flex-1 py-3 text-xs tracking-[0.3em] uppercase border transition-all duration-200 ${
                        testerSize === size
                          ? "bg-[#302621] text-[#eae4d7] border-[#302621]"
                          : "border-[#302621]/20 hover:border-[#302621]/60"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <button className="mt-8 w-full py-3.5 text-[10px] tracking-[0.3em] uppercase bg-[#302621] text-[#eae4d7] hover:bg-[#3d3028] transition-all duration-300">
              Order Now · £4
            </button>
          </div>
        </div>
      )}

      {/* ── Member modal ─────────────────────────────────────────────────── */}
      {showMemberModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center px-6"
          onClick={() => setShowMemberModal(false)}
        >
          <div className="absolute inset-0 bg-[#302621]/80 backdrop-blur-sm" />
          <div
            className="relative bg-[#eae4d7] text-[#302621] max-w-sm w-full p-10"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowMemberModal(false)}
              className="absolute top-5 right-5 text-[#735a4c] hover:text-[#302621] transition-colors duration-200 text-xs tracking-[0.3em] uppercase"
            >
              Close
            </button>

            <span className="text-[10px] tracking-[0.5em] uppercase text-[#735a4c]">Your subscription</span>
            <h3 className="mt-3 text-xl font-semibold">Active</h3>

            <div className="my-7 h-px bg-[#302621]/10" />

            <ul className="space-y-3 text-sm">
              <li className="flex justify-between">
                <span className="text-[#735a4c] text-xs tracking-wide">Size</span>
                <span className="font-medium">B4</span>
              </li>
              <li className="flex justify-between">
                <span className="text-[#735a4c] text-xs tracking-wide">Plan</span>
                <span className="font-medium">12 condoms · Monthly</span>
              </li>
              <li className="flex justify-between">
                <span className="text-[#735a4c] text-xs tracking-wide">Price</span>
                <span className="font-medium">£12 / month</span>
              </li>
            </ul>

            <div className="my-7 h-px bg-[#302621]/10" />

            <div className="bg-[#302621]/5 px-5 py-4">
              <p className="text-[10px] tracking-[0.4em] uppercase text-[#735a4c] mb-1">Next shipment</p>
              <p className="text-sm font-medium">15 April 2026</p>
              <p className="mt-0.5 text-xs text-[#7a715c]">Dispatched to your address on file</p>
            </div>

            <div className="mt-8 flex flex-col gap-3">
              <button className="w-full py-3 text-[10px] tracking-[0.3em] uppercase border border-[#302621]/20 text-[#302621] hover:border-[#302621] transition-all duration-200">
                Pause subscription
              </button>
              <button className="w-full py-3 text-[10px] tracking-[0.3em] uppercase text-[#735a4c] hover:text-[#302621] transition-colors duration-200">
                Cancel subscription
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
