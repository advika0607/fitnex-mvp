'use client';

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section id="hero" className="relative h-[70vh] md:h-[85vh] flex items-center justify-center text-center overflow-hidden rounded-b-[3rem] shadow-2xl">
      <Image
        src="https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt="Man lifting weights in a modern gym"
        fill
        style={{ objectFit: 'cover' }}
        priority
        className="z-0 animate-fade-in"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-background/70 via-background/50 to-surface/70 z-10"></div>
      <div className="relative z-20 flex flex-col items-center justify-center p-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-extrabold text-foreground leading-tight mb-6 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          Train Smart with <span className="text-primary drop-shadow-lg">FitNex</span>
        </h1>
        <p className="text-lg md:text-xl text-textSecondary mb-10 max-w-2xl animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          Unlock your full potential with personalized training, cutting-edge facilities, and a supportive community.
        </p>
        <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg rounded-xl shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105 animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
          <Link href="#contact">Book Free Trial</Link>
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
