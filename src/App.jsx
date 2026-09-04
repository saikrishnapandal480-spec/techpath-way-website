import React, { useState } from 'react';
import Navbar from './components/Navbar';
import MainScreen from './components/MainScreen';
import { Compass } from 'lucide-react';

export default function App() {
  const [toastMessage, setToastMessage] = useState(null);

  const handleNavClick = (item) => {
    if (item.label !== 'Home') {
      setToastMessage(`${item.label} section will be available in future stages.`);
      setTimeout(() => setToastMessage(null), 3500);
    }
  };

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 flex flex-col selection:bg-indigo-600 selection:text-white relative overflow-hidden font-sans">
      
      {/* Top Navbar */}
      <Navbar onNavClick={handleNavClick} />

      {/* Stage 1 Main Starting Screen */}
      <main className="flex-1 flex flex-col justify-center">
        <MainScreen />
      </main>

      {/* Stage 1 Minimal Footer */}
      <footer className="py-6 border-t border-white/[0.06] text-center text-xs text-slate-400">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <Compass className="w-3.5 h-3.5 text-indigo-400" />
            <span className="font-semibold text-slate-400">TECHPATH WAY</span>
            <span className="text-slate-400">•</span>
            <span>Stage 1 Starting Page</span>
          </div>
          <div className="text-slate-400 text-[11px]">
            Designed for B.Tech & Engineering Students
          </div>
        </div>
      </footer>

      {/* Minimal Toast Notification for Navigation Placeholders */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 px-4 py-3 rounded-xl bg-slate-900/95 border border-indigo-500/40 text-slate-200 text-xs font-medium shadow-2xl backdrop-blur-md flex items-center gap-2 animate-in fade-in slide-in-from-bottom-2 duration-200">
          <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
          <span>{toastMessage}</span>
        </div>
      )}

    </div>
  );
}
