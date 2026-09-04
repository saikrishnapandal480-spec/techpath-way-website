import React, { useState } from 'react';
import { Play, Eye, Heart, MessageCircle, Sparkles, Filter, ExternalLink } from 'lucide-react';
import { InstagramIcon } from './Icons';
import { REELS_CONTENT, INSTAGRAM_URL, INSTAGRAM_HANDLE } from '../data/mockData';

export default function ContentSection({ onSelectReel }) {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Roadmaps', 'Coding Skills', 'AI Tools', 'Career Tips'];

  const filteredReels = activeCategory === 'All' 
    ? REELS_CONTENT 
    : REELS_CONTENT.filter(r => r.category === activeCategory);

  return (
    <section id="resources" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full ig-gradient text-white text-xs font-semibold shadow-md shadow-pink-500/20 mb-4">
            <InstagramIcon className="w-3.5 h-3.5" />
            <span>Latest Instagram Content & Reels</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Bite-Sized Tech Wisdom for <span className="tech-gradient-text">Engineers</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            High-value 60-second breakdowns, roadmap cheat sheets, and practical career hacks straight from our Instagram channel.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg shadow-violet-600/30'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white border border-white/10 hover:border-white/20'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* 6 Reels Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredReels.map((reel) => (
            <div
              key={reel.id}
              className="group rounded-2xl glass-card overflow-hidden border border-white/10 hover:border-violet-500/40 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between shadow-xl"
            >
              {/* Thumbnail Container (Reel Aesthetic) */}
              <div 
                className="relative h-56 bg-slate-950 overflow-hidden cursor-pointer"
                onClick={() => onSelectReel(reel)}
              >
                {/* Background Gradient Artwork */}
                <div className={`absolute inset-0 bg-gradient-to-br ${reel.gradient} opacity-80 group-hover:scale-105 transition-transform duration-500`} />
                <div className="absolute inset-0 bg-grid-pattern opacity-30" />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />

                {/* Top Badge Info */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
                  <span className="px-2.5 py-1 rounded-md text-[10px] font-bold tracking-wider uppercase bg-black/60 backdrop-blur-md text-white border border-white/15">
                    {reel.tag}
                  </span>
                  <div className="flex items-center gap-1 px-2 py-1 rounded-md bg-black/60 backdrop-blur-md text-white text-[10px] font-mono">
                    <InstagramIcon className="w-3 h-3 text-pink-400" />
                    <span>{INSTAGRAM_HANDLE}</span>
                  </div>
                </div>

                {/* Center Play Button & Title Overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center z-10">
                  <div className="w-13 h-13 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white shadow-2xl group-hover:scale-110 group-hover:bg-violet-600 transition-all duration-300 mb-3">
                    <Play className="w-6 h-6 fill-white ml-0.5" />
                  </div>
                  <span className="text-white font-extrabold text-sm sm:text-base drop-shadow-md line-clamp-2 px-2">
                    {reel.title}
                  </span>
                </div>

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between z-10 text-[11px] text-white/90 font-medium">
                  <span className="flex items-center gap-1 bg-black/50 backdrop-blur-md px-2 py-0.5 rounded">
                    <Eye className="w-3 h-3 text-cyan-300" /> {reel.views}
                  </span>
                  <span className="bg-black/50 backdrop-blur-md px-2 py-0.5 rounded font-mono text-[10px]">
                    {reel.duration}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 
                    onClick={() => onSelectReel(reel)}
                    className="text-base font-bold text-white mb-2 line-clamp-1 group-hover:text-violet-300 transition-colors cursor-pointer"
                  >
                    {reel.title}
                  </h3>
                  <p className="text-slate-300 text-xs leading-relaxed line-clamp-2 mb-4">
                    {reel.description}
                  </p>
                </div>

                {/* Bottom Stats & View Reel Button */}
                <div className="pt-3 border-t border-white/10 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 text-xs text-slate-400">
                    <span className="flex items-center gap-1 text-slate-300">
                      <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-400/20" /> {reel.likes}
                    </span>
                    <span className="flex items-center gap-1 text-slate-400 hidden sm:flex">
                      <MessageCircle className="w-3.5 h-3.5 text-slate-400" /> {reel.comments}
                    </span>
                  </div>

                  <button
                    onClick={() => onSelectReel(reel)}
                    className="px-3.5 py-1.5 rounded-lg bg-violet-600/20 hover:bg-violet-600 text-violet-300 hover:text-white text-xs font-semibold border border-violet-500/30 transition-all flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>View Reel</span>
                    <Play className="w-3 h-3 fill-current" />
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Footer Instagram Prompt */}
        <div className="mt-14 text-center">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass-card hover:border-pink-500/50 text-sm font-semibold text-slate-200 hover:text-white transition-all group"
          >
            <InstagramIcon className="w-4 h-4 text-pink-400 group-hover:scale-110 transition-transform" />
            <span>Follow <strong className="text-white">{INSTAGRAM_HANDLE}</strong> for daily reels & stories</span>
            <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
          </a>
        </div>

      </div>
    </section>
  );
}
