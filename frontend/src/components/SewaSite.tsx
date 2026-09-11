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
  Lightbulb,
  Map,
  Play,
  Rocket,
  Search,
  Send,
  ShieldCheck,
  Trophy,
  Twitter,
  Wrench,
} from "lucide-react";
import { useEffect, useLayoutEffect, useMemo, useRef, useState, type FormEvent } from "react";
import campusImage from "../assets/dtu-campus-aerial.jpeg";
import campus2Image from "../assets/campus2.jpeg";
import campus3Image from "../assets/campus3.jpg";
import campus4Image from "../assets/campus4.jpeg";
import studentsImage from "../assets/sewa-students.jpg";
import dtuLogo from "../assets/dtu_logo.png";
import footerImage from "../assets/footer.jpeg";
import dtuMapPreview from "../assets/dtu-map-preview.png";
import dtuModel from "../assets/dtu-model.png";
import satymevjayteLogo from "../assets/satymevjayte.svg";
import govtofnctLogo from "../assets/govtofnctdelhi.svg";

const heroImages = [
  {
    src: campusImage,
    alt: "Delhi Technological University campus aerial view",
  },
  {
    src: campus2Image,
    alt: "Delhi Technological University campus view 2",
  },
  {
    src: campus3Image,
    alt: "Delhi Technological University campus view 3",
  },
  {
    src: campus4Image,
    alt: "Delhi Technological University campus view 4",
  },
];

export function Brand() {
  return (
    <Link
      to="/"
      className="flex items-center gap-2.5 sm:gap-3.5 group select-none"
      aria-label="SEWA 2026 home"
    >
      {/* 1. Indian Satyamev Jayate Emblem */}
      <img
        src={satymevjayteLogo}
        alt="Satyamev Jayate"
        className="h-12 sm:h-16 md:h-18 w-auto object-contain shrink-0 dark:invert"
      />

      {/* 2. Text of Govt of National Capital Territory of Delhi */}
      <img
        src={govtofnctLogo}
        alt="Government of National Capital Territory of Delhi"
        className="h-[24px] sm:h-[28px] w-auto object-contain shrink-0 dark:invert"
      />
      {/* 3. DTU Logo + SEWA 2026 text */}
      <div className="flex items-center gap-2 sm:gap-2.5">
        <img
          src={dtuLogo}
          alt="Delhi Technological University"
          className="size-9 sm:size-10 object-contain shrink-0"
        />
        <span className="leading-tight">
          <strong className="block text-sm sm:text-base font-bold">
            <span className="text-primary">SEWA</span> 2026
          </strong>
          <small className="block text-[9px] sm:text-[10px] font-bold text-muted-foreground whitespace-nowrap">
            DTU First Youth Innovation Challenge
          </small>
        </span>
      </div>
    </Link>
  );
}

