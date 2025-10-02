import React from 'react';
import { Target, Rocket } from "lucide-react";
import bokleMascotLarge from '@/assets/bokle-mascot-large.png';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-6 relative overflow-hidden bg-background">
      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Heading */}
            <div>
              <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
                <span className="text-primary">Make Your Business</span>
                <br />
                <span className="text-foreground">Glide</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Just as a sugar glider effortlessly navigates between trees, 
                Bokle AI helps your business glide seamlessly into the future of AI adoption.
              </p>
            </div>
            
            {/* Mission Card */}
            <div className="bg-secondary/50 border border-border rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2 text-primary">Our Mission</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Democratize AI adoption by offering curated, plug-and-play AI solutions 
                    that businesses can seamlessly integrate without requiring extensive technical expertise.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Vision Card */}
            <div className="bg-secondary/50 border border-border rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Rocket className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2 text-primary">Our Vision</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Become the leading marketplace for business AI solutions, 
                    recognized for quality, reliability, and exceptional customer support.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Mascot */}
          <div className="relative flex justify-center items-center lg:justify-end">
            {/* Mascot Container */}
            <div className="relative">
              {/* Decorative dots */}
              <div className="absolute top-12 -right-4 w-3 h-3 rounded-full bg-primary animate-pulse"></div>
              <div className="absolute top-32 -left-8 w-2 h-2 rounded-full bg-primary/60 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute bottom-20 right-12 w-2 h-2 rounded-full bg-primary/60 animate-pulse" style={{ animationDelay: '1s' }}></div>
              
              {/* Mascot Image */}
              <div className="relative">
                <img 
                  src={bokleMascotLarge}
                  alt="Bokle - Your AI Companion"
                  className="w-80 h-80 lg:w-96 lg:h-96 object-contain filter drop-shadow-2xl"
                />
              </div>
              
              {/* Speech Bubble */}
              <div className="absolute -top-8 lg:-left-12 max-w-xs">
                <div className="relative bg-card/90 backdrop-blur-md border border-border p-4 rounded-2xl shadow-lg">
                  <p className="text-sm text-foreground font-medium italic">
                    "Ready to help your business glide into the AI future!"
                  </p>
                  {/* Tail */}
                  <div className="absolute -bottom-2 left-8 w-4 h-4 bg-card/90 border-b border-r border-border transform rotate-45" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
