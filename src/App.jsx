import { useEffect, useState } from "react";

const navItems = ["Platform", "Decision Records", "Use Cases", "Company"];

const problemCards = [
  {
    title:
      "Bottom-up Excel consolidation takes days and produces numbers that nobody at the table fully trusts.",
    src: "/problem-card-1.png",
    alt: "Blueprint illustration of a spreadsheet grid and cursor interaction",
  },
  {
    title:
      "No shared assumption set across assets means decisions don't compound. They contradict.",
    src: "/problem-card-2.png",
    alt: "Blueprint illustration of one-to-one field mapping between two columns",
  },
  {
    title:
      "When rates, regulations, or energy costs shift, the plan doesn't update. You rebuild from scratch.",
    src: "/problem-card-3.png",
    alt: "Blueprint illustration of a financial graph with a currency symbol",
  },
];

const steps = [
  {
    label: "Step 01",
    badge: "A",
    title: "Data in",
    body: "Start with an address and basic asset data. Optiml enriches the baseline using local benchmarks, thresholds, and cost indices.",
  },
  {
    label: "Step 02",
    badge: "B",
    title: "Optimisation runs",
    body: "The engine works across the KPIs your IC tracks: ROI, Capex, NOI, CO₂ reduction, EPC ratings, and CRREM compliance.",
  },
  {
    label: "Step 03",
    badge: "C",
    title: "Decision Record out",
    body: "A structured output with visible assumptions, traceable logic, and a refresh path when constraints change. Download as PDF or Excel. Use it directly in committee, lender, and internal review conversations.",
  },
];

const trustedLogos = [
  {
    name: "Adobe",
    src: "https://app.paper.design/file-assets/01KNHZ3VEVYSEX55JGB315C2S5/01KNJGHPEPEZEPXF6SWHGPZKWH.png",
    width: 146,
    height: 52,
  },
  {
    name: "Google",
    src: "https://app.paper.design/file-assets/01KNHZ3VEVYSEX55JGB315C2S5/01KNJGHPESQDDTQZ8AW0SA8WKH.png",
    width: 125,
    height: 52,
  },
  {
    name: "Gumroad",
    src: "https://app.paper.design/file-assets/01KNHZ3VEVYSEX55JGB315C2S5/01KNJGHPESAH925XPA75PV3S2G.png",
    width: 163,
    height: 52,
  },
  {
    name: "Linear",
    src: "https://app.paper.design/file-assets/01KNHZ3VEVYSEX55JGB315C2S5/01KNJGHPETZXT3W29ER58SED9M.png",
    width: 162,
    height: 51,
  },
  {
    name: "Mailchimp",
    src: "https://app.paper.design/file-assets/01KNHZ3VEVYSEX55JGB315C2S5/01KNJGHPETQFVGEQ7KV5HRCYT6.png",
    width: 184,
    height: 51,
  },
  {
    name: "Notion",
    src: "https://app.paper.design/file-assets/01KNHZ3VEVYSEX55JGB315C2S5/01KNJGHPET97BQTFJYNNQCN98G.png",
    width: 142,
    height: 52,
  },
  {
    name: "Spotify",
    src: "https://app.paper.design/file-assets/01KNHZ3VEVYSEX55JGB315C2S5/01KNJGHPETXKCT75JEQHW6WPBS.png",
    width: 155,
    height: 52,
  },
  {
    name: "Secondary logo",
    src: "https://app.paper.design/file-assets/01KNHZ3VEVYSEX55JGB315C2S5/01KNJGHPEVTAD06QJ7EV1F8QDT.png",
    width: 87,
    height: 52,
  },
];

const paths = [
  {
    stage: "Awareness",
    title: "Request a sample Decision Record",
    body: "See how Optiml translates portfolio and asset analysis into a structured output a Fund Manager can circulate internally.",
    cta: "Request sample pack",
  },
  {
    stage: "Evaluation",
    title: "Book a working session",
    body: "30 minutes, scoped to your portfolio. We show how Optiml would frame options, trade-offs, and outputs for your asset type and geography.",
    cta: "Book a session",
  },
  {
    stage: "Procurement",
    title: "Get the procurement pack",
    body: "Security documentation, methodology overview, and commercial terms structured for legal and finance review.",
    cta: "Request procurement pack",
    featured: true,
  },
];

