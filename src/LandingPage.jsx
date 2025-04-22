import { use, useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { fadeUp } from "./animations/variants"


function LandingPage(){

    const work = ["Hello I Am SALAM a Software Developer", "I Can Also Help Build Dream Website"];
    const [currentWork, setCurrentWork] = useState([])
    const [count, setCount] = useState(0)
    const [initial, setInitial] = useState(0)

    const controls = useAnimation();
    const [ref, inView] = useInView({ triggerOnce: true });

    useEffect(() => {
        if (inView) controls.start("visible");
    }, [inView, controls]);

    useEffect(()=>{
        
        if(count == work[initial].length+1){
            setCurrentWork([])
            setCount(0)
            initial == 0?(
            setInitial(1)):(setInitial(0))
        }
        
        if(currentWork.length < work[initial].length+1){
        const timeout = setInterval(function(){
            setCurrentWork([...currentWork,  (work[initial][count])])
            setCount((c) => c + 1)
        }, 100)

        return function(){
            clearInterval(timeout)
        }}
    })


    return(
        <section id="home" className="bg-gray-900 text-white min-h-screen flex items-center justify-center">
            <div className="w-full max-w-7xl px-6 py-12 grid md:grid-cols-2 gap-10 items-center">
                
                {/* Left: Content */}
                <motion.div
                ref={ref}
                initial="hidden"
                animate={controls}
                variants={fadeUp}
                >
                    <div>
                    {/* Navigation */}
                    <nav className="mb-8">
                        <ul className="flex flex-wrap gap-4 text-lg font-medium">
                        <li><a href="#home" className="hover:text-teal-400 transition">Home</a></li>
                        <li><a href="#about" className="hover:text-teal-400 transition">About</a></li>
                        <li><a href="#project" className="hover:text-teal-400 transition">Project</a></li>
                        <li><a href="#blog" className="hover:text-teal-400 transition">Blog</a></li>
                        <li><a href="#contact" className="hover:text-teal-400 transition">Contact Me</a></li>
                        </ul>
                    </nav>

                    {/* Intro Text */}
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 h-15">
                        {currentWork}<span className="text-teal-400">|</span>
                    </h2>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                        Sapiente nesciunt quae non. Iure saepe illum dicta velit quam veniam,
                        consequatur consectetur beatae in blanditiis impedit minus sit!
                    </p>

                    {/* Buttons */}
                    <div className="flex gap-4 mb-6">
                        <a 
                            className="bg-teal-500 text-white px-6 py-2 rounded-lg hover:bg-teal-600 transition"
                            href="/Abdulsalam_Abayomi_Resume.pdf"
                            download>
                        Download CV
                        </a>
                        <button 
                            className="border border-teal-500 text-teal-500 px-6 py-2 rounded-lg hover:bg-teal-500 hover:text-white transition">
                        Contact Me
                        </button>
                    </div>

                    {/* Social Links */}
                    <div className="flex gap-4 mt-4">
                        <a href="#" className="p-3 bg-gray-800 rounded-full hover:bg-blue-600 transition transform hover:scale-110 shadow-md">
                            <img src="src/assets/socialIcon/facebook.png" alt="facebook" className="w-5 h-5" />
                        </a>
                        <a href="#" className="p-3 bg-gray-800 rounded-full hover:bg-sky-500 transition transform hover:scale-110 shadow-md">
                            <img src="src/assets/socialIcon/twitter.png" alt="twitter" className="w-5 h-5" />
                        </a>
                        <a href="https://github.com/slamas559" className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition transform hover:scale-110 shadow-md">
                            <img src="src/assets/socialIcon/github.png" alt="github" className="w-5 h-5" />
                        </a>
                        <a href="#" className="p-3 bg-gray-800 rounded-full hover:bg-green-500 transition transform hover:scale-110 shadow-md">
                            <img src="src/assets/socialIcon/whatsapp.png" alt="whatsapp" className="w-5 h-5" />
                        </a>
                    </div>
                    </div>
                </motion.div>

                <motion.div
                ref={ref}
                initial="hidden"
                animate={controls}
                variants={fadeUp}
                className="flex justify-center"
                >
                    {/* Right: Image */}
                    <div className="flex justify-center">
                    <img src="src/assets/myImage.png" alt="my_image" className="w-80 h-80 object-cover rounded-2xl shadow-lg" />
                    </div>
                </motion.div>
            </div>
        </section>

    )
}

export default LandingPage