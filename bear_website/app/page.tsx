const specs = [
  {
    title: "Ultra-thin latex",
    desc: "0.05mm walls for maximum sensation without compromise.",
  },
  {
    title: "Anatomical fit",
    desc: "Contoured for comfort. Designed to stay in place.",
  },
  {
    title: "ISO 4074 certified",
    desc: "Meets the highest international quality standards.",
  },
];

const features = [
  {
    num: "01",
    title: "Premium Materials",
    desc: "Natural latex from certified sustainable plantations. Hypoallergenic. Non-toxic. Because you deserve better than generic.",
  },
  {
    num: "02",
    title: "The Perfect Fit",
    desc: "Available in three sizes — Classic, Fitted, and Large. One size has never fit all, and we refuse to pretend otherwise.",
  },
  {
    num: "03",
    title: "Never Run Out",
    desc: "Monthly subscription, delivered discreetly to your door. Set it and forget it. Be ready, always.",
  },
];

const plans = [
  {
    plan: "Monthly",
    price: "£12",
    per: "/mo",
    qty: "12 condoms",
    perUnit: "£1.00 each",
    featured: false,
  },
  {
    plan: "Quarterly",
    price: "£32",
    per: "/qtr",
    qty: "36 condoms",
    perUnit: "Save 11%",
    featured: true,
  },
  {
    plan: "Biannual",
    price: "£58",
    per: "/6mo",
    qty: "72 condoms",
    perUnit: "Save 19%",
    featured: false,
  },
];

