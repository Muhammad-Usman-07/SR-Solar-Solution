"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "@/context/ThemeContext";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  {
    label: "Solar Solutions",
    dropdown: [
      { label: "Residential", href: "/solutions/residential" },
      { label: "Commercial", href: "/solutions/commercial" },
      { label: "Industrial", href: "/solutions/industrial" },
      { label: "Agricultural", href: "/solutions/agricultural" },
    ],
  },
  {
    label: "Solar System",
    dropdown: [
      { label: "On-Grid System", href: "/system/on-grid" },
      { label: "Hybrid System", href: "/system/hybrid" },
      { label: "Off-Grid System", href: "/system/off-grid" },
      { label: "Net-Metering", href: "/system/net-metering" },
    ],
  },
  {
    label: "Solar Panels",
    dropdown: [
      { label: "ENSOLAR Power Partner", href: "/panels/ensolar" },
      { label: "Yingli", href: "/panels/yingli" },
      { label: "Aiko Solar", href: "/panels/aiko" },
      { label: "Astronergy", href: "/panels/astronergy" },
      { label: "Huasun", href: "/panels/huasun" },
      { label: "Hanersun", href: "/panels/hanersun" },
      { label: "Canadian", href: "/panels/canadian" },
      { label: "Risen", href: "/panels/risen" },
      { label: "Growatt", href: "/panels/growatt" },
      { label: "JA Solar", href: "/panels/ja-solar" },
      { label: "Jinko", href: "/panels/jinko" },
      { label: "Znshine", href: "/panels/znshine" },
      { label: "Mesol Alpha", href: "/panels/mesol-alpha" },
      { label: "Longi", href: "/panels/longi" },
      { label: "Osda", href: "/panels/osda" },
      { label: "Trina Solar", href: "/panels/trina" },
    ],
  },
  {
    label: "Inverters",
    dropdown: [
      { label: "Ongrid Inverters", href: "/inverters/ongrid" },
      { label: "Hybrid Inverters", href: "/inverters/hybrid" },
    ],
  },
  {
    label: "Batteries",
    dropdown: [
      { label: "5kwh LV Batteries", href: "/batteries/5kwh" },
      { label: "10kwh Batteries", href: "/batteries/10kwh" },
      { label: "16kwh LV Batteries", href: "/batteries/16kwh" },
      { label: "ZIEWNIC", href: "/batteries/ziewnic" },
      { label: "Lithium Valley", href: "/batteries/lithium-valley" },
      { label: "Crown", href: "/batteries/crown" },
      { label: "Giro", href: "/batteries/giro" },
      { label: "Itel", href: "/batteries/itel" },
      { label: "Auxsol", href: "/batteries/auxsol" },
      { label: "Verto", href: "/batteries/verto" },
      { label: "Sofar", href: "/batteries/sofar" },
      { label: "HSOLAR", href: "/batteries/hsolar" },
      { label: "Chint", href: "/batteries/chint" },
      { label: "Livoltek", href: "/batteries/livoltek" },
      { label: "EY Power", href: "/batteries/ey-power" },
      { label: "LVTOPSUN", href: "/batteries/lvtopsun" },
      { label: "VESTWOODS", href: "/batteries/vestwoods" },
    ],
  },
  {
    label: "Other Products",
    dropdown: [
      { label: "Installation Accessories", href: "/products/installation" },
      { label: "Packages", href: "/products/packages" },
      { label: "Products Accessories", href: "/products/accessories" },
    ],
  },
];

const WHATSAPP_URL = `https://wa.me/923244029816?text=${encodeURIComponent("Hello SR Solar Solution! 👋\n\nI visited your website and I'm interested in your solar services.\n\nPlease guide me about the best solar solution for my needs.\n\nThank you! ☀️")}`;

