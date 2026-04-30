"use client"

const Footer = () => {
  return (
    <footer className="bg-linear-to-r from-gray-900 via-zinc-900 to-black border-t border-white/10">
      
      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">


          <h2 className="text-xl font-semibold text-white">
            {"</"}Ayush<span className="text-purple-500"> Yadav</span>{">"}
          </h2>

          <div className="flex gap-6 text-gray-400 text-sm">
            <a href="#home" className="hover:text-purple-500 transition">Home</a>
            <a href="#about" className="hover:text-purple-500 transition">About</a>
            <a href="#skills" className="hover:text-purple-500 transition">Skills</a>
            <a href="#projects" className="hover:text-purple-500 transition">Projects</a>
            <a href="#contact" className="hover:text-purple-500 transition">Contact</a>
          </div>

        </div>

        <div className="border-t border-white/10 my-6"></div>

        {/* Bottom */}
        <p className="text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Ayush Yadav. All rights reserved.
        </p>

      </div>
    </footer>
  )
}

export default Footer