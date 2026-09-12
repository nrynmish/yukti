import { Link, useNavigate } from "@tanstack/react-router";
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
  X,
} from "lucide-react";
import { useEffect, useLayoutEffect, useMemo, useRef, useState, type FormEvent } from "react";
import { ApiError, authApi } from "../lib/api";
import { useAuth } from "../lib/auth";
import campusImage from "../assets/dtu-campus-aerial.jpeg";
import campus2Image from "../assets/campus2.jpeg";
import campus3Image from "../assets/campus3.jpg";
import campus4Image from "../assets/campus4.jpeg";
import studentsImage from "../assets/sewa-students.jpg";
import dtuLogo from "../assets/dtu_logo.png";
import footerImage from "../assets/footer.jpeg";
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
      className="flex items-center gap-2 sm:gap-2.5 group select-none min-w-0"
      aria-label="SEWA 2026 home"
    >
      {/* 1. Indian Satyamev Jayate Emblem */}
      <img
        src={satymevjayteLogo}
        alt="Satyamev Jayate"
        className="h-9 sm:h-11 md:h-13 w-auto object-contain shrink-0 dark:invert"
      />

      {/* 2. Text of Govt of National Capital Territory of Delhi */}
      <img
        src={govtofnctLogo}
        alt="Government of National Capital Territory of Delhi"
        className="h-[19px] sm:h-[23px] md:h-[26px] w-auto object-contain shrink dark:invert"
      />

      {/* 3. DTU Logo + SEWA 2026 text */}
      <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
        <img
          src={dtuLogo}
          alt="Delhi Technological University"
          className="size-7 sm:size-8 md:size-9 object-contain shrink-0"
        />
        <span className="leading-tight min-w-0">
          <strong className="block text-[11px] sm:text-sm md:text-base font-bold whitespace-nowrap">
            <span className="text-primary">SEWA</span> 2026
          </strong>
          <small className="block text-[8px] sm:text-[9px] font-bold text-muted-foreground">
            DTU First Youth Innovation Challenge
          </small>
        </span>
      </div>
    </Link>

  );
}

