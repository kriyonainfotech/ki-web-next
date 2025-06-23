'use client';
import React from "react";
import CTASection from "@/components/CTASection";

export default function OurProcessClient() {
    return (
        <div>

            <div className="px-5 sm:px-5 lg:px-24 2xl:px-40">
                {/* Hero Section */}
                <div className="bg-hero-grid mt-5 h-auto">
                    <div className="text-center sm:px-10 md:px-20 lg:px-0 xl:px-10 border border-[#55555580] py-40">
                        <h1 className="text-2xl sm:text-4xl xl:text-4xl xs:w-auto font-semibold text-primary-black sm:w-4/5 mx-auto">
                            Our Development Process – From Vision to Scalable Digital Solutions
                        </h1>
                        <p className="text-md lg:text-lg pt-10 text-gray-600 w-auto xl:w-5/6 mx-auto">
                            At Kriyona Infotech, we collaborate with startups, SMEs, and enterprises to turn ideas into powerful software, web, and mobile apps — using a transparent and agile development approach.
                        </p>
                    </div>
                </div>

                <div className="my-28">
                    <h2 className="text-3xl font-semibold text-center text-primary-black mb-12">
                        Our 6-Step Development Process
                    </h2>
                    <div className="relative border-l-3 border-pink-100 border-radius-2 pl-4 space-y-12 max-w-6xl mx-auto">
                        {[
                            { title: "Discovery & Research", desc: "We understand your goals, audience, and the problem we’re solving." },
                            { title: "Strategy & Planning", desc: "We define roadmap, stack, and sprints tailored to your project." },
                            { title: "UI/UX Design", desc: "We design wireframes and prototypes focused on conversion + UX." },
                            { title: "Development", desc: "Agile-based dev sprints with regular updates and scalable code." },
                            { title: "QA & Testing", desc: "We test manually + with tools to catch bugs before users do." },
                            { title: "Launch & Support", desc: "We deploy, monitor, and support your product post-launch." }
                        ].map((step, index) => (
                            <div key={index} className="relative">
                                <div className="absolute -left-[40px] top-9 w-15 h-8 rounded-full bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 border-4 border-white shadow-lg"></div>
                                <div className="bg-white p-6 shadow-sm border border-[#55555580]">
                                    <h3 className="font-semibold text-lg text-primary-black">Step {index + 1}: {step.title}</h3>
                                    <p className="mt-2 text-gray-700">{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CEO Message Section */}
                {/* CEO Message Section */}
                <div className="my-24 border border-[#55555580] bg-white px-6 py-16 max-w-full mx-auto text-center shadow-sm">
                    <img
                        src="/kriyona-infotech-logo1.png" // 🧠 Drop a clean placeholder in /public (or replace with real CEO photo)
                        alt="CEO of Kriyona Infotech"
                        className="w-24 h-24 mx-auto rounded-full mb-6 border-2 border-gray-600 object-cover"
                    />
                    <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
                        “At Kriyona Infotech, our focus has always been clear — building impactful digital solutions that actually solve problems.
                        Whether it’s a responsive website, a scalable mobile app, or fully customized software tailored to your workflow, we approach every project with clarity, care, and code that lasts. Our process isn't just about delivery — it's about building what matters.”
                    </p>
                    <p className="mt-6 text-base text-gray-500 font-medium">
                        – Kirtan Narola, CEO at <span className="text-primary-black font-semibold">Kriyona Infotech</span> 🇮🇳
                    </p>


                    {/* LinkedIn Icon Button */}
                    <div className="mt-4">
                        <a
                            href="https://www.linkedin.com/in/kirtannarola/" // 👉 Replace this URL
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 transition text-sm font-medium"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-5 h-5"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M20.447 20.452H17.21v-5.59c0-1.333-.026-3.053-1.862-3.053-1.863 0-2.149 1.453-2.149 2.955v5.688H9.063V9h3.106v1.561h.045c.433-.818 1.494-1.682 3.075-1.682 3.29 0 3.896 2.165 3.896 4.977v6.596zM5.337 7.433a1.804 1.804 0 11.003-3.607 1.804 1.804 0 01-.003 3.607zM6.834 20.452H3.84V9h2.994v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.728v20.543C0 23.226.792 24 1.771 24h20.451C23.2 24 24 23.226 24 22.271V1.728C24 .774 23.2 0 22.225 0z" />
                            </svg>
                            Connect on LinkedIn
                        </a>
                    </div>
                </div>

                {/* <div className="mt-24 max-w-3xl mx-auto">
                        <h2 className="text-3xl font-semibold text-center mb-10">Frequently Asked Questions</h2>
                        <div className="space-y-6">
                            <div>
                                <h3 className="font-semibold text-lg">How long does a typical project take?</h3>
                                <p className="text-gray-700 mt-2">It depends on scope, but most web/app projects take 4–12 weeks.</p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg">Do you provide post-launch support?</h3>
                                <p className="text-gray-700 mt-2">Yes! We offer maintenance, updates, and scaling support.</p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg">Is the process flexible?</h3>
                                <p className="text-gray-700 mt-2">Absolutely. We adapt to your needs while sticking to proven steps.</p>
                            </div>
                        </div>
                    </div> */}


                {/* Process Fit Callout */}
                <div className="my-24 text-center border border-[#55555580]">
                    <div className="py-16">
                        <h2 className="text-3xl font-semibold mb-6">Still Wondering If This Process Is for You?</h2>
                        <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
                            If you’re a startup thinking, “I’ve got an idea, but where do I even start?” — we got you.
                            <br /><br />
                            Or maybe you’re running a growing business that needs to upgrade from that outdated site or clunky system? Yup, this is for you too.
                            <br /><br />
                            Whether it’s building from scratch or scaling something that already works — our process is built to flex around your needs.
                        </p>
                    </div>
                </div>

                <CTASection />

                {/* Internal Link Section */}
                <div className="mt-20 text-center border border-[#55555580] py-16 px-6">
                    <h2 className="text-2xl sm:text-3xl font-semibold text-primary-black mb-6">
                        Want to See Our Process in Action?
                    </h2>
                    <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                        Learn more about our{" "}
                        <a href="/services/web-development" className="text-blue-600 underline hover:text-blue-800 transition">
                            Web Development Services
                        </a>, explore our{" "}
                        <a href="/portfolio" className="text-blue-600 underline hover:text-blue-800 transition">
                            Portfolio
                        </a>{" "}
                        to view real project snapshots, or check out our{" "}
                        <a href="/blog" className="text-blue-600 underline hover:text-blue-800 transition">
                            Blog
                        </a>{" "}
                        for insights on tech, design, and digital growth.
                    </p>
                </div>

            </div>
        </div>
    );
}