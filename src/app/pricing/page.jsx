'use client' // only if you're in app directory and need interactivity
import Head from "next/head";

import React from 'react'

const pricingServices = [
    {
        title: "Website Development",
        features: [
            "Responsive website design and development",
            "SEO-friendly and fast loading pages",
            "CMS integration and eCommerce support",
        ],
        pdfLink: "/packages/website-development.pdf",
    },
    {
        title: "Mobile App Development",
        features: [
            "Cross-platform mobile app solutions",
            "Fast development with native-like performance",
            "UI/UX design integration and testing",
        ],
        pdfLink: "/packages/flutter-app.pdf",
    },
    {
        title: "Software Development",
        features: [
            "Custom software built on Flutter framework",
            "Seamless performance on all platforms",
            "Ongoing support and maintenance options",
        ],
        pdfLink: "/packages/flutter-software.pdf",
    },
    {
        title: "Server Management",
        features: [
            "Server setup, configuration, and monitoring",
            "Security hardening and updates",
            "Backup and disaster recovery plans",
        ],
        pdfLink: "/packages/server-management.pdf",
    },
    {
        title: "Web Hosting & Domain Services",
        features: [
            "Reliable web hosting with uptime guarantee",
            "Domain registration and management",
            "SSL setup and security monitoring",
        ],
        pdfLink: "/packages/web-hosting.pdf",
    },
    {
        title: "SEO",
        features: [
            "On-page and off-page optimization",
            "Keyword research and analysis",
            "Regular performance reporting",
        ],
        pdfLink: "/packages/seo.pdf",
    },
    {
        title: "Cloud Service",
        features: [
            "Scalable cloud infrastructure management",
            "Secure data storage and backups",
            "24/7 monitoring and support included",
        ],
        pdfLink: "/packages/cloud-service.pdf",
    },
    {
        title: "Branding",
        features: [
            "Complete brand identity and logo design",
            "Business card, letterhead & color palette",
            "Multiple revisions and essential files delivered",
        ],
        pdfLink: "/packages/branding.pdf",
    },
    {
        title: "Social Media Management",
        features: [
            "Custom content creation and scheduling",
            "Engagement and growth strategies",
            "Performance tracking with reports",
        ],
        pdfLink: "/packages/smm.pdf",
    },
    {
        title: "IT Consulting",
        features: [
            "Technology assessment and roadmap planning",
            "Security and compliance guidance",
            "Scalable solution recommendations",
        ],
        pdfLink: "/packages/it-consulting.pdf",
    },
    {
        title: "Marketing Service",
        features: [
            "Strategic campaign planning and execution",
            "Social media & content marketing",
            "Performance tracking and analytics",
        ],
        pdfLink: "/packages/marketing.pdf",
    },
    {
        title: "Product Designing",
        features: [
            "Innovative product UI/UX design",
            "Prototyping and wireframing",
            "User-centric design approach",
        ],
        pdfLink: "/packages/product-designing.pdf",
    },
    {
        title: "Logo Design",
        features: [
            "Creative logo concepts tailored to your brand",
            "Revision rounds for refinement",
            "All formats delivered for versatile use",
        ],
        pdfLink: "/packages/logo-design.pdf",
    },
    {
        title: "Invitation Card",
        features: [
            "Custom digital invitation design",
            "Multiple concepts with revisions",
            "Ready-to-share JPG/PNG formats",
        ],
        pdfLink: "/packages/invitation.pdf",
    },
    {
        title: "UI/UX",
        features: [
            "User interface and experience design",
            "Interactive prototypes and testing",
            "Focus on usability and accessibility",
        ],
        pdfLink: "/packages/ui-ux.pdf",
    },
    {
        title: "Visiting Card",
        features: [
            "Custom visiting card designs",
            "Single/double-sided options",
            "Print-ready formats delivery",
        ],
        pdfLink: "/packages/visiting-card.pdf",
    },
    {
        title: "Wedding Invitation Card",
        features: [
            "Elegant digital wedding invites",
            "Multiple design concepts & revisions",
            "High-res JPG/PNG for easy sharing",
        ],
        pdfLink: "/packages/wedding-invite.pdf",
    },
    {
        title: "YouTube Video Thumbnail",
        features: [
            "Custom, eye-catching thumbnail designs",
            "Optimized for higher click-through rates",
            "Delivered in YouTube recommended format",
        ],
        pdfLink: "/packages/youtube-thumbnail.pdf",
    },
];

