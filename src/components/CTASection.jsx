import React from 'react';
import { Rocket, ArrowRight, Terminal, CheckCircle2, Shield } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-24 bg-[#0A0E1A] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-brand-primary/20 via-brand-secondary/20 to-brand-accent/20 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-b from-surface-1 to-[#0B0F19] border border-white/10 p-8 sm:p-14 text-center shadow-2xl backdrop-blur-2xl relative overflow-hidden">
          
          {/* Top rocket icon badge */}
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-tr from-brand-primary to-brand-secondary p-[1px] mb-6 shadow-xl shadow-brand-primary/30">
            <div className="w-full h-full bg-[#0D1322] rounded-[15px] flex items-center justify-center">
              <Rocket className="w-8 h-8 text-brand-secondary" />
            </div>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-headline max-w-2xl mx-auto leading-tight">
            Ready to Accelerate Your <br />
            <span className="bg-gradient-to-r from-brand-primary via-indigo-300 to-brand-secondary bg-clip-text text-transparent">
              Deployment Velocity?
            </span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg max-w-xl mx-auto mt-4 mb-8 leading-relaxed">
            Get started in under 60 seconds with your first micro-cluster. No credit card required. Deploy directly via your terminal or GitHub.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#deploy-terminal"
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-semibold text-base text-white bg-gradient-to-r from-brand-primary via-indigo-600 to-brand-primary-hover shadow-xl shadow-brand-primary/30 hover:shadow-brand-primary/50 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 border border-white/10 flex items-center justify-center gap-2 group"
            >
              <span>Launch Your Application Free</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#telemetry"
              className="w-full sm:w-auto px-7 py-4 rounded-xl font-semibold text-base text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 transition-all flex items-center justify-center gap-2"
            >
              <Terminal className="w-4 h-4 text-brand-secondary" />
              <span>Read Documentation</span>
            </a>
          </div>

          {/* Bullet points */}
          <div className="mt-10 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-mono">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Free Forever Tier</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Zero Cold Starts</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>SOC2 Type II Certified</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
