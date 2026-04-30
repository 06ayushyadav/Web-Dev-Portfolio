"use client"

import { motion } from "framer-motion"
import { assets } from "../assets/assets"
import Image from "next/image"

const Hero = () => {
    return (
        <section
            id="home"
            className="min-h-screen flex items-center pt-20 pb-16 bg-linear-to-b from-gray-800 via-zinc-900 to-black"
        >
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12 md:gap-72">

                {/* IMAGE */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className="w-full md:w-1/2 flex justify-center order-1 md:order-2"
                >
                    <div className="relative w-44 h-44 sm:w-56 sm:h-56 md:w-80 md:h-80">

                        {/* Glow */}
                        <div className="absolute inset-0 rounded-full bg-purple-500 blur-3xl opacity-30"></div>

                        {/* Image */}
                        <motion.div
                            animate={{ y: [0, -15, 0] }}
                            transition={{ duration: 4, repeat: Infinity }}
                            className="relative w-full h-full  "
                        >
                            <Image
                                src={assets.profileImg}
                                alt="Profile"
                                fill
                                className="rounded-full object-cover object-[55%_2%] border-4 border-white/10"
                                priority
                            />
                        </motion.div>
                    </div>
                </motion.div>

                {/* TEXT */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="w-full text-center md:text-left order-2 md:order-1"
                >
                    <h1 className="w-full text-3xl sm:text-4xl md:text-6xl font-bold leading-tight">
                        Hi, I'm{" "}<span className="text-purple-500">Ayush Yadav</span>
                    </h1>

                    {/* TYPEWRITER FIX */}
                    <h2 className="typewriter text-xl sm:text-2xl md:text-3xl font-semibold mt-4 mb-6 text-gray-300 ">
                    
                        Full Stack Developer
                    </h2>

                    <p className="text-gray-400 max-w-md mx-auto md:mx-0 mb-8">
                        I build modern, scalable, and high-performance web applications
                        with clean UI and powerful backend systems.
                    </p>


                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">

                        <a
                            href="#projects"
                            className="px-6 py-3 bg-purple-500 rounded-lg font-medium hover:bg-purple-600 transition shadow-lg shadow-purple-500/20"
                        >
                            View Work
                        </a>

                        <a
                            href="#contact"
                            className="px-6 py-3 border border-purple-500 rounded-lg font-medium hover:bg-purple-500/20 transition"
                        >
                            Contact Me
                        </a>

                    </div>
                </motion.div>

            </div>
        </section>
    )
}

export default Hero