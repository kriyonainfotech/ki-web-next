'use client';
import React from "react";
import { motion } from "framer-motion";

export default function CTASection({ icon }) {
    return (
        <section className="w-full flex justify-center px-4">
            <div className="w-full max-w-7xl bg-gradient-to-r from-pink-600 via-purple-700 to-blue-500 py-16 px-8 text-white relative overflow-hidden rounded-xl shadow-lg">
                <div className="container mx-auto px-6 text-center">
                    <motion.h2
                        className="text-3xl sm:text-4xl font-bold mb-4"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        Have a Project in Mind?
                    </motion.h2>

                    <motion.p
                        className="text-lg mb-8 max-w-3xl mx-auto"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        Let’s bring your ideas to life with our expert team. We’re just one
                        message away from starting something amazing.
                    </motion.p>

                    <motion.a
                        href="tel:+919876543210"
                        className="inline-flex items-center gap-2 bg-white text-purple-600 font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-purple-100 transition"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        {icon}
                        Contact Us Now
                    </motion.a>
                </div>
            </div>
        </section>
    );
}