export function Header({ activeNav = "home" }: { activeNav?: "home" | "events" | "guidelines" | "about" } = {}) {
  return (
    <>
      <header className="sticky top-0 z-40 border-b border-border/70 bg-background/95 backdrop-blur">
        <div className="site-shell flex h-18 sm:h-22 items-center justify-between">
          <Brand />
          <nav
            className="hidden items-center gap-8 text-sm font-semibold md:flex"
            aria-label="Primary navigation"
          >
            <Link to="/" className={`nav-link ${activeNav === "home" ? "text-primary font-bold" : ""}`}>
              Home
            </Link>
            <Link to="/events" className={`nav-link ${activeNav === "events" ? "text-primary font-bold" : ""}`}>
              Events
            </Link>
            <a href="/#steps" className={`nav-link ${activeNav === "guidelines" ? "text-primary font-bold" : ""}`}>
              Guidelines
            </a>
            <a href="https://dtu.ac.in" target="_blank" rel="noreferrer" className="nav-link">
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

export function SubscribeSection() {
  return (
    <section aria-label="Subscribe for updates" className="relative z-20 -mb-12 sm:-mb-16">
      <div className="site-shell">
        <div className="rounded-2xl sm:rounded-3xl bg-white border border-gray-100 shadow-[0_16px_45px_rgba(0,0,0,0.07)] px-6 py-6 sm:px-10 sm:py-7 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h3 className="text-2xl sm:text-[28px] font-bold text-gray-900 tracking-tight">
              Subscribe For Updates
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-gray-500 font-medium">
              Let&apos;s subscribe with us and find the fun.
            </p>
          </div>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex items-center rounded-full bg-[#f4f5f7] border border-gray-200/80 pl-4 pr-1.5 py-1.5 w-full sm:w-[300px] md:w-[340px] focus-within:border-primary/50 focus-within:bg-white transition-all shrink-0"
          >
            <input
              type="email"
              placeholder="Enter Email Address"
              className="w-full bg-transparent text-xs sm:text-sm text-gray-800 placeholder-gray-400 font-medium focus:outline-none"
            />
            <button
              type="submit"
              aria-label="Subscribe for updates"
              className="size-8 sm:size-8.5 rounded-full bg-[#ff4d4f] hover:bg-[#ff3535] active:scale-95 text-white flex items-center justify-center shrink-0 shadow-xs transition-all cursor-pointer"
            >
              <ChevronRight size={16} strokeWidth={2.5} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="footer-texture relative overflow-hidden m-0 border-none pt-20 sm:pt-24 pb-12">
      {/* Top subtle fade gradient that blends with the white section above */}
      <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-white via-white/70 to-transparent pointer-events-none z-[1]" />

      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${footerImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center 62%",
          backgroundRepeat: "no-repeat",
          opacity: 0.24,
          filter: "blur(1.5px)",
          WebkitFilter: "blur(1.5px)",
          maskImage: "linear-gradient(to bottom, transparent 0%, black 18%, black 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 18%, black 100%)",
        }}
      />

      {/* Bottom subtle light grey gradient overlay */}
      <div className="absolute bottom-0 inset-x-0 h-52 sm:h-72 bg-gradient-to-t from-gray-200/75 via-gray-100/40 to-transparent pointer-events-none z-[1]" />

      <div className="site-shell relative z-10 grid gap-10 md:grid-cols-12 items-start">
        {/* Column 1: DTU – SEWA 2026, description, social icons */}
        <div className="md:col-span-5">
          <h2 className="mb-2.5 text-xl font-bold text-gray-900 tracking-tight">DTU – SEWA 2026</h2>
          <p className="max-w-md text-sm leading-relaxed text-gray-800 font-medium">
            Young India&apos;s Knowledge &amp; Technology Initiative — SEWA Youth Innovation
            Challenge. Empowering youth to create sustainable, prototype-driven solutions for Viksit
            Bharat.
          </p>

          <div className="mt-6 flex items-center gap-2.5 sm:gap-3">
            <a
              className="size-8 rounded-full bg-white border border-gray-200/90 shadow-2xs flex items-center justify-center text-[#ff4d4f] hover:bg-gray-50 hover:scale-105 active:scale-95 transition-all"
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              <Facebook size={14} fill="currentColor" />
            </a>
            <a
              className="size-8 rounded-full bg-white border border-gray-200/90 shadow-2xs flex items-center justify-center text-[#ff4d4f] hover:bg-gray-50 hover:scale-105 active:scale-95 transition-all"
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              aria-label="X"
            >
              <Twitter size={14} fill="currentColor" />
            </a>
            <a
              className="size-8 rounded-full bg-white border border-gray-200/90 shadow-2xs flex items-center justify-center text-[#ff4d4f] hover:bg-gray-50 hover:scale-105 active:scale-95 transition-all"
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <Instagram size={14} />
            </a>
          </div>
        </div>

        {/* Column 2: Navigation */}
        <div className="md:col-span-3">
          <h3 className="mb-4 text-base font-bold text-gray-900 tracking-tight">Navigation</h3>

          <div className="space-y-2.5 text-sm text-gray-800 font-medium">
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
              Login
            </Link>
          </div>
        </div>

        {/* Column 3: DTU Delhi Map Card */}
        <div className="md:col-span-4 flex justify-start md:justify-end">
          <a
            href="https://maps.google.com/?q=Delhi+Technological+University"
            target="_blank"
            rel="noreferrer"
            className="group block rounded-2xl overflow-hidden border border-gray-200/90 shadow-xs hover:shadow-md hover:border-primary/40 transition-all max-w-[275px] sm:max-w-[290px]"
            title="Open DTU Delhi in Google Maps"
          >
            <img
              src={dtuMapPreview}
              alt="DTU, Delhi Map Location"
              className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-300"
              width={486}
              height={330}
            />
          </a>
        </div>

        {/* Bottom copyright line without top border */}
        <p className="mt-14 sm:mt-20 text-center text-xs text-gray-700 font-medium md:col-span-12">
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
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === heroImages.length - 1 ? 0 : prev + 1));
    }, 5500);

    return () => clearInterval(timer);
  }, [currentSlide]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? heroImages.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === heroImages.length - 1 ? 0 : prev + 1));
  };

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
            {heroImages.map((image, idx) => (
              <img
                key={idx}
                src={image.src}
                alt={image.alt}
                className={`absolute inset-0 size-full object-cover transition-opacity duration-1000 ease-in-out ${
                  idx === currentSlide
                    ? "opacity-100 z-[1]"
                    : "opacity-0 pointer-events-none z-0"
                }`}
                width={1600}
                height={900}
              />
            ))}
            <div className="absolute inset-0 bg-hero-overlay z-[2]" />
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
                100K <span className="font-semibold text-gray-600">Views</span>
              </span>
            </div>
          </div>

          {/* Carousel Arrows */}
          <button
            type="button"
            aria-label="Previous slide"
            onClick={prevSlide}
            className="flex absolute left-3 sm:left-4 md:left-6 top-1/2 -translate-y-1/2 z-20 text-gray-800/80 hover:text-black hover:scale-110 active:scale-95 transition-all cursor-pointer select-none bg-white/30 hover:bg-white/70 backdrop-blur-xs p-1.5 sm:p-2 rounded-full shadow-xs"
          >
            <ChevronLeft size={36} strokeWidth={2.5} className="sm:size-[42px]" />
          </button>
          <button
            type="button"
            aria-label="Next slide"
            onClick={nextSlide}
            className="flex absolute right-3 sm:right-4 md:right-6 top-1/2 -translate-y-1/2 z-20 text-gray-800/80 hover:text-black hover:scale-110 active:scale-95 transition-all cursor-pointer select-none bg-white/30 hover:bg-white/70 backdrop-blur-xs p-1.5 sm:p-2 rounded-full shadow-xs"
          >
            <ChevronRight size={36} strokeWidth={2.5} className="sm:size-[42px]" />
          </button>

          <div className="site-shell relative flex min-h-[570px] items-center z-10">
            <div className="animate-rise max-w-xl py-20">
              <p className="eyebrow">DTU First Youth Innovation Challenge</p>
              <h1 className="mt-4 text-5xl font-extrabold leading-[1.08] sm:text-6xl">
                <span
                  className="block"
                  style={{ color: "#FF6200", textShadow: "0 2px 24px rgba(255,98,0,0.25)" }}
                >
                  Observe,
                </span>
                <span
                  className="block"
                  style={{ color: "#000080", textShadow: "0 2px 24px rgba(0,0,128,0.18)" }}
                >
                  Innovate,
                </span>
                <span
                  className="block"
                  style={{ color: "#138808", textShadow: "0 2px 24px rgba(19,136,8,0.22)" }}
                >
                  Impact.
                </span>
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
          <div className="site-shell grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 items-start">
            <h2 className="text-4xl font-extrabold leading-[1.15]">
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
                    DTU First Youth Innovation Challenge
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
      <SubscribeSection />
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

