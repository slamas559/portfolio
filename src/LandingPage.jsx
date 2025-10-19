import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, ArrowRight, Github, Linkedin, Twitter, Mail, ExternalLink } from 'lucide-react';
import myImage from "./assets/myImage.png"

export default function ModernPortfolio() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [displayedText, setDisplayedText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  const texts = [
    "Full-Stack Software Developer",
    "UI/UX Enthusiast",
    "Problem Solver"
  ];

  // Typewriter effect
  useEffect(() => {
    const timer = setTimeout(() => {
      const currentText = texts[textIndex];
      if (charIndex < currentText.length) {
        setDisplayedText(prev => prev + currentText[charIndex]);
        setCharIndex(charIndex + 1);
      } else {
        setTimeout(() => {
          setTextIndex((prev) => (prev + 1) % texts.length);
          setCharIndex(0);
          setDisplayedText('');
        }, 2000);
      }
    }, 50);
    return () => clearTimeout(timer);
  }, [charIndex, textIndex]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white min-h-screen overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Navbar */}
      <nav className="relative z-50 backdrop-blur-md bg-slate-900/30 border-b border-slate-700/50 sticky top-0">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-2xl font-black bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
            SALAM
          </motion.div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-8 font-medium text-sm">
            {['Home', 'About', 'Projects', 'Blog', 'Contact'].map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`} className="relative group text-gray-300 hover:text-teal-400 transition-colors duration-300">
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-400 to-blue-500 group-hover:w-full transition-all duration-300"></span>
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsNavOpen(!isNavOpen)} className="md:hidden p-2">
            {isNavOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isNavOpen && (
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="md:hidden bg-slate-900/95 border-t border-slate-700/50 p-4">
            {['Home', 'About', 'Projects', 'Blog', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="block py-2 text-gray-300 hover:text-teal-400 transition">
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative z-10 max-w-7xl mx-auto px-6 py-20 md:py-32 min-h-screen flex items-center">
        <div className="grid md:grid-cols-2 gap-12 items-center w-full">
          {/* Left Content */}
          <motion.div variants={containerVariants} initial="hidden" animate="visible">
            <motion.div variants={itemVariants} className="mb-6">
              <p className="text-teal-400 font-semibold text-lg mb-2">Welcome to my portfolio</p>
              <h1 className="text-5xl md:text-6xl font-black leading-tight mb-4">
                Hi, I'm <span className="bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">Salam</span>
              </h1>
            </motion.div>

            <motion.div variants={itemVariants} className="mb-8">
              <p className="text-2xl md:text-3xl font-bold text-gray-200 h-12 flex items-center gap-2">
                <span>{displayedText}</span>
                <span className="animate-pulse">|</span>
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-4 mb-8">
              <p className="text-gray-400 text-lg leading-relaxed">
                I craft elegant solutions for complex problems. Blending <span className="text-teal-400 font-semibold">creativity</span> with clean code to build experiences that users love.
              </p>
              <p className="text-gray-400 text-lg">
                Available for <span className="text-teal-400 font-semibold">freelance projects</span> • Fiverr • Upwork
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="flex gap-4 flex-wrap">
              <button className="group relative px-8 py-3 rounded-xl font-semibold overflow-hidden bg-gradient-to-r from-teal-500 to-blue-600 hover:shadow-lg hover:shadow-teal-500/50 transition-all duration-300 flex items-center gap-2">
                <a className="text-white px-6 py-2 rounded-lg transition"
                    href="./Abdulsalam_Abayomi_Resume.pdf"
                    download>
                    Download CV
                </a>
                <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
              </button>
              <button className="px-8 py-3 rounded-xl font-semibold border-2 border-teal-400/50 text-teal-400 hover:bg-teal-500/10 hover:border-teal-400 transition-all duration-300">
                Contact Me
              </button>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="flex gap-4 mt-12">
              {[
                { Icon: Github, href: "https://github.com/slamas559", label: "GitHub" },
                { Icon: Linkedin, href: "#", label: "LinkedIn" },
                { Icon: Twitter, href: "#", label: "Twitter" },
                { Icon: Mail, href: "#", label: "Email" },
              ].map(({ Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 rounded-full bg-slate-800/50 border border-slate-700 hover:bg-teal-500/20 hover:border-teal-400 transition-all duration-300 group"
                >
                  <Icon size={20} className="group-hover:text-teal-400 transition-colors" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right - Image/Illustration */}
          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="flex justify-center">
            <motion.div variants={floatingVariants} animate="animate" className="relative">
              {/* Glowing card background */}
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-blue-500 rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
              
              {/* Image container */}
              <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-1 overflow-hidden border border-slate-700/50 hover:border-teal-400/30 transition-colors duration-300">
                <div className="w-80 h-80 bg-gradient-to-br from-teal-400/20 to-blue-500/20 rounded-2xl flex items-center justify-center text-6xl font-black text-gray-700 hover:text-gray-600 transition-colors">
                  <img src={myImage} alt="my_image" className="w-80 h-80 object-cover rounded-2xl shadow-lg" />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="text-teal-400 text-sm">Scroll to explore</div>
          <div className="flex justify-center items-center text-2xl mt-2">↓</div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="bg-gradient-to-r from-teal-500/10 to-blue-500/10 border border-teal-400/20 rounded-3xl p-12 backdrop-blur-sm">
          <h3 className="text-3xl md:text-4xl font-black mb-6">
            Let's create something <span className="bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">amazing</span>
          </h3>
          <p className="text-gray-300 mb-8 text-lg">Ready to start your next project? Get in touch!</p>
          <button className="px-8 py-4 rounded-xl font-bold bg-gradient-to-r from-teal-500 to-blue-600 hover:shadow-lg hover:shadow-teal-500/50 transition-all duration-300 text-lg">
            Let's Talk
          </button>
        </motion.div>
      </section>
    </div>
  );
}