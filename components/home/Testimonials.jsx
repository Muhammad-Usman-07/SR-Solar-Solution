"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";

const testimonials = [
  { name: "Ahmed Raza", location: "Lahore", rating: 5, system: "10KW On-Grid", review: "SR Solar Solution installed a 10KW system at my home. Excellent work, professional team and my electricity bill went from Rs. 25,000 to almost zero. Highly recommended!" },
  { name: "Muhammad Bilal", location: "Karachi", rating: 5, system: "50KW Commercial", review: "We got a 50KW system for our plaza. The ROI is amazing — we recovered our investment in just 3 years. The after-sales support is outstanding." },
  { name: "Tariq Mahmood", location: "Islamabad", rating: 5, system: "5KW Hybrid", review: "The hybrid system is perfect. No load shedding issues anymore. The team was very professional and completed the installation in just 2 days." },
  { name: "Farooq Ahmed", location: "Faisalabad", rating: 5, system: "100KW Industrial", review: "Our factory's electricity cost has reduced by 85%. SR Solar Solution delivered exactly what they promised. Best solar company in Pakistan." },
  { name: "Nasir Khan", location: "Multan", rating: 5, system: "7.5KW Off-Grid", review: "Solar tube well is working perfectly. No more electricity issues for our farm. Great service and very reasonable prices." },
];

export default function Testimonials() {
  const { darkMode } = useTheme();
  const dark = darkMode;
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className={`py-24 transition-colors duration-300 ${dark ? "bg-[#0F1A2E]" : "bg-white"}`}>
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold mb-5"
            style={{ background: dark ? "rgba(34,197,94,0.1)" : "rgba(21,101,192,0.08)", border: `1px solid ${dark ? "rgba(34,197,94,0.3)" : "rgba(21,101,192,0.2)"}`, color: dark ? "#22C55E" : "#1565C0" }}>
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: dark ? "#22C55E" : "#1565C0" }} />
            Testimonials
          </span>
          <h2 className={`text-4xl sm:text-5xl font-extrabold mb-5 ${dark ? "text-white" : "text-gray-900"}`}>
            What Our
            <span style={{ background: "linear-gradient(135deg, #1565C0, #22C55E)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}> Clients Say</span>
          </h2>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.4 }}
              className={`p-8 sm:p-12 rounded-3xl border ${dark ? "bg-[#0B1120] border-[#1a2d4a]" : "bg-gray-50 border-gray-200 shadow-lg"}`}
            >
              <div className="flex gap-1 mb-6">
                {[...Array(testimonials[current].rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>
              <p className={`text-lg leading-relaxed mb-8 italic ${dark ? "text-gray-300" : "text-gray-700"}`}>
                "{testimonials[current].review}"
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg"
                    style={{ background: "linear-gradient(135deg, #1565C0, #22C55E)" }}>
                    {testimonials[current].name[0]}
                  </div>
                  <div>
                    <p className={`font-bold ${dark ? "text-white" : "text-gray-900"}`}>{testimonials[current].name}</p>
                    <p className={`text-sm ${dark ? "text-gray-500" : "text-gray-500"}`}>📍 {testimonials[current].location}</p>
                  </div>
                </div>
                <div className="px-4 py-2 rounded-full text-xs font-bold"
                  style={{ background: "linear-gradient(135deg, #1565C020, #22C55E20)", color: dark ? "#22C55E" : "#1565C0", border: `1px solid ${dark ? "#22C55E30" : "#1565C030"}` }}>
                  {testimonials[current].system}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button onClick={prev}
              className={`w-11 h-11 rounded-full flex items-center justify-center font-bold transition-all hover:scale-110 ${dark ? "bg-[#0B1120] border border-[#1a2d4a] text-white hover:border-[#22C55E]" : "bg-white border border-gray-200 text-gray-700 hover:border-blue-400 shadow-sm"}`}>
              ←
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => setCurrent(i)}
                  className="w-2.5 h-2.5 rounded-full transition-all duration-300"
                  style={{ background: i === current ? "linear-gradient(135deg, #1565C0, #22C55E)" : dark ? "#1a2d4a" : "#e5e7eb", transform: i === current ? "scale(1.3)" : "scale(1)" }} />
              ))}
            </div>
            <button onClick={next}
              className={`w-11 h-11 rounded-full flex items-center justify-center font-bold transition-all hover:scale-110 ${dark ? "bg-[#0B1120] border border-[#1a2d4a] text-white hover:border-[#22C55E]" : "bg-white border border-gray-200 text-gray-700 hover:border-blue-400 shadow-sm"}`}>
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}