const stagesData = [
  {
    number: "01",
    name: "IDEATE",
    badge: "Days 1–15 • 17 Sep – 1 Oct 2026",
    description: "Launch of 50 National Problem Statements, online orientation, team registrations, and idea submissions.",
    icon: Lightbulb,
    color: "#ff6200",
    gradient: "from-[#ff6200] to-[#ff7e1a]",
    textColor: "text-[#ff6200]",
    side: "left" as const,
    hasPlay: true,
  },
  {
    number: "02",
    name: "SCREEN",
    badge: "Days 16–30 • 2 – 16 Oct 2026",
    description: "Preliminary eligibility scrutiny, regional screening, and announcement of shortlisted teams on 2 October.",
    icon: Search,
    color: "#f59e0b",
    gradient: "from-[#d97706] to-[#f59e0b]",
    textColor: "text-[#f59e0b]",
    side: "right" as const,
  },
  {
    number: "03",
    name: "BUILD",
    badge: "Days 31–60 • 17 Oct – 15 Nov 2026",
    description: "Expert bootcamps, laboratory/maker-space access, design reviews, and working prototype fabrication.",
    icon: Wrench,
    color: "#059669",
    gradient: "from-[#059669] to-[#10b981]",
    textColor: "text-[#059669]",
    side: "left" as const,
  },
  {
    number: "04",
    name: "VALIDATE",
    badge: "Days 61–80 • 16 Nov – 5 Dec 2026",
    description: "Technical benchmarking, safety/reliability testing, and performance validation.",
    icon: ShieldCheck,
    color: "#0284c7",
    gradient: "from-[#0284c7] to-[#06b6d4]",
    textColor: "text-[#0284c7]",
    side: "right" as const,
  },
  {
    number: "05",
    name: "TEST",
    badge: "Days 81–95 • 6 – 20 Dec 2026",
    description: "Field demonstrations in real environments, usability testing, and cost/sustainability reviews.",
    icon: Rocket,
    color: "#1d4ed8",
    gradient: "from-[#1d4ed8] to-[#2563eb]",
    textColor: "text-[#1d4ed8]",
    side: "left" as const,
  },
  {
    number: "06",
    name: "SELECT",
    badge: "Days 96–100 • 21 – 25 Dec 2026",
    description: "Final report submissions and Regional Jury evaluations to nominate finalists for Delhi.",
    icon: Trophy,
    color: "#6d28d9",
    gradient: "from-[#6d28d9] to-[#7c3aed]",
    textColor: "text-[#6d28d9]",
    side: "right" as const,
  },
];

