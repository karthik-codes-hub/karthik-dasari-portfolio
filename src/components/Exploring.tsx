import React from 'react';
import { motion } from 'motion/react';
import { currentlyExploring } from '../data';
import { SectionHeading } from './SectionHeading';
import { Sparkles } from 'lucide-react';

export function Exploring() {
  return (
    <section id="exploring" className="py-20 border-t border-border-main">
      <SectionHeading title="Currently Exploring" subtitle="Technologies I am actively learning" />
      
      <div className="flex flex-wrap justify-center gap-4 mt-12">
        {currentlyExploring.map((tech, index) => (
          <motion.div
            key={tech}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex items-center gap-2 px-6 py-3 bg-bg-card/40 border border-border-main rounded-full hover:border-accent-primary/50 hover:bg-accent-primary/10 transition-colors backdrop-blur-sm cursor-default"
          >
            <Sparkles className="w-4 h-4 text-accent-primary" />
            <span className="text-text-secondary font-medium">{tech}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
