import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, Calendar, BookOpen, Sparkles, Terminal, Award, ArrowRight } from 'lucide-react';
import { InstagramIcon } from './Icons';
import { ROADMAP_YEARS, INSTAGRAM_URL } from '../data/mockData';

export default function RoadmapModal({ isOpen, onClose, initialYear }) {
  const [selectedYearIndex, setSelectedYearIndex] = useState(0);

  useEffect(() => {
    if (initialYear) {
      const idx = ROADMAP_YEARS.findIndex(r => r.year === initialYear.year);
      if (idx !== -1) setSelectedYearIndex(idx);
    }
  }, [initialYear]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const currentYear = ROADMAP_YEARS[selectedYearIndex];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-4xl bg-slate-900 border border-white/15 rounded-3xl shadow-2xl overflow-hidden z-10 my-auto flex flex-col max-h-[90vh]">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/10 bg-slate-950/80">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-violet-600/20 border border-violet-500/30 flex items-center justify-center text-violet-400">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-bold text-white">Full B.Tech 4-Year Roadmap</h3>
                <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-violet-500/20 text-violet-300 border border-violet-500/30">
                  Interactive Guide
                </span>
              </div>
              <p className="text-xs text-slate-400">By TECHPATH WAY • Year-by-Year Action Plan</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Year Tabs */}
        <div className="flex border-b border-white/10 bg-slate-950/40 px-6 overflow-x-auto">
          {ROADMAP_YEARS.map((y, idx) => (
            <button
              key={y.year}
              onClick={() => setSelectedYearIndex(idx)}
              className={`py-3.5 px-4 text-xs font-bold whitespace-nowrap transition-all border-b-2 cursor-pointer ${
                selectedYearIndex === idx
                  ? 'border-violet-500 text-violet-400 bg-violet-500/5'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              <span>{y.year}</span>
              <span className="ml-2 opacity-70 font-normal">({y.stage})</span>
            </button>
          ))}
        </div>

        {/* Modal Content Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          
          {/* Header Card for Selected Year */}
          <div className="p-5 rounded-2xl bg-gradient-to-r from-violet-900/20 via-slate-800/40 to-slate-900/40 border border-white/10">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
              <span className="text-xl font-extrabold text-white">
                {currentYear.year} — {currentYear.stage}
              </span>
              <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${currentYear.badgeColor}`}>
                {currentYear.summary}
              </span>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              {currentYear.description}
            </p>
          </div>

          {/* Semester Breakdown */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
              <Terminal className="w-4 h-4 text-cyan-400" />
              <span>Semester-by-Semester Milestones</span>
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {currentYear.quarterBreakdown.map((item, qIdx) => (
                <div key={qIdx} className="p-4 rounded-xl bg-slate-950/60 border border-white/10 flex flex-col justify-between">
                  <div className="inline-block self-start px-2 py-0.5 rounded text-[11px] font-bold text-violet-300 bg-violet-500/20 border border-violet-500/30 mb-2">
                    {item.sem}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                    {item.focus}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Key Competencies Checklist */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Core Deliverables for {currentYear.year}</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {currentYear.keySkills.map((skill, sIdx) => (
                <div key={sIdx} className="p-3 rounded-lg bg-slate-950/40 border border-white/5 flex items-center gap-2.5 text-xs text-slate-200">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Pro Tip Box */}
          <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-start gap-3">
            <Sparkles className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <strong className="text-amber-300 text-xs font-bold block mb-1">TECHPATH WAY Mentor Advice:</strong>
              <p className="text-xs text-slate-300 leading-relaxed">
                {currentYear.proTip}
              </p>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-white/10 bg-slate-950/80 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs text-slate-400">
            Need daily guidance? Follow <strong>@techpathway</strong> on Instagram.
          </span>
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-4 py-2 rounded-xl ig-gradient text-white text-xs font-semibold flex items-center justify-center gap-2 shadow-md shadow-pink-500/20 hover:scale-[1.02] transition-transform"
            >
              <InstagramIcon className="w-4 h-4" />
              <span>Follow on Instagram</span>
            </a>
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-slate-200 text-xs font-semibold transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
