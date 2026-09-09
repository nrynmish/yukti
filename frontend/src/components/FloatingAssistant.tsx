"use client";

import React, { useState } from "react";
import { X, HelpCircle, Phone, MessageSquare, ExternalLink } from "lucide-react";

export default function FloatingAssistant() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Circle Button */}
      <div className="fixed right-4 bottom-8 z-40">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-12 h-12 rounded-full bg-[#10b981] hover:bg-[#059669] text-white font-extrabold text-base flex items-center justify-center shadow-xl border-2 border-white transition-transform hover:scale-110 active:scale-95 cursor-pointer"
          title="YUKTI 2026 Innovation Helpdesk & Accessibility"
          aria-label="Innovation Helpdesk"
        >
          {isOpen ? <X className="w-5 h-5" /> : "A"}
        </button>
      </div>

      {/* Slide-in Popover Drawer */}
      {isOpen && (
        <div className="fixed right-4 bottom-22 z-50 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-gray-200 p-5 animate-in fade-in slide-in-from-bottom-5 duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-gray-100 mb-3">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-[#10b981] text-white flex items-center justify-center text-xs font-bold">
                A
              </div>
              <span className="font-bold text-gray-900 text-sm">DTU YUKTI Helpdesk</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-md text-gray-400 hover:text-gray-700 hover:bg-gray-100"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-gray-600 mb-4">
            Need assistance with Team Registration, Track Selection, or Problem Statements?
          </p>

          <div className="space-y-2.5 mb-4">
            <div className="p-3 bg-gray-50 rounded-xl text-xs text-gray-700">
              <div className="font-semibold text-gray-900 mb-0.5 flex items-center gap-1.5">
                <HelpCircle className="w-3.5 h-3.5 text-emerald-600" />
                Who is eligible to participate?
              </div>
              <div>Students enrolled in AICTE/UGC institutions and early DPIIT startups.</div>
            </div>

            <div className="p-3 bg-gray-50 rounded-xl text-xs text-gray-700">
              <div className="font-semibold text-gray-900 mb-0.5 flex items-center gap-1.5">
                <MessageSquare className="w-3.5 h-3.5 text-blue-600" />
                Team Size Limit?
              </div>
              <div>Minimum 2 members and maximum 5 members per registered team.</div>
            </div>

            <div className="p-3 bg-gray-50 rounded-xl text-xs text-gray-700">
              <div className="font-semibold text-gray-900 mb-0.5 flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-red-500" />
                DTU Innovation Secretariat
              </div>
              <div>Email: yukti2026@dtu.ac.in | Tel: +91 11 2787 1018</div>
            </div>
          </div>

          <div className="pt-2 border-t border-gray-100">
            <a
              href="#announcements"
              onClick={() => setIsOpen(false)}
              className="w-full inline-flex items-center justify-center gap-1 text-xs font-semibold text-emerald-600 hover:text-emerald-700 hover:underline"
            >
              <span>View Latest Official Circulars</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      )}
    </>
  );
}
