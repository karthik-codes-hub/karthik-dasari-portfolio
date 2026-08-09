import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { personalInfo } from '../data';
import { Download, ArrowRight, BrainCircuit, Database, LineChart, Code2 } from 'lucide-react';

const Typewriter = ({ words }: { words: string[] }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (index === words.length) {
      setIndex(0);
      return;
    }

    const currentWord = words[index];

    if (subIndex === currentWord.length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 1500);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => prev + 1);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, words]);

  return (
    <span className="text-accent-primary">
      {`${words[index]?.substring(0, subIndex) || ''}`}
      <span className="animate-pulse">|</span>
    </span>
  );
};

export function Hero() {
  const [imgError, setImgError] = useState(false);

  return (
    <section id="home" className="min-h-[90vh] flex flex-col justify-center py-20 relative">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Text Content */}
        <div className="lg:col-span-7 order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-accent-primary font-medium tracking-wide text-lg mb-4">
              Hello, I'm
            </h2>
            <h1 className="text-5xl md:text-7xl font-bold text-text-main mb-4 tracking-tight">
              {personalInfo.name}
            </h1>
            <h3 className="text-2xl md:text-4xl font-semibold text-text-secondary mb-8 h-12">
              <Typewriter words={['Data Analyst', 'AI/ML Engineer', 'Python Developer', 'Data Enthusiast']} />
            </h3>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <a
                href="#projects"
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-cyan-500 text-black font-semibold hover:bg-cyan-400 transition-colors shadow-[0_0_20px_var(--theme-accent-primary)] shadow-accent-primary/30 hover:shadow-[0_0_30px_var(--theme-accent-primary)] shadow-accent-primary/50"
              >
                View My Projects <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-bg-card hover:bg-bg-card-hover text-text-secondary border border-border-main hover:border-accent-primary/50 transition-all backdrop-blur-md"
              >
                <Download className="w-5 h-5" /> Download Resume
              </a>
            </div>

            <div className="flex flex-wrap gap-4">
              {personalInfo.contacts.map((contact, index) => {
                const Icon = contact.icon;
                return (
                  <motion.a
                    key={contact.label}
                    href={contact.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center justify-center w-12 h-12 rounded-full bg-bg-card hover:bg-accent-primary/20 hover:text-accent-primary border border-border-main hover:border-accent-primary/50 text-text-muted transition-all group backdrop-blur-md"
                    title={contact.label}
                  >
                    <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Image/Avatar */}
        <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 flex items-center justify-center"
          >
            {/* Animated Glow */}
            <div className="absolute inset-0 bg-cyan-500 rounded-full blur-[100px] opacity-20 animate-pulse" />
            
            {/* Profile Image container */}
            <div className="absolute inset-4 rounded-full border-2 border-accent-primary/30 overflow-hidden bg-bg-card shadow-[0_0_40px_var(--theme-accent-primary)] flex items-center justify-center z-10">
              <img src="/pass_photo.png" alt={personalInfo.name} className="w-full h-full object-cover" />
            </div>

            {/* Floating Badges */}
            <motion.div 
              animate={{ y: [-10, 10, -10] }} 
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute top-[10%] left-[-5%] z-20 flex items-center gap-2 bg-bg-card backdrop-blur-md border border-accent-primary/30 px-4 py-2 rounded-full shadow-lg"
            >
              <Code2 className="w-4 h-4 text-accent-primary" />
              <span className="text-sm font-medium text-text-main">Python</span>
            </motion.div>

            <motion.div 
              animate={{ y: [10, -10, 10] }} 
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              className="absolute top-[20%] right-[-10%] z-20 flex items-center gap-2 bg-bg-card backdrop-blur-md border border-accent-primary/30 px-4 py-2 rounded-full shadow-lg"
            >
              <Database className="w-4 h-4 text-accent-primary" />
              <span className="text-sm font-medium text-text-main">SQL</span>
            </motion.div>

            <motion.div 
              animate={{ y: [-15, 15, -15] }} 
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 2 }}
              className="absolute bottom-[25%] left-[-15%] z-20 flex items-center gap-2 bg-bg-card backdrop-blur-md border border-accent-primary/30 px-4 py-2 rounded-full shadow-lg"
            >
              <BrainCircuit className="w-4 h-4 text-accent-primary" />
              <span className="text-sm font-medium text-text-main">AI / ML</span>
            </motion.div>

            <motion.div 
              animate={{ y: [15, -15, 15] }} 
              transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 0.5 }}
              className="absolute bottom-[15%] right-[-5%] z-20 flex items-center gap-2 bg-bg-card backdrop-blur-md border border-accent-primary/30 px-4 py-2 rounded-full shadow-lg"
            >
              <LineChart className="w-4 h-4 text-accent-primary" />
              <span className="text-sm font-medium text-text-main">Data Analytics</span>
            </motion.div>

          </motion.div>
        </div>

      </div>
    </section>
  );
}
