import { motion } from "framer-motion";
import { fadeUp, zoomIn, fadeDown } from "./animations/variants";
import project1 from "./assets/projects/project1.png"
import project2 from "./assets/projects/project2.png"
import project3 from "./assets/projects/project3.png"
import project4 from "./assets/projects/project4.png"
import project5 from "./assets/projects/project5.png"

function ProjectPage(){
    return(
        <section id="project" className="bg-gray-950 text-white py-20 px-6 md:px-12">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-teal-400 mb-16">
                Featured Projects
                </h2>

                <motion.div
                variants={fadeDown}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex justify-center"
                >
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                {/* Project Card */}
                <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-lg hover:shadow-teal-500/30 transition duration-300 group relative overflow-hidden">
                    <img
                    src={project1}
                    alt="Project 1"
                    className="w-full h-48 object-cover rounded-lg mb-4 group-hover:scale-105 transition duration-300"
                    />
                    <h3 className="text-xl font-semibold text-teal-300 group-hover:text-white mb-2">
                    Portfolio Website
                    </h3>
                    <p className="text-gray-400 text-sm mb-4">
                    A personal portfolio website built using React, Tailwind, and Framer Motion. Smooth animations and responsive design.
                    </p>
                    <div className="flex flex-wrap gap-2 text-xs text-gray-300 mb-4">
                    <span className="bg-gray-800 px-2 py-1 rounded">React</span>
                    <span className="bg-gray-800 px-2 py-1 rounded">Tailwind</span>
                    <span className="bg-gray-800 px-2 py-1 rounded">Framer Motion</span>
                    </div>
                    <div className="flex gap-3">
                    <a
                        href="#"
                        className="text-teal-400 hover:underline text-sm"
                    >
                        Live Demo
                    </a>
                    <a
                        href="#"
                        className="text-gray-400 hover:text-teal-400 text-sm"
                    >
                        GitHub ↗
                    </a>
                    </div>
                </div>

                {/* Duplicate and change details for more projects */}
                <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-lg hover:shadow-teal-500/30 transition duration-300 group relative overflow-hidden">
                    <img
                    src={project2}
                    alt="Project 2"
                    className="h-48 rounded-lg mb-4 group-hover:scale-105 transition duration-300"
                    />
                    <h3 className="text-xl font-semibold text-teal-300 group-hover:text-white mb-2">
                    Chat App
                    </h3>
                    <p className="text-gray-400 text-sm mb-4">
                    Real-time chat application with private messaging using Django Channels and WebSockets.
                    </p>
                    <div className="flex flex-wrap gap-2 text-xs text-gray-300 mb-4">
                    <span className="bg-gray-800 px-2 py-1 rounded">Django</span>
                    <span className="bg-gray-800 px-2 py-1 rounded">Channels</span>
                    <span className="bg-gray-800 px-2 py-1 rounded">WebSockets</span>
                    </div>
                    <div className="flex gap-3">
                    <a href="#" className="text-teal-400 hover:underline text-sm">
                        Live Demo
                    </a>
                    <a href="https://github.com/slamas559/ChatApp" className="text-gray-400 hover:text-teal-400 text-sm">
                        GitHub ↗
                    </a>
                    </div>
                </div>
                {/* More cards... */}
                <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-lg hover:shadow-teal-500/30 transition duration-300 group relative overflow-hidden">
                    <img
                    src={project3}
                    alt="Project 3"
                    className="w-full h-48 object-cover rounded-lg mb-4 group-hover:scale-105 transition duration-300"
                    />
                    <h3 className="text-xl font-semibold text-teal-300 group-hover:text-white mb-2">
                    Modern Todo Web App
                    </h3>
                    <p className="text-gray-400 text-sm mb-4">
                    A todo website built using Reactjs for frontend, Django Rest Framework for backend. Smooth animations and responsive design.
                    </p>
                    <div className="flex flex-wrap gap-2 text-xs text-gray-300 mb-4">
                    <span className="bg-gray-800 px-2 py-1 rounded">React</span>
                    <span className="bg-gray-800 px-2 py-1 rounded">Django Rest Framwork</span>
                    </div>
                    <div className="flex gap-3">
                    <a
                        href="#"
                        className="text-teal-400 hover:underline text-sm"
                    >
                        Live Demo
                    </a>
                    <a
                        href="https://github.com/slamas559/NoteApp"
                        className="text-gray-400 hover:text-teal-400 text-sm"
                    >
                        GitHub ↗
                    </a>
                    </div>
                </div>
                <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-lg hover:shadow-teal-500/30 transition duration-300 group relative overflow-hidden">
                    <img
                    src={project4}
                    alt="Project 4"
                    className="w-full h-48 object-cover rounded-lg mb-4 group-hover:scale-105 transition duration-300"
                    />
                    <h3 className="text-xl font-semibold text-teal-300 group-hover:text-white mb-2">
                    Blog Website
                    </h3>
                    <p className="text-gray-400 text-sm mb-4">
                    A blog website built using django and its base templates. designed using taiwind css Smooth animations and responsive design.
                    </p>
                    <div className="flex flex-wrap gap-2 text-xs text-gray-300 mb-4">
                    <span className="bg-gray-800 px-2 py-1 rounded">Django</span>
                    <span className="bg-gray-800 px-2 py-1 rounded">Tailwind</span>
                    </div>
                    <div className="flex gap-3">
                    <a
                        href="#"
                        className="text-teal-400 hover:underline text-sm"
                    >
                        Live Demo
                    </a>
                    <a
                        href="#"
                        className="text-gray-400 hover:text-teal-400 text-sm"
                    >
                        GitHub ↗
                    </a>
                    </div>
                </div>

                <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-lg hover:shadow-teal-500/30 transition duration-300 group relative overflow-hidden">
                    <img
                    src={project5}
                    alt="Project 4"
                    className="w-full h-48 object-cover rounded-lg mb-4 group-hover:scale-105 transition duration-300"
                    />
                    <h3 className="text-xl font-semibold text-teal-300 group-hover:text-white mb-2">
                    P2P Crypto Website
                    </h3>
                    <p className="text-gray-400 text-sm mb-4">
                    A peer-to-peer cryptocurrency exchange platform built with modern web technologies to facilitate crypto exchange within users,
                    chat feature integration, with a focus on security and user experience.
                    </p>
                    <div className="flex flex-wrap gap-2 text-xs text-gray-300 mb-4">
                    <span className="bg-gray-800 px-2 py-1 rounded">Reactjs</span>
                    <span className="bg-gray-800 px-2 py-1 rounded">MongoDB</span>
                    <span className="bg-gray-800 px-2 py-1 rounded">Express Js</span>
                    <span className="bg-gray-800 px-2 py-1 rounded">Node Js</span>
                    <span className="bg-gray-800 px-2 py-1 rounded">Socket.IO</span>
                    <span className="bg-gray-800 px-2 py-1 rounded">Tailwind</span>
                    </div>
                    <div className="flex gap-3">
                    <a
                        href="https://p2-p-frontend-ruddy.vercel.app/"
                        className="text-teal-400 hover:underline text-sm"
                    >
                        Live Demo
                    </a>
                    <a
                        href="https://github.com/slamas559/p2p_app"
                        className="text-gray-400 hover:text-teal-400 text-sm"
                    >
                        GitHub ↗
                    </a>
                    </div>
                </div>
                </div>
                </motion.div>
            </div>
        </section>

    )
}

export default ProjectPage