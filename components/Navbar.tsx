'use client';

import React from 'react';
import Link from 'next/link';
import { Dumbbell } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-lg">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center space-x-2 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <Dumbbell className="h-6 w-6 text-primary" />
          <span className="text-2xl font-extrabold text-foreground">FitNex</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="#hero" className="text-sm font-medium text-textSecondary hover:text-primary transition-colors animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Home
          </Link>
          <Link href="#about" className="text-sm font-medium text-textSecondary hover:text-primary transition-colors animate-fade-in" style={{ animationDelay: '0.3s' }}>
            About
          </Link>
          <Link href="#programs" className="text-sm font-medium text-textSecondary hover:text-primary transition-colors animate-fade-in" style={{ animationDelay: '0.4s' }}>
            Programs
          </Link>
          <Link href="#contact" className="text-sm font-medium text-textSecondary hover:text-primary transition-colors animate-fade-in" style={{ animationDelay: '0.5s' }}>
            Contact
          </Link>
        </nav>
        <Button asChild className="hidden md:flex bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <Link href="#contact">Book Free Trial</Link>
        </Button>
        {/* Mobile menu toggle would go here */}
      </div>
    </header>
  );
};

export default Navbar;
