import React from 'react';
import { Button } from "@/components/ui/button";
import Hero3D from './Hero3D';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* 3D Background */}
      <div className="absolute inset-0 opacity-40">
        <Hero3D />
      </div>
      
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(21,98,27,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(21,98,27,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      
      {/* Main content */}
      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Main headline */}
          <div className="text-center mb-16 glide-in" style={{ animationDelay: '0.2s' }}>
            <div className="inline-block px-4 py-2 rounded-full glass-card border border-primary/20 mb-6">
              <span className="text-sm text-primary-glow font-semibold">🚀 AI-Powered Business Intelligence</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
              <span className="glow-text block mb-2">Transform Business</span>
              <span className="text-foreground">with Premium AI</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Deploy powerful AI agents that glide effortlessly through your business challenges
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Button variant="hero" size="lg" className="text-lg px-8 py-6 h-auto">
                Explore Solutions
              </Button>
              <Button variant="premium" size="lg" className="text-lg px-8 py-6 h-auto">
                Schedule Demo
              </Button>
            </div>
          </div>

          {/* Dashboard-style metrics grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 glide-in" style={{ animationDelay: '0.4s' }}>
            {/* AI Efficiency Card */}
            <div className="glass-card-premium p-8 relative overflow-hidden glide-hover group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-muted-foreground font-semibold uppercase tracking-wider">AI Efficiency</span>
                  <div className="w-2 h-2 rounded-full bg-primary-glow animate-pulse" />
                </div>
                <div className="mb-4">
                  <div className="text-5xl font-bold glow-text mb-2">10.15%</div>
                  <div className="text-sm text-muted-foreground">Productivity increase</div>
                </div>
                <div className="h-16 flex items-end gap-1">
                  {[40, 60, 45, 70, 55, 80, 65, 90, 75, 95].map((height, i) => (
                    <div 
                      key={i} 
                      className="flex-1 bg-gradient-to-t from-primary to-primary-glow rounded-t opacity-70"
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Active Solutions Card */}
            <div className="glass-card-premium p-8 relative overflow-hidden glide-hover group">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-muted-foreground font-semibold uppercase tracking-wider">Active Solutions</span>
                  <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                </div>
                <div className="mb-6">
                  <div className="text-5xl font-bold text-foreground mb-2">50+</div>
                  <div className="text-sm text-muted-foreground">AI Agents Available</div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Sales Automation</span>
                    <span className="text-primary-glow font-semibold">Active</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">E-commerce Intelligence</span>
                    <span className="text-primary-glow font-semibold">Active</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Customer Support</span>
                    <span className="text-primary-glow font-semibold">Active</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Deployment Speed Card */}
            <div className="glass-card-premium p-8 relative overflow-hidden glide-hover group md:col-span-2 lg:col-span-1">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-glow/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-muted-foreground font-semibold uppercase tracking-wider">Deployment</span>
                  <div className="w-2 h-2 rounded-full bg-primary-glow animate-pulse" />
                </div>
                <div className="mb-4">
                  <div className="text-5xl font-bold glow-text mb-2">59.8K</div>
                  <div className="text-sm text-muted-foreground">Faster than traditional methods</div>
                </div>
                <div className="relative h-20 mt-6">
                  <svg className="w-full h-full" viewBox="0 0 200 60">
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="hsl(126, 65%, 23%)" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="hsl(126, 100%, 50%)" stopOpacity="0.3" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M 0 50 Q 50 20, 100 30 T 200 10"
                      fill="none"
                      stroke="url(#gradient)"
                      strokeWidth="2"
                      className="animate-pulse"
                    />
                    <path
                      d="M 0 50 Q 50 20, 100 30 T 200 10 L 200 60 L 0 60 Z"
                      fill="url(#gradient)"
                      opacity="0.2"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Trust badges */}
          <div className="mt-16 text-center glide-in" style={{ animationDelay: '0.6s' }}>
            <p className="text-sm text-muted-foreground mb-6">Trusted by leading businesses worldwide</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-50">
              <div className="text-2xl font-bold">99%</div>
              <div className="text-sm">Client Satisfaction</div>
              <div className="w-px h-8 bg-border" />
              <div className="text-2xl font-bold">24/7</div>
              <div className="text-sm">Support Available</div>
              <div className="w-px h-8 bg-border" />
              <div className="text-2xl font-bold">10x</div>
              <div className="text-sm">Faster Deployment</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-accent/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-accent rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
}