import React, { useState } from 'react';
import { GitBranch, Layers, Radio, CheckCircle2, ChevronRight, Server, ArrowUpRight, Cpu } from 'lucide-react';

export default function ArchitectureFlow() {
  const [activeStage, setActiveStage] = useState(2);

  const stages = [
    {
      id: 0,
      title: '1. Git Trigger',
      icon: GitBranch,
      badge: 'Webhooks & CLI',
      summary: 'Automated webhook ingestion directly from GitHub, GitLab, Bitbucket or the CLI binary.',
      details: {
        latency: '35ms',
        throughput: '25,000 req/sec',
        activeTask: 'Payload signature validation (HMAC-SHA256)',
        logs: [
          '[hook] Received push event ref: refs/heads/main',
          '[hook] Validated commit sha: a7f89b4e10',
          '[hook] Spawned isolated build container worker #419',
        ]
      }
    },
    {
      id: 1,
      title: '2. Smart Build & Cache',
      icon: Layers,
      badge: 'Zero-Redundant Builds',
      summary: 'Deduplicated AST caching ensures packages and unchanged assets are never recompiled.',
      details: {
        latency: '180ms',
        throughput: '100% cache hit',
        activeTask: 'Synthesizing native ESM modules & serverless bundles',
        logs: [
          '[build] Restored Turbocache layer for node_modules (hit)',
          '[build] Bundled React runtime in 142ms using oxc engine',
          '[build] Stripped unused CSS rules (optimized 94%)',
        ]
      }
    },
    {
      id: 2,
      title: '3. Mesh Edge Sync',
      icon: Radio,
      badge: '320 Global PoPs',
      summary: 'Atomic distribution across worldwide tier-1 Anycast PoPs via encrypted QUIC tunnel.',
      details: {
        latency: '82ms',
        throughput: '10 Gbps pipeline',
        activeTask: 'Syncing routing tables across 4 continents simultaneously',
        logs: [
          '[mesh] Broadcasting immutable route hash to 320 edge points',
          '[mesh] Pre-warming regional edge V8 isolates',
          '[mesh] Verified routing consistency in 82ms',
        ]
      }
    },
    {
      id: 3,
      title: '4. Zero-Downtime Rollout',
      icon: CheckCircle2,
      badge: 'Canary / Instant',
      summary: 'Instantaneous atomic pointer switch. If error rate exceeds 0.01%, auto-rolls back in 50ms.',
      details: {
        latency: '0ms downtime',
        throughput: '100% healthy',
        activeTask: 'Traffic shifted 100% to v2.4 without a single dropped packet',
        logs: [
          '[traffic] Canary traffic split: 10% -> 50% -> 100%',
          '[healthcheck] 200 OK returned on /health across all regions',
          '[complete] Deployment active globally!',
        ]
      }
    },
  ];

  return (
    <section id="architecture" className="py-24 bg-[#070A11] border-t border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-xs font-mono text-brand-primary">
            <Cpu className="w-3.5 h-3.5" />
            <span>High-Velocity Pipeline</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-headline">
            From Code to Global Edge in <span className="bg-gradient-to-r from-brand-secondary to-indigo-400 bg-clip-text text-transparent">Milliseconds</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-400">
            Click any step in the pipeline below to inspect the real-time execution engine and edge telemetry.
          </p>
        </div>

        {/* Pipeline Stepper Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stages.map((stage) => {
            const Icon = stage.icon;
            const isSelected = activeStage === stage.id;
            return (
              <button
                key={stage.id}
                onClick={() => setActiveStage(stage.id)}
                className={`relative text-left p-5 rounded-2xl border transition-all duration-300 ${
                  isSelected
                    ? 'bg-surface-2 border-brand-primary shadow-xl shadow-brand-primary/20'
                    : 'bg-surface-1/70 border-white/[0.08] hover:border-white/20 hover:bg-surface-1'
                }`}
              >
                {/* Active indicator bar */}
                {isSelected && (
                  <div className="absolute top-0 left-4 right-4 h-[2px] bg-gradient-to-r from-brand-secondary via-brand-primary to-brand-accent"></div>
                )}
                
                <div className="flex items-center justify-between mb-3">
                  <div className={`p-2.5 rounded-xl ${isSelected ? 'bg-brand-primary text-white' : 'bg-white/5 text-slate-400'}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className={`text-[11px] font-mono px-2 py-0.5 rounded-full ${
                    isSelected ? 'bg-brand-secondary/20 text-brand-secondary border border-brand-secondary/30' : 'bg-white/5 text-slate-400'
                  }`}>
                    {stage.badge}
                  </span>
                </div>

                <h3 className={`font-semibold text-base mb-1 ${isSelected ? 'text-white' : 'text-slate-300'}`}>
                  {stage.title}
                </h3>
                <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                  {stage.summary}
                </p>
              </button>
            );
          })}
        </div>

        {/* Detailed Inspector Box for Active Stage */}
        <div className="rounded-2xl bg-surface-1 border border-white/[0.08] p-6 sm:p-8 backdrop-blur-xl shadow-2xl relative overflow-hidden">
          <div className="flex flex-col lg:flex-row gap-8 items-start justify-between">
            
            {/* Left summary info */}
            <div className="space-y-4 max-w-xl">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-brand-secondary uppercase tracking-wider">
                  Stage Inspector
                </span>
                <span className="text-slate-600">•</span>
                <span className="text-xs font-mono text-emerald-400 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  Active Worker Healthy
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white font-headline">
                {stages[activeStage].title}: {stages[activeStage].badge}
              </h3>

              <p className="text-slate-300 text-sm leading-relaxed">
                {stages[activeStage].summary}
              </p>

              <div className="grid grid-cols-2 gap-4 pt-3">
                <div className="p-3.5 rounded-xl bg-black/40 border border-white/5">
                  <span className="text-xs text-slate-500 font-mono block">Stage Latency</span>
                  <span className="text-lg font-bold text-white font-mono">{stages[activeStage].details.latency}</span>
                </div>
                <div className="p-3.5 rounded-xl bg-black/40 border border-white/5">
                  <span className="text-xs text-slate-500 font-mono block">Throughput</span>
                  <span className="text-lg font-bold text-brand-secondary font-mono">{stages[activeStage].details.throughput}</span>
                </div>
              </div>
            </div>

            {/* Right Live Engine Console Output */}
            <div className="w-full lg:w-1/2 rounded-xl bg-black/70 border border-white/10 p-5 font-mono text-xs space-y-3">
              <div className="flex items-center justify-between pb-3 border-b border-white/10 text-slate-400">
                <div className="flex items-center gap-2">
                  <Server className="w-3.5 h-3.5 text-brand-secondary" />
                  <span>worker.launchpad.internal</span>
                </div>
                <span className="text-[10px] text-slate-500">LIVE STREAM</span>
              </div>

              <div className="space-y-2 text-slate-300 pt-1">
                {stages[activeStage].details.logs.map((log, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <span className="text-brand-primary select-none">&gt;</span>
                    <span className="leading-relaxed">{log}</span>
                  </div>
                ))}
                <div className="flex items-center gap-2 text-emerald-400 pt-1">
                  <span className="animate-spin text-brand-secondary">⠋</span>
                  <span>{stages[activeStage].details.activeTask}</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
