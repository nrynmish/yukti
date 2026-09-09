"use client";

import React from "react";
import Image from "next/image";
import { X, Play, CheckCircle2, Award, Users, Calendar } from "lucide-react";

interface OverviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenRegister?: () => void;
}

export default function OverviewModal({ isOpen, onClose, onOpenRegister }: OverviewModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-xs flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-gray-100 relative animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="mb-4">
          <span className="text-xs font-bold text-red-500 uppercase tracking-wider">
            Initiative Overview
          </span>
          <h3 className="text-2xl font-black text-gray-950 mt-1">
            YUKTI 2026: 100-Day Innovation Journey
          </h3>
          <p className="text-sm text-gray-600 mt-1">
            Delhi Technological University Rashtriya Innovation Challenge
          </p>
        </div>

        {/* Video Preview Card */}
        <div className="relative aspect-video rounded-2xl overflow-hidden mb-6 bg-gray-900 border border-gray-200 shadow-inner group">
          <Image
            src="/images/dtu-campus.jpg"
            alt="DTU Campus Video Preview"
            fill
            className="object-cover opacity-75 group-hover:scale-102 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-red-500 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
              <Play className="w-7 h-7 fill-current translate-x-0.5" />
            </div>
          </div>
          <div className="absolute bottom-4 left-4 right-4 text-white text-xs sm:text-sm font-medium">
            Watch Dr. Director&apos;s Welcome Address &amp; Hackathon Launch Ceremony (3:45 mins)
          </div>
        </div>

        {/* Key Highlights Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
          <div className="bg-gray-50 p-3 rounded-xl border border-gray-100 text-center">
            <Calendar className="w-5 h-5 text-red-500 mx-auto mb-1" />
            <div className="text-xs text-gray-500">Duration</div>
            <div className="text-sm font-bold text-gray-900">100 Days</div>
          </div>
          <div className="bg-gray-50 p-3 rounded-xl border border-gray-100 text-center">
            <Award className="w-5 h-5 text-amber-500 mx-auto mb-1" />
            <div className="text-xs text-gray-500">Seed Grants</div>
            <div className="text-sm font-bold text-gray-900">₹10 Lakhs</div>
          </div>
          <div className="bg-gray-50 p-3 rounded-xl border border-gray-100 text-center">
            <Users className="w-5 h-5 text-cyan-600 mx-auto mb-1" />
            <div className="text-xs text-gray-500">Regional Hubs</div>
            <div className="text-sm font-bold text-gray-900">5 Centers</div>
          </div>
          <div className="bg-gray-50 p-3 rounded-xl border border-gray-100 text-center">
            <CheckCircle2 className="w-5 h-5 text-green-600 mx-auto mb-1" />
            <div className="text-xs text-gray-500">Mentorship</div>
            <div className="text-sm font-bold text-gray-900">1-on-1 Labs</div>
          </div>
        </div>

        {/* Action button */}
        <div className="flex items-center justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900"
          >
            Close
          </button>
          <button
            onClick={() => {
              onClose();
              onOpenRegister?.();
            }}
            className="px-5 py-2.5 bg-[#ff4343] hover:bg-[#e03838] text-white text-sm font-semibold rounded-xl transition-colors cursor-pointer"
          >
            Register Team Now
          </button>
        </div>
      </div>
    </div>
  );
}
