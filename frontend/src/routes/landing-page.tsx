import React, { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowRight,
  ChevronDown,
  ChevronRight,
  Linkedin,
  MapPin,
  Plane,
  Search,
  Send,
  Zap,
} from "lucide-react";
import campusImage from "../assets/dtu-campus-aerial.jpeg";
import challengeIllustration from "../assets/dtu-model.png";
import innovationPhoto from "../assets/sewa-students.jpg";
import sewaLogo from "../assets/logo-sewa.png";
import { SiteFooter, SiteHeader } from "../components/SiteChrome";

/* =========================================================
   ASSETS
   Replace these paths with your actual images.
   ========================================================= */

const ASSETS = {
  hero: campusImage,
  challengeIllustration,
  innovationPhoto,
  sewaLogo,
};

/* =========================================================
   DATA
   ========================================================= */

const announcements = [
  {
    date: "12 Sept. 2026",
    time: "10:30 A.M.",
    title: "SEWA 2026 officially launched",
    text:
      "SEWA 2026 is a national innovation journey focused on empowering young innovators to build sustainable, practical and deployable solutions for communities across India.",
  },
  {
    date: "12 Sept. 2026",
    time: "10:30 A.M.",
    title: "Registrations are now open",
    text:
      "Teams can now register for the challenge and select from regional and national problem statements across agriculture, education, healthcare, environment, livelihoods, safety and technology.",
  },
  {
    date: "11 Sept. 2026",
    time: "12:00 P.M.",
    title: "100-Day Innovation Journey announced",
    text:
      "Selected teams will progress through mentorship, regional reviews, prototype development and deployment as part of the 100-day innovation journey.",
  },
  {
    date: "10 Sept. 2026",
    time: "09:00 A.M.",
    title: "Challenge themes released",
    text:
      "Explore the complete list of regional and national innovation themes and identify the problem statement that best matches your team's capabilities.",
  },
];

/* =========================================================
   COUNTDOWN
   ========================================================= */

function Countdown() {
  const target = new Date("2026-10-12T00:00:00").getTime();

  const calculate = () => {
    const now = Date.now();
    const distance = Math.max(target - now, 0);

    return {
      days: Math.floor(distance / (1000 * 60 * 60 * 24)),
      hours: Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      ),
      minutes: Math.floor(
        (distance % (1000 * 60 * 60)) / (1000 * 60)
      ),
      seconds: Math.floor((distance % (1000 * 60)) / 1000),
    };
  };

  const [time, setTime] = useState(calculate());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(calculate());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative z-20 flex h-[128px] w-full items-start justify-center">
      <div className="-mt-[18px] flex min-h-[90px] min-w-[300px] items-end justify-center gap-3 rounded-2xl bg-white px-7 py-3 shadow-[0_8px_25px_rgba(0,0,0,0.18)] sm:min-w-[390px] sm:gap-5">
        <TimeUnit value={time.days} label="DAYS" />
        <span className="mb-4 text-3xl font-light text-black">:</span>
        <TimeUnit value={time.hours} label="HOURS" />
        <span className="mb-4 text-3xl font-light text-black">:</span>
        <TimeUnit value={time.minutes} label="MINUTES" />
        <span className="mb-4 text-3xl font-light text-black">:</span>
        <TimeUnit value={time.seconds} label="SECONDS" />
      </div>
    </div>
  );
}

function TimeUnit({
  value,
  label,
}: {
  value: number;
  label: string;
}) {
  return (
    <div className="flex flex-col items-center">
      <span className="text-[34px] font-medium leading-none tracking-tight sm:text-[43px]">
        {String(value).padStart(2, "0")}
      </span>
      <span className="mt-1 text-[7px] font-semibold tracking-wide sm:text-[8px]">
        {label}
      </span>
    </div>
  );
}

/* =========================================================
   MAIN COMPONENT
   ========================================================= */

