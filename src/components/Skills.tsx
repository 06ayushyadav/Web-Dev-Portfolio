"use client"

import { skills } from "@/assets/assets"
import { motion } from "framer-motion"

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-20 bg-linear-to-b from-gray-800 via-zinc-900 to-black"
    >
      <div className="max-w-7xl mx-auto px-6">


        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold">
            My <span className="text-purple-500">Skills</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Technologies I use to build scalable and high-performance applications.
          </p>
        </div>


        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:scale-105 hover:border-purple-500 transition duration-300"
            >
              
              {/* Icon + Title */}
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-purple-500/10 rounded-xl group-hover:bg-purple-500/20 transition">
                  <skill.icon className="w-8 h-8 text-purple-500" />
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {skill.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-gray-400 text-sm mb-5 leading-relaxed">
                {skill.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {skill.tags.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm bg-white/10 border border-white/10 rounded-full text-gray-300 hover:bg-purple-500/20 transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills