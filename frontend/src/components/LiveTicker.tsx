"use client";

import React from "react";

export default function LiveTicker() {
  const tickerText =
    "YUKTI 2026 / Rashtriya Innovation Challenge officially launched at Delhi Technological University on 17 September 2026.";

  return (
    <div className="w-full bg-[#d6d8db] border-b border-gray-300 overflow-hidden relative">
      <div className="flex items-center">
        {/* Coral Left Tag */}
        <div className="z-10 flex-shrink-0 bg-[#ff5252] text-white text-[13px] font-semibold px-4 sm:px-6 py-2 shadow-xs tracking-normal">
          Live Updates
        </div>

        {/* Continuous ticker track */}
        <div className="overflow-hidden whitespace-nowrap flex-1 py-1.5 text-[13px] font-normal text-gray-800">
          <div className="ticker-track flex items-center gap-16">
            {[1, 2, 3, 4].map((i) => (
              <span key={i} className="inline-block">
                {tickerText}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