const faqItems = [
  {
    q: "How is this different from the BI or ESG tools we already use?",
    a: "Those tools help you monitor, report, and analyze performance. Optiml helps you turn that analysis into a structured recommendation with visible assumptions, trade-offs, and outputs that can be used in IC, lender, and internal review conversations. It is not just another reporting layer.",
  },
  {
    q: "Can the output be reviewed or audited independently?",
    a: "Placeholder copy for auditability and review workflows. This can be replaced with the final approved FAQ answer once the content is signed off.",
  },
  {
    q: "What data do we need to get started?",
    a: "Placeholder copy for onboarding inputs. This can be replaced with the final approved FAQ answer once the content is signed off.",
  },
  {
    q: "What happens when constraints change: rates, regulations, or Capex budgets?",
    a: "Placeholder copy for changing constraints and refresh workflows. This can be replaced with the final approved FAQ answer once the content is signed off.",
  },
];

const footerGroups = [
  {
    title: "Optiml",
    links: ["Home", "REDI", "Platform", "Success Stories"],
  },
  {
    title: "Solutions",
    links: ["Asset Managers", "Consultancies", "Portfolio Managers", "Transaction Managers"],
  },
  {
    title: "Company",
    links: ["About", "Blog", "Webinars", "Careers"],
  },
];

const securityBadges = [
  { label: "ISO 27001", src: "/iso.png", alt: "ISO 27001 certification badge" },
  { label: "GDPR", src: "/gdpr.png", alt: "GDPR compliance badge" },
  { label: "SOC 2", src: "/soc.png", alt: "SOC 2 compliance badge" },
];

const productVideoUrl = "https://www.optiml.com/wp-content/uploads/2025/05/2.mp4";
const productPosterUrl = "/redi-poster.png";
const heroMediaUrl = "/hero-media.png";

const type = {
  brand: "text-[1.2rem] font-medium tracking-[-0.05em]",
  nav: "text-[0.78rem] uppercase tracking-[0.16em]",
  label: "text-[0.72rem] font-medium uppercase tracking-[0.26em]",
  heroTitle: "w-full font-serif text-[4rem] leading-[0.92] tracking-[-0.02em] text-[#111533] md:text-[5.8rem]",
  sectionTitle:
    "w-full font-serif text-[2.9rem] leading-[1.04] tracking-[-0.02em] md:text-[3.35rem]",
  cardTitle: "font-serif text-[1.95rem] leading-tight tracking-[-0.02em]",
  bodyLg: "text-[1.12rem] leading-9 md:text-[1.16rem]",
  body: "text-[1.06rem] leading-9 md:text-[1.1rem]",
  bodySm: "text-[1rem] leading-8 md:text-[1.02rem]",
  footerTitle:
    "w-full max-w-[800px] font-serif text-[3rem] leading-[1.02] tracking-[-0.02em] md:text-[3.35rem]",
};

function Label({ children, dark = false }) {
  return (
    <div
      className={`${type.label} ${dark ? "text-white/80" : "text-[#4B67F2]"}`}
    >
      {children}
    </div>
  );
}

function PrimaryButton({ children, tone = "dark", className = "" }) {
  const tones = {
    dark: "bg-[#111533] text-white hover:bg-[#1a2046]",
    blue: "bg-[#3557F6] text-white hover:bg-[#2948e2]",
    light: "bg-white text-[#174e59] hover:bg-[#f3f7f7]",
    muted: "bg-[#EEF2FC] text-[#111533] hover:bg-[#e7ecfb]",
    aqua: "bg-[#33BCB9] text-white hover:bg-[#2daaa7]",
  };

  return (
    <button
      className={`inline-flex h-12 items-center justify-center rounded-[4px] px-5 text-sm font-semibold transition-colors ${tones[tone]} ${className}`}
    >
      {children}
    </button>
  );
}

