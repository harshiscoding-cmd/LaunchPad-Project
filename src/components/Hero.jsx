import React, { useState } from 'react';
import { Terminal, Copy, Check, Sparkles, ArrowRight, ShieldCheck, Cpu, Zap, Globe2 } from 'lucide-react';

export default function Hero() {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState('cli');

  const commands = {
    cli: 'npx launchpad deploy --prod --region=global',
    docker: 'launchpad build -t app:latest --push --canary=10%',
    git: 'git push origin main # triggers auto-pipeline',
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(commands[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative pt-12 pb-24 overflow-hidden radial-cosmic-bg">
      {/* Background Mesh Grid */}
      <div className="absolute inset-0 mesh-grid opacity-60 pointer-events-none"></div>

      {/* Decorative Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-brand-primary/15 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute top-1/3 left-1/4 w-[350px] h-[250px] bg-brand-secondary/15 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Announcement Pill */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-surface-1 border border-brand-primary/30 shadow-lg shadow-brand-primary/10 hover:border-brand-primary/60 transition-all cursor-pointer group">
            <span className="flex h-2 w-2 rounded-full bg-brand-secondary animate-pulse"></span>
            <span className="text-xs font-medium text-slate-300">
              <strong className="text-white">LaunchPad Engine 2.4</strong> now live with automated micro-edge routing
            </span>
            <ArrowRight className="w-3.5 h-3.5 text-brand-secondary group-hover:translate-x-1 transition-transform" />
          </div>
        </div>

        {/* Main Header Text */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.08] font-headline">
            Instant Deployments.{' '}
            <span className="bg-gradient-to-r from-brand-primary via-indigo-300 to-brand-secondary bg-clip-text text-transparent">
              Infinite Velocity.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
            The next-generation cloud runtime for high-growth engineering teams. Push code, synthesize container meshes in milliseconds, and serve globally with zero cold starts.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href="#deploy-terminal"
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-semibold text-base text-white bg-gradient-to-r from-brand-primary via-indigo-600 to-brand-primary-hover shadow-xl shadow-brand-primary/30 hover:shadow-brand-primary/50 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 border border-white/10 flex items-center justify-center gap-2.5 group"
            >
              <span>Deploy First Cluster Free</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#telemetry"
              className="w-full sm:w-auto px-7 py-4 rounded-xl font-semibold text-base text-slate-200 bg-surface-1/90 hover:bg-surface-2 border border-white/10 hover:border-white/20 transition-all flex items-center justify-center gap-2.5 shadow-md"
            >
              <Zap className="w-4 h-4 text-brand-secondary" />
              <span>Explore Live Telemetry</span>
            </a>
          </div>
        </div>

        {/* Interactive CLI Console Showcase */}
        <div id="deploy-terminal" className="mt-16 max-w-3xl mx-auto">
          <div className="relative rounded-2xl bg-[#0D1322]/90 border border-white/10 shadow-2xl shadow-black/80 backdrop-blur-xl overflow-hidden group">
            
            {/* Top Bar with window controls */}
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/[0.08] bg-[#0A0E1A]/80">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#EF4444]/80"></span>
                <span className="w-3 h-3 rounded-full bg-[#F59E0B]/80"></span>
                <span className="w-3 h-3 rounded-full bg-[#10B981]/80"></span>
                <span className="ml-3 text-xs font-mono text-slate-400">launchpad-console — bash</span>
              </div>

              {/* Tabs */}
              <div className="flex items-center bg-black/40 rounded-lg p-0.5 border border-white/5 text-[11px] font-mono">
                <button
                  onClick={() => setActiveTab('cli')}
                  className={`px-3 py-1 rounded-md transition-all ${
                    activeTab === 'cli' ? 'bg-brand-primary text-white font-medium' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  CLI
                </button>
                <button
                  onClick={() => setActiveTab('docker')}
                  className={`px-3 py-1 rounded-md transition-all ${
                    activeTab === 'docker' ? 'bg-brand-primary text-white font-medium' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Docker
                </button>
                <button
                  onClick={() => setActiveTab('git')}
                  className={`px-3 py-1 rounded-md transition-all ${
                    activeTab === 'git' ? 'bg-brand-primary text-white font-medium' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Git Sync
                </button>
              </div>
            </div>

            {/* Terminal Body */}
            <div className="p-6 font-mono text-xs sm:text-sm space-y-3.5 text-slate-300">
              
              {/* Active command line with copy button */}
              <div className="flex items-center justify-between bg-black/50 border border-white/10 rounded-xl px-4 py-3">
                <div className="flex items-center gap-2.5 overflow-x-auto text-white">
                  <span className="text-brand-secondary font-bold">$</span>
                  <span className="text-slate-100">{commands[activeTab]}</span>
                </div>
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-slate-300 hover:text-white transition-all shrink-0 ml-3"
                  title="Copy command"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-400" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Simulated Output Streams */}
              <div className="space-y-1.5 pt-2 text-slate-400">
                <div className="flex items-center gap-2 text-slate-300">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span>Detected framework: <strong className="text-white">React 19 + Vite (ESM)</strong></span>
                  <span className="text-slate-500 text-xs ml-auto font-mono">120ms</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span>Synthesized dist artifacts & micro-containers</span>
                  <span className="text-slate-500 text-xs ml-auto font-mono">240ms</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <span className="text-brand-secondary font-bold">⚡</span>
                  <span>Propagated to <strong className="text-brand-secondary">320 Edge PoPs</strong> worldwide</span>
                  <span className="text-slate-500 text-xs ml-auto font-mono">85ms</span>
                </div>
                <div className="flex items-center gap-2 text-emerald-400 font-medium pt-2 border-t border-white/5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                  <span>Deploy live at: </span>
                  <a href="#" className="underline text-brand-secondary hover:text-cyan-300 transition-colors">
                    https://launchpad.mesh/cluster-8875
                  </a>
                </div>
              </div>
            </div>

            {/* Bottom Glow accent */}
            <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-brand-primary to-transparent opacity-80"></div>
          </div>
        </div>

        {/* Global Performance Metrics Bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          
          <div className="p-5 rounded-2xl bg-surface-1/70 border border-white/[0.08] backdrop-blur-md flex flex-col items-center justify-center text-center hover:border-brand-primary/40 transition-colors">
            <span className="text-2xl sm:text-3xl font-bold text-white font-headline tracking-tight">14ms</span>
            <span className="text-xs text-slate-400 mt-1 flex items-center gap-1">
              <Globe2 className="w-3.5 h-3.5 text-brand-secondary" />
              Global Edge Latency
            </span>
          </div>

          <div className="p-5 rounded-2xl bg-surface-1/70 border border-white/[0.08] backdrop-blur-md flex flex-col items-center justify-center text-center hover:border-brand-primary/40 transition-colors">
            <span className="text-2xl sm:text-3xl font-bold text-emerald-400 font-headline tracking-tight">99.999%</span>
            <span className="text-xs text-slate-400 mt-1 flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              Guaranteed SLA
            </span>
          </div>

          <div className="p-5 rounded-2xl bg-surface-1/70 border border-white/[0.08] backdrop-blur-md flex flex-col items-center justify-center text-center hover:border-brand-primary/40 transition-colors">
            <span className="text-2xl sm:text-3xl font-bold text-white font-headline tracking-tight">0.00s</span>
            <span className="text-xs text-slate-400 mt-1 flex items-center gap-1">
              <Zap className="w-3.5 h-3.5 text-brand-primary" />
              Zero Cold Starts
            </span>
          </div>

          <div className="p-5 rounded-2xl bg-surface-1/70 border border-white/[0.08] backdrop-blur-md flex flex-col items-center justify-center text-center hover:border-brand-primary/40 transition-colors">
            <span className="text-2xl sm:text-3xl font-bold text-white font-headline tracking-tight">12M+</span>
            <span className="text-xs text-slate-400 mt-1 flex items-center gap-1">
              <Cpu className="w-3.5 h-3.5 text-cyan-400" />
              Monthly Deploys
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
