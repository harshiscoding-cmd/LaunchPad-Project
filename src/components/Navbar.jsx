import React, { useState } from 'react';
import { Rocket, ShieldCheck, Terminal, Menu, X, ChevronRight, Activity } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/[0.07] bg-[#070A11]/80 backdrop-blur-xl transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Brand */}
          <div className="flex items-center gap-3">
            <a href="#" className="flex items-center gap-3 group">
              <div className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-tr from-brand-primary to-brand-secondary p-[1px] shadow-lg shadow-brand-primary/20 group-hover:shadow-brand-primary/40 transition-all duration-300">
                <div className="w-full h-full bg-[#0D1322] rounded-[11px] flex items-center justify-center">
                  <Rocket className="w-5 h-5 text-brand-secondary group-hover:rotate-12 transition-transform duration-300" />
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="text-xl font-bold tracking-tight text-white font-headline">
                    Launch<span className="bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">Pad</span>
                  </span>
                  <span className="text-[10px] font-mono font-semibold px-1.5 py-0.5 rounded bg-brand-primary/10 text-brand-primary border border-brand-primary/20">
                    v2.4
                  </span>
                </div>
                <span className="text-[11px] text-slate-400 font-mono tracking-wide -mt-0.5">Cloud Velocity Platform</span>
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#architecture" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
              Architecture
            </a>
            <a href="#telemetry" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
              Live Telemetry
            </a>
            <a href="#features" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
              Capabilities
            </a>
            <a href="#pricing" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
              Pricing
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="text-sm font-medium text-slate-400 hover:text-white transition-colors flex items-center gap-1.5">
              <span>Docs</span>
              <span className="text-[10px] bg-white/5 border border-white/10 px-1 py-0.5 rounded font-mono">⌘K</span>
            </a>
          </nav>

          {/* Right Action Area */}
          <div className="hidden lg:flex items-center gap-5">
            {/* Status Pill */}
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-400">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>All Systems 99.99%</span>
            </div>

            {/* Quick Terminal Trigger */}
            <a
              href="#deploy-terminal"
              className="text-slate-300 hover:text-white text-xs font-mono flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 transition-all"
            >
              <Terminal className="w-3.5 h-3.5 text-brand-secondary" />
              <span>CLI</span>
            </a>

            {/* CTA Button */}
            <a
              href="#deploy-terminal"
              className="relative inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-medium text-sm text-white bg-gradient-to-r from-brand-primary to-brand-primary-hover shadow-lg shadow-brand-primary/25 hover:shadow-brand-primary/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 border border-white/10"
            >
              <span>Launch Now</span>
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-white/5 text-slate-300 hover:text-white border border-white/10"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-white/10 bg-[#0D1322]/95 backdrop-blur-2xl px-6 py-6 space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-white/5">
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>99.99% Uptime</span>
            </div>
            <span className="text-xs text-slate-500 font-mono">Region: US-EAST</span>
          </div>

          <div className="flex flex-col gap-3 font-medium">
            <a 
              href="#architecture" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-slate-200 hover:bg-white/5"
            >
              Architecture Flow
            </a>
            <a 
              href="#telemetry" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-slate-200 hover:bg-white/5"
            >
              Real-time Telemetry
            </a>
            <a 
              href="#features" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-slate-200 hover:bg-white/5"
            >
              Capabilities & Edge
            </a>
            <a 
              href="#pricing" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-slate-200 hover:bg-white/5"
            >
              Pricing & Plans
            </a>
          </div>

          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            <a
              href="#deploy-terminal"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 rounded-xl font-medium text-sm text-center text-white bg-gradient-to-r from-brand-primary to-brand-primary-hover shadow-lg shadow-brand-primary/20"
            >
              Launch Project
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
