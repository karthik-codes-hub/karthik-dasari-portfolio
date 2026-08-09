import React from 'react';
import { motion } from 'motion/react';
import { SectionHeading } from './SectionHeading';
import { personalInfo } from '../data';

export function About() {
  const stats = [
    { value: "04+", label: "Projects" },
    { value: "10+", label: "Certifications" },
    { value: "03+", label: "Years Learning" }
  ];

  return (
    <section id="about" className="py-20 border-t border-border-main">
      <SectionHeading title="About Me" subtitle="A brief introduction" />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative flex items-center justify-center p-12 bg-bg-card/30 rounded-3xl border border-border-main backdrop-blur-sm overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.1),transparent_70%)]" />
          
          <div className="relative z-10 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-text-main mb-8 tracking-tight">Karthik</h2>
            
            <div className="flex flex-wrap justify-center gap-4 text-sm font-medium text-accent-primary/80">
              <span className="px-4 py-2 rounded-full border border-accent-primary/30 bg-bg-card backdrop-blur-md">AI & Machine Learning</span>
              <span className="px-4 py-2 rounded-full border border-accent-primary/30 bg-bg-card backdrop-blur-md">Data Analytics</span>
              <span className="px-4 py-2 rounded-full border border-accent-primary/30 bg-bg-card backdrop-blur-md">Python / SQL</span>
              <span className="px-4 py-2 rounded-full border border-accent-primary/30 bg-bg-card backdrop-blur-md">CSE AI & ML</span>
              <span className="px-4 py-2 rounded-full border border-accent-primary/30 bg-bg-card backdrop-blur-md">Real-world Solutions</span>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-text-muted text-lg leading-relaxed mb-10">
            {personalInfo.about}
          </p>
          
          <div className="grid grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col">
                <span className="text-4xl font-bold text-text-main mb-2">{stat.value}</span>
                <span className="text-sm font-medium text-accent-primary uppercase tracking-wider">{stat.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
