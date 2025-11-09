'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { toast } from 'sonner';

import { supabase } from '@/lib/supabaseClient'; // ✅ Ensure this file is configured properly

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

// ✅ Validation schema
const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  phone: z.string().optional(),
  fitnessGoal: z.string().min(1, { message: 'Please select a fitness goal.' }),
  message: z.string().optional(),
});

type ContactFormValues = z.infer<typeof formSchema>;

const ContactFormSection = () => {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      fitnessGoal: '',
      message: '',
    },
  });

  // ✅ Supabase + n8n webhook integration
  const onSubmit = async (values: ContactFormValues) => {
    try {
      toast.loading('Submitting your inquiry...');

      // 1️⃣ Insert data into Supabase
      const { error } = await supabase.from('leads').insert([
        {
          name: values.name,
          email: values.email,
          phone: values.phone,
          fitness_goal: values.fitnessGoal, // match your DB column
          message: values.message,
        },
      ]);

      if (error) throw error;

      // 2️⃣ Call n8n webhook (non-blocking)
      try {
        await fetch("http://localhost:5678/webhook/4244f88b-7fe7-4e7e-8528-dfa319ccf266", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            Name: values.name,
            Email: values.email,
            Phone: values.phone,
            Goal: values.fitnessGoal,
            Message: values.message,
          }),
        });
      } catch (err) {
        console.warn("n8n webhook call failed (non-blocking):", err);
      }

      // 3️⃣ Success feedback
      toast.dismiss();
      toast.success('Your message has been sent!', {
        description: 'We will get back to you shortly.',
      });

      form.reset();
    } catch (error) {
      console.error('Supabase insert error:', error);
      toast.dismiss();
      toast.error('Failed to send message.', {
        description: 'Please try again later.',
      });
    }
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-surface to-background text-foreground rounded-t-[3rem] shadow-inner mt-16"
    >
      <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
        <h2
          className="text-4xl md:text-5xl font-extrabold mb-6 text-primary animate-fade-in-up"
          style={{ animationDelay: '0.1s' }}
        >
          Get Started Today
        </h2>
        <p
          className="text-lg text-textSecondary mb-12 animate-fade-in-up"
          style={{ animationDelay: '0.3s' }}
        >
          Ready to transform your body and mind? Fill out the form below to book your free trial or inquire about our programs.
        </p>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 bg-background p-8 md:p-12 rounded-2xl shadow-2xl border border-border animate-fade-in-up"
            style={{ animationDelay: '0.5s' }}
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg text-foreground">Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="John Doe"
                      {...field}
                      className="h-12 text-base bg-surface border-border focus:border-primary transition-colors"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg text-foreground">Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="john.doe@example.com"
                      {...field}
                      className="h-12 text-base bg-surface border-border focus:border-primary transition-colors"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg text-foreground">Phone (Optional)</FormLabel>
                  <FormControl>
                    <Input
                      type="tel"
                      placeholder="(123) 456-7890"
                      {...field}
                      className="h-12 text-base bg-surface border-border focus:border-primary transition-colors"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="fitnessGoal"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg text-foreground">Your Primary Fitness Goal</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="h-12 text-base bg-surface border-border focus:border-primary transition-colors">
                        <SelectValue placeholder="Select a goal" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="bg-surface border-border">
                      <SelectItem value="lose-weight">Weight Loss</SelectItem>
                      <SelectItem value="build-muscle">Muscle Gain</SelectItem>
                      <SelectItem value="improve-endurance">Improve Endurance</SelectItem>
                      <SelectItem value="general-fitness">General Fitness</SelectItem>
                      <SelectItem value="rehabilitation">Rehabilitation</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg text-foreground">Message (Optional)</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Tell us more about your fitness journey..."
                      {...field}
                      rows={5}
                      className="text-base bg-surface border-border focus:border-primary transition-colors"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg rounded-xl shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              Submit Inquiry
            </Button>
          </form>
        </Form>
      </div>
    </section>
  );
};

export default ContactFormSection;