export function Header({ activeNav = "home" }: { activeNav?: "home" | "events" | "guidelines" | "about" | "signin" | "signup" | "team-register" } = {}) {
  const { user, isSignedIn, signOut } = useAuth();

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-border/70 bg-background/95 backdrop-blur">
        <div className="site-shell flex h-18 sm:h-22 items-center justify-between">
          <Brand />
          <nav
            className="hidden items-center gap-5 whitespace-nowrap text-sm font-semibold lg:gap-7 md:flex"
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
            <Link
              to="/team-register"
              className={`nav-link ${activeNav === "team-register" ? "text-primary font-bold" : ""}`}
            >
              Register Team
            </Link>
            <a href="https://dtu.ac.in" target="_blank" rel="noreferrer" className="nav-link">
              About DTU
            </a>
            {isSignedIn ? (
              <>
                <span className="max-w-[110px] truncate text-muted-foreground" title={user?.firstName}>
                  Hi, {user?.firstName}
                </span>
                <button
                  type="button"
                  onClick={() => signOut()}
                  className="button button-outline shrink-0 cursor-pointer"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <>
                <Link to="/signin" className="nav-link">
                  Sign In
                </Link>
                <Link to="/signup" className="button button-outline shrink-0">
                  Sign Up
                </Link>
              </>
            )}
          </nav>
          {!isSignedIn && (
            <Link to="/signin" className="button button-outline md:hidden">
              Sign In
            </Link>
          )}
        </div>
      </header>
      <div className="live-updates-bar flex h-10 overflow-hidden bg-muted text-xs">
        <div className="live-updates-label flex shrink-0 items-center bg-primary px-6 font-bold text-primary-foreground">
          Live Updates
        </div>
        <div className="live-updates-ticker-wrap min-w-0 flex-1 overflow-hidden">
          <div className="ticker flex h-full items-center whitespace-nowrap font-medium">
            <span>
              YUKTI 2026 / Rashtriya Innovation Challenge officially launched at Delhi Technological University on 17 September 2026.
            </span>
            <span aria-hidden="true">
              YUKTI 2026 / Rashtriya Innovation Challenge officially launched at Delhi Technological University on 17 September 2026.
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
            <Link className="block hover:text-primary transition-colors" to="/signin">
              Login
            </Link>
          </div>
        </div>

        {/* Column 3: DTU Delhi Interactive Scrollable Map Card */}
        <div className="md:col-span-4 flex justify-start md:justify-end">
          <div className="w-full max-w-[300px] sm:max-w-[320px] rounded-2xl overflow-hidden border border-gray-200/90 hover:border-[#ff4d4f] shadow-[0_14px_35px_rgba(0,0,0,0.12)] hover:shadow-[0_20px_45px_rgba(0,0,0,0.18)] transition-all duration-300 bg-white flex flex-col">
            {/* Top Bar with Status & Google Maps Link */}
            <div className="px-3.5 py-2.5 bg-gray-50/90 border-b border-gray-100 flex items-center justify-between">
              <div className="flex items-center gap-2 min-w-0">
                <span className="size-2 rounded-full bg-[#ff4d4f] shrink-0" />
                <span className="text-xs font-bold text-gray-800 truncate">DTU Campus, Delhi</span>
              </div>
              <a
                href="https://maps.google.com/?q=Delhi+Technological+University"
                target="_blank"
                rel="noreferrer"
                className="text-[11px] font-semibold text-[#ff4d4f] hover:underline shrink-0"
                title="Open in Google Maps"
              >
                Google Maps ↗
              </a>
            </div>

            {/* Interactive Scrollable & Zoomable Map */}
            <div className="relative w-full h-[200px] sm:h-[215px] bg-slate-100">
              <iframe
                title="DTU Delhi Interactive Map"
                srcDoc={`<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
  <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
  <style>
    * { box-sizing: border-box; }
    html, body, #map { margin: 0; padding: 0; width: 100%; height: 100%; overflow: hidden; background: #f8fafc; }
    .leaflet-control-attribution { display: none !important; }
    .leaflet-bar { border-radius: 8px !important; overflow: hidden; border: 1px solid rgba(0,0,0,0.12) !important; box-shadow: 0 2px 6px rgba(0,0,0,0.1) !important; }
    .leaflet-bar a { width: 28px !important; height: 28px !important; line-height: 28px !important; color: #374151 !important; }
    .custom-red-pin { filter: drop-shadow(0 3px 6px rgba(0,0,0,0.35)); }
  </style>
</head>
<body>
  <div id="map"></div>
  <script>
    const map = L.map('map', {
      center: [28.7501, 77.1177],
      zoom: 15,
      zoomControl: true,
      scrollWheelZoom: true
    });
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 19 }).addTo(map);

    const redIcon = L.divIcon({
      className: 'custom-red-pin',
      html: '<svg width="30" height="40" viewBox="0 0 24 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 0C5.37258 0 0 5.37258 0 12C0 19.5 12 32 12 32C12 32 24 19.5 24 12C24 5.37258 18.6274 0 12 0Z" fill="#ff4d4f"/><circle cx="12" cy="11.5" r="4.5" fill="white"/></svg>',
      iconSize: [30, 40],
      iconAnchor: [15, 40],
      popupAnchor: [0, -38]
    });

    L.marker([28.7501, 77.1177], { icon: redIcon }).addTo(map);
  </script>
</body>
</html>`}
                className="w-full h-full border-0"
                loading="lazy"
              />
            </div>
          </div>
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

function getContinuousDiff(idx: number, progress: number, total: number) {
  let diff = ((idx - progress) % total + total) % total;
  if (diff > total / 2) diff -= total;
  return diff;
}

export function VideoShowcaseSection() {
  const [activeIndex, setActiveIndex] = useState(3);
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [xStep, setXStep] = useState(195);

  const prevActiveRef = useRef(activeIndex);
  const isAnimatingRef = useRef(false);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const startYRef = useRef(0);
  const dragOffsetRef = useRef(0);
  const hasDraggedRef = useRef(false);

  useEffect(() => {
    const updateStep = () => {
      if (window.innerWidth < 640) {
        setXStep(130);
      } else if (window.innerWidth < 1024) {
        setXStep(165);
      } else {
        setXStep(195);
      }
    };
    updateStep();
    window.addEventListener("resize", updateStep);
    return () => window.removeEventListener("resize", updateStep);
  }, []);


  
  const videoCards = [
    {
      id: 1,
      title: "SEWA Youth Innovation Challenge",
      date: "17 Sep",
      source: "DTU Youtube",
      image: studentsImage,
      videoUrl: "https://www.youtube.com/embed/KLuTLF3x9sA?si=Su4A0T5r-7cCGXmK",
    },
    {
      id: 2,
      title: "Green Campus Cleanliness Drive",
      date: "12 Sep",
      source: "DTU Media",
      image: studentsImage,
      videoUrl: "https://www.youtube.com/embed/KLuTLF3x9sA?si=Su4A0T5r-7cCGXmK",
    },
    {
      id: 3,
      title: "Solar Power Village Initiative",
      date: "05 Sep",
      source: "SEWA DTU",
      image: studentsImage,
      videoUrl: "https://www.youtube.com/embed/KLuTLF3x9sA?si=Su4A0T5r-7cCGXmK",
    },
    {
      id: 4,
      title: "Digital Literacy For All",
      date: "28 Aug",
      source: "DTU Outreach",
      image: studentsImage,
      videoUrl: "https://www.youtube.com/embed/KLuTLF3x9sA?si=Su4A0T5r-7cCGXmK",
    },
    {
      id: 5,
      title: "Women Empowerment Workshop",
      date: "22 Aug",
      source: "SEWA DTU",
      image: studentsImage,
      videoUrl: "https://www.youtube.com/embed/KLuTLF3x9sA?si=Su4A0T5r-7cCGXmK",
    },
    {
      id: 6,
      title: "Water Conservation Campaign",
      date: "15 Aug",
      source: "DTU Highlights",
      image: studentsImage,
      videoUrl: "https://www.youtube.com/embed/KLuTLF3x9sA?si=Su4A0T5r-7cCGXmK",
    },
    {
      id: 7,
      title: "Rural Health & Medical Drive",
      date: "08 Aug",
      source: "SEWA DTU",
      image: studentsImage,
      videoUrl: "https://www.youtube.com/embed/KLuTLF3x9sA?si=Su4A0T5r-7cCGXmK",
    },
  ];

  const totalCards = videoCards.length;

  const handleAdvance = (step: number) => {
    if (isAnimatingRef.current) return;
    isAnimatingRef.current = true;
    setTimeout(() => {
      isAnimatingRef.current = false;
    }, 360);

    prevActiveRef.current = activeIndex;
    setActiveIndex((prev) => (prev + step + totalCards * 10) % totalCards);
  };

  const handlePrev = () => handleAdvance(-1);
  const handleNext = () => handleAdvance(1);

  const handleSelect = (newIndex: number) => {
    if (newIndex === activeIndex || isAnimatingRef.current) return;
    isAnimatingRef.current = true;
    setTimeout(() => {
      isAnimatingRef.current = false;
    }, 360);

    prevActiveRef.current = activeIndex;
    setActiveIndex((newIndex + totalCards) % totalCards);
  };

  const handlePointerDown = (e: React.PointerEvent) => {
    // Only primary mouse button or touch
    if (e.button !== 0 && e.pointerType === "mouse") return;

    isDraggingRef.current = true;
    startXRef.current = e.clientX;
    startYRef.current = e.clientY;
    dragOffsetRef.current = 0;
    hasDraggedRef.current = false;
    setIsDragging(true);

    const onPointerMove = (moveEvent: PointerEvent) => {
      if (!isDraggingRef.current) return;
      const deltaX = moveEvent.clientX - startXRef.current;
      const deltaY = moveEvent.clientY - startYRef.current;

      // Allow natural vertical page scroll on touch devices if gesture is vertical
      if (!hasDraggedRef.current && Math.abs(deltaY) > Math.abs(deltaX) && Math.abs(deltaY) > 8) {
        isDraggingRef.current = false;
        setIsDragging(false);
        setDragOffset(0);
        window.removeEventListener("pointermove", onPointerMove);
        window.removeEventListener("pointerup", onPointerUp);
        window.removeEventListener("pointercancel", onPointerUp);
        return;
      }

      if (Math.abs(deltaX) > 6) {
        hasDraggedRef.current = true;
      }
      dragOffsetRef.current = deltaX;
      setDragOffset(deltaX);
    };

    const onPointerUp = () => {
      if (!isDraggingRef.current) return;
      isDraggingRef.current = false;
      setIsDragging(false);

      const offset = dragOffsetRef.current;
      const threshold = 35;
      const steps = Math.min(2, Math.max(1, Math.round(Math.abs(offset) / xStep)));
      if (offset < -threshold) {
        prevActiveRef.current = activeIndex;
        setActiveIndex((prev) => (prev + steps + totalCards * 10) % totalCards);
      } else if (offset > threshold) {
        prevActiveRef.current = activeIndex;
        setActiveIndex((prev) => (prev - steps + totalCards * 10) % totalCards);
      }
      setDragOffset(0);
      dragOffsetRef.current = 0;

      // Small delay to prevent accidental click triggers right after drag
      setTimeout(() => {
        hasDraggedRef.current = false;
      }, 50);

      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
      window.removeEventListener("pointercancel", onPointerUp);
    };

    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);
    window.addEventListener("pointercancel", onPointerUp);
  };

  // Continuous progress float: dragging left makes dragOffset < 0, increasing progress smoothly
  const currentProgress = activeIndex - (isDragging ? dragOffset / xStep : 0);

  return (
    <div className="w-full relative z-10 mt-14 sm:mt-20 overflow-hidden select-none pb-8">
      {/* 3D Coverflow Stage */}
      <div
        onPointerDown={handlePointerDown}
        className={`relative w-full h-[375px] sm:h-[415px] md:h-[435px] flex items-center justify-center touch-pan-y ${
          isDragging ? "cursor-grabbing" : "cursor-grab"
        }`}
        style={{ touchAction: "pan-y" }}
      >
        {videoCards.map((card, idx) => {
          const diff = getContinuousDiff(idx, currentProgress, totalCards);
          const prevDiff = getContinuousDiff(idx, prevActiveRef.current, totalCards);

          // Card jumping across boundary at back of the circle teleports with no transition
          const isWrapping = !isDragging && Math.abs(diff - prevDiff) > 2;

          const absDiff = Math.abs(diff);

          const x = diff * xStep;

          // Calm, subtle scale: center card at 1.0, neighbors at ~0.945, outer cards at ~0.89
          const scale = Math.max(0.83, 1 - absDiff * 0.055);

          // Soothing opacity: smooth fade for outer cards, 0 at back of circle
          let opacity = 1;
          if (absDiff >= 2.8) {
            opacity = 0;
          } else if (absDiff > 1) {
            opacity = Math.max(0, 0.88 - (absDiff - 1) * 0.48);
          } else {
            opacity = 1 - absDiff * 0.12;
          }

          // Blur: Center: 0px | Immediate neighbors: 0.75px | Outer cards: 1.35px
          let blurVal = 0;
          if (absDiff >= 0.25) {
            blurVal = absDiff <= 1 ? absDiff * 0.75 : Math.min(1.8, 0.75 + (absDiff - 1) * 0.6);
          }

          const zIndex = Math.round(40 - absDiff * 10);
          const isActive = absDiff < 0.5;

          // Calm, soothing cubic-bezier easing with 550ms glide
          const transitionStyle =
            isDragging || isWrapping
              ? "none"
              : "transform 550ms cubic-bezier(0.22, 1, 0.36, 1), opacity 480ms ease, filter 480ms ease, box-shadow 480ms ease";

          return (
            <div
              key={card.id}
              onClick={() => {
                if (hasDraggedRef.current) return;
                handleSelect(idx);
              }}
              style={{
                transform: `translateX(${x}px) scale(${scale})`,
                opacity,
                filter: blurVal > 0 ? `blur(${blurVal}px)` : "none",
                zIndex,
                pointerEvents: absDiff >= 2.8 ? "none" : "auto",
                transition: transitionStyle,
              }}
              className={`absolute w-[260px] sm:w-[295px] md:w-[320px] rounded-[24px] bg-white border border-gray-100/90 p-3.5 sm:p-4 flex flex-col transition-shadow ${
                isActive
                  ? "shadow-[0_20px_45px_rgba(0,0,0,0.12)] ring-1 ring-black/5"
                  : "shadow-[0_6px_18px_rgba(0,0,0,0.04)] hover:opacity-95"
              }`}
            >
              {/* Video Thumbnail */}
              <div className="relative w-full h-[150px] sm:h-[172px] md:h-[185px] rounded-[18px] overflow-hidden bg-gray-900 group pointer-events-none">
                <img
                  src={card.image}
                  alt={card.title}
                  draggable={false}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 pointer-events-none select-none"
                />
                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-black/25 flex items-center justify-center">
                  <div className="size-12 sm:size-13 rounded-full bg-white/40 backdrop-blur-xs flex items-center justify-center text-white shadow-md group-hover:scale-110 group-hover:bg-white/60 transition-all">
                    <Play size={18} fill="white" className="ml-0.5 text-white" />
                  </div>
                </div>
              </div>

              {/* Details */}
              <div className="pt-3 pb-1 flex flex-col gap-1 text-left">
                <h4 className="text-[13px] sm:text-[14.5px] font-bold text-gray-900 line-clamp-1">
                  {card.title}
                </h4>
                <div className="flex items-center text-[11.5px] sm:text-xs text-gray-400 font-medium">
                  <span>{card.date}</span>
                  <span className="mx-1.5 text-gray-300">|</span>
                  <span>{card.source}</span>
                </div>
                <button
                  type="button"
                  onPointerDown={(e) => e.stopPropagation()}
                  onClick={(e) => {
                    e.stopPropagation();
                    if (hasDraggedRef.current) return;
                    setActiveModal(card.videoUrl);
                  }}
                  className="mt-2.5 w-full py-2.5 rounded-xl bg-[#ff3b30] hover:bg-[#e03126] active:scale-[0.98] text-white text-xs sm:text-[13px] font-bold transition-all shadow-xs cursor-pointer text-center"
                >
                  Watch Now
                </button>
              </div>
            </div>
          );
        })}

        {/* Carousel Navigation Arrows */}
        <button
          type="button"
          aria-label="Previous video"
          onPointerDown={(e) => e.stopPropagation()}
          onClick={handlePrev}
          className="absolute left-2 sm:left-6 md:left-12 z-40 size-11 sm:size-12 rounded-full bg-white/90 hover:bg-white text-gray-700 shadow-[0_4px_18px_rgba(0,0,0,0.08)] border border-gray-100 flex items-center justify-center hover:scale-105 active:scale-95 transition-transform duration-200 cursor-pointer backdrop-blur-xs"
        >
          <ChevronLeft size={22} strokeWidth={2.5} />
        </button>
        <button
          type="button"
          aria-label="Next video"
          onPointerDown={(e) => e.stopPropagation()}
          onClick={handleNext}
          className="absolute right-2 sm:right-6 md:right-12 z-40 size-11 sm:size-12 rounded-full bg-white/90 hover:bg-white text-gray-700 shadow-[0_4px_18px_rgba(0,0,0,0.08)] border border-gray-100 flex items-center justify-center hover:scale-105 active:scale-95 transition-transform duration-200 cursor-pointer backdrop-blur-xs"
        >
          <ChevronRight size={22} strokeWidth={2.5} />
        </button>
      </div>

      {/* Dot Indicators */}
      <div className="flex justify-center items-center gap-1.5 mt-3 sm:mt-4">
        {videoCards.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            onPointerDown={(e) => e.stopPropagation()}
            onClick={() => handleSelect(i)}
            className={`h-1.5 rounded-full transition-all cursor-pointer ${
              i === activeIndex ? "w-6 bg-[#ff3b30]" : "w-1.5 bg-gray-300 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>

      {/* Video Modal Popup */}
      {activeModal && (
        <div
          className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setActiveModal(null)}
        >
          <div
            className="relative w-full max-w-3xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-3 right-3 z-10 size-8 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center transition-all cursor-pointer"
            >
              <X size={18} />
            </button>
            <iframe
              src="https://www.youtube.com/embed/KLuTLF3x9sA?si=Su4A0T5r-7cCGXmK&autoplay=1"
              title="SEWA Video Player"
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
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
                className={`absolute inset-0 size-full object-cover transition-opacity duration-1000 ease-in-out ${idx === currentSlide
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
                <Link to="/signup" className="button button-primary">
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
                "YUKTI (Young India's Knowledge & Technology Initiative) is a national movement launched at DTU to transform grassroots challenges into sustainable, working prototypes.",
              ],
              [
                "100-Day Innovation Journey",
                "A structured transition from concept and design to testing and deployment, connecting innovators with technical mentorship, laboratories, and regional innovation hubs.",
              ],
              [
                "Ideas to Deployment",
                "Unlike conventional hackathons, SEWA focuses on end-to-end impact — ensuring every validated solution reaches its intended community or national beneficiary.",
              ],
            ].map(([t, p]) => (
              <article key={t} className="info-column">
                <h3>{t}</h3>
                <p>{p}</p>
              </article>
            ))}
          </div>

          {/* Video Showcase Section just below What is SEWA */}
          <VideoShowcaseSection />
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
  const navigate = useNavigate();
  const { refresh } = useAuth();

  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  // Email OTP step (shown after a successful signup POST)
  const [emailOtpStep, setEmailOtpStep] = useState(false);
  const [emailDigits, setEmailDigits] = useState<string[]>(["", "", "", "", "", ""]);
  const [emailOtpTimer, setEmailOtpTimer] = useState(60);
  const digitRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    if (!emailOtpStep || emailOtpTimer <= 0) return;
    const id = setInterval(() => setEmailOtpTimer((t) => t - 1), 1000);
    return () => clearInterval(id);
  }, [emailOtpStep, emailOtpTimer]);

  const handleResendEmailOtp = async () => {
    if (busy || emailOtpTimer > 0) return;
    setBusy(true);
    setError("");
    setMessage("");
    try {
      await authApi.resendOtp(email);
      setEmailDigits(["", "", "", "", "", ""]);
      // The server enforces its own cooldown; this timer is only UX.
      setEmailOtpTimer(60);
      setMessage("A new code is on its way.");
      setTimeout(() => digitRefs.current[0]?.focus(), 50);
    } catch (err) {
      setError(err instanceof ApiError ? err.message : "Could not resend the code.");
    } finally {
      setBusy(false);
    }
  };

  const handleVerifyOtp = async () => {
    const code = emailDigits.join("");
    if (code.length < 6 || busy) return;
    setBusy(true);
    setError("");
    setMessage("");
    try {
      // A successful verify sets the session cookie server-side, so the
      // user is signed in from here — no separate signin call needed.
      await authApi.verifyOtp(email, code);
      await refresh();
      setMessage("Email verified! Welcome to SEWA 2026.");
      navigate({ to: "/team-register" });
    } catch (err) {
      setEmailDigits(["", "", "", "", "", ""]);
      digitRefs.current[0]?.focus();
      setError(err instanceof ApiError ? err.message : "Verification failed.");
    } finally {
      setBusy(false);
    }
  };

  const handleDigitInput = (idx: number, val: string) => {
    const digit = val.replace(/\D/g, "").slice(-1);
    const next = [...emailDigits];
    next[idx] = digit;
    setEmailDigits(next);
    if (digit && idx < 5) digitRefs.current[idx + 1]?.focus();
  };

  const handleDigitKeyDown = (idx: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !emailDigits[idx] && idx > 0) {
      digitRefs.current[idx - 1]?.focus();
    }
  };

  const formatTime = (s: number) =>
    `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    if (busy) return;
    setBusy(true);
    setError("");
    setMessage("");

    try {
      if (mode === "login") {
        await authApi.signin(email, password);
        await refresh();
        navigate({ to: "/team-register" });
      } else {
        await authApi.signup({
          firstName,
          lastName,
          email,
          phone: phone || undefined,
          password,
        });
        // Signup already issued the OTP — this screen only collects it.
        setEmailDigits(["", "", "", "", "", ""]);
        setEmailOtpTimer(60);
        setEmailOtpStep(true);
        setTimeout(() => digitRefs.current[0]?.focus(), 100);
      }
    } catch (err) {
      if (err instanceof ApiError) {
        // Prefer the field-level message when Zod rejected the input —
        // "Validation failed" on its own tells the user nothing.
        setError(err.firstFieldError ?? err.message);

        // 403 on signin means the account exists but isn't verified yet;
        // send them straight to the OTP screen instead of a dead end.
        if (mode === "login" && err.status === 403 && /verify/i.test(err.message)) {
          try {
            await authApi.resendOtp(email);
          } catch {
            /* cooldown — the existing code is still valid */
          }
          setEmailDigits(["", "", "", "", "", ""]);
          setEmailOtpTimer(60);
          setEmailOtpStep(true);
        }
      } else {
        setError("Something went wrong. Please try again.");
      }
    } finally {
      setBusy(false);
    }
  };

  if (mode === "login") {
    return (
      <div className="min-h-screen flex flex-col bg-white">
        <Header activeNav="signin" />

        <main className="flex-1 w-full max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 flex items-start justify-center">
          <div className="w-full flex flex-col lg:flex-row items-stretch gap-6">

            {/* Left: Aerial DTU campus photo — same layout as the signup card */}
            <div className="flex-1 min-h-[440px] sm:min-h-[600px] lg:min-h-[660px] rounded-[18px] overflow-hidden shadow-[0_8px_28px_rgba(0,0,0,0.10)]">
              <img
                src={campusImage}
                alt="Delhi Technological University campus aerial view"
                className="size-full object-cover object-[48%_center]"
              />
            </div>

            {/* Right: Form card */}
            <div className="w-full lg:w-[480px] shrink-0 rounded-[18px] border border-[#ff5a5f]/70 bg-white px-8 py-9 shadow-[0_2px_12px_rgba(0,0,0,0.04)] flex flex-col">
              {/* Brand header */}
              <div className="mb-6">
                <Brand />
              </div>

              <div className="mb-5">
                <h2 className="text-xl font-bold text-gray-900">Welcome back</h2>
                <p className="mt-1.5 text-xs text-gray-500 leading-relaxed">
                  Sign in to access your challenge workspace and submissions.
                </p>
              </div>

              <form onSubmit={submit} className="space-y-3">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">Email</label>
                  <input
                    required
                    type="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full h-10 px-3.5 rounded-md bg-[#f2f2f2] border-0 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ff4d4f]/25 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">Password</label>
                  <div className="relative">
                    <input
                      required
                      type={visible ? "text" : "password"}
                      autoComplete="current-password"
                      placeholder="Enter password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full h-10 pl-3.5 pr-10 rounded-md bg-[#f2f2f2] border-0 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ff4d4f]/25 transition-all"
                    />
                    <button
                      type="button"
                      onClick={() => setVisible(!visible)}
                      aria-label={visible ? "Hide password" : "Show password"}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700 transition-colors cursor-pointer"
                    >
                      {visible ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-0.5 select-none">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <button
                      type="button"
                      role="switch"
                      aria-checked={rememberMe}
                      onClick={() => setRememberMe(!rememberMe)}
                      className={`relative inline-flex h-[18px] w-[32px] shrink-0 items-center rounded-full transition-colors focus:outline-none cursor-pointer ${rememberMe ? "bg-[#ff4d4f]" : "bg-[#d9d9d9]"
                        }`}
                    >
                      <span
                        className={`inline-block size-3.5 transform rounded-full bg-white shadow-sm transition-transform ${rememberMe ? "translate-x-[14px]" : "translate-x-[2px]"
                          }`}
                      />
                    </button>
                    <span className="text-xs text-gray-700">Remember me</span>
                  </label>
                  <Link to="/forgot-password" className="text-xs text-[#1890ff] hover:underline font-medium">
                    Forgot password?
                  </Link>
                </div>

                <button
                  type="submit"
                  disabled={busy}
                  className="w-full h-10 rounded-md bg-[#ff5a5f] text-white font-semibold text-sm hover:bg-[#ff3f45] active:scale-[0.99] transition-all flex items-center justify-center cursor-pointer mt-1 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {busy ? "Signing in…" : "Sign in"}
                </button>

                {error && (
                  <p role="alert" className="text-center text-xs font-semibold text-[#ff4d4f]">
                    {error}
                  </p>
                )}
                {message && (
                  <p role="status" className="text-center text-xs font-semibold text-emerald-600">
                    {message}
                  </p>
                )}

                <p className="pt-1 text-center text-xs text-gray-600">
                  Don't have an account?{" "}
                  <Link to="/signup" className="text-[#1890ff] hover:underline font-medium">
                    Sign up
                  </Link>
                </p>
              </form>
            </div>

          </div>
        </main>

        <Footer />
      </div>
    );
  }

  // ─── SIGN UP (register) ───────────────────────────────────────────────────
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header activeNav="signup" />

      <main className="flex-1 w-full max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 flex items-start justify-center">
        <div className="w-full flex flex-col lg:flex-row items-stretch gap-6">

          {/* Left: Aerial DTU campus photo */}
          <div className="flex-1 min-h-[440px] sm:min-h-[600px] lg:min-h-[660px] rounded-[18px] overflow-hidden shadow-[0_8px_28px_rgba(0,0,0,0.10)]">
            <img
              src={campusImage}
              alt="Delhi Technological University campus aerial view"
              className="size-full object-cover object-[48%_center]"
            />
          </div>

          {/* Right: Form card — switches between signup form and OTP verification */}
          <div className="w-full lg:w-[480px] shrink-0 rounded-[18px] border border-[#ff5a5f]/70 bg-white px-8 py-9 shadow-[0_2px_12px_rgba(0,0,0,0.04)] flex flex-col justify-center">
            {/* Brand header */}
            <div className="mb-6">
              <Brand />
            </div>

            {emailOtpStep ? (
              /* ── EMAIL OTP VERIFICATION SCREEN ── */
              <div className="space-y-5">
                <div>
                  <h2 className="text-lg font-bold text-gray-900">Two-Step Verification</h2>
                  <p className="mt-1.5 text-xs text-gray-500 leading-relaxed">
                    We've sent a 6-digit verification code to your registered email/phone number{" "}
                    <span className="font-semibold text-gray-700">
                      {email ? `${email[0]}***@${email.split("@")[1] ?? "dtu.ac.in"}` : "e***@dtu.ac.in"}
                    </span>
                    . Please enter it below to proceed.
                  </p>
                </div>

                {/* 6 digit boxes */}
                <div className="flex gap-2.5 justify-between">
                  {emailDigits.map((d, i) => (
                    <input
                      key={i}
                      ref={(el) => { digitRefs.current[i] = el; }}
                      type="text"
                      inputMode="numeric"
                      maxLength={1}
                      value={d}
                      onChange={(e) => handleDigitInput(i, e.target.value)}
                      onKeyDown={(e) => handleDigitKeyDown(i, e)}
                      onFocus={(e) => e.target.select()}
                      className={`w-11 h-12 rounded-lg border text-center text-base font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#ff4d4f]/40 transition-all
                        ${d ? "border-[#ff4d4f] bg-[#fff5f5]" : "border-gray-200 bg-[#f7f7f7]"}`}
                    />
                  ))}
                </div>

                {/* Timer + Resend row */}
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>
                    Resend code in{" "}
                    <span className={`font-semibold ${emailOtpTimer > 0 ? "text-gray-700" : "text-[#ff4d4f]"}`}>
                      {formatTime(emailOtpTimer)}
                    </span>
                  </span>
                  <button
                    type="button"
                    onClick={handleResendEmailOtp}
                    disabled={busy || emailOtpTimer > 0}
                    className="font-semibold text-[#ff4d4f] hover:underline disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                  >
                    Resend OTP
                  </button>
                </div>

                {/* Verify button */}
                <button
                  type="button"
                  onClick={handleVerifyOtp}
                  disabled={busy || emailDigits.join("").length < 6}
                  className="w-full h-11 rounded-md bg-[#ff5a5f] text-white font-semibold text-sm hover:bg-[#ff3f45] active:scale-[0.99] transition-all flex items-center justify-center cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {busy ? "Verifying…" : "Verify & Proceed"}
                </button>

                {error && (
                  <p role="alert" className="text-center text-xs font-semibold text-[#ff4d4f]">
                    {error}
                  </p>
                )}

                {message && (
                  <p role="status" className="text-center text-xs font-semibold text-emerald-600">
                    {message}
                  </p>
                )}

                {/* Bottom links */}
                <div className="flex items-center justify-between text-xs pt-1">
                  <Link
                    to="/signin"
                    className="flex items-center gap-1 text-gray-500 hover:text-gray-800 transition-colors"
                  >
                    <ChevronLeft size={13} />
                    Back to Login
                  </Link>
                  <button
                    type="button"
                    onClick={() => setEmailOtpStep(false)}
                    className="text-[#ff4d4f] hover:underline font-medium cursor-pointer"
                  >
                    Change email address
                  </button>
                </div>
              </div>
            ) : (

              <form onSubmit={submit} className="space-y-3">
                {/* Name */}
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                    Name
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="First name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="w-full h-10 px-3.5 rounded-md bg-[#f2f2f2] border-0 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ff4d4f]/25 transition-all mb-2"
                  />
                  <input
                    required
                    type="text"
                    placeholder="Last name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="w-full h-10 px-3.5 rounded-md bg-[#f2f2f2] border-0 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ff4d4f]/25 transition-all"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                    Phone
                  </label>
                  <input
                    required
                    type="tel"
                    placeholder="Telephone number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full h-10 px-3.5 rounded-md bg-[#f2f2f2] border-0 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ff4d4f]/25 transition-all"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                    Email
                  </label>
                  <input
                    required
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full h-10 px-3.5 rounded-md bg-[#f2f2f2] border-0 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ff4d4f]/25 transition-all"
                  />
                </div>

                {/* Password */}
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      required
                      type={visible ? "text" : "password"}
                      placeholder="Enter password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full h-10 pl-3.5 pr-10 rounded-md bg-[#f2f2f2] border-0 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ff4d4f]/25 transition-all"
                    />
                    <button
                      type="button"
                      onClick={() => setVisible(!visible)}
                      aria-label={visible ? "Hide password" : "Show password"}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700 transition-colors cursor-pointer"
                    >
                      {visible ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                  </div>
                </div>

                {/* Remember me / Forgot password */}
                <div className="flex items-center justify-between pt-0.5 select-none">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <button
                      type="button"
                      role="switch"
                      aria-checked={rememberMe}
                      onClick={() => setRememberMe(!rememberMe)}
                      className={`relative inline-flex h-[18px] w-[32px] shrink-0 items-center rounded-full transition-colors focus:outline-none cursor-pointer ${rememberMe ? "bg-[#ff4d4f]" : "bg-[#d9d9d9]"
                        }`}
                    >
                      <span
                        className={`inline-block size-3.5 transform rounded-full bg-white shadow-sm transition-transform ${rememberMe ? "translate-x-[14px]" : "translate-x-[2px]"
                          }`}
                      />
                    </button>
                    <span className="text-xs text-gray-700">Remember me</span>
                  </label>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={busy}
                  className="w-full h-10 rounded-md bg-[#ff5a5f] text-white font-semibold text-sm hover:bg-[#ff3f45] active:scale-[0.99] transition-all flex items-center justify-center cursor-pointer mt-1 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {busy ? "Creating account…" : "Create account"}
                </button>

                {error && (
                  <p role="alert" className="text-center text-xs font-semibold text-[#ff4d4f]">
                    {error}
                  </p>
                )}

                {message && (
                  <p role="status" className="text-center text-xs font-semibold text-emerald-600">
                    {message}
                  </p>
                )}

                {/* Footer link */}
                <p className="pt-1 text-center text-xs text-gray-600">
                  Have an account.{" "}
                  <Link to="/signin" className="text-[#1890ff] hover:underline font-medium">
                    Login
                  </Link>
                </p>
              </form>
            )}
          </div>

        </div>
      </main>

      {/* Footer */}
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
    color: "#ff6000",
    gradient: "from-[#ff5e00] to-[#ff7800]",
    shadow: "shadow-[0_16px_36px_rgba(255,94,0,0.35)]",
    textColor: "text-[#ff6000]",
    side: "left" as const,
  },
  {
    number: "02",
    name: "SCREEN",
    badge: "Days 16–30 • 2 – 16 Oct 2026",
    description: "Preliminary eligibility scrutiny, regional screening, and announcement of shortlisted teams on 2 October.",
    icon: Search,
    color: "#f59e0b",
    gradient: "from-[#f59e0b] to-[#fbbf24]",
    shadow: "shadow-[0_16px_36px_rgba(245,158,11,0.35)]",
    textColor: "text-[#f59e0b]",
    side: "right" as const,
  },
  {
    number: "03",
    name: "BUILD",
    badge: "Days 31–60 • 17 Oct – 15 Nov 2026",
    description: "Expert bootcamps, laboratory/maker-space access, design reviews, and working prototype fabrication.",
    icon: Wrench,
    color: "#00a86b",
    gradient: "from-[#00a86b] to-[#10b981]",
    shadow: "shadow-[0_16px_36px_rgba(0,168,107,0.35)]",
    textColor: "text-[#00a86b]",
    side: "left" as const,
  },
  {
    number: "04",
    name: "VALIDATE",
    badge: "Days 61–80 • 16 Nov – 5 Dec 2026",
    description: "Technical benchmarking, safety/reliability testing, and performance validation.",
    icon: ShieldCheck,
    color: "#00b4d8",
    gradient: "from-[#00b4d8] to-[#0096c7]",
    shadow: "shadow-[0_16px_36px_rgba(0,180,216,0.35)]",
    textColor: "text-[#00b4d8]",
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
    shadow: "shadow-[0_16px_36px_rgba(29,78,216,0.35)]",
    textColor: "text-[#1d4ed8]",
    side: "left" as const,
  },
  {
    number: "06",
    name: "SELECT",
    badge: "Days 96–100 • 21 – 25 Dec 2026",
    description: "Final report submissions and Regional Jury evaluations to nominate finalists for Delhi.",
    icon: Trophy,
    color: "#7c3aed",
    gradient: "from-[#7c3aed] to-[#6d28d9]",
    shadow: "shadow-[0_16px_36px_rgba(124,58,237,0.35)]",
    textColor: "text-[#7c3aed]",
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

      const firstNode = nodes[0];
      const lastNode = nodes[nodes.length - 1];
      if (!firstNode || !lastNode) return;

      // Build smooth wide curvy S-path
      let d = `M ${play.x} ${play.y} `;

      // 1. Play button into Node 1
      const dy0 = firstNode.y - play.y;
      d += `C ${play.x + 25} ${play.y + dy0 * 0.4}, ${firstNode.x - 10} ${firstNode.y - dy0 * 0.4}, ${firstNode.x} ${firstNode.y} `;

      // 2. Wide curvy wave between nodes
      for (let i = 0; i < nodes.length - 1; i++) {
        const p1 = nodes[i];
        const p2 = nodes[i + 1];
        if (!p1 || !p2) continue;
        const dy = p2.y - p1.y;

        if (i % 2 === 0) {
          // From Right node (Stage 1, 3, 5) to Left node (Stage 2, 4, 6)
          const cp1x = p1.x + 45;
          const cp1y = p1.y + dy * 0.35;
          const cp2x = p2.x - 45;
          const cp2y = p2.y - dy * 0.35;
          d += `C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${p2.x} ${p2.y} `;
        } else {
          // From Left node (Stage 2, 4) to Right node (Stage 3, 5)
          const cp1x = p1.x - 45;
          const cp1y = p1.y + dy * 0.35;
          const cp2x = p2.x + 45;
          const cp2y = p2.y - dy * 0.35;
          d += `C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${p2.x} ${p2.y} `;
        }
      }

      // 3. Node 6 into End dot
      const dyEnd = end.y - lastNode.y;
      d += `C ${lastNode.x - 30} ${lastNode.y + dyEnd * 0.4}, ${end.x - 10} ${end.y - dyEnd * 0.4}, ${end.x} ${end.y}`;

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
          className="size-10 sm:size-11 rounded-full bg-gradient-to-r from-[#ff5e00] to-[#ff7800] flex items-center justify-center text-white shadow-[0_8px_22px_rgba(255,94,0,0.4)] hover:scale-110 transition-transform z-10 cursor-pointer"
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
              <div className="w-full max-w-[470px] sm:max-w-[505px]">
                {/* Stage Label above Card */}
                <div className={`mb-2 ${isLeft ? "text-left pl-3" : "text-right pr-3"}`}>
                  <span className="text-[11px] sm:text-xs font-bold text-gray-400 uppercase tracking-widest block">
                    STAGE
                  </span>
                  <span className={`text-4xl sm:text-5xl font-black ${stage.textColor} leading-none`}>
                    {stage.number}
                  </span>
                </div>

                {isLeft ? (
                  /* Left Card: Card Content + White Circle + Triangle Arrow + Target Node */
                  <div className="flex items-center">
                    <div
                      className={`relative flex-1 rounded-full bg-gradient-to-r ${stage.gradient} py-3 sm:py-3.5 pl-6 sm:pl-8 pr-2.5 ${stage.shadow} text-white flex items-center justify-between gap-3 sm:gap-4 transition-all hover:scale-[1.01]`}
                    >
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-base sm:text-lg font-extrabold tracking-wide uppercase">
                            {stage.name}
                          </span>
                          <span className="text-[10px] sm:text-[11px] font-semibold bg-white/25 backdrop-blur-xs px-2.5 py-0.5 rounded-full whitespace-nowrap text-white">
                            {stage.badge}
                          </span>
                        </div>
                        <p className="mt-1 text-xs sm:text-[13px] text-white/95 leading-relaxed font-normal">
                          {stage.description}
                        </p>
                      </div>

                      {/* White circular badge on right */}
                      <div className="size-12 sm:size-14 rounded-full bg-white text-gray-900 shadow-md flex items-center justify-center shrink-0 mr-0.5">
                        <Icon size={22} strokeWidth={2.2} />
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
                      className="size-6 sm:size-7 rounded-full border-[2.5px] bg-white flex items-center justify-center shrink-0 shadow-xs z-10 ml-2"
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
                      className="size-6 sm:size-7 rounded-full border-[2.5px] bg-white flex items-center justify-center shrink-0 shadow-xs z-10 mr-2"
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
                      className={`relative flex-1 rounded-full bg-gradient-to-r ${stage.gradient} py-3 sm:py-3.5 pr-6 sm:pr-8 pl-2.5 ${stage.shadow} text-white flex items-center gap-3 sm:gap-4 transition-all hover:scale-[1.01]`}
                    >
                      {/* White circular badge on left */}
                      <div className="size-12 sm:size-14 rounded-full bg-white text-gray-900 shadow-md flex items-center justify-center shrink-0 ml-0.5">
                        <Icon size={22} strokeWidth={2.2} />
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-base sm:text-lg font-extrabold tracking-wide uppercase">
                            {stage.name}
                          </span>
                          <span className="text-[10px] sm:text-[11px] font-semibold bg-white/25 backdrop-blur-xs px-2.5 py-0.5 rounded-full whitespace-nowrap text-white">
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
                <span className="block text-[#ff3b30] mt-1.5 sm:mt-2">Happening</span>
              </h1>
              <p className="mt-5 sm:mt-6 text-sm sm:text-base text-gray-600 leading-relaxed max-w-lg font-normal">
                Discover the key events of the SEWA Youth Innovation Challenge—from the launch and
                innovation showcase to mentoring, prototype development, regional demonstrations, and
                the Grand Finale.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#launch-event"
                  className="rounded-full bg-[#ff3b30] hover:bg-[#e03126] active:scale-95 text-white font-bold px-8 py-3.5 text-sm shadow-[0_12px_28px_rgba(255,59,48,0.32)] transition-all"
                >
                  Explore Events
                </a>
                <a
                  href="#roadmap"
                  className="rounded-full bg-white hover:bg-gray-50 active:scale-95 text-gray-800 border border-gray-300 font-semibold px-8 py-3.5 text-sm shadow-2xs transition-all"
                >
                  View Timeline
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-[28px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.12)] border border-gray-100/60">
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
            {/* Left: Model Photo card on soft backdrop with glow */}
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="relative max-w-md mx-auto lg:max-w-none flex items-center justify-center">
                <div className="absolute -top-6 -right-6 w-52 h-52 rounded-full bg-rose-200/50 blur-2xl -z-10" />
                <div className="w-full max-w-[440px] aspect-[4/3.4] rounded-[36px] bg-[#f8f9fa] border border-gray-100/70 p-5 flex items-center justify-center">
                  <div className="rounded-[26px] overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.14)] border border-white w-full h-full">
                    <img
                      src={dtuModel}
                      alt="DTU Amphitheatre Scale Architectural Model"
                      className="w-full h-full object-cover"
                      width={566}
                      height={538}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Text details */}
            <div className="lg:col-span-6 order-1 lg:order-2">
              <span className="text-xs sm:text-[13px] font-bold tracking-[0.2em] text-[#ff3b30] uppercase">
                NATIONAL LAUNCH EVENT
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-gray-900 tracking-tight leading-[1.14]">
                Kickstarting SEWA 2026<br />At Delhi Technological<br />University
              </h2>
              <p className="mt-5 text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
                Join us on 17 September 2026 for the grand inaugural ceremony and National Innovation
                Festival at DTU. The launch brings together leadership from ministries, academia, and
                industry to unveil the national innovation portal, release the 50 flagship problem
                statements, and kick off the nationwide 100-day innovation journey toward Viksit Bharat.
              </p>
              <a
                href="#roadmap"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#ff3b30] hover:underline"
              >
                <span>View Launch Schedule</span>
                <ArrowRight size={16} />
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
                <span className="text-xs sm:text-[13px] font-bold tracking-[0.2em] text-[#ff3b30] uppercase">
                  COMPETITION ROADMAP
                </span>
                <h2 className="mt-3 text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-gray-900 tracking-tight leading-[1.14]">
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
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#ff3b30] hover:underline"
                >
                  <span>Explore the 6 Stages Below</span>
                  <ArrowRight size={16} />
                </a>
              </div>

              {/* Right Column: 3-Image Collage on soft pink card */}
              <div className="lg:col-span-6">
                <div className="relative max-w-lg mx-auto lg:max-w-none">
                  <div className="absolute -top-6 -right-6 w-52 h-52 rounded-full bg-rose-200/50 blur-2xl -z-10" />
                  <div className="rounded-[36px] bg-[#fdf2f0] p-4 sm:p-5">
                    <div className="grid grid-cols-12 gap-3.5 sm:gap-4 items-center">
                      <div className="col-span-6 space-y-3.5 sm:space-y-4">
                        <div className="rounded-[22px] overflow-hidden shadow-sm border border-white">
                          <img
                            src={studentsImage}
                            alt="Students gathering at DTU amphitheatre"
                            className="w-full h-36 sm:h-44 object-cover"
                          />
                        </div>
                        <div className="rounded-[22px] overflow-hidden shadow-sm border border-white">
                          <img
                            src={dtuModel}
                            alt="DTU Campus architectural model perspective"
                            className="w-full h-40 sm:h-48 object-cover"
                          />
                        </div>
                      </div>
                      <div className="col-span-6">
                        <div className="rounded-[22px] overflow-hidden shadow-sm border border-white">
                          <img
                            src={campus4Image}
                            alt="DTU Campus academic block sunset"
                            className="w-full h-[310px] sm:h-[390px] object-cover"
                          />
                        </div>
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


export function ForgotPasswordPage() {
  // "request" collects the email; "reset" collects the code + new password.
  const [stage, setStage] = useState<"request" | "reset" | "done">("request");
  const [contact, setContact] = useState("");
  const [code, setCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [visible, setVisible] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (busy) return;
    setBusy(true);
    setError("");
    try {
      await authApi.forgotPassword(contact);
      // Always advances, even for an unregistered email — the backend
      // answers identically either way so this page can't be used to
      // check whether an address has an account.
      setStage("reset");
    } catch (err) {
      setError(err instanceof ApiError ? (err.firstFieldError ?? err.message) : "Request failed.");
    } finally {
      setBusy(false);
    }
  };

  const handleReset = async (e: FormEvent) => {
    e.preventDefault();
    if (busy) return;
    setBusy(true);
    setError("");
    try {
      await authApi.resetPassword({ email: contact, code, password: newPassword });
      setStage("done");
    } catch (err) {
      setError(err instanceof ApiError ? (err.firstFieldError ?? err.message) : "Reset failed.");
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header activeNav="signin" />

      <main className="flex-1 w-full max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 flex items-start justify-center">
        <div className="w-full flex flex-col lg:flex-row items-stretch gap-6">

          {/* Left: Aerial DTU campus photo */}
          <div className="flex-1 min-h-[440px] sm:min-h-[600px] lg:min-h-[660px] rounded-[18px] overflow-hidden shadow-[0_8px_28px_rgba(0,0,0,0.10)]">
            <img
              src={campusImage}
              alt="Delhi Technological University campus aerial view"
              className="size-full object-cover object-[48%_center]"
            />
          </div>

          {/* Right: Card */}
          <div className="w-full lg:w-[480px] shrink-0 rounded-[18px] border border-[#ff5a5f]/70 bg-white px-8 py-9 shadow-[0_2px_12px_rgba(0,0,0,0.04)] flex flex-col justify-center">
            {/* Brand */}
            <div className="mb-8 select-none">
              <div className="text-[22px] font-extrabold tracking-tight leading-none">
                <span className="text-[#ff4d4f]">SEWA</span>{" "}
                <span className="text-gray-900">2026</span>
              </div>
              <div className="text-[13px] font-semibold text-gray-700 mt-0.5">
                DTU Youth Innovation
              </div>
            </div>

            {stage === "done" ? (
              <div className="space-y-4 text-center">
                <div className="size-14 mx-auto rounded-full bg-emerald-50 flex items-center justify-center">
                  <svg className="size-7 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="text-lg font-bold text-gray-900">Password Updated</h2>
                <p className="text-xs text-gray-500 leading-relaxed">
                  You can now sign in with your new password.
                </p>
                <Link to="/signin" className="inline-flex items-center gap-1.5 text-xs text-[#ff4d4f] hover:underline font-medium">
                  <ChevronLeft size={13} />
                  Back to Sign In
                </Link>
              </div>
            ) : stage === "reset" ? (
              <div className="space-y-5">
                <div>
                  <h2 className="text-xl font-bold text-gray-900">Enter Reset Code</h2>
                  <p className="mt-2 text-xs text-gray-500 leading-relaxed">
                    If <span className="font-semibold text-gray-700">{contact}</span> is registered,
                    a 6-digit code is on its way. Enter it below along with your new password.
                  </p>
                </div>

                <form onSubmit={handleReset} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                      Reset code
                    </label>
                    <input
                      required
                      inputMode="numeric"
                      maxLength={6}
                      placeholder="6-digit code"
                      value={code}
                      onChange={(e) => setCode(e.target.value.replace(/\D/g, ""))}
                      className="w-full h-10 px-3.5 rounded-md bg-[#f2f2f2] border-0 text-sm tracking-[0.3em] text-gray-800 placeholder-gray-400 placeholder:tracking-normal focus:outline-none focus:ring-2 focus:ring-[#ff4d4f]/25 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                      New password
                    </label>
                    <div className="relative">
                      <input
                        required
                        type={visible ? "text" : "password"}
                        autoComplete="new-password"
                        placeholder="Enter new password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        className="w-full h-10 pl-3.5 pr-10 rounded-md bg-[#f2f2f2] border-0 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ff4d4f]/25 transition-all"
                      />
                      <button
                        type="button"
                        onClick={() => setVisible(!visible)}
                        aria-label={visible ? "Hide password" : "Show password"}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700 transition-colors cursor-pointer"
                      >
                        {visible ? <EyeOff size={16} /> : <Eye size={16} />}
                      </button>
                    </div>
                    <p className="mt-1.5 text-[11px] text-gray-400">
                      At least 8 characters, with upper and lower case, a number, and a symbol.
                    </p>
                  </div>

                  {error && (
                    <p role="alert" className="text-xs font-semibold text-[#ff4d4f]">
                      {error}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={busy}
                    className="w-full h-10 rounded-md bg-[#ff5a5f] text-white font-semibold text-sm hover:bg-[#ff3f45] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {busy ? "Updating…" : "Update Password"}
                  </button>
                </form>

                <div className="text-center">
                  <button
                    type="button"
                    onClick={() => { setStage("request"); setError(""); }}
                    className="text-xs text-[#ff4d4f] hover:underline font-medium cursor-pointer"
                  >
                    Use a different email
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-5">
                <div>
                  <h2 className="text-xl font-bold text-gray-900">Forgot Password?</h2>
                  <p className="mt-2 text-xs text-gray-500 leading-relaxed">
                    Enter your registered email address. We'll send you a 6-digit code to
                    confirm it's you before you set a new password.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                      Email address
                    </label>
                    <input
                      required
                      type="email"
                      autoComplete="email"
                      placeholder="e.g. you@dtu.ac.in"
                      value={contact}
                      onChange={(e) => setContact(e.target.value)}
                      className="w-full h-10 px-3.5 rounded-md bg-[#f2f2f2] border-0 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ff4d4f]/25 transition-all"
                    />
                  </div>

                  {error && (
                    <p role="alert" className="text-xs font-semibold text-[#ff4d4f]">
                      {error}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={busy}
                    className="w-full h-10 rounded-md bg-[#ff5a5f] text-white font-semibold text-sm hover:bg-[#ff3f45] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {busy ? "Sending…" : "Send Reset Code"}
                    <ArrowRight size={15} />
                  </button>
                </form>

                <div className="text-center">
                  <Link to="/signin" className="inline-flex items-center gap-1 text-xs text-[#ff4d4f] hover:underline font-medium">
                    <ChevronLeft size={13} />
                    Remember your password? Back to Login
                  </Link>
                </div>

                <p className="pt-2 text-center text-[11px] text-gray-400 border-t border-gray-100">
                  Facing issues receiving recovery credentials?{" "}
                  <a href="mailto:helpdesk@dtu.ac.in" className="text-[#ff4d4f] hover:underline">
                    Contact DTU IT Helpdesk
                  </a>
                </p>
              </div>
            )}
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}

