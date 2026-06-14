"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";

const panels = [
  { name: "Longi", category: "Panels", color: "#E53E3E", short: "LG" },
  { name: "Jinko", category: "Panels", color: "#3182CE", short: "JK" },
  { name: "Canadian", category: "Panels", color: "#D69E2E", short: "CS" },
  { name: "JA Solar", category: "Panels", color: "#38A169", short: "JA" },
  { name: "Trina Solar", category: "Panels", color: "#805AD5", short: "TR" },
  { name: "Aiko Solar", category: "Panels", color: "#DD6B20", short: "AK" },
  { name: "Astronergy", category: "Panels", color: "#00B5D8", short: "AS" },
  { name: "Huasun", category: "Panels", color: "#F6AD55", short: "HS" },
  { name: "Risen", category: "Panels", color: "#FC8181", short: "RS" },
  { name: "Hanersun", category: "Panels", color: "#68D391", short: "HN" },
  { name: "Yingli", category: "Panels", color: "#76E4F7", short: "YL" },
  { name: "Osda", category: "Panels", color: "#F687B3", short: "OD" },
  { name: "Mesol Alpha", category: "Panels", color: "#B794F4", short: "MA" },
  { name: "Znshine", category: "Panels", color: "#FBD38D", short: "ZN" },
  { name: "ENSOLAR", category: "Panels", color: "#4FD1C5", short: "EN" },
];

const invertersBatteries = [
  { name: "Growatt", category: "Inverters", color: "#3182CE", short: "GW" },
  { name: "Sofar", category: "Inverters", color: "#38A169", short: "SF" },
  { name: "Livoltek", category: "Inverters", color: "#805AD5", short: "LV" },
  { name: "Osda", category: "Inverters", color: "#DD6B20", short: "OD" },
  { name: "ZIEWNIC", category: "Batteries", color: "#E53E3E", short: "ZW" },
  { name: "Lithium Valley", category: "Batteries", color: "#D69E2E", short: "LV" },
  { name: "Crown", category: "Batteries", color: "#00B5D8", short: "CR" },
  { name: "Giro", category: "Batteries", color: "#F6AD55", short: "GR" },
  { name: "Auxsol", category: "Batteries", color: "#FC8181", short: "AX" },
  { name: "Verto", category: "Batteries", color: "#68D391", short: "VT" },
  { name: "Itel", category: "Batteries", color: "#76E4F7", short: "IT" },
  { name: "EY Power", category: "Batteries", color: "#F687B3", short: "EY" },
  { name: "LVTOPSUN", category: "Batteries", color: "#B794F4", short: "LT" },
  { name: "VESTWOODS", category: "Batteries", color: "#FBD38D", short: "VS" },
  { name: "Chint", category: "Inverters", color: "#4FD1C5", short: "CH" },
];

function BrandCard({ brand, index, dark }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5, rotateY: 90 }}
      whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.05, type: "spring", stiffness: 100 }}
      whileHover={{
        scale: 1.15,
        rotateY: 15,
        rotateX: -10,
        z: 50,
        transition: { duration: 0.3 },
      }}
      className="flex-shrink-0 flex flex-col items-center gap-3 cursor-pointer"
      style={{ perspective: "1000px" }}
    >
      {/* 3D Circle */}
      <div className="relative">
        {/* Outer glow ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 rounded-full"
          style={{
            background: `conic-gradient(${brand.color}, transparent, ${brand.color})`,
            padding: "2px",
            borderRadius: "50%",
          }}
        />

        {/* Main circle */}
        <div
          className="relative w-20 h-20 rounded-full flex items-center justify-center font-extrabold text-lg text-white shadow-2xl"
          style={{
            background: `radial-gradient(circle at 35% 35%, ${brand.color}ee, ${brand.color}88)`,
            boxShadow: `0 8px 32px ${brand.color}60, inset 0 2px 4px rgba(255,255,255,0.3), inset 0 -2px 4px rgba(0,0,0,0.2)`,
            border: `2px solid ${brand.color}`,
          }}
        >
          {/* Shine effect */}
          <div
            className="absolute top-2 left-3 w-6 h-3 rounded-full opacity-40"
            style={{ background: "rgba(255,255,255,0.8)", filter: "blur(2px)" }}
          />
          <span className="relative z-10 text-sm font-black tracking-wide drop-shadow-lg">
            {brand.short}
          </span>
        </div>

        {/* Category icon */}
        <div
          className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center text-xs border-2 shadow-lg"
          style={{
            background: dark ? "#0B1120" : "#fff",
            borderColor: brand.color,
          }}
        >
          {brand.category === "Panels" ? "☀️" : brand.category === "Inverters" ? "⚡" : "🔋"}
        </div>
      </div>

      {/* Name */}
      <div className="text-center">
        <p className={`text-xs font-bold whitespace-nowrap ${dark ? "text-gray-300" : "text-gray-800"}`}>
          {brand.name}
        </p>
        <p className="text-[10px] font-medium" style={{ color: brand.color }}>
          {brand.category}
        </p>
      </div>
    </motion.div>
  );
}

