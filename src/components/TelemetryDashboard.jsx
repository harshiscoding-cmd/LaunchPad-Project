import React, { useState } from 'react';
import { Activity, Globe, Wifi, RefreshCw, BarChart3, AlertCircle, ArrowUpRight, ShieldCheck, Check } from 'lucide-react';

export default function TelemetryDashboard() {
  const [selectedEnv, setSelectedEnv] = useState('prod');
  const [loadSimulated, setLoadSimulated] = useState(false);
  const [cachePurged, setCachePurged] = useState(false);

  const triggerLoad = () => {
    setLoadSimulated(true);
    setTimeout(() => setLoadSimulated(false), 3000);
  };

  const purgeCache = () => {
    setCachePurged(true);
    setTimeout(() => setCachePurged(false), 2500);
  };

  const regions = [
    { name: 'US-East (N. Virginia)', latency: loadSimulated ? '15ms' : '9ms', traffic: '41%', status: 'Optimal' },
    { name: 'EU-Central (Frankfurt)', latency: loadSimulated ? '19ms' : '14ms', traffic: '28%', status: 'Optimal' },
    { name: 'AP-Southeast (Singapore)', latency: loadSimulated ? '26ms' : '21ms', traffic: '19%', status: 'Optimal' },
    { name: 'SA-East (São Paulo)', latency: loadSimulated ? '34ms' : '28ms', traffic: '12%', status: 'Optimal' },
  ];

  const microservices = [
    { name: 'gateway.mesh.internal', instances: 48, status: 'Healthy', cpu: loadSimulated ? '64%' : '28%', memory: '1.2 GB' },
    { name: 'auth-vault.internal', instances: 12, status: 'Healthy', cpu: loadSimulated ? '42%' : '18%', memory: '512 MB' },
    { name: 'realtime-stream.internal', instances: 36, status: 'Healthy', cpu: loadSimulated ? '78%' : '34%', memory: '2.4 GB' },
    { name: 'edge-cache.internal', instances: 320, status: 'Healthy', cpu: loadSimulated ? '30%' : '11%', memory: '6.8 GB' },
  ];

  return (
    <section id="telemetry" className="py-24 bg-[#0A0E1A] relative border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-400">
              <Activity className="w-3.5 h-3.5" />
              <span>Real-Time Edge Telemetry</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-headline tracking-tight">
              Global Observability & Health Monitor
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Monitor millisecond request throughput, microservice CPU allocations, and live regional routing across our decentralized edge grid.
            </p>
          </div>

          {/* Action buttons & Env toggles */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center bg-surface-1 p-1 rounded-xl border border-white/10 text-xs font-mono">
              <button
                onClick={() => setSelectedEnv('prod')}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  selectedEnv === 'prod' ? 'bg-brand-primary text-white font-semibold' : 'text-slate-400 hover:text-white'
                }`}
              >
                Production Mesh
              </button>
              <button
                onClick={() => setSelectedEnv('canary')}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  selectedEnv === 'canary' ? 'bg-brand-primary text-white font-semibold' : 'text-slate-400 hover:text-white'
                }`}
              >
                Canary (10%)
              </button>
            </div>

            <button
              onClick={triggerLoad}
              disabled={loadSimulated}
              className="px-3.5 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-slate-300 hover:text-white transition-all flex items-center gap-2"
            >
              <Activity className={`w-3.5 h-3.5 ${loadSimulated ? 'text-amber-400 animate-spin' : 'text-brand-secondary'}`} />
              <span>{loadSimulated ? 'Simulating 25k req/s...' : 'Simulate Load'}</span>
            </button>

            <button
              onClick={purgeCache}
              disabled={cachePurged}
              className="px-3.5 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-slate-300 hover:text-white transition-all flex items-center gap-2"
            >
              {cachePurged ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Purged in 12ms</span>
                </>
              ) : (
                <>
                  <RefreshCw className="w-3.5 h-3.5 text-slate-400" />
                  <span>Purge Edge Cache</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Main Throughput & Activity Panel */}
          <div className="lg:col-span-2 rounded-2xl bg-surface-1 border border-white/[0.08] p-6 shadow-xl space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-white/5">
              <div className="flex items-center gap-3">
                <span className="p-2 rounded-lg bg-brand-primary/10 text-brand-primary">
                  <BarChart3 className="w-5 h-5" />
                </span>
                <div>
                  <h4 className="font-semibold text-white text-base">Global Ingress Throughput</h4>
                  <span className="text-xs text-slate-400">Aggregated requests across all Anycast edge nodes</span>
                </div>
              </div>

              <div className="text-right font-mono">
                <span className="text-xl font-bold text-white block">
                  {loadSimulated ? '184,290 req/s' : '42,850 req/s'}
                </span>
                <span className="text-xs text-emerald-400 flex items-center justify-end gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                  {loadSimulated ? '+330% Surge' : '+4.2% nominal'}
                </span>
              </div>
            </div>

            {/* Simulated Audio/Wave Bar Chart */}
            <div className="space-y-2">
              <div className="flex items-end gap-1.5 h-32 px-2 py-2 bg-black/40 rounded-xl border border-white/5 overflow-hidden">
                {[
                  35, 42, 48, 55, 62, 50, 45, 58, 65, 72, 60, 55, 68, 75, 82, 70, 65, 78,
                  85, 92, loadSimulated ? 98 : 74, loadSimulated ? 99 : 80, 88, 75, 62, 70, 78, 85, 90, 82
                ].map((val, idx) => (
                  <div
                    key={idx}
                    style={{ height: `${val}%` }}
                    className={`flex-1 rounded-t transition-all duration-300 ${
                      idx >= 20
                        ? 'bg-gradient-to-t from-brand-primary to-brand-secondary'
                        : 'bg-gradient-to-t from-brand-primary/40 to-brand-primary/80'
                    }`}
                  ></div>
                ))}
              </div>
              <div className="flex justify-between text-[11px] font-mono text-slate-500 px-1">
                <span>-60 sec</span>
                <span>-30 sec</span>
                <span>-15 sec</span>
                <span className="text-brand-secondary">Now (Live)</span>
              </div>
            </div>

            {/* Active Microservices Table */}
            <div className="space-y-3">
              <h5 className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                Active Cluster Services
              </h5>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs font-mono">
                  <thead>
                    <tr className="border-b border-white/5 text-slate-500">
                      <th className="pb-2">Service Name</th>
                      <th className="pb-2">Pods</th>
                      <th className="pb-2">CPU</th>
                      <th className="pb-2">Memory</th>
                      <th className="pb-2 text-right">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 text-slate-300">
                    {microservices.map((service, idx) => (
                      <tr key={idx} className="hover:bg-white/[0.02]">
                        <td className="py-2.5 font-medium text-white flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-secondary"></span>
                          <span>{service.name}</span>
                        </td>
                        <td className="py-2.5 text-slate-400">{service.instances}</td>
                        <td className={`py-2.5 font-semibold ${loadSimulated ? 'text-amber-400' : 'text-slate-300'}`}>
                          {service.cpu}
                        </td>
                        <td className="py-2.5 text-slate-400">{service.memory}</td>
                        <td className="py-2.5 text-right">
                          <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[10px]">
                            {service.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Regional Edge Latency Breakdown */}
          <div className="rounded-2xl bg-surface-1 border border-white/[0.08] p-6 shadow-xl space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-3 pb-4 border-b border-white/5">
                <span className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400">
                  <Globe className="w-5 h-5" />
                </span>
                <div>
                  <h4 className="font-semibold text-white text-base">Regional Edge Latency</h4>
                  <span className="text-xs text-slate-400">DNS anycast routing speeds</span>
                </div>
              </div>

              <div className="space-y-3.5">
                {regions.map((reg, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-black/40 border border-white/5 space-y-2">
                    <div className="flex justify-between items-center text-xs">
                      <span className="font-medium text-white">{reg.name}</span>
                      <span className="font-mono font-bold text-brand-secondary">{reg.latency}</span>
                    </div>
                    <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-brand-primary to-brand-secondary h-full rounded-full"
                        style={{ width: reg.traffic }}
                      ></div>
                    </div>
                    <div className="flex justify-between text-[10px] font-mono text-slate-500">
                      <span>Traffic Share: {reg.traffic}</span>
                      <span className="text-emerald-400">{reg.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Security summary */}
            <div className="p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/20 flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-emerald-400 shrink-0" />
              <div className="text-xs">
                <span className="font-semibold text-white block">DDoS Shield v4 Active</span>
                <span className="text-slate-400">Automatic rate-limiting and TLS 1.3 enforced.</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
