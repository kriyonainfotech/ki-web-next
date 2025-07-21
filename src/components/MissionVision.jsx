'use client'
import { motion } from "framer-motion";

export default function MissionVision() {
    return (
        <>
            <section className="mt-20 border border-black-border py-16 px-5 sm:px-10">
                <div className="text-center mb-16">
                    <h2 className="text-lg ">Our Purpose</h2>
                    <h3 className="text-2xl md:text-3xl lg:text-4xl text-primary-black font-bold mt-2">
                        Driving <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FFC487] to-[#FD98FF]">Digital Innovation</span>
                    </h3>
                </div>

                <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
                    <div className="p-8  rounded-xl border border-gray-800 relative overflow-hidden">
                        <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-r from-[#FFC487]/10 to-[#FD98FF]/10 rounded-full blur-xl"></div>
                        <div className="relative z-10">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#FFC487] to-[#FD98FF] flex items-center justify-center mr-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                </div>
                                <h4 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#FFC487] to-[#FD98FF]">Our Mission</h4>
                            </div>
                            <p className="text-gray-800 leading-relaxed">
                                Our mission is to help businesses grow through technology — by delivering high-quality websites, applications, and custom software that solve real problems. We are committed to consistent innovation, client satisfaction, and long-term success through reliable, results-driven solutions.                            </p>
                        </div>
                    </div>

                    {/* Vision Card */}
                    <div className="p-8  rounded-xl border border-gray-800 relative overflow-hidden">
                        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-to-r from-[#FFC487]/10 to-[#FD98FF]/10 rounded-full blur-xl"></div>
                        <div className="relative z-10">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#FFC487] to-[#FD98FF] flex items-center justify-center mr-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <h4 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#FFC487] to-[#FD98FF]">Our Vision</h4>
                            </div>
                            <p className="text-gray-800 leading-relaxed">
                                Our vision is to be recognized among the top 10 technology service providers in India — known for delivering reliable, scalable, and future-ready digital solutions that empower businesses across industries.                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mt-20 border border-black-border py-16 px-5 sm:px-10">
                <div className="text-center mb-16">
                    <h2 className="text-lg ">Our Foundation</h2>
                    <h3 className="text-2xl md:text-3xl lg:text-4xl text-primary-black font-bold mt-2">
                        Core <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FFC487] to-[#FD98FF]">Values</span>
                    </h3>
                    <p className="text-gray-800 mt-4 max-w-2xl mx-auto">
                        The principles guiding every solution we create and partnership we build
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                    {[
                        {
                            title: "Authenticity",
                            description: " We build real solutions tailored to your needs.",
                            icon: (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                </svg>
                            )
                        },
                        {
                            title: "Integrity",
                            description: "Transparent processes and ethical practices",
                            icon: (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            )
                        },
                        {
                            title: "Commitment",
                            description: "We are committed to delivering reliable, on-time solutions.",
                            icon: (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            )
                        },

                        {
                            title: "Client Satisfaction",
                            description: "We prioritize results that exceed client expectations.",
                            icon: (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            )
                        }
                    ].map((value, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ y: -10 }}
                            className=" p-8 rounded-xl border border-gray-800 text-center"
                        >
                            <div className="w-16 h-16 bg-gradient-to-r from-[#FFC487] to-[#FD98FF] rounded-full flex items-center justify-center mx-auto mb-6">
                                {value.icon}
                            </div>
                            <h4 className="text-xl font-bold mb-3">{value.title}</h4>
                            <p className="text-gray-800">{value.description}</p>
                        </motion.div>
                    ))}
                </div>
            </section>
        </>
    );
}