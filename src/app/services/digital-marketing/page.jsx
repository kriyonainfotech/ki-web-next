'use client';
import React from "react";
import CTASection from "@/components/CTASection";
import Breadcrumb from "@/components/Breadcrumb";
import { motion } from "framer-motion";
import Link from 'next/link';
import {
    FaGoogle,
    FaFacebook,
    FaChartLine,
    FaVideo,
    FaHashtag,
    FaRegLightbulb,
} from "react-icons/fa";
import Head from "next/head";

export default function DigitalMarketing() {

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

    const services = {
        name: "Digital Business Solution",
        text: "Empowering your business with cutting-edge strategies and creative solutions to drive growth in the digital space. At Kriyona Infotech, we specialize in providing comprehensive digital marketing services tailored to your business needs, ensuring maximum impact and sustainable results.",
        list: [
            { id: 1, li: "Google Ads", icon: <FaGoogle /> },
            { id: 2, li: "Meta Ads", icon: <FaFacebook /> },
            { id: 3, li: "SEO Optimization", icon: <FaChartLine /> },
            { id: 4, li: "Social Media Management", icon: <FaHashtag /> },
            { id: 5, li: "Video Boosting", icon: <FaVideo /> },
            { id: 6, li: "Social Media Optimization", icon: <FaRegLightbulb /> },
        ],
    };

    const breadcrumbPaths = [
        { name: "Home", to: "/" },
        { name: "Services", to: "/services" },
        { name: "Digital Marketing" },
    ];


    return (
        <>
            <Head>
                <title>Digital Marketing Company in Surat | SEO, Social Media & Ads</title>
                <meta
                    name="description"
                    content="Boost your online presence with Kriyona Infotech’s digital marketing services in Surat. We offer SEO, social media marketing, Google Ads & more."
                />
                <meta
                    name="keywords"
                    content="digital marketing Surat, SEO services Surat, social media marketing, Google ads agency, online marketing company"
                />
                <meta name="author" content="Kriyona Infotech" />

                <meta
                    property="og:title"
                    content="Top Digital Marketing Agency in Surat | Kriyona Infotech"
                />

                <meta
                    property="og:description"
                    content="Result-driven digital marketing services including SEO, PPC, content marketing, and social media ads. Trusted by Surat-based businesses."
                />

                <meta
                    property="og:url"
                    content="https://www.kriyonainfotech.com/services/digital-marketing"
                />

                <meta property="og:type" content="website" />
                <meta
                    property="og:image"
                    content="https://kriyonainfotech.com/dm/digital-marketing-hero.png"
                />

                <meta name="robots" content="index, follow" />
                <link
                    rel="canonical"
                    href="https://www.kriyonainfotech.com/services/digital-marketing"
                />
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
                                    Digital Growth <br />
                                    <span className="text-gray-900">Engineered for Impact</span>
                                </motion.h1>

                                <motion.p
                                    variants={fadeIn}
                                    className="text-xl text-gray-600 mb-8 leading-8"
                                >
                                    {services.text}
                                </motion.p>

                                <motion.div variants={fadeIn}>
                                    <Link
                                        href="/contactus"
                                        className="inline-block bg-gradient-to-r from-pink-600 to-blue-500 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all"
                                    >
                                        Boost Your Digital Presence →
                                    </Link>
                                </motion.div>
                            </motion.div>

                            <motion.div
                                className="md:w-1/2 relative"
                                initial={{ opacity: 0, x: 100 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                            >
                                <img
                                    src="/dm/digital-marketing-hero.png"
                                    alt="Digital Marketing Strategies"
                                    className="rounded-2xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform"
                                />
                                <div className="absolute -bottom-8 -right-8 bg-white p-4 rounded-2xl shadow-lg w-64">
                                    <div className="flex items-center gap-3">
                                        <FaChartLine className="text-2xl text-purple-600" />
                                        <div>
                                            <p className="font-semibold">+150%</p>
                                            <p className="text-sm text-gray-500">
                                                Average ROI Increase
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Services Grid */}
                <section className="py-20 bg-gray-50">
                    <div className="container mx-auto px-4 md:px-6">
                        <motion.div
                            className="text-center mb-16"
                            initial="hidden"
                            animate="visible"
                            variants={fadeIn}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                Full-Funnel Digital Solutions
                            </h2>
                            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                                From awareness to conversion - we optimize every touchpoint
                            </p>
                        </motion.div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {services.list.map((service, index) => (
                                <motion.div
                                    key={service.id}
                                    className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all cursor-pointer group"
                                    whileHover={{ y: -10 }}
                                >
                                    <div className="text-4xl mb-4 bg-gradient-to-r from-pink-600 to-blue-500 p-4 rounded-full w-max text-white group-hover:rotate-12 transition-transform">
                                        {service.icon}
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">{service.li}</h3>
                                    <p className="text-gray-600">
                                        {service.id === 1 && "Precision-targeted PPC campaigns"}
                                        {service.id === 2 && "Social media advertising mastery"}
                                        {service.id === 3 && "Search engine dominance strategy"}
                                        {service.id === 4 && "Content & community management"}
                                        {service.id === 5 && "Video advertising amplification"}
                                        {service.id === 6 && "Platform-specific optimization"}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Strategy Process */}
                <section className="py-20">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-12">
                            <div className="flex flex-col md:flex-row gap-12 items-center">
                                <div className="md:w-1/2">
                                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                        Data-Driven Marketing Approach
                                    </h2>
                                    <div className="space-y-8">
                                        {[
                                            {
                                                step: "1",
                                                title: "Audience Insight",
                                                text: "Deep demographic & behavioral analysis",
                                            },
                                            {
                                                step: "2",
                                                title: "Channel Strategy",
                                                text: "Platform-specific campaign planning",
                                            },
                                            {
                                                step: "3",
                                                title: "Creative Execution",
                                                text: "High-converting content creation",
                                            },
                                            {
                                                step: "4",
                                                title: "Performance Scaling",
                                                text: "Continuous optimization & growth",
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
                                        src="/dm/Digital-Marketing-Process.png"
                                        alt="Marketing Process"
                                        className="rounded-2xl shadow-xl border-8 border-white py-10  transform -rotate-2 hover:rotate-0 transition-transform"
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
                    title="Ready for Digital Transformation?"
                    subtitle="Get a free campaign strategy session with our marketing experts"
                    buttonText="Launch My Campaign"
                    icon={<FaRegLightbulb className="text-4xl text-yellow-500" />}
                />
            </div>
        </>
    );
}