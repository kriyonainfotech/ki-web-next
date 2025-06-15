'use client';
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import Techweuse from "@/components/Techweuse";
import Breadcrumb from "@/components/Breadcrumb";
import {
    FaFilm,
    FaPhotoVideo,
    FaPalette,
    FaSmile,
    FaRocket,
    FaRegLightbulb,
    FaVideo,
} from "react-icons/fa";

export default function VideoEditingService() {
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
        name: "Video Editing & Graphics",
        text: "We transform raw footage into compelling visual stories that captivate audiences and drive engagement. Specializing in social media content, promotional videos, and motion graphics.",
        features: [
            {
                title: "Dynamic Edits",
                icon: <FaRocket />,
                desc: "Pace-perfect cuts for maximum retention",
            },
            {
                title: "Motion Graphics",
                icon: <FaFilm />,
                desc: "Smooth animations & text overlays",
            },
            {
                title: "Color Grading",
                icon: <FaPalette />,
                desc: "Cinematic color correction & LUTs",
            },
            {
                title: "SFX & Audio Mixing",
                icon: <FaPhotoVideo />,
                desc: "Professional sound design integration",
            },
        ],
        process: [
            {
                step: "1",
                title: "Concept Development",
                desc: "Creative brief & style exploration",
            },
            {
                step: "2",
                title: "Asset Preparation",
                desc: "Footage organization & script finalization",
            },
            {
                step: "3",
                title: "Editing Magic",
                desc: "Rough cut to final timeline polishing",
            },
            {
                step: "4",
                title: "Delivery Ready",
                desc: "Format optimization & platform specs",
            },
        ],
        techList: [
            "Premiere Pro",
            "DaVinci Resolve",
            "After Effects",
            "Illustrator",
            "Photoshop",
        ],
        techIcons: [
            { img: "/ve/premiere.png", alt: "Adobe Premiere Pro" },
            { img: "/ve/davinci.png", alt: "DaVinci Resolve" },
            { img: "/ve/photoshop.png", alt: "Adobe Photoshop" }, // Use the correct image path.png", alt: "Adobe After Effects" },
            { img: "/ve/illustrator.png", alt: "Adobe Illustrator" },
            { img: "/ve/after.png", alt: "Adobe After Effects" },
        ],
    };

    const breadcrumbPaths = [
        { name: "Home", to: "/" },
        { name: "Services", to: "/services" },
        { name: "Video Editing" },
    ];

    return (
        <>
            {/* <Helmet>
                <title>Professional Video Editing Services | Kriyona Infotech</title>
                <meta
                    name="description"
                    content="Award-winning video editing & motion graphics services. Specialists in social media content, promotional videos, and cinematic edits using industry-standard tools."
                />
            </Helmet> */}

            <div className="container mx-auto">
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
                                    Visual Storytelling <br />
                                    <span className="text-gray-900">That Captivates</span>
                                </motion.h1>

                                <motion.p
                                    variants={fadeIn}
                                    className="text-xl text-gray-600 mb-8 leading-8"
                                >
                                    {services.text} <strong>200+ projects delivered</strong> with
                                    98% client satisfaction rate.
                                </motion.p>

                                <motion.div variants={fadeIn}>
                                    <Link
                                        href="/contactus"
                                        className="inline-block bg-gradient-to-r from-pink-600 to-blue-500 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all"
                                    >
                                        Discuss Your Project →
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
                                    src="/ve/video-editing-hero.jpg"
                                    alt="Video Editing Process"
                                    className="rounded-2xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform"
                                />
                                <div className="absolute -bottom-8 -right-8 bg-white p-4 rounded-2xl shadow-lg w-64">
                                    <div className="flex items-center gap-3">
                                        <FaVideo className="text-2xl text-purple-600" />
                                        <div>
                                            <p className="font-semibold">48h</p>
                                            <p className="text-sm text-gray-500">
                                                Average Turnaround Time
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Key Features */}
                <section className="py-20">
                    <div className="container mx-auto px-4 md:px-6">
                        <motion.div
                            className="text-center mb-16"
                            initial="hidden"
                            animate="visible"
                            variants={fadeIn}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                Precision Editing Capabilities
                            </h2>
                            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                                From raw footage to viral-ready content - we handle every detail
                            </p>
                        </motion.div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {services.features.map((feature, index) => (
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

                {/* Work Process */}
                <section className="py-20">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-12">
                            <div className="flex flex-col md:flex-row gap-12 items-center">
                                <div className="md:w-1/2">
                                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                        Our 4-Step Editing Process
                                    </h2>
                                    <div className="space-y-8">
                                        {services.process.map((step, index) => (
                                            <motion.div
                                                key={index}
                                                className="flex items-center gap-6"
                                                whileHover={{ x: 10 }}
                                            >
                                                <div className="bg-gradient-to-r from-pink-600 to-blue-500 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold">
                                                    {step.step}
                                                </div>
                                                <div>
                                                    <h3 className="text-xl font-semibold">
                                                        {step.title}
                                                    </h3>
                                                    <p className="text-gray-600">{step.desc}</p>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                                <div className="md:w-1/2 relative">
                                    <img
                                        src="/ve/editing-process.jpg"
                                        alt="Editing Workflow"
                                        className="rounded-2xl shadow-xl border-8 border-white transform -rotate-2 hover:rotate-0 transition-transform"
                                    />
                                    <div className="absolute -top-6 -left-6 bg-white px-4 py-2 rounded-full shadow-md">
                                        <span className="text-sm font-semibold">
                                            Frame-by-Frame Perfection
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <Techweuse
                    techIcons={services.techIcons}
                    techList={services.techList}
                />

                <CTASection
                    title="Ready to Elevate Your Visual Content?"
                    subtitle="Get a free editing sample using your raw footage"
                    buttonText="Start Editing Now"
                    icon={<FaVideo className="text-4xl text-red-500" />}
                />
            </div>
        </>
    );
}