import React, { useState } from 'react';
import { motion } from 'framer-motion';
import myImage from "./assets/myImage.png"
import { Mail, MapPin, Briefcase, Code2, Zap } from 'lucide-react';

export default function ModernAbout() {
  const [hoveredSkill, setHoveredSkill] = useState(null);

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
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const skills = [
    { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg', color: 'from-orange-500 to-red-500' },
    { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg', color: 'from-blue-500 to-cyan-500' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg', color: 'from-yellow-500 to-orange-500' },
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg', color: 'from-cyan-500 to-blue-500' },
    { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original-wordmark.svg', color: 'from-teal-500 to-blue-500' },
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original-wordmark.svg', color: 'from-blue-600 to-yellow-500' },
    { name: 'Django', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain-wordmark.svg', color: 'from-green-600 to-teal-600' },
    { name: 'FastAPI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg', color: 'from-green-500 to-teal-500' },
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg', color: 'from-green-600 to-lime-500' },
    { name: 'Express.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg', color: 'from-gray-700 to-gray-900' },
    { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg', color: 'from-green-500 to-emerald-600' },
    { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original-wordmark.svg', color: 'from-blue-600 to-indigo-600' },
    { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-plain-wordmark.svg', color: 'from-red-600 to-orange-600' },
  ];

  const info = [
    { label: 'Name', value: 'Abdulsalam', icon: Code2 },
    { label: 'Email', value: 'abdulsalamabayomi300@gmail.com', icon: Mail },
    { label: 'Location', value: 'Nigeria', icon: MapPin },
    { label: 'Availability', value: 'Upwork, Fiverr', icon: Briefcase },
  ];

  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Main About Section */}
      <section id="about" className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-16 items-center mb-24"
        >
          {/* Left: Image with floating effect */}
          <motion.div variants={itemVariants} className="flex justify-center">
            <div className="relative">
              {/* Glowing background */}
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-blue-500 rounded-3xl blur-2xl opacity-20 group-hover:opacity-40"></div>

              {/* Image container */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative group"
              >
                <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-1 overflow-hidden border border-slate-700/50 hover:border-teal-400/50 transition-colors duration-300 shadow-2xl">
                  <div className="w-80 h-80 bg-gradient-to-br from-teal-400/30 to-blue-500/30 rounded-2xl flex items-center justify-center text-7xl font-black text-gray-700 hover:text-gray-600 transition-colors relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-blue-500/20"></div>
                    <img
                      src={myImage}
                      alt="Abdulsalam"
                      className="w-80 h-80 object-cover rounded-2xl shadow-lg relative z-10"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Text Content */}
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.h2 variants={itemVariants} className="text-5xl md:text-5xl font-black mb-8">
              About <span className="bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">Me</span>
            </motion.h2>

            <motion.p variants={itemVariants} className="text-gray-300 text-lg leading-relaxed mb-6">
              Hey! I'm <span className="font-bold text-teal-400">Abdulsalam</span>, a passionate full-stack developer with an obsession for building intuitive, performant, and scalable web applications. My journey in tech started with curiosity and evolved into a full-blown passion 🚀
            </motion.p>

            <motion.p variants={itemVariants} className="text-gray-400 text-lg leading-relaxed mb-8">
              I specialize in <span className="text-teal-400 font-semibold">Python, Django, JavaScript</span>, and modern front-end frameworks like <span className="text-teal-400 font-semibold">React</span>. I'm constantly exploring new tech stacks, solving real-world problems, and creating seamless user experiences.
            </motion.p>

            {/* Info Grid */}
            <motion.div variants={itemVariants} className="grid sm:grid-cols-2 gap-6">
              {info.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="group p-4 rounded-xl bg-slate-800/30 border border-slate-700/50 hover:border-teal-400/50 hover:bg-teal-500/10 transition-all duration-300"
                  >
                    <div className="flex items-start gap-3">
                      <Icon className="w-5 h-5 text-teal-400 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                      <div>
                        <p className="text-sm text-gray-500 font-semibold">{item.label}</p>
                        <p className="text-gray-200 font-medium">{item.value}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Tech Stack Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-32"
        >
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl font-black"
            >
              My <span className="bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">Tech Stack</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-400 text-lg mt-4"
            >
              Tools and technologies I work with daily
            </motion.p>
          </div>

          {/* Skills Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
          >
            {skills.map((skill, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                onMouseEnter={() => setHoveredSkill(idx)}
                onMouseLeave={() => setHoveredSkill(null)}
                whileHover={{ y: -10, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`group relative p-6 rounded-2xl cursor-pointer overflow-hidden transition-all duration-300 ${
                  hoveredSkill === idx
                    ? 'bg-gradient-to-br ' + skill.color
                    : 'bg-slate-800/40 border border-slate-700/50 hover:border-teal-400/50'
                }`}
              >
                {/* Animated background on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center text-center">
                  <img 
                    src={skill.icon} 
                    alt={skill.name}
                    className="w-14 h-14 mb-3 group-hover:scale-125 transition-transform duration-300 filter group-hover:brightness-150"
                  />
                  <p className={`font-semibold text-sm ${hoveredSkill === idx ? 'text-white' : 'text-gray-300 group-hover:text-teal-400'} transition-colors duration-300`}>
                    {skill.name}
                  </p>
                </div>

                {/* Glow effect on hover */}
                {hoveredSkill === idx && (
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Floating stats section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 grid md:grid-cols-3 gap-8"
        >
          {[
            { number: '50+', label: 'Projects Completed' },
            { number: '100%', label: 'Client Satisfaction' },
            { number: '3+', label: 'Years Experience' },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="group p-8 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 hover:border-teal-400/50 text-center transition-all duration-300 hover:bg-teal-500/10"
            >
              <p className="text-4xl font-black bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent mb-2">
                {stat.number}
              </p>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
}