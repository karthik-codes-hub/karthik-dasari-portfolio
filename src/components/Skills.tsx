import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SectionHeading } from './SectionHeading';
import { skills } from '../data';
import { ChevronRight, X } from 'lucide-react';

export function Skills() {
  const categories = Array.from(new Set(skills.map(s => s.category)));
  const [selectedSkill, setSelectedSkill] = useState<typeof skills[0] | null>(null);

  return (
    <section id="skills" className="py-20 border-t border-border-main relative">
      <SectionHeading title="Technical Skills" subtitle="Technologies and tools I work with" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
        {categories.map((category, catIndex) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -4, scale: 1.02 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: catIndex * 0.1 }}
            className="bg-bg-card/40 border border-border-main rounded-2xl p-6 hover:border-accent-primary/30 transition-all backdrop-blur-sm"
          >
            <h3 className="text-lg font-semibold text-text-main mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-500" />
              {category}
            </h3>
            <div className="flex flex-col gap-3">
              {skills
                .filter(skill => skill.category === category)
                .map((skill) => (
                  <button
                    key={skill.name}
                    onClick={() => setSelectedSkill(skill)}
                    className="flex items-center justify-between px-4 py-3 bg-bg-card text-text-secondary rounded-xl text-sm font-medium border border-border-main hover:border-accent-primary/50 hover:text-accent-primary transition-all group text-left"
                  >
                    {skill.name}
                    <ChevronRight className="w-4 h-4 text-zinc-600 group-hover:text-accent-primary transition-colors" />
                  </button>
                ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Skill Detail Modal */}
      <AnimatePresence>
        {selectedSkill && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] flex items-center justify-center p-4 bg-bg-card backdrop-blur-sm"
            onClick={() => setSelectedSkill(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-bg-card border border-border-main rounded-2xl p-8 max-w-sm w-full relative shadow-2xl"
              onClick={e => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedSkill(null)}
                className="absolute top-4 right-4 p-2 text-text-muted hover:text-accent-primary bg-bg-card rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="mb-6">
                <h3 className="text-3xl font-bold text-text-main mb-2">{selectedSkill.name}</h3>
                <span className="inline-block px-3 py-1 bg-cyan-950/50 border border-accent-primary/30 text-accent-primary text-xs font-semibold rounded-full tracking-wide uppercase">
                  {selectedSkill.level}
                </span>
              </div>
              
              <div>
                <h4 className="text-sm font-medium text-text-muted mb-4 uppercase tracking-wider">Related Skills / Libraries</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedSkill.details.map(detail => (
                    <span 
                      key={detail}
                      className="px-3 py-1.5 bg-bg-card border border-border-main text-text-secondary text-sm rounded-lg"
                    >
                      {detail}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
