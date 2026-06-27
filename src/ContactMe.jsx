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

    emailjs.sendForm('service_tz9lbr9', 'template_jffksdg', form.current, '9kw1dmTlNaxZ9Ob00')
    .then((result) => {
      setFormStatus('success');
      form.current.reset();
      setIsLoading(false);
      setTimeout(() => setFormStatus(null), 3000);
    }, (error) => {
      setFormStatus('error');
      setIsLoading(false);
      setTimeout(() => setFormStatus(null), 3000);
    });
  };

  return (
    <div className="bg-[#0d1117] text-gray-300 font-mono py-20 md:py-28">
      <section id="contact" className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-100">
            <span className="text-[var(--accent-color)]">~/</span> contact
          </h2>
          <div className="h-px flex-1 bg-[#30363d]"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Left Side: Config File Style */}
          <div className="bg-[#161b22] border border-[#30363d] rounded-lg overflow-hidden">
            <div className="bg-[#0d1117] px-4 py-2 border-b border-[#30363d] text-xs text-gray-500">
              config.json
            </div>
            <div className="p-6 text-sm leading-relaxed">
              <p><span className="text-gray-500">{'{'}</span></p>
              <p className="pl-4"><span className="text-[var(--accent-color)]">"email"</span>: <span className="text-green-400">"abdulsalamabayomi300@gmail.com"</span>,</p>
              <p className="pl-4"><span className="text-[var(--accent-color)]">"phone"</span>: <span className="text-green-400">"+234 (0) 123 4567"</span>,</p>
              <p className="pl-4"><span className="text-[var(--accent-color)]">"location"</span>: <span className="text-green-400">"Nigeria"</span>,</p>
              <p className="pl-4"><span className="text-[var(--accent-color)]">"availability"</span>: <span className="text-orange-400">true</span>,</p>
              <p className="pl-4"><span className="text-[var(--accent-color)]">"socials"</span>: <span className="text-gray-500">[</span></p>
              
              <div className="pl-8 flex gap-4 mt-2 mb-2">
                <a href="https://github.com/slamas559" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[var(--accent-color)] transition-colors"><Github size={18} /></a>
                <a href="https://www.linkedin.com/in/salam-abdulsalam-5a0b08278/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[var(--accent-color)] transition-colors"><Linkedin size={18} /></a>
                <a href="https://x.com/AbdulSalam16612" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[var(--accent-color)] transition-colors"><Twitter size={18} /></a>
              </div>

              <p className="pl-4"><span className="text-gray-500">]</span></p>
              <p><span className="text-gray-500">{'}'}</span></p>

              <div className="mt-6 pt-6 border-t border-[#30363d]">
                <p className="flex items-center gap-2 text-sm text-gray-400">
                  <span className="text-[var(--accent-color)]">$</span> status --check
                </p>
                <p className="text-green-400 mt-1">&gt; ✓ Available for new projects. Response time ~24h.</p>
              </div>
            </div>
          </div>

          {/* Right Side: Terminal Form Style */}
          <div className="bg-[#161b22] border border-[#30363d] rounded-lg overflow-hidden">
            <div className="bg-[#0d1117] px-4 py-2 border-b border-[#30363d] text-xs text-gray-500">
              send_message.sh
            </div>
            
            <form ref={form} onSubmit={sendEmail} className="p-6 space-y-5">
              
              <div>
                <label className="block text-xs text-gray-500 mb-2">// Your Name</label>
                <input 
                  type="text" 
                  name="name" 
                  required 
                  className="w-full px-4 py-3 bg-[#0d1117] border border-[#30363d] rounded-md focus:outline-none focus:border-[var(--accent-color)] text-gray-200 placeholder-gray-600 transition-colors text-sm" 
                  placeholder="John Doe" 
                />
              </div>

              <div>
                <label className="block text-xs text-gray-500 mb-2">// Your Email</label>
                <input 
                  type="email" 
                  name="email" 
                  required 
                  className="w-full px-4 py-3 bg-[#0d1117] border border-[#30363d] rounded-md focus:outline-none focus:border-[var(--accent-color)] text-gray-200 placeholder-gray-600 transition-colors text-sm" 
                  placeholder="john@example.com" 
                />
              </div>

              <div>
                <label className="block text-xs text-gray-500 mb-2">// Message</label>
                <textarea 
                  name="message" 
                  rows="4" 
                  required 
                  className="w-full px-4 py-3 bg-[#0d1117] border border-[#30363d] rounded-md focus:outline-none focus:border-[var(--accent-color)] text-gray-200 placeholder-gray-600 transition-colors text-sm resize-none" 
                  placeholder="Hello Salam, I'd like to talk about..." 
                ></textarea>
              </div>

              {/* Status Messages */}
              {formStatus === 'success' && (
                <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-2 p-3 rounded-md bg-green-500/10 border border-green-500/30 text-green-400 text-xs">
                  <CheckCircle size={16} /> <span>Message sent successfully! I'll get back to you soon.</span>
                </motion.div>
              )}
              {formStatus === 'error' && (
                <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-2 p-3 rounded-md bg-red-500/10 border border-red-500/30 text-red-400 text-xs">
                  <AlertCircle size={16} /> <span>Failed to send message. Please try again.</span>
                </motion.div>
              )}

              <motion.button 
                type="submit" 
                disabled={isLoading} 
                whileHover={{ scale: 1.01 }} 
                whileTap={{ scale: 0.99 }} 
                className="w-full py-3 rounded-md font-bold text-black bg-[var(--accent-color)] hover:shadow-[0_0_15px_rgba(255,215,0,0.4)] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-sm"
              >
                {isLoading ? (
                  <>
                    <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity }} className="w-4 h-4 border-2 border-black border-t-transparent rounded-full" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send size={16} /> <span>./execute_send</span>
                  </>
                )}
              </motion.button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}