'use client';
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ReachOutCTA({ title, desc, cta }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-pink-600 via-purple-700 to-blue-500 backdrop-blur-sm text-white rounded-2xl shadow-lg px-6 py-12 sm:px-12 my-20 mx-5 sm:mx-10 lg:mx-40 text-center"
        >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                {title}
            </h2>
            <p className="text-lg sm:text-xl text-white/90 mb-8">
                {desc}
            </p>
            <Link
                href="/contactus"
                className="bg-white text-cyan-900 font-semibold px-6 py-3 rounded-xl hover:bg-gray-100 transition"
            >
                {cta}
            </Link>
        </motion.div >
    );
}