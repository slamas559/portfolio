import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Star, GitBranch, Code2, ExternalLink } from 'lucide-react';
// Ensure your image imports remain here exactly as you had them
import project1 from './assets/projects/project1.png';
import project2 from './assets/projects/project2.png';
import project3 from './assets/projects/project3.png';
import project4 from './assets/projects/project4.png';
import project5 from './assets/projects/project5.png';
import project6 from './assets/projects/project6.png';

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [animationKey, setAnimationKey] = useState(0);

  const projects = [
    { id: 1, title: 'boardly', description: 'A collaborative whiteboard application built with modern web technologies, enabling real-time drawing, syncing across users and brainstorming sessions.', image: project6, tags: ['React', 'MongoDB', 'Node.js', 'WebRTC'], category: 'fullstack', live: 'https://boardly-chi.vercel.app/', github: 'https://github.com/slamas559/boardly', featured: true },
    { id: 2, title: 'edusphere', description: 'A social website for educational purposes built using Django and its base templates. Designed using Tailwind CSS with smooth animations and responsive design.', image: project4, tags: ['Django', 'Tailwind', 'Python'], category: 'backend', live: 'https://edusphere-5dmb.onrender.com/', github: 'https://github.com/slamas559/Edusphere', featured: true },
    { id: 3, title: 'p2p-crypto', description: 'A peer-to-peer cryptocurrency exchange platform to facilitate crypto exchange within users, chat feature integration, with a focus on security and user experience.', image: project5, tags: ['React', 'Express', 'Socket.IO'], category: 'fullstack', live: 'https://p2-p-frontend-ruddy.vercel.app/', github: 'https://github.com/slamas559/P2P-frontend', featured: true },
    { id: 4, title: 'portfolio-v2', description: 'A personal portfolio website built using React, Tailwind, and Framer Motion. Smooth animations and responsive design.', image: project1, tags: ['React', 'Tailwind', 'Framer Motion'], category: 'frontend', live: '#', github: '#' },
    { id: 5, title: 'chat-app', description: 'Real-time chat application with private messaging using Python FastAPI and Reactjs.', image: project2, tags: ['FastAPI', 'React', 'WebSocket'], category: 'fullstack', github: 'https://github.com/slamas559/ChatApp' },
    { id: 6, title: 'modern-todo', description: 'A todo website built using Reactjs for frontend, Django Rest Framework for backend. Smooth animations and responsive design.', image: project3, tags: ['React', 'Django REST', 'Tailwind'], category: 'fullstack', live: '#', github: 'https://github.com/slamas559/NoteApp' },
  ];

  const categories = [ { id: 'all', label: 'All' }, { id: 'fullstack', label: 'Full Stack' }, { id: 'frontend', label: 'Frontend' }, { id: 'backend', label: 'Backend' } ];
  const filteredProjects = selectedCategory === 'all' ? projects : projects.filter(p => p.category === selectedCategory);

  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
    setAnimationKey(prev => prev + 1);
  };

  return (
    <div className="bg-[#0d1117] text-gray-300 font-mono py-20 md:py-28">
      <section id="projects" className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-100">
            <span className="text-[var(--accent-color)]">~/</span> projects
          </h2>
          <div className="h-px flex-1 bg-[#30363d]"></div>
        </div>

        {/* Minimalist Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryChange(category.id)}
              className={`px-4 py-2 text-sm rounded-md border transition-all duration-200 ${
                selectedCategory === category.id
                  ? 'bg-[var(--accent-color)]/10 border-[var(--accent-color)]/50 text-[var(--accent-color)]'
                  : 'bg-[#161b22] border-[#30363d] text-gray-400 hover:border-gray-600 hover:text-gray-200'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Project Grid - GitHub Repo Style */}
        <motion.div 
          key={animationKey} 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.3 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ y: -5 }}
              className="bg-[#161b22] border border-[#30363d] rounded-lg overflow-hidden group hover:border-[var(--accent-color)]/30 transition-all duration-300"
            >
              {/* Image Thumbnail */}
              <div className="relative h-44 overflow-hidden bg-[#0d1117] border-b border-[#30363d]">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500" />
                {project.featured && (
                  <div className="absolute top-3 right-3 flex items-center gap-1 bg-[#161b22]/80 backdrop-blur px-2 py-1 rounded-full text-xs text-[var(--accent-color)] border border-[var(--accent-color)]/30">
                    <Star size={10} fill="currentColor" /> Featured
                  </div>
                )}
              </div>

              {/* Repo Content */}
              <div className="p-5 flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-gray-100 group-hover:text-[var(--accent-color)] transition-colors flex items-center gap-2">
                    <Github size={16} className="text-gray-500" /> {project.title}
                  </h3>
                  <GitBranch size={14} className="text-gray-600" />
                </div>
                
                <p className="text-sm text-gray-400 leading-relaxed line-clamp-2 min-h-[40px]">
                  {project.description}
                </p>

                {/* Tags (Languages) */}
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="text-[10px] px-2 py-1 rounded-full bg-[#0d1117] border border-[#30363d] text-gray-400">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links Footer */}
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-[#30363d] text-sm">
                  {project.live !== '#' ? (
                    <a href={project.live} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-gray-400 hover:text-[var(--accent-color)] transition-colors">
                      <ExternalLink size={14} /> Live Demo
                    </a>
                  ) : (
                    <span className="text-gray-600 text-xs">No live demo</span>
                  )}
                  {project.github !== '#' && (
                    <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-gray-400 hover:text-[var(--accent-color)] transition-colors">
                      <Github size={14} /> Source Code
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12 text-gray-500 flex flex-col items-center gap-2">
            <Code2 size={32} className="text-gray-700" />
            <p>No repositories found in this category.</p>
          </div>
        )}
      </section>
    </div>
  );
}