export default function Pricing() {
    return (
        <div>
            <Head>
                <title>Pricing Packages | Website, App, Branding & Marketing – Kriyona Infotech</title>
                <meta
                    name="description"
                    content="Explore affordable pricing packages by Kriyona Infotech for web development, app development, logo design, SEO, branding, and digital marketing. Transparent and value-packed plans."
                />
                <meta
                    name="keywords"
                    content="Kriyona Infotech pricing, website development packages, app development pricing, SEO services, branding pricing, Surat IT company"
                />
                <meta property="og:title" content="Pricing Packages | Kriyona Infotech" />
                <meta
                    property="og:description"
                    content="Check out Kriyona Infotech’s transparent pricing for custom websites, mobile apps, branding, design, and digital marketing services tailored to your business."
                />
                <meta property="og:url" content="https://kriyonainfotech.com/pricing" />
                <meta property="og:type" content="website" />
                <meta
                    property="og:image"
                    content="https://kriyonainfotech.com/kriyona-infotech-logo1.png"
                />
                <link rel="canonical" href="https://kriyonainfotech.com/pricing" />
            </Head>

            <div className="px-5 sm:px-5 lg:px-24 2xl:px-40 my-20">
                {/* Hero Section */}
                <div className="bg-hero-grid mt-5">
                    <div className="text-center sm:px-10 md:px-20 lg:px-0 xl:px-10 border border-black-border py-20 md:py-28">
                        <h1 className="text-2xl sm:text-4xl xl:text-4xl xs:w-auto font-semibold text-primary-black sm:w-4/5 mx-auto">
                            Straightforward Pricing for Digital Excellence
                        </h1>
                        <p className="text-md lg:text-lg pt-10 text-gray-600 w-auto xl:w-5/6 mx-auto">
                            Quality solutions with transparent pricing. No hidden fees, just exceptional value.
                        </p>
                    </div>
                </div>

                {/* Service Cards */}
                <h2 className="text-3xl font-bold text-center text-primary-black my-12">
                    Our Services & Pricing Guides
                </h2>
                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                    {pricingServices.map(({ title, features, pdfLink }) => (
                        <div
                            key={title}
                            className="border border-black-border rounded-lg p-8 bg-white hover:shadow-lg transition-all duration-300 flex flex-col"
                        >
                            <h3
                                className="text-2xl font-extrabold mb-5 bg-gradient-to-b from-purple-700 to-pink-600 bg-clip-text text-transparent"
                                style={{ lineHeight: "1.2" }}
                            >
                                {title}
                            </h3>

                            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                                {features.map((feature, i) => (
                                    <li key={i}>{feature}</li>
                                ))}
                            </ul>

                            {/* Wrap the button in a div with mt-auto to push it to the bottom */}
                            <div className="mt-auto pt-6">
                                <a
                                    href={pdfLink}
                                    download
                                    className="inline-block px-6 py-3 rounded-full font-medium text-gray-900 bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 backdrop-blur-sm  transition-all duration-300 bg-[length:300%] bg-left hover:bg-right"
                                >
                                    Download Pricing Guide
                                </a>
                            </div>
                        </div>

                    ))}
                </div>

                {/* Value Section */}
                <div className="mt-20 py-20 px-6 md:px-12 border border-[#55555580] text-center">
                    <h2 className="text-4xl font-extrabold text-gray-900 mb-6 tracking-tight">
                        Why Our Pricing Works
                    </h2>
                    <p className="text-gray-600 max-w-xl mx-auto mb-12">
                        Transparent, flexible, and built to deliver real value — no fluff, just results.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: "✓",
                                title: "No Hidden Costs",
                                desc: "All-inclusive pricing with clear deliverables"
                            },
                            {
                                icon: "↔",
                                title: "Flexible Options",
                                desc: "Project-based or hourly engagement models"
                            },
                            {
                                icon: "★",
                                title: "Premium Value",
                                desc: "Enterprise quality at competitive rates"
                            }
                        ].map((item, index) => (
                            <div key={index} className="p-6 bg-gradient-to-br from-white via-[#f7f7ff] to-[#f2f2fa] shadow-lg hover:shadow-md transition-shadow duration-300">
                                <div className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#efc495] via-[#8f0f91] to-[#644c9c] mb-4">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                                <p className="text-gray-600">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>


                {/* CTA Section */}
                <div className="mt-32 py-16 text-center shadow-lg bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 backdrop-blur-sm ">
                    <h2 className="text-3xl font-bold mb-6">
                        Need Custom Pricing?
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto mb-10 px-4">
                        Contact us for personalized quotes tailored to your specific requirements.
                    </p>
                    <a
                        href="/contactus"
                        className="inline-flex items-center gap-2 bg-white text-purple-600 font-semibold px-6 py-3 rounded-full shadow-lg transition"
                    >
                        Get a Custom Quote
                    </a>
                </div>
            </div>
        </div>
    );
}