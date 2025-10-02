import React from 'react';
import { Button } from "@/components/ui/button";
import { TrendingUp, ShoppingCart, Check } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: "Sales & Marketing AI",
      description: "Revolutionize your sales and marketing operations with intelligent automation and predictive insights.",
      features: [
        "AI Lead Scoring & Prospect Enrichment",
        "24/7 Conversational AI Assistants",
        "Automated Email & Content Generation",
        "Predictive Campaign Intelligence",
        "Customer Segmentation & Churn Prediction",
        "Real-time Sentiment Analysis"
      ],
      gradient: "from-primary via-accent to-primary-glow"
    },
    {
      icon: <ShoppingCart className="w-12 h-12" />,
      title: "Retail & E-Commerce AI",
      description: "Transform your online business with AI-powered product intelligence and customer experience optimization.",
      features: [
        "Automated Product Description Generation",
        "AI Shopping Assistant Bots",
        "Dynamic Pricing & Demand Forecasting",
        "Personalized Recommendation Engines",
        "Review Intelligence & Sentiment Mining",
        "Fraud Detection & Risk Management"
      ],
      gradient: "from-accent via-primary-glow to-accent"
    }
  ];

  return (
    <section id="solutions" className="relative py-20 overflow-hidden scroll-mt-20">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="relative container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 glide-in">
          <div className="inline-block px-4 py-2 rounded-full glass-card border border-primary/20 mb-6">
            <span className="text-sm text-primary-glow font-semibold">💡 Specialized AI Solutions</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="glow-text">Purpose-Built</span> AI Agents
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Deploy intelligent automation tailored for your industry. No coding required.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative glide-in glide-hover"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Gradient border effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-20 group-hover:opacity-30 rounded-3xl blur-xl transition-all duration-500`} />
              
              {/* Card */}
              <div className="relative glass-card-premium p-8 rounded-3xl border-2 border-primary/10 group-hover:border-primary/30 transition-all duration-500">
                {/* Icon with gradient background */}
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${service.gradient} mb-6 text-background shadow-glow`}>
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-3xl font-bold mb-4 glow-text">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 group/item">
                      <div className="mt-1 flex-shrink-0">
                        <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center group-hover/item:bg-primary/30 transition-colors">
                          <Check className="w-3 h-3 text-primary-glow" />
                        </div>
                      </div>
                      <span className="text-muted-foreground group-hover/item:text-foreground transition-colors">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button 
                  variant="premium" 
                  className="w-full group-hover:shadow-glow transition-all duration-300"
                  size="lg"
                >
                  Explore Solutions
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 glide-in" style={{ animationDelay: '0.6s' }}>
          <p className="text-muted-foreground mb-4">
            Can't find what you're looking for?
          </p>
          <Button variant="hero" size="lg">
            Request Custom Solution
          </Button>
        </div>
      </div>
    </section>
  );
}