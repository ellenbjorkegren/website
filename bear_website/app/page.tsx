"use client";

import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const productCards = [
  {
    num: "01",
    title: "Comfortable Fit",
    desc: "A shape that fits all. A condom that feels like it's barely there.",
  },
  {
    num: "02",
    title: "Discreet Packaging",
    desc: "Bear Brown — discreet, minimalistic and stylish. Innovative packaging for every occasion.",
  },
  {
    num: "03",
    title: "Premium Quality",
    desc: "Designed to the highest standards. No compromises — because what you choose matters.",
  },
];

const freqLabels = ["Monthly", "Bimonthly"];
const freqDiscounts = [0, 5];
const qtyOptions = ["12 condoms", "24 condoms", "36 condoms"];
const basePrices = [12, 20, 28];

const onePacks = [
  { name: "On the Go",             price: "£4",  qty: "4 condoms",  desc: "Bring on an adventure." },
  { name: "Bring on an Adventure", price: "£11", qty: "12 condoms", desc: "Always available, wherever you are." },
  { name: "Stock Up at Home",      price: "£20", qty: "36 condoms", desc: "ALLTID REDO — always prepared." },
];

const faqs = [
  {
    q: "Are Bear Condoms safe?",
    a: "Yes. Condoms are a reliable protection against pregnancy and sexually transmitted infections. Condoms as a contraceptive are 98% effective when used correctly. Bear is designed to the highest quality standards — because what you choose matters.",
  },
  {
    q: "What makes Bear high quality?",
    a: "Bear is built around premium natural latex, a comfortable shape that fits all, and discreet minimalist packaging. We are committed to producing a condom that is genuinely worth choosing — no compromises.",
  },
  {
    q: "What type of lubricant is best to use with Bear Condoms?",
    a: "Make sure to use a water- or silicone-based lubricant with Bear Condoms. Do not use oil-based lubricant, as it can damage latex and cause the condoms to break.",
  },
  {
    q: "How do I use a condom correctly?",
    a: "1. Check the expiry date on the packaging before use.\n2. Open the packaging carefully — do not use teeth or sharp objects.\n3. Make sure the condom is the right way up before applying.\n4. Pinch the tip of the condom to remove air and place it on the head of an erect penis.\n5. Roll the condom all the way down to the base.\n6. After use, hold the base of the condom while withdrawing, wrap it in tissue and dispose of it in the bin — never flush condoms down the toilet.\n7. Use a new condom for every act of sex.",
  },
  {
    q: "How should I store Bear Condoms?",
    a: "Store Bear Condoms in a cool, dry place away from direct sunlight and sharp objects. Avoid storing them in wallets or back pockets for extended periods, as heat and friction can damage the latex.",
  },
  {
    q: "What is your delivery time?",
    a: "See our Shipping & Returns page for full delivery information.",
  },
  {
    q: "Where are Bear Condoms made?",
    a: "Bear Condoms are designed in Sweden.",
  },
  {
    q: "What are the measurements of Bear Condoms?",
    a: "Width: —\nLength: —\nThickness: 0.05mm",
  },
];

const sizeMap = [
  { label: "RFSU Profil", bear: "N4" },
  { label: "RFSU Grande", bear: "N5" },
  { label: "RFSU Beyond Thin", bear: "N4" },
];

