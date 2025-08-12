'use client';
import React from "react";
import { motion } from "framer-motion";

export default function CTASection({ icon }) {
    return (
        <section className="w-full flex justify-center ">
            <div className="w-full max-w-full mx-40 bg-gradient-to-r from-[#FFF4E8] from-51% to-[#FFE4FF] to-100% backdrop-blur-sm  py-16 px-8 relative overflow-hidden shadow-lg">
                <div className="container mx-auto px-6 text-center">
                    <motion.h2
                        className="text-3xl sm:text-4xl font-bold mb-7"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        Have a Project in Mind?
                    </motion.h2>

                    <motion.p
                        className="text-gray-600 max-w-2xl mx-auto mb-10 px-4"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        Let’s bring your ideas to life with our expert team. We’re just one
                        message away from starting something amazing.
                    </motion.p>

                    <motion.a
                        href="tel:+918401366742"
                        className="inline-flex items-center gap-2 bg-white text-gray-800 font-semibold px-6 py-3 rounded-full shadow-md hover:shadow-xl transition"
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