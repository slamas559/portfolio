import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, Heart, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#project' },
    { label: 'Blog', href: '#blog' },
    { label: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/slamas559', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Mail, href: 'mailto:abdulsalamabayomi300@gmail.com', label: 'Email' },
  ];

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
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: 'easeOut' },
    },
  };

  return (
    <footer className="bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white border-t border-slate-700/50 relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl"></div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative z-10 max-w-7xl mx-auto px-6 py-16"
      >
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <motion.div variants={itemVariants} className="flex flex-col items-start md:items-center">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="text-3xl font-black bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent mb-3"
            >
              SALAM
            </motion.div>
            <p className="text-gray-400 text-sm">
              Full-Stack Developer crafting elegant digital solutions.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="flex flex-col items-start md:items-center">
            <h4 className="font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.map((link, idx) => (
                <motion.li
                  key={idx}
                  whileHover={{ x: 5 }}
                  className="text-gray-400 hover:text-teal-400 transition-colors duration-300"
                >
                  <a href={link.href} className="text-sm">
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="flex flex-col items-start md:items-center">
            <h4 className="font-bold text-white mb-4">Connect</h4>
            <div className="flex gap-4">
              {socialLinks.map((social, idx) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 rounded-full bg-slate-800/50 border border-slate-700 hover:border-teal-400/50 hover:bg-teal-500/10 transition-all duration-300"
                    title={social.label}
                  >
                    <Icon size={18} className="text-gray-400 hover:text-teal-400" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.6 }}
          className="h-px bg-gradient-to-r from-transparent via-teal-500/30 to-transparent mb-8"
        ></motion.div>

        {/* Bottom Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center gap-6"
        >
          {/* Copyright */}
          <motion.div variants={itemVariants} className="text-sm text-gray-500">
            <p className="flex items-center gap-2">
              <span className="font-semibold text-white">Salam</span>
              <span className="text-teal-400 font-bold">Full-Stack</span>
              <span>Developer</span>
              <span className="text-gray-700">•</span>
              <span>© {currentYear}</span>
            </p>
            <p className="mt-2 text-xs">
              Designed & Built with <motion.span animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 0.6, repeat: Infinity }} className="inline-block">
                <Heart size={14} className="text-red-500 inline" />
              </motion.span> by Salam
            </p>
          </motion.div>

          {/* Additional Links */}
          <motion.div variants={itemVariants} className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-teal-400 transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-teal-400 transition-colors duration-300">
              Terms of Service
            </a>
          </motion.div>

          {/* Back to Top Button */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="p-3 rounded-full bg-gradient-to-r from-teal-500/20 to-blue-500/20 border border-teal-500/30 hover:border-teal-400 hover:bg-teal-500/30 transition-all duration-300 group"
            title="Back to top"
          >
            <ArrowUp size={20} className="text-teal-400 group-hover:text-teal-300" />
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Bottom gradient line */}
      <div className="h-px bg-gradient-to-r from-transparent via-teal-500/20 to-transparent"></div>
    </footer>
  );
}