export function StageTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [pathData, setPathData] = useState("");

  useEffect(() => {
    const computePath = () => {
      if (!containerRef.current) return;
      const cRect = containerRef.current.getBoundingClientRect();
      const playEl = containerRef.current.querySelector<HTMLElement>("[data-play-node]");
      const nodeEls = Array.from(containerRef.current.querySelectorAll<HTMLElement>("[data-node-idx]"));
      const endEl = containerRef.current.querySelector<HTMLElement>("[data-end-node]");

      if (!playEl || nodeEls.length !== 6 || !endEl) return;

      const getPoint = (el: HTMLElement) => {
        const r = el.getBoundingClientRect();
        return {
          x: r.left + r.width / 2 - cRect.left,
          y: r.top + r.height / 2 - cRect.top,
        };
      };

      const play = getPoint(playEl);
      const nodes = nodeEls.map(getPoint);
      const end = getPoint(endEl);

      // Build smooth wide curvy S-path
      let d = `M ${play.x} ${play.y} `;

      // 1. Play button into Node 1
      const dy0 = nodes[0].y - play.y;
      d += `C ${play.x + 25} ${play.y + dy0 * 0.4}, ${nodes[0].x - 10} ${nodes[0].y - dy0 * 0.4}, ${nodes[0].x} ${nodes[0].y} `;

      // 2. Wide curvy wave between nodes
      for (let i = 0; i < nodes.length - 1; i++) {
        const p1 = nodes[i];
        const p2 = nodes[i + 1];
        const dy = p2.y - p1.y;

        if (i % 2 === 0) {
          // From Right node (Stage 1, 3, 5) to Left node (Stage 2, 4, 6)
          // Waves right, swoops across center, into p2
          const cp1x = p1.x + 45;
          const cp1y = p1.y + dy * 0.35;
          const cp2x = p2.x - 45;
          const cp2y = p2.y - dy * 0.35;
          d += `C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${p2.x} ${p2.y} `;
        } else {
          // From Left node (Stage 2, 4) to Right node (Stage 3, 5)
          // Waves left, swoops across center, into p2
          const cp1x = p1.x - 45;
          const cp1y = p1.y + dy * 0.35;
          const cp2x = p2.x + 45;
          const cp2y = p2.y - dy * 0.35;
          d += `C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${p2.x} ${p2.y} `;
        }
      }

      // 3. Node 6 into End dot
      const last = nodes[nodes.length - 1];
      const dyEnd = end.y - last.y;
      d += `C ${last.x - 30} ${last.y + dyEnd * 0.4}, ${end.x - 10} ${end.y - dyEnd * 0.4}, ${end.x} ${end.y}`;

      setPathData(d);
    };

    computePath();
    window.addEventListener("resize", computePath);
    const t1 = setTimeout(computePath, 150);
    const t2 = setTimeout(computePath, 500);
    return () => {
      window.removeEventListener("resize", computePath);
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative max-w-4xl mx-auto py-8 px-2 sm:px-4">
      {/* SVG S-curve wavy connector line */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none -z-0 overflow-visible">
        <path
          d={
            pathData ||
            "M 430 40 C 455 75, 485 100, 490 132 C 535 170, 310 195, 345 231 C 310 265, 535 295, 490 330 C 535 365, 310 395, 345 426 C 310 460, 535 490, 490 526 C 535 560, 310 590, 345 623 C 320 645, 420 655, 430 675"
          }
          fill="none"
          stroke="#94a3b8"
          strokeWidth="2.5"
          strokeDasharray="6 6"
          strokeLinecap="round"
        />
      </svg>

      {/* Top Play Button on centerline */}
      <div className="flex justify-center mb-6">
        <div
          data-play-node
          className="size-8 sm:size-9 rounded-full bg-[#ff6200] flex items-center justify-center text-white shadow-md hover:scale-110 transition-transform z-10"
        >
          <Play size={13} fill="currentColor" className="ml-0.5" />
        </div>
      </div>

      <div className="space-y-10 sm:space-y-14">
        {stagesData.map((stage, idx) => {
          const Icon = stage.icon;
          const isLeft = stage.side === "left";

          return (
            <div key={stage.number} className={`relative flex ${isLeft ? "justify-start" : "justify-end"}`}>
              <div className="w-full max-w-[460px] sm:max-w-[495px]">
                {/* Stage Label above Card */}
                <div className={`mb-2 text-left ${isLeft ? "pl-2" : "pl-8 sm:pl-10"}`}>
                  <span className="text-[11px] sm:text-xs font-bold text-gray-500 uppercase tracking-widest block">
                    STAGE
                  </span>
                  <span className={`text-3xl sm:text-4xl font-black ${stage.textColor} leading-none`}>
                    {stage.number}
                  </span>
                </div>

                {isLeft ? (
                  /* Left Card: Card Content + White Circle + Triangle Arrow + Target Node */
                  <div className="flex items-center">
                    <div
                      className={`relative flex-1 rounded-full bg-gradient-to-r ${stage.gradient} py-2.5 sm:py-3.5 pl-5 sm:pl-7 pr-2 shadow-[0_12px_28px_rgba(0,0,0,0.13)] text-white flex items-center justify-between gap-2.5 sm:gap-3 transition-all hover:scale-[1.01]`}
                    >
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-base sm:text-lg font-extrabold tracking-wide uppercase">
                            {stage.name}
                          </span>
                          <span className="text-[10px] sm:text-[11px] font-medium bg-white/20 backdrop-blur-xs px-2.5 py-0.5 rounded-full whitespace-nowrap text-white">
                            {stage.badge}
                          </span>
                        </div>
                        <p className="mt-1 text-xs sm:text-[13px] text-white/95 leading-relaxed font-normal">
                          {stage.description}
                        </p>
                      </div>

                      {/* White circular badge on right */}
                      <div className="size-11 sm:size-13 rounded-full bg-white text-gray-900 shadow-md flex items-center justify-center shrink-0 mr-0.5">
                        <Icon size={20} strokeWidth={2.2} />
                      </div>
                    </div>

                    {/* Speech-bubble arrow pointer pointing RIGHT */}
                    <div
                      className="w-0 h-0 border-y-[9px] border-y-transparent shrink-0 -mr-0.5"
                      style={{
                        borderLeftWidth: "12px",
                        borderLeftStyle: "solid",
                        borderLeftColor: stage.color,
                      }}
                    />

                    {/* Bullseye target node */}
                    <div
                      data-node-idx={idx}
                      className="size-6 sm:size-6.5 rounded-full border-[2.5px] bg-white flex items-center justify-center shrink-0 shadow-xs z-10 ml-2"
                      style={{ borderColor: stage.color }}
                    >
                      <div className="size-2 sm:size-2.5 rounded-full" style={{ backgroundColor: stage.color }} />
                    </div>
                  </div>
                ) : (
                  /* Right Card: Target Node + Triangle Arrow + White Circle + Card Content */
                  <div className="flex items-center">
                    {/* Bullseye target node */}
                    <div
                      data-node-idx={idx}
                      className="size-6 sm:size-6.5 rounded-full border-[2.5px] bg-white flex items-center justify-center shrink-0 shadow-xs z-10 mr-2"
                      style={{ borderColor: stage.color }}
                    >
                      <div className="size-2 sm:size-2.5 rounded-full" style={{ backgroundColor: stage.color }} />
                    </div>

                    {/* Speech-bubble arrow pointer pointing LEFT */}
                    <div
                      className="w-0 h-0 border-y-[9px] border-y-transparent shrink-0 -ml-0.5"
                      style={{
                        borderRightWidth: "12px",
                        borderRightStyle: "solid",
                        borderRightColor: stage.color,
                      }}
                    />

                    <div
                      className={`relative flex-1 rounded-full bg-gradient-to-r ${stage.gradient} py-2.5 sm:py-3.5 pr-5 sm:pr-7 pl-2 shadow-[0_12px_28px_rgba(0,0,0,0.13)] text-white flex items-center gap-2.5 sm:gap-3 transition-all hover:scale-[1.01]`}
                    >
                      {/* White circular badge on left */}
                      <div className="size-11 sm:size-13 rounded-full bg-white text-gray-900 shadow-md flex items-center justify-center shrink-0 ml-0.5">
                        <Icon size={20} strokeWidth={2.2} />
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-base sm:text-lg font-extrabold tracking-wide uppercase">
                            {stage.name}
                          </span>
                          <span className="text-[10px] sm:text-[11px] font-medium bg-white/20 backdrop-blur-xs px-2.5 py-0.5 rounded-full whitespace-nowrap text-white">
                            {stage.badge}
                          </span>
                        </div>
                        <p className="mt-1 text-xs sm:text-[13px] text-white/95 leading-relaxed font-normal">
                          {stage.description}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Ending Purple Dot on centerline */}
      <div className="flex justify-center mt-8">
        <div data-end-node className="size-3.5 rounded-full bg-[#7c3aed] shadow-xs z-10" />
      </div>
    </div>
  );
}

export function EventsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header activeNav="events" />

      <main className="flex-1">
        {/* Hero Section: Discover What's Happening */}
        <section className="pt-12 sm:pt-16 lg:pt-20 pb-16 sm:pb-20 border-b border-gray-100">
          <div className="site-shell grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-7">
              <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold text-gray-900 tracking-tight leading-[1.12]">
                Discover What&apos;s
                <span className="block text-[#ff4d4f] mt-1.5 sm:mt-2">Happening</span>
              </h1>
              <p className="mt-5 sm:mt-6 text-sm sm:text-base text-gray-600 leading-relaxed max-w-lg font-normal">
                Discover the key events of the SEWA Youth Innovation Challenge—from the launch and
                innovation showcase to mentoring, prototype development, regional demonstrations, and
                the Grand Finale.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#launch-event"
                  className="rounded-full bg-[#ff4d4f] hover:bg-[#ff3535] active:scale-95 text-white font-bold px-7 py-3 text-sm shadow-[0_8px_22px_rgba(255,77,79,0.28)] hover:shadow-lg transition-all"
                >
                  Explore Events
                </a>
                <a
                  href="#roadmap"
                  className="rounded-full bg-white hover:bg-gray-50 active:scale-95 text-gray-800 border border-gray-200/90 font-bold px-7 py-3 text-sm shadow-2xs hover:border-gray-300 transition-all"
                >
                  View Timeline
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.12)] border border-gray-100">
                <img
                  src={campusImage}
                  alt="DTU Campus Aerial View"
                  className="w-full h-[320px] sm:h-[380px] lg:h-[420px] object-cover"
                  width={800}
                  height={500}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: National Launch Event */}
        <section id="launch-event" className="py-16 sm:py-24 bg-white scroll-mt-16 border-b border-gray-100">
          <div className="site-shell grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left: Model Photo with offset decorative backdrop */}
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="relative max-w-md mx-auto lg:max-w-none">
                <div className="absolute -top-5 -left-5 sm:-top-7 sm:-left-7 w-full h-full rounded-3xl bg-gradient-to-br from-rose-100/60 via-rose-50/40 to-orange-50/50 -z-10 blur-xs" />
                <div className="rounded-3xl overflow-hidden shadow-[0_18px_45px_rgba(0,0,0,0.08)] border border-gray-100 bg-white">
                  <img
                    src={dtuModel}
                    alt="DTU Amphitheatre Scale Architectural Model"
                    className="w-full h-auto object-cover"
                    width={566}
                    height={538}
                  />
                </div>
              </div>
            </div>

            {/* Right: Text details */}
            <div className="lg:col-span-6 order-1 lg:order-2">
              <span className="text-xs sm:text-[13px] font-bold tracking-widest text-[#ff4d4f] uppercase">
                NATIONAL LAUNCH EVENT
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-gray-900 tracking-tight leading-[1.18]">
                Kickstarting SEWA 2026<br />At Delhi Technological University
              </h2>
              <p className="mt-5 text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
                Join us on 17 September 2026 for the grand inaugural ceremony and National Innovation
                Festival at DTU. The launch brings together leadership from ministries, academia, and
                industry to unveil the national innovation portal, release the 50 flagship problem
                statements, and kick off the nationwide 100-day innovation journey toward Viksit Bharat.
              </p>
              <a
                href="#roadmap"
                className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#ff4d4f] hover:text-[#e03a3a] transition-colors group"
              >
                <span>View Launch Schedule</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </section>

        {/* Section 3: Competition Roadmap */}
        <section id="roadmap" className="py-16 sm:py-24 bg-white scroll-mt-16">
          <div className="site-shell">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Left Column: Heading & Description */}
              <div className="lg:col-span-6">
                <span className="text-xs sm:text-[13px] font-bold tracking-widest text-[#ff4d4f] uppercase">
                  COMPETITION ROADMAP
                </span>
                <h2 className="mt-3 text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-gray-900 tracking-tight leading-[1.18]">
                  The 100-Day<br />Innovation Journey
                </h2>
                <p className="mt-5 text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
                  Following the national launch, participants embark on a rigorous, milestone-driven
                  pathway from September to December 2026. Moving from initial problem identification
                  through regional mentoring, prototyping, and rigorous field testing, the challenge
                  culminates in proven, deployable solutions ready for national impact.
                </p>
                <a
                  href="#stages"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#ff4d4f] hover:text-[#e03a3a] transition-colors group"
                >
                  <span>Explore the 6 Stages Below</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              {/* Right Column: 3-Image Collage */}
              <div className="lg:col-span-6">
                <div className="relative max-w-lg mx-auto lg:max-w-none">
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-rose-50/70 via-purple-50/40 to-amber-50/50 -z-10 translate-x-3 translate-y-3" />
                  <div className="grid grid-cols-12 gap-3 sm:gap-4 items-center p-3 sm:p-4">
                    <div className="col-span-6 space-y-3 sm:space-y-4">
                      <div className="rounded-2xl overflow-hidden shadow-md border border-white">
                        <img
                          src={studentsImage}
                          alt="Students gathering at DTU amphitheatre"
                          className="w-full h-36 sm:h-44 object-cover"
                        />
                      </div>
                      <div className="rounded-2xl overflow-hidden shadow-md border border-white">
                        <img
                          src={campus3Image}
                          alt="DTU Campus aerial perspective"
                          className="w-full h-40 sm:h-48 object-cover"
                        />
                      </div>
                    </div>
                    <div className="col-span-6">
                      <div className="rounded-2xl overflow-hidden shadow-md border border-white">
                        <img
                          src={campus4Image}
                          alt="DTU Campus academic block sunset"
                          className="w-full h-[300px] sm:h-[380px] object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 4: 6-Stage Timeline */}
            <div id="stages" className="mt-20 sm:mt-28 scroll-mt-20">
              <StageTimeline />
            </div>
          </div>
        </section>
      </main>

      {/* Floating Subscribe Card */}
      <SubscribeSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}

