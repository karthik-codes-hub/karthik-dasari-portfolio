import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SectionHeading } from './SectionHeading';
import { education } from '../data';
import { GraduationCap, Calendar, Trophy, ChevronDown } from 'lucide-react';

export function Education() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section id="education" className="py-20 border-t border-border-main">
      <SectionHeading title="Education" subtitle="My academic journey" />
      
      <div className="relative mt-12 pl-4 md:pl-0">
        {/* Timeline Line */}
        <div className="absolute left-[27px] md:left-1/2 top-0 bottom-0 w-px bg-bg-card-hover/50 md:-translate-x-1/2 hidden sm:block" />

        <div className="space-y-12">
          {education.map((item, index) => {
            const isEven = index % 2 === 0;
            const isExpanded = expandedIndex === index;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row gap-8 md:gap-16 items-center ${isEven ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-[15px] md:left-1/2 w-6 h-6 rounded-full bg-bg-main border-4 border-accent-primary z-10 md:-translate-x-1/2 shrink-0 hidden sm:block shadow-[0_0_10px_var(--theme-accent-primary)] shadow-accent-primary/50" />

                {/* Content */}
                <div className={`w-full md:w-1/2 ${isEven ? 'md:text-left' : 'md:text-right'}`}>
                  <div 
                    className="group relative bg-bg-card/40 border border-border-main rounded-2xl overflow-hidden hover:border-accent-primary/30 transition-all cursor-pointer backdrop-blur-sm"
                    onClick={() => setExpandedIndex(isExpanded ? null : index)}
                  >
                    {/* Background Image */}
                    <div 
                      className="absolute inset-0 z-0 opacity-10 mix-blend-overlay bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                      style={{ backgroundImage: `url(${item.bgImage})` }}
                    />

                    <div className="relative z-10 p-6 md:p-8">
                      <div className={`flex flex-col gap-4 mb-4 ${isEven ? 'items-start' : 'items-start md:items-end'}`}>
                        <div className="p-3 bg-cyan-500/10 text-accent-primary rounded-xl backdrop-blur-md">
                          <GraduationCap className="w-6 h-6" />
                        </div>
                        
                        <div>
                          <h3 className="text-xl md:text-2xl font-bold text-text-main group-hover:text-accent-primary transition-colors">
                            {item.degree}
                          </h3>
                          <p className="text-text-muted font-medium mt-1">{item.institution}</p>
                        </div>
                      </div>

                      <div className={`flex flex-col gap-2 ${isEven ? 'items-start' : 'items-start md:items-end'}`}>
                        <div className="flex items-center gap-2 text-text-muted text-sm">
                          <Calendar className="w-4 h-4" />
                          <span>{item.period}</span>
                        </div>
                        <div className="flex items-center gap-2 text-accent-primary/80 text-sm font-medium">
                          <Trophy className="w-4 h-4" />
                          <span>{item.score}</span>
                        </div>
                      </div>

                      {item.coursework && (
                        <div className={`mt-6 flex ${isEven ? 'justify-start' : 'justify-start md:justify-end'}`}>
                          <div className="flex items-center gap-2 text-sm text-text-muted group-hover:text-accent-primary transition-colors">
                            {isExpanded ? 'Hide Coursework' : 'View Coursework'}
                            <ChevronDown className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                          </div>
                        </div>
                      )}
                    </div>
                    
                    {/* Expandable Coursework */}
                    <AnimatePresence>
                      {isExpanded && item.coursework && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="border-t border-border-main bg-bg-card relative z-10"
                        >
                          <div className="p-6 md:p-8">
                            <h4 className={`text-sm font-bold text-text-secondary uppercase tracking-wider mb-4 ${isEven ? 'text-left' : 'text-left md:text-right'}`}>
                              Relevant Coursework
                            </h4>
                            <div className={`flex flex-wrap gap-2 ${isEven ? 'justify-start' : 'justify-start md:justify-end'}`}>
                              {item.coursework.map(course => (
                                <span key={course} className="px-3 py-1.5 bg-bg-card border border-border-main text-text-muted text-sm rounded-lg">
                                  {course}
                                </span>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                {/* Empty space for the other side */}
                <div className="hidden md:block w-1/2" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
