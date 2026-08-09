import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SectionHeading } from './SectionHeading';
import { projects } from '../data';
import { ExternalLink, Github, X, ArrowRight } from 'lucide-react';

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  // Identify featured project
  const featuredProject = projects.find(p => p.title === "Brain Tumor Detection");
  const standardProjects = projects.filter(p => p.title !== "Brain Tumor Detection");

  return (
    <section id="projects" className="py-20 border-t border-border-main">
      <SectionHeading title="Featured Projects" subtitle="Some things I've built" />
      
      {/* Featured Project */}
      {featuredProject && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ y: -8, scale: 1.01 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 mb-12 group relative rounded-3xl overflow-hidden transition-all flex flex-col md:flex-row min-h-[400px] border border-border-main hover:border-accent-primary/50"
        >
          {/* Background Image & Overlay */}
          <div className="absolute inset-0 z-0">
             <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${featuredProject.bgImage})` }}
              />
             <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/60 md:bg-gradient-to-r md:from-black md:via-black/80 md:to-transparent z-10" />
          </div>

          <div className="relative z-20 p-8 md:p-12 flex flex-col justify-center w-full md:w-1/2">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-cyan-500/20 text-accent-primary text-xs font-bold uppercase tracking-wider rounded-full border border-accent-primary/30">
                Featured Project
              </span>
            </div>
            
            <h3 className="text-3xl md:text-4xl font-bold text-text-main mb-4 group-hover:text-accent-primary transition-colors">
              {featuredProject.title}
            </h3>
            
            <p className="text-text-secondary text-lg mb-8 leading-relaxed font-medium">
              Deep Learning-based MRI image classification system using CNN + ResNet50.
            </p>

            <button 
              onClick={() => setSelectedProject(featuredProject)}
              className="self-start flex items-center gap-2 px-6 py-3 rounded-full bg-cyan-500 text-black font-semibold hover:bg-cyan-400 transition-colors shadow-[0_0_20px_rgba(6,182,212,0.2)]"
            >
              View Case Study <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      )}

      {/* Standard Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {standardProjects.map((project, index) => {
          const Icon = project.icon;
          return (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -8 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-2xl overflow-hidden transition-all flex flex-col h-[400px] border border-border-main hover:border-accent-primary/30 hover:-translate-y-2"
            >
              {/* Background Image & Overlay */}
              <div 
                className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${project.bgImage})` }}
              />
              <div className="absolute inset-0 z-0 bg-gradient-to-t from-black via-black/90 to-black/40 group-hover:via-black/80 transition-colors duration-500" />

              {/* Content */}
              <div className="relative z-10 p-8 flex flex-col h-full">
                <div className="flex justify-between items-start mb-auto">
                  <div className="p-3 bg-bg-card text-accent-primary rounded-xl backdrop-blur-md border border-accent-primary/30 group-hover:border-accent-primary/50 transition-colors">
                    <Icon className="w-8 h-8" />
                  </div>
                  <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity translate-x-4 group-hover:translate-x-0 duration-300">
                    {project.link && (
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-text-secondary hover:text-accent-primary transition-colors p-3 bg-bg-card rounded-full backdrop-blur-md border border-border-main hover:border-accent-primary/50"
                        aria-label={`${project.title} link`}
                      >
                        {project.link.includes('github.com') ? (
                          <Github className="w-5 h-5" />
                        ) : (
                          <ExternalLink className="w-5 h-5" />
                        )}
                      </a>
                    )}
                  </div>
                </div>
                
                <div className="mt-auto">
                  <h3 className="text-2xl font-bold text-text-main mb-2 group-hover:text-accent-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.slice(0, 3).map(tech => (
                      <span key={tech} className="text-xs font-semibold text-accent-primary bg-cyan-950/60 border border-accent-primary/30 backdrop-blur-md px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-xs font-semibold text-text-muted bg-bg-card/60 border border-border-main backdrop-blur-md px-2 py-1 rounded">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  <button 
                    onClick={() => setSelectedProject(project)}
                    className="flex items-center gap-2 text-sm font-semibold text-text-secondary hover:text-accent-primary transition-colors group-hover:translate-x-2 duration-300"
                  >
                    View Project <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] flex items-center justify-center p-4 sm:p-6 bg-bg-card backdrop-blur-md overflow-y-auto"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="bg-bg-card border border-border-main rounded-3xl w-full max-w-4xl relative shadow-2xl overflow-hidden my-auto"
              onClick={e => e.stopPropagation()}
            >
              {/* Modal Hero Image */}
              <div className="relative h-64 sm:h-80 w-full bg-bg-card-hover">
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${selectedProject.bgImage})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent" />
                
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-6 right-6 p-2 text-text-secondary hover:text-white bg-bg-card hover:bg-white hover:bg-bg-card-hover border border-border-main rounded-full transition-all backdrop-blur-md z-10"
                >
                  <X className="w-6 h-6" />
                </button>
                
                <div className="absolute bottom-6 left-6 md:bottom-8 md:left-10 pr-6">
                  <h2 className="text-3xl md:text-5xl font-bold text-white mb-2">{selectedProject.title}</h2>
                </div>
              </div>
              
              {/* Modal Content */}
              <div className="p-6 md:p-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                  
                  <div className="md:col-span-2 space-y-8">
                    <div>
                      <h4 className="text-xl font-bold text-text-main mb-3">Overview</h4>
                      <p className="text-text-muted text-lg leading-relaxed">
                        {selectedProject.description}
                      </p>
                    </div>

                    {selectedProject.title === "Brain Tumor Detection" && (
                      <div className="space-y-6">
                        <div>
                          <h4 className="text-lg font-bold text-text-main mb-2">Approach</h4>
                          <div className="flex flex-col gap-3 relative before:absolute before:inset-0 before:ml-[11px] before:w-0.5 before:bg-bg-card-hover">
                            {["Dataset Collection", "Preprocessing & Augmentation", "CNN / ResNet50 Architecture", "Training & Fine-tuning", "Evaluation"].map((step, i) => (
                              <div key={i} className="relative flex items-center gap-4">
                                <div className="w-6 h-6 rounded-full bg-bg-card border-2 border-accent-primary z-10 shrink-0" />
                                <span className="text-text-secondary">{step}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {selectedProject.title === "Email Spam Classifier" && (
                      <div className="space-y-6">
                        <div>
                          <h4 className="text-lg font-bold text-text-main mb-2">Approach</h4>
                          <div className="flex flex-col gap-3 relative before:absolute before:inset-0 before:ml-[11px] before:w-0.5 before:bg-bg-card-hover">
                            {["Text Preprocessing", "Feature Extraction", "Naive Bayes Classification", "Batch Classification"].map((step, i) => (
                              <div key={i} className="relative flex items-center gap-4">
                                <div className="w-6 h-6 rounded-full bg-bg-card border-2 border-accent-primary z-10 shrink-0" />
                                <span className="text-text-secondary">{step}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="md:col-span-1 space-y-8">
                    <div className="bg-bg-card rounded-2xl p-6 border border-border-main">
                      <h4 className="text-sm font-bold text-text-muted uppercase tracking-wider mb-4">Tech Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.technologies.map(tech => (
                          <span 
                            key={tech}
                            className="px-3 py-1.5 bg-bg-card border border-border-main text-text-secondary text-sm rounded-lg"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col gap-4">
                      {selectedProject.link && (
                        <a 
                          href={selectedProject.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-cyan-500 hover:bg-cyan-400 text-black font-bold rounded-xl transition-colors"
                        >
                          <Github className="w-5 h-5" /> View on GitHub
                        </a>
                      )}
                    </div>
                  </div>
                  
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