function ScrollRow({ brands, dark, reverse = false, speed = 30 }) {
  const doubled = [...brands, ...brands];
  return (
    <div className="overflow-hidden relative">
      {/* Fade edges */}
      <div className={`absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none`}
        style={{ background: `linear-gradient(to right, ${dark ? "#0F1A2E" : "#ffffff"}, transparent)` }} />
      <div className={`absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none`}
        style={{ background: `linear-gradient(to left, ${dark ? "#0F1A2E" : "#ffffff"}, transparent)` }} />

      <motion.div
        animate={{ x: reverse ? ["0%", "50%"] : ["0%", "-50%"] }}
        transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
        className="flex gap-8 py-4 px-4"
        style={{ width: "max-content" }}
      >
        {doubled.map((b, i) => (
          <BrandCard key={i} brand={b} index={i % brands.length} dark={dark} />
        ))}
      </motion.div>
    </div>
  );
}

export default function Brands() {
  const { darkMode } = useTheme();
  const dark = darkMode;
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section
      ref={ref}
      className={`py-24 overflow-hidden transition-colors duration-300 ${dark ? "bg-[#0F1A2E]" : "bg-white"}`}
    >
      {/* Header */}
      <motion.div style={{ y }} className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 mb-14 text-center">
        <motion.span
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold mb-5"
          style={{
            background: dark ? "rgba(34,197,94,0.1)" : "rgba(21,101,192,0.08)",
            border: `1px solid ${dark ? "rgba(34,197,94,0.3)" : "rgba(21,101,192,0.2)"}`,
            color: dark ? "#22C55E" : "#1565C0",
          }}
        >
          <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: dark ? "#22C55E" : "#1565C0" }} />
          Our Brand Partners
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`text-4xl sm:text-5xl font-extrabold mb-5 ${dark ? "text-white" : "text-gray-900"}`}
        >
          World's Top Brands
          <span style={{ background: "linear-gradient(135deg, #1565C0, #22C55E)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}> We Trust</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className={`text-lg max-w-2xl mx-auto ${dark ? "text-gray-400" : "text-gray-600"}`}
        >
          We partner with world's leading solar panel, inverter and battery brands to deliver the best quality and performance.
        </motion.p>

        {/* Category legend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex items-center justify-center gap-6 mt-6"
        >
          {[
            { icon: "☀️", label: "Solar Panels", count: "15 Brands" },
            { icon: "⚡", label: "Inverters", count: "5 Brands" },
            { icon: "🔋", label: "Batteries", count: "9 Brands" },
          ].map((c, i) => (
            <div key={i} className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm ${
              dark ? "bg-[#0B1120] border border-[#1a2d4a]" : "bg-gray-50 border border-gray-200"
            }`}>
              <span>{c.icon}</span>
              <span className={dark ? "text-gray-300" : "text-gray-700"}>{c.label}</span>
              <span className="font-bold" style={{ color: "#22C55E" }}>{c.count}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Row 1 — Solar Panels */}
      <div className="mb-6">
        <p className={`text-center text-xs font-bold tracking-widest uppercase mb-4 ${dark ? "text-gray-500" : "text-gray-400"}`}>
          ☀️ Solar Panels
        </p>
        <ScrollRow brands={panels} dark={dark} reverse={false} speed={25} />
      </div>

      {/* Row 2 — Inverters & Batteries */}
      <div>
        <p className={`text-center text-xs font-bold tracking-widest uppercase mb-4 ${dark ? "text-gray-500" : "text-gray-400"}`}>
          ⚡ Inverters & 🔋 Batteries
        </p>
        <ScrollRow brands={invertersBatteries} dark={dark} reverse={true} speed={30} />
      </div>
    </section>
  );
}