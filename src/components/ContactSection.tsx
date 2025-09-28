import React from 'react';
import { Button } from "@/components/ui/button";

export default function ContactSection() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-hero opacity-20" />
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section header */}
          <div className="mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 glide-in">
              <span className="glow-text">Ready to Glide</span>
              <br />
              <span className="text-foreground">into AI Excellence?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed glide-in" style={{ animationDelay: '0.2s' }}>
              Join forward-thinking businesses already transforming their operations with Bokle AI's premium solutions.
            </p>
          </div>
          
          {/* Contact cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="premium-card p-8 glide-hover glide-in" style={{ animationDelay: '0.4s' }}>
              <div className="text-4xl mb-4">💼</div>
              <h3 className="text-xl font-semibold mb-3 glow-text">Sales Inquiries</h3>
              <p className="text-muted-foreground mb-4">
                Ready to transform your business with AI? Let's discuss your needs.
              </p>
              <a href="mailto:sales@bokle.in" className="text-accent hover:text-accent/80 transition-colors">
                sales@bokle.in
              </a>
            </div>
            
            <div className="premium-card p-8 glide-hover glide-in" style={{ animationDelay: '0.6s' }}>
              <div className="text-4xl mb-4">🛠️</div>
              <h3 className="text-xl font-semibold mb-3 glow-text">Technical Support</h3>
              <p className="text-muted-foreground mb-4">
                Need help with integration or have technical questions?
              </p>
              <a href="mailto:support@bokle.in" className="text-accent hover:text-accent/80 transition-colors">
                support@bokle.in
              </a>
            </div>
            
            <div className="premium-card p-8 glide-hover glide-in" style={{ animationDelay: '0.8s' }}>
              <div className="text-4xl mb-4">📞</div>
              <h3 className="text-xl font-semibold mb-3 glow-text">General Contact</h3>
              <p className="text-muted-foreground mb-4">
                Have questions or want to learn more about our services?
              </p>
              <a href="mailto:contact@bokle.in" className="text-accent hover:text-accent/80 transition-colors">
                contact@bokle.in
              </a>
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="premium-card p-12 glide-in" style={{ animationDelay: '1s' }}>
            <h3 className="text-2xl font-bold mb-6 glow-text">Start Your AI Journey Today</h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Schedule a personalized demo and discover how Bokle AI can transform your business operations 
              with our curated marketplace of AI solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" className="text-lg px-8 py-6 h-auto">
                Schedule Demo
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 h-auto">
                Explore Marketplace
              </Button>
            </div>
          </div>
          
          {/* Website info */}
          <div className="mt-16 text-center glide-in" style={{ animationDelay: '1.2s' }}>
            <p className="text-muted-foreground">
              Visit our main website at{' '}
              <a href="https://bokle.in" className="text-accent hover:text-accent/80 transition-colors font-medium">
                bokle.in
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}