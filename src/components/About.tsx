"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { aboutInfo, assets } from "../assets/assets"

const About = () => {
  return (
    <section
      id="about"
      className="py-20 bg-linear-to-b from-gray-800 via-zinc-900 to-black"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold">
            About <span className="text-purple-500">Me</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Get to know more about my background, skills, and journey in development.
          </p>
        </div>

        {/* Main Layout */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Image */}
          <motion.div
      
            className="relative w-full h-100 md:h-full  "
          >
            <Image
              src={assets.profileImg}
              alt="Profile"
              fill
              className="object-contain rounded-3xl shadow-2xl animate-pulse-slow "
              priority
            />
          </motion.div>

          <motion.div
            initial={{opacity:0,y:40}}
            whileInView={{opacity:1,y:0}}
            viewport={{once:false,amount:0.2}}
          >

            {/* Journey Title */}
            <h3 className="text-2xl font-semibold mb-8">
              My <span className="text-purple-500">Journey</span>
            </h3>

            <div className="relative border-l border-purple-500 pl-6 space-y-10">

              {[
                {
                  title: "Started Frontend & Web Development ",
                  year: "2024",
                  desc: `Learned HTML, CSS, and JavaScript. Built basic websites and understood core concepts and
                  Worked with React.js and built modern responsive UI with animations.
                  `,
                },
                {
                  title: "Backend Development",
                  year: "2025",
                  desc: "Explored Node.js, Express, MongoDB, and PostgreSQL to build full-stack apps.",
                },
                {
                  title: "Building Real Projects",
                  year: "2025 - Present",
                  desc: `Developed projects like Work Finder and Learned Next.js & TypeScript.
                  Currently I am learning Nest.js as well as Microservices
                  `,
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="relative"
                >
                  <span className="absolute -left-7.5 top-1 w-5 h-5 bg-purple-500 rounded-full shadow-lg"></span>
                  <h4 className="text-lg font-semibold text-white">
                    {item.title}
                  </h4>
                  <p className="text-sm text-purple-400">{item.year}</p>
                  <p className="text-gray-400 mt-1">{item.desc}</p>
                </motion.div>
              ))}

            </div>

            {/* Cards */}
            <div className="grid sm:grid-cols-2 gap-6 mt-12">
              {aboutInfo.map((data, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-5 hover:scale-105 transition duration-300"
                >
                  <div className="text-purple-500 text-3xl mb-3">
                    <data.icon />
                  </div>
                  <h4 className="text-lg font-semibold">{data.title}</h4>
                  <p className="text-gray-400 text-sm mt-1">
                    {data.description}
                  </p>
                </div>
              ))}
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About