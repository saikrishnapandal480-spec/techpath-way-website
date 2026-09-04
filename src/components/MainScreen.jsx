import React, { useState } from 'react';
import { ArrowRight, Sparkles, Compass, CheckCircle2, X } from 'lucide-react';
import { BRAND_NAME, HEADLINE, TAGLINE, CTA_BUTTON_TEXT } from '../data/mockData';

export default function MainScreen() {
  const [showWelcomeModal, setShowWelcomeModal] = useState(false);

  return (
    <section className="relative min-h-[calc(100vh-80px)] mt-20 flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8 py-16">
      
      {/* Background Lighting & Gradient Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-blue-600/20 via-indigo-600/25 to-purple-600/20 rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse-glow" />
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-purple-500/10 rounded-full blur-[100px] pointer-events-none -z-10" />
      
      {/* Subtle Tech Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none -z-10" />

      {/* Center Main Stage Content */}
      <div className="w-full max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center justify-center">
        
        {/* Subtle Pre-header Pill */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/80 border border-indigo-500/30 text-indigo-300 text-xs sm:text-sm font-semibold mb-8 backdrop-blur-md shadow-lg shadow-indigo-500/10 animate-float-slow">
          <span className="flex h-2 w-2 rounded-full bg-indigo-400 animate-ping" />
          <Sparkles className="w-3.5 h-3.5 text-blue-400" />
          <span>For B.Tech & Engineering Students</span>
        </div>

        {/* 1. Main Brand Title: TECHPATH WAY */}
        <h1 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tight text-white mb-6 select-none">
          <span className="bg-gradient-to-b from-white via-slate-100 to-slate-400 text-transparent bg-clip-text drop-shadow-sm">
            TECHPATH{' '}
          </span>
          <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 text-transparent bg-clip-text drop-shadow-[0_0_35px_rgba(99,102,241,0.4)]">
            WAY
          </span>
        </h1>

        {/* 2. Below it: Your Tech Journey Starts Here. */}
        <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-200 tracking-tight mb-4 max-w-2xl">
          {HEADLINE}
        </p>

        {/* 3. Short Tagline: Learn. Build. Grow. */}
        <div className="flex items-center justify-center gap-3 sm:gap-4 text-slate-400 text-sm sm:text-base font-semibold tracking-widest uppercase mb-12">
          <span className="hover:text-blue-400 transition-colors">Learn</span>
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-500/60" />
          <span className="hover:text-indigo-400 transition-colors">Build</span>
          <span className="w-1.5 h-1.5 rounded-full bg-purple-500/60" />
          <span className="hover:text-purple-400 transition-colors">Grow</span>
        </div>

        {/* 4. One Main Button: Start Your Journey → */}
        <div className="relative group">
          {/* Subtle Ambient Glow behind Button */}
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-2xl blur-lg opacity-60 group-hover:opacity-100 group-hover:blur-xl transition-all duration-300 -z-10" />
          
          <button
            onClick={() => setShowWelcomeModal(true)}
            className="relative px-8 sm:px-10 py-4 sm:py-5 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-bold text-base sm:text-lg shadow-2xl flex items-center justify-center gap-3 group/btn hover:scale-[1.03] active:scale-[0.98] transition-all duration-200 cursor-pointer border border-white/20"
          >
            <span>Start Your Journey</span>
            <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1.5 transition-transform duration-200" />
          </button>
        </div>

        {/* Subtle Minimal Trust Pill */}
        <div className="mt-14 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/40 border border-white/[0.06] text-xs text-slate-400 backdrop-blur-sm">
          <Compass className="w-4 h-4 text-indigo-400" />
          <span>Crafting clear engineering paths for future software developers</span>
        </div>

      </div>

      {/* Motivating Modal for "Start Your Journey" */}
      {showWelcomeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg bg-slate-900 border border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl text-left overflow-hidden">
            
            {/* Top Gradient Highlight */}
            <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500" />

            {/* Close Button */}
            <button
              onClick={() => setShowWelcomeModal(false)}
              className="absolute top-5 right-5 p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-12 h-12 rounded-2xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400 mb-5">
              <Compass className="w-6 h-6" />
            </div>

            <h3 className="text-2xl font-bold text-white mb-2">
              Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">TECHPATH WAY</span>
            </h3>

            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              You are taking the first step towards building a successful career in technology. We are currently in <strong>Stage 1 (Starting Page)</strong>.
            </p>

            <div className="space-y-3 mb-6 p-4 rounded-2xl bg-slate-950/60 border border-white/5">
              <div className="text-xs font-bold uppercase tracking-wider text-indigo-300">
                Coming In Next Stages:
              </div>
              <div className="flex items-start gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Year-by-Year B.Tech Roadmaps:</strong> Step-by-step curriculum from 1st year foundation to 4th year placement.</span>
              </div>
              <div className="flex items-start gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Practical Coding & AI Skills:</strong> Essential projects, DSA tracks, and modern developer tools.</span>
              </div>
              <div className="flex items-start gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Placement Preparation:</strong> Resumes, internships, and interview guides.</span>
              </div>
            </div>

            <button
              onClick={() => setShowWelcomeModal(false)}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold text-sm hover:opacity-95 transition-opacity cursor-pointer shadow-lg shadow-indigo-600/20"
            >
              Continue Exploring
            </button>

          </div>
        </div>
      )}

    </section>
  );
}
