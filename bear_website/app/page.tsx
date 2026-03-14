"use client";

import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const productCards = [
  {
    num: "01",
    title: "Ultra-thin latex",
    desc: "0.05mm. Sustainably sourced natural latex. No nasties, no compromise. Just a product that's genuinely worth choosing.",
  },
  {
    num: "02",
    title: "One universal size",
    desc: "Designed to fit comfortably. A condom that fits properly changes everything — and that's not marketing speak.",
  },
  {
    num: "03",
    title: "ISO 4074 certified",
    desc: "Top-tier European safety standards. Electronic pinhole tested. Every batch checked before dispatch.",
  },
];

const freqLabels = ["Monthly", "Bimonthly"];
const freqDiscounts = [0, 5];
const qtyOptions = ["12 condoms", "24 condoms", "36 condoms"];
const basePrices = [12, 20, 28];

const onePacks = [
  { name: "Tester",  price: "£4",  qty: "3 condoms",  desc: "Try before you commit." },
  { name: "Stash",   price: "£11", qty: "12 condoms", desc: "Stocked up without the subscription." },
  { name: "Bulk",    price: "£20", qty: "24 condoms", desc: "Best per-unit price for a single order." },
];

const faqs = [
  {
    q: "What is your delivery time?",
    a: "We aim to dispatch all orders within 1–2 business days. Standard delivery takes 3–5 business days. Express options available at checkout.",
  },
  {
    q: "Are Bear Condoms safe?",
    a: "Yes. All Bear condoms are CE marked and ISO 4074 certified, meeting the highest European safety standards. Every batch is tested before dispatch.",
  },
  {
    q: "How do you quality check your products?",
    a: "Every batch undergoes electronic pinhole testing and air inflation testing in line with ISO 4074 requirements. We work only with certified manufacturing partners.",
  },
  {
    q: "What type of lubricant is best to use with Bear condoms?",
    a: "Use water-based or silicone-based lubricants only. Oil-based lubricants (including coconut oil, petroleum jelly, and body lotion) can degrade latex and should never be used with condoms.",
  },
  {
    q: "What are the condom ingredients?",
    a: "Natural latex, water-based lubricant, and a small amount of cornstarch powder. No spermicide. No parabens.",
  },
  {
    q: "What are the measurements of Bear Condoms?",
    a: "Width: —\nLength: —\nThickness: 0.05mm",
  },
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

      // ── Hero rings: slow drift ────────────────────────────────────────────
      gsap.to(".ring-hero", {
        rotation: 360,
        duration: 70,
        repeat: -1,
        ease: "none",
        transformOrigin: "center center",
      });

      // ── Product image: subtle float in ───────────────────────────────────
      gsap.fromTo(".product-condom-img",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: "#product",
            start: "top 75%",
            end: "top 30%",
            scrub: 1.5,
          },
        }
      );

    });

    return () => ctx.revert();
  }, []);

  const [showMemberModal, setShowMemberModal] = useState(false);
  const [freqIndex, setFreqIndex] = useState(0);
  const [qtyIndex, setQtyIndex] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const discount = freqDiscounts[freqIndex];
  const price = Math.round(basePrices[qtyIndex] * (1 - discount / 100));

  return (
    <div className="bg-[#302621] text-[#eae4d7] min-h-screen font-sans">

      {/* ── Navigation ────────────────────────────────────────────────────── */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center px-8 py-6 bg-[#302621]/80 backdrop-blur-md border-b border-[#ffffff08]">
        <span className="text-sm font-semibold tracking-[0.4em] uppercase select-none shrink-0">
          Bear
        </span>
        <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center gap-10 text-sm tracking-[0.2em] uppercase text-[#735a4c]">
          {[
            { label: "Our Product",      href: "#product" },
            { label: "Vision & Mission", href: "#vision-mission" },
            { label: "Founder Story",    href: "#founder" },
            { label: "FAQ",              href: "#faq" },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="group relative py-1 hover:text-[#eae4d7] transition-colors duration-300"
            >
              {label}
              <span className="absolute bottom-0 left-0 h-px w-0 bg-[#eae4d7] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>
        <div className="ml-auto flex items-center gap-4 shrink-0">
          <button
            onClick={() => setShowMemberModal(true)}
            className="text-sm tracking-[0.15em] uppercase text-[#735a4c] hover:text-[#eae4d7] transition-colors duration-300"
          >
            Already a member?
          </button>
          <a
            href="#subscription"
            className="text-sm tracking-[0.2em] uppercase border border-[#4a3d33] px-5 py-2.5 hover:border-[#9a8d81] hover:text-[#eae4d7] transition-all duration-300"
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
          <p className="mt-6 text-sm tracking-[0.4em] uppercase text-[#7a715c]">
            Protection · Fit · Confidence
          </p>
          <p className="mt-6 max-w-sm text-base text-[#7a715c] leading-relaxed">
            No shame. No excuses. Just a condom worth choosing.
          </p>
          <a
            href="#product"
            className="group mt-12 inline-flex items-center gap-3 border border-[#4a3d33] px-9 py-4 text-sm tracking-[0.25em] uppercase hover:border-[#9a8d81] transition-all duration-500"
          >
            See Why
            <span className="transition-transform duration-300 group-hover:translate-x-1.5">→</span>
          </a>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
          <span className="text-xs tracking-[0.4em] uppercase text-[#735a4c]">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-[#735a4c] to-transparent" />
        </div>
      </section>

      {/* ── Our Product ───────────────────────────────────────────────────── */}
      <section id="product" className="bg-[#eae4d7] py-24 px-8 border-t border-[#302621]/10">
        <div className="max-w-7xl mx-auto">

          {/* Top row: heading + tagline */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
            <h2 className="anim-up text-[clamp(3rem,8vw,8rem)] font-bold leading-[0.9] text-[#302621] tracking-tight">
              OUR<br />PRODUCT
            </h2>
            <p className="anim-up text-sm text-[#735a4c] leading-relaxed tracking-[0.08em] uppercase md:text-right max-w-xs">
              Ultra-thin.<br />
              Sustainably sourced.<br />
              ISO 4074 certified.
            </p>
          </div>

          {/* Center image */}
          <div className="flex justify-center items-center py-10 md:py-16">
            <img
              src="/CONDOM_GLOSSY.png"
              alt="Bear Nordic condom"
              className="product-condom-img w-full max-w-md md:max-w-lg object-contain"
            />
          </div>

          {/* Product cards — same style as Why Bear */}
          <div className="card-group grid grid-cols-1 md:grid-cols-3 gap-px bg-[#302621]/10 mt-8">
            {productCards.map((f) => (
              <div
                key={f.num}
                className="anim-card group relative bg-[#eae4d7] p-10 hover:bg-[#d9cdb8] transition-colors duration-500 cursor-default overflow-hidden border border-[#302621]/10"
              >
                <div className="absolute top-0 left-0 h-px w-0 bg-[#302621] transition-all duration-500 group-hover:w-full" />
                <span className="text-xs tracking-[0.4em] text-[#735a4c]">{f.num}</span>
                <h3 className="mt-7 text-base font-medium text-[#302621] transition-colors duration-300">
                  {f.title}
                </h3>
                <p className="mt-4 text-sm text-[#735a4c] leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── Subscription ─────────────────────────────────────────────────── */}
      <section id="subscription" className="py-32 px-8 bg-[#2a1f1a] border-t border-[#ffffff06]">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs tracking-[0.5em] uppercase text-[#735a4c]">Subscription</span>
            <h2 className="mt-5 text-[clamp(1.75rem,3vw,2.75rem)] font-semibold">
              Always sorted.
            </h2>
            <p className="mt-4 text-base text-[#7a715c] max-w-xs mx-auto leading-relaxed">
              To your door. Cancel whenever.
            </p>
          </div>

          <div className="bg-[#eae4d7] text-[#302621] p-10">
            <div className="space-y-8">
              <div>
                <p className="text-xs tracking-[0.4em] uppercase text-[#735a4c] mb-4">How often</p>
                <div className="flex gap-3">
                  {freqLabels.map((label, i) => (
                    <button
                      key={label}
                      onClick={() => setFreqIndex(i)}
                      className={`flex-1 py-3 text-sm tracking-[0.2em] uppercase border transition-all duration-200 ${
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
                <p className="text-xs tracking-[0.4em] uppercase text-[#735a4c] mb-4">Pack size</p>
                <div className="flex gap-3">
                  {qtyOptions.map((qty, i) => (
                    <button
                      key={qty}
                      onClick={() => setQtyIndex(i)}
                      className={`flex-1 py-3 text-sm tracking-[0.2em] uppercase border transition-all duration-200 ${
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
          </div>

          <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-baseline gap-3 flex-wrap">
              <span className="text-3xl font-semibold">£{price}</span>
              <span className="text-base text-[#7a715c]">per delivery · {freqLabels[freqIndex].toLowerCase()}</span>
              {discount > 0 && (
                <span className="text-xs tracking-[0.3em] uppercase text-[#735a4c]">Save {discount}%</span>
              )}
            </div>
            <button className="shrink-0 border border-[#eae4d7] px-10 py-4 text-sm tracking-[0.25em] uppercase hover:bg-[#eae4d7] hover:text-[#302621] transition-all duration-300">
              Subscribe Now
            </button>
          </div>

          <p className="mt-6 text-center text-sm text-[#4a3d33] tracking-wide">
            No commitment. Pause or cancel at any time.
          </p>
          <div className="mt-4 text-center">
            <a href="#order" className="text-sm tracking-wide text-[#4a3d33] hover:text-[#735a4c] transition-colors duration-200 underline underline-offset-4">
              Not ready? Try a one-off order instead →
            </a>
          </div>
        </div>
      </section>

      {/* ── One-time order ────────────────────────────────────────────────── */}
      <section id="order" className="py-32 px-8 border-t border-[#ffffff06]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs tracking-[0.5em] uppercase text-[#735a4c]">One-time order</span>
            <h2 className="mt-5 text-[clamp(1.75rem,3vw,2.75rem)] font-semibold">Commitment issues?</h2>
            <p className="mt-4 text-base text-[#7a715c] max-w-xs mx-auto leading-relaxed">
              Not ready to subscribe? Order once, no strings attached.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {onePacks.map((pack) => (
              <div key={pack.name} className="p-8 bg-[#eae4d7] text-[#302621]">
                <span className="text-xs tracking-[0.4em] uppercase text-[#735a4c]">{pack.name}</span>
                <div className="mt-3 flex items-baseline gap-2">
                  <span className="text-4xl font-semibold">{pack.price}</span>
                </div>
                <div className="my-6 h-px bg-[#302621]/10" />
                <p className="text-base font-medium">{pack.qty}</p>
                <p className="mt-4 text-sm text-[#7a715c] leading-relaxed">{pack.desc}</p>
                <button className="mt-8 w-full py-3.5 text-sm tracking-[0.25em] uppercase border border-[#302621] hover:bg-[#302621] hover:text-[#eae4d7] transition-all duration-300">
                  Order Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Vision & Mission ─────────────────────────────────────────────── */}
      <section
        id="vision-mission"
        className="relative py-40 px-8 border-t border-[#302621]/10 overflow-hidden"
        style={{
          backgroundImage: "url('/BEAR_MISSION_BG.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[#2a1f1a]/60" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="zoom-in">
            <p className="anim-up text-[clamp(1.5rem,3.5vw,2.75rem)] font-light leading-[1.4] text-[#eae4d7]/80">
              Somewhere along the way, condoms became{" "}
              <span className="text-[#eae4d7]">the thing people avoided.</span>
            </p>
            <p className="anim-up mt-16 text-[clamp(1.75rem,4vw,3rem)] font-semibold text-[#eae4d7]">
              We got tired of it.
            </p>
          </div>

          <div className="my-24 h-px bg-[#eae4d7]/20" />

          <div className="flex flex-col md:flex-row md:items-start gap-16">
            <div className="md:w-1/3 shrink-0">
              <span className="anim-up text-xs tracking-[0.5em] uppercase text-[#eae4d7]/60">Our Vision</span>
              <h2 className="anim-up mt-5 text-[clamp(1.75rem,3vw,2.5rem)] font-semibold leading-tight text-[#eae4d7]">
                Zero shame.<br />Zero excuses.
              </h2>
              <p className="anim-up mt-4 text-sm text-[#eae4d7]/60 leading-relaxed">
                Inspired by Sweden&apos;s <em>nollvisionen</em> — the goal of zero road deaths.
              </p>
            </div>
            <div className="md:w-2/3 space-y-6 pt-1">
              <p className="anim-up text-[clamp(1rem,2vw,1.25rem)] font-light leading-relaxed text-[#eae4d7]/70">
                We want condoms to feel as normal as deodorant. You don&apos;t
                explain deodorant. You don&apos;t hide it. You just use it.
              </p>
              <p className="anim-up text-[clamp(1rem,2vw,1.25rem)] font-light leading-relaxed text-[#eae4d7]/70">
                Not dirty. Not embarrassing.{" "}
                <span className="text-[#eae4d7]">Just part of the routine.</span>
              </p>
              <p className="anim-up text-[clamp(1rem,2vw,1.25rem)] font-light leading-relaxed text-[#eae4d7]/70">
                The goal? A generation where STDs and unplanned pregnancies are
                the exception — not the risk you just shrug at.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Founder Story ────────────────────────────────────────────────── */}
      <section id="founder" className="py-40 px-8 border-t border-[#ffffff06]">
        <div className="max-w-4xl mx-auto">
          <div className="zoom-in">
            <span className="anim-up text-xs tracking-[0.5em] uppercase text-[#735a4c]">Founder Story</span>
            <h2 className="anim-up mt-5 text-[clamp(1.75rem,3vw,2.75rem)] font-semibold leading-tight">
              Built from frustration.<br />
              <span className="text-[#735a4c]">Driven by conviction.</span>
            </h2>
            <div className="mt-16 space-y-6">
              <p className="anim-up text-[clamp(1rem,2vw,1.25rem)] font-light leading-relaxed text-[#7a715c]">
                [Founder story coming soon.]
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <section id="faq" className="py-32 px-8 bg-[#eae4d7] border-t border-[#302621]/10">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs tracking-[0.5em] uppercase text-[#735a4c]">FAQ</span>
            <h2 className="mt-5 text-[clamp(1.75rem,3vw,2.75rem)] font-semibold text-[#302621]">
              Questions answered.
            </h2>
          </div>
          <div className="divide-y divide-[#302621]/10">
            {faqs.map((item, i) => (
              <div key={i} className="py-6">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-start justify-between gap-6 text-left group"
                >
                  <span className="text-base font-medium text-[#302621] group-hover:text-[#735a4c] transition-colors duration-200">
                    {item.q}
                  </span>
                  <span
                    className="shrink-0 text-[#735a4c] text-base mt-0.5 transition-transform duration-300"
                    style={{ transform: openFaq === i ? "rotate(45deg)" : "rotate(0deg)" }}
                  >
                    +
                  </span>
                </button>
                {openFaq === i && (
                  <p className="mt-4 text-sm text-[#7a715c] leading-relaxed whitespace-pre-line">
                    {item.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ────────────────────────────────────────────────────── */}
      <section className="py-40 px-8 border-t border-[#ffffff06] text-center">
        <div className="zoom-in max-w-2xl mx-auto">
          <p className="anim-up text-sm tracking-[0.5em] uppercase text-[#735a4c] mb-8">
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
            className="group mt-14 inline-flex items-center gap-4 border border-[#4a3d33] px-10 py-5 text-sm tracking-[0.25em] uppercase hover:border-[#9a8d81] transition-all duration-500"
          >
            Subscribe Now
            <span className="transition-transform duration-300 group-hover:translate-x-1.5">→</span>
          </a>
        </div>
      </section>

      {/* ── Footer ───────────────────────────────────────────────────────── */}
      <footer className="py-10 px-8 border-t border-[#3a2e26]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-[#735a4c]">
          <span className="text-sm tracking-[0.5em] uppercase">Bear</span>
          <p className="text-sm italic tracking-wide text-[#7a715c]">
            Bear with us. Bear necessities. You can barely feel it.
          </p>
          <div className="flex items-center gap-8 text-sm tracking-wider">
            {["Privacy", "Terms", "Contact"].map((link) => (
              <a key={link} href="#" className="hover:text-[#7a715c] transition-colors duration-200">
                {link}
              </a>
            ))}
          </div>
        </div>
      </footer>

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
              className="absolute top-5 right-5 text-[#735a4c] hover:text-[#302621] transition-colors duration-200 text-sm tracking-[0.25em] uppercase"
            >
              Close
            </button>
            <span className="text-xs tracking-[0.5em] uppercase text-[#735a4c]">Your subscription</span>
            <h3 className="mt-3 text-xl font-semibold">Active</h3>
            <div className="my-7 h-px bg-[#302621]/10" />
            <ul className="space-y-3">
              <li className="flex justify-between">
                <span className="text-[#735a4c] text-sm tracking-wide">Plan</span>
                <span className="text-sm font-medium">12 condoms · Monthly</span>
              </li>
              <li className="flex justify-between">
                <span className="text-[#735a4c] text-sm tracking-wide">Price</span>
                <span className="text-sm font-medium">£12 / month</span>
              </li>
            </ul>
            <div className="my-7 h-px bg-[#302621]/10" />
            <div className="bg-[#302621]/5 px-5 py-4">
              <p className="text-xs tracking-[0.4em] uppercase text-[#735a4c] mb-1">Next shipment</p>
              <p className="text-base font-medium">15 April 2026</p>
              <p className="mt-0.5 text-sm text-[#7a715c]">Dispatched to your address on file</p>
            </div>
            <div className="mt-8 flex flex-col gap-3">
              <button className="w-full py-3 text-sm tracking-[0.25em] uppercase border border-[#302621]/20 text-[#302621] hover:border-[#302621] transition-all duration-200">
                Pause subscription
              </button>
              <button className="w-full py-3 text-sm tracking-[0.25em] uppercase text-[#735a4c] hover:text-[#302621] transition-colors duration-200">
                Cancel subscription
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
