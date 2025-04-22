import emailjs from 'emailjs-com';
import { useRef } from 'react';
import React from 'react'
import { motion } from "framer-motion";
import { fadeUp, zoomIn, fadeDown, fadeRight } from "./animations/variants";


function ContactMe(){
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
        'service_tz9lbr9',      // Replace with your actual ID
        'template_jffksdg',     // Replace with your template
        form.current,
        '9kw1dmTlNaxZ9Ob00'       // Replace with your EmailJS public key
        )
        .then((result) => {
            console.log('SUCCESS!', result.text);
            alert('Message sent successfully!');
            form.current.reset();
        }, (error) => {
            console.log('FAILED...', error.text);
            alert('Failed to send message.');
        });
    };
    return(
        <section id="contact" className="bg-gray-950 text-white py-20 px-6 md:px-12">
            <motion.div
                variants={zoomIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex justify-center"
                >
            <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-teal-400 mb-10">
                Let’s Talk
                </h2>
                <p className="text-center text-gray-400 mb-12">
                Have a question, want to work together, or just say hi? Drop a message below.
                </p>

                <form ref={form}
                    onSubmit={sendEmail} 
                    className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl shadow-lg space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-sm mb-1 text-teal-300">Name</label>
                        <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
                        placeholder="Your name"
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm mb-1 text-teal-300">Email</label>
                        <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
                        placeholder="you@example.com"
                        />
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-sm mb-1 text-teal-300">Message</label>
                        <textarea
                        id="message"
                        rows="5"
                        name="message"
                        className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
                        placeholder="Type your message..."
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="w-full py-3 bg-teal-500 text-white font-semibold rounded-md hover:bg-teal-600 transition shadow-md hover:shadow-teal-500/40"
                    >
                        Send Message 🚀
                    </button>
                </form>
            </div>
            </motion.div>
        </section>

    )
}

export default ContactMe