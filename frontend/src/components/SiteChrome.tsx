import { Link } from "@tanstack/react-router";
import { ChevronDown, Facebook, Instagram, Menu, Twitter, X } from "lucide-react";
import { useState } from "react";
import type { ReactNode } from "react";
import govtLogo from "../assets/delhinctlogo.svg";
import delhiGovtLogo from "../assets/govtofnctdelhi.svg";
import dtuLogo from "../assets/dtu_logo.png";
import sewaLogo from "../assets/logo-sewa.png";

const announcement =
  "SEWA 2026 / SEWA Youth Innovation Challenge officially launched at Delhi Technological University on 17 September 2026.";

export function SiteHeader() {
  const [mobileMenu, setMobileMenu] = useState(false);

  const closeMenu = () => setMobileMenu(false);

  return (
    <>
      <div className="hidden h-7 items-center justify-between border-b border-gray-200 bg-white px-8 text-[11px] md:flex">
        <a
          href="https://dtu.ac.in"
          target="_blank"
          rel="noreferrer"
          className="font-medium text-[#ed1c24] hover:underline"
        >
          dtu.ac.in ↗
        </a>
        <div className="flex items-center gap-4 text-[#f43f52]">
          <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
            <Facebook size={13} fill="currentColor" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter">
            <Twitter size={13} fill="currentColor" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
            <Instagram size={13} />
          </a>
        </div>
      </div>

      <nav className="relative z-50 h-[68px] border-b border-gray-100 bg-white px-5 shadow-sm sm:px-8 lg:px-14">
        <div className="mx-auto flex h-full max-w-[1400px] items-center justify-between">
          <Link to="/" className="flex h-full items-center gap-3" aria-label="SEWA home">
            <img src={govtLogo} alt="Satyamev Jayate emblem" className="hidden h-11 w-auto object-contain sm:block" />
            <img
              src={delhiGovtLogo}
              alt="Government of National Capital Territory of Delhi"
              className="hidden h-8 w-auto object-contain sm:block"
            />
            <img src={dtuLogo} alt="Delhi Technological University" className="h-10 w-auto object-contain" />
            <img src={sewaLogo} alt="SEWA FIRST" className="h-11 w-auto object-contain" />
          </Link>

          <div className="hidden items-center gap-7 text-[13px] font-medium lg:flex">
            <Link to="/" className="transition hover:text-[#f23848]">Home</Link>
            <SiteNavLink label="Events" href="/#challenge" />
            <SiteNavLink label="Guidelines" href="/#steps" />
            <SiteNavLink label="About" href="/#about" />
            <a href="/#contact" className="transition hover:text-[#f23848]">Contact Us</a>
            <Link
              to="/signin"
              className="rounded-full bg-[#f6384d] px-7 py-2.5 text-xs font-semibold text-white shadow-sm transition hover:bg-[#e52d42]"
            >
              Login
            </Link>
          </div>

          <button
            type="button"
            className="lg:hidden"
            onClick={() => setMobileMenu((open) => !open)}
            aria-label={mobileMenu ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenu}
          >
            {mobileMenu ? <X size={25} /> : <Menu size={25} />}
          </button>
        </div>

        {mobileMenu && (
          <div className="absolute left-0 right-0 top-[68px] border-t bg-white px-6 py-5 shadow-xl lg:hidden">
            <div className="flex flex-col gap-5 text-sm">
              <Link to="/" onClick={closeMenu}>Home</Link>
              <a href="/#challenge" onClick={closeMenu}>Events</a>
              <a href="/#steps" onClick={closeMenu}>Guidelines</a>
              <a href="/#about" onClick={closeMenu}>About</a>
              <a href="/#contact" onClick={closeMenu}>Contact Us</a>
              <Link to="/signin" onClick={closeMenu} className="rounded-full bg-[#f6384d] px-6 py-3 text-white">
                Login
              </Link>
            </div>
          </div>
        )}
      </nav>

      <div className="relative z-30 flex h-[28px] items-center overflow-hidden bg-[#eeeeee] text-[10px] sm:h-[31px] sm:text-[11px]">
        <div className="flex h-full shrink-0 items-center bg-[#ff5662] px-5 font-semibold text-white">Live Updates</div>
        <div className="min-w-0 flex-1 overflow-hidden">
          <div className="ticker live-ticker flex w-max whitespace-nowrap text-gray-700">
            <span className="px-5">{announcement}</span>
            <span className="px-5" aria-hidden="true">{announcement}</span>
          </div>
        </div>
      </div>
    </>
  );
}

function SiteNavLink({ label, href }: { label: string; href: string }) {
  return (
    <a href={href} className="flex items-center gap-1 transition hover:text-[#f23848]">
      {label}
      <ChevronDown size={11} />
    </a>
  );
}

export function SiteFooter() {
  return (
    <footer id="contact" className="relative mt-10 overflow-hidden border-t bg-[#f6f6f6]">
      <div className="pointer-events-none absolute inset-0 opacity-[0.06]">
        <div className="absolute bottom-[-100px] left-[-50px] h-[300px] w-[600px] rounded-[50%] border-[5px] border-gray-500" />
        <div className="absolute bottom-[-180px] left-[-100px] h-[450px] w-[800px] rounded-[50%] border-[5px] border-gray-500" />
      </div>

      <div className="relative mx-auto max-w-[1080px] px-7 py-12 sm:px-12 lg:px-0">
        <div className="grid gap-10 md:grid-cols-[1.3fr_0.7fr_1fr]">
          <div>
            <h3 className="text-[16px] font-semibold text-[#182044]">DTU – SEWA 2026</h3>
            <p className="mt-4 max-w-[350px] text-[9px] leading-5 text-gray-500">
              Young India&apos;s Knowledge &amp; Technology Initiative — SEWA Youth Innovation Challenge. Empowering youth to create sustainable, prototype-driven solutions for Viksit Bharat.
            </p>
            <div className="mt-5 flex gap-3">
              <SocialLink href="https://facebook.com" label="Facebook"><Facebook size={13} fill="currentColor" /></SocialLink>
              <SocialLink href="https://twitter.com" label="Twitter"><Twitter size={13} fill="currentColor" /></SocialLink>
              <SocialLink href="https://instagram.com" label="Instagram"><Instagram size={13} /></SocialLink>
            </div>
          </div>

          <div>
            <h4 className="text-[10px] font-semibold">Navigation</h4>
            <div className="mt-5 flex flex-col gap-3 text-[9px] text-gray-600">
              <a href="/#about" className="hover:text-[#ff394a]">About Challenge</a>
              <a href="/#challenge" className="hover:text-[#ff394a]">5 National Themes</a>
              <a href="/#announcements" className="hover:text-[#ff394a]">Problem Statements (UDAN)</a>
              <a href="/#steps" className="hover:text-[#ff394a]">100-Day Timeline</a>
              <Link to="/signin" className="hover:text-[#ff394a]">Login</Link>
            </div>
          </div>

          <div className="overflow-hidden rounded-xl border border-gray-200">
            <iframe
              title="Delhi Technological University, Rohini on Google Maps"
              src="https://www.google.com/maps?q=Delhi+Technological+University,+Shahbad+Daulatpur,+Rohini,+Delhi&output=embed"
              className="h-[180px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <div className="mt-14 border-t border-gray-200 pt-5 text-center text-[8px] text-gray-500">
          Copyright © 2026 Delhi Technological University (DTU). All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, label, children }: { href: string; label: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#ff394a] shadow-sm transition hover:scale-105"
    >
      {children}
    </a>
  );
}
