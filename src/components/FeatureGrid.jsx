import React from 'react';
import { Zap, Globe, GitFork, KeyRound, LineChart, Shield, Terminal, ArrowUpRight, CheckCircle } from 'lucide-react';

export default function FeatureGrid() {
  const features = [
    {
      icon: Zap,
      title: 'Autonomous Scaling',
      badge: '0 → 100k req/s',
      description: 'Scale dynamically to absorb massive viral traffic bursts in under 20 milliseconds without manual cluster provisioning or capacity headroom.',
      tags: ['Auto-rebalancing', 'Instant Burst', 'Zero Waste'],
    },
    {
      icon: Globe,
      title: '320+ Global Edge Points',
      badge: '<15ms Anywhere',
      description: 'Deploy statically and dynamically to the world’s fastest Anycast edge network with automatic TLS 1.3 termination and smart HTTP/3 routing.',
      tags: ['Anycast DNS', 'HTTP/3 Ready', 'Smart Routing'],
    },
    {
      icon: GitFork,
      title: 'Atomic Canary Rollouts',
      badge: 'Zero Risk',
      description: 'Progressively split user traffic across revisions (1% → 10% → 100%). If your error budget drops below 99.9%, it rolls back in 50ms automatically.',
      tags: ['Error Budgeting', '50ms Rollback', 'A/B Testing'],
    },
    {
      icon: KeyRound,
      title: 'Hardware Secrets & KMS',
      badge: 'SOC2 / HIPAA',
      description: 'Environment variables and API keys are protected by dedicated Hardware Security Modules (HSM) with strict zero-knowledge memory isolation.',
      tags: ['HSM Encrypted', 'Zero Knowledge', 'Audit Logging'],
    },
    {
      icon: LineChart,
      title: 'Built-in Tracing & APM',
      badge: 'Zero Overhead',
      description: 'Inspect every HTTP span, database query, and worker exception with microsecond precision. No third-party agents or SDK bloat required.',
      tags: ['OpenTelemetry', 'Microsecond Spans', 'AI Anomalies'],
    },
    {
      icon: Shield,
      title: 'Continuous DDoS Shield',
      badge: '100 Gbps Defense',
      description: 'Automated Layer 3/4/7 threat suppression. Protect against volumetrics, SYN floods, and malicious bot scrape campaigns seamlessly.',
      tags: ['WAF Rules', 'Bot Mitigation', 'Rate-Limiting'],
    },
  ];

  return (
    <section id="features" className="py-24 bg-[#070A11] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-xs font-mono text-brand-primary">
            <Terminal className="w-3.5 h-3.5" />
            <span>Developer-First Infrastructure</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-headline">
            Engineered for <span className="bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">Extreme Performance</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-400">
            Everything your team needs to build, launch, and operate mission-critical cloud services with unprecedented confidence.
          </p>
        </div>

        {/* 6-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div
                key={idx}
                className="group relative p-7 rounded-2xl bg-surface-1/80 border border-white/[0.08] hover:border-brand-primary/50 transition-all duration-300 hover:-translate-y-1.5 shadow-xl hover:shadow-brand-primary/10 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="p-3 rounded-xl bg-gradient-to-tr from-brand-primary/10 to-brand-secondary/10 border border-brand-primary/20 text-brand-secondary group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300">
                      {feat.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white font-headline mb-2.5 group-hover:text-brand-secondary transition-colors">
                    {feat.title}
                  </h3>

                  <p className="text-sm text-slate-400 leading-relaxed mb-6">
                    {feat.description}
                  </p>
                </div>

                {/* Feature Tags */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                  {feat.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[11px] font-mono text-slate-400 bg-black/40 px-2 py-0.5 rounded border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
