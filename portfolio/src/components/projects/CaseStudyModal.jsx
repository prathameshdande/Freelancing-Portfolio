import React, { useEffect } from "react";
import {
  X,
  ExternalLink,
  CheckCircle2,
  Layers,
  ShieldCheck,
  Database,
  Smartphone,
} from "lucide-react";
import husheBandhu from "../../assets/husheBandhu.png";

export default function CaseStudyModal({ isOpen, onClose }) {
  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/70 backdrop-blur-md transition-opacity"
        aria-hidden="true"
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-4xl rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col text-slate-900 dark:text-slate-100 font-sans my-auto transition-colors duration-200">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-200 dark:border-slate-800/90 bg-slate-50 dark:bg-slate-950/70 shrink-0">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <h3 className="font-bold text-lg text-slate-900 dark:text-white">
              Project Case Study
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8">
          {/* Hero Banner */}
          <div className="space-y-4">
            <span className="text-xs font-mono uppercase tracking-wider text-amber-600 dark:text-amber-400 font-semibold">
              Commercial Client Platform • MERN Stack
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
              Hushe Bandhu Jewellers — Integrated Storefront & Management
              Platform
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              A comprehensive jewellery business platform engineered to combine
              a luxury, customer-facing storefront with an administrative
              inventory, daily metal-rate updater, and dynamic pricing
              calculation engine.
            </p>
          </div>

          {/* Screenshot Preview */}
          <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-950 shadow-xl">
            <img
              src={husheBandhu}
              alt="Hushe Bandhu Jewellers Storefront Preview"
              className="w-full object-cover object-top max-h-[380px]"
            />
          </div>

          {/* Core Objectives & Challenge */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800/80 space-y-3">
              <h4 className="font-bold text-sm text-slate-900 dark:text-white flex items-center gap-2">
                <Layers
                  size={18}
                  className="text-amber-500 dark:text-amber-400"
                />
                The Business Challenge
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Jewellery retailers manage dynamic metal pricing influenced by
                volatile gold and silver rates. Traditional static catalogs
                cause pricing discrepancies, manual enquiries, and friction for
                customers seeking transparent, up-to-date valuations.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800/80 space-y-3">
              <h4 className="font-bold text-sm text-slate-900 dark:text-white flex items-center gap-2">
                <ShieldCheck
                  size={18}
                  className="text-emerald-500 dark:text-emerald-400"
                />
                The Implemented Solution
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Developed an end-to-end MERN architecture pairing an instant
                pricing engine with direct WhatsApp ordering and an
                administrative dashboard for daily rate updates, stock level
                management, and category curation.
              </p>
            </div>
          </div>

          {/* Architecture Highlights */}
          <div className="space-y-4">
            <h4 className="font-bold text-base text-slate-900 dark:text-white">
              Platform Modules & Features
            </h4>
            <div className="grid sm:grid-cols-2 gap-3.5">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950/40 border border-slate-200 dark:border-slate-800/60">
                <CheckCircle2
                  size={18}
                  className="text-amber-500 dark:text-amber-400 shrink-0 mt-0.5"
                />
                <div>
                  <h5 className="font-semibold text-xs sm:text-sm text-slate-900 dark:text-slate-200">
                    Live Metal Rate Management
                  </h5>
                  <p className="text-[12px] text-slate-500 dark:text-slate-400 mt-0.5">
                    Admin-configured daily gold & silver rates ticker reflected
                    across entire catalog.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950/40 border border-slate-200 dark:border-slate-800/60">
                <CheckCircle2
                  size={18}
                  className="text-amber-500 dark:text-amber-400 shrink-0 mt-0.5"
                />
                <div>
                  <h5 className="font-semibold text-xs sm:text-sm text-slate-900 dark:text-slate-200">
                    Interactive Gold Calculator
                  </h5>
                  <p className="text-[12px] text-slate-500 dark:text-slate-400 mt-0.5">
                    Calculates purity, weight, making charges, and GST
                    dynamically for instant customer quotes.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950/40 border border-slate-200 dark:border-slate-800/60">
                <CheckCircle2
                  size={18}
                  className="text-amber-500 dark:text-amber-400 shrink-0 mt-0.5"
                />
                <div>
                  <h5 className="font-semibold text-xs sm:text-sm text-slate-900 dark:text-slate-200">
                    Inventory & Stock Tracking
                  </h5>
                  <p className="text-[12px] text-slate-500 dark:text-slate-400 mt-0.5">
                    Protected admin CRUD routes for product inventory, SKU
                    management, and media uploads.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950/40 border border-slate-200 dark:border-slate-800/60">
                <CheckCircle2
                  size={18}
                  className="text-amber-500 dark:text-amber-400 shrink-0 mt-0.5"
                />
                <div>
                  <h5 className="font-semibold text-xs sm:text-sm text-slate-900 dark:text-slate-200">
                    Direct WhatsApp Inquiry Routing
                  </h5>
                  <p className="text-[12px] text-slate-500 dark:text-slate-400 mt-0.5">
                    One-tap product enquiry passing product name, SKU, and specs
                    straight to the store’s phone.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="space-y-3">
            <h4 className="font-bold text-sm text-slate-900 dark:text-white">
              Technologies Utilized
            </h4>
            <div className="flex flex-wrap gap-2">
              {[
                "React 19",
                "Tailwind CSS",
                "Node.js",
                "Express",
                "MongoDB",
                "Cloudinary",
                "Vite",
                "JWT Authentication",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs font-mono text-slate-700 dark:text-slate-300 font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 border-t border-slate-200 dark:border-slate-800/90 bg-slate-50 dark:bg-slate-950/80 flex flex-wrap items-center justify-between gap-4 shrink-0">
          <div className="text-xs text-slate-500 dark:text-slate-400">
            Status:{" "}
            <span className="text-emerald-500 dark:text-emerald-400 font-semibold">
              Live in Production
            </span>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
            >
              Close
            </button>
            <a
              href="https://hushe-bandhu-jewellers.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-semibold text-xs sm:text-sm shadow-md transition-all"
            >
              <span>Visit Live Website</span>
              <ExternalLink size={15} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
