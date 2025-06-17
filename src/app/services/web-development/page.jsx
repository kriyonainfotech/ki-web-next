'use client';
import Head from "next/head";
import React from "react";
import { motion } from "framer-motion";
import CTASection from "@/components/CTASection";
import Breadcrumb from "@/components/Breadcrumb";
import WebsiteTypesSection from "@/components/WebsiteTypesSection";
import { IoLogoWhatsapp } from "react-icons/io";
import Techweuse from "@/components/Techweuse";
import WhyChooseUs from "@/components/WhyChooseUs";
import ReachOutCTA from "@/components/ReachOutCTA";
import Link from "next/link";

const techList = [
    "React JS",
    "Node JS",
    "Tailwind CSS",
    "Bootstrap",
    "Postman",
    "AWS",
    "Mongo DB",
    "MySQL",
    "GITHUB",
    "OpenAI",
];
const techIcons = [
    { id: 1, img: "/webdev/reactjs.png", alt: "React JS" },
    { id: 2, img: "/webdev/node.png", alt: "Node JS" },
    { id: 3, img: "/webdev/tailwind-css.svg", alt: "Tailwind CSS" },
    { id: 4, img: "/webdev/bootstrap.svg", alt: "Bootstrap" },
    { id: 5, img: "/webdev/postman.png", alt: "Postman" },
    { id: 6, img: "/webdev/aws.png", alt: "AWS" },
    { id: 7, img: "/webdev/mongo.png", alt: "MongoDB" },
    { id: 8, img: "/webdev/mysql.png", alt: "MySQL" },
    { id: 9, img: "/webdev/github.jpg", alt: "GITHUB" },
    { id: 10, img: "/webdev/openai.png", alt: "OpenAI" },
];
const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};

const cta = (
    <>
        <IoLogoWhatsapp size={20} className="inline text-green-600 mr-2" />
        Send Msg
    </>
);

export default function Webdevelopment() {
    const breadcrumbPaths = [
        { name: "Home", to: "/" },
        { name: "Services", to: "/services" },
        { name: "Web Development" },
    ];

    return (
        <>
            <Head>
                <title>Website Development Company in Surat | Custom Web Design by Kriyona Infotech</title>
                <meta
                    name="description"
                    content="Looking for a professional website development company in Surat? Kriyona Infotech builds responsive, SEO-friendly websites tailored for startups, SMEs & enterprises."
                />
                <meta
                    name="keywords"
                    content="website development Surat, web design company, custom website design, responsive websites, business website developers"
                />
                <meta name="author" content="Kriyona Infotech" />

                <meta
                    property="og:title"
                    content="Website Development Company in Surat | Kriyona Infotech"
                />
                <meta
                    property="og:description"
                    content="Kriyona Infotech offers custom website development services in Surat. We build modern, responsive, and SEO-optimized websites for all businesses."
                />
                <meta
                    property="og:url"
                    content="https://www.kriyonainfotech.com/services/web-development"
                />
                <meta property="og:type" content="website" />
                <meta
                    property="og:image"
                    content="https://kriyonainfotech.com//services/web-development-hero.png"
                />

                <meta name="robots" content="index, follow" />
                <link
                    rel="canonical"
                    href="https://kriyonainfotech.com/services/web-development"
                />
            </Head>

            <div className="w-full max-w-7xl mx-auto px-4 md:px-6">
                <Breadcrumb paths={breadcrumbPaths} />

                <section className="flex flex-col md:flex-row py-20 items-center p-8 gap-10 ">
                    <motion.div
                        className="md:w-1/2"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                    >
                        {/* Hero Section */}
                        <div className="text-start">
                            <motion.h1
                                className="text-4xl sm:text-5xl font-bold  bg-gradient-to-r from-pink-600 via-purple-500 to-blue-600 bg-clip-text text-transparent leading-10"
                                initial={{ opacity: 0, x: -50 }} // start 50px left, invisible
                                animate={{ opacity: 1, x: 0 }} // slide to natural position, fully visible
                                transition={{ duration: 0.6 }} // smooth timing
                                viewport={{ once: true }}
                            >
                                Crafting Future-Ready Websites
                                <span className="text-[#222222]">
                                    {" "}
                                    That Elevate Your Business{" "}
                                </span>
                            </motion.h1>
                            <motion.p
                                className="text-lg text-gray-600 pt-16"
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                            >
                                From sleek frontends to powerful backends, we craft websites
                                that elevate your digital presence.
                            </motion.p>

                            <motion.p
                                className="pt-7 text-gray-700 text-lg"
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                            >
                                Kriyona Infotech is a growing{" "}
                                <strong>web development company in India</strong>, delivering
                                high-performance, scalable web solutions. If you're exploring{" "}
                                <strong>IT companies in Surat</strong>, let’s build your online
                                growth together.
                            </motion.p>

                            <motion.div variants={fadeIn} className="mt-10">
                                <Link
                                    href={"/contactus"}
                                    className=" bg-gradient-to-r from-pink-600 via-purple-700 to-blue-500 text-white font-semibold py-3 px-8 rounded-full transition duration-300"
                                >
                                    Get Free Consultation →
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                    {/* Right side: Image (50%) */}
                    <motion.div
                        className="md:w-1/2 flex justify-center"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                    >
                        <img
                            src="/services/web-development-hero.png"
                            alt="web development image"
                            className="max-w-full max-h-96 object-contain rounded-lg "
                        />
                    </motion.div>
                </section>

                <Techweuse techIcons={techIcons} techList={techList} />

                <CTASection icon={<IoLogoWhatsapp className="text-green-700" />} />

                <WhyChooseUs />

                <WebsiteTypesSection />

                <ReachOutCTA
                    title={"Wondering What’s Possible?"}
                    desc={"Drop us a message — we’ll show you what we can do."}
                    cta={cta}
                />
            </div>
        </>
    );
};
