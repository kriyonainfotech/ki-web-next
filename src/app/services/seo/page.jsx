'use client';

import React from "react";
import { motion } from "framer-motion";
import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import { MdLeaderboard } from "react-icons/md";
import { RiLineChartLine } from "react-icons/ri";
import { MdSpeed } from "react-icons/md";
import { FaMobileAlt } from "react-icons/fa";
import { TbSeo } from "react-icons/tb";
import Head from "next/head";

export default function SEOServices() {
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 },
        },
    };

    const seoFeatures = [
        {
            title: "Technical SEO Audit",
            icon: <MdSpeed />,
            desc: "Website health analysis & speed optimization",
        },
        {
            title: "Keyword Strategy",
            icon: <MdLeaderboard />,
            desc: "Data-driven keyword mapping for maximum ROI",
        },
        {
            title: "Content Optimization",
            icon: <RiLineChartLine />,
            desc: "Search-aligned content that converts",
        },
        {
            title: "Local SEO Domination",
            icon: <FaMobileAlt />,
            desc: "Dominate local search results & maps",
        },
    ];

    const breadcrumbPaths = [
        { name: "Home", to: "/" },
        { name: "Services", to: "/services" },
        { name: "SEO Services" },
    ];

    return (
        <>
            <Head>
                <title>SEO Services in Surat | Boost Organic Traffic with Kriyona Infotech</title>
                <meta
                    name="description"
                    content="Dominate search rankings with expert SEO services from Kriyona Infotech in Surat. We provide on-page SEO, off-page optimization, technical SEO, and performance tracking to help your business grow."
                />
                <meta
                    name="keywords"
                    content="SEO services Surat, search engine optimization, on-page SEO, off-page SEO, technical SEO, local SEO, Kriyona Infotech"
                />
                <meta property="og:title" content="SEO Services in Surat | Kriyona Infotech" />
                <meta
                    property="og:description"
                    content="Grow your website traffic with proven SEO strategies from Kriyona Infotech. Get better rankings, more leads, and real results."
                />
                <meta property="og:url" content="https://kriyonainfotech.com/services/seo" />
                <meta property="og:type" content="website" />
                <meta
                    property="og:image"
                    content="https://kriyonainfotech.com/kriyona-infotech-logo1.png"
                />
                <link rel="canonical" href="https://kriyonainfotech.com/services/seo" />
            </Head>


            <div className="w-full max-w-7xl mx-auto px-4 md:px-6">
                <Breadcrumb paths={breadcrumbPaths} />

                {/* Hero Section */}
                <section className="py-20 relative overflow-hidden">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="flex flex-col md:flex-row items-center gap-12">
                            <motion.div
                                className="md:w-1/2"
                                initial="hidden"
                                animate="visible"
                                variants={staggerContainer}
                            >
                                <motion.h1
                                    variants={fadeIn}
                                    className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-600 via-purple-500 to-blue-600 bg-clip-text text-transparent"
                                >
                                    Search Engine Dominance <br />
                                    <span className="text-gray-900">That Drives Revenue</span>
                                </motion.h1>

                                <motion.p
                                    variants={fadeIn}
                                    className="text-xl text-gray-600 mb-8 leading-8"
                                >
                                    We don't just improve rankings - we architect organic growth
                                    systems that deliver
                                    <strong> 3X more qualified leads</strong> for Surat
                                    businesses. Google Partner certified.
                                </motion.p>

                                <motion.div variants={fadeIn}>
                                    <Link
                                        href="/contactus"
                                        className="inline-block bg-gradient-to-r from-pink-600 to-blue-500 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all"
                                    >
                                        Get Free SEO Audit →
                                    </Link>
                                </motion.div>
                            </motion.div>

                            <motion.div
                                className="md:w-1/2 relative"
                                initial={{ opacity: 0, x: 100 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                            >
                                <div className="relative z-10">
                                    <img
                                        src="/seo/seo.png"
                                        alt="SEO Strategy Visualization"
                                        className="rounded-2xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform"
                                    />
                                    <div className="absolute -bottom-8 -right-8 bg-white p-4 rounded-2xl shadow-lg w-64">
                                        <div className="flex items-center gap-3">
                                            <TbSeo className="text-2xl text-blue-600" />
                                            <div>
                                                <p className="font-semibold">85%+</p>
                                                <p className="text-sm text-gray-500">
                                                    Client Retention Rate
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Key Services */}
                <section className="py-20">
                    <div className="container mx-auto px-4 md:px-6">
                        <motion.div
                            className="text-center mb-16"
                            initial="hidden"
                            animate="visible"
                            variants={fadeIn}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                Full-Spectrum SEO Solutions
                            </h2>
                            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                                Beyond keywords - we optimize the complete search experience
                            </p>
                        </motion.div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {seoFeatures.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all cursor-pointer group"
                                    whileHover={{ y: -10 }}
                                >
                                    <div className="text-4xl mb-4 bg-gradient-to-r from-pink-600 to-blue-500 p-4 rounded-full w-max text-white group-hover:rotate-12 transition-transform">
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                                    <p className="text-gray-600">{feature.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* SEO Process */}
                <section className="py-20">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="rounded-3xl p-12">
                            <div className="flex flex-col md:flex-row gap-12 items-center">
                                <div className="md:w-1/2">
                                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                        Our 360° SEO Methodology
                                    </h2>
                                    <div className="space-y-8">
                                        {[
                                            {
                                                step: "1",
                                                title: "Deep-Dive Analysis",
                                                text: "Technical audit + competitor research",
                                            },
                                            {
                                                step: "2",
                                                title: "Strategic Planning",
                                                text: "Custom roadmap development",
                                            },
                                            {
                                                step: "3",
                                                title: "Precision Execution",
                                                text: "On-page + off-page optimization",
                                            },
                                            {
                                                step: "4",
                                                title: "Continuous Growth",
                                                text: "Monthly reporting & iteration",
                                            },
                                        ].map((item, index) => (
                                            <motion.div
                                                key={index}
                                                className="flex items-center gap-6"
                                                whileHover={{ x: 10 }}
                                            >
                                                <div className="bg-gradient-to-r from-pink-600 to-blue-500 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold">
                                                    {item.step}
                                                </div>
                                                <div>
                                                    <h3 className="text-xl font-semibold">
                                                        {item.title}
                                                    </h3>
                                                    <p className="text-gray-600">{item.text}</p>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                                <div className="md:w-1/2 relative">
                                    <img
                                        src="/seo/seo-process.jpg"
                                        alt="SEO Process Visualization"
                                        className="rounded-2xl shadow-xl border-8 border-white transform -rotate-2 hover:rotate-0 transition-transform"
                                    />
                                    <div className="absolute -top-6 -left-6 bg-white px-4 py-2 rounded-full shadow-md">
                                        <span className="text-sm font-semibold">
                                            Proven Framework
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <CTASection
                    title="Ready for First Page Rankings?"
                    subtitle="Get your free SEO health check with actionable insights"
                    buttonText="Audit My Website"
                    icon={<TbSeo className="text-4xl text-green-600" />}
                />
            </div>
        </>
    );
}