function UiPreview({ onPlay }) {
  return (
    <div className="relative overflow-hidden rounded-[8px] bg-white shadow-[0_10px_40px_rgba(40,58,111,0.08)]">
      <img
        src={productPosterUrl}
        alt="Optiml product poster showing the lifecycle status quo interface"
        width="1280"
        height="768"
        className="block h-auto w-full object-cover"
      />
      <button
        type="button"
        onClick={onPlay}
        aria-label="Play product walkthrough video"
        className="absolute inset-0 grid place-items-center"
      >
        <div className="grid h-20 w-20 place-items-center rounded-[8px] bg-[linear-gradient(135deg,#156C74,#4A63FA)] text-3xl text-white shadow-[0_20px_40px_rgba(66,96,215,0.28)] transition-transform duration-200 hover:scale-[1.03]">
          ▶
        </div>
      </button>
    </div>
  );
}

function App() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  useEffect(() => {
    const nodes = document.querySelectorAll("[data-reveal]");
    if (!nodes.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -6% 0px",
      },
    );

    nodes.forEach((node) => observer.observe(node));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#F5F7FB] text-[#111533]">
      <main>
        <header className="px-5 pt-5 md:px-8 xl:px-10">
          <div className="scroll-fade mx-auto max-w-[1600px]" data-reveal>
            <div className="flex items-center justify-between border-b border-slate-200 pb-5">
              <div className={`${type.brand} text-[#0e525e]`}>
                Optiml<span className="text-[#4B67F2]">+</span>
              </div>
              <nav className={`hidden items-center gap-8 text-slate-600 lg:flex ${type.nav}`}>
                {navItems.map((item) => (
                  <a key={item} href="#" className="hover:text-[#111533]">
                    {item}
                  </a>
                ))}
              </nav>
              <PrimaryButton tone="dark">Request a sample pack →</PrimaryButton>
            </div>
          </div>
        </header>

        <section className="px-5 pb-14 pt-10 md:px-8 xl:px-10">
          <div className="scroll-fade mx-auto grid max-w-[1600px] gap-10 lg:grid-cols-[1.1fr_0.9fr]" data-reveal>
            <div className="pt-12">
              <div className="mb-8 flex items-center gap-4">
                <div className="h-px w-14 bg-[#4B67F2]" />
                <Label>For Portfolio / Fund Managers</Label>
              </div>
              <h1 className={type.heroTitle}>
                Your IC needs a decision it can defend. Not another spreadsheet.
              </h1>
              <p className={`mt-8 max-w-[34rem] text-slate-700 ${type.bodyLg}`}>
                Optiml helps Fund Managers turn portfolio, asset, and Capex analysis into structured
                outputs that hold up in Investment Committee reviews, lender conversations, and LP
                oversight. When constraints change — rates, valuations, regulatory thresholds — the
                output refreshes.
              </p>
              <div className="mt-10">
                <PrimaryButton tone="dark">Request a sample Decision Record →</PrimaryButton>
              </div>
            </div>

            <div className="overflow-hidden rounded-[10px] bg-[#F4F2F0] shadow-[0_10px_40px_rgba(24,32,71,0.05)]">
              <img
                src={heroMediaUrl}
                alt="Decision Room mockup showing asset inputs, committee signal, and output summary"
                width="1144"
                height="1536"
                className="block h-auto w-full"
              />
            </div>
          </div>
        </section>

        <section className="overflow-hidden bg-[radial-gradient(circle_at_12%_18%,rgba(56,198,188,0.22),transparent_26%),radial-gradient(circle_at_88%_82%,rgba(118,150,255,0.22),transparent_28%),linear-gradient(120deg,#3351F1_0%,#3A5CF5_56%,#4A69FB_100%)] px-5 py-20 text-white md:px-8 xl:px-10">
          <div className="scroll-fade mx-auto grid max-w-[1600px] gap-10 lg:grid-cols-[1fr_1fr] lg:items-start" data-reveal>
            <div className="max-w-[36rem]">
              <Label dark>The Problem</Label>
              <h2 className={`mt-5 ${type.sectionTitle}`}>
                Your current materials weren't built to survive review
              </h2>
            </div>
            <div className={`max-w-[42rem] space-y-10 text-white/88 ${type.bodyLg}`}>
              <p>
                When a deal goes to committee, or a lender asks for the logic behind your
                assumptions, the spreadsheet breaks. The PDF is static. The scenario deck is useful
                until one input changes and the whole case has to be rebuilt.
              </p>
              <p>
                You know this. You've been in that room. The gap isn't more analysis. It's a
                decision output that can stand up to scrutiny and be refreshed when conditions move.
              </p>
            </div>
          </div>

          <div className="scroll-fade mx-auto mt-14 grid max-w-[1600px] gap-6 lg:grid-cols-3" data-reveal>
            {problemCards.map((card) => (
              <div
                key={card.title}
                className="overflow-hidden rounded-[8px] border border-white/14 bg-white/6 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)]"
              >
                <div className="border-b border-white/14">
                  <img
                    src={card.src}
                    alt={card.alt}
                    loading="lazy"
                    className="block h-auto w-full"
                  />
                </div>
                <div className="p-5">
                  <p className={`text-white ${type.bodyLg}`}>{card.title}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-[#F5F7FB] px-5 py-20 md:px-8 xl:px-10">
          <div className="scroll-fade mx-auto flex max-w-[1600px] flex-col gap-8 lg:flex-row lg:items-start lg:justify-between" data-reveal>
            <div className="max-w-[46rem]">
              <Label>How It Works</Label>
              <h2 className={`mt-5 text-[#111533] ${type.sectionTitle}`}>
                From inputs to a Decision Record in three steps
              </h2>
              <p className={`mt-6 max-w-[43rem] text-slate-600 ${type.bodyLg}`}>
                The system starts with imperfect data, enriches it, runs deterministic optimisation
                against real investment constraints, then outputs a record built to be presented
                directly.
              </p>
            </div>
            <PrimaryButton tone="blue">Learn more</PrimaryButton>
          </div>

          <div className="scroll-fade mx-auto mt-10 grid max-w-[1600px] gap-5 lg:grid-cols-3" data-reveal>
            {steps.map((step) => (
              <div key={step.label} className="rounded-[8px] border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <div className={`${type.label} text-slate-400`}>
                    {step.label}
                  </div>
                  <div className="grid h-9 w-9 place-items-center rounded-[4px] bg-[#EAF7F7] text-xl font-semibold text-[#156C74]">
                    {step.badge}
                  </div>
                </div>
                <div className={`mt-6 text-[#111533] ${type.cardTitle}`}>
                  {step.title}
                </div>
                <p className={`mt-5 text-slate-600 ${type.body}`}>{step.body}</p>
              </div>
            ))}
          </div>

          <div className="scroll-fade mx-auto mt-8 max-w-[1600px] shadow-[0_20px_60px_rgba(57,83,205,0.12)]" data-reveal>
            <UiPreview onPlay={() => setIsVideoOpen(true)} />
          </div>
        </section>

        <section className="bg-[radial-gradient(circle_at_16%_22%,rgba(51,190,180,0.2),transparent_24%),radial-gradient(circle_at_86%_78%,rgba(141,174,255,0.18),transparent_26%),linear-gradient(120deg,#3351F1_0%,#3A5CF5_58%,#4870FF_100%)] px-5 py-20 text-white md:px-8 xl:px-10">
          <div className="scroll-fade mx-auto flex max-w-[1600px] flex-col gap-10 lg:flex-row lg:items-start lg:justify-between" data-reveal>
            <div className="max-w-[42rem]">
              <Label dark>Trusted By</Label>
              <h2 className={`mt-5 ${type.sectionTitle}`}>
                Fund managers across the globe use Optiml to improve their reviews.
              </h2>
            </div>
            <div className="pt-8">
              <PrimaryButton tone="light">Read testimonials</PrimaryButton>
            </div>
          </div>
          <div className="scroll-fade mx-auto mt-16 max-w-[1600px] overflow-hidden" data-reveal>
            <div className="ticker-track flex min-w-max items-center gap-16">
              {[...trustedLogos, ...trustedLogos].map((logo, index) => (
                <img
                  key={`${logo.name}-${index}`}
                  src={logo.src}
                  alt={logo.name}
                  width={logo.width}
                  height={logo.height}
                  loading="lazy"
                  className="h-[52px] w-auto max-w-none object-contain opacity-95"
                />
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#F5F7FB] px-5 py-20 md:px-8 xl:px-10">
          <div className="scroll-fade mx-auto max-w-[1600px]" data-reveal>
            <div className="max-w-[44rem]">
              <Label>Catella, Patrizia, and pom+ started the same way.</Label>
              <h2 className={`mt-5 text-[#111533] ${type.sectionTitle}`}>
                Three ways in, depending on where you are
              </h2>
            </div>
            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {paths.map((card) => (
                <div
                  key={card.title}
                  className={`flex min-h-[27rem] flex-col rounded-[8px] border p-7 ${
                    card.featured
                      ? "border-[#14183B] bg-[#111533] text-white"
                      : "border-slate-200 bg-white text-[#111533]"
                  }`}
                >
                  <div
                    className={`${type.label} ${
                      card.featured ? "text-[#99A6FF]" : "text-slate-400"
                    }`}
                  >
                    {card.stage}
                  </div>
                  <div className={`mt-7 ${type.cardTitle}`}>{card.title}</div>
                  <p
                    className={`mt-8 ${
                      card.featured ? "text-white/80" : "text-slate-600"
                    } ${type.body}`}
                  >
                    {card.body}
                  </p>
                  <div className="mt-auto pt-10">
                    <PrimaryButton tone={card.featured ? "blue" : "muted"}>{card.cta}</PrimaryButton>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white px-5 py-20 md:px-8 xl:px-10">
          <div className="scroll-fade mx-auto grid max-w-[1600px] gap-10 lg:grid-cols-[0.95fr_1.25fr]" data-reveal>
            <div className="max-w-[31rem]">
              <Label>Questions We Hear Before Sign-off</Label>
              <h2 className={`mt-5 text-[#111533] ${type.sectionTitle}`}>
                Questions fund managers ask before signing off
              </h2>
              <p className={`mt-8 text-slate-600 ${type.body}`}>
                The final section should reduce procurement friction and answer the objections that
                come up before a tool is cleared for real use.
              </p>
            </div>

            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <div key={item.q} className="rounded-[8px] border border-slate-200 bg-[#FBFBFC] px-6 py-7">
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex((current) => (current === index ? -1 : index))}
                    className="flex w-full items-start justify-between gap-6 text-left"
                  >
                    <div className={`text-[#111533] ${type.bodyLg}`}>
                      {item.q}
                    </div>
                    <div className="text-3xl leading-none text-slate-500">
                      {openFaqIndex === index ? "−" : "+"}
                    </div>
                  </button>
                  {openFaqIndex === index && (
                    <p className={`mt-6 max-w-[46rem] text-slate-500 ${type.bodySm}`}>{item.a}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[radial-gradient(circle_at_14%_18%,rgba(52,193,183,0.18),transparent_24%),radial-gradient(circle_at_86%_78%,rgba(151,183,255,0.16),transparent_28%),linear-gradient(180deg,#3253F2_0%,#3A5DF6_100%)] px-5 pb-24 pt-16 text-white md:px-8 xl:px-10">
          <div className="scroll-fade mx-auto max-w-[1600px] rounded-[8px] border border-white/12 bg-[radial-gradient(circle_at_82%_18%,rgba(63,210,193,0.16),transparent_20%),radial-gradient(circle_at_22%_86%,rgba(162,191,255,0.14),transparent_22%),linear-gradient(180deg,#3A5DF6_0%,#4568FB_100%)] p-10" data-reveal>
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-[46rem]">
                <Label dark>Next Step</Label>
                <h2 className={`mt-5 text-white ${type.sectionTitle}`}>
                  Your Actionable Decarbonization
                </h2>
                <p className={`mt-5 max-w-[44rem] text-white/85 ${type.body}`}>
                  A concise working pack, structured for committee discussion, lender conversations,
                  and procurement review.
                </p>
              </div>
              <PrimaryButton tone="light">Request sample pack</PrimaryButton>
            </div>
          </div>
          <footer className="mt-32">
            <div className="scroll-fade mx-auto grid max-w-[1600px] gap-12 xl:grid-cols-[1.1fr_0.95fr]" data-reveal>
              <div>
                <div className={`${type.label} text-white/70`}>Optiml</div>
                <h2 className={`mt-8 text-white ${type.footerTitle}`}>
                  Subscribe to our Real Estate Insights Newsletter
                </h2>
                <div className="mt-10 flex max-w-[42rem] flex-col gap-3 rounded-[8px] bg-[#EEF2FF] p-2 sm:flex-row">
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="What's your email?"
                    className="h-14 min-w-0 flex-1 rounded-[4px] border border-transparent bg-white px-5 text-lg text-slate-900 outline-none placeholder:text-slate-400 focus:border-[#4A63FA]"
                  />
                  <PrimaryButton tone="blue" className="h-14">
                    Subscribe
                  </PrimaryButton>
                </div>
              </div>

              <div className="grid gap-10 sm:grid-cols-3 xl:pt-1">
                {footerGroups.map((group) => (
                  <div key={group.title}>
                    <div className="text-[1rem] font-semibold text-white">{group.title}</div>
                    <div className={`mt-8 space-y-5 text-white/85 ${type.bodySm}`}>
                      {group.links.map((link) => (
                        <a key={link} href="#" className="block hover:text-white">
                          {link}
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="scroll-fade mx-auto mt-16 max-w-[1600px]" data-reveal>
              <div className="h-px bg-white/16" />
            </div>

            <div className="scroll-fade mx-auto mt-14 max-w-[1600px]" data-reveal>
              <div className="grid gap-10 xl:grid-cols-[1fr_auto] xl:items-start">
                <div className={`space-y-5 text-white/88 ${type.bodySm}`}>
                  <div className="text-[2rem] font-bold leading-none text-white">in</div>
                  <div>© Optiml AG 2026</div>
                  <div>contact@optiml.com</div>
                  <div>Tessinerplatz 7, 8002 Zurich, Switzerland</div>
                  <div>Munich, Germany</div>
                  <div>London, UK</div>
                </div>

                <div className="rounded-[8px] border border-white/14 bg-white/6 p-8">
                  <div className={`text-white ${type.body}`}>Enterprise-ready security</div>
                  <div className="mt-8 grid gap-8 sm:grid-cols-3">
                    {securityBadges.map((item) => (
                      <div key={item.label} className="text-center">
                        <img
                          src={item.src}
                          alt={item.alt}
                          width="96"
                          height="96"
                          loading="lazy"
                          className="mx-auto h-[6rem] w-[6rem] object-contain"
                        />
                        <div className={`mt-4 text-white/88 ${type.bodySm}`}>{item.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </section>
      </main>

      {isVideoOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-5 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Product walkthrough video"
          onClick={() => setIsVideoOpen(false)}
        >
          <div
            className="relative w-full max-w-6xl overflow-hidden rounded-[12px] bg-black shadow-[0_30px_80px_rgba(0,0,0,0.45)]"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setIsVideoOpen(false)}
              aria-label="Close video lightbox"
              className="absolute right-4 top-4 z-10 grid h-10 w-10 place-items-center rounded-full bg-white/10 text-2xl text-white transition-colors hover:bg-white/20"
            >
              ×
            </button>
            <div className="aspect-video w-full bg-black">
              <video
                src={productVideoUrl}
                poster={productPosterUrl}
                controls
                autoPlay
                playsInline
                className="h-full w-full"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
