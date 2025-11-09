import React from 'react';
import { Target, Heart, Zap } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-surface text-foreground rounded-xl shadow-lg mx-auto max-w-6xl -mt-16 relative z-30 p-8 md:p-12 animate-fade-in-up" style={{ animationDelay: '0.9s' }}>
      <div className="container mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-primary">Our Philosophy</h2>
        <p className="text-lg md:text-xl text-textSecondary max-w-3xl mx-auto leading-relaxed mb-12">
          At FitNex, we believe fitness is a journey of self-improvement, not just a destination. We combine scientific principles with personalized care to help you achieve sustainable results and a healthier lifestyle.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          <div className="flex flex-col items-center p-6 bg-background rounded-xl shadow-md border border-border transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <Target className="h-12 w-12 text-accent mb-4" />
            <h3 className="text-xl font-bold text-foreground mb-2">Goal-Oriented</h3>
            <p className="text-textSecondary text-center">
              Every program is designed with your specific aspirations in mind.
            </p>
          </div>
          <div className="flex flex-col items-center p-6 bg-background rounded-xl shadow-md border border-border transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <Heart className="h-12 w-12 text-secondary mb-4" />
            <h3 className="text-xl font-bold text-foreground mb-2">Holistic Wellness</h3>
            <p className="text-textSecondary text-center">
              We focus on mind, body, and spirit for complete well-being.
            </p>
          </div>
          <div className="flex flex-col items-center p-6 bg-background rounded-xl shadow-md border border-border transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <Zap className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-bold text-foreground mb-2">Empowering Community</h3>
            <p className="text-textSecondary text-center">
              Join a supportive network that motivates and inspires.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
