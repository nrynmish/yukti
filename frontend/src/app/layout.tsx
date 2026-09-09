import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "YUKTI 2026 | DTU Rashtriya Innovation Challenge",
  description:
    "Young India's Knowledge & Technology Initiative — A 100-Day Innovation Journey empowering students, researchers, and startups to build sustainable working prototypes for Viksit Bharat at Delhi Technological University.",
  keywords: [
    "YUKTI 2026",
    "DTU",
    "Delhi Technological University",
    "Rashtriya Innovation Challenge",
    "Viksit Bharat",
    "Hackathon",
    "National Themes",
    "UDAN",
  ],
  authors: [{ name: "Delhi Technological University" }],
  openGraph: {
    title: "YUKTI 2026 | DTU Rashtriya Innovation Challenge",
    description:
      "Innovating Today, Inspiring Tomorrow. Join India's premier 100-day student innovation movement.",
    images: ["/images/dtu-campus.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} scroll-smooth`}>
      <body className="min-h-screen bg-[#fafbfc] text-[#111827] font-sans antialiased selection:bg-[#ff4d4f] selection:text-white">
        {children}
      </body>
    </html>
  );
}
