import React from 'react';
import { motion } from 'motion/react';
import { SectionHeading } from './SectionHeading';
import { certificates } from '../data';
import { Award, ArrowRight } from 'lucide-react';

export function Certificates() {
  return (
    <section id="certificates" className="py-20 border-t border-border-main">
      <SectionHeading title="Certifications" subtitle="Continuous learning & professional development" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12">
        {certificates.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ y: -4, scale: 1.02 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className="group flex items-center justify-between p-5 bg-bg-card/30 border border-border-main rounded-2xl hover:border-accent-primary/30 hover:-translate-y-1 transition-all backdrop-blur-sm cursor-pointer"
          >
            <div className="flex items-center gap-4">
              <div className="p-2 bg-bg-card text-accent-primary rounded-lg group-hover:scale-110 group-hover:text-accent-primary transition-all border border-border-main group-hover:border-accent-primary/30">
                <Award className="w-6 h-6" />
              </div>
              <span className="font-medium text-text-secondary group-hover:text-text-main transition-colors">
                {cert}
              </span>
            </div>
            
            <ArrowRight className="w-5 h-5 text-zinc-600 group-hover:text-accent-primary opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
