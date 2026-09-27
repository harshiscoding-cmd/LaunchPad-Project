import React, { useState } from 'react';
import { Check, Sparkles, Zap, ArrowRight, ShieldCheck, HelpCircle } from 'lucide-react';

export default function PricingCalculator() {
  const [isAnnual, setIsAnnual] = useState(true);
  const [requests, setRequests] = useState(5); // Millions of requests per month

  const tiers = [
    {
      name: 'Hobby & Dev',
      badge: 'Free Forever',
      priceMonthly: 0,
      priceAnnual: 0,
      description: 'Ideal for independent developers, weekend prototypes, and learning the LaunchPad runtime.',
      features: [
        'Up to 3 Active Micro-Clusters',
        '100,000 Global Edge Requests/mo',
        'Automated TLS & Free SSL Certificates',
        'Community Discord Support',
        'Basic APM & 24h Log Retention',
      ],
      cta: 'Start Free',
      popular: false,
    },
    {
      name: 'Pro Velocity',
      badge: 'Most Popular',
      priceMonthly: 49,
      priceAnnual: 39,
      description: 'Engineered for fast-shipping production startups and high-traffic customer-facing web apps.',
      features: [
        'Unlimited Micro-Clusters & Workers',
        '10,000,000 Edge Requests included',
        'Atomic Canary Traffic Splitting',
        '320+ Anycast PoPs with HTTP/3',
        'Hardware-backed KMS Secrets',
        '30-Day Metric & Log Retention',
        '99.99% SLA Uptime Guarantee',
      ],
      cta: 'Deploy Pro Fleet',
      popular: true,
    },
    {
      name: 'Enterprise Orbit',
      badge: 'Custom Cloud',
      priceMonthly: 299,
      priceAnnual: 249,
      description: 'For global enterprises requiring custom VPC peering, compliance audits, and dedicated SRE support.',
      features: [
        'Dedicated Private VPC Peering',
        '99.999% Financial Backed SLA',
        'Custom Hardware Security Modules',
        'Custom Data Residency & Governance',
        'SOC2 Type II & HIPAA Certified',
        '24/7/365 Dedicated Slack/Phone SRE',
      ],
      cta: 'Contact Architecture Team',
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-[#0A0E1A] relative border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-secondary/10 border border-brand-secondary/20 text-xs font-mono text-brand-secondary">
            <Zap className="w-3.5 h-3.5" />
            <span>Transparent Pricing</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-headline">
            Simple, Predictable Scaling. <br />
            <span className="bg-gradient-to-r from-brand-secondary to-indigo-400 bg-clip-text text-transparent">No Surprise Invoices.</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Start completely free. Upgrade seamlessly as your application traffic expands across the global edge.
          </p>

          {/* Billing Switch */}
          <div className="pt-4 flex items-center justify-center gap-4">
            <span className={`text-sm font-medium ${!isAnnual ? 'text-white' : 'text-slate-400'}`}>Monthly</span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="w-14 h-8 bg-surface-2 rounded-full p-1 border border-white/10 transition-colors relative"
              aria-label="Toggle annual billing"
            >
              <div
                className={`w-6 h-6 rounded-full bg-brand-primary transition-transform shadow-md ${
                  isAnnual ? 'translate-x-6' : 'translate-x-0'
                }`}
              ></div>
            </button>
            <span className={`text-sm font-medium flex items-center gap-1.5 ${isAnnual ? 'text-white' : 'text-slate-400'}`}>
              <span>Annual</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                Save 20%
              </span>
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {tiers.map((tier, idx) => {
            const price = isAnnual ? tier.priceAnnual : tier.priceMonthly;
            return (
              <div
                key={idx}
                className={`relative rounded-3xl p-8 border flex flex-col justify-between transition-all duration-300 ${
                  tier.popular
                    ? 'bg-surface-1 border-brand-primary shadow-2xl shadow-brand-primary/20 scale-[1.02] z-10'
                    : 'bg-surface-1/60 border-white/[0.08] hover:border-white/20'
                }`}
              >
                {/* Popular Badge */}
                {tier.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-brand-primary to-brand-secondary text-white text-xs font-semibold shadow-lg shadow-brand-primary/30 flex items-center gap-1.5 font-mono">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>RECOMMENDED</span>
                  </div>
                )}

                <div>
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-xl font-bold text-white font-headline">{tier.name}</h3>
                    <span className="text-xs font-mono text-slate-400 px-2.5 py-1 rounded-lg bg-black/40 border border-white/5">
                      {tier.badge}
                    </span>
                  </div>

                  <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                    {tier.description}
                  </p>

                  <div className="flex items-baseline gap-1.5 mb-6 pb-6 border-b border-white/5">
                    <span className="text-4xl sm:text-5xl font-extrabold text-white font-headline">
                      ${price}
                    </span>
                    <span className="text-xs text-slate-400 font-mono">/month</span>
                    {isAnnual && price > 0 && (
                      <span className="text-[10px] text-slate-500 font-mono ml-auto">Billed annually</span>
                    )}
                  </div>

                  {/* Feature Checklist */}
                  <div className="space-y-3.5 mb-8">
                    <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                      Included Capabilities:
                    </span>
                    {tier.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <a
                  href="#deploy-terminal"
                  className={`w-full py-3.5 rounded-xl font-semibold text-sm text-center transition-all duration-200 flex items-center justify-center gap-2 ${
                    tier.popular
                      ? 'bg-gradient-to-r from-brand-primary to-brand-primary-hover text-white shadow-lg shadow-brand-primary/30 hover:shadow-brand-primary/50 hover:-translate-y-0.5'
                      : 'bg-white/5 hover:bg-white/10 text-white border border-white/10'
                  }`}
                >
                  <span>{tier.cta}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
