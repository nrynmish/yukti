"use client";

import React, { useState, useMemo } from "react";
import { Search, ChevronDown, ChevronUp, Download } from "lucide-react";

interface Announcement {
  id: string;
  category: string;
  date: string;
  title: string;
  preview: string;
  fullDetails: string;
  downloads?: { label: string; url: string }[];
}

const announcementsList: Announcement[] = [
  {
    id: "ann-1",
    category: "Problem Statements",
    date: "12.Sept.2026 10:30 A.M.",
    title: "Release of UDAN Phase 1 Problem Statements & Evaluation Rubrics",
    preview:
      "Detailed problem statements across 5 national themes are now available on the UDAN portal. All registered teams are required to download the official submission template and adhere to the evaluation rubrics for Phase 1 screening.",
    fullDetails:
      "The National Technical Committee has published 48 comprehensive problem statements spanning Sustainable Clean Energy, Agri-Tech Robotics, Healthcare Devices, Smart Mobility, and Circular Economy. Each problem statement includes benchmark parameters, target beneficiary specifications, and rubric weights. Submissions must be compiled using the official template.",
    downloads: [
      { label: "Official Problem Statements (PDF)", url: "#" },
      { label: "Phase 1 Submission Template (.docx)", url: "#" },
    ],
  },
  {
    id: "ann-2",
    category: "Mentorship",
    date: "12.Sept.2026 10:30 A.M.",
    title: "DTU Central Innovation Labs & Prototyping Workshop Schedule",
    preview:
      "All shortlisted teams will receive access to DTU Center of Excellence labs, rapid prototyping machinery, 3D printing suites, and domain faculty mentors starting from Milestone 2.",
    fullDetails:
      "Selected innovators will undergo a 1-on-1 diagnostic review with DTU faculty fellows and industry partners from 1st October. Regional hub teams outside the Delhi-NCR perimeter will be assigned virtual mentoring pods and accredited partner university testing centers in their geographic zones.",
    downloads: [{ label: "Lab Safety & Equipment Handbook (PDF)", url: "#" }],
  },
  {
    id: "ann-3",
    category: "Guidelines",
    date: "12.Sept.2026 10:30 A.M.",
    title: "Guidelines for Inter-Disciplinary Team Registration & Eligibility",
    preview:
      "Teams can comprise 2 to 5 members from accredited universities or polytechnics. Cross-departmental collaborations (e.g., Mechanical + Electronics + Computer Science) are strongly encouraged.",
    fullDetails:
      "Eligibility criteria: Undergraduate, Postgraduate, and PhD scholars actively enrolled in AICTE/UGC recognized institutions as of September 2026 are eligible. Startups registered under DPIIT within the last 24 months may also participate in the Open Category.",
    downloads: [{ label: "Eligibility Criteria & FAQs (PDF)", url: "#" }],
  },
  {
    id: "ann-4",
    category: "Mentorship",
    date: "12.Sept.2026 10:30 A.M.",
    title: "Technical Webinar on Patent Filing & Intellectual Property Protection",
    preview:
      "Join senior patent attorneys and DTU-IIF incubator directors for an exclusive masterclass on patent drafting, prior art search, and securing provisional patents before public demonstration.",
    fullDetails:
      "Date: 15 September 2026 | Time: 4:00 PM IST via DTU Virtual Auditorium. The masterclass covers NDAs, utility patents, open-source hardware licenses, and guidance on how YUKTI supports student teams with 100% patent filing fee sponsorships.",
  },
  {
    id: "ann-5",
    category: "Guidelines",
    date: "12.Sept.2026 10:30 A.M.",
    title: "Official Notification: Registration Window & Screening Timeline",
    preview:
      "The portal for team onboarding and track preference selection is now open. Teams must finalize their member rosters and verify college ID cards before the deadline of 30 September 2026.",
    fullDetails:
      "No extensions beyond 30 September 2026 11:59 PM IST will be granted for initial registration. Screening results will be published on the central YUKTI dashboard on 08 October 2026.",
  },
];

