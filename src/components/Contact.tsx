import React, { useState } from 'react';
import { motion } from 'motion/react';
import { SectionHeading } from './SectionHeading';
import { personalInfo } from '../data';
import { Send, CheckCircle } from 'lucide-react';

export function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would handle the form submission here.
    // For this portfolio, we'll simulate a successful submission.
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-20 border-t border-border-main">
      <SectionHeading title="Get In Touch" subtitle="Let's Build Something Together" />
      
      <div className="max-w-4xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-bold text-text-main mb-4">I'm open to internships, projects, collaborations and opportunities.</h3>
          <p className="text-text-muted mb-8 leading-relaxed">
            Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>

          <div className="space-y-6">
            {personalInfo.contacts.map((contact, index) => {
              const Icon = contact.icon;
              return (
                <a 
                  key={index}
                  href={contact.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-text-secondary hover:text-accent-primary transition-colors group"
                >
                  <div className="p-3 bg-bg-card border border-border-main rounded-xl group-hover:border-accent-primary/50 group-hover:bg-accent-primary/10 transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold">{contact.label}</h4>
                    <p className="text-sm text-text-muted group-hover:text-accent-primary/80 transition-colors">{contact.value}</p>
                  </div>
                </a>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <form onSubmit={handleSubmit} className="bg-bg-card/40 border border-border-main rounded-3xl p-8 backdrop-blur-sm">
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-text-muted mb-2">Name</label>
                <input 
                  type="text" 
                  id="name"
                  required
                  className="w-full bg-bg-card border border-border-main rounded-xl px-4 py-3 text-text-main focus:outline-none focus:border-accent-primary/50 focus:ring-1 focus:ring-cyan-500/50 transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-text-muted mb-2">Email</label>
                <input 
                  type="email" 
                  id="email"
                  required
                  className="w-full bg-bg-card border border-border-main rounded-xl px-4 py-3 text-text-main focus:outline-none focus:border-accent-primary/50 focus:ring-1 focus:ring-cyan-500/50 transition-all"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-text-muted mb-2">Message</label>
                <textarea 
                  id="message"
                  required
                  rows={4}
                  className="w-full bg-bg-card border border-border-main rounded-xl px-4 py-3 text-text-main focus:outline-none focus:border-accent-primary/50 focus:ring-1 focus:ring-cyan-500/50 transition-all resize-none"
                  placeholder="Your message..."
                />
              </div>
              <button 
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-cyan-500 hover:bg-cyan-400 text-black font-bold rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isSubmitted}
              >
                {isSubmitted ? (
                  <>
                    <CheckCircle className="w-5 h-5" /> Message Sent
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" /> Send Message
                  </>
                )}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
