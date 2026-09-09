"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  onOpenRegister?: () => void;
  onOpenSignIn?: () => void;
}

export default function Navbar({ onOpenRegister, onOpenSignIn }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white border-b border-gray-100 z-40 sticky top-0">
      <div className="page-container">
        <div className="flex items-center justify-between h-[84px]">
          {/* Brand Logo & Name */}
          <Link href="/" className="flex items-center gap-3.5 group">
            <div className="relative w-12 h-12 flex-shrink-0">
              <Image
                src="/images/dtu-logo.svg"
                alt="Delhi Technological University Logo"
                width={48}
                height={48}
                className="w-full h-full object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-[20px] font-extrabold tracking-tight text-gray-950 leading-tight">
                YUKTI <span className="text-[#ff3b3b]">2026</span>
              </span>
              <span className="text-[11.5px] font-semibold text-gray-600 tracking-normal">
                DTU Rashtriya Innovation
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-9">
            <Link
              href="#home"
              className="text-[14.5px] font-medium text-gray-900 hover:text-[#ff3b3b] transition-colors"
            >
              Home
            </Link>
            <Link
              href="#events"
              className="text-[14.5px] font-medium text-gray-600 hover:text-[#ff3b3b] transition-colors"
            >
              Events
            </Link>
            <Link
              href="#guidelines"
              className="text-[14.5px] font-medium text-gray-600 hover:text-[#ff3b3b] transition-colors"
            >
              Guidelines
            </Link>
            <Link
              href="#about-dtu"
              className="text-[14.5px] font-medium text-gray-600 hover:text-[#ff3b3b] transition-colors"
            >
              About DTU
            </Link>
            <button
              onClick={onOpenSignIn}
              className="text-[14.5px] font-medium text-gray-700 hover:text-gray-950 transition-colors cursor-pointer ml-1"
            >
              Sign In
            </button>
            <button
              onClick={onOpenRegister}
              className="px-6 py-2 text-[14px] font-medium text-[#ff3b3b] border border-[#ff8787] rounded-full hover:bg-[#ff3b3b] hover:text-white transition-all duration-200 cursor-pointer shadow-2xs"
            >
              Sign Up
            </button>
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-gray-600 hover:text-gray-950 hover:bg-gray-100"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 px-6 py-4 space-y-3 shadow-lg">
          <Link
            href="#home"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-medium text-gray-900"
          >
            Home
          </Link>
          <Link
            href="#events"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-medium text-gray-600"
          >
            Events
          </Link>
          <Link
            href="#guidelines"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-medium text-gray-600"
          >
            Guidelines
          </Link>
          <Link
            href="#about-dtu"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-medium text-gray-600"
          >
            About DTU
          </Link>
          <div className="pt-3 border-t border-gray-100 flex gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSignIn?.();
              }}
              className="flex-1 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg text-center"
            >
              Sign In
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenRegister?.();
              }}
              className="flex-1 py-2 text-sm font-medium text-white bg-[#ff3b3b] rounded-lg text-center"
            >
              Sign Up
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
