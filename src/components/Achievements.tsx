import React from 'react';
import { motion } from 'motion/react';
import { SectionHeading } from './SectionHeading';
import { achievements } from '../data';
import { ExternalLink, Trophy, Lightbulb, Star } from 'lucide-react';

export function Achievements() {
  const patent = achievements.find(a => a.title.includes("patent"));
  const otherAchievements = achievements.filter(a => !a.title.includes("patent"));

  return (
    <section id="achievements" className="py-20 border-t border-border-main">
      <SectionHeading title="Achievements & Honors" subtitle="Recognition for my work and contributions" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {/* Featured Achievement (Patent) */}
        {patent && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2 lg:col-span-3 group relative rounded-3xl overflow-hidden transition-all flex flex-col md:flex-row min-h-[300px] border border-accent-primary/30 hover:border-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.1)]"
          >
            <div 
              className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url(${patent.bgImage})` }}
            />
            <div className="absolute inset-0 z-0 bg-gradient-to-r from-black via-black/95 to-black/60" />
            
            <div className="relative z-10 p-8 md:p-12 flex flex-col justify-center w-full">
              <div className="flex items-center gap-3 mb-6">
                <span className="px-3 py-1 bg-cyan-500 text-black text-xs font-bold uppercase tracking-wider rounded-full flex items-center gap-2">
                  <Star className="w-3 h-3 fill-white dark:fill-black" />
                  Featured Achievement
                </span>
              </div>
              
              <div className="flex items-start gap-4 md:gap-6 mb-6">
                <div className="p-4 bg-cyan-500/10 text-accent-primary rounded-2xl backdrop-blur-md border border-accent-primary/30">
                  <Lightbulb className="w-8 h-8 md:w-12 md:h-12" />
                </div>
                <div>
                  <h4 className="text-xl md:text-2xl font-medium text-accent-primary mb-2">Published Patent</h4>
                  <h3 className="text-2xl md:text-4xl font-bold text-text-main leading-tight">
                    "Inverse Reinforcement Learning for AI-Guided Post-Surgical Recovery Plans"
                  </h3>
                </div>
              </div>

              {patent.link && (
                <a 
                  href={patent.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-bg-card/80 hover:bg-bg-card-hover text-text-secondary border border-border-main hover:border-accent-primary/50 transition-all self-start mt-4 backdrop-blur-md"
                >
                  View Details <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
          </motion.div>
        )}

        {/* Other Achievements */}
        {otherAchievements.map((achievement, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -5 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative rounded-2xl overflow-hidden border border-border-main hover:border-accent-primary/30 min-h-[200px] flex flex-col"
          >
            <div 
              className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url(${achievement.bgImage})` }}
            />
            <div className="absolute inset-0 z-0 bg-bg-card backdrop-blur-sm group-hover:bg-bg-card transition-colors duration-500" />
            
            <div className="relative z-10 p-8 flex flex-col h-full items-center justify-center text-center">
              <div className="p-3 bg-cyan-500/10 text-accent-primary rounded-xl mb-4 border border-accent-primary/20 group-hover:scale-110 transition-transform">
                <Trophy className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-text-main group-hover:text-accent-primary transition-colors">
                {achievement.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
