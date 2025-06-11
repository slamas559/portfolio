import { motion } from "framer-motion";
import { fadeUp, zoomIn } from "./animations/variants";
import myImage from "./assets/myImage.png"

function AboutMe(){
    return(
        <section id="about" className="bg-gray-900 text-white py-20 px-6 md:px-12">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                
                {/* Left: Image */}
                <motion.div
                variants={zoomIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex justify-center"
                >
                <div className="flex justify-center">
                <img
                    src={myImage}
                    alt="my_photo"
                    className="w-72 h-72 object-cover rounded-2xl shadow-xl border-4 border-teal-500"
                />
                </div>
                </motion.div>

                {/* Right: Text Content */}
                <motion.div
                variants={zoomIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}>
                <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-teal-400">About Me</h2>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    Hey! I’m <span className="text-white font-semibold">[SALAM]</span>, a passionate full-stack developer
                    with a love for building intuitive, performant, and scalable web apps.
                    My journey in tech began with curiosity and grew into a full-blown obsession 🚀.
                </p>

                <p className="text-gray-400 leading-relaxed mb-6">
                    I specialize in <span className="text-white">Python, Django, JavaScript</span>, and modern front-end tools like 
                    <span className="text-white"> React and Tailwind CSS</span>. I’ve also dabbled in machine learning, and I’m always up for
                    exploring new tech stacks and solving real-world problems.
                </p>

                <div className="grid sm:grid-cols-2 gap-4 text-gray-300 text-sm">
                    <div>
                    <p><span className="font-semibold text-white">Name:</span> Abdulsalam</p>
                    <p><span className="font-semibold text-white">Email:</span> abdulsalamabayomi300@gmail.com</p>
                    </div>
                    <div>
                    <p><span className="font-semibold text-white">Location:</span> Nigeria</p>
                    <p><span className="font-semibold text-white">Freelance:</span> Upwork, Fiverr</p>
                    </div>
                </div>
                </div>
                </motion.div>
            </div>
            <div className="bg-gray-900 text-white py-16 px-6 md:px-12">
            <motion.div
            variants={zoomIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-gray-900 text-white py-16 px-6 md:px-12">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-teal-400 mb-10 text-center">Tech Stack</h2>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 place-items-center">
                    {/* Example icons - replace with your stack */}
                        <div className="flex flex-col items-center group">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg" alt="HTML" className="w-12 h-12 group-hover:scale-110 transition" />
                            <span className="mt-2 text-sm text-gray-300 group-hover:text-teal-400">HTML5</span>
                        </div>
                        <div className="flex flex-col items-center group">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg" alt="CSS" className="w-12 h-12 group-hover:scale-110 transition" />
                            <span className="mt-2 text-sm text-gray-300 group-hover:text-teal-400">CSS3</span>
                        </div>
                        <div className="flex flex-col items-center group">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt="JavaScript" className="w-12 h-12 group-hover:scale-110 transition" />
                            <span className="mt-2 text-sm text-gray-300 group-hover:text-teal-400">JavaScript</span>
                        </div>
                        <div className="flex flex-col items-center group">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg" alt="React" className="w-12 h-12 group-hover:scale-110 transition" />
                            <span className="mt-2 text-sm text-gray-300 group-hover:text-teal-400">React</span>
                        </div>
                        <div className="flex flex-col items-center group">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original-wordmark.svg" alt="Tailwind" className="w-12 h-12 group-hover:scale-110 transition" />
                            <span className="mt-2 text-sm text-gray-300 group-hover:text-teal-400">Tailwind</span>
                        </div>
                        <div className="flex flex-col items-center group">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original-wordmark.svg" alt="Python" className="w-12 h-12 group-hover:scale-110 transition" />
                            <span className="mt-2 text-sm text-gray-300 group-hover:text-teal-400">Python</span>
                        </div>
                        <div className="flex flex-col items-center group">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain-wordmark.svg" alt="Django" className="w-12 h-12 group-hover:scale-110 transition" />
                            <span className="mt-2 text-sm text-gray-300 group-hover:text-teal-400">Django</span>
                        </div>
                        <div className="flex flex-col items-center group">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-plain-wordmark.svg" alt="Git" className="w-12 h-12 group-hover:scale-110 transition" />
                            <span className="mt-2 text-sm text-gray-300 group-hover:text-teal-400">Git</span>
                        </div>
                        <div className="flex flex-col items-center group">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg" alt="FastAPI" className="w-12 h-12 group-hover:scale-110 transition" />
                            <span className="mt-2 text-sm text-gray-300 group-hover:text-teal-400">FastAPI</span>
                        </div>
                        <div className="flex flex-col items-center group">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original-wordmark.svg" alt="Postgresql" className="w-12 h-12 group-hover:scale-110 transition" />
                            <span className="mt-2 text-sm text-gray-300 group-hover:text-teal-400">Postgresql</span>
                        </div>
                        <div className="flex flex-col items-center group">  
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg" />
                            <span className="mt-2 text-sm text-gray-300 group-hover:text-teal-400">MongoDB</span>
                        </div>
                        <div className="flex flex-col items-center group">  
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" />
                            <span className="mt-2 text-sm text-gray-300 group-hover:text-teal-400">Express JS</span>
                        </div>
                        <div className="flex flex-col items-center group"> 
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" /> 
                            <span className="mt-2 text-sm text-gray-300 group-hover:text-teal-400">NodeJs</span>
                        </div>
                    </div>
                </div>
            </motion.div> 
            </div>

        </section>

    )
}

export default AboutMe