"use client"

import { useEffect, useState } from "react"
import { FaBars, FaXmark } from "react-icons/fa6"

const links = ["home", "about", "skills", "projects", "contact"]

const Navbar = () => {
  const [active, setActive] = useState("home")
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      links.forEach((id) => {
        const section = document.getElementById(id)
        if (section) {
          const top = section.offsetTop - 120
          const height = section.offsetHeight
          const scrollY = window.scrollY

          if (scrollY >= top && scrollY < top + height) {
            setActive(id)
          }
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto"
  }, [open])

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/80 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex justify-between items-center">

        <a href="#home" className="flex items-center gap-1 text-lg sm:text-xl font-bold">
          <span className="text-gray-400">&lt;/</span>
          <span className="text-white">Ayush</span>
          <span className="text-purple-500">Yadav</span>
          <span className="text-gray-400">&gt;</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex gap-6 lg:gap-8 font-medium">
          {links.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className={`relative capitalize transition ${
                active === item
                  ? "text-purple-500"
                  : "text-white/70 hover:text-white"
              }`}
            >
              {item}
              <span
                className={`absolute left-0 -bottom-1 h-0.5 bg-purple-500   transition-all duration-300 ${
                  active === item ? "w-full" : "w-0"
                }`}
              />
            </a>
          ))}
        </div>

        {/* Mobile Icon */}
        <div className="md:hidden">
          {open ? (
            <FaXmark onClick={() => setOpen(false)} size={24} />
          ) : (
            <FaBars onClick={() => setOpen(true)} size={24} />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl  flex flex-col">

          <div className="flex justify-between items-center px-4 sm:px-6 py-4 border-b border-white/10">
            <h2 className="text-lg sm:text-xl font-semibold">
              <span className="text-gray-400">&lt;/</span>
              <span className="text-white">Ayush</span>
              <span className="text-purple-500">Yadav</span>
              <span className="text-gray-400">&gt;</span>
            </h2>

            <FaXmark onClick={() => setOpen(false)} size={26} />
          </div>

          <div className="flex-1 flex flex-col justify-center items-center gap-6 sm:gap-8 text-xl sm:text-2xl font-medium  bg-black/40 p-10">

            {links.map((item, index) => (
              <a
                key={item}
                href={`#${item}`}
                onClick={() => setOpen(false)}
                className={`w-full max-w-xs text-center py-3 rounded-xl border bg-black  border-white/10 backdrop-blur-md transition duration-300 ${
                  active === item
                    ? " bg-purple-500"
                    : "text-white/80 hover:bg-white/5"
                }`}
                style={{
                  animation: `fadeUp 0.3s ease forwards`,
                  animationDelay: `${index * 0.08}s`,
                }}
              >
                {item.charAt(0).toUpperCase() + item.slice(1).toLowerCase()}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar