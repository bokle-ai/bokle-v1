import React from 'react';
import { Button } from "@/components/ui/button";
import Hero3D from './Hero3D';
import bokleLogoWithText from '@/assets/bokle-logo-with-text.png';
import bokleMascot from '@/assets/bokle-mascot.png';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* 3D Background */}
      <div className="absolute inset-0 opacity-60">
        <Hero3D />
      </div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-glow rounded-full opacity-20 animate-float" />
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-gradient-glow rounded-full opacity-15 animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-glow rounded-full opacity-25 animate-float" style={{ animationDelay: '4s' }} />
      </div>
      
      {/* Main content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Logo */}
          <div className="mb-8 glide-in flex items-center justify-center gap-4">
            <img 
              src={bokleLogoWithText} 
              alt="Bokle AI - Premium AI Marketplace" 
              className="h-16 filter drop-shadow-2xl"
            />
            <div className="floating-element">
              <img 
                src={bokleMascot}
                alt="Bokle - Sugar Glider Mascot"
                className="h-20 filter drop-shadow-lg"
              />
            </div>
          </div>
          
          {/* Main headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 glide-in" style={{ animationDelay: '0.2s' }}>
            <span className="glow-text">Transform Business</span>
            <br />
            <span className="text-foreground">with Premium AI</span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed glide-in" style={{ animationDelay: '0.4s' }}>
            Discover curated AI agents tailored for your business. From sales automation to e-commerce intelligence, 
            deploy powerful AI solutions without the complexity.
          </p>
          
          {/* Sugar glider metaphor */}
          <p className="text-lg text-secondary mb-12 italic glide-in" style={{ animationDelay: '0.6s' }}>
            "Just as a sugar glider effortlessly glides between trees, Bokle glides between solutions, 
            making AI adoption smooth and agile."
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center glide-in" style={{ animationDelay: '0.8s' }}>
            <Button variant="hero" size="lg" className="text-lg px-8 py-6 h-auto">
              Explore AI Solutions
            </Button>
            <Button variant="premium" size="lg" className="text-lg px-8 py-6 h-auto">
              Schedule Demo
            </Button>
          </div>
          
          {/* Key stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 glide-in" style={{ animationDelay: '1s' }}>
            <div className="premium-card p-6 glide-hover">
              <div className="text-3xl font-bold glow-text mb-2">50+</div>
              <div className="text-muted-foreground">AI Solutions</div>
            </div>
            <div className="premium-card p-6 glide-hover">
              <div className="text-3xl font-bold glow-text mb-2">10x</div>
              <div className="text-muted-foreground">Faster Deployment</div>
            </div>
            <div className="premium-card p-6 glide-hover">
              <div className="text-3xl font-bold glow-text mb-2">99%</div>
              <div className="text-muted-foreground">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-accent rounded-full flex justify-center">
          <div className="w-1 h-3 bg-accent rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
}