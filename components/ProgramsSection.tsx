import React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { User, Users } from 'lucide-react';

const ProgramsSection = () => {
  return (
    <section id="programs" className="py-20 bg-background text-foreground">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-primary animate-fade-in-up" style={{ animationDelay: '0.1s' }}>Our Programs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <Card className="bg-surface border-border rounded-xl overflow-hidden shadow-xl transition-transform duration-300 hover:scale-[1.02] hover:shadow-2xl animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="relative h-60 w-full">
              <Image
                src="https://images.pexels.com/photos/416778/pexels-photo-416778.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Personal Training"
                fill
                style={{ objectFit: 'cover' }}
                className="transition-transform duration-500 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface/70 to-transparent"></div>
              <User className="absolute bottom-4 left-4 h-10 w-10 text-primary z-10" />
            </div>
            <CardHeader className="text-left">
              <CardTitle className="text-3xl text-foreground">Personal Training</CardTitle>
              <CardDescription className="text-textSecondary text-lg">
                Tailored workouts and one-on-one coaching to meet your unique fitness goals.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-left">
              <ul className="list-disc list-inside text-textSecondary space-y-2 mb-6">
                <li>Customized workout plans</li>
                <li>Nutritional guidance</li>
                <li>Progress tracking & adjustments</li>
                <li>Expert certified trainers</li>
              </ul>
              <Button asChild className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-lg shadow-md transition-all duration-300 ease-in-out transform hover:scale-[1.02]">
                <Link href="#contact">Learn More</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-surface border-border rounded-xl overflow-hidden shadow-xl transition-transform duration-300 hover:scale-[1.02] hover:shadow-2xl animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            <div className="relative h-60 w-full">
              <Image
                src="https://images.pexels.com/photos/38630/bodybuilder-weight-training-stress-38630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Group Classes"
                fill
                style={{ objectFit: 'cover' }}
                className="transition-transform duration-500 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface/70 to-transparent"></div>
              <Users className="absolute bottom-4 left-4 h-10 w-10 text-accent z-10" />
            </div>
            <CardHeader className="text-left">
              <CardTitle className="text-3xl text-foreground">Group Classes</CardTitle>
              <CardDescription className="text-textSecondary text-lg">
                Energizing group sessions designed to motivate and challenge you in a fun environment.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-left">
              <ul className="list-disc list-inside text-textSecondary space-y-2 mb-6">
                <li>Variety of classes (Yoga, HIIT, Spin)</li>
                <li>Community support & motivation</li>
                <li>Experienced instructors</li>
                <li>Flexible scheduling options</li>
              </ul>
              <Button asChild className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-lg shadow-md transition-all duration-300 ease-in-out transform hover:scale-[1.02]">
                <Link href="#contact">View Schedule</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
