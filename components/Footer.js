"use client";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "@/context/ThemeContext";

export default function Footer() {
  const { darkMode } = useTheme();

  return (
    <footer className={`${darkMode ? "bg-[#0B1120] text-gray-400" : "bg-gray-50 text-gray-700"} pt-12 pb-6 transition-colors`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="relative w-10 h-10">
                <Image src="/logo.png" alt="SR Solar Solution" fill className="object-contain"
                  onError={(e) => { e.target.style.display = "none"; }} />
              </div>
              <div>
                <span className={`block ${darkMode ? "text-white" : "text-gray-900"} font-bold text-sm`}>SR SOLAR</span>
                <span className="block text-[#F59E0B] text-xs tracking-widest">SOLUTION</span>
              </div>
            </Link>
            <p className={`text-sm ${darkMode ? "text-gray-500" : "text-gray-600"} leading-relaxed`}>
              Pakistan's trusted solar energy partner. Empowering homes and businesses with clean, reliable solar power.
            </p>
            <div className="flex gap-3 mt-4">
              {["facebook", "instagram", "whatsapp"].map((s) => (
                <a key={s} href="#" className={`w-8 h-8 rounded-full ${darkMode ? "bg-[#1E293B]" : "bg-gray-200"} hover:bg-[#F59E0B] flex items-center justify-center transition-colors group`}>
                  <span className={`text-xs ${darkMode ? "text-gray-400" : "text-gray-600"} group-hover:text-[#0F172A] capitalize font-bold`}>{s[0].toUpperCase()}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className={`${darkMode ? "text-white" : "text-gray-900"} font-semibold mb-4 text-sm tracking-wider uppercase`}>Quick Links</h3>
            <ul className="space-y-2">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "Projects", href: "/projects" },
                { label: "Contact Us", href: "/contact" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className={`text-sm ${darkMode ? "text-gray-500" : "text-gray-600"} hover:text-[#F59E0B] transition-colors flex items-center gap-2`}>
                    <span className="text-[#F59E0B] text-xs">›</span> {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className={`${darkMode ? "text-white" : "text-gray-900"} font-semibold mb-4 text-sm tracking-wider uppercase`}>Solutions</h3>
            <ul className="space-y-2">
              {[
                { label: "Residential", href: "/solutions/residential" },
                { label: "Commercial", href: "/solutions/commercial" },
                { label: "Industrial", href: "/solutions/industrial" },
                { label: "Agricultural", href: "/solutions/agricultural" },
                { label: "On-Grid System", href: "/system/on-grid" },
                { label: "Hybrid System", href: "/system/hybrid" },
                { label: "Off-Grid System", href: "/system/off-grid" },
                { label: "Net-Metering", href: "/system/net-metering" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className={`text-sm ${darkMode ? "text-gray-500" : "text-gray-600"} hover:text-[#F59E0B] transition-colors flex items-center gap-2`}>
                    <span className="text-[#F59E0B] text-xs">›</span> {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className={`${darkMode ? "text-white" : "text-gray-900"} font-semibold mb-4 text-sm tracking-wider uppercase`}>Contact Us</h3>
            <ul className={`space-y-3 text-sm ${darkMode ? "text-gray-500" : "text-gray-600"}`}>
              <li className="flex items-start gap-2">
                <span className="text-[#F59E0B] mt-0.5">📍</span>
                <span>Pakistan</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#F59E0B] mt-0.5">📞</span>
                <a href="tel:+92" className="hover:text-[#F59E0B] transition-colors">+92 XXX XXXXXXX</a>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#F59E0B] mt-0.5">✉️</span>
                <a href="mailto:info@srsolar.pk" className="hover:text-[#F59E0B] transition-colors">info@srsolar.pk</a>
              </li>
            </ul>
            <Link href="/contact" className="mt-5 inline-block px-5 py-2.5 bg-[#F59E0B] hover:bg-[#D97706] text-[#0F172A] font-bold text-sm rounded-lg transition-colors">
              Get Free Quote
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className={`border-t ${darkMode ? "border-[#1E293B]" : "border-gray-300"} pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs ${darkMode ? "text-gray-600" : "text-gray-600"}`}>
          <p>© {new Date().getFullYear()} SR Solar Solution. All rights reserved.</p>
          <p>Designed with ☀️ for a greener Pakistan</p>
        </div>
      </div>
    </footer>
  );
}
