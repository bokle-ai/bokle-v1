import React from 'react';
import { Button } from "@/components/ui/button";
import bokleMascotLarge from '@/assets/bokle-mascot-large.png';

export default function AboutSection() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-10 w-96 h-96 bg-gradient-glow rounded-full opacity-5 floating-element" />
        <div className="absolute bottom-1/3 right-10 w-64 h-64 bg-gradient-glow rounded-full opacity-8 floating-element" style={{ animationDelay: '2s' }} />
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Left side - Content */}
          <div className="space-y-8">
            <div className="glide-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="glow-text">Make Your Business</span>
                <br />
                <span className="text-foreground">Glide</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Just as a sugar glider effortlessly navigates between trees, 
                Bokle AI helps your business glide seamlessly into the future of AI adoption.
              </p>
            </div>
            
            <div className="space-y-6 glide-in" style={{ animationDelay: '0.2s' }}>
              <div className="premium-card p-6 glide-hover">
                <h3 className="text-xl font-semibold mb-3 text-accent">🎯 Our Mission</h3>
                <p className="text-muted-foreground">
                  Democratize AI adoption by offering curated, plug-and-play AI solutions 
                  that businesses can seamlessly integrate without requiring extensive technical expertise.
                </p>
              </div>
              
              <div className="premium-card p-6 glide-hover">
                <h3 className="text-xl font-semibold mb-3 text-accent">🚀 Our Vision</h3>
                <p className="text-muted-foreground">
                  Become the leading marketplace for business AI solutions, 
                  recognized for quality, reliability, and exceptional customer support.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 glide-in" style={{ animationDelay: '0.4s' }}>
              <div className="text-center premium-card p-4 glide-hover">
                <div className="text-2xl font-bold glow-text mb-2">Quality</div>
                <div className="text-sm text-muted-foreground">& Reliability</div>
              </div>
              <div className="text-center premium-card p-4 glide-hover">
                <div className="text-2xl font-bold glow-text mb-2">Innovation</div>
                <div className="text-sm text-muted-foreground">First</div>
              </div>
              <div className="text-center premium-card p-4 glide-hover">
                <div className="text-2xl font-bold glow-text mb-2">Easy</div>
                <div className="text-sm text-muted-foreground">Integration</div>
              </div>
              <div className="text-center premium-card p-4 glide-hover">
                <div className="text-2xl font-bold glow-text mb-2">Support</div>
                <div className="text-sm text-muted-foreground">Excellence</div>
              </div>
            </div>
            
            <div className="flex gap-4 glide-in" style={{ animationDelay: '0.6s' }}>
              <Button variant="hero" size="lg">
                Learn More About Us
              </Button>
              <Button variant="outline" size="lg">
                Our Story
              </Button>
            </div>
          </div>
          
          {/* Right side - Mascot */}
          <div className="relative flex justify-center items-center">
            <div className="relative">
              {/* Glowing background */}
              <div className="absolute inset-0 bg-gradient-glow rounded-full opacity-30 blur-3xl scale-150 animate-pulse-glow" />
              
              {/* Mascot */}
              <div className="relative floating-element">
                <img 
                  src={bokleMascotLarge}
                  alt="Bokle - Your AI Companion"
                  className="w-80 h-80 object-contain filter drop-shadow-2xl glide-hover"
                />
              </div>
              
              {/* Floating elements around mascot */}
              <div className="absolute -top-8 -right-8 w-16 h-16 bg-accent/20 rounded-full floating-element animate-pulse" style={{ animationDelay: '1s' }} />
              <div className="absolute -bottom-4 -left-6 w-12 h-12 bg-primary/20 rounded-full floating-element animate-pulse" style={{ animationDelay: '2s' }} />
              <div className="absolute top-1/3 -left-12 w-8 h-8 bg-secondary/30 rounded-full floating-element animate-pulse" style={{ animationDelay: '3s' }} />
            </div>
            
            {/* Quote bubble */}
            <div className="absolute -top-16 -left-8 premium-card p-4 max-w-xs glide-in" style={{ animationDelay: '1s' }}>
              <p className="text-sm text-muted-foreground italic">
                "Ready to help your business glide into the AI future!"
              </p>
              <div className="absolute bottom-0 left-8 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-card-border transform translate-y-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}