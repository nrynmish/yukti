import { Link } from "@tanstack/react-router";
import { ArrowRight, ChevronDown, Eye, Instagram, Search, Twitter } from "lucide-react";
import { useMemo, useState, type FormEvent } from "react";
import campusImage from "../assets/dtu-campus-aerial.jpg";
import studentsImage from "../assets/yukti-students.jpg";

export function Brand() {
  return (
    <Link to="/" className="flex items-center gap-3" aria-label="YUKTI 2026 home">
      <span className="grid size-11 place-items-center rounded-full border-2 border-primary text-[10px] font-bold text-primary">
        DTU
      </span>
      <span className="leading-tight">
        <strong className="block text-lg">
          <span className="text-primary">YUKTI</span> 2026
        </strong>
        <small className="block text-[10px] font-bold">DTU Rashtriya Innovation</small>
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
              YUKTI 2026 / Rashtriya Innovation Challenge officially launched at Delhi Technological
              University on 17 September 2026.
            </span>
            <span aria-hidden="true">
              YUKTI 2026 / Rashtriya Innovation Challenge officially launched at Delhi Technological
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
    <footer className="footer-texture border-t border-border py-16">
      <div className="site-shell grid gap-10 md:grid-cols-12">
        <div className="md:col-span-6">
          <h2 className="mb-3 text-xl font-bold">DTU – YUKTI 2026</h2>
          <p className="max-w-md text-sm leading-7 text-muted-foreground">
            Young India&apos;s Knowledge &amp; Technology Initiative — Rashtriya Innovation
            Challenge. Empowering youth to create sustainable, prototype-driven solutions for Viksit
            Bharat.
          </p>
          <div className="mt-5 flex gap-3">
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
          <div className="space-y-3 text-sm text-muted-foreground">
            <a className="block" href="/#about">
              About Challenge
            </a>
            <a className="block" href="/#steps">
              5 National Themes
            </a>
            <a className="block" href="/#announcements">
              Problem Statements
            </a>
            <Link className="block" to="/login">
              Login
            </Link>
          </div>
        </div>
        <div className="md:col-span-3">
          <h3 className="mb-4 font-bold">Partner Hubs</h3>
          <p className="text-sm text-muted-foreground">DTU (National Centre)</p>
        </div>
        <p className="border-t border-border pt-7 text-center text-xs text-muted-foreground md:col-span-12">
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
    "Detailed problem statements across five national themes are now available. Registered teams should review the official submission template.",
  ],
  [
    "Mentorship",
    "DTU Central Innovation Labs & Prototyping Workshop Schedule",
    "Shortlisted teams receive access to prototyping machinery, testing facilities and dedicated faculty mentors.",
  ],
  [
    "Guidelines",
    "Inter-Disciplinary Team Registration & Eligibility",
    "Teams may comprise two to five members from accredited universities, polytechnics or eligible startups.",
  ],
  [
    "Mentorship",
    "Technical Webinar on Patent Filing & IP Protection",
    "Join patent attorneys and incubator leaders for a practical masterclass on protecting your innovation.",
  ],
];

export function HomePage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [open, setOpen] = useState<number | null>(null);
  const filtered = useMemo(
    () =>
      notices.filter(
        (n) =>
          (category === "All" || n[0] === category) &&
          n.join(" ").toLowerCase().includes(query.toLowerCase()),
      ),
    [query, category],
  );
  return (
    <div>
      <Header />
      <main>
        <section className="hero relative min-h-[570px] overflow-hidden">
          <img
            src={campusImage}
            alt="Aerial view of the Delhi Technological University campus"
            className="absolute inset-0 size-full object-cover"
            width={1600}
            height={900}
          />
          <div className="absolute inset-0 bg-hero-overlay" />
          <div className="site-shell relative flex min-h-[570px] items-center">
            <div className="animate-rise max-w-xl py-20">
              <p className="eyebrow">Rashtriya Innovation Challenge</p>
              <h1 className="mt-4 text-5xl font-extrabold leading-[1.08] sm:text-6xl">
                Innovating Today,
                <br />
                <span className="text-primary">Inspiring Tomorrow.</span>
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
          <div className="countdown">
            <strong>
              30<small>DAYS</small>
            </strong>
            <span>:</span>
            <strong>
              15<small>HOURS</small>
            </strong>
            <span>:</span>
            <strong>
              40<small>MINUTES</small>
            </strong>
            <span>:</span>
            <strong>
              55<small>SECONDS</small>
            </strong>
          </div>
        </section>
        <section id="about" className="section-pad">
          <div className="site-shell grid gap-10 lg:grid-cols-[.7fr_1fr_1fr_1fr]">
            <h2 className="text-4xl font-extrabold">
              What
              <br />
              is YUKTI?
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
        <section id="announcements" className="section-pad bg-surface">
          <div className="site-shell">
            <p className="eyebrow">Important Notices</p>
            <h2 className="section-title">Live Announcements</h2>
            <p className="section-subtitle">
              Stay updated with recent circulars, dates, and official notices.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-[1fr_240px]">
              <label className="search-field">
                <Search size={18} />
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search announcements..."
                />
              </label>
              <label className="search-field">
                <select value={category} onChange={(e) => setCategory(e.target.value)}>
                  <option>All</option>
                  <option>Problem Statements</option>
                  <option>Mentorship</option>
                  <option>Guidelines</option>
                </select>
                <ChevronDown size={18} />
              </label>
            </div>
            <div className="mt-6 space-y-3">
              {filtered.map((n, i) => (
                <article className="notice" key={n[1]}>
                  <div>
                    <small>12 SEPT 2026 · 10:30 A.M. · {n[0]}</small>
                    <h3>{n[1]}</h3>
                    <p>{n[2]}</p>
                    {open === i && (
                      <p className="notice-detail animate-fade-in">
                        Complete details and participation requirements will be published through
                        the official YUKTI portal.
                      </p>
                    )}
                  </div>
                  <button onClick={() => setOpen(open === i ? null : i)}>
                    {open === i ? "Hide Details" : "View Full Details"}
                    <ChevronDown className={open === i ? "rotate-180" : ""} size={16} />
                  </button>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section id="steps" className="section-pad overflow-hidden">
          <div className="site-shell grid items-center gap-14 lg:grid-cols-2">
            <div>
              <p className="eyebrow">Simple &amp; Structured Process</p>
              <h2 className="section-title">
                Join The Challenge
                <br />
                In 3 Simple Steps
              </h2>
              <div className="mt-9 space-y-7">
                {[
                  [
                    "01",
                    "Select Track & Problem Statement",
                    "Choose between five national themes and identify a local challenge.",
                  ],
                  [
                    "02",
                    "Register Team & Submit Concept",
                    "Enter team details and submit your initial solution and implementation plan.",
                  ],
                  [
                    "03",
                    "Confirm & Track Regional Review",
                    "Complete registration and track regional screening results.",
                  ],
                ].map((s) => (
                  <div className="step" key={s[0]}>
                    <span>{s[0]}</span>
                    <div>
                      <h3>{s[1]}</h3>
                      <p>{s[2]}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <article className="challenge-card">
              <img
                src={studentsImage}
                alt="Students collaborating on an innovation prototype"
                loading="lazy"
                width={1000}
                height={650}
              />
              <div>
                <h3>Rashtriya Innovation Challenge</h3>
                <p>17 Sep – 25 Dec · Coordinated by DTU</p>
                <hr />
                <p>5 Regional Hubs · 100-Day Journey</p>
              </div>
            </article>
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
  const submit = (e: FormEvent) => {
    e.preventDefault();
    setMessage(mode === "login" ? "Sign-in details received." : "Registration details received.");
  };
  return (
    <div>
      <Header />
      <main className="site-shell py-12">
        <div className={`auth-layout ${mode === "register" ? "auth-register" : ""}`}>
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
              <p className="eyebrow">
                {mode === "login" ? "Welcome back" : "Build for Viksit Bharat"}
              </p>
              <h1 className="mt-2 text-3xl font-extrabold">
                {mode === "login" ? "Sign in to YUKTI" : "Register your team"}
              </h1>
              <p className="mt-2 text-sm text-muted-foreground">
                {mode === "login"
                  ? "Access your challenge workspace and submissions."
                  : "Start your 100-day innovation journey."}
              </p>
            </div>
            <form onSubmit={submit} className="space-y-4">
              {mode === "register" && (
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Team name" placeholder="Team Innovate" />
                  <Field label="Institution" placeholder="College or university" />
                </div>
              )}
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
              {mode === "register" && (
                <Field label="Confirm password" placeholder="Repeat password" type="password" />
              )}
              <div className="flex items-center justify-between text-xs">
                <label className="flex items-center gap-2">
                  <input type="checkbox" />{" "}
                  {mode === "login" ? "Remember me" : "I accept the participation guidelines"}
                </label>
                {mode === "login" && (
                  <a href="#" className="text-link">
                    Forgot password?
                  </a>
                )}
              </div>
              <button className="button button-primary w-full justify-center" type="submit">
                {mode === "login" ? "Sign in" : "Create team account"}
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
              {mode === "login" ? "Don’t have an account? " : "Already registered? "}
              <Link className="text-link" to={mode === "login" ? "/register" : "/login"}>
                {mode === "login" ? "Sign up now" : "Sign in"}
              </Link>
            </p>
          </section>
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

