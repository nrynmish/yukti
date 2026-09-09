"use client";

import React from "react";
import Image from "next/image";
import { LayoutGrid, Layers, Car, Leaf, Map, Send, Building2 } from "lucide-react";

interface JoinChallengeProps {
  onOpenRegister?: () => void;
}

export default function JoinChallenge({ onOpenRegister }: JoinChallengeProps) {
  const steps = [
    {
      id: 1,
      title: "Select Track & Problem Statement",
      description:
        "Choose between the 5 National Themes or identify a local community challenge across 10 grassroots sectors.",
      icon: LayoutGrid,
      iconBg: "bg-[#f59e0b] text-white",
    },
    {
      id: 2,
      title: "Register Team & Submit Concept",
      description:
        "Enter team details under your eligibility category and upload your initial solution and implementation plan.",
      icon: Layers,
      iconBg: "bg-[#ff3b3b] text-white",
    },
    {
      id: 3,
      title: "Confirm & Track Regional Review",
      description:
        "Complete registration through the portal, receive your Team ID, and track regional screening results.",
      icon: Car,
      iconBg: "bg-[#0284c7] text-white",
    },
  ];

  return (
    <section id="steps" className="w-full bg-white pt-6 pb-28 lg:pb-40 relative overflow-hidden">
      <div className="page-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: 3 Steps */}
          <div className="lg:col-span-7 flex flex-col">
            <span className="text-[13.5px] font-semibold text-gray-500 mb-2.5">
              Simple &amp; Structured Process
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-gray-950 tracking-tight leading-[1.12] mb-10 sm:mb-12">
              Join The Challenge <br />
              In 3 Simple Steps
            </h2>

            <div className="space-y-8 max-w-xl">
              {steps.map((step) => {
                const Icon = step.icon;
                return (
                  <div key={step.id} className="flex items-start gap-4.5 sm:gap-5">
                    <div
                      className={`w-13 h-13 rounded-2xl ${step.iconBg} flex items-center justify-center flex-shrink-0 shadow-xs mt-0.5`}
                    >
                      <Icon className="w-6 h-6 stroke-[2]" />
                    </div>
                    <div className="flex flex-col">
                      <h3 className="text-[17px] sm:text-[18px] font-bold text-gray-950 mb-1.5">
                        {step.title}
                      </h3>
                      <p className="text-[14px] text-gray-600 leading-[1.7] font-normal">
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Challenge Card */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            {/* Soft Coral Radial Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-88 sm:w-[420px] h-88 sm:h-[420px] bg-red-400/20 rounded-full blur-3xl pointer-events-none -z-10" />

            <div className="w-full max-w-[410px] bg-white rounded-3xl p-6 shadow-2xl border border-gray-100">
              {/* Photo */}
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-5 border border-gray-100">
                <Image
                  src="/images/students-hardware.png"
                  alt="Students collaborating on hardware prototype"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 410px"
                />
              </div>

              {/* Title & Date */}
              <div className="mb-4">
                <h3 className="text-[19px] font-bold text-gray-950 mb-1">
                  Rashtriya Innovation Challenge
                </h3>
                <p className="text-[13.5px] text-gray-500 font-medium">
                  17 Sep &ndash; 25 Dec &nbsp;|&nbsp; Coordinated by DTU
                </p>
              </div>

              {/* Theme icons */}
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8.5 h-8.5 rounded-full bg-gray-100 flex items-center justify-center text-gray-600">
                  <Leaf className="w-4 h-4" />
                </div>
                <div className="w-8.5 h-8.5 rounded-full bg-gray-100 flex items-center justify-center text-gray-600">
                  <Map className="w-4 h-4" />
                </div>
                <div className="w-8.5 h-8.5 rounded-full bg-gray-100 flex items-center justify-center text-gray-600">
                  <Send className="w-4 h-4" />
                </div>
              </div>

              {/* Bottom pill */}
              <div className="pt-3.5 border-t border-gray-100 flex items-center gap-2 text-[12.5px] font-semibold text-gray-700 bg-gray-50 px-3.5 py-2.5 rounded-xl">
                <Building2 className="w-4 h-4 text-gray-500 flex-shrink-0" />
                <span>5 Regional Hubs &bull; 100-Day Journey</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
