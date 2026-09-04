import React from 'react';
import { Compass, Heart, ArrowUp } from 'lucide-react';
import { InstagramIcon, YouTubeIcon, LinkedInIcon, GitHubIcon } from './Icons';
import { NAV_LINKS, INSTAGRAM_URL } from '../data/mockData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="about" className="bg-[#05070b] border-t border-white/10 pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info (Col 1-5) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-violet-600 via-indigo-600 to-cyan-400 p-[1.5px]">
                <div className="w-full h-full bg-[#090d16] rounded-[10px] flex items-center justify-center">
                  <Compass className="w-4 h-4 text-violet-400" />
                </div>
              </div>
              <span className="font-extrabold text-xl tracking-tight text-white font-sans">
                TECHPATH <span className="tech-gradient-text">WAY</span>
              </span>
            </div>

            <p className="text-slate-300 text-sm max-w-sm leading-relaxed">
              Helping B.Tech students find their path in tech.
            </p>

            <p className="text-slate-400 text-xs leading-relaxed">
              From 1st year foundation to final year placement drives. Follow us on Instagram for daily actionable engineering insights.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:border-pink-500/50 hover:bg-pink-500/10 transition-all duration-200"
              >
                <InstagramIcon className="w-4 h-4 text-pink-400" />
              </a>

              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:border-rose-500/50 hover:bg-rose-500/10 transition-all duration-200"
              >
                <YouTubeIcon className="w-4 h-4 text-rose-400" />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-200"
              >
                <LinkedInIcon className="w-4 h-4 text-blue-400" />
              </a>

              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:border-violet-500/50 hover:bg-violet-500/10 transition-all duration-200"
              >
                <GitHubIcon className="w-4 h-4 text-violet-400" />
              </a>
            </div>
          </div>

          {/* Quick Links (Col 6-8) */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Quick Navigation</h4>
            <ul className="space-y-2.5 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Community & Instagram Box (Col 9-12) */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Follow On Social</h4>
            <p className="text-slate-400 text-xs leading-relaxed">
              Never miss a career roadmap breakdown, tech resume tip, or emerging AI tool for your B.Tech journey.
            </p>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl ig-gradient text-white text-xs font-semibold shadow-md shadow-pink-500/20 hover:scale-[1.02] transition-transform"
            >
              <InstagramIcon className="w-4 h-4" />
              <span>Join @techpathway on Instagram</span>
            </a>
          </div>

        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} <strong className="text-white font-medium">TECHPATH WAY</strong>. All rights reserved. Built for B.Tech & Engineering Students.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors cursor-pointer group"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
}
