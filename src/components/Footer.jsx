import React from 'react';
import { Rocket, X, Disc as Discord, Shield, Heart } from 'lucide-react';

// Inline GitHub icon (not available in lucide-react v1.x)
const GithubIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.026 2.747-1.026.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482C19.138 20.2 22 16.447 22 12.021 22 6.484 17.522 2 12 2z"/>
  </svg>
);

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.08] bg-[#070A11] pt-16 pb-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          
          {/* Brand info */}
          <div className="col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-brand-primary to-brand-secondary p-[1px]">
                <div className="w-full h-full bg-[#0D1322] rounded-[7px] flex items-center justify-center">
                  <Rocket className="w-4 h-4 text-brand-secondary" />
                </div>
              </div>
              <span className="text-lg font-bold text-white font-headline">
                Launch<span className="text-brand-primary">Pad</span>
              </span>
            </div>

            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              The high-velocity cloud runtime for instant container deployment, global Anycast mesh networking, and automated zero-downtime rollouts.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors" aria-label="GitHub">
                <GithubIcon className="w-4 h-4" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors" aria-label="Twitter">
                <X className="w-4 h-4" />
              </a>
              <a href="https://discord.com" target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors" aria-label="Discord">
                <Discord className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-semibold text-white uppercase tracking-wider">Product</h4>
            <ul className="space-y-2">
              <li><a href="#deploy-terminal" className="hover:text-white transition-colors">Instant Deploy</a></li>
              <li><a href="#telemetry" className="hover:text-white transition-colors">Global Edge Mesh</a></li>
              <li><a href="#architecture" className="hover:text-white transition-colors">Canary Engine</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Pricing & Plans</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Changelog</a></li>
            </ul>
          </div>

          {/* Developers Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-semibold text-white uppercase tracking-wider">Developers</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">CLI Reference</a></li>
              <li><a href="#" className="hover:text-white transition-colors">API Documentation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Vite & Next.js Guide</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Docker Builds</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Community Forum</a></li>
            </ul>
          </div>

          {/* Compliance & Legal */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-semibold text-white uppercase tracking-wider">Security</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">Trust Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">SOC2 Type II Report</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Security Bug Bounty</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-[11px] font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-slate-300">All Systems Operational</span>
            <span className="text-slate-600">•</span>
            <span>Uptime: 99.999%</span>
          </div>

          <div className="text-[11px] text-slate-500 font-mono">
            © 2026 LaunchPad Architecture Inc. All rights reserved.
          </div>
        </div>

      </div>
    </footer>
  );
}
