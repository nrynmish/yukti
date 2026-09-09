"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import LiveTicker from "@/components/LiveTicker";
import Hero from "@/components/Hero";
import Milestones from "@/components/Milestones";
import WhatIsYukti from "@/components/WhatIsYukti";
import LiveAnnouncements from "@/components/LiveAnnouncements";
import JoinChallenge from "@/components/JoinChallenge";
import Footer from "@/components/Footer";
import RegisterModal from "@/components/RegisterModal";
import OverviewModal from "@/components/OverviewModal";
import FloatingAssistant from "@/components/FloatingAssistant";

export default function Home() {
  const [registerModalOpen, setRegisterModalOpen] = useState(false);
  const [overviewModalOpen, setOverviewModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-white selection:bg-[#e03b3b] selection:text-white">
      {/* 1. Header Navigation Bar */}
      <Navbar
        onOpenRegister={() => setRegisterModalOpen(true)}
        onOpenSignIn={() => setRegisterModalOpen(true)}
      />

      {/* 2. University Live Updates Ticker */}
      <LiveTicker />

      {/* Main Sections */}
      <main className="flex-1 w-full">
        {/* 3. Hero Section */}
        <Hero
          onOpenRegister={() => setRegisterModalOpen(true)}
          onOpenOverview={() => setOverviewModalOpen(true)}
        />

        {/* 4. Milestone 1, 2, 3 Tracker Card */}
        <Milestones />

        {/* 5. What is YUKTI? Section */}
        <WhatIsYukti />

        {/* 6. Live Announcement (matching Figma order) */}
        <LiveAnnouncements />

        {/* 7. Join The Challenge In 3 Simple Steps (matching Figma order) */}
        <JoinChallenge onOpenRegister={() => setRegisterModalOpen(true)} />
      </main>

      {/* 8. DTU Watermark Footer */}
      <Footer />

      {/* Interactive Modals */}
      <RegisterModal
        isOpen={registerModalOpen}
        onClose={() => setRegisterModalOpen(false)}
      />

      <OverviewModal
        isOpen={overviewModalOpen}
        onClose={() => setOverviewModalOpen(false)}
        onOpenRegister={() => {
          setOverviewModalOpen(false);
          setRegisterModalOpen(true);
        }}
      />

      {/* 9. Floating Helpdesk Widget */}
      <FloatingAssistant />
    </div>
  );
}
