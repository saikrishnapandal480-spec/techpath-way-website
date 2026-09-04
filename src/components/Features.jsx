import React from 'react';
import { Rocket, Code2, Bot, Target, CheckCircle, ArrowRight } from 'lucide-react';
import { FEATURES_DATA } from '../data/mockData';

const iconMap = {
  Rocket: Rocket,
  Code2: Code2,
  Bot: Bot,
  Target: Target,
};

export default function Features({ onSelectFeature }) {
  return (
    <section id="skills" className="py-20 md:py-28 relative overflow-hidden">
      {/* Glow elements */}
      <div className="absolute top-1/2 left-0 w-96 h-96 glow-orb-purple blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-10 w-96 h-96 glow-orb-cyan blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-semibold uppercase tracking-wider mb-4">
            Core Pillars
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            What <span className="tech-gradient-text">TECHPATH WAY</span> Helps With
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Bridge the gap between college syllabus and high-paying tech careers. We break down the engineering journey into actionable, step-by-step systems.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES_DATA.map((feature, idx) => {
            const IconComponent = iconMap[feature.icon] || Rocket;
            return (
              <div
                key={feature.id}
                className="group relative rounded-2xl glass-card p-7 transition-all duration-300 hover:-translate-y-1.5 cursor-pointer flex flex-col justify-between"
                onClick={() => onSelectFeature && onSelectFeature(feature.id)}
              >
                {/* Card Background Gradient on Hover */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-b ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`} />

                <div>
                  {/* Top Bar: Icon + Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-13 h-13 rounded-xl ${feature.iconBg} border flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-semibold text-slate-400 group-hover:text-slate-200 uppercase tracking-wider bg-slate-800/80 px-2.5 py-1 rounded-full border border-white/5">
                      {feature.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3 tracking-tight group-hover:text-violet-300 transition-colors">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    {feature.description}
                  </p>
                </div>

                {/* Bottom Highlight */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400 group-hover:text-white transition-colors">
                  <span className="font-medium">{feature.metrics}</span>
                  <ArrowRight className="w-4 h-4 text-violet-400 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
