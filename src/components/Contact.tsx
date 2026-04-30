"use client"

import emailjs from "@emailjs/browser"
import { motion } from "motion/react"
import { useRef } from "react"
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt, FaPhone } from "react-icons/fa"

const Contact = () => {

    const form = useRef<HTMLFormElement>(null);

    const senEmail = (e: any) => {
        e.preventDefault();

        const formElement = form.current;
        if (!formElement) return;

        emailjs.sendForm(
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
            form.current!,
            process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
        )
            .then(() => {
                alert("Message Sent ✅")
                formElement.reset();
            })
            .catch((error: unknown) => {
                if (error instanceof Error) {
                    alert("Error : "+error.message);
                } else {
                    alert("Error ❌");
                }
            })
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
            id="contact"
            className="py-20 bg-linear-to-b from-gray-800 via-zinc-900 to-black"
        >

            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">Get In <span className="text-purple">Touch</span></h2>
                <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">Have a project in mind or want to collaborate ? Lets's talk !</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto justify-center ">
                    <div>
                        <form ref={form} className="space-y-6" onSubmit={senEmail}>
                            <div>

                                <label htmlFor="name " className="block text-gray-300 mb-2">Your Name </label>
                                <input type="text" id="name" name="user_name" required className="w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none" />
                            </div>
                            <div>

                                <label htmlFor="email" className="block text-gray-300 mb-2">Email Address </label>
                                <input type="email" id="email" name="user_email" required className="w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none" />
                            </div>
                            <div>

                                <label htmlFor="message " className="block text-gray-300 mb-2">Message </label>
                                <textarea id="message" name="message" required className="w-full min-h-40 max-h-40  bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none" />
                            </div>
                            <button type="submit" className="w-full p-6 py-3 bg-purple rounded-lg font-medium hover:bg-purple-700 transition duration-300 cursor-pointer ">Send Message</button>
                        </form>
                    </div>

                    <div className="space-y-8">
                        <div className="flex items-start">
                            <div className="text-purple text-2xl mr-4">
                                <FaMapMarkerAlt />

                            </div>
                            <div>
                                <h3 className="text-lg font-semibold mb-2">Location</h3>
                                <p className="text-gray-400">Kurla (West) , Mumbai , Maharashtra , Pin : 400070</p>
                            </div>

                        </div>
                        <div className="flex items-start">
                            <div className="text-purple text-2xl mr-4">
                                <FaEnvelope />

                            </div>
                            <div>
                                <h3 className="text-lg font-semibold mb-2">Email Address</h3>
                                <p className="text-gray-400">yayush1034@gmail.com</p>
                            </div>

                        </div>
                        <div className="flex items-start">
                            <div className="text-purple text-2xl mr-4">
                                <FaPhone />

                            </div>
                            <div>
                                <h3 className="text-lg font-semibold mb-2">Whatsapp Number</h3>
                                <p className="text-gray-400">9820163367</p>
                            </div>

                        </div>

                        <div className="pt-4 ">
                            <h3 className="text-lg font-semibold mb-4">Follow Me</h3>
                            <div className="flex items-center gap-5">
                                <div className="flex space-x-4">
                                    <a href="https://github.com/06ayushyadav" className="w-12 h-12 rounded-full bg-dark-300 text-2xl flex justify-center items-center hover:bg-purple hover:text-white transition duration-300" target="_blank" >
                                        <FaGithub />
                                    </a>

                                </div>
                                <div className="flex space-x-4">
                                    <a href="https://www.linkedin.com/in/ayush 
                                        yadav-84198626b" className="w-12 h-12 rounded-full bg-dark-300 flex justify-center items-center text-blue text-2xl hover:bg-purple hover:text-white transition duration-300" target="_blank" >
                                        <FaLinkedin />
                                    </a>

                                </div>
                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </motion.div>
    )
}

export default Contact
