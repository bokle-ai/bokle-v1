import React from 'react';
import { Button } from "@/components/ui/button";
import Hero3D from './Hero3D';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
      {/* Background gradient with green flow */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-emerald-950/20 to-background" />

      {/* 3D Background with increased visibility */}
      <div className="absolute inset-0 opacity-70">
        <Hero3D />
      </div>

      {/* Subtle grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
      
      {/* Main content */}
      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Main headline */}
          <div className="text-center mb-16 glide-in" style={{ animationDelay: '0.2s' }}>
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full backdrop-blur-xl bg-gradient-to-r from-emerald-500/10 to-green-500/10 border border-emerald-500/30 shadow-[0_0_30px_rgba(16,185,129,0.15)] mb-8">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-sm text-emerald-400 font-semibold tracking-wide">AI-Powered Intelligence Platform</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-emerald-400 via-green-400 to-emerald-500 bg-clip-text text-transparent block mb-3 drop-shadow-[0_0_50px_rgba(16,185,129,0.5)]">Smarter AI Solutions,</span>
              <span className="text-foreground">Stronger Results</span>
            </h1>
            <p className="text-lg md:text-2xl text-muted-foreground/90 max-w-3xl mx-auto mb-12 leading-relaxed">
              Transform your business with intelligent AI solutions that drive growth and innovation
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20">
              <Button
                size="lg"
                className="text-lg px-10 py-7 h-auto bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-400 hover:to-green-500 text-white font-semibold shadow-[0_0_40px_rgba(16,185,129,0.4)] hover:shadow-[0_0_60px_rgba(16,185,129,0.6)] transition-all duration-300 rounded-xl group"
              >
                Get Started Today
                <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-10 py-7 h-auto border-2 border-emerald-500/50 text-foreground hover:bg-emerald-500/10 hover:border-emerald-400 backdrop-blur-xl transition-all duration-300 rounded-xl"
              >
                Watch Demo
              </Button>
            </div>
          </div>

          {/* Feature badges */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto glide-in" style={{ animationDelay: '0.4s' }}>
            <div className="backdrop-blur-xl bg-gradient-to-br from-emerald-500/5 to-green-500/5 border border-emerald-500/20 rounded-2xl p-6 hover:border-emerald-400/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(16,185,129,0.2)]">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-3 h-3 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.8)]" />
                <span className="text-xs text-emerald-400 font-semibold uppercase tracking-wider">Real-Time</span>
              </div>
              <h3 className="text-foreground font-bold text-lg mb-1">Budget Tracking</h3>
              <p className="text-muted-foreground text-sm">Monitor spending in real-time</p>
            </div>

            <div className="backdrop-blur-xl bg-gradient-to-br from-emerald-500/5 to-green-500/5 border border-emerald-500/20 rounded-2xl p-6 hover:border-emerald-400/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(16,185,129,0.2)]">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-3 h-3 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.8)]" />
                <span className="text-xs text-emerald-400 font-semibold uppercase tracking-wider">Teams</span>
              </div>
              <h3 className="text-foreground font-bold text-lg mb-1">Collaboration</h3>
              <p className="text-muted-foreground text-sm">Work together seamlessly</p>
            </div>

            <div className="backdrop-blur-xl bg-gradient-to-br from-emerald-500/5 to-green-500/5 border border-emerald-500/20 rounded-2xl p-6 hover:border-emerald-400/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(16,185,129,0.2)]">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-3 h-3 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.8)]" />
                <span className="text-xs text-emerald-400 font-semibold uppercase tracking-wider">Secure</span>
              </div>
              <h3 className="text-foreground font-bold text-lg mb-1">Cloud Access</h3>
              <p className="text-muted-foreground text-sm">Access anywhere, anytime</p>
            </div>
          </div>

          {/* Trust indicators */}
          <div className="mt-20 text-center glide-in" style={{ animationDelay: '0.6s' }}>
            <p className="text-sm text-emerald-400/80 mb-8 uppercase tracking-widest font-semibold">Trusted by innovative teams worldwide</p>
            <div className="flex flex-wrap justify-center items-center gap-12 text-muted-foreground/60">
              <div className="flex flex-col items-center">
                <div className="text-3xl font-bold text-emerald-400 mb-1">10x</div>
                <div className="text-xs uppercase tracking-wider">Faster Workflows</div>
              </div>
              <div className="w-px h-12 bg-emerald-500/20" />
              <div className="flex flex-col items-center">
                <div className="text-3xl font-bold text-emerald-400 mb-1">24/7</div>
                <div className="text-xs uppercase tracking-wider">AI Support</div>
              </div>
              <div className="w-px h-12 bg-emerald-500/20" />
              <div className="flex flex-col items-center">
                <div className="text-3xl font-bold text-emerald-400 mb-1">99%</div>
                <div className="text-xs uppercase tracking-wider">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <div className="w-6 h-10 border-2 border-emerald-500/50 rounded-full flex justify-center shadow-[0_0_20px_rgba(16,185,129,0.3)]">
          <div className="w-1 h-3 bg-emerald-400 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
}