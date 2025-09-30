import React from 'react';
import { Button } from "@/components/ui/button";
import { Mail, Phone, MessageSquare, Briefcase, Wrench } from "lucide-react";

export default function ContactSection() {
  const contactOptions = [
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Sales Inquiries",
      description: "Ready to transform your business with AI? Let's discuss your needs.",
      email: "sales@bokle.in",
      gradient: "from-primary to-accent",
      iconBg: "bg-gradient-to-br from-primary to-accent"
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Technical Support",
      description: "Need help with integration or have technical questions?",
      email: "support@bokle.in",
      gradient: "from-accent to-primary-glow",
      iconBg: "bg-gradient-to-br from-accent to-primary-glow"
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: "General Contact",
      description: "Have questions or want to learn more about our services?",
      email: "contact@bokle.in",
      gradient: "from-primary-glow to-primary",
      iconBg: "bg-gradient-to-br from-primary-glow to-primary"
    }
  ];

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/95 to-background" />
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="relative container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 glide-in">
          <div className="inline-block px-4 py-2 rounded-full glass-card border border-primary/20 mb-6">
            <span className="text-sm text-primary-glow font-semibold">📬 Get in Touch</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="glow-text">Let's Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the best way to reach us. Our team is ready to help you glide into the future of AI.
          </p>
        </div>

        {/* Contact Options Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {contactOptions.map((option, index) => (
            <div
              key={index}
              className="group glide-in glide-hover"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Gradient glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${option.gradient} opacity-0 group-hover:opacity-20 rounded-3xl blur-2xl transition-all duration-500`} />
              
              {/* Card */}
              <div className="relative glass-card-premium p-8 rounded-3xl border-2 border-primary/10 group-hover:border-primary/30 transition-all duration-500 h-full flex flex-col">
                {/* Icon */}
                <div className={`inline-flex w-16 h-16 items-center justify-center rounded-2xl ${option.iconBg} mb-6 text-background shadow-glow group-hover:scale-110 transition-transform duration-300`}>
                  {option.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-3 glow-text">
                  {option.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed flex-grow">
                  {option.description}
                </p>

                {/* Email */}
                <a
                  href={`mailto:${option.email}`}
                  className="inline-flex items-center gap-2 text-primary-glow hover:text-accent transition-colors duration-300 font-semibold group/link"
                >
                  <Mail className="w-5 h-5" />
                  <span className="group-hover/link:translate-x-1 transition-transform">
                    {option.email}
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Call-to-Action Banner */}
        <div className="relative glide-in" style={{ animationDelay: '0.6s' }}>
          {/* Gradient background */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary-glow opacity-10 rounded-3xl blur-2xl" />
          
          <div className="relative glass-card-premium p-12 rounded-3xl border-2 border-primary/20 text-center">
            <MessageSquare className="w-16 h-16 mx-auto mb-6 text-primary-glow" />
            <h3 className="text-3xl font-bold mb-4">
              <span className="glow-text">Schedule a Demo</span>
            </h3>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              See Bokle AI in action. Book a personalized demo and discover how our AI solutions can transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" className="text-lg px-8">
                Book a Demo
              </Button>
              <Button variant="premium" size="lg" className="text-lg px-8">
                View Documentation
              </Button>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-12 glide-in" style={{ animationDelay: '0.8s' }}>
          <p className="text-sm text-muted-foreground">
            Average response time: <span className="text-primary-glow font-semibold">Under 2 hours</span> during business hours
          </p>
        </div>
      </div>
    </section>
  );
}