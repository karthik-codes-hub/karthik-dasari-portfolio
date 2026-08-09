import React from 'react';
import { motion } from 'motion/react';
import { SectionHeading } from './SectionHeading';
import { whatIDo } from '../data';

export function WhatIDo() {
  return (
    <section id="whatido" className="py-20 border-t border-border-main">
      <SectionHeading title="What I Do" subtitle="My core competencies and areas of focus" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
        {whatIDo.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -5 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-bg-card/30 border border-border-main rounded-2xl p-8 hover:border-accent-primary/50 transition-all hover:-translate-y-1 overflow-hidden backdrop-blur-sm"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700" />
              
              <div className="relative z-10 flex items-start gap-6">
                <div className="p-4 bg-bg-card border border-border-main rounded-xl text-accent-primary group-hover:border-accent-primary/30 group-hover:bg-accent-primary/10 transition-colors backdrop-blur-md">
                  <Icon className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-text-main mb-3 group-hover:text-accent-primary transition-colors">{item.title}</h3>
                  <p className="text-text-muted leading-relaxed">{item.description}</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
