import React from 'react'
import { motion } from "framer-motion";
import { fadeUp, zoomIn, fadeDown, fadeRight } from "./animations/variants";
import blog1 from "./assets/blogs/blog1.png"
import blog2 from "./assets/blogs/blog2.png"


function Blog(){
  return (
    <section id="blog" className="bg-gray-900 text-white py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-teal-400 mb-16">
            Blog & Writings
            </h2>

            <motion.div
                variants={fadeRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex justify-center"
                >
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            
            {/* Blog Post Card */}
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 shadow-md hover:shadow-teal-500/20 transition group overflow-hidden">
                <img
                src={blog1}
                alt="blog cover"
                className="w-full h-40 object-cover rounded-md mb-4 group-hover:scale-105 transition"
                />
                <p className="text-xs text-gray-400 mb-1">Apr 12, 2025 · 5 min read</p>
                <h3 className="text-xl font-semibold mb-2 text-teal-300 group-hover:text-white">
                How I Built a Real-Time Chat App with Django & WebSockets
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                Dive into the architecture, challenges, and setup of building a scalable chat application using Django Channels.
                </p>
                <div className="flex flex-wrap gap-2 text-xs text-gray-300 mb-4">
                <span className="bg-gray-800 px-2 py-1 rounded">Django</span>
                <span className="bg-gray-800 px-2 py-1 rounded">WebSockets</span>
                <span className="bg-gray-800 px-2 py-1 rounded">Real-Time</span>
                </div>
                <a href="#" className="text-sm text-teal-400 hover:underline">
                Read More →
                </a>
            </div>

            {/* Copy/Paste for more posts */}
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 shadow-md hover:shadow-teal-500/20 transition group overflow-hidden">
                <img
                src={blog2}
                alt="blog cover"
                className="w-full h-40 object-cover rounded-md mb-4 group-hover:scale-105 transition"
                />
                <p className="text-xs text-gray-400 mb-1">Mar 20, 2025 · 7 min read</p>
                <h3 className="text-xl font-semibold mb-2 text-teal-300 group-hover:text-white">
                Getting Started with Tailwind CSS & Building Fast UIs
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                Learn how Tailwind speeds up development and how I use it in my personal projects for rapid prototyping.
                </p>
                <div className="flex flex-wrap gap-2 text-xs text-gray-300 mb-4">
                <span className="bg-gray-800 px-2 py-1 rounded">Tailwind</span>
                <span className="bg-gray-800 px-2 py-1 rounded">UI/UX</span>
                <span className="bg-gray-800 px-2 py-1 rounded">Frontend</span>
                </div>
                <a href="#" className="text-sm text-teal-400 hover:underline">
                Read More →
                </a>
            </div>
            
            {/* More articles... */}
            </div>
            </motion.div>
        </div>
    </section>

  )
}

export default Blog