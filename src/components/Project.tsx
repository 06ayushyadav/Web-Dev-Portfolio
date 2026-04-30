"use client"

import { projects } from "@/assets/assets"
import { motion } from "framer-motion"
import ProjectCard from "./ProjectCard"
import { FaArrowRight } from "react-icons/fa"

const Project = () => {
  return (
    <section
      id="projects"
      className="py-20 bg-linear-to-b from-gray-800 via-zinc-900 to-black"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold">
            My <span className="text-purple-500">Projects</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            A collection of my recent work showcasing my skills and experience.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{once:false , amount:0.2}}
              transition={{ delay: index * 0.2 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-16">
          <a
            href="#projects"
            className="group px-6 py-3 border border-purple-500 rounded-full flex items-center gap-2 hover:bg-purple-500/20 transition"
          >
            View More
            <FaArrowRight className="group-hover:translate-x-1 transition" />
          </a>
        </div>

      </div>
    </section>
  )
}

export default Project