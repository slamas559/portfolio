import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Clock, MessageCircle, BookOpen } from 'lucide-react';
import blog1 from './assets/blogs/blog1.png';
import blog2 from './assets/blogs/blog2.png';
import blog3 from './assets/blogs/blog3.jpg';
import blog4 from './assets/blogs/blog4.png';
import Reveal from './components/Reveal';

export default function BlogSection() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [animationKey, setAnimationKey] = useState(0);

  const blogPosts = [
    { id: 1, title: 'Building a Real-Time Chat App with Django & WebSockets', excerpt: 'Dive into the architecture, challenges, and setup of building a scalable chat application using Django Channels and WebSocket technology.', image: blog1, date: 'Apr 12, 2025', readTime: '5 min read', tags: ['Django', 'WebSockets'], category: 'backend', link: '#', views: '2.4K' },
    { id: 2, title: 'Getting Started with Tailwind CSS & Fast UIs', excerpt: 'Learn how Tailwind speeds up development and how I use it in my personal projects for rapid prototyping and responsive design.', image: blog2, date: 'Mar 20, 2025', readTime: '7 min read', tags: ['Tailwind', 'UI/UX'], category: 'frontend', link: '#', views: '3.1K' },
    { id: 3, title: 'Mastering React Hooks: useState, useEffect & More', excerpt: 'Deep dive into React Hooks and how they revolutionized functional component development. Practical examples and best practices included.', image: blog3, date: 'Feb 28, 2025', readTime: '8 min read', tags: ['React', 'JavaScript'], category: 'frontend', link: '#', views: '4.8K' },
    { id: 4, title: 'Building Scalable APIs with FastAPI and Python', excerpt: 'Explore how FastAPI makes it easy to build high-performance APIs with automatic documentation and type checking built-in.', image: blog4, date: 'Feb 10, 2025', readTime: '6 min read', tags: ['FastAPI', 'Python'], category: 'backend', link: '#', views: '1.9K' },
  ];

  const categories = [ { id: 'all', label: 'All' }, { id: 'frontend', label: 'Frontend' }, { id: 'backend', label: 'Backend' } ];
  const filteredPosts = selectedCategory === 'all' ? blogPosts : blogPosts.filter(post => post.category === selectedCategory);
  const handleCategoryChange = (categoryId) => { setSelectedCategory(categoryId); setAnimationKey(prev => prev + 1); };

  return (
    <div className="bg-transparent text-gray-300 font-mono py-20 md:py-28">
      <section id="blog" className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-100">
            <span className="text-[var(--accent-color)]">~/</span> blog
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

        {/* Blog Grid - Markdown Article Style */}
        <Reveal>
          <motion.div 
            key={animationKey} 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 gap-6 mb-16"
          >
            {filteredPosts.map((post) => (
              <motion.div 
                key={post.id} 
                whileHover={{ y: -4 }} 
                className="bg-[#161b22] border border-[#30363d] rounded-lg overflow-hidden group hover:border-[var(--accent-color)]/30 transition-all duration-300 flex flex-col md:flex-row"
              >
                {/* Thumbnail */}
                <div className="relative md:w-2/5 h-48 md:h-auto overflow-hidden bg-[var(--bg-color)] border-b md:border-b-0 md:border-r border-[#30363d] flex-shrink-0">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover opacity-50 group-hover:opacity-80 transition-all duration-500" 
                  />
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                    <div className="flex items-center gap-1"><Calendar size={12} /> {post.date}</div>
                    <div className="flex items-center gap-1"><Clock size={12} /> {post.readTime}</div>
                    <div className="flex items-center gap-1 ml-auto"><MessageCircle size={12} /> {post.views}</div>
                  </div>

                  <h3 className="text-lg font-bold text-gray-100 group-hover:text-[var(--accent-color)] transition-colors mb-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed line-clamp-2 flex-grow mb-4">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-[#30363d]">
                    <div className="flex gap-2">
                      {post.tags.map((tag, idx) => (
                        <span key={idx} className="text-[10px] px-2 py-1 rounded-full bg-[var(--bg-color)] border border-[#30363d] text-gray-400">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <a href={post.link} className="flex items-center gap-1 text-[var(--accent-color)] hover:text-white transition-colors text-xs font-semibold group/link">
                      Read <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </Reveal>
        {/* Terminal Style Subscribe CTA */}
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-6 md:p-8">
          <div className="flex items-center gap-2 mb-4 border-b border-[#30363d] pb-2">
            <BookOpen size={16} className="text-[var(--accent-color)]" />
            <span className="text-sm text-gray-400">notify.sh</span>
          </div>
          <p className="text-gray-300 mb-6 text-sm md:text-base">
            <span className="text-[var(--accent-color)]">$</span> echo "Enter your email to get notified on new posts:"
          </p>
          <div className="flex flex-col md:flex-row gap-3">
            <input 
              type="email" 
              placeholder="your.email@domain.com" 
              className="w-full flex-1 px-4 py-3 bg-[var(--bg-color)] border border-[#30363d] rounded-md focus:outline-none focus:border-[var(--accent-color)] text-gray-200 placeholder-gray-600 transition-colors text-sm" 
            />
            <motion.button 
              whileHover={{ scale: 1.02 }} 
              whileTap={{ scale: 0.98 }} 
              className="px-6 py-3 rounded-md font-bold text-black bg-[var(--accent-color)] hover:shadow-[0_0_15px_rgba(255,215,0,0.4)] transition-all duration-300 text-sm flex items-center justify-center gap-2"
            >
              <span>./subscribe</span> <ArrowRight size={16} />
            </motion.button>
          </div>
        </div>
      </section>
    </div>
  );
}