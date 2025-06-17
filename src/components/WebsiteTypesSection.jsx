'use client';
import {
    FaGlobe,
    FaShoppingCart,
    FaLaptopCode,
    FaBriefcase,
    FaNewspaper,
    FaNetworkWired,
    FaUserFriends,
} from "react-icons/fa";
import { MdWeb, MdDynamicFeed } from "react-icons/md";
import { motion } from "framer-motion";
import { useState } from "react";

const websiteTypes = [
    {
        title: "Static Websites",
        desc: "Clean and fast-loading websites ideal for portfolios, small businesses, and landing pages.",
        icon: <MdWeb />,
        color: "from-pink-600 to-pink-400",
    },
    {
        title: "Dynamic Websites",
        desc: "Websites with interactive content and real-time data like blogs, dashboards, and portals.",
        icon: <MdDynamicFeed />,
        color: "from-purple-600 to-purple-400",
    },
    {
        title: "Full-Stack Web Apps",
        desc: "From frontend to backend, we build robust full-stack apps tailored to your business.",
        icon: <FaLaptopCode />,
        color: "from-blue-600 to-blue-400",
    },
    {
        title: "Business Portfolio Sites",
        desc: "Professional sites that showcase your services, team, achievements, and credibility.",
        icon: <FaBriefcase />,
        color: "from-indigo-600 to-indigo-400",
    },
    {
        title: "E-Commerce Platforms",
        desc: "Sell online with powerful, scalable shopping platforms designed to grow with you.",
        icon: <FaShoppingCart />,
        color: "from-red-600 to-red-400",
    },
    {
        title: "Multi-Page Company Sites",
        desc: "Custom, well-structured websites with multiple service, about, contact, and blog pages.",
        icon: <FaNetworkWired />,
        color: "from-green-600 to-green-400",
    },
    {
        title: "News & Blogs",
        desc: "Content-driven sites optimized for publishing, SEO, and reader engagement.",
        icon: <FaNewspaper />,
        color: "from-yellow-600 to-yellow-400",
    },
    {
        title: "Community & Membership",
        desc: "Build platforms for forums, groups, memberships, or exclusive access content.",
        icon: <FaUserFriends />,
        color: "from-teal-600 to-teal-400",
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.3,
        },
    },
};

const orbitVariants = (radius) => ({
    hidden: {
        opacity: 0,
        x: -radius,
        y: -radius,
    },
    visible: {
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 50,
            damping: 10,
        },
    },
    hover: {
        scale: 1.1,
        transition: { duration: 0.2 },
    },
});

const centerVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
        scale: 1,
        opacity: 1,
        transition: {
            duration: 0.5,
            ease: "backOut",
        },
    },
    hover: {
        scale: 1.05,
        transition: { duration: 0.2 },
    },
};

