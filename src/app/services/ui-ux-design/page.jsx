'use client';
import React from "react";
import { motion } from "framer-motion";
import Breadcrumb from "@/components/Breadcrumb";
import Techweuse from "@/components/Techweuse";
import CTASection from "@/components/CTASection";
import { FiFigma } from "react-icons/fi";
import { TbWorldSearch } from "react-icons/tb";
import { BsPalette } from "react-icons/bs";
import { GiSpiderWeb } from "react-icons/gi";
import { MdOutlineAnimation } from "react-icons/md";
import { RiUserVoiceLine } from "react-icons/ri";
import { IoLogoWhatsapp } from "react-icons/io";
import ReachOutCTA from "@/components/ReachOutCTA";
import Link from "next/link";
import Head from "next/head";

export default function UIUXdesign() {
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

    const cta = (
        <>
            Let's Talk Design
        </>
    );


    const service = {
        name: "UI/UX DESIGN SERVICES",
        text: "We craft immersive digital experiences that combine aesthetic appeal with intuitive functionality. Our human-centered approach ensures every pixel tells your brand's story.",
        techList: [
            "Figma",
            "Adobe XD",
            "Photoshop",
            "CorelDraw",
            "Canva",
            "Cosmos",
            "Pintrest",
            "OpenAI",
        ],
        techIcons: [
            { img: "/appdev/figma.png", alt: "Figma" },
            { img: "/uiux/adobexd.png", alt: "Adobe XD" },
            { img: "/uiux/photoshop.png", alt: "Photoshop" },
            { img: "/uiux/coreldraw.webp", alt: "CorelDraw" },
            { img: "/uiux/canva.png", alt: "Canva" },
            { img: "/uiux/cosmos.png", alt: "Cosmos" },
            { img: "/uiux/pintrest.png", alt: "Pintrest" },
            { img: "/webdev/openai.png", alt: "OpenAI" },
        ],
    };

    const designProcess = [
        {
            title: "Discover",
            icon: <TbWorldSearch />,
            color: "from-purple-500 to-pink-500",
            description: "User research & competitive analysis",
        },
        {
            title: "Define",
            icon: <RiUserVoiceLine />,
            color: "from-blue-500 to-purple-500",
            description: "User personas & journey mapping",
        },
        {
            title: "Design",
            icon: <BsPalette />,
            color: "from-pink-500 to-red-500",
            description: "Wireframing & visual design",
        },
        {
            title: "Prototype",
            icon: <GiSpiderWeb />,
            color: "from-green-500 to-blue-500",
            description: "Interactive prototypes & testing",
        },
        {
            title: "Deliver",
            icon: <MdOutlineAnimation />,
            color: "from-yellow-500 to-orange-500",
            description: "Design systems & handoff",
        },
    ];

    const breadcrumbPaths = [
        { name: "Home", to: "/" },
        { name: "Services", to: "/services" },
        { name: "UI/UX Design" },
    ];

    return (
        <>

            <Head>
                <title>UI/UX Design Services in Surat | User Experience & Interface Design</title>
                <meta
                    name="description"
                    content="Get modern and user-friendly UI/UX design services in Surat. Kriyona Infotech crafts intuitive designs that enhance user experience and product engagement."
                />
                <meta
                    name="keywords"
                    content="UI/UX design Surat, user experience designer, interface design company, mobile app UI design, web UI/UX services"
                />
                <meta name="author" content="Kriyona Infotech" />

                <meta
                    property="og:title"
                    content="UI/UX Design Agency in Surat | Kriyona Infotech"
                />
                <meta
                    property="og:description"
                    content="Boost user engagement with Kriyona Infotech’s expert UI/UX design services. We design beautiful, intuitive digital interfaces for web & mobile."
                />
                <meta
                    property="og:url"
                    content="https://www.kriyonainfotech.com/services/ui-ux-design"
                />
                <meta property="og:type" content="website" />
                <meta
                    property="og:image"
                    content="https://kriyonainfotech.com/uiux/uiux-hero.jpg"
                />

                <meta name="robots" content="index, follow" />
                <link
                    rel="canonical"
                    href="https://www.kriyonainfotech.com/services/ui-ux-design"
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
                                    Design That Speaks
                                    <span className="text-gray-900"> & Converts</span>
                                </motion.h1>

                                <motion.p
                                    variants={fadeIn}
                                    className="text-xl text-gray-600 mb-8 leading-8"
                                >
                                    We don't just make things pretty - we create strategic digital
                                    experiences that solve business problems. Voted best UI/UX
                                    agency in Surat for 1 consecutive years.
                                </motion.p>

                                <motion.div variants={fadeIn}>
                                    <Link
                                        href="/contactus"
                                        className="inline-block bg-gradient-to-r from-pink-600 to-blue-500 text-white px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all"
                                    >
                                        Schedule Design Audit →
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
                                        src="/uiux/uiux-hero.jpg"
                                        alt="UI/UX Design Process"
                                        className="rounded-2xl shadow-2xl transform transition-transform"
                                    />
                                    <div className="absolute -bottom-8 -right-8 bg-white p-4 rounded-2xl shadow-lg w-64">
                                        <div className="flex items-center gap-3">
                                            <FiFigma className="text-2xl text-pink-600" />
                                            <div>
                                                <p className="font-semibold">Live Prototype</p>
                                                <p className="text-sm text-gray-500">
                                                    Interactive demo available
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Design Process */}
                <section className="py-20">
                    <div className="container mx-auto px-4 md:px-6">
                        <motion.div
                            className="text-center mb-16"
                            initial="hidden"
                            animate="visible"
                            variants={fadeIn}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                Our Design Philosophy
                            </h2>
                            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                                Where aesthetics meet functionality through proven methodologies
                            </p>
                        </motion.div>

                        <div className="grid md:grid-cols-5 gap-8">
                            {designProcess.map((step, index) => (
                                <motion.div
                                    key={index}
                                    className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all cursor-pointer"
                                    whileHover={{ y: -10 }}
                                >
                                    <div
                                        className={`text-4xl mb-4 bg-gradient-to-r ${step.color} p-4 rounded-full w-max text-white`}
                                    >
                                        {step.icon}
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                                    <p className="text-gray-600">{step.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
                <ReachOutCTA
                    title={"Ready to Elevate Your User Experience?"}
                    desc={"Let’s chat about how we can design something your users will love."}
                    cta={cta}
                />


                {/* Interactive Demo Section */}
                <section className="py-20">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className=" rounded-3xl p-12">
                            <div className="flex flex-col md:flex-row gap-12 items-center">
                                <div className="md:w-1/2">
                                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                        Experience the Difference
                                    </h2>
                                    <p className="text-lg text-gray-600 mb-8">
                                        Interact with our live design system playground. See how we
                                        create consistent, scalable interfaces.
                                    </p>
                                    <ul className="space-y-4">
                                        <li className="flex items-center gap-3">
                                            <div className="w-2 h-2 bg-pink-600 rounded-full"></div>
                                            Real-time component editing
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                                            Accessibility checker
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                                            Design version comparison
                                        </li>
                                    </ul>
                                </div>

                                <div className="md:w-1/2 relative">
                                    <motion.img
                                        src="/uiux/uiux.png"
                                        alt="Design System Demo"
                                        className="rounded-2xl transform -rotate-2 hover:rotate-0 transition-transform"
                                        animate={{
                                            y: [0, -20, 0], // Bounce up and down
                                        }}
                                        transition={{
                                            duration: 1.2,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                        }}
                                    />
                                    <div className="absolute -top-6 -right-6 bg-white px-4 py-2 rounded-full shadow-md">
                                        <span className="text-sm font-semibold">Live Demo</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <Techweuse techIcons={service.techIcons} techList={service.techList} />

                <CTASection
                    title="Let's Design Something Amazing"
                    subtitle="Book a free 30-minute design strategy session with our lead UX architect"
                    buttonText="Start Your Project"
                    icon={<IoLogoWhatsapp className="text-green-600" />}
                />
            </div>
        </>
    );
}