export default function LiveAnnouncements() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const filtered = useMemo(() => {
    return announcementsList.filter((item) => {
      const matchSearch =
        item.title.toLowerCase().includes(search.toLowerCase()) ||
        item.preview.toLowerCase().includes(search.toLowerCase());
      const matchCat = category === "All" || item.category === category;
      return matchSearch && matchCat;
    });
  }, [search, category]);

  return (
    <section id="announcements" className="w-full bg-white pt-6 pb-28 lg:pb-40">
      <div className="page-container">
        {/* Header matching Figma Image 1 */}
        <div className="mb-8">
          <span className="text-[14px] font-semibold text-[#ff3b3b] block mb-1.5">
            Important Notices
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-gray-950 tracking-tight leading-tight mb-2">
            Live Announcement
          </h2>
          <p className="text-[15px] text-gray-500 font-normal">
            Stay updated with recent circulars, dates, and official notices
          </p>
        </div>

        {/* Search & Category Filter Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 mb-9 items-center">
          {/* Search Pill */}
          <div className="sm:col-span-8 lg:col-span-9 relative">
            <div className="absolute inset-y-0 left-0 pl-4.5 flex items-center pointer-events-none text-gray-400">
              <Search className="w-4 h-4" />
            </div>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search announcements..."
              className="w-full pl-12 pr-5 py-3 bg-[#ededf0] hover:bg-[#e7e7ec] focus:bg-white text-[14.5px] text-gray-800 placeholder-gray-400 rounded-full border border-transparent focus:border-gray-300 focus:outline-none transition-colors"
            />
          </div>

          {/* Category Dropdown Pill */}
          <div className="sm:col-span-4 lg:col-span-3 relative">
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full appearance-none bg-[#ededf0] hover:bg-[#e7e7ec] text-[14.5px] font-medium text-gray-800 py-3 px-6 pr-11 rounded-full border border-transparent focus:outline-none cursor-pointer transition-colors"
            >
              <option value="All">All Categories</option>
              <option value="Problem Statements">Problem Statements</option>
              <option value="Mentorship">Mentorship</option>
              <option value="Guidelines">Guidelines</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4.5 text-gray-600">
              <ChevronDown className="w-4 h-4" />
            </div>
          </div>
        </div>

        {/* Announcement Cards List matching Figma Image 1 */}
        <div className="space-y-5">
          {filtered.length === 0 ? (
            <div className="text-center py-14 bg-[#ededf0] rounded-2xl">
              <p className="text-gray-500 text-sm">No announcements matching your search.</p>
            </div>
          ) : (
            filtered.map((item) => {
              const isExpanded = expandedId === item.id;
              return (
                <div
                  key={item.id}
                  className="bg-[#ededf0] hover:bg-[#e6e6ea] transition-colors duration-150 rounded-2xl p-6 sm:p-7"
                >
                  {/* Top line with Date and View Full Details */}
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <span className="text-[13px] font-semibold text-gray-600">
                      {item.date}
                    </span>
                    <button
                      onClick={() => toggleExpand(item.id)}
                      className="inline-flex items-center gap-1.5 text-[13.5px] font-bold text-[#ff3b3b] hover:text-[#d02828] transition-colors cursor-pointer flex-shrink-0"
                    >
                      <span>{isExpanded ? "Hide Details" : "View Full Details"}</span>
                      {isExpanded ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </button>
                  </div>

                  {/* Title */}
                  <h3
                    onClick={() => toggleExpand(item.id)}
                    className="text-[18px] sm:text-[19px] font-bold text-gray-950 mb-2 cursor-pointer hover:text-[#ff3b3b] transition-colors"
                  >
                    {item.title}
                  </h3>

                  {/* Body text snippet */}
                  <p className="text-[13.5px] sm:text-[14px] text-gray-600 leading-[1.65] font-normal">
                    {item.preview}
                  </p>

                  {/* Expandable details */}
                  {isExpanded && (
                    <div className="mt-5 pt-5 border-t border-gray-300/80 text-[14px] text-gray-700 animate-in fade-in duration-150">
                      <p className="leading-relaxed mb-4 bg-white/80 p-5 rounded-xl border border-gray-200/90">
                        {item.fullDetails}
                      </p>
                      {item.downloads && (
                        <div className="flex flex-wrap gap-2.5">
                          {item.downloads.map((d, dIdx) => (
                            <a
                              key={dIdx}
                              href={d.url}
                              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-gray-800 bg-white hover:bg-gray-100 rounded-lg border border-gray-300 shadow-2xs"
                            >
                              <Download className="w-3.5 h-3.5 text-[#ff3b3b]" />
                              <span>{d.label}</span>
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
}
