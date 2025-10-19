import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Star, Code2 } from 'lucide-react';
import project1 from './assets/projects/project1.png';
import project2 from './assets/projects/project2.png';
import project3 from './assets/projects/project3.png';
import project4 from './assets/projects/project4.png';
import project5 from './assets/projects/project5.png';
import project6 from './assets/projects/project6.png';

export default function ProjectsSection() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [animationKey, setAnimationKey] = useState(0);

  const projects = [
    {
      id: 1,
      title: 'Boardly Whiteboard App',
      description: 'A collaborative whiteboard application built with modern web technologies, enabling real-time drawing, syncing across users and brainstorming sessions.',
      image: project6,
      tags: ['React', 'MongoDB', 'Express', 'Node.js', 'Socket.IO', 'Tailwind', 'WebRTC'],
      category: 'fullstack',
      live: 'https://boardly-chi.vercel.app/',
      github: 'https://github.com/slamas559/boardly',
      featured: true,
    },
    {
      id: 2,
      title: 'Education Social Website',
      description: 'A social website for educational purposes built using Django and its base templates. Designed using Tailwind CSS with smooth animations and responsive design.',
      image: project4,
      tags: ['Django', 'Tailwind', 'Python'],
      category: 'backend',
      live: 'https://edusphere-5dmb.onrender.com/',
      github: 'https://github.com/slamas559/Edusphere',
      featured: true,
    },
    {
      id: 3,
      title: 'P2P Crypto Website',
      description: 'A peer-to-peer cryptocurrency exchange platform built with modern web technologies to facilitate crypto exchange within users, chat feature integration, with a focus on security and user experience.',
      image: project5,
      tags: ['React', 'MongoDB', 'Express', 'Node.js', 'Socket.IO', 'Tailwind'],
      category: 'fullstack',
      live: 'https://p2-p-frontend-ruddy.vercel.app/',
      github: 'https://github.com/slamas559/P2P-frontend',
      featured: true,
    },
    {
      id: 4,
      title: 'Portfolio Website',
      description: 'A personal portfolio website built using React, Tailwind, and Framer Motion. Smooth animations and responsive design.',
      image: project1,
      tags: ['React', 'Tailwind', 'Framer Motion'],
      category: 'frontend',
      live: '#',
      github: '#',
    },
    {
      id: 5,
      title: 'Chat App',
      description: 'Real-time chat application with private messaging using Python FastAPI and Reactjs.',
      image: project2,
      tags: ['FastAPI', 'React', 'WebSocket'],
      category: 'fullstack',
      github: 'https://github.com/slamas559/ChatApp',
    },
    {
      id: 6,
      title: 'Modern Todo Web App',
      description: 'A todo website built using Reactjs for frontend, Django Rest Framework for backend. Smooth animations and responsive design.',
      image: project3,
      tags: ['React', 'Django REST', 'Tailwind'],
      category: 'fullstack',
      live: '#',
      github: 'https://github.com/slamas559/NoteApp',
    },
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
    setAnimationKey(prev => prev + 1);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <section id="projects" className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            Featured <span className="bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A showcase of my recent work and creative projects. Each one tells a story of innovation, problem-solving, and technical excellence.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => handleCategoryChange(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-teal-500 to-blue-600 text-white shadow-lg shadow-teal-500/50'
                  : 'bg-slate-800/50 border border-slate-700 text-gray-300 hover:border-teal-400/50 hover:text-teal-400'
              }`}
            >
              {category.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          key={animationKey}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              onMouseEnter={() => setHoveredCard(project.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className="group relative h-full"
            >
              {/* Card */}
              <div className="relative h-full bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl overflow-hidden border border-slate-700/50 hover:border-teal-400/50 transition-all duration-300">
                
                {/* Image Container */}
                <div className="relative overflow-hidden h-56 bg-gradient-to-br from-slate-800 to-slate-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 right-4">
                      <motion.div
                        animate={{ rotate: [0, 5, -5, 0] }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="flex items-center gap-1 bg-gradient-to-r from-yellow-500 to-orange-500 px-3 py-1 rounded-full text-xs font-bold text-white shadow-lg"
                      >
                        <Star size={12} fill="white" />
                        Featured
                      </motion.div>
                    </div>
                  )}

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-teal-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed line-clamp-2 group-hover:text-gray-300 transition-colors">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, idx) => (
                      <motion.span
                        key={idx}
                        whileHover={{ scale: 1.1 }}
                        className="text-xs font-semibold px-3 py-1 rounded-full bg-gradient-to-r from-teal-500/20 to-blue-500/20 text-teal-300 border border-teal-500/30 hover:border-teal-400 transition-colors"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4 pt-4 border-t border-slate-700/50">
                    {project.live !== '#' && (
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ x: 5 }}
                        className="flex items-center gap-2 text-teal-400 hover:text-teal-300 transition-colors text-sm font-semibold group/link"
                      >
                        <ExternalLink size={16} />
                        <span>Live Demo</span>
                      </motion.a>
                    )}
                    {project.github !== '#' && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ x: 5 }}
                        className="flex items-center gap-2 text-gray-400 hover:text-teal-400 transition-colors text-sm font-semibold"
                      >
                        <Github size={16} />
                        <span>Code</span>
                      </motion.a>
                    )}
                  </div>
                </div>

                {/* Hover glow effect */}
                {hoveredCard === project.id && (
                  <div className="absolute inset-0 rounded-2xl pointer-events-none">
                    <div className="absolute inset-0 rounded-2xl border border-teal-400/50 group-hover:shadow-lg group-hover:shadow-teal-500/30 transition-all duration-300"></div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <Code2 size={48} className="mx-auto text-gray-600 mb-4" />
            <p className="text-gray-400 text-lg">No projects found in this category.</p>
          </motion.div>
        )}

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-24 text-center"
        >
          <p className="text-gray-400 mb-6">Want to see more projects?</p>
          <motion.a
            href="https://github.com/slamas559"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold bg-gradient-to-r from-teal-500 to-blue-600 hover:shadow-lg hover:shadow-teal-500/50 transition-all duration-300"
          >
            <Github size={20} />
            Visit My GitHub
          </motion.a>
        </motion.div>
      </section>
    </div>
  );
}