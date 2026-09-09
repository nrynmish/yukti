"use client";

import React from "react";
import { Trophy, Award, ScrollText } from "lucide-react";

export default function Milestones() {
  const items = [
    { id: 1, title: "Milestone 1", icon: Trophy },
    { id: 2, title: "Milestone 2", icon: Award },
    { id: 3, title: "Milestone 3", icon: ScrollText },
  ];

  return (
    <section className="w-full bg-white pt-4 pb-20 lg:pb-28">
      <div className="page-container">
        <div className="max-w-[980px] mx-auto bg-white rounded-2xl border border-gray-200/90 shadow-[0_8px_30px_rgba(0,0,0,0.06)] px-8 py-6">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200">
            {items.map((m) => {
              const Icon = m.icon;
              return (
                <div
                  key={m.id}
                  className="flex items-center justify-start md:justify-center gap-4 py-3.5 md:py-1 px-4 first:pt-0 last:pb-0"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#fee2e2] flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-[#ff3b3b]" />
                  </div>
                  <span className="text-[17px] font-bold text-gray-950">
                    {m.title}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
