"use client";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "@/context/ThemeContext";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Contact Us", href: "/contact" },
];

const solutions = [
  { label: "Residential", href: "/solutions/residential" },
  { label: "Commercial", href: "/solutions/commercial" },
  { label: "Industrial", href: "/solutions/industrial" },
  { label: "Agricultural", href: "/solutions/agricultural" },
  { label: "On-Grid System", href: "/system/on-grid" },
  { label: "Hybrid System", href: "/system/hybrid" },
  { label: "Off-Grid System", href: "/system/off-grid" },
  { label: "Net-Metering", href: "/system/net-metering" },
];

const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/share/1H7ZMG2xA7/",
    color: "#1877F2",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/sr_renovation?igsh=eW40cGJlaW9mbGY2",
    color: "#E1306C",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/message/ULXGYX6WJQ32G1",
    color: "#25D366",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    ),
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@sr.solar.solution",
    color: "#010101",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.79 1.54V6.78a4.85 4.85 0 01-1.02-.09z"/>
      </svg>
    ),
  },
];

export default function Footer() {
  const { darkMode } = useTheme();
  const dark = darkMode;

  return (
    <footer className={`transition-colors duration-300 ${dark ? "bg-[#0B1120] text-gray-400" : "bg-gray-50 text-gray-600"}`}>

      {/* Top accent line */}
      <div className="h-1 w-full" style={{ background: "linear-gradient(90deg, #1565C0 0%, #22C55E 100%)" }} />

      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="relative w-14 h-14 flex-shrink-0">
                <Image
                  src="/logo.png"
                  alt="SR Solar Solution"
                  fill
                  sizes="56px"
                  className="object-contain"
                />
              </div>
              <div className="leading-snug">
                <span className={`block font-extrabold text-sm tracking-wide ${dark ? "text-white" : "text-[#0B1120]"}`}>SR SOLAR</span>
                <span className="block text-[#22C55E] text-[11px] tracking-widest font-semibold uppercase">Solution Company</span>
              </div>
            </Link>

            <p className={`text-sm leading-relaxed mb-5 ${dark ? "text-gray-500" : "text-gray-600"}`}>
              Pakistan's trusted solar energy partner. Empowering homes and businesses with clean, reliable solar power solutions.
            </p>

            {/* CEO Info */}
            <div className={`text-xs space-y-1 mb-5 p-3 rounded-xl ${dark ? "bg-[#0F1A2E] border border-[#1a2d4a]" : "bg-white border border-gray-200"}`}>
              <p className={`font-bold text-sm ${dark ? "text-white" : "text-gray-900"}`}>Muhammad Shahzad Riaz</p>
              <p className="text-[#22C55E] font-medium">CEO — SR Solar Solution</p>
            </div>

            {/* Social Icons */}
            <div className="flex gap-2">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                  style={{ background: s.color, color: "#fff" }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className={`font-bold mb-5 text-sm tracking-wider uppercase ${dark ? "text-white" : "text-gray-900"}`}>
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className={`text-sm flex items-center gap-2 transition-colors hover:text-[#22C55E] ${dark ? "text-gray-500" : "text-gray-600"}`}
                  >
                    <span className="text-[#22C55E]">›</span>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className={`font-bold mb-5 text-sm tracking-wider uppercase ${dark ? "text-white" : "text-gray-900"}`}>
              Our Solutions
            </h3>
            <ul className="space-y-2.5">
              {solutions.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className={`text-sm flex items-center gap-2 transition-colors hover:text-[#22C55E] ${dark ? "text-gray-500" : "text-gray-600"}`}
                  >
                    <span className="text-[#22C55E]">›</span>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className={`font-bold mb-5 text-sm tracking-wider uppercase ${dark ? "text-white" : "text-gray-900"}`}>
              Contact Us
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <span className="text-[#22C55E] mt-0.5 text-base">📍</span>
                <span className={dark ? "text-gray-400" : "text-gray-600"}>
                  Office No. 14, Model Town, Lahore, Pakistan
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#22C55E] mt-0.5 text-base">📞</span>
                <div className="flex flex-col gap-1">
                  <a href="tel:+923244029816" className={`hover:text-[#22C55E] transition-colors ${dark ? "text-gray-400" : "text-gray-600"}`}>
                    +92 324 4029816
                  </a>
                  <a href="tel:+923479271127" className={`hover:text-[#22C55E] transition-colors ${dark ? "text-gray-400" : "text-gray-600"}`}>
                    +92 347 9271127
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#22C55E] mt-0.5 text-base">✉️</span>
                <a
                  href="mailto:srsolarsolutioncompany@gmail.com"
                  className={`hover:text-[#22C55E] transition-colors break-all ${dark ? "text-gray-400" : "text-gray-600"}`}
                >
                  srsolarsolutioncompany@gmail.com
                </a>
              </li>
            </ul>

            <a
              href="https://wa.me/message/ULXGYX6WJQ32G1"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-white font-bold text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg"
              style={{ background: "linear-gradient(135deg, #1565C0 0%, #22C55E 100%)" }}
            >
              Get Free Quote
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={`border-t ${dark ? "border-[#1a2d4a]" : "border-gray-200"} pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs ${dark ? "text-gray-600" : "text-gray-500"}`}>
          <p>© {new Date().getFullYear()} SR Solar Solution Company. All rights reserved.</p>
          <p>Developed by DU Softdev Software Company</p>
        </div>
      </div>
    </footer>
  );
}