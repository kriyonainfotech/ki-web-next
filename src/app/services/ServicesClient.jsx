'use client';
import Link from 'next/link';
import services from '@/data/services';
import React from "react";
import { motion } from "framer-motion";
export default function ServicesClient() {
    return (
        <>
            <div className="px-5 sm:px-5 lg:px-24 2xl:px-40 ">
                {/* Hero Section */}
                <section className="hero-section text-center pb-15 animate-fade-in">
                    <div className="container mx-auto py-30 px-8 bg-gradient-to-b  from-purple-100/50 to-pink-100/50 backdrop-blur-sm border border-[#55555580]">
                        <h1 className="text-2xl sm:text-4xl xl:text-4xl xs:w-auto font-semibold text-primary-black sm:w-4/5 mx-auto">
                            Transformative Tech Solutions
                        </h1>
                        <p className="text-md lg:text-lg pt-10 text-gray-600 w-auto xl:w-5/6 mx-auto">
                            Accelerate your digital transformation with our full-stack
                            development expertise and AI-powered solutions.
                        </p>
                    </div>
                </section>

                {/* Services Grid */}
                <section className="services-grid py-16 space-y-16">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Our Development Expertise
                        </h2>
                        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                            Bridging innovation with execution through cutting-edge technologies
                        </p>
                    </div>

                    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="service-card shadow-sm border rounded-lg border-gray-200 p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group relative overflow-hidden flex flex-col h-full"
                            >
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 bg-gradient-to-r from-pink-600 via-purple-700 to-blue-500 backdrop-blur-sm border border-white/20 "></div>

                                <div className="relative z-10 flex flex-col h-full">
                                    <div className="h-full flex flex-col justify-between">
                                        <div>
                                            <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                                {service.name}
                                            </h3>

                                            <p className="text-gray-600 mb-6 min-h-[80px]">
                                                {service.text}
                                            </p>

                                            {service.list && (
                                                <ul className="list-disc list-inside mb-6 space-y-2">
                                                    {service.list.map((item, idx) => (
                                                        <li key={idx} className="text-gray-700">
                                                            {item.li}
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}

                                            {service.icons && (
                                                <div className="tech-stack mb-6 flex flex-wrap gap-4">
                                                    {service.icons.map((icon, idx) => (
                                                        <img
                                                            key={idx}
                                                            src={icon.img}
                                                            alt={icon.alt}
                                                            className="w-10 h-10 object-contain hover:scale-125 transition-transform duration-200"
                                                            title={icon.alt} // SEO-friendly tooltips
                                                        />
                                                    ))}
                                                </div>
                                            )}
                                        </div>

                                        <Link
                                            href={service.link}
                                            className="inline px-6 py-3 bg-white border border-gray-300 hover:shadow-xl rounded-full transition-colors duration-300 font-medium hover:no-underline"
                                            aria-label={`Learn more about ${service.name}`}
                                        >
                                            Explore Solutions
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* CTA Section */}
                <section className="w-full flex justify-center  pt-20 pb-5">
                    <div className="w-full max-w-full bg-gradient-to-r from-[#FFF4E8] from-51% to-[#FFE4FF] to-100% backdrop-blur-sm  py-16 px-8 relative overflow-hidden shadow-lg">
                        <div className="container mx-auto px-6 text-center">
                            <motion.h2
                                className="text-3xl sm:text-4xl font-bold mb-7"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                            >
                                Ready to Revolutionize Your Tech Stack?
                            </motion.h2>

                            <motion.p
                                className="text-gray-600 max-w-2xl mx-auto mb-10 px-4"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                viewport={{ once: true }}
                            >
                                Let's build something extraordinary together. Schedule a free tech
                                consultation today.
                            </motion.p>

                            <motion.a
                                href="tel:+918401366742"
                                className="inline-flex items-center gap-2 bg-white text-gray-800 font-semibold px-6 py-3 rounded-full shadow-md hover:shadow-xl transition"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.4 }}
                                viewport={{ once: true }}
                            >
                                Start Your Project Now
                            </motion.a>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}