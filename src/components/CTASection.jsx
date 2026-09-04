import React from 'react';
import { Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { InstagramIcon } from './Icons';
import { INSTAGRAM_URL, INSTAGRAM_HANDLE } from '../data/mockData';

export default function CTASection() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Dynamic Background Gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] glow-orb-rose blur-3xl pointer-events-none -z-10 opacity-70" />
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] glow-orb-purple blur-3xl pointer-events-none -z-10 opacity-60" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="relative rounded-3xl p-8 sm:p-12 md:p-16 glass-card border border-white/20 shadow-2xl overflow-hidden text-center">
          
          {/* Subtle Instagram Gradient Border Glow */}
          <div className="absolute inset-x-0 top-0 h-1.5 ig-gradient" />

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-300 text-xs font-bold uppercase tracking-wider mb-6">
            <Sparkles className="w-3.5 h-3.5 text-pink-400" />
            <span>Join 50,000+ Aspiring Engineers</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight max-w-3xl mx-auto leading-tight mb-6">
            Don’t Just Complete Your B.Tech. <br className="hidden sm:inline" />
            <span className="ig-gradient-text">Build Your Tech Career.</span>
          </h2>

          {/* Subtext */}
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed mb-10">
            Follow <strong className="text-white font-semibold">TECHPATH WAY</strong> for practical roadmaps, skills, AI, projects and career guidance.
          </p>

          {/* Primary CTA Button */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group w-full sm:w-auto px-8 py-4 rounded-2xl ig-gradient text-white font-bold text-base shadow-2xl shadow-pink-500/30 hover:shadow-pink-500/50 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-3"
            >
              <InstagramIcon className="w-5 h-5 text-white" />
              <span>Follow TECHPATH WAY on Instagram</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* 4 Community Highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-white/10 text-left">
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <div className="text-xs text-slate-300 leading-tight">
                <strong className="text-white block font-medium">Daily 60s Reels</strong>
                Zero-fluff insights
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <div className="text-xs text-slate-300 leading-tight">
                <strong className="text-white block font-medium">Verified Roadmaps</strong>
                From Day 1 to Placements
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <div className="text-xs text-slate-300 leading-tight">
                <strong className="text-white block font-medium">Emerging AI Tools</strong>
                Stay ahead of the curve
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <div className="text-xs text-slate-300 leading-tight">
                <strong className="text-white block font-medium">Internship Guidance</strong>
                Resume & GitHub hacks
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