export default function SewaLandingPage() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [category, setCategory] = useState("All Categories");
  const [announcementOpen, setAnnouncementOpen] = useState(1);

  return (
    <div className="min-h-screen overflow-x-hidden bg-white font-[Inter,Arial,sans-serif] text-[#101010]">

      <SiteHeader />

      {/* =====================================================
          HERO
          ===================================================== */}

      <section
        id="home"
        className="relative flex min-h-[350px] items-center justify-center overflow-visible bg-cover bg-center sm:min-h-[465px]"
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(0,0,0,.38),
              rgba(0,0,0,.52)
            ),
            url(${ASSETS.hero})
          `,
        }}
      >
        {/* Decorative dark overlay */}
        <div className="absolute inset-0 bg-black/10" />

        <div className="relative z-10 mx-auto flex max-w-[1150px] flex-col items-center px-5 pb-8 pt-5 text-center text-white sm:pb-10 sm:pt-0">

          {/* SEWA logo */}
          <div className="mb-5">
            <img
              src={ASSETS.sewaLogo}
              alt="SEWA"
              className="mx-auto h-16 w-auto object-contain brightness-0 invert sm:h-[86px]"
            />
          </div>

          <h1 className="text-[30px] font-bold leading-[1.05] tracking-[-1.5px] sm:text-[48px] lg:text-[58px]">
            RASHTRIYA YOUTH INNOVATION CHALLENGE 2026
          </h1>

          <h2 className="mt-3 text-[19px] font-semibold sm:text-[23px]">
            Observe. Innovate. Impact.
          </h2>

          <p className="mt-4 max-w-[780px] text-[10px] leading-5 text-white/95 sm:text-[12px]">
            Young India's Knowledge & Technology Initiative — A 100-Day
            Innovation Journey empowering students, researchers, and startups
            to build sustainable working prototypes for Viksit Bharat.
          </p>

          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/team-register"
              className="rounded-md bg-[#ff3d4d] px-8 py-3 text-[11px] font-semibold text-white shadow-md transition hover:bg-[#e92c3c]"
            >
              Register Your Team
            </Link>

            <a
              href="#announcements"
              className="rounded-md border border-white/70 bg-white/20 px-8 py-3 text-[11px] font-semibold text-white backdrop-blur-sm transition hover:bg-white/30"
            >
              Latest Updates
            </a>
          </div>
        </div>

      </section>

      <Countdown />

      {/* =====================================================
          WHAT IS SEWA
          ===================================================== */}

      <section
        id="about"
        className="mx-auto max-w-[1180px] px-7 pb-14 pt-[30px] sm:px-10 sm:pt-[34px] lg:px-0"
      >
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.05fr_1fr_1fr_1fr] md:gap-8">

          <div>
            <h2 className="text-[30px] font-bold leading-[1.05]">
              What
            </h2>

            <h3 className="mt-1 max-w-[160px] text-[15px] font-bold leading-[1.2]">
              is SEWA FIRST
              <br />
              Rastriya Youth
              <br />
              Innovation Challenge
              <br />
              2026?
            </h3>
          </div>

          <InfoColumn
            title="Young India's Initiative"
            text="SEWA 2026 is a national movement launched at DTU to transform grassroots challenges into sustainable, working prototypes for Viksit Bharat."
          />

          <InfoColumn
            title="100-Day Innovation Journey"
            text="A structured transition from concept and design to testing and deployment, connecting innovators with technical mentorship, laboratories, and regional hubs."
          />

          <InfoColumn
            title="Ideas to Deployment"
            text="Unlike conventional hackathons, SEWA focuses on end-to-end impact—ensuring every validated solution reaches its intended community or national beneficiary."
          />
        </div>
      </section>

      {/* =====================================================
          LIVE ANNOUNCEMENTS
          ===================================================== */}

      <section
        id="announcements"
        className="mx-auto max-w-[1180px] border-t border-gray-200 px-7 pb-20 pt-9 sm:px-10 lg:px-0"
      >

        <div className="mb-7 flex items-center justify-between">
          <div>
            <p className="text-[10px] font-medium text-[#ff3647]">
              Latest Updates
            </p>

            <h2 className="text-[23px] font-bold">
              Live Announcement
            </h2>

            <p className="mt-1 text-[10px] text-gray-500">
              Stay updated with every milestone of the challenge.
            </p>
          </div>

          <div className="flex items-center gap-1 rounded-md bg-red-50 px-2.5 py-1 text-[10px] font-semibold text-red-500">
            Live
            <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
          </div>
        </div>

        {/* Search/filter */}
        <div className="mb-7 flex flex-col gap-3 sm:flex-row">
          <div className="flex h-9 flex-1 items-center rounded-lg bg-[#eeeeee] px-3">
            <Search size={12} className="mr-2 text-gray-500" />

            <input
              className="w-full bg-transparent text-[10px] outline-none placeholder:text-gray-500"
              placeholder="Which type pairing feels right for this national innovation challenge?"
            />
          </div>

          <button className="flex h-9 min-w-[145px] items-center justify-between rounded-lg bg-[#eeeeee] px-4 text-[10px]">
            {category}
            <ChevronDown size={12} />
          </button>
        </div>

        {/* Announcements */}
        <div className="max-h-[430px] space-y-4 overflow-y-auto pr-2 [scrollbar-color:#ff3b4d_#f1f1f1] [scrollbar-width:thin]">
          {announcements.map((item, index) => {
            const open = announcementOpen === index;

            return (
              <div
                key={index}
                onClick={() =>
                  setAnnouncementOpen(open ? -1 : index)
                }
                className="group cursor-pointer rounded-lg border border-transparent bg-[#f5f5f5] px-4 py-4 transition-all hover:border-[#ff3b4d] hover:bg-white hover:shadow-sm"
              >
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <p className="text-[8px] font-medium text-gray-500">
                      {item.date} {item.time}
                    </p>

                    <h3 className="mt-2 text-[13px] font-semibold">
                      {item.title}
                    </h3>
                  </div>

                  <button type="button" className="flex shrink-0 items-center gap-1 text-[9px] font-medium text-[#ff3c4e]">
                    View Full Details
                    <ChevronDown
                      size={11}
                      className={open ? "rotate-180" : ""}
                    />
                  </button>
                </div>

                <p
                  className={`mt-2 max-w-[850px] text-[9px] leading-4 text-gray-600 ${
                    open ? "block" : "line-clamp-2"
                  }`}
                >
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* =====================================================
          TWO LEVELS / ONE MISSION
          ===================================================== */}

      <section
        id="challenge"
        className="relative overflow-hidden px-7 py-20 sm:px-12 lg:px-0"
      >
        {/* soft background glow */}
        <div className="pointer-events-none absolute left-[5%] top-0 h-[300px] w-[300px] rounded-full bg-red-100/40 blur-[100px]" />

        <div className="relative mx-auto grid max-w-[1080px] items-center gap-14 lg:grid-cols-2">

          {/* Illustration */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute -bottom-5 -right-6 h-full w-full rounded-3xl bg-[#dce5ff]" />

              <div className="relative h-[310px] w-[270px] overflow-hidden rounded-3xl bg-[#eef4ff] shadow-sm sm:h-[340px] sm:w-[300px]">
                <img
                  src={ASSETS.challengeIllustration}
                  alt="Youth Innovation"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-widest text-[#ff394a]">
              How is the challenge categorized?
            </p>

            <h2 className="mt-2 text-[34px] font-bold leading-[.95] tracking-[-1.5px] text-[#12182b] sm:text-[42px]">
              Two Levels.
              <br />
              One Mission.
            </h2>

            <p className="mt-5 max-w-[500px] text-[10px] leading-5 text-gray-600">
              The challenge is open at Regional and National levels, covering
              problems from local communities to challenges of national
              significance. Regional themes focus on areas such as
              agriculture, education, healthcare, environment, livelihoods,
              safety, and community development, while National themes address
              including defence, disaster resilience, AI & robotics,
              sustainable technology, advanced engineering, and future
              mobility.
            </p>

            <a href="#steps" className="mt-4 flex items-center gap-1 text-[9px] font-semibold text-[#ff394a] hover:underline">
              Explore All Challenge Themes
              <ArrowRight size={12} />
            </a>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <LevelCard
                icon={<MapPin size={14} />}
                title="Regional Innovation"
                text="Solve real problems in your village, district or state with practical, sustainable solutions."
              />

              <LevelCard
                icon={<FlagIcon />}
                title="National Innovation"
                text="Tackle national-level challenges with scalable solutions for wider impact."
              />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          THREE STEPS
          ===================================================== */}

      <section id="steps" className="relative mx-auto max-w-[1080px] px-7 py-20 sm:px-12 lg:px-0">
        <div className="grid items-center gap-14 lg:grid-cols-[1fr_0.8fr]">

          <div>
            <p className="text-[10px] font-semibold text-[#ff394a]">
              Simple & Structured Process
            </p>

            <h2 className="mt-3 max-w-[430px] text-[34px] font-bold leading-[1.05] tracking-[-1px] text-[#182044] sm:text-[40px]">
              Join The Challenge
              <br />
              In 3 Simple Steps
            </h2>

            <div className="mt-8 space-y-6">
              <Step
                number="01"
                title="Select Track & Problem Statement"
                text="Choose between the 5 National Themes or identify a local community challenge across 10 grassroots sectors."
                color="yellow"
              />

              <Step
                number="02"
                title="Register Team & Submit Concept"
                text="Enter team details and your eligibility category and upload your initial solution and implementation plan."
                color="red"
              />

              <Step
                number="03"
                title="Confirm & Track Regional Review"
                text="Complete registration through the portal, receive your Team ID, and track regional screening results."
                color="blue"
              />
            </div>
          </div>

          {/* Right event card */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-[325px] rounded-2xl bg-white p-3 shadow-[0_10px_35px_rgba(0,0,0,.10)]">
              <div className="overflow-hidden rounded-xl">
                <img
                  src={ASSETS.innovationPhoto}
                  alt="SEWA Youth Innovation Challenge"
                  className="h-[150px] w-full object-cover"
                />
              </div>

              <div className="px-2 pb-2 pt-4">
                <h3 className="text-[11px] font-semibold">
                  SEWA Youth Innovation Challenge
                </h3>

                <p className="mt-3 text-[9px] text-gray-500">
                  17 Sep — 25 Dec
                  <span className="mx-2">|</span>
                  Coordinated by DTU
                </p>

                <div className="mt-5 flex gap-2">
                  <SmallCircle>
                    <Zap size={10} />
                  </SmallCircle>

                  <SmallCircle>
                    <MapPin size={10} />
                  </SmallCircle>

                  <SmallCircle>
                    <Send size={10} />
                  </SmallCircle>
                </div>

                <div className="mt-5 flex items-center gap-2 text-[9px] text-gray-500">
                  <MapPin size={11} />
                  5 Regional Hubs
                  <span>|</span>
                  100-Day Journey
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* =====================================================
          PARTICIPATION BENEFITS
          ===================================================== */}

      <section className="mx-auto max-w-[1080px] px-7 py-16 sm:px-12 lg:px-0">
        <h2 className="text-center text-[42px] font-bold tracking-[-1.5px] sm:text-[55px]">
          Participation Benefits
        </h2>

        <div className="mt-10 min-h-[250px] rounded-xl bg-[#f4f4f4] p-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Benefit
              icon="01"
              title="Mentorship"
              text="Guidance from experienced mentors and technical experts."
            />

            <Benefit
              icon="02"
              title="Prototype Support"
              text="Access to facilities and support for developing working prototypes."
            />

            <Benefit
              icon="03"
              title="National Exposure"
              text="Showcase innovative solutions to a national ecosystem."
            />

            <Benefit
              icon="04"
              title="Deployment"
              text="Move promising ideas toward real-world implementation."
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          ORGANIZING COMMITTEE
          ===================================================== */}

      <section className="mx-auto max-w-[1080px] px-7 py-16 sm:px-12 lg:px-0">
        <h2 className="text-center text-[42px] font-bold tracking-[-1.5px] sm:text-[55px]">
          Organizing Committee
        </h2>

        <div className="mt-10 min-h-[330px] rounded-xl bg-[#f4f4f4] p-8">
          <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
            {[
              "Chairperson",
              "Programme Director",
              "Technical Coordinator",
              "Innovation Lead",
              "Regional Coordinator",
              "Outreach Lead",
              "Student Coordinator",
              "Operations",
            ].map((role) => (
              <div
                key={role}
                className="rounded-xl bg-white p-5 shadow-sm"
              >
                <div className="mx-auto h-16 w-16 rounded-full bg-gray-200" />

                <p className="mt-3 text-center text-[9px] font-semibold">
                  {role}
                </p>

                <p className="mt-1 text-center text-[8px] text-gray-500">
                  Delhi Technological University
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          SUBSCRIBE
          ===================================================== */}

      <section className="mx-auto max-w-[1080px] px-7 pb-5 pt-14 sm:px-12 lg:px-0">
        <div className="flex flex-col justify-between gap-5 rounded-xl bg-white px-8 py-5 shadow-[0_8px_20px_rgba(0,0,0,.16)] sm:flex-row sm:items-center">

          <div>
            <h2 className="text-[20px] font-bold text-[#182044]">
              Subscribe For Updates
            </h2>

            <p className="mt-1 text-[9px] text-gray-500">
              Let's subscribe with us and find the fun.
            </p>
          </div>

          <div className="flex h-9 w-full max-w-[350px] items-center rounded-full bg-[#f7f7f7] px-4">
            <input
              type="email"
              placeholder="Enter Email Address"
              className="w-full bg-transparent text-[9px] outline-none"
            />

            <button type="submit" className="flex h-6 w-6 items-center justify-center rounded-full bg-[#ff3d4d] text-white" aria-label="Subscribe">
              <ArrowRight size={12} />
            </button>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

/* =========================================================
   SMALL COMPONENTS
   ========================================================= */

function NavDropdown({ label, href }: { label: string; href: string }) {
  return (
    <a href={href} className="flex items-center gap-1 transition hover:text-[#f23848]">
      {label}
      <ChevronDown size={11} />
    </a>
  );
}

function InfoColumn({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div>
      <h3 className="text-[13px] font-bold leading-4">
        {title}
      </h3>

      <p className="mt-5 text-[9px] leading-5 text-gray-600">
        {text}
      </p>

      <a href="#challenge" className="mt-4 inline-flex text-[8px] font-semibold text-[#ff394a] hover:underline">
        Read More →
      </a>
    </div>
  );
}

function LevelCard({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-xl border border-gray-100 bg-white p-3 shadow-sm">
      <div className="flex items-start gap-2">
        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-red-50 text-[#ff394a]">
          {icon}
        </div>

        <div>
          <h3 className="text-[10px] font-semibold text-[#182044]">
            {title}
          </h3>

          <p className="mt-1 text-[8px] leading-4 text-gray-500">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}

function Step({
  number,
  title,
  text,
  color,
}: {
  number: string;
  title: string;
  text: string;
  color: "yellow" | "red" | "blue";
}) {
  const colors = {
    yellow: "bg-yellow-400",
    red: "bg-[#ff563f]",
    blue: "bg-[#007a98]",
  };

  return (
    <div className="flex gap-4">
      <div
        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-[8px] font-bold text-white ${colors[color]}`}
      >
        {number}
      </div>

      <div>
        <h3 className="text-[10px] font-semibold text-[#182044]">
          {title}
        </h3>

        <p className="mt-1 max-w-[360px] text-[8px] leading-4 text-gray-500">
          {text}
        </p>
      </div>
    </div>
  );
}

function SmallCircle({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 text-gray-500">
      {children}
    </div>
  );
}

function Benefit({
  icon,
  title,
  text,
}: {
  icon: string;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-xl bg-white p-5 shadow-sm">
      <span className="text-[9px] font-bold text-[#ff394a]">
        {icon}
      </span>

      <h3 className="mt-3 text-[12px] font-semibold">
        {title}
      </h3>

      <p className="mt-2 text-[9px] leading-4 text-gray-500">
        {text}
      </p>
    </div>
  );
}

function SocialIcon({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-[#ff3d4d] shadow-sm">
      {children}
    </div>
  );
}

function FlagIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
    >
      <path d="M5 21V4" />
      <path d="M5 5c5-4 9 3 14-1v10c-5 4-9-3-14 1" />
    </svg>
  );
}