import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Award,
  BarChart3,
  BoxSelect,
  Calendar,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Compass,
  Eye,
  EyeOff,
  Facebook,
  FileEdit,
  Instagram,
  Map,
  Search,
  Send,
  Twitter,
} from "lucide-react";
import { useEffect, useMemo, useState, type FormEvent } from "react";
import campusImage from "../assets/dtu-campus-aerial.jpeg";
import studentsImage from "../assets/sewa-students.jpg";
import dtuLogo from "../assets/dtu_logo.png";
import footerImage from "../assets/footer.jpeg";

export function Brand() {
  return (
    <Link to="/" className="flex items-center gap-3" aria-label="SEWA 2026 home">
      <div className="flex size-11 shrink-0 items-center justify-center">
        <img
          src={dtuLogo}
          alt="Delhi Technological University"
          className="size-full object-contain"
        />
      </div>

      <span className="leading-tight">
        <strong className="block text-lg">
          <span className="text-primary">SEWA</span> 2026
        </strong>
        <small className="block text-[10px] font-bold">
          DTU Youth Innovation
        </small>
      </span>
    </Link>
  );
}

export function Header() {
  return (
    <>
      <header className="sticky top-0 z-40 border-b border-border/70 bg-background/95 backdrop-blur">
        <div className="site-shell flex h-20 items-center justify-between">
          <Brand />
          <nav
            className="hidden items-center gap-8 text-sm font-semibold md:flex"
            aria-label="Primary navigation"
          >
            <Link to="/" className="nav-link">
              Home
            </Link>
            <a href="/#announcements" className="nav-link">
              Events
            </a>
            <a href="/#steps" className="nav-link">
              Guidelines
            </a>
            <a href="https://dtu.ac.in" className="nav-link">
              About DTU
            </a>
            <Link to="/login" className="nav-link">
              Sign In
            </Link>
            <Link to="/register" className="button button-outline">
              Sign Up
            </Link>
          </nav>
          <Link to="/login" className="button button-outline md:hidden">
            Sign In
          </Link>
        </div>
      </header>
      <div className="live-updates-bar flex h-10 overflow-hidden bg-muted text-xs">
        <div className="live-updates-label flex shrink-0 items-center bg-primary px-6 font-bold text-primary-foreground">
          Live Updates
        </div>
        <div className="live-updates-ticker-wrap min-w-0 flex-1 overflow-hidden">
          <div className="ticker flex h-full items-center whitespace-nowrap font-medium">
            <span>
              SEWA 2026 / Youth Innovation Challenge officially launched at Delhi Technological
              University on 17 September 2026.
            </span>
            <span aria-hidden="true">
              SEWA 2026 / Youth Innovation Challenge officially launched at Delhi Technological
              University on 17 September 2026.
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export function Footer() {
  return (
    <footer className="footer-texture relative overflow-hidden m-0 border-none pt-20 sm:pt-24 pb-16 shadow-[inset_0_20px_35px_-15px_rgba(0,0,0,0.06)]">
      {/* Top subtle fade gradient that blends with the white section above */}
      <div className="absolute top-0 inset-x-0 h-28 bg-gradient-to-b from-white via-white/50 to-transparent pointer-events-none z-[1]" />

      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${footerImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center calc(50% + 50px)",
          backgroundRepeat: "no-repeat",
          opacity: 0.15,
          maskImage: "linear-gradient(to bottom, transparent 0%, black 25%, black 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 25%, black 100%)",
        }}
      />

      <div className="site-shell relative z-10 grid gap-10 md:grid-cols-12">
        <div className="md:col-span-6">
          <h2 className="mb-3 text-xl font-bold">DTU – SEWA 2026</h2>
          <p className="max-w-md text-sm leading-7 font-medium text-foreground/85">
            Young India&apos;s Knowledge &amp; Technology Initiative — Youth Innovation
            Challenge. Empowering youth to create sustainable, prototype-driven solutions for Viksit
            Bharat.
          </p>

          <div className="mt-5 flex gap-3">
            <a className="social" href="https://facebook.com" aria-label="Facebook">
              <Facebook size={15} />
            </a>
            <a className="social" href="https://twitter.com" aria-label="X">
              <Twitter size={15} />
            </a>
            <a className="social" href="https://instagram.com" aria-label="Instagram">
              <Instagram size={15} />
            </a>
          </div>
        </div>

        <div className="md:col-span-3">
          <h3 className="mb-4 font-bold">Navigation</h3>

          <div className="space-y-3 text-sm font-medium text-foreground/85">
            <a className="block hover:text-primary transition-colors" href="/#about">
              About Challenge
            </a>
            <a className="block hover:text-primary transition-colors" href="/#steps">
              5 National Themes
            </a>
            <a className="block hover:text-primary transition-colors" href="/#announcements">
              Problem Statements (UDAN)
            </a>
            <a className="block hover:text-primary transition-colors" href="/#steps">
              100-Day Timeline
            </a>
            <Link className="block hover:text-primary transition-colors" to="/login">
              Email
            </Link>
          </div>
        </div>

        <div className="md:col-span-3">
          <h3 className="mb-4 font-bold">Partner Hubs</h3>
          <p className="text-sm font-medium text-foreground/85">DTU (National Centre)</p>
        </div>

        <p className="border-t border-border pt-7 text-center text-xs font-medium text-muted-foreground md:col-span-12">
          Copyright © 2026 Delhi Technological University (DTU). All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

const notices = [
  [
    "Problem Statements",
    "Release of UDAN Phase 1 Problem Statements & Evaluation Rubrics",
    "Detailed problem statements across five national themes are now available. Registered teams should review the official submission template and evaluation rubrics.",
    "Problem statements span AgriTech, Clean Energy, Healthcare & Biomedical, Smart Mobility, and Industry 4.0. Teams can download the Phase 1 submission dossier from their dashboard.",
  ],
  [
    "Mentorship",
    "DTU Central Innovation Labs & Prototyping Workshop Schedule",
    "Shortlisted teams receive access to prototyping machinery, testing facilities and dedicated faculty mentors across engineering departments.",
    "Hands-on sessions will be held at DTU Central Fabrication Facilities including 5-axis CNC machining, laser cutting, PCB fabrication, and high-performance computing clusters.",
  ],
  [
    "Guidelines",
    "Inter-Disciplinary Team Registration & Eligibility Norms",
    "Teams may comprise two to five members from accredited universities, polytechnics or eligible early-stage student startups.",
    "Cross-departmental collaboration is strongly prioritized. Teams must submit institutional verification letters by 20 September 2026.",
  ],
  [
    "Mentorship",
    "Technical Webinar on Patent Filing & IP Protection for Innovators",
    "Join leading patent attorneys and incubator directors for a practical masterclass on protecting your innovation prior to public exhibitions.",
    "Key topics include patent prior-art searches, provisional patent filing procedures, copyright for embedded firmware, and commercialization licensing strategies.",
  ],
  [
    "Evaluation",
    "Regional Hub Screening Criteria & UDAN Milestone 1 Deliverables",
    "Screening committees across five regional hubs will evaluate entries on technical novelty, feasibility, and grassroots deployment impact.",
    "Evaluations follow a standardized 100-point rubric assessing problem-solution fit (30%), engineering feasibility (30%), scalability (20%), and execution roadmap (20%).",
  ],
  [
    "Announcements",
    "Seed Grant Allocation & Incubation Fast-Track for Top Finalists",
    "Top 25 validated prototypes receive direct equity-free prototype grants and incubation incubation opportunities at DTU IIF.",
    "Grants up to ₹5,00,000 per team alongside dedicated co-working spaces, cloud credits, and pilot deployment testing with institutional partners.",
  ],
];

const LAUNCH_DATE = new Date("2026-09-17T00:00:00+05:30");

export function CountdownTimer() {
  const calculateTime = () => {
    const now = Date.now();
    const diff = Math.max(0, LAUNCH_DATE.getTime() - now);

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    return {
      days: String(days).padStart(2, "0"),
      hours: String(hours).padStart(2, "0"),
      minutes: String(minutes).padStart(2, "0"),
      seconds: String(seconds).padStart(2, "0"),
    };
  };

  const [time, setTime] = useState(calculateTime);

  useEffect(() => {
    setTime(calculateTime());
    const interval = setInterval(() => {
      setTime(calculateTime());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="countdown px-5 sm:px-8 md:px-10 py-3 sm:py-3.5 select-none border border-black/[0.04]"
      role="timer"
      aria-label="Countdown to SEWA 2026 Launch on 17 September 2026"
    >
      {/* Launch Date Card Above Timer */}
      <div className="absolute -top-10 sm:-top-12 left-1/2 -translate-x-1/2 whitespace-nowrap">
        <div className="flex items-center gap-1.5 sm:gap-2 rounded-xl sm:rounded-2xl bg-white px-3.5 sm:px-5 py-1.5 sm:py-2 shadow-[0_10px_28px_rgba(0,0,0,0.10)] border border-black/[0.04]">
          <Calendar size={13} className="text-primary shrink-0 sm:size-[15px]" />
          <span className="text-[11px] sm:text-xs md:text-sm font-extrabold tracking-tight text-gray-900">
            Launching on 17 September 2026
          </span>
        </div>
      </div>

      <div className="flex items-center gap-2.5 sm:gap-4 md:gap-6">
        {/* DAYS */}
        <div className="flex flex-col items-center min-w-[40px] sm:min-w-[48px] md:min-w-[56px]">
          <div className="h-7 sm:h-9 md:h-10 flex items-center justify-center">
            <span className="font-display font-extrabold text-2xl sm:text-3xl md:text-[38px] text-black tracking-tight tabular-nums leading-none">
              {time.days}
            </span>
          </div>
          <span className="text-[8px] sm:text-[9px] md:text-[10px] font-black text-black tracking-wider uppercase mt-1">
            DAYS
          </span>
        </div>

        {/* COLON */}
        <div className="h-7 sm:h-9 md:h-10 flex items-center justify-center -mt-2.5 sm:-mt-3">
          <span className="text-lg sm:text-2xl md:text-3xl font-extrabold text-black leading-none">
            :
          </span>
        </div>

        {/* HOURS */}
        <div className="flex flex-col items-center min-w-[40px] sm:min-w-[48px] md:min-w-[56px]">
          <div className="h-7 sm:h-9 md:h-10 flex items-center justify-center">
            <span className="font-display font-extrabold text-2xl sm:text-3xl md:text-[38px] text-black tracking-tight tabular-nums leading-none">
              {time.hours}
            </span>
          </div>
          <span className="text-[8px] sm:text-[9px] md:text-[10px] font-black text-black tracking-wider uppercase mt-1">
            HOURS
          </span>
        </div>

        {/* COLON */}
        <div className="h-7 sm:h-9 md:h-10 flex items-center justify-center -mt-2.5 sm:-mt-3">
          <span className="text-lg sm:text-2xl md:text-3xl font-extrabold text-black leading-none">
            :
          </span>
        </div>

        {/* MINUTES */}
        <div className="flex flex-col items-center min-w-[40px] sm:min-w-[48px] md:min-w-[56px]">
          <div className="h-7 sm:h-9 md:h-10 flex items-center justify-center">
            <span className="font-display font-extrabold text-2xl sm:text-3xl md:text-[38px] text-black tracking-tight tabular-nums leading-none">
              {time.minutes}
            </span>
          </div>
          <span className="text-[8px] sm:text-[9px] md:text-[10px] font-black text-black tracking-wider uppercase mt-1">
            MINUTES
          </span>
        </div>

        {/* COLON */}
        <div className="h-7 sm:h-9 md:h-10 flex items-center justify-center -mt-2.5 sm:-mt-3">
          <span className="text-lg sm:text-2xl md:text-3xl font-extrabold text-black leading-none">
            :
          </span>
        </div>

        {/* SECONDS */}
        <div className="flex flex-col items-center min-w-[40px] sm:min-w-[48px] md:min-w-[56px]">
          <div className="h-7 sm:h-9 md:h-10 flex items-center justify-center">
            <span className="font-display font-extrabold text-2xl sm:text-3xl md:text-[38px] text-black tracking-tight tabular-nums leading-none">
              {time.seconds}
            </span>
          </div>
          <span className="text-[8px] sm:text-[9px] md:text-[10px] font-black text-black tracking-wider uppercase mt-1">
            SECONDS
          </span>
        </div>
      </div>
    </div>
  );
}

export function HomePage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All Categories");
  const [open, setOpen] = useState<number | null>(null);
  const filtered = useMemo(
    () =>
      notices.filter(
        (n) =>
          (category === "All" || category === "All Categories" || n[0] === category) &&
          n.join(" ").toLowerCase().includes(query.toLowerCase()),
      ),
    [query, category],
  );
  return (
    <div>
      <Header />
      <main>
        <section className="hero relative min-h-[570px]">
          <div className="absolute inset-0 overflow-hidden">
            <img
              src={campusImage}
              alt="Aerial view of the Delhi Technological University campus"
              className="size-full object-cover"
              width={1600}
              height={900}
            />
            <div className="absolute inset-0 bg-hero-overlay" />
          </div>

          {/* Floating Live Viewers Card in top-right corner below Live Updates */}
          <div className="absolute top-4 sm:top-5 right-4 sm:right-6 md:right-8 lg:right-12 z-20 select-none">
            <div className="flex items-center gap-2 rounded-xl sm:rounded-2xl bg-white px-3.5 sm:px-4 py-1.5 sm:py-2 shadow-[0_10px_28px_rgba(0,0,0,0.10)] border border-black/[0.04] backdrop-blur-xs transition-all duration-200 hover:-translate-y-0.5">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
              </span>
              <Eye size={14} className="text-primary shrink-0" />
              <span className="text-xs sm:text-sm font-extrabold tracking-tight text-gray-900">
                67K <span className="font-semibold text-gray-600">Views</span>
              </span>
            </div>
          </div>

          {/* Carousel Arrows */}
          <button
            type="button"
            aria-label="Previous slide"
            className="hidden sm:flex absolute left-4 md:left-6 top-1/2 -translate-y-1/2 z-10 text-gray-700/80 hover:text-black hover:scale-110 transition-all cursor-pointer select-none"
          >
            <ChevronLeft size={42} strokeWidth={2.5} />
          </button>
          <button
            type="button"
            aria-label="Next slide"
            className="hidden sm:flex absolute right-4 md:right-6 top-1/2 -translate-y-1/2 z-10 text-gray-700/80 hover:text-black hover:scale-110 transition-all cursor-pointer select-none"
          >
            <ChevronRight size={42} strokeWidth={2.5} />
          </button>

          <div className="site-shell relative flex min-h-[570px] items-center z-10">
            <div className="animate-rise max-w-xl py-20">
              <p className="eyebrow">Youth Innovation Challenge</p>
              <h1 className="mt-4 text-5xl font-extrabold leading-[1.08] sm:text-6xl text-black">
                Observe,
                <br />
                Innovate,
                <br />
                <span className="text-primary">Impact.</span>
              </h1>
              <p className="mt-6 max-w-lg text-base leading-7 text-foreground/80">
                Young India&apos;s Knowledge &amp; Technology Initiative — a 100-day journey
                empowering students, researchers, and startups to build solutions for Viksit Bharat.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/register" className="button button-primary">
                  Register Your Team <ArrowRight size={17} />
                </Link>
                <a href="#about" className="button button-secondary">
                  Watch Overview
                </a>
              </div>
            </div>
          </div>
          <CountdownTimer />
        </section>
        <section id="about" className="pt-36 sm:pt-[200px] pb-0">
          <div className="site-shell grid gap-10 lg:grid-cols-[.7fr_1fr_1fr_1fr]">
            <h2 className="text-4xl font-extrabold">
              What
              <br />
              is SEWA?
            </h2>
            {[
              [
                "Young India’s Initiative",
                "A national movement launched at DTU to transform grassroots challenges into sustainable, working prototypes.",
              ],
              [
                "100-Day Innovation Journey",
                "A structured transition from concept and design to testing and deployment, connecting innovators with technical mentorship.",
              ],
              [
                "Ideas to Deployment",
                "An end-to-end process ensuring every validated solution reaches its intended community or national beneficiary.",
              ],
            ].map(([t, p]) => (
              <article key={t} className="info-column">
                <h3>{t}</h3>
                <p>{p}</p>
                <a href="#steps">
                  More Info <ArrowRight size={16} />
                </a>
              </article>
            ))}
          </div>
        </section>
        <section id="announcements" className="live-announcements pt-20 sm:pt-[100px] pb-0 scroll-mt-20">
          <div className="site-shell">
            {/* Header row with title on left and Live pill badge on right */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <p className="eyebrow">Important Notices</p>
                <h2 className="section-title">Live Announcement</h2>
                <p className="section-subtitle">
                  Stay updated with recent circulars, dates, and official notices.
                </p>
              </div>

              {/* Live indicator badge */}
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-200/80 text-red-600 font-bold text-xs shadow-xs self-start sm:self-center select-none">
                <span>Live</span>
                <span className="relative flex size-2.5">
                  <span className="animate-ping absolute inline-flex size-full rounded-full bg-red-400 opacity-75" />
                  <span className="relative inline-flex rounded-full size-2.5 bg-red-600" />
                </span>
              </div>
            </div>

            {/* Search and Category Filter Row */}
            <div className="mt-8 grid gap-3 sm:grid-cols-[1fr_220px]">
              <label className="flex min-h-[46px] items-center gap-2.5 rounded-xl bg-[#f1f3f5] px-4 text-gray-500 focus-within:bg-white focus-within:ring-2 focus-within:ring-[#ff5a5f]/20 focus-within:border-[#ff5a5f] border border-transparent transition-all">
                <Search size={18} className="shrink-0 text-gray-400" />
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search announcements..."
                  className="w-full bg-transparent text-sm text-gray-900 placeholder-gray-400 outline-none"
                />
              </label>

              <label className="flex min-h-[46px] items-center justify-between rounded-xl bg-[#f1f3f5] px-4 text-gray-700 cursor-pointer focus-within:bg-white focus-within:ring-2 focus-within:ring-[#ff5a5f]/20 focus-within:border-[#ff5a5f] border border-transparent transition-all">
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full bg-transparent text-sm font-medium outline-none cursor-pointer"
                >
                  <option>All Categories</option>
                  <option>Problem Statements</option>
                  <option>Mentorship</option>
                  <option>Guidelines</option>
                  <option>Evaluation</option>
                  <option>Announcements</option>
                </select>
                <ChevronDown size={18} className="shrink-0 text-gray-500 pointer-events-none" />
              </label>
            </div>

            {/* Scrollable Container */}
            <div className="relative mt-7">
              <div className="space-y-4 max-h-[540px] overflow-y-auto pb-16 pr-1.5 scrollbar-thin scrollbar-thumb-gray-300">
                {filtered.map((n, i) => (
                  <article
                    key={n[1]}
                    className="rounded-2xl bg-[#f4f5f7] p-5 sm:p-6 transition-all duration-200 hover:bg-[#eceef2] hover:shadow-xs"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <span className="text-xs text-gray-500 font-medium tracking-tight">
                        12.Sept.2026 10:30 A.M. · {n[0]}
                      </span>

                      <button
                        type="button"
                        onClick={() => setOpen(open === i ? null : i)}
                        className="flex items-center gap-1.5 text-xs font-bold text-[#ff5a5f] hover:text-[#e03b40] transition-colors cursor-pointer shrink-0 select-none"
                      >
                        <span>{open === i ? "Hide Details" : "View Full Details"}</span>
                        <ChevronDown
                          size={14}
                          className={`transition-transform duration-200 ${open === i ? "rotate-180" : ""}`}
                        />
                      </button>
                    </div>

                    <h3 className="mt-2 text-base sm:text-lg font-bold text-black tracking-tight leading-snug">
                      {n[1]}
                    </h3>
                    <p className="mt-1.5 text-xs sm:text-sm text-gray-600 leading-relaxed max-w-3xl">
                      {n[2]}
                    </p>

                    {open === i && (
                      <div className="mt-4 pt-3.5 border-t border-gray-200/90 text-xs text-gray-700 leading-relaxed animate-fade-in">
                        {n[3] ||
                          "Complete circulars, guidelines, and submission links are published through the official DTU SEWA portal."}
                      </div>
                    )}
                  </article>
                ))}
              </div>

              {/* Subtle Grey Blur Overlay confined strictly to Content Width */}
              <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-[26px] sm:h-[34px] bg-gradient-to-t from-gray-400/35 via-gray-300/20 to-transparent backdrop-blur-[2px] rounded-b-2xl" />
            </div>
          </div>
        </section>
        <section id="steps" className="pt-20 sm:pt-[100px] pb-20 sm:pb-[100px] overflow-hidden scroll-mt-20">
          <div className="site-shell grid items-center gap-12 lg:gap-16 lg:grid-cols-2">
            <div>
              <p className="text-xs sm:text-[13px] font-semibold text-gray-500 tracking-normal">
                Simple &amp; Structured Process
              </p>
              <h2 className="mt-2 text-3xl sm:text-4xl md:text-[42px] font-extrabold text-[#0e1726] tracking-tight leading-[1.15]">
                Join The Challenge
                <br />
                In 3 Simple Steps
              </h2>

              <div className="mt-8 sm:mt-10 space-y-6 sm:space-y-7">
                {/* Step 1 */}
                <div className="flex items-start gap-4 sm:gap-4.5">
                  <div className="size-11 sm:size-12 rounded-xl bg-[#e5a000] flex items-center justify-center text-white shrink-0 shadow-xs">
                    <BoxSelect size={20} strokeWidth={2.2} />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-[15px] font-bold text-gray-900 leading-snug">
                      Select Track &amp; Problem Statement
                    </h3>
                    <p className="mt-1 text-xs sm:text-[13px] text-gray-500 leading-relaxed max-w-sm">
                      Choose between the 5 National Themes or identify a local community challenge across 10 grassroots sectors.
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex items-start gap-4 sm:gap-4.5">
                  <div className="size-11 sm:size-12 rounded-xl bg-[#f04f43] flex items-center justify-center text-white shrink-0 shadow-xs">
                    <FileEdit size={20} strokeWidth={2.2} />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-[15px] font-bold text-gray-900 leading-snug">
                      Register Team &amp; Submit Concept
                    </h3>
                    <p className="mt-1 text-xs sm:text-[13px] text-gray-500 leading-relaxed max-w-sm">
                      Enter team details under your eligibility category and upload your initial solution and implementation plan.
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex items-start gap-4 sm:gap-4.5">
                  <div className="size-11 sm:size-12 rounded-xl bg-[#08677a] flex items-center justify-center text-white shrink-0 shadow-xs">
                    <Award size={20} strokeWidth={2.2} />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-[15px] font-bold text-gray-900 leading-snug">
                      Confirm &amp; Track Regional Review
                    </h3>
                    <p className="mt-1 text-xs sm:text-[13px] text-gray-500 leading-relaxed max-w-sm">
                      Complete registration through the portal, receive your Team ID, and track regional screening results.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Challenge Card with Soft Ambient Glow */}
            <div className="relative flex items-center justify-center lg:justify-end">
              {/* Soft Rose Ambient Glow behind top-right of the card */}
              <div className="absolute -top-12 -right-6 sm:-top-16 sm:-right-10 w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-rose-400/20 blur-3xl pointer-events-none" />

              <article className="relative z-10 w-full max-w-[340px] sm:max-w-[370px] rounded-[24px] sm:rounded-[28px] bg-white p-4 sm:p-5 shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-gray-100/90 transition-all duration-300 hover:shadow-[0_25px_60px_rgba(0,0,0,0.12)] hover:-translate-y-1">
                <div className="overflow-hidden rounded-2xl aspect-[16/10] w-full bg-gray-100">
                  <img
                    src={studentsImage}
                    alt="Students collaborating on an innovation prototype"
                    loading="lazy"
                    width={800}
                    height={500}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="pt-3.5">
                  <h3 className="text-sm sm:text-[15px] font-bold text-gray-900 tracking-tight">
                    Youth Innovation Challenge
                  </h3>
                  <p className="mt-1 text-[11px] sm:text-xs text-gray-500 font-medium">
                    17 Sep – 25 Dec <span className="mx-1.5 text-gray-300 font-light">|</span> Coordinated by DTU
                  </p>

                  <div className="mt-3.5 flex items-center gap-2">
                    <div className="size-7 sm:size-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 shadow-2xs">
                      <Compass size={14} strokeWidth={2.2} />
                    </div>
                    <div className="size-7 sm:size-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 shadow-2xs">
                      <Map size={14} strokeWidth={2.2} />
                    </div>
                    <div className="size-7 sm:size-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 shadow-2xs">
                      <Send size={13} strokeWidth={2.2} />
                    </div>
                  </div>

                  <div className="mt-5 flex items-center gap-2 text-[11px] sm:text-xs text-gray-500 font-medium">
                    <BarChart3 size={14} className="text-gray-400 shrink-0" strokeWidth={2.2} />
                    <span>5 Regional Hubs • 100-Day Journey</span>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export function AuthPage({ mode }: { mode: "login" | "register" }) {
  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState("");

  // States for register page
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  // OTP states
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [otpLoading, setOtpLoading] = useState(false);
  const [otpTimer, setOtpTimer] = useState(0);

  useEffect(() => {
    if (otpTimer <= 0) return;
    const id = setInterval(() => setOtpTimer((t) => t - 1), 1000);
    return () => clearInterval(id);
  }, [otpTimer]);

  const handleSendOtp = () => {
    if (!phone || otpLoading || otpTimer > 0) return;
    setOtpLoading(true);
    // Simulate sending OTP
    setTimeout(() => {
      setOtpLoading(false);
      setOtpSent(true);
      setOtpTimer(60);
    }, 1000);
  };

  const submit = (e: FormEvent) => {
    e.preventDefault();
    setMessage(
      mode === "login"
        ? "Sign-in details received."
        : "Registration details received! Welcome to SEWA 2026.",
    );
  };

  if (mode === "login") {
    return (
      <div>
        <Header />
        <main className="site-shell py-12">
          <div className="auth-layout">
            <div className="auth-photo">
              <img
                src={campusImage}
                alt="Delhi Technological University campus"
                width={1600}
                height={900}
              />
            </div>
            <section className="auth-panel">
              <Brand />
              <div>
                <p className="eyebrow">Welcome back</p>
                <h1 className="mt-2 text-3xl font-extrabold">Sign in to SEWA</h1>
                <p className="mt-2 text-sm text-muted-foreground">
                  Access your challenge workspace and submissions.
                </p>
              </div>
              <form onSubmit={submit} className="space-y-4">
                <Field label="Email or phone number" placeholder="you@example.com" type="email" />
                <label className="field">
                  <span>Password</span>
                  <div className="relative">
                    <input
                      required
                      type={visible ? "text" : "password"}
                      placeholder="Enter password"
                    />
                    <button
                      type="button"
                      aria-label="Show password"
                      onClick={() => setVisible(!visible)}
                    >
                      <Eye size={17} />
                    </button>
                  </div>
                </label>
                <div className="flex items-center justify-between text-xs">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" /> Remember me
                  </label>
                  <a href="#" className="text-link">
                    Forgot password?
                  </a>
                </div>
                <button className="button button-primary w-full justify-center" type="submit">
                  Sign in
                </button>
                {message && (
                  <p role="status" className="text-center text-sm font-semibold text-success">
                    {message}
                  </p>
                )}
              </form>
              <div className="divider">
                <span>or</span>
              </div>
              <button className="button button-dark w-full justify-center" type="button">
                G&nbsp; Continue with Google
              </button>
              <p className="text-center text-xs text-muted-foreground">
                Don’t have an account?{" "}
                <Link className="text-link" to="/register">
                  Sign up now
                </Link>
              </p>
            </section>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#fbfbfb]">
      <Header />
      <main className="flex-1 w-full max-w-[1120px] mx-auto px-4 py-8 sm:py-12 flex items-center justify-center">
        <div className="relative w-full rounded-2xl sm:rounded-3xl border-[1.5px] border-[#ff5a5f] bg-white overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.06)]">
          {/* DTU Campus Aerial Background */}
          <div
            className="absolute inset-0 bg-cover bg-center pointer-events-none"
            style={{
              backgroundImage: `url(${campusImage})`,
              backgroundPosition: "center 48%",
            }}
          />
          {/* Translucent milky white overlay wash */}
          <div className="absolute inset-0 bg-white/75 backdrop-blur-[1px] pointer-events-none" />

          {/* Top-Left Brand Typography */}
          <div className="absolute top-6 left-6 sm:top-8 sm:left-9 z-10 select-none">
            <div className="text-xl sm:text-2xl font-black tracking-tight leading-none">
              <span className="text-[#ff5a5f]">SEWA</span>{" "}
              <span className="text-black font-black">2026</span>
            </div>
            <div className="text-xs sm:text-[13px] font-bold text-black leading-tight mt-1">
              DTU Youth<br />Innovation
            </div>
          </div>

          {/* Center Form Container */}
          <div className="relative z-10 flex min-h-[580px] sm:min-h-[640px] items-center justify-center px-4 py-16 sm:py-20">
            <div className="w-full max-w-[360px] sm:max-w-[380px]">
              <form onSubmit={submit} className="space-y-3.5">
                <div>
                  <label className="block text-[11px] font-semibold text-gray-800 mb-1">
                    Name
                  </label>
                  <div className="space-y-2">
                    <input
                      required
                      type="text"
                      placeholder="First name"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className="w-full h-10 px-3.5 rounded-md bg-white border border-gray-200/90 text-xs text-gray-800 placeholder-gray-400 shadow-xs focus:outline-none focus:ring-1 focus:ring-[#ff5a5f] focus:border-[#ff5a5f] transition-all"
                    />
                    <input
                      required
                      type="text"
                      placeholder="Last name"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      className="w-full h-10 px-3.5 rounded-md bg-white border border-gray-200/90 text-xs text-gray-800 placeholder-gray-400 shadow-xs focus:outline-none focus:ring-1 focus:ring-[#ff5a5f] focus:border-[#ff5a5f] transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-gray-800 mb-1">
                    Phone
                  </label>
                  <div className="flex gap-2">
                    <input
                      required
                      type="tel"
                      placeholder="Telephone number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="flex-1 h-10 px-3.5 rounded-md bg-white border border-gray-200/90 text-xs text-gray-800 placeholder-gray-400 shadow-xs focus:outline-none focus:ring-1 focus:ring-[#ff5a5f] focus:border-[#ff5a5f] transition-all"
                    />
                    <button
                      type="button"
                      onClick={handleSendOtp}
                      disabled={!phone || otpLoading || otpTimer > 0}
                      className="h-10 px-3 rounded-md bg-[#ff5a5f] text-white font-semibold text-[10px] sm:text-xs shadow-xs hover:bg-[#ff4757] active:scale-[0.99] transition-all flex items-center gap-1.5 shrink-0 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {otpLoading ? (
                        <span className="inline-block size-3.5 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                      ) : (
                        <Send size={12} />
                      )}
                      {otpTimer > 0 ? `${otpTimer}s` : otpLoading ? "Sending…" : "Send OTP"}
                    </button>
                  </div>

                  {/* OTP input — shown after code is sent */}
                  {otpSent && (
                    <div className="mt-2 animate-fade-in">
                      <label className="block text-[11px] font-semibold text-gray-800 mb-1">
                        Enter OTP
                      </label>
                      <input
                        required
                        type="text"
                        inputMode="numeric"
                        maxLength={6}
                        placeholder="6-digit code"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value.replace(/\D/g, ""))}
                        className="w-full h-10 px-3.5 rounded-md bg-white border border-[#ff5a5f]/60 text-xs text-gray-800 placeholder-gray-400 shadow-xs focus:outline-none focus:ring-1 focus:ring-[#ff5a5f] focus:border-[#ff5a5f] tracking-[0.2em] font-mono transition-all"
                      />
                      <p className="mt-1 text-[10px] text-gray-500">
                        A 6-digit code was sent to{" "}
                        <span className="font-semibold text-gray-700">{phone}</span>.{" "}
                        {otpTimer > 0 ? (
                          <span>Resend in {otpTimer}s</span>
                        ) : (
                          <button
                            type="button"
                            onClick={handleSendOtp}
                            className="text-[#ff5a5f] hover:underline font-medium cursor-pointer"
                          >
                            Resend
                          </button>
                        )}
                      </p>
                    </div>
                  )}
                </div>


                <div>
                  <label className="block text-[11px] font-semibold text-gray-800 mb-1">
                    Login
                  </label>
                  <input
                    required
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full h-10 px-3.5 rounded-md bg-white border border-gray-200/90 text-xs text-gray-800 placeholder-gray-400 shadow-xs focus:outline-none focus:ring-1 focus:ring-[#ff5a5f] focus:border-[#ff5a5f] transition-all"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-gray-800 mb-1">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      required
                      type={visible ? "text" : "password"}
                      placeholder="Enter password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full h-10 pl-3.5 pr-10 rounded-md bg-white border border-gray-200/90 text-xs text-gray-800 placeholder-gray-400 shadow-xs focus:outline-none focus:ring-1 focus:ring-[#ff5a5f] focus:border-[#ff5a5f] transition-all"
                    />
                    <button
                      type="button"
                      onClick={() => setVisible(!visible)}
                      aria-label={visible ? "Hide password" : "Show password"}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-800 transition-colors cursor-pointer"
                    >
                      {visible ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                  </div>
                </div>

                <div className="pt-0.5 flex items-center justify-between">
                  <label className="flex items-center gap-2 cursor-pointer select-none">
                    <button
                      type="button"
                      role="switch"
                      aria-checked={rememberMe}
                      onClick={() => setRememberMe(!rememberMe)}
                      className={`relative inline-flex h-4.5 w-8 shrink-0 items-center rounded-full transition-colors focus:outline-none cursor-pointer ${rememberMe ? "bg-[#ff5a5f]" : "bg-gray-300"
                        }`}
                    >
                      <span
                        className={`inline-block size-3.5 transform rounded-full bg-white shadow-xs transition-transform ${rememberMe ? "translate-x-4" : "translate-x-0.5"
                          }`}
                      />
                    </button>
                    <span className="text-[11px] font-medium text-gray-700">Remember me</span>
                  </label>

                  <a href="#" className="text-[11px] text-[#3b82f6] hover:underline font-normal">
                    Forgot password?
                  </a>
                </div>

                <button
                  type="submit"
                  className="w-full h-10 mt-1 rounded-md bg-[#ff5a5f] text-white font-bold text-xs sm:text-sm shadow-xs hover:bg-[#ff4757] active:scale-[0.99] transition-all flex items-center justify-center cursor-pointer"
                >
                  Sign in
                </button>

                {message && (
                  <p role="status" className="text-center text-xs font-semibold text-emerald-600 animate-fade-in">
                    {message}
                  </p>
                )}

                <div className="pt-1 pb-0.5">
                  <div className="border-t border-gray-300/80 w-full" />
                </div>

                <button
                  type="button"
                  className="w-full h-10 rounded-md bg-[#2b2e36] text-white font-semibold text-xs shadow-xs hover:bg-[#202228] active:scale-[0.99] transition-all flex items-center justify-center gap-2.5 cursor-pointer"
                >
                  <svg className="size-4 shrink-0" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                  </svg>
                  <span>Or sign in with Google</span>
                </button>

                <p className="pt-1 text-center text-[11px] text-gray-700">
                  Dont have an account?{" "}
                  <Link to="/register" className="text-[#3b82f6] hover:underline font-medium">
                    Sign up now
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

function Field({
  label,
  placeholder,
  type = "text",
}: {
  label: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <label className="field">
      <span>{label}</span>
      <input required type={type} placeholder={placeholder} />
    </label>
  );
}

