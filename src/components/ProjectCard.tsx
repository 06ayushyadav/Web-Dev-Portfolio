"use client"

import Image from "next/image"

interface ProjectCardProps {
  title: string
  description: string
  image: any
  tech: string[]
  demo: string
  code: string
}

const ProjectCard = ({
  title,
  description,
  image,
  tech,
  demo,
  code,
}: ProjectCardProps) => {
  return (
    <div className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden hover:scale-105 transition duration-300">

      <div className="relative h-52 w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-110 transition duration-500"
        />
      </div>

      <div className="p-5">

        <h3 className="text-xl font-semibold text-white mb-2">
          {title}
        </h3>

        <p className="text-gray-400 text-sm mb-4">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((item) => (
            <span
              key={item}
              className="px-3 py-1 text-xs bg-white/10 border border-white/10 rounded-full text-gray-300"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <a
            href={demo}
            target="_blank"
            className="flex-1 text-center px-4 py-2 bg-purple-500 rounded-lg text-sm font-medium hover:bg-purple-600 transition"
          >
            Live
          </a>

          <a
            href={code}
            target="_blank"
            className="flex-1 text-center px-4 py-2 border border-purple-500 rounded-lg text-sm font-medium hover:bg-purple-500/20 transition"
          >
            Code
          </a>
        </div>

      </div>
    </div>
  )
}

export default ProjectCard