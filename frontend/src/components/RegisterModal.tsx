"use client";

import React, { useState } from "react";
import { X, CheckCircle, Upload, ArrowRight } from "lucide-react";

interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function RegisterModal({ isOpen, onClose }: RegisterModalProps) {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    teamName: "",
    leadName: "",
    leadEmail: "",
    college: "",
    track: "clean-energy",
    conceptTitle: "",
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const resetAndClose = () => {
    setSubmitted(false);
    setStep(1);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div
        className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-gray-100 relative animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={resetAndClose}
          className="absolute top-5 right-5 p-2 rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-9 h-9" />
            </div>
            <h3 className="text-2xl font-bold text-gray-950 mb-2">Registration Submitted!</h3>
            <p className="text-sm text-gray-600 max-w-md mx-auto mb-6">
              Your provisional Team ID has been created:{" "}
              <span className="font-mono font-bold text-red-500">
                YUKTI-26-{Math.floor(1000 + Math.random() * 9000)}
              </span>
              . We have sent verification details to{" "}
              <span className="font-semibold text-gray-800">{formData.leadEmail || "your email"}</span>.
            </p>
            <button
              onClick={resetAndClose}
              className="px-6 py-2.5 bg-red-500 text-white rounded-xl font-semibold hover:bg-red-600 transition-colors cursor-pointer"
            >
              Done
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <span className="text-xs font-bold text-red-500 uppercase tracking-wider">
                YUKTI 2026 Portal
              </span>
              <h3 className="text-2xl font-extrabold text-gray-950 mt-1">Register Your Team</h3>
              <p className="text-xs sm:text-sm text-gray-500 mt-1">
                Participate in the 100-Day Rashtriya Innovation Challenge at DTU.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                  Team Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Innovators For Viksit Bharat"
                  value={formData.teamName}
                  onChange={(e) => setFormData({ ...formData, teamName: e.target.value })}
                  className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:bg-white focus:border-red-500 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                    Team Leader Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Full Name"
                    value={formData.leadName}
                    onChange={(e) => setFormData({ ...formData, leadName: e.target.value })}
                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:bg-white focus:border-red-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                    Leader Email (.edu / personal)
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@college.edu"
                    value={formData.leadEmail}
                    onChange={(e) => setFormData({ ...formData, leadEmail: e.target.value })}
                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:bg-white focus:border-red-500 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                  College / Institution Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Delhi Technological University (DTU)"
                  value={formData.college}
                  onChange={(e) => setFormData({ ...formData, college: e.target.value })}
                  className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:bg-white focus:border-red-500 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                    National Theme
                  </label>
                  <select
                    value={formData.track}
                    onChange={(e) => setFormData({ ...formData, track: e.target.value })}
                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:bg-white focus:border-red-500 focus:outline-none cursor-pointer"
                  >
                    <option value="clean-energy">Sustainable Clean Energy</option>
                    <option value="agri-tech">Agri-Tech &amp; Rural Robotics</option>
                    <option value="health-tech">Healthcare &amp; MedTech</option>
                    <option value="smart-mobility">Smart Mobility &amp; EV</option>
                    <option value="circular-economy">Waste to Wealth / Circular</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                    Project Synopsis Title
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Brief Solution Title"
                    value={formData.conceptTitle}
                    onChange={(e) => setFormData({ ...formData, conceptTitle: e.target.value })}
                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:bg-white focus:border-red-500 focus:outline-none"
                  />
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 bg-[#ff4343] hover:bg-[#e03838] text-white font-semibold rounded-xl shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>Complete Team Registration</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
