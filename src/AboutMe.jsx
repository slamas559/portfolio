import React from 'react';
import { motion } from 'framer-motion';
import myImage from "./assets/myImage.png";
import { Mail, MapPin, Briefcase, Code2 } from 'lucide-react';
import Reveal from './components/Reveal';

export default function ModernAbout() {
  const skills = [
    { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg' },
    { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg' },
    { name: 'Tailwind', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original-wordmark.svg' },
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original-wordmark.svg' },
    { name: 'Django', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain-wordmark.svg' },
    { name: 'FastAPI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg' },
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg' },
    { name: 'Express', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg' },
    { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg' },
    { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original-wordmark.svg' },
    { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-plain-wordmark.svg' },
  ];

  const stats = [
    { number: '50+', label: 'Projects' },
    { number: '100%', label: 'Satisfaction' },
    { number: '3+', label: 'Years Exp' },
  ];

  return (
    <div className="bg-transparent text-gray-300 font-mono py-20 md:py-28">
      <section id="about" className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-100">
            <span className="text-[var(--accent-color)]">~/</span> about-me
          </h2>
          <div className="h-px flex-1 bg-[#30363d]"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Profile Card */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            className="bg-[#161b22] border border-[#30363d] rounded-lg p-6 flex flex-col items-center text-center"
          >
            <img src={myImage} alt="Abdulsalam" className="w-32 h-32 object-cover rounded-full mb-4 border-2 border-[#30363d] shadow-sm shadow-[color:var(--accent-color)]" />
            <h3 className="text-xl font-bold text-gray-100">Abdulsalam</h3>
            <p className="text-sm text-[var(--accent-color)] mb-4">Full-Stack Engineer</p>
            <div className="w-full space-y-2 text-left text-sm">
              <div className="flex items-center gap-2 text-gray-400">
                <Mail size={14} className="text-gray-500" /> abdulsalamabayomi300@gmail.com
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <MapPin size={14} className="text-gray-500" /> Nigeria
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Briefcase size={14} className="text-gray-500" /> Available: Upwork, Fiverr
              </div>
            </div>
          </motion.div>

          {/* Bio Text - README style */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="md:col-span-2 bg-[#161b22] border border-[#30363d] rounded-lg p-6 shadow-sm shadow-[color:var(--accent-color)]"
            >
              <div className="flex items-center gap-2 mb-4 border-b border-[#30363d] pb-2">
                <Code2 size={18} className="text-[var(--accent-color)]" />
                <span className="text-sm text-gray-400">README.md</span>
              </div>
              <h1 className="text-2xl font-bold text-gray-100 mb-4"># Hi, I'm Salam 👋</h1>
              <p className="text-gray-400 leading-relaxed mb-4 text-sm md:text-base">
                I'm a passionate full-stack developer with an obsession for building intuitive, performant, and scalable web applications. My journey in tech started with curiosity and evolved into a full-blown passion.
              </p>
              <p className="text-gray-400 leading-relaxed mb-4 text-sm md:text-base">
                I specialize in <span className="text-blue-400">Python</span>, <span className="text-blue-400">Django</span>, <span className="text-blue-400">JavaScript</span>, and modern front-end frameworks like <span className="text-blue-400">React</span>. I'm constantly exploring new tech stacks, solving real-world problems, and creating seamless user experiences.
              </p>
              
              <div className="grid grid-cols-3 gap-4 mt-6">
                {stats.map((stat, idx) => (
                  <div key={idx} className="bg-[var(--bg-color)] border border-[#30363d] rounded-md p-3 text-center">
                    <p className="text-xl font-bold text-[var(--accent-color)]">{stat.number}</p>
                    <p className="text-xs text-gray-500">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
        </div>

        {/* Tech Stack - Command Palette Style */}
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-6 shadow-sm shadow-[color:var(--accent-color)]">
          <h3 className="text-lg font-bold text-gray-100 mb-6 flex items-center gap-2">
            <span className="text-[var(--accent-color)]">$</span> list --tech-stack
          </h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
            {skills.map((skill, idx) => (
              <motion.div 
                key={idx} 
                whileHover={{ y: -4 }}
                className="flex flex-col items-center justify-center gap-2 p-4 bg-[var(--bg-color)] border border-[#30363d] rounded-md cursor-pointer hover:border-[var(--accent-color)]/50 transition-all duration-200 group"
              >
                <img src={skill.icon} alt={skill.name} className="w-8 h-8 opacity-70 group-hover:opacity-100 transition-opacity" />
                <span className="text-xs text-gray-400 group-hover:text-gray-200">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}