import React from "react";
import Link from "next/link";
import { ArrowLeft, Home, FileSpreadsheet, Mail } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center px-4 sm:px-6 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute w-96 h-96 rounded-full bg-blue-600/20 blur-3xl pointer-events-none -top-10 -left-10" />
      <div className="absolute w-96 h-96 rounded-full bg-indigo-600/20 blur-3xl pointer-events-none -bottom-10 -right-10" />

      <div className="relative z-10 max-w-lg w-full text-center space-y-6">
        <Link
          href="/"
          className="inline-flex items-center gap-3 p-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors mx-auto"
        >
          <div className="w-10 h-10 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-base">
            EH
          </div>
          <span className="font-bold text-sm text-slate-200">
            Estakball Hossain • Portfolio
          </span>
        </Link>

        <div>
          <div className="text-8xl sm:text-9xl font-extrabold font-display tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400">
            404
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mt-2">
            Page Not Found / পৃষ্ঠাটি পাওয়া যায়নি
          </h1>
          <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
            The page you are looking for doesn&apos;t exist, has been moved, or the link may be broken.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all shadow-lg shadow-blue-600/25"
          >
            <Home className="w-4 h-4" />
            Back to Home
          </Link>
          <Link
            href="/#projects"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-slate-200 border border-white/10 font-semibold text-sm transition-all"
          >
            <FileSpreadsheet className="w-4 h-4 text-blue-400" />
            View Case Studies
          </Link>
          <Link
            href="/#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-slate-200 border border-white/10 font-semibold text-sm transition-all"
          >
            <Mail className="w-4 h-4 text-blue-400" />
            Contact Opu
          </Link>
        </div>
      </div>
    </div>
  );
}

