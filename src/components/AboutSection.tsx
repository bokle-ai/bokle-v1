import React from 'react';
import { Button } from "@/components/ui/button";
import { Target, Rocket, Award, Zap, Shield, TrendingUp } from "lucide-react";
import bokleMascotLarge from '@/assets/bokle-mascot-large.png';

const values = [
  { 
    icon: Award, 
    title: "Quality", 
    subtitle: "& Reliability",
    gradient: "from-primary to-accent"
  },
  { 
    icon: TrendingUp, 
    title: "Innovation", 
    subtitle: "First",
    gradient: "from-accent to-primary-glow"
  },
  { 
    icon: Zap, 
    title: "Easy", 
    subtitle: "Integration",
    gradient: "from-primary-glow to-accent"
  },
  { 
    icon: Shield, 
    title: "Support", 
    subtitle: "Excellence",
    gradient: "from-accent to-primary"
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-32 px-6 relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-accent-muted/10" />
      <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] opacity-30" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] opacity-30" />
      
      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-start max-w-7xl mx-auto">
          {/* Left Column - Content */}
          <div className="space-y-10">
            {/* Heading */}
            <div className="glide-in space-y-6">
              <h2 className="text-5xl md:text-6xl font-bold leading-tight">
                <span className="glow-text">Make Your Business</span>
                <br />
                <span className="text-foreground">Glide</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
                Just as a sugar glider effortlessly navigates between trees, 
                Bokle AI helps your business glide seamlessly into the future of AI adoption.
              </p>
            </div>
            
            {/* Mission & Vision Cards */}
            <div className="space-y-5 glide-in" style={{ animationDelay: '0.15s' }}>
              {/* Mission */}
              <div className="group relative glass-card-premium p-8 rounded-3xl border-2 border-primary/10 hover:border-primary/30 transition-all duration-500 glide-hover">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0 shadow-glow group-hover:scale-110 transition-transform duration-300">
                    <Target className="w-6 h-6 text-background" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3 glow-text">Our Mission</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Democratize AI adoption by offering curated, plug-and-play AI solutions 
                      that businesses can seamlessly integrate without requiring extensive technical expertise.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Vision */}
              <div className="group relative glass-card-premium p-8 rounded-3xl border-2 border-primary/10 hover:border-accent/30 transition-all duration-500 glide-hover">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-accent to-primary-glow flex items-center justify-center flex-shrink-0 shadow-glow group-hover:scale-110 transition-transform duration-300">
                    <Rocket className="w-6 h-6 text-background" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3 glow-text">Our Vision</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Become the leading marketplace for business AI solutions, 
                      recognized for quality, reliability, and exceptional customer support.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Core Values Grid */}
            <div className="grid grid-cols-2 gap-4 glide-in" style={{ animationDelay: '0.3s' }}>
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div
                    key={index}
                    className="group relative glass-card-premium p-6 rounded-2xl border-2 border-primary/10 hover:border-primary/30 transition-all duration-500 glide-hover text-center"
                    style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`} />
                    <div className="relative space-y-3">
                      <div className={`w-12 h-12 mx-auto rounded-xl bg-gradient-to-br ${value.gradient} flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-6 h-6 text-background" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold glow-text">{value.title}</div>
                        <div className="text-sm text-muted-foreground">{value.subtitle}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 glide-in" style={{ animationDelay: '0.5s' }}>
              <Button 
                size="lg"
                className="bg-gradient-to-r from-primary to-accent hover:from-primary-glow hover:to-accent text-background font-semibold shadow-glow hover:shadow-premium transition-all duration-300"
              >
                Learn More About Us
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-primary/30 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
              >
                Our Story
              </Button>
            </div>
          </div>
          
          {/* Right Column - Mascot */}
          <div className="relative flex justify-center items-center lg:justify-end min-h-[600px]">
            {/* Mascot Container */}
            <div className="relative">
              {/* Animated Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-accent/30 to-primary-glow/30 rounded-full opacity-40 blur-[100px] scale-150 animate-pulse-glow" />
              
              {/* Orbiting Dots */}
              <div className="absolute inset-0">
                {[0, 1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="absolute w-3 h-3 bg-gradient-to-br from-primary to-accent rounded-full shadow-glow floating-element"
                    style={{
                      top: `${25 + i * 15}%`,
                      left: i % 2 === 0 ? '-10%' : '110%',
                      animationDelay: `${i * 1.5}s`,
                    }}
                  />
                ))}
              </div>
              
              {/* Mascot Image */}
              <div className="relative floating-element glide-in" style={{ animationDelay: '0.6s' }}>
                <img 
                  src={bokleMascotLarge}
                  alt="Bokle - Your AI Companion"
                  className="w-96 h-96 object-contain filter drop-shadow-[0_0_40px_rgba(22,163,74,0.4)] hover:drop-shadow-[0_0_60px_rgba(22,163,74,0.6)] transition-all duration-500"
                />
              </div>
              
              {/* Speech Bubble */}
              <div className="absolute -top-12 lg:-left-16 glide-in" style={{ animationDelay: '0.8s' }}>
                <div className="relative glass-card-premium p-5 rounded-2xl border-2 border-primary/20 max-w-xs shadow-premium backdrop-blur-xl">
                  <p className="text-sm text-foreground font-medium italic">
                    "Ready to help your business glide into the AI future!"
                  </p>
                  {/* Tail */}
                  <div className="absolute -bottom-3 left-12 w-6 h-6 bg-card/90 border-b-2 border-r-2 border-primary/20 transform rotate-45" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}