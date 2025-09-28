import React from 'react';
import { Button } from "@/components/ui/button";

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  features: string[];
  delay?: number;
}

function ServiceCard({ icon, title, description, features, delay = 0 }: ServiceCardProps) {
  return (
    <div 
      className="premium-card p-8 glide-hover glide-in" 
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="text-6xl mb-6">{icon}</div>
      <h3 className="text-2xl font-bold mb-4 glow-text">{title}</h3>
      <p className="text-muted-foreground mb-6 leading-relaxed">{description}</p>
      
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
            <span className="text-sm text-muted-foreground">{feature}</span>
          </li>
        ))}
      </ul>
      
      <Button variant="outline" className="w-full">
        Explore Solutions
      </Button>
    </div>
  );
}

export default function ServicesSection() {
  const salesMarketingFeatures = [
    "AI Lead Scoring & Prospect Enrichment",
    "24/7 Conversational AI Assistants", 
    "Automated Email & Content Generation",
    "Predictive Campaign Intelligence",
    "Customer Segmentation & Churn Prediction",
    "Real-time Sentiment Analysis"
  ];

  const ecommerceFeatures = [
    "Automated Product Description Generation",
    "AI Shopping Assistant Bots",
    "Dynamic Pricing & Demand Forecasting", 
    "Personalized Recommendation Engines",
    "Review Intelligence & Sentiment Mining",
    "Fraud Detection & Risk Management"
  ];

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-10 w-64 h-64 bg-gradient-glow rounded-full opacity-10 floating-element" />
        <div className="absolute bottom-1/4 left-10 w-48 h-48 bg-gradient-glow rounded-full opacity-15 floating-element" style={{ animationDelay: '3s' }} />
      </div>
      
      <div className="container mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 glide-in">
            <span className="glow-text">Premium AI Solutions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed glide-in" style={{ animationDelay: '0.2s' }}>
            Specialized AI agents designed for high-impact business domains. 
            Start with our MVP focus areas and scale across your organization.
          </p>
        </div>
        
        {/* Service cards grid */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <ServiceCard
            icon="📈"
            title="Sales & Marketing AI"
            description="Revolutionize your sales and marketing operations with intelligent automation and predictive insights."
            features={salesMarketingFeatures}
            delay={0.4}
          />
          
          <ServiceCard
            icon="🛒"
            title="Retail & E-Commerce AI"
            description="Transform your online business with AI-powered product intelligence and customer experience optimization."
            features={ecommerceFeatures}
            delay={0.6}
          />
        </div>
        
        {/* Future expansion teaser */}
        <div className="text-center mt-16">
          <div className="premium-card p-8 max-w-4xl mx-auto glide-in" style={{ animationDelay: '0.8s' }}>
            <h3 className="text-2xl font-bold mb-4 glow-text">Coming Soon</h3>
            <p className="text-muted-foreground mb-6">
              Expanding to Healthcare AI, Financial Services, HR & Talent Management, 
              Supply Chain Optimization, and Customer Service Automation.
            </p>
            <Button variant="ghost" className="text-accent">
              Join Waitlist for New Domains
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}