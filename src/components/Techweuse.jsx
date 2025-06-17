'use client';
import React from 'react'
import { motion } from "framer-motion";

export default function Techweuse({ techList, techIcons }) {
    return (
        <>
            {/* Technologies List */}
            <section className="py-10">
                <div className="text-center">
                    <h3 className="text-4xl font-bold mb-6 bg-gradient-to-r from-pink-600 via-purple-700 to-blue-500 bg-clip-text text-transparent">
                        Technologies We Use
                    </h3>
                    <ul className="flex flex-wrap justify-center gap-6 text-gray-800 font-medium">
                        {techList.map((tech, index) => (
                            <motion.li
                                key={index}
                                className="bg-gray-100 px-5 py-2 rounded-full shadow-sm hover:bg-purple-100 transition"
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                {tech}
                            </motion.li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* Technology Icons */}
            <section className="pb-32 px-4 lg:px-0">
                <div className="container mx-auto grid grid-cols-2 sm:grid-cols-5 gap-8 items-center justify-center">
                    {techIcons.map((tech, index) => (
                        <motion.div
                            key={index}
                            className="flex justify-center items-center border border-[#55555580] py-10"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: tech.id * 0.1 }}
                        >
                            <img
                                src={tech.img}
                                alt={tech.alt}
                                className="h-16 w-16 object-contain"
                            />
                        </motion.div>
                    ))}
                </div>
            </section>
        </>
    )
}