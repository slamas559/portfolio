import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Github, Linkedin, Twitter } from 'lucide-react';
import emailjs from 'emailjs-com';

export default function ContactMe() {
  const form = useRef();
  const [formStatus, setFormStatus] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs.sendForm(
      'service_tz9lbr9',
      'template_jffksdg',
      form.current,
      '9kw1dmTlNaxZ9Ob00'
    )
    .then((result) => {
      console.log('SUCCESS!', result.text);
      setFormStatus('success');
      form.current.reset();
      setIsLoading(false);
      setTimeout(() => setFormStatus(null), 3000);
    }, (error) => {
      console.log('FAILED...', error.text);
      setFormStatus('error');
      setIsLoading(false);
      setTimeout(() => setFormStatus(null), 3000);
    });
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

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'abdulsalamabayomi300@gmail.com',
      link: 'mailto:abdulsalamabayomi300@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+234 (0) 123 4567',
      link: 'tel:+2341234567',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Nigeria',
      link: '#',
    },
  ];

  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <section id="contact" className="relative z-10 max-w-6xl mx-auto px-6 py-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            Let's <span className="bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">Connect</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have a question, want to collaborate, or just want to say hello? I'd love to hear from you. Drop a message and I'll get back to you as soon as possible.
          </p>
        </motion.div>

        {/* Contact Info Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((info, idx) => {
            const Icon = info.icon;
            return (
              <motion.a
                key={idx}
                href={info.link}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group p-6 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 hover:border-teal-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/10"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-teal-500/20 to-blue-500/20 border border-teal-500/30 group-hover:border-teal-400 transition-colors">
                    <Icon className="w-6 h-6 text-teal-400 group-hover:text-teal-300" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-semibold">{info.label}</p>
                    <p className="text-gray-200 font-medium group-hover:text-teal-400 transition-colors">
                      {info.value}
                    </p>
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>

        {/* Main Contact Form */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-start"
        >
          {/* Left - Additional Info */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                I'm always interested in hearing about new projects and opportunities. Whether you want to discuss collaboration, have questions about my work, or just want to connect—feel free to reach out!
              </p>
            </div>

            {/* Social Links */}
            <div>
              <p className="text-sm font-semibold text-gray-500 mb-4">FIND ME ON</p>
              <div className="flex gap-4">
                {[
                  { name: 'GitHub', Icon: Github, href: 'https://github.com/slamas559' },
                  { name: 'LinkedIn', Icon: Linkedin, href: '#' },
                  { name: 'Twitter', Icon: Twitter, href: '#' },
                ].map(({ Icon, href, name }, idx) => (
                  <motion.a
                    key={idx}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-4 rounded-xl bg-slate-800/50 border border-slate-700 hover:border-teal-400/50 hover:bg-teal-500/10 transition-all duration-300 group"
                    title={name}
                  >
                    <Icon size={20} className="text-gray-400 group-hover:text-teal-400 transition-colors" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Response Time */}
            <div className="p-4 rounded-xl bg-teal-500/10 border border-teal-500/30">
              <p className="text-sm text-teal-300">
                <span className="font-semibold">⚡ Response Time:</span> I typically respond within 24 hours.
              </p>
            </div>
          </motion.div>

          {/* Right - Contact Form */}
          <motion.div variants={itemVariants}>
            <div className="space-y-6 p-8 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 hover:border-teal-400/50 transition-all duration-300">
              <form ref={form} onSubmit={sendEmail} component="div" className="space-y-6">
                {/* Name Field */}
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-3">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700/50 rounded-lg focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400 transition-all duration-300 text-white placeholder-gray-500"
                    placeholder="Your name"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-3">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700/50 rounded-lg focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400 transition-all duration-300 text-white placeholder-gray-500"
                    placeholder="you@example.com"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-3">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows="5"
                    required
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700/50 rounded-lg focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400 transition-all duration-300 text-white placeholder-gray-500 resize-none"
                    placeholder="Your message here..."
                  ></textarea>
                </div>

                {/* Status Messages */}
                {formStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 p-4 rounded-lg bg-green-500/10 border border-green-500/30 text-green-400"
                  >
                    <CheckCircle size={20} />
                    <span>Message sent successfully! I'll get back to you soon.</span>
                  </motion.div>
                )}

                {formStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 p-4 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400"
                  >
                    <AlertCircle size={20} />
                    <span>Failed to send message. Please try again.</span>
                  </motion.div>
                )}

                {/* Submit Button */}
                <motion.button
                  onClick={sendEmail}
                  disabled={isLoading}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 rounded-lg font-bold text-lg bg-gradient-to-r from-teal-500 to-blue-600 hover:shadow-lg hover:shadow-teal-500/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isLoading ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity }}
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                      />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>

                <p className="text-xs text-gray-500 text-center">
                  I respect your privacy. Your information won't be shared or used for spam.
                </p>
              </form>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}