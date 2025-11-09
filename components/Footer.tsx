import React from 'react';
import Link from 'next/link';
import { Dumbbell, Instagram, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-surface text-textSecondary py-12 mt-16 border-t border-border">
      <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <Link href="/" className="flex items-center space-x-2 mb-4">
            <Dumbbell className="h-7 w-7 text-primary" />
            <span className="text-3xl font-extrabold text-foreground">FitNex</span>
          </Link>
          <p className="text-sm max-w-xs">
            Empowering your fitness journey with smart training and dedicated support.
          </p>
        </div>

        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h3 className="text-lg font-semibold text-foreground mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link href="#about" className="hover:text-primary transition-colors">About Us</Link></li>
            <li><Link href="#programs" className="hover:text-primary transition-colors">Programs</Link></li>
            <li><Link href="#contact" className="hover:text-primary transition-colors">Contact</Link></li>
            <li><Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
          </ul>
        </div>

        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h3 className="text-lg font-semibold text-foreground mb-4">Connect With Us</h3>
          <div className="flex space-x-4 mb-4">
            <a href="#" aria-label="Instagram" className="text-textSecondary hover:text-primary transition-colors">
              <Instagram className="h-6 w-6" />
            </a>
            <a href="#" aria-label="Twitter" className="text-textSecondary hover:text-primary transition-colors">
              <Twitter className="h-6 w-6" />
            </a>
            <a href="#" aria-label="Facebook" className="text-textSecondary hover:text-primary transition-colors">
              <Facebook className="h-6 w-6" />
            </a>
          </div>
          <p className="text-sm">&copy; {new Date().getFullYear()} FitNex. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