function SizeTranslator() {
  const [selected, setSelected] = useState<number | null>(null);
  return (
    <div className="flex flex-col items-center gap-4">
      <select
        className="max-w-xs w-64 bg-[#eae4d7] border border-[#302621]/20 text-[#302621] text-sm tracking-[0.1em] px-4 py-3 focus:outline-none focus:border-[#302621] transition-colors duration-200 appearance-none cursor-pointer"
        value={selected ?? ""}
        onChange={(e) => setSelected(e.target.value === "" ? null : Number(e.target.value))}
      >
        <option value="" disabled>Select your current condom</option>
        {sizeMap.map((s, i) => (
          <option key={s.label} value={i}>{s.label}</option>
        ))}
      </select>
      {selected !== null && (
        <p className="text-sm tracking-[0.2em] text-[#302621]">
          Your Bear size: <span className="font-semibold">{sizeMap[selected].bear}</span>
        </p>
      )}
    </div>
  );
}

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


    });

    return () => ctx.revert();
  }, []);

  const [showMemberModal, setShowMemberModal] = useState(false);
  const [freqIndex, setFreqIndex] = useState(0);
  const [qtyIndex, setQtyIndex] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [showOrderModal, setShowOrderModal] = useState(false);
  const [orderTab, setOrderTab] = useState(0);
  const [showNewsletterModal, setShowNewsletterModal] = useState(false);
  const [nlFirstName, setNlFirstName] = useState("");
  const [nlEmail, setNlEmail] = useState("");
  const [nlStatus, setNlStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const discount = freqDiscounts[freqIndex];
  const price = Math.round(basePrices[qtyIndex] * (1 - discount / 100));

  async function handleNewsletterSubmit(e: React.FormEvent) {
    e.preventDefault();
    setNlStatus("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstName: nlFirstName, email: nlEmail }),
      });
      if (!res.ok) throw new Error();
      setNlStatus("success");
      setNlFirstName("");
      setNlEmail("");
    } catch {
      setNlStatus("error");
    }
  }

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
            { label: "Our Story",         href: "#founder" },
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
        <div className="ml-auto shrink-0">
          <button
            onClick={() => { setShowNewsletterModal(true); setNlStatus("idle"); }}
            className="text-sm tracking-[0.2em] uppercase border border-[#4a3d33] px-5 py-2.5 hover:border-[#9a8d81] hover:text-[#eae4d7] transition-all duration-300"
          >
            Newsletter
          </button>
        </div>
      </nav>

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="hero-section relative flex flex-col items-center justify-center min-h-screen text-center px-8 overflow-hidden">
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
            Comfortable Fit · Discreet Packaging · Always Available
          </p>
          <p className="mt-6 max-w-sm text-base text-[#7a715c] leading-relaxed">
            Nordic minimalism. Swedish safety.
          </p>
          <p className="mt-10 text-xs tracking-[0.5em] uppercase text-[#735a4c]">
            Coming Soon
          </p>
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
              A Nordic<br />Condom Company
            </p>
          </div>

          {/* Pack sizes */}
          <div className="flex flex-col justify-center items-center py-8 text-center mb-16">
            <p className="text-[clamp(1rem,2vw,1.2rem)] font-light text-[#735a4c] max-w-md leading-relaxed">
              A condom designed to be comfortable, discreet, and always within reach. Packaging for every occasion.
            </p>
            <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-6xl">
              {[
                { src: "/7.png", label: "On the Go · 4 condoms" },
                { src: "/8.png", label: "Bring on an Adventure · 12 condoms" },
                { src: "/9.png", label: "Stock Up at Home · 36 condoms" },
              ].map((pack) => (
                <div key={pack.src} className="flex flex-col">
                  <img src={pack.src} alt={pack.label} className="w-full aspect-square object-cover" />
                </div>
              ))}
            </div>
            <p className="mt-8 text-xs tracking-[0.3em] uppercase text-[#735a4c]">
              Available as a subscription or one-time order at launch
            </p>
          </div>

          {/* Size selector */}
          <div className="mb-16">
            <div className="max-w-2xl mx-auto mb-14 text-center">
              <p className="text-[clamp(1.1rem,2.5vw,1.5rem)] font-light text-[#302621] leading-relaxed mb-6">
                We tested so you don&apos;t have to.
              </p>
              <p className="text-sm text-[#735a4c] leading-relaxed">
                Bear condoms have a flared fit — snug at the base, wider at the top — for a more natural and comfortable feel. Two sizes, chosen to fit most. The base ring is kept deliberately thin, so it holds securely without feeling restrictive. Premium latex that stays in place without getting in the way. The kind of protection you stop thinking about.
              </p>
            </div>
            <p className="text-center text-sm tracking-[0.3em] uppercase text-[#735a4c] mb-10">
              Choose your size for a perfect fit
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#302621]/10 max-w-2xl mx-auto">
              {[
                { size: "N4", width: "53 mm" },
                { size: "N5", width: "56 mm" },
              ].map((s) => (
                <div
                  key={s.size}
                  className="group relative bg-[#eae4d7] hover:bg-[#d9cdb8] transition-colors duration-500 p-12 flex flex-col items-center text-center cursor-default overflow-hidden border border-[#302621]/10"
                >
                  <div className="absolute top-0 left-0 h-px w-0 bg-[#302621] transition-all duration-500 group-hover:w-full" />
                  <span className="leading-none text-[#302621]" style={{ fontSize: "clamp(2.5rem,5vw,4rem)", letterSpacing: "0.08em", fontWeight: 400 }}>BEAR {s.size}</span>
                  <div className="mt-6 space-y-1 text-sm tracking-[0.2em] uppercase text-[#735a4c]">
                    <p>Width: {s.width}</p>
                    <p>Length: 190 mm</p>
                    <p>Flared</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        <div className="max-w-2xl mx-auto mt-20 text-center border-t border-[#302621]/10 pt-16 pb-8">
          <div className="mb-10">
            <p className="text-xs tracking-[0.3em] uppercase text-[#735a4c] mb-4">Not sure about your size?</p>
            <button
              onClick={() => { setShowOrderModal(true); setOrderTab(1); }}
              className="text-sm tracking-[0.2em] uppercase border border-[#302621]/30 px-8 py-3 text-[#302621] hover:border-[#302621] transition-all duration-300"
            >
              Find Your Perfect Fit
            </button>
          </div>
          <p className="text-sm text-[#735a4c] leading-relaxed mb-6">
            Already know your size in another condom?<br />We&apos;ll translate it to Bear.
          </p>
          <SizeTranslator />
        </div>

      </section>

      {/* ── Subscriptions ────────────────────────────────────────────────── */}
      <section className="bg-[#2a1f1a] py-24 px-8 border-t border-[#302621]/10">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-8">
          <div>
            <span className="text-xs tracking-[0.5em] uppercase text-[#735a4c]">Subscriptions</span>
            <h2 className="mt-4 text-[clamp(2rem,5vw,3.5rem)] font-light leading-tight text-[#eae4d7]">
              Protection<br />Delivered
            </h2>
          </div>
          <p className="text-sm text-[#7a715c] leading-relaxed max-w-md">
            Subscribe and get Bear condoms delivered straight to your door — monthly or bimonthly. 12 condoms per delivery, so you&apos;re always stocked without thinking about it. Pause anytime.
          </p>
          <div className="flex flex-col items-center gap-8">
            <button
              onClick={() => { setShowOrderModal(true); setOrderTab(0); }}
              className="text-sm tracking-[0.2em] uppercase border border-[#735a4c] px-8 py-3 text-[#eae4d7] hover:border-[#eae4d7] transition-all duration-300"
            >
              Subscription Coming Soon
            </button>
            <div className="flex flex-col items-center gap-4">
              <p className="text-sm text-[#7a715c]">Commitment Issues?</p>
              <button
                onClick={() => { setShowOrderModal(true); setOrderTab(1); }}
                className="text-sm tracking-[0.2em] uppercase border border-[#735a4c] px-8 py-3 text-[#eae4d7] hover:border-[#eae4d7] transition-all duration-300"
              >
                Try Us Out First
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Vision & Mission ─────────────────────────────────────────────── */}
      <section id="vision-mission" className="border-t border-[#302621]/10">

        {/* Vision copy */}
        <div className="relative py-40 px-8 overflow-hidden bg-[#2a1f1a]">
          <div />
          <div className="relative z-10 max-w-4xl mx-auto">
            <div className="zoom-in">
              <p className="anim-up text-[clamp(1.5rem,3.5vw,2.75rem)] font-light leading-[1.4] text-[#eae4d7]/80">
                We noticed that protection had become{" "}
                <span className="text-[#eae4d7]">an afterthought.</span>
              </p>
              <p className="anim-up mt-16 text-[clamp(1.75rem,4vw,3rem)] font-semibold text-[#eae4d7]">
                We decided to change that.
              </p>
            </div>

            <div className="my-24 h-px bg-[#eae4d7]/20" />

            <div className="flex flex-col md:flex-row md:items-start gap-16">
              <div className="md:w-1/3 shrink-0">
                <span className="anim-up text-xs tracking-[0.5em] uppercase text-[#eae4d7]/60">Our Vision</span>
                <h2 className="anim-up mt-5 text-[clamp(1.75rem,3vw,2.5rem)] font-semibold leading-tight text-[#eae4d7]">
                  By women,<br />for men.
                </h2>
                <p className="anim-up mt-4 text-sm text-[#eae4d7]/60 leading-relaxed">
                  Designed in Sweden — where minimalism is a way of life and safety is never compromised.
                </p>
              </div>
              <div className="md:w-2/3 space-y-6 pt-1">
                <p className="anim-up text-[clamp(1rem,2vw,1.25rem)] font-light leading-relaxed text-[#eae4d7]/70">
                  Clinically packaged, awkwardly purchased, rarely talked about. Protection had lost its place in everyday life.
                </p>
                <p className="anim-up text-[clamp(1rem,2vw,1.25rem)] font-light leading-relaxed text-[#eae4d7]/70">
                  Bear is our answer. A condom that fits the life you&apos;re already living —{" "}
                  <span className="text-[#eae4d7]">not one that interrupts it.</span>
                </p>
                <p className="anim-up text-[clamp(1rem,2vw,1.25rem)] font-light leading-relaxed text-[#eae4d7]/70">
                  Minimalist by design. Confident by nature. Built for people who take care of themselves and the people they&apos;re with.
                </p>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* ── Founder Story ────────────────────────────────────────────────── */}
      <section id="founder" className="py-40 px-8 border-t border-[#ffffff06]">
        <div className="max-w-4xl mx-auto">
          <div className="zoom-in">
            <span className="anim-up text-xs tracking-[0.5em] uppercase text-[#735a4c]">Our Story</span>
            <h2 className="anim-up mt-5 text-[clamp(1.75rem,3vw,2.75rem)] font-semibold leading-tight">
              A family company<br />
              <span className="text-[#735a4c]">driven by conviction.</span>
            </h2>
            <div className="mt-16 space-y-6">
              <p className="anim-up text-[clamp(1rem,2vw,1.25rem)] font-light leading-relaxed text-[#7a715c]">
                Four cousins. One shared frustration. A belief that the right product, presented the right way, could genuinely change behaviour — and make protection something people are proud to choose.
              </p>
              <p className="anim-up text-[clamp(1rem,2vw,1.25rem)] font-light leading-relaxed text-[#7a715c]">
                We wanted to be a contrast to the manosphere. A different kind of masculinity — one that is confident, caring, and switched on. Men who look after themselves and the people they&apos;re with.
              </p>
              <p className="anim-up text-[clamp(1rem,2vw,1.25rem)] font-light leading-relaxed text-[#7a715c]">
                Because protection shouldn&apos;t be something you tolerate.{" "}
                <span className="text-[#eae4d7]">It should be something you want.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Join our Journey ─────────────────────────────────────────────── */}
      <section className="py-40 px-8 bg-[#2a1f1a] border-t border-[#ffffff06] text-center">
        <div className="zoom-in max-w-3xl mx-auto">
          <span className="anim-up text-xs tracking-[0.5em] uppercase text-[#735a4c]">Follow along</span>
          <h2 className="anim-up mt-6 text-[clamp(2.5rem,7vw,5.5rem)] font-bold leading-[1.05] text-[#eae4d7]">
            JOIN OUR<br />JOURNEY
          </h2>
          <p className="anim-up mt-8 text-base text-[#7a715c] max-w-sm mx-auto leading-relaxed">
            We&apos;re building something. Come along for the ride — behind the scenes, updates, and the full Bear story.
          </p>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { label: "Instagram", handle: "@bearnordic_official", href: "https://www.instagram.com/bearnordic_official/" },
              { label: "TikTok",    handle: "@bearnordic_official", href: "https://www.tiktok.com/@bearnordic_official?lang=en-GB" },
              { label: "Facebook",  handle: "Bear Nordic",          href: "https://www.facebook.com/profile.php?id=61588307767398" },
            ].map(({ label, handle, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-4 border border-[#4a3d33] px-8 py-10 hover:border-[#9a8d81] hover:bg-[#302621]/40 transition-all duration-400"
              >
                <span className="text-xs tracking-[0.5em] uppercase text-[#735a4c] group-hover:text-[#9a8d81] transition-colors duration-300">
                  {label}
                </span>
                <span className="text-xl font-semibold text-[#eae4d7]">{handle}</span>
                <span className="text-xs tracking-[0.3em] uppercase text-[#735a4c] group-hover:translate-x-1 transition-transform duration-300">
                  Follow →
                </span>
              </a>
            ))}
          </div>

          <div className="mt-16 border-t border-[#ffffff08] pt-16">
            <p className="anim-up text-sm tracking-[0.4em] uppercase text-[#735a4c] mb-6">Newsletter</p>
            <p className="anim-up text-base text-[#7a715c] max-w-xs mx-auto leading-relaxed mb-8">
              Be the first to know when we launch. No spam — just Bear.
            </p>
            <button
              onClick={() => { setShowNewsletterModal(true); setNlStatus("idle"); }}
              className="border border-[#4a3d33] px-10 py-4 text-sm tracking-[0.25em] uppercase hover:border-[#9a8d81] hover:text-[#eae4d7] transition-all duration-500"
            >
              Subscribe to our Newsletter
            </button>
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
          <h2 className="anim-up text-[clamp(2.5rem,8vw,6rem)] font-bold tracking-wide leading-[1.05] text-[#eae4d7]">
            BEAR<br />CONDOMS COMING SOON.
          </h2>
        </div>
      </section>

      {/* ── Footer ───────────────────────────────────────────────────────── */}
      <footer className="py-10 px-8 border-t border-[#3a2e26]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-[#735a4c]">
          <span className="text-sm tracking-[0.5em] uppercase">Bear — A Nordic Condom Company</span>
          <div className="flex items-center gap-8 text-sm tracking-wider">
            {["Privacy", "Terms", "Contact"].map((link) => (
              <a key={link} href="#" className="hover:text-[#7a715c] transition-colors duration-200">
                {link}
              </a>
            ))}
          </div>
        </div>
      </footer>

      {/* ── Newsletter modal ─────────────────────────────────────────────── */}
      {showNewsletterModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center px-6"
          onClick={() => setShowNewsletterModal(false)}
        >
          <div className="absolute inset-0 bg-[#302621]/80 backdrop-blur-sm" />
          <div
            className="relative bg-[#eae4d7] text-[#302621] max-w-sm w-full p-10"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowNewsletterModal(false)}
              className="absolute top-5 right-5 text-[#735a4c] hover:text-[#302621] transition-colors duration-200 text-sm tracking-[0.25em] uppercase"
            >
              Close
            </button>
            {nlStatus === "success" ? (
              <div className="text-center py-6">
                <p className="text-xs tracking-[0.5em] uppercase text-[#735a4c] mb-3">You&apos;re in.</p>
                <p className="text-base font-medium">Thanks for signing up.<br />We&apos;ll be in touch.</p>
              </div>
            ) : (
              <>
                <span className="text-xs tracking-[0.5em] uppercase text-[#735a4c]">Newsletter</span>
                <h3 className="mt-3 text-xl font-semibold">Stay in the loop.</h3>
                <p className="mt-2 text-sm text-[#7a715c] leading-relaxed">Be the first to know when Bear launches.</p>
                <form onSubmit={handleNewsletterSubmit} className="mt-8 space-y-4">
                  <input
                    type="text"
                    placeholder="First name"
                    value={nlFirstName}
                    onChange={(e) => setNlFirstName(e.target.value)}
                    required
                    className="w-full border border-[#302621]/20 bg-transparent px-4 py-3 text-sm placeholder-[#735a4c] focus:outline-none focus:border-[#302621] transition-colors duration-200"
                  />
                  <input
                    type="email"
                    placeholder="Email address"
                    value={nlEmail}
                    onChange={(e) => setNlEmail(e.target.value)}
                    required
                    className="w-full border border-[#302621]/20 bg-transparent px-4 py-3 text-sm placeholder-[#735a4c] focus:outline-none focus:border-[#302621] transition-colors duration-200"
                  />
                  {nlStatus === "error" && (
                    <p className="text-xs text-red-600">Something went wrong. Please try again.</p>
                  )}
                  <button
                    type="submit"
                    disabled={nlStatus === "loading"}
                    className="w-full py-3.5 text-sm tracking-[0.25em] uppercase bg-[#302621] text-[#eae4d7] hover:bg-[#4a3d33] transition-colors duration-300 disabled:opacity-50"
                  >
                    {nlStatus === "loading" ? "Submitting…" : "Subscribe"}
                  </button>
                </form>
              </>
            )}
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

      {/* ── Order Modal ──────────────────────────────────────────────────── */}
      {showOrderModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#302621]/80 backdrop-blur-sm px-4"
          onClick={() => setShowOrderModal(false)}
        >
          <div
            className="bg-[#eae4d7] text-[#302621] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Tabs */}
            <div className="grid grid-cols-3 border-b border-[#302621]/10">
              {["Subscriptions", "One Time Orders", "Other Products"].map((tab, i) => (
                <button
                  key={tab}
                  onClick={() => setOrderTab(i)}
                  className={`py-5 text-xs tracking-[0.2em] uppercase transition-colors duration-200 ${
                    orderTab === i
                      ? "bg-[#302621] text-[#eae4d7]"
                      : "text-[#735a4c] hover:text-[#302621]"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Content */}
            <div className="flex flex-col items-center justify-center py-24 px-8 text-center">
              <p className="text-xs tracking-[0.5em] uppercase text-[#735a4c] mb-4">
                {["Subscriptions", "One Time Orders", "Other Products"][orderTab]}
              </p>
              <p
                className="font-light leading-none"
                style={{ fontSize: "clamp(2.5rem,8vw,5rem)", letterSpacing: "0.08em" }}
              >
                Coming<br />Soon.
              </p>
              <p className="mt-8 text-sm text-[#735a4c] leading-relaxed max-w-xs">
                {orderTab === 0 && "Monthly and bimonthly delivery of 12 condoms — straight to your door."}
                {orderTab === 1 && "One-time orders of Bear condoms in your preferred pack size."}
                {orderTab === 2 && "More from Bear Nordic — launching soon."}
              </p>
              <button
                onClick={() => { setShowOrderModal(false); setShowNewsletterModal(true); setNlStatus("idle"); }}
                className="mt-8 text-xs tracking-[0.3em] uppercase border border-[#302621]/20 px-6 py-2.5 text-[#735a4c] hover:border-[#302621] hover:text-[#302621] transition-all duration-300"
              >
                Get notified at launch — Subscribe to our newsletter
              </button>
            </div>

            <div className="border-t border-[#302621]/10 px-8 py-5 flex justify-end">
              <button
                onClick={() => setShowOrderModal(false)}
                className="text-xs tracking-[0.3em] uppercase text-[#735a4c] hover:text-[#302621] transition-colors duration-200"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
