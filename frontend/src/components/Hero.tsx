"use client";

import React from "react";
import Image from "next/image";

interface HeroProps {
  onOpenRegister?: () => void;
  onOpenOverview?: () => void;
}

export default function Hero({ onOpenRegister, onOpenOverview }: HeroProps) {
  return (
    <section id="home" className="w-full bg-white pt-14 lg:pt-20 pb-8 lg:pb-12">
      <div className="page-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Heading, Subtitle, CTAs */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold tracking-tight text-gray-950 leading-[1.12] mb-6">
              Innovating Today <br />
              <span className="text-[#ff3b3b]">Inspiring Tomorrow</span>
            </h1>

            <p className="text-[15.5px] sm:text-[16px] text-gray-600 leading-[1.7] max-w-[480px] mb-9 font-normal">
              Young India&apos;s Knowledge &amp; Technology Initiative &mdash; A 100-Day Innovation Journey
              empowering students, researchers, and startups to build sustainable working prototypes
              for Viksit Bharat.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenRegister}
                className="px-7 py-3.5 text-[15px] font-semibold text-white bg-[#ff3b3b] hover:bg-[#e02b2b] rounded-xl shadow-[0_8px_20px_rgba(255,59,59,0.35)] hover:shadow-[0_12px_28px_rgba(255,59,59,0.45)] transition-all duration-150 cursor-pointer active:scale-98"
              >
                Register Your Team
              </button>
              <button
                onClick={onOpenOverview}
                className="px-7 py-3.5 text-[15px] font-semibold text-gray-800 bg-white hover:bg-gray-50 border border-gray-300 rounded-xl transition-all duration-150 cursor-pointer shadow-2xs hover:border-gray-400"
              >
                Watch Overview
              </button>
            </div>
          </div>

          {/* Right Column: DTU Campus Image */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[510px] aspect-[4/3] rounded-3xl overflow-hidden border border-gray-100 shadow-xl">
              <Image
                src="/images/dtu-campus.png"
                alt="Delhi Technological University (DTU) Campus Aerial View"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 510px"
              />

              {/* Floating Green Circle 'A' Badge */}
              <div
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#10b981] text-white flex items-center justify-center font-bold text-xs shadow-md"
                title="Accreditation / DTU Grade A+"
              >
                A
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
