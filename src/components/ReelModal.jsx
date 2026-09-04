import React, { useState, useEffect } from 'react';
import { X, Play, Pause, Heart, MessageCircle, Share2, Bookmark, CheckCircle, Volume2, VolumeX, Sparkles } from 'lucide-react';
import { InstagramIcon } from './Icons';
import { INSTAGRAM_URL, INSTAGRAM_HANDLE } from '../data/mockData';

export default function ReelModal({ reel, isOpen, onClose }) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

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

  if (!isOpen || !reel) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/85 backdrop-blur-lg transition-opacity"
        onClick={onClose}
      />

      {/* Reel Card Container */}
      <div className="relative w-full max-w-2xl bg-slate-900 border border-white/15 rounded-3xl shadow-2xl overflow-hidden z-10 my-auto flex flex-col md:flex-row max-h-[92vh]">
        
        {/* Left: Reel Video Player Mockup */}
        <div className={`relative w-full md:w-5/12 bg-gradient-to-br ${reel.gradient} flex flex-col justify-between p-5 min-h-[360px] md:min-h-[480px] overflow-hidden`}>
          {/* Subtle Grid overlay */}
          <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
          
          {/* Top Bar inside Reel */}
          <div className="relative z-10 flex items-center justify-between">
            <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10 text-white text-xs">
              <InstagramIcon className="w-3.5 h-3.5 text-pink-400" />
              <span className="font-semibold">{INSTAGRAM_HANDLE}</span>
            </div>
            <button 
              onClick={() => setIsMuted(!isMuted)}
              className="p-1.5 rounded-full bg-black/50 backdrop-blur-md text-white/80 hover:text-white cursor-pointer"
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </button>
          </div>

          {/* Center Play/Pause Graphic */}
          <div className="relative z-10 flex flex-col items-center justify-center my-auto">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white shadow-2xl hover:scale-110 transition-all cursor-pointer group"
            >
              {isPlaying ? (
                <Pause className="w-7 h-7 fill-white" />
              ) : (
                <Play className="w-7 h-7 fill-white ml-1" />
              )}
            </button>
            <span className="text-[11px] text-white/90 font-mono mt-3 px-2 py-0.5 rounded bg-black/40 backdrop-blur-md">
              {isPlaying ? '● Playing Preview' : 'Paused'}
            </span>
          </div>

          {/* Bottom Information Inside Player */}
          <div className="relative z-10">
            <div className="text-white font-bold text-sm drop-shadow mb-1 line-clamp-2">
              {reel.title}
            </div>
            {/* Progress Bar */}
            <div className="w-full bg-white/20 h-1 rounded-full overflow-hidden mt-3">
              <div className={`h-full bg-white rounded-full ${isPlaying ? 'w-3/4 animate-pulse' : 'w-1/2'}`} />
            </div>
          </div>
        </div>

        {/* Right: Reel Insights, Takeaways, & Actions */}
        <div className="w-full md:w-7/12 flex flex-col justify-between p-6 bg-slate-900 overflow-y-auto">
          
          <div>
            {/* Header / Close */}
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-violet-500/20 text-violet-300 border border-violet-500/30">
                  {reel.tag}
                </span>
                <span className="text-xs text-slate-400">{reel.date}</span>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Title & Description */}
            <h3 className="text-lg font-bold text-white mb-2 leading-tight">
              {reel.title}
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed mb-5">
              {reel.description}
            </p>

            {/* Key Takeaways Section */}
            <div className="rounded-xl p-4 bg-slate-950/70 border border-white/10 mb-5">
              <h4 className="text-[11px] font-bold uppercase tracking-wider text-violet-300 mb-2.5 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Key Insights From This Reel</span>
              </h4>
              <ul className="space-y-2">
                {reel.takeaways.map((takeaway, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{takeaway}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Simulated Reel Interactions */}
            <div className="flex items-center justify-between py-3 px-4 rounded-xl bg-slate-950/40 border border-white/5 mb-4">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setIsLiked(!isLiked)}
                  className="flex items-center gap-1.5 text-xs text-slate-300 hover:text-rose-400 transition-colors cursor-pointer"
                >
                  <Heart className={`w-4 h-4 ${isLiked ? 'text-rose-500 fill-rose-500' : 'text-slate-400'}`} />
                  <span>{isLiked ? '14.3K' : reel.likes}</span>
                </button>

                <div className="flex items-center gap-1.5 text-xs text-slate-300">
                  <MessageCircle className="w-4 h-4 text-slate-400" />
                  <span>{reel.comments}</span>
                </div>
              </div>

              <button
                onClick={() => setIsBookmarked(!isBookmarked)}
                className="text-slate-400 hover:text-yellow-400 transition-colors cursor-pointer"
                title="Save Reel"
              >
                <Bookmark className={`w-4 h-4 ${isBookmarked ? 'text-yellow-400 fill-yellow-400' : ''}`} />
              </button>
            </div>
          </div>

          {/* Bottom Call-To-Action */}
          <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row gap-2.5">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-3 px-4 rounded-xl ig-gradient text-white text-xs font-bold flex items-center justify-center gap-2 shadow-lg shadow-pink-500/20 hover:scale-[1.02] transition-transform"
            >
              <InstagramIcon className="w-4 h-4" />
              <span>Watch on Instagram</span>
            </a>
            <button
              onClick={onClose}
              className="py-3 px-4 rounded-xl bg-white/10 hover:bg-white/15 text-slate-200 text-xs font-semibold transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
