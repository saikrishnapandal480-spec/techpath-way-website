import React from 'react';
import { ArrowRight, CheckCircle2, Calendar, Sparkles, BookOpen, Layers, Award } from 'lucide-react';
import { ROADMAP_YEARS } from '../data/mockData';

export default function RoadmapSection({ onOpenFullRoadmap, onSelectYear }) {
  return (
    <section id="roadmaps" className="py-20 md:py-28 relative bg-[#090d16]/70 border-y border-white/5">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] glow-orb-purple blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-4">
              <Calendar className="w-3.5 h-3.5 text-cyan-400" />
              4-Year Master Path
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
              What Should You Learn in <span className="tech-gradient-text">B.Tech?</span>
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Don't wait until 4th year to start preparing. Here is your structured, year-by-year roadmap to go from complete beginner to placement ready.
            </p>
          </div>

          <div>
            <button
              onClick={() => onOpenFullRoadmap()}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-white/10 hover:border-violet-500/50 text-white font-semibold text-sm shadow-xl transition-all duration-200 group cursor-pointer"
            >
              <span>View Full Roadmap</span>
              <ArrowRight className="w-4 h-4 text-violet-400 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* 4 Roadmap Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ROADMAP_YEARS.map((roadmap, index) => (
            <div
              key={roadmap.year}
              className="relative rounded-2xl glass-card p-6 flex flex-col justify-between group hover:border-violet-500/40 transition-all duration-300 hover:-translate-y-1.5"
            >
              {/* Year Timeline Step Indicator */}
              <div className="absolute -top-3 left-6 px-3 py-0.5 rounded-full text-xs font-bold bg-slate-900 border border-white/20 text-slate-200 shadow-md">
                Phase 0{index + 1}
              </div>

              <div>
                {/* Year Header */}
                <div className="mt-2 mb-4">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-extrabold text-white">
                      {roadmap.year}
                    </span>
                    <span className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-md border ${roadmap.badgeColor}`}>
                      {roadmap.stage}
                    </span>
                  </div>
                  <h4 className="text-xs font-medium text-slate-400 mt-1 uppercase tracking-wide">
                    {roadmap.summary}
                  </h4>
                </div>

                {/* Description */}
                <p className="text-slate-300 text-sm leading-relaxed mb-5">
                  {roadmap.description}
                </p>

                {/* Key Skills Checklist */}
                <div className="space-y-2 mb-6 pt-4 border-t border-white/10">
                  <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-2">
                    Key Milestones:
                  </span>
                  {roadmap.keySkills.map((skill, sIdx) => (
                    <div key={sIdx} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="leading-tight">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Card Action */}
              <div className="pt-4 border-t border-white/10">
                <button
                  onClick={() => onSelectYear(roadmap)}
                  className="w-full py-2.5 px-3 rounded-xl bg-white/5 hover:bg-violet-600/20 text-xs font-semibold text-slate-300 hover:text-white border border-white/10 hover:border-violet-500/30 transition-all flex items-center justify-center gap-1.5 group/btn cursor-pointer"
                >
                  <span>Explore {roadmap.year} Breakdown</span>
                  <ArrowRight className="w-3.5 h-3.5 text-violet-400 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Banner under cards */}
        <div className="mt-12 rounded-2xl p-6 sm:p-8 bg-gradient-to-r from-violet-950/40 via-slate-900/80 to-cyan-950/40 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-violet-600/20 border border-violet-500/30 flex items-center justify-center text-violet-400 shrink-0">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-white font-bold text-base sm:text-lg">Are you a 1st or 2nd year student?</h4>
              <p className="text-slate-400 text-xs sm:text-sm">You have an incredible head start. Check out our comprehensive semester checklist.</p>
            </div>
          </div>
          <button
            onClick={() => onOpenFullRoadmap()}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-semibold text-xs uppercase tracking-wider transition-all duration-200 shrink-0 shadow-lg shadow-violet-600/25 cursor-pointer"
          >
            Open Complete Roadmap Guide →
          </button>
        </div>

      </div>
    </section>
  );
}
