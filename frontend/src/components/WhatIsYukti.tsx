"use client";

import React, { useState } from "react";
import { X } from "lucide-react";

export default function WhatIsYukti() {
  const [selectedTopic, setSelectedTopic] = useState<{
    title: string;
    description: string;
    details: string;
  } | null>(null);

  const pillars = [
    {
      id: "young-india",
      title: "Young India's Initiative",
      description:
        "YUKTI (Young India's Knowledge & Technology Initiative) is a national movement launched at DTU to transform grassroots challenges into sustainable, working prototypes for Viksit Bharat.",
      details:
        "YUKTI bridges academic knowledge with nationwide community challenges. Innovators get seed grants up to ₹10 Lakhs, access to DTU CoE laboratories, and direct guidance from central innovation bodies.",
    },
    {
      id: "journey",
      title: "100-Day Innovation Journey",
      description:
        "A structured transition from concept and design to testing and deployment, connecting innovators with technical mentorship, laboratories, and regional hubs.",
      details:
        "Spanning 3 intensive phases: Concept Screening & UDAN track allotment, Rapid Hardware & Software Prototyping in regional labs, and Field Testing with actual stakeholders.",
    },
    {
      id: "deployment",
      title: "Ideas to Deployment",
      description:
        "Unlike conventional hackathons, YUKTI focuses on end-to-end impact—ensuring every validated solution reaches its intended community or national beneficiary.",
      details:
        "High-performing prototypes transition directly to DTU-IIF incubation, patent filing sponsorships, and procurement pilot deployments across urban and rural administrative bodies.",
    },
  ];

  return (
    <section id="what-is-yukti" className="w-full bg-white pt-2 pb-28 lg:pb-40">
      <div className="page-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Title: What is YUKTI? */}
          <div className="lg:col-span-3 pt-1">
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold tracking-tight text-gray-950 leading-[1.12]">
              What <br />
              is YUKTI?
            </h2>
          </div>

          {/* Right: 3 Pillars Columns */}
          <div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12">
            {pillars.map((item) => (
              <div key={item.id} className="flex flex-col justify-between group">
                <div>
                  <h3 className="text-[17px] font-bold text-gray-950 mb-3 group-hover:text-[#ff3b3b] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-[14px] text-gray-600 leading-[1.7] mb-6 font-normal">
                    {item.description}
                  </p>
                </div>

                <div>
                  <button
                    onClick={() => setSelectedTopic(item)}
                    className="inline-flex items-center gap-1 text-[13.5px] font-semibold text-[#ff3b3b] hover:text-[#d02828] transition-colors cursor-pointer group-hover:translate-x-1 duration-150"
                  >
                    <span>More Info</span>
                    <span className="tracking-tighter font-mono ml-0.5">────&gt;</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Info Lightbox */}
      {selectedTopic && (
        <div
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setSelectedTopic(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-7 shadow-2xl border border-gray-100 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedTopic(null)}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-700"
            >
              <X className="w-5 h-5" />
            </button>
            <span className="text-xs font-bold text-[#ff3b3b] uppercase tracking-wide">
              YUKTI Pillar
            </span>
            <h3 className="text-xl font-bold text-gray-950 mt-1 mb-2">{selectedTopic.title}</h3>
            <p className="text-sm text-gray-600 mb-4">{selectedTopic.description}</p>
            <div className="bg-gray-50 rounded-xl p-4 border border-gray-200 text-sm text-gray-700 leading-relaxed">
              {selectedTopic.details}
            </div>
            <div className="mt-5 flex justify-end">
              <button
                onClick={() => setSelectedTopic(null)}
                className="px-4 py-2 text-xs font-semibold text-white bg-[#ff3b3b] rounded-lg"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