export default function WebsiteTypesSection() {
    const [activeIndex, setActiveIndex] = useState(null);

    const radius = 230; // Orbit radius
    const angleStep = (2 * Math.PI) / websiteTypes.length;

    return (
        <section className="py-12 md:py-20 px-4 sm:px-6 overflow-hidden relative min-h-[500px] md:min-h-[800px]">
            <div className="max-w-7xl mx-auto text-center relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-pink-600 via-purple-700 to-blue-500 bg-clip-text text-transparent"
                >
                    Types of Websites We Build
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-gray-600 text-base sm:text-lg max-w-full mx-auto mb-8 md:mb-16 px-4"
                >
                    Whether you're a startup, enterprise, or freelancer, we develop
                    websites that fit your unique needs—from simple static pages to
                    complex, scalable web applications.
                </motion.p>

                {/* Mobile Grid Layout */}
                <div className="lg:hidden">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                    >
                        {websiteTypes.map((type, idx) => (
                            <motion.div
                                key={idx}
                                variants={{
                                    hidden: { opacity: 0, y: 20 },
                                    visible: { opacity: 1, y: 0 },
                                }}
                                whileHover={{ scale: 1.03 }}
                                className={`rounded-xl p-4 sm:p-6 bg-gradient-to-br  from-purple-600/10 to-pink-500/10 backdrop-blur-sm border border-white/20 shadow-md cursor-pointer`}
                            >
                                <div className="text-3xl mb-3 flex justify-center">
                                    {type.icon}
                                </div>
                                <h4 className="font-bold text-gray-800 text-sm sm:text-base mb-2 text-center">
                                    {type.title}
                                </h4>
                                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed text-center">
                                    {type.desc}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* Desktop Orbit Layout (hidden on mobile) */}

                <section className="pb-20 px-6 hidden lg:block overflow-hidden relative  min-h-[600px]">
                    {/* Background gradient */}
                    <div className="absolute inset-0  z-0"></div>

                    <div className="max-w-7xl mx-auto text-center relative z-10">
                        <div className="relative h-[700px]">
                            {/* Center element */}
                            <motion.div
                                variants={centerVariants}
                                initial="hidden"
                                whileInView="visible"
                                whileHover="hover"
                                viewport={{ once: true }}
                                className="absolute left-[53.5%] top-[65.5%] -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full b shadow-xl flex items-center justify-center  bg-gradient-to-r from-pink-600 via-purple-700 to-blue-500 border-2 border-gray-100 z-10"
                            >
                                <div className="">
                                    <FaGlobe className="text-white" size={50} />
                                </div>
                            </motion.div>

                            {/* Orbit items */}
                            <motion.div
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="w-full h-full"
                            >
                                {websiteTypes.map((type, idx) => {
                                    const angle = angleStep * idx;
                                    const x = radius * Math.cos(angle);
                                    const y = radius * Math.sin(angle);

                                    const oneLineDesc =
                                        type.desc
                                            .split(/[.,]/)[0]
                                            .split(" ")
                                            .slice(0, 7)
                                            .join(" ") + "...";

                                    // Determine correct transform origin
                                    //   const isRightSide = Math.cos(angle) < 0;
                                    //   const transformOrigin = isRightSide
                                    //     ? "left center"
                                    //         : "right center";

                                    return (
                                        <motion.div
                                            key={idx}
                                            variants={orbitVariants(radius)}
                                            initial={{ opacity: 0, x: -radius, y: -radius }}
                                            animate={{ opacity: 1, x: 0, y: 0 }}
                                            transition={{
                                                type: "spring",
                                                stiffness: 50,
                                                damping: 10,
                                            }}
                                            whileHover={{
                                                width: 280,
                                                zIndex: 20,
                                                transition: { duration: 0.5 },
                                            }}
                                            onClick={{
                                                width: 280,
                                                zIndex: 50,
                                                transition: { duration: 0.5 },
                                            }}
                                            style={{
                                                position: "absolute",
                                                left: "45%",
                                                top: "50%",
                                                translateX: x,
                                                translateY: y,
                                                // transformOrigin: transformOrigin,
                                            }}
                                            className={`w-44 h-auto min-h-[192px] rounded-2xl p-6 bg-gradient-to-br from-purple-600/10 to-pink-500/10 backdrop-blur-sm shadow-lg border border-gray-100 flex flex-col items-center justify-center text-center cursor-pointer group z-0`}
                                        >
                                            <div className={`text-4xl mb-3 `}>{type.icon}</div>
                                            <h4 className="font-bold text-gray-800">{type.title}</h4>
                                            <div className="w-full">
                                                {/* <p className="text-xs text-gray-500 line-clamp-2 group-hover:hidden">
                        {oneLineDesc}
                      </p> */}
                                                <p className="hidden group-hover:block text-xs text-gray-600 pt-1">
                                                    {type.desc}
                                                </p>
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </motion.div>
                        </div>
                    </div>
                </section>
            </div>
        </section>
    );
}