export default function Navbar() {
  const { darkMode, setDarkMode } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileExpanded, setMobileExpanded] = useState(null);
  const [waHovered, setWaHovered] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setMobileOpen(false);
        setOpenDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const dark = darkMode;

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          dark ? "bg-[#0B1120]" : "bg-white shadow-md"
        }`}
      >
        {/* ROW 1 — Logo + Toggle + Get Quote */}
        <div className={`border-b ${dark ? "border-[#1a2d4a]" : "border-gray-200"}`}>
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 flex-shrink-0">
              <div className="relative w-16 h-16 flex-shrink-0">
                <Image
                  src="/logo.png"
                  alt="SR Solar Solution"
                  fill
                  sizes="64px"
                  className="object-contain"
                  priority
                />
              </div>
              <div className="leading-snug">
                <span className={`block font-extrabold text-base tracking-wide ${dark ? "text-white" : "text-[#0B1120]"}`}>
                  SR SOLAR
                </span>
                <span className="block text-[#22C55E] text-[11px] tracking-widest font-semibold uppercase">
                  Solution Company
                </span>
              </div>
            </Link>

            {/* Right Actions */}
            <div className="flex items-center gap-3">

              {/* Dark/Light Toggle */}
              <button
                onClick={() => setDarkMode(!dark)}
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 text-lg ${
                  dark ? "bg-[#1E3A5F] hover:bg-[#22344f]" : "bg-gray-100 hover:bg-gray-200"
                }`}
                aria-label="Toggle theme"
              >
                {dark ? "☀️" : "🌙"}
              </button>

              {/* Get Quote */}
              <Link
                href="/contact"
                className="hidden sm:inline-flex items-center justify-center px-6 py-2.5 rounded-full font-bold text-sm text-white transition-all duration-300 hover:scale-105 hover:shadow-lg whitespace-nowrap"
                style={{
                  background: "linear-gradient(135deg, #1565C0 0%, #22C55E 100%)",
                  boxShadow: "0 4px 15px rgba(34,197,94,0.25)",
                }}
              >
                Get Quote
              </Link>

              {/* Hamburger */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className={`lg:hidden w-10 h-10 flex items-center justify-center rounded-lg text-xl transition-colors ${
                  dark ? "text-gray-300 hover:text-[#22C55E]" : "text-gray-700 hover:text-[#1565C0]"
                }`}
                aria-label="Toggle menu"
              >
                {mobileOpen ? "✕" : "☰"}
              </button>
            </div>
          </div>
        </div>

        {/* ROW 2 — Nav Links (desktop only) */}
        <div className={`hidden lg:block border-b ${dark ? "bg-[#0F1A2E] border-[#1a2d4a]" : "bg-gray-50 border-gray-200"}`}>
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center gap-0.5 h-11">
              {navItems.map((item, idx) =>
                item.dropdown ? (
                  <div
                    key={idx}
                    className="relative"
                    onMouseEnter={() => setOpenDropdown(idx)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <button
                      className={`flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors whitespace-nowrap rounded-md ${
                        dark
                          ? "text-gray-300 hover:text-[#22C55E] hover:bg-white/5"
                          : "text-gray-600 hover:text-[#1565C0] hover:bg-gray-200"
                      }`}
                    >
                      {item.label}
                      <span className={`text-xs transition-transform duration-200 inline-block ${openDropdown === idx ? "rotate-180" : ""}`}>
                        ▾
                      </span>
                    </button>

                    {openDropdown === idx && (
                      <div
                        className={`absolute top-full left-0 mt-0 rounded-xl min-w-[200px] py-1.5 z-50 max-h-72 overflow-y-auto ${
                          dark
                            ? "bg-[#0F1E33] border border-[#1E3A5F]"
                            : "bg-white border border-gray-200 shadow-xl"
                        }`}
                      >
                        {item.dropdown.map((sub, si) => (
                          <Link
                            key={si}
                            href={sub.href}
                            className={`block px-4 py-2 text-sm font-medium transition-colors ${
                              dark
                                ? "text-gray-300 hover:bg-[#22C55E] hover:text-[#0B1120]"
                                : "text-gray-700 hover:bg-[#1565C0] hover:text-white"
                            }`}
                            onClick={() => setOpenDropdown(null)}
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={idx}
                    href={item.href}
                    className={`px-3 py-2 text-sm font-medium transition-colors whitespace-nowrap rounded-md ${
                      dark
                        ? "text-gray-300 hover:text-[#22C55E] hover:bg-white/5"
                        : "text-gray-600 hover:text-[#1565C0] hover:bg-gray-200"
                    }`}
                  >
                    {item.label}
                  </Link>
                )
              )}
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className={`lg:hidden max-h-[75vh] overflow-y-auto ${
            dark ? "bg-[#0F1E33] border-t border-[#1a2d4a]" : "bg-white border-t border-gray-200"
          }`}>
            <div className="px-4 py-3 space-y-1">
              {navItems.map((item, idx) =>
                item.dropdown ? (
                  <div key={idx}>
                    <button
                      onClick={() => setMobileExpanded(mobileExpanded === idx ? null : idx)}
                      className={`flex items-center justify-between w-full px-3 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                        dark ? "text-gray-300 hover:text-[#22C55E]" : "text-gray-700 hover:text-[#1565C0]"
                      }`}
                    >
                      {item.label}
                      <span className={`text-xs transition-transform duration-200 inline-block ${mobileExpanded === idx ? "rotate-180" : ""}`}>
                        ▾
                      </span>
                    </button>
                    {mobileExpanded === idx && (
                      <div className="ml-4 mt-1 border-l-2 border-[#22C55E] pl-3 space-y-0.5">
                        {item.dropdown.map((sub, si) => (
                          <Link
                            key={si}
                            href={sub.href}
                            className={`block py-1.5 text-sm transition-colors ${
                              dark ? "text-gray-400 hover:text-[#22C55E]" : "text-gray-600 hover:text-[#1565C0]"
                            }`}
                            onClick={() => setMobileOpen(false)}
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={idx}
                    href={item.href}
                    className={`block px-3 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                      dark ? "text-gray-300 hover:text-[#22C55E]" : "text-gray-700 hover:text-[#1565C0]"
                    }`}
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                )
              )}
              <div className="pt-2 pb-1">
                <Link
                  href="/contact"
                  className="block w-full text-center px-4 py-2.5 rounded-full text-white font-bold text-sm"
                  style={{ background: "linear-gradient(135deg, #1565C0 0%, #22C55E 100%)" }}
                  onClick={() => setMobileOpen(false)}
                >
                  Get Quote
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
        {waHovered && (
          <div className="bg-[#075E54] text-white text-sm font-medium px-4 py-2 rounded-xl shadow-lg whitespace-nowrap">
            Chat on WhatsApp
          </div>
        )}
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setWaHovered(true)}
          onMouseLeave={() => setWaHovered(false)}
          className="relative flex items-center justify-center w-14 h-14 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300"
          style={{ background: "#25D366" }}
          aria-label="Chat on WhatsApp"
        >
          <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30"></span>
          <svg className="w-8 h-8 text-white relative z-10" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
        </a>
      </div>
    </>
  );
}