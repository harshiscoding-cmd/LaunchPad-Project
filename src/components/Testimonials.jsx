import React from 'react';
import { Star, Quote, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      quote: "LaunchPad dropped our CI/CD container build and rollout time from 14 minutes down to 380 milliseconds. Our engineers deploy 25 times a day with zero fear.",
      author: "Alex Rivera",
      role: "VP of Engineering at Synthetix Cloud",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
      metric: "97% Faster Deploys",
    },
    {
      quote: "During our viral product launch on Product Hunt, we absorbed over 120,000 concurrent websocket connections without a single dropped packet or manual scaling action.",
      author: "Marcus Chen",
      role: "Founder & CTO at HyperScale AI",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
      metric: "120k Concurrent Sockets",
    },
    {
      quote: "The automated canary traffic splitting and instantaneous rollback give our team total peace of mind. LaunchPad has become our foundational infrastructure standard.",
      author: "Elena Rostova",
      role: "Principal Infrastructure Architect at OrbitMesh",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
      metric: "Zero Downtime Since Launch",
    },
  ];

  return (
    <section className="py-24 bg-[#070A11] relative border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-400">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Trusted Worldwide</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-headline">
            Loved by Developers. <br />
            <span className="bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">
              Trusted by Infrastructure Teams.
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            See how high-velocity engineering organizations leverage LaunchPad to ship faster with absolute reliability.
          </p>
        </div>

        {/* Testimonials 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-surface-1/70 border border-white/[0.08] hover:border-brand-primary/40 transition-all duration-300 flex flex-col justify-between shadow-xl relative group"
            >
              <Quote className="w-8 h-8 text-brand-primary/30 mb-4 group-hover:text-brand-secondary/60 transition-colors" />

              <p className="text-sm text-slate-300 leading-relaxed mb-6 italic">
                "{item.quote}"
              </p>

              <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={item.avatar}
                    alt={item.author}
                    className="w-10 h-10 rounded-full object-cover border border-brand-primary/40"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-white font-headline">{item.author}</h4>
                    <span className="text-[11px] text-slate-400 block">{item.role}</span>
                  </div>
                </div>

                <span className="text-[10px] font-mono px-2 py-1 rounded bg-brand-primary/10 text-brand-secondary border border-brand-primary/20 shrink-0">
                  {item.metric}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
