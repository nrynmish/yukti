"use client";

import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full relative bg-[#f7f7f9] border-t border-gray-200 overflow-hidden pt-20 pb-12">
      {/* Background Architectural Watermark */}
      <div
        className="absolute inset-0 pointer-events-none opacity-25 bg-bottom bg-no-repeat bg-contain"
        style={{
          backgroundImage: "url('/images/dtu-watermark.svg')",
        }}
      />

      <div className="page-container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14 pb-14 border-b border-gray-200/80">
          {/* Column 1: DTU - YUKTI 2026 */}
          <div className="md:col-span-6 lg:col-span-5 flex flex-col">
            <h3 className="text-[19px] font-bold text-gray-950 mb-3">
              DTU &ndash; YUKTI 2026
            </h3>
            <p className="text-[13.5px] text-gray-600 leading-relaxed max-w-sm mb-6 font-normal">
              Young India&apos;s Knowledge &amp; Technology Initiative &mdash; Rashtriya Innovation Challenge.
              Empowering youth to create sustainable, prototype-driven solutions for Viksit Bharat.
            </p>

            {/* Social Icons matching Image 2 */}
            <div className="flex items-center gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-8 h-8 rounded-full bg-white shadow-2xs border border-gray-200 flex items-center justify-center text-[#ff3b3b] hover:bg-[#ff3b3b] hover:text-white transition-colors"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter / X"
                className="w-8 h-8 rounded-full bg-white shadow-2xs border border-gray-200 flex items-center justify-center text-[#ff3b3b] hover:bg-[#ff3b3b] hover:text-white transition-colors"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 rounded-full bg-white shadow-2xs border border-gray-200 flex items-center justify-center text-[#ff3b3b] hover:bg-[#ff3b3b] hover:text-white transition-colors"
              >
                <svg className="w-3.5 h-3.5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="md:col-span-3 lg:col-span-4">
            <h4 className="text-[14.5px] font-bold text-gray-950 mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-[13.5px]">
              <li>
                <Link href="#what-is-yukti" className="text-gray-600 hover:text-[#ff3b3b] transition-colors">
                  About Challenge
                </Link>
              </li>
              <li>
                <Link href="#steps" className="text-gray-600 hover:text-[#ff3b3b] transition-colors">
                  5 National Themes
                </Link>
              </li>
              <li>
                <Link href="#announcements" className="text-gray-600 hover:text-[#ff3b3b] transition-colors">
                  Problem Statements (UDAN)
                </Link>
              </li>
              <li>
                <Link href="#home" className="text-gray-600 hover:text-[#ff3b3b] transition-colors">
                  100-Day Timeline
                </Link>
              </li>
              <li>
                <Link href="#login" className="text-gray-600 hover:text-[#ff3b3b] transition-colors">
                  Login
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Partner Hubs */}
          <div className="md:col-span-3 lg:col-span-3">
            <h4 className="text-[14.5px] font-bold text-gray-950 mb-4">
              Partner Hubs
            </h4>
            <ul className="space-y-2.5 text-[13.5px]">
              <li className="text-gray-600">
                DTU (National Centre)
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 text-center">
          <p className="text-[12.5px] text-gray-500 font-medium">
            Copyright &copy; 2026 Delhi Technological University (DTU). All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