export default function Home() {
  return (
    <div className="bg-[#0b0b0b] text-[#f0ede6] min-h-screen font-sans">
      {/* ── Navigation ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 bg-[#0b0b0b]/80 backdrop-blur-md border-b border-[#ffffff08]">
        <span className="text-sm font-semibold tracking-[0.4em] uppercase select-none">
          Bear
        </span>
        <div className="hidden md:flex items-center gap-10 text-xs tracking-[0.25em] uppercase text-[#888]">
          {["Product", "Why Bear", "Subscription"].map((label) => (
            <a
              key={label}
              href={`#${label.toLowerCase().replace(" ", "-")}`}
              className="group relative py-1 hover:text-[#f0ede6] transition-colors duration-300"
            >
              {label}
              <span className="absolute bottom-0 left-0 h-px w-0 bg-[#f0ede6] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>
        <a
          href="#subscription"
          className="text-xs tracking-[0.25em] uppercase border border-[#333] px-5 py-2.5 hover:border-[#f0ede6] hover:text-white transition-all duration-300"
        >
          Subscribe
        </a>
      </nav>

      {/* ── Hero ── */}
      <section className="relative flex flex-col items-center justify-center min-h-screen text-center px-8 overflow-hidden">
        {/* Background rings */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="absolute w-[700px] h-[700px] rounded-full border border-[#ffffff04] animate-[spin_60s_linear_infinite]" />
          <div className="absolute w-[500px] h-[500px] rounded-full border border-[#ffffff06]" />
          <div className="absolute w-[300px] h-[300px] rounded-full border border-[#ffffff08]" />
        </div>

        <p className="mb-6 text-xs tracking-[0.5em] uppercase text-[#444]">
          Est. 2026
        </p>
        <h1 className="text-[clamp(5rem,22vw,18rem)] font-semibold tracking-[0.08em] leading-none cursor-default select-none transition-all duration-700 hover:tracking-[0.14em]">
          BEAR
        </h1>
        <p className="mt-6 text-xs tracking-[0.5em] uppercase text-[#555]">
          Protection · Precision · Presence
        </p>
        <p className="mt-6 max-w-sm text-sm text-[#555] leading-relaxed">
          The condom engineered for men who take quality seriously.
        </p>
        <a
          href="#subscription"
          className="group mt-12 inline-flex items-center gap-3 border border-[#2a2a2a] px-9 py-4 text-xs tracking-[0.3em] uppercase hover:border-[#888] transition-all duration-500"
        >
          Start Your Subscription
          <span className="transition-transform duration-300 group-hover:translate-x-1.5">
            →
          </span>
        </a>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
          <span className="text-[10px] tracking-[0.4em] uppercase text-[#333]">
            Scroll
          </span>
          <div className="w-px h-10 bg-gradient-to-b from-[#333] to-transparent" />
        </div>
      </section>

      {/* ── Brand Statement ── */}
      <section className="py-40 px-8">
        <p className="max-w-3xl mx-auto text-[clamp(1.25rem,3.5vw,2.5rem)] font-light leading-[1.5] text-center text-[#666]">
          <span className="text-[#f0ede6]">Modern responsibility</span> starts
          with the details. BEAR is built for men who refuse to compromise — on
          quality, comfort, or{" "}
          <span className="text-[#f0ede6] italic">confidence</span>.
        </p>
      </section>

      {/* ── Product ── */}
      <section
        id="product"
        className="py-32 px-8 border-t border-[#ffffff06]"
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          {/* Abstract visual */}
          <div className="group relative aspect-square max-w-[380px] mx-auto cursor-default">
            <div className="absolute inset-0 rounded-full border border-[#1e1e1e] transition-all duration-700 group-hover:border-[#383838] group-hover:scale-[1.04]" />
            <div className="absolute inset-[14%] rounded-full border border-[#161616] transition-all duration-700 group-hover:border-[#2e2e2e] group-hover:scale-[1.04] delay-75" />
            <div className="absolute inset-[28%] rounded-full bg-[#111] transition-all duration-700 group-hover:bg-[#161616]" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-4xl font-semibold tracking-[0.35em] text-[#222] transition-colors duration-700 group-hover:text-[#383838] select-none">
                BEAR
              </span>
            </div>
            {/* Subtle glow on hover */}
            <div className="absolute inset-[20%] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[radial-gradient(circle,#ffffff06,transparent)]" />
          </div>

          {/* Specs */}
          <div>
            <span className="text-[10px] tracking-[0.5em] uppercase text-[#444]">
              The Product
            </span>
            <h2 className="mt-5 text-[clamp(1.75rem,3vw,2.75rem)] font-semibold leading-tight">
              Precision-engineered
              <br />
              <span className="text-[#444]">for every man.</span>
            </h2>
            <div className="mt-10 space-y-0">
              {specs.map((item) => (
                <div
                  key={item.title}
                  className="group/row flex items-start justify-between py-6 border-b border-[#151515] hover:border-[#252525] transition-colors duration-300 cursor-default"
                >
                  <div className="pr-8">
                    <h3 className="text-sm font-medium transition-colors duration-300 group-hover/row:text-white">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-xs text-[#555] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  <span className="shrink-0 text-[#2a2a2a] text-sm transition-all duration-300 group-hover/row:text-[#555] group-hover/row:translate-x-0.5 mt-0.5">
                    →
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Bear ── */}
      <section
        id="why-bear"
        className="py-32 px-8 bg-[#080808] border-t border-[#ffffff06]"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-[10px] tracking-[0.5em] uppercase text-[#444]">
              Why Bear
            </span>
            <h2 className="mt-5 text-[clamp(1.75rem,3vw,2.75rem)] font-semibold">
              Built different.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#111]">
            {features.map((f) => (
              <div
                key={f.num}
                className="group relative bg-[#080808] p-10 hover:bg-[#0d0d0d] transition-colors duration-500 cursor-default overflow-hidden"
              >
                {/* Top border reveal */}
                <div className="absolute top-0 left-0 h-px w-0 bg-[#f0ede6] transition-all duration-500 group-hover:w-full" />
                <span className="text-[10px] tracking-[0.4em] text-[#2a2a2a]">
                  {f.num}
                </span>
                <h3 className="mt-7 text-base font-medium transition-colors duration-300 group-hover:text-white">
                  {f.title}
                </h3>
                <p className="mt-4 text-xs text-[#555] leading-relaxed">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Subscription ── */}
      <section
        id="subscription"
        className="py-32 px-8 border-t border-[#ffffff06]"
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-[10px] tracking-[0.5em] uppercase text-[#444]">
              Subscription
            </span>
            <h2 className="mt-5 text-[clamp(1.75rem,3vw,2.75rem)] font-semibold">
              Always ready.
            </h2>
            <p className="mt-4 text-sm text-[#555] max-w-xs mx-auto leading-relaxed">
              Delivered discreetly to your door. Pause or cancel anytime.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {plans.map((plan) => (
              <div
                key={plan.plan}
                className={`group relative p-8 border transition-all duration-500 cursor-default ${
                  plan.featured
                    ? "border-white bg-white text-[#0b0b0b]"
                    : "border-[#1a1a1a] hover:border-[#383838]"
                }`}
              >
                {plan.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white text-[#0b0b0b] text-[10px] tracking-[0.3em] uppercase px-4 py-1">
                    Popular
                  </span>
                )}
                <span
                  className={`text-[10px] tracking-[0.4em] uppercase ${
                    plan.featured ? "text-[#888]" : "text-[#444]"
                  }`}
                >
                  {plan.plan}
                </span>
                <div className="mt-3 flex items-baseline gap-1">
                  <span className="text-4xl font-semibold">{plan.price}</span>
                  <span
                    className={`text-xs ${
                      plan.featured ? "text-[#777]" : "text-[#555]"
                    }`}
                  >
                    {plan.per}
                  </span>
                </div>

                <div
                  className={`my-7 h-px ${
                    plan.featured ? "bg-[#e5e5e5]" : "bg-[#1a1a1a]"
                  }`}
                />

                <ul className="space-y-2.5 mb-8">
                  {[
                    plan.qty,
                    plan.perUnit,
                    "Discreet packaging",
                    "Free shipping",
                    "Cancel anytime",
                  ].map((line, i) => (
                    <li
                      key={line}
                      className={`text-xs ${
                        i === 0
                          ? plan.featured
                            ? "font-medium text-[#0b0b0b]"
                            : "font-medium"
                          : plan.featured
                          ? "text-[#777]"
                          : "text-[#555]"
                      }`}
                    >
                      {line}
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3.5 text-[10px] tracking-[0.3em] uppercase transition-all duration-300 ${
                    plan.featured
                      ? "bg-[#0b0b0b] text-white hover:bg-[#1a1a1a]"
                      : "border border-[#222] text-[#666] hover:border-[#888] hover:text-[#f0ede6]"
                  }`}
                >
                  Choose Plan
                </button>
              </div>
            ))}
          </div>

          <p className="mt-8 text-center text-[11px] text-[#333] tracking-wide">
            No commitment. Pause or cancel your subscription at any time.
          </p>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="py-40 px-8 bg-[#080808] border-t border-[#ffffff06] text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-[clamp(2rem,6vw,4.5rem)] font-semibold leading-[1.1]">
            Be the man
            <br />
            <span className="text-[#383838] transition-colors duration-500 hover:text-[#888] cursor-default">
              who&apos;s always prepared.
            </span>
          </h2>
          <a
            href="#subscription"
            className="group mt-14 inline-flex items-center gap-4 border border-[#2a2a2a] px-10 py-5 text-xs tracking-[0.3em] uppercase hover:border-[#888] transition-all duration-500"
          >
            Subscribe Now
            <span className="transition-transform duration-300 group-hover:translate-x-1.5">
              →
            </span>
          </a>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="py-10 px-8 border-t border-[#111]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-[#333]">
          <span className="text-xs tracking-[0.5em] uppercase">Bear</span>
          <div className="flex items-center gap-8 text-[11px] tracking-wider">
            {["Privacy", "Terms", "Contact"].map((link) => (
              <a
                key={link}
                href="#"
                className="hover:text-[#888] transition-colors duration-200"
              >
                {link}
              </a>
            ))}
          </div>
          <span className="text-[11px]">© 2026 Bear. All rights reserved.</span>
        </div>
      </footer>
    </div>
  );
}
