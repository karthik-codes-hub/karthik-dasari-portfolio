import React from 'react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { WhatIDo } from './components/WhatIDo';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { Projects } from './components/Projects';
import { Certificates } from './components/Certificates';
import { Achievements } from './components/Achievements';
import { Exploring } from './components/Exploring';
import { Contact } from './components/Contact';
import { Navbar } from './components/Navbar';
import { Cursor } from './components/Cursor';
import { BackgroundEffect } from './components/BackgroundEffect';
import { Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from './data';
import { ThemeProvider } from './components/ThemeProvider';

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark">
      <div className="min-h-screen bg-bg-main text-text-secondary font-sans selection:bg-cyan-500/30">
        <BackgroundEffect />
        <Cursor />
        <Navbar />

        {/* Main Content */}
        <main className="relative z-10 max-w-6xl mx-auto px-6 sm:px-10 lg:px-12 pt-20 pb-20 space-y-24">
          <Hero />
          <About />
          <WhatIDo />
          <Skills />
          <Projects />
          <Education />
          <Certificates />
          <Achievements />
          <Exploring />
          <Contact />
        </main>

        {/* Footer */}
        <footer className="relative z-10 border-t border-border-main bg-bg-card backdrop-blur-md">
          <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-text-muted text-sm font-medium">
              © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
            </p>
            <div className="flex gap-4">
              <a href={personalInfo.contacts.find(c => c.label === 'GitHub')?.url} target="_blank" rel="noreferrer" className="p-2 text-text-muted hover:text-accent-primary bg-bg-card hover:bg-zinc-200 dark:hover:bg-zinc-800 rounded-full transition-all">
                <Github className="w-5 h-5" />
              </a>
              <a href={personalInfo.contacts.find(c => c.label === 'LinkedIn')?.url} target="_blank" rel="noreferrer" className="p-2 text-text-muted hover:text-accent-primary bg-bg-card hover:bg-zinc-200 dark:hover:bg-zinc-800 rounded-full transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href={personalInfo.contacts.find(c => c.label === 'Email')?.url} className="p-2 text-text-muted hover:text-accent-primary bg-bg-card hover:bg-zinc-200 dark:hover:bg-zinc-800 rounded-full transition-all">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
}
