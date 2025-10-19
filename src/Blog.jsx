import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Clock, MessageCircle } from 'lucide-react';
import blog1 from './assets/blogs/blog1.png';
import blog2 from './assets/blogs/blog2.png';

export default function BlogSection() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [animationKey, setAnimationKey] = useState(0);

  const blogPosts = [
    {
      id: 1,
      title: 'How I Built a Real-Time Chat App with Django & WebSockets',
      excerpt: 'Dive into the architecture, challenges, and setup of building a scalable chat application using Django Channels and WebSocket technology.',
      image: blog1,
      date: 'Apr 12, 2025',
      readTime: '5 min read',
      tags: ['Django', 'WebSockets', 'Real-Time'],
      category: 'backend',
      link: '#',
      views: '2.4K',
    },
    {
      id: 2,
      title: 'Getting Started with Tailwind CSS & Building Fast UIs',
      excerpt: 'Learn how Tailwind speeds up development and how I use it in my personal projects for rapid prototyping and responsive design.',
      image: blog2,
      date: 'Mar 20, 2025',
      readTime: '7 min read',
      tags: ['Tailwind', 'UI/UX', 'Frontend'],
      category: 'frontend',
      link: '#',
      views: '3.1K',
    },
    {
      id: 3,
      title: 'Mastering React Hooks: useState, useEffect & More',
      excerpt: 'Deep dive into React Hooks and how they revolutionized functional component development. Practical examples and best practices included.',
      image: blog1,
      date: 'Feb 28, 2025',
      readTime: '8 min read',
      tags: ['React', 'JavaScript', 'Hooks'],
      category: 'frontend',
      link: '#',
      views: '4.8K',
    },
    {
      id: 4,
      title: 'Building Scalable APIs with FastAPI and Python',
      excerpt: 'Explore how FastAPI makes it easy to build high-performance APIs with automatic documentation and type checking built-in.',
      image: blog2,
      date: 'Feb 10, 2025',
      readTime: '6 min read',
      tags: ['FastAPI', 'Python', 'Backend'],
      category: 'backend',
      link: '#',
      views: '1.9K',
    },
  ];

  const categories = [
    { id: 'all', label: 'All Articles' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
  ];

  const filteredPosts = selectedCategory === 'all'
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory);

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
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <section id="blog" className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            Blog & <span className="bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">Writings</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Thoughts on web development, technical insights, and lessons learned building scalable applications.
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

        {/* Blog Grid */}
        <motion.div
          key={animationKey}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16"
        >
          {filteredPosts.map((post, idx) => (
            <motion.div
              key={post.id}
              variants={itemVariants}
              onMouseEnter={() => setHoveredCard(post.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className="group"
            >
              {/* Card */}
              <div className="relative h-full bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl overflow-hidden border border-slate-700/50 hover:border-teal-400/50 transition-all duration-300 flex flex-col hover:shadow-xl hover:shadow-teal-500/10">
                
                {/* Image Container */}
                <div className="relative overflow-hidden h-64 bg-gradient-to-br from-slate-800 to-slate-900">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* View Count Badge */}
                  <div className="absolute top-4 left-4">
                    <div className="flex items-center gap-1 bg-slate-900/80 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold text-gray-200 border border-slate-700/50">
                      <MessageCircle size={14} />
                      {post.views}
                    </div>
                  </div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  {/* Meta Info */}
                  <div className="flex items-center gap-4 text-xs text-gray-400 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={14} />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold mb-3 group-hover:text-teal-400 transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  {/* Excerpt */}
                  <p className="text-gray-400 text-sm mb-6 leading-relaxed line-clamp-2 flex-grow group-hover:text-gray-300 transition-colors">
                    {post.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {post.tags.map((tag, idx) => (
                      <motion.span
                        key={idx}
                        whileHover={{ scale: 1.1 }}
                        className="text-xs font-semibold px-3 py-1 rounded-full bg-gradient-to-r from-teal-500/20 to-blue-500/20 text-teal-300 border border-teal-500/30 hover:border-teal-400 transition-colors"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>

                  {/* Read More Link */}
                  <motion.a
                    href={post.link}
                    whileHover={{ x: 5 }}
                    className="inline-flex items-center gap-2 text-teal-400 hover:text-teal-300 transition-colors font-semibold text-sm group/link"
                  >
                    <span>Read Article</span>
                    <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                  </motion.a>
                </div>

                {/* Hover glow effect */}
                {hoveredCard === post.id && (
                  <div className="absolute inset-0 rounded-2xl pointer-events-none">
                    <div className="absolute inset-0 rounded-2xl border border-teal-400/50"></div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredPosts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-gray-400 text-lg">No articles found in this category.</p>
          </motion.div>
        )}

        {/* Subscribe CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-24"
        >
          <div className="bg-gradient-to-r from-teal-500/10 to-blue-500/10 border border-teal-400/20 rounded-2xl p-8 backdrop-blur-sm text-center">
            <h3 className="text-3xl font-bold mb-4">
              Stay Updated with My <span className="bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">Latest Articles</span>
            </h3>
            <p className="text-gray-400 mb-8">Get notified when I publish new technical insights and tutorials.</p>
            <div className="md:flex gap-3 w-full mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full md:mb-0 mb-2 flex-1 px-4 py-3 rounded-lg bg-slate-800/50 border border-slate-700 focus:border-teal-400 outline-none text-white placeholder-gray-500 transition-colors"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 rounded-lg font-bold bg-gradient-to-r from-teal-500 to-blue-600 hover:shadow-lg hover:shadow-teal-500/50 transition-all duration-300"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}