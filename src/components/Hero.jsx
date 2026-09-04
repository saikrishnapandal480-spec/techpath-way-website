import React from 'react';
import { Compass, ArrowRight, Sparkles, Terminal, Code2, CheckCircle2, TrendingUp, Cpu, Flame, Layers } from 'lucide-react';
import { InstagramIcon } from './Icons';
import { INSTAGRAM_URL } from '../data/mockData';

export default function Hero({ onExploreClick }) {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-grid-pattern">
      {/* Dynamic Background Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] glow-orb-purple rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 -left-32 w-[450px] h-[450px] glow-orb-cyan rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-0 w-[500px] h-[500px] glow-orb-rose rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Top Announcement Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-300 text-xs font-semibold mb-6 shadow-sm shadow-violet-500/10">
              <span className="flex h-2 w-2 rounded-full bg-violet-400 animate-pulse" />
              <Flame className="w-3.5 h-3.5 text-orange-400" />
              <span>Dedicated Guide for 1st Year & Engineering Students</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12] mb-6">
              Your Tech Journey <br className="hidden sm:inline" />
              <span className="tech-gradient-text">Starts Here.</span>
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-8">
              Learn the right skills. Follow the right roadmap. Build your future.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12">
              <button
                onClick={onExploreClick}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-semibold text-sm shadow-lg shadow-violet-600/30 hover:shadow-violet-600/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Explore Roadmaps</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl ig-gradient text-white font-semibold text-sm shadow-lg shadow-pink-500/25 hover:shadow-pink-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2.5"
              >
                <InstagramIcon className="w-4 h-4" />
                <span>Follow on Instagram</span>
              </a>
            </div>

            {/* Social Proof & Metrics Strip */}
            <div className="pt-8 border-t border-white/10 grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0 text-center lg:text-left">
              <div>
                <div className="text-xl sm:text-2xl font-bold text-white font-sans">4-Year</div>
                <div className="text-xs text-slate-400 font-medium">Clear Roadmaps</div>
              </div>
              <div className="border-x border-white/10 px-4">
                <div className="text-xl sm:text-2xl font-bold tech-gradient-text font-sans">100% Free</div>
                <div className="text-xs text-slate-400 font-medium">B.Tech Guidance</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold text-white font-sans">Placement</div>
                <div className="text-xs text-slate-400 font-medium">Ready Mindset</div>
              </div>
            </div>
          </div>

          {/* Right Column: Stylized Visual Technology / Career Roadmap */}
          <div className="lg:col-span-5 relative">
            {/* Stylized Glassmorphic Hub Card */}
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Decorative Gradient Background Frame */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-violet-600 via-pink-600 to-cyan-400 rounded-3xl blur-xl opacity-40 animate-pulse-glow" />

              {/* Main Card */}
              <div className="relative rounded-2xl glass-card p-6 border border-white/15 shadow-2xl backdrop-blur-2xl">
                
                {/* Header Bar */}
                <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                    <span className="ml-2 text-xs font-mono text-slate-400">techpath-navigator.sh</span>
                  </div>
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    Live Pathway
                  </span>
                </div>

                {/* Stylized Visual Roadmap Track */}
                <div className="space-y-3.5 mb-6">
                  
                  {/* Node 1 */}
                  <div className="flex items-center gap-3.5 p-3 rounded-xl bg-slate-900/70 border border-emerald-500/25 hover:border-emerald-500/40 transition-colors">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-bold text-xs shrink-0">
                      01
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-white truncate">1st Year: Foundations</span>
                        <span className="text-[10px] text-emerald-400 font-medium">Programming + Git</span>
                      </div>
                      <div className="w-full bg-slate-800 h-1.5 rounded-full mt-1.5 overflow-hidden">
                        <div className="bg-emerald-500 h-full rounded-full w-full" />
                      </div>
                    </div>
                  </div>

                  {/* Node 2 */}
                  <div className="flex items-center gap-3.5 p-3 rounded-xl bg-slate-900/70 border border-blue-500/25 hover:border-blue-500/40 transition-colors">
                    <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 font-bold text-xs shrink-0">
                      02
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-white truncate">2nd Year: Skill Building</span>
                        <span className="text-[10px] text-blue-400 font-medium">DSA + Web Dev</span>
                      </div>
                      <div className="w-full bg-slate-800 h-1.5 rounded-full mt-1.5 overflow-hidden">
                        <div className="bg-blue-500 h-full rounded-full w-4/5 animate-pulse" />
                      </div>
                    </div>
                  </div>

                  {/* Node 3 */}
                  <div className="flex items-center gap-3.5 p-3 rounded-xl bg-slate-900/70 border border-purple-500/25 hover:border-purple-500/40 transition-colors">
                    <div className="w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 font-bold text-xs shrink-0">
                      03
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-white truncate">3rd Year: Real World</span>
                        <span className="text-[10px] text-purple-400 font-medium">Projects & Internships</span>
                      </div>
                      <div className="w-full bg-slate-800 h-1.5 rounded-full mt-1.5 overflow-hidden">
                        <div className="bg-purple-500 h-full rounded-full w-3/5" />
                      </div>
                    </div>
                  </div>

                  {/* Node 4 */}
                  <div className="flex items-center gap-3.5 p-3 rounded-xl bg-slate-900/70 border border-rose-500/25 hover:border-rose-500/40 transition-colors">
                    <div className="w-8 h-8 rounded-lg bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-400 font-bold text-xs shrink-0">
                      04
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-white truncate">4th Year: Placement Ready</span>
                        <span className="text-[10px] text-rose-400 font-medium">Mock Interviews & Offers</span>
                      </div>
                      <div className="w-full bg-slate-800 h-1.5 rounded-full mt-1.5 overflow-hidden">
                        <div className="bg-rose-500 h-full rounded-full w-2/5" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Code Snippet Box */}
                <div className="rounded-xl bg-black/60 p-3.5 border border-white/10 font-mono text-[11px] leading-relaxed text-slate-300">
                  <div className="flex items-center justify-between text-slate-500 text-[10px] mb-1">
                    <span>// career-boost.config.ts</span>
                    <span className="text-cyan-400 font-sans font-medium">TECHPATH WAY</span>
                  </div>
                  <div>
                    <span className="text-purple-400">const</span> <span className="text-blue-300">student</span> = {'{'}
                  </div>
                  <div className="pl-3">
                    <span className="text-slate-400">mindset:</span> <span className="text-emerald-300">'Consistent'</span>,
                  </div>
                  <div className="pl-3">
                    <span className="text-slate-400">skills:</span> [<span className="text-amber-300">'DSA'</span>, <span className="text-amber-300">'FullStack'</span>, <span className="text-amber-300">'AI'</span>],
                  </div>
                  <div className="pl-3">
                    <span className="text-slate-400">targetOffer:</span> <span className="text-pink-400">'Product Company'</span>
                  </div>
                  <div>{'};'}</div>
                </div>

                {/* Floating Micro Badge 1 */}
                <div className="absolute -top-4 -right-4 bg-slate-900/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-violet-500/40 shadow-xl flex items-center gap-2 animate-float-slow">
                  <Sparkles className="w-3.5 h-3.5 text-yellow-400" />
                  <span className="text-xs font-bold text-white">Curated For 2025</span>
                </div>

                {/* Floating Micro Badge 2 */}
                <div className="absolute -bottom-4 -left-4 bg-slate-900/90 backdrop-blur-md px-3.5 py-2 rounded-xl border border-pink-500/40 shadow-xl flex items-center gap-2.5 animate-float-delay">
                  <div className="w-6 h-6 rounded-lg ig-gradient flex items-center justify-center text-white">
                    <InstagramIcon className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-white">@techpathway</div>
                    <div className="text-[9px] text-slate-400">Daily Reels & Guides</div>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
