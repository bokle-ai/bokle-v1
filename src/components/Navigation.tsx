import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import bokleLogo from '@/assets/image.png';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Solutions', href: '#solutions' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-2xl border-b border-green-600/30 shadow-[0_4px_20px_rgba(22,163,74,0.2)]">
      {/* Subtle green glow at top */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-green-500/50 to-transparent" />

      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img
              src={bokleLogo}
              alt="Bokle AI"
              className="h-10 filter drop-shadow-[0_0_12px_rgba(22,163,74,0.4)] transition-all duration-300 hover:drop-shadow-[0_0_20px_rgba(34,197,94,0.6)]"
            />
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="relative text-foreground/80 hover:text-foreground font-medium transition-all duration-300 group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-green-600 to-green-400 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              variant="ghost"
              size="sm"
              className="text-foreground/80 hover:text-foreground hover:bg-green-600/10 border border-transparent hover:border-green-600/30 transition-all duration-300"
            >
              Sign In
            </Button>
            <Button
              variant="default"
              size="sm"
              className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white font-semibold shadow-[0_0_20px_rgba(22,163,74,0.3)] hover:shadow-[0_0_30px_rgba(22,163,74,0.5)] transition-all duration-300"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-foreground/80 hover:text-green-500 transition-all duration-300 hover:bg-green-600/10 rounded-lg"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1.5">
              <div className={`w-full h-0.5 bg-current transform transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <div className={`w-full h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
              <div className={`w-full h-0.5 bg-current transform transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>
        
        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-80 mt-4' : 'max-h-0'}`}>
          <div className="backdrop-blur-2xl bg-card/40 border border-green-600/20 rounded-2xl p-6 space-y-4 shadow-[0_0_20px_rgba(22,163,74,0.2)]">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block text-foreground/80 hover:text-foreground font-medium transition-all duration-300 hover:translate-x-2 hover:text-green-500"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4 space-y-3 border-t border-green-600/20">
              <Button
                variant="ghost"
                size="sm"
                className="w-full text-foreground/80 hover:text-foreground hover:bg-green-600/10 border border-transparent hover:border-green-600/30"
              >
                Sign In
              </Button>
              <Button
                variant="default"
                size="sm"
                className="w-full bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white font-semibold shadow-[0_0_20px_rgba(22,163,74,0.3)]"
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}