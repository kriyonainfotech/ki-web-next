'use client' // only if you're in app directory and need interactivity

import React from 'react'

const pricingServices = [
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
        title: "Cloud Service",
        features: [
            "Scalable cloud infrastructure management",
            "Secure data storage and backups",
            "24/7 monitoring and support included",
        ],
        pdfLink: "/packages/cloud-service.pdf",
    },
    {
        title: "Flutter App Development",
        features: [
            "Cross-platform mobile app solutions",
            "Fast development with native-like performance",
            "UI/UX design integration and testing",
        ],
        pdfLink: "/packages/flutter-app.pdf",
    },
    {
        title: "Flutter Software Development",
        features: [
            "Custom software built on Flutter framework",
            "Seamless performance on all platforms",
            "Ongoing support and maintenance options",
        ],
        pdfLink: "/packages/flutter-software.pdf",
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
        title: "IT Consulting",
        features: [
            "Technology assessment and roadmap planning",
            "Security and compliance guidance",
            "Scalable solution recommendations",
        ],
        pdfLink: "/packages/it-consulting.pdf",
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
        title: "SEO",
        features: [
            "On-page and off-page optimization",
            "Keyword research and analysis",
            "Regular performance reporting",
        ],
        pdfLink: "/packages/seo.pdf",
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
        title: "Social Media Management",
        features: [
            "Custom content creation and scheduling",
            "Engagement and growth strategies",
            "Performance tracking with reports",
        ],
        pdfLink: "/packages/smm.pdf",
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
        title: "Web Hosting & Domain Services",
        features: [
            "Reliable web hosting with uptime guarantee",
            "Domain registration and management",
            "SSL setup and security monitoring",
        ],
        pdfLink: "/packages/web-hosting.pdf",
    },
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
            {/* <Helmet>
                <title>Transparent Pricing | Kriyona Infotech Services</title>
                <meta
                    name="description"
                    content="Get competitive pricing for web development, app creation, branding, and digital marketing services. Download our full pricing guide."
                />
            </Helmet> */}

            <div className="xxs:px-5 sm:px-5 lg:px-24 2xl:px-40 my-20">
                {/* Hero Section */}
                <div className="bg-hero-grid mt-5">
                    <div className="text-center sm:px-10 md:px-20 lg:px-0 xl:px-10 border border-black-border py-20 md:py-28">
                        <h1 className="xxs:text-2xl sm:text-4xl font-bold text-gray-900">
                            Straightforward Pricing for Digital Excellence
                        </h1>
                        <p className="text-xl mt-5 text-primary-black xxs:w-auto xl:w-4/6 mx-auto">
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
                                className="text-2xl font-extrabold mb-5 bg-gradient-to-b from-purple-900 to-pink-900 bg-clip-text text-transparent"
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
                                    className="inline-block px-6 py-3 rounded-full font-medium text-white transition-all duration-300 bg-[length:300%] bg-left hover:bg-right"
                                    style={{
                                        background:
                                            "linear-gradient(90deg, #db2777, #7e22ce, #3b82f6)", // pink-600 → purple-700 → blue-500
                                        backgroundSize: "300%",
                                        backgroundPosition: "left",
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.backgroundPosition = "right";
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.backgroundPosition = "left";
                                    }}
                                >
                                    Download Pricing Guide
                                </a>
                            </div>
                        </div>

                    ))}
                </div>

                {/* Value Section */}
                <div className="border border-black-border mt-20 py-16 text-center">
                    <h2 className="text-3xl font-bold text-primary-black mb-6">
                        Why Our Pricing Works
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
                        <div className="p-6">
                            <div className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#efc495] via-[#8f0f91] to-[#644c9c] mb-4">
                                ✓
                            </div>
                            <h3 className="text-xl font-semibold mb-2">No Hidden Costs</h3>
                            <p className="text-gray-600">All-inclusive pricing with clear deliverables</p>
                        </div>

                        <div className="p-6">
                            <div className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#efc495] via-[#8f0f91] to-[#644c9c] mb-4">
                                ↔
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Flexible Options</h3>
                            <p className="text-gray-600">Project-based or hourly engagement models</p>
                        </div>

                        <div className="p-6">
                            <div className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#efc495] via-[#8f0f91] to-[#644c9c] mb-4">
                                ★
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Premium Value</h3>
                            <p className="text-gray-600">Enterprise quality at competitive rates</p>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="border border-black-border mt-20 py-16 text-center">
                    <h2 className="text-3xl font-bold text-primary-black mb-6">
                        Need Custom Pricing?
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto mb-10 px-4">
                        Contact us for personalized quotes tailored to your specific requirements.
                    </p>
                    <a
                        href="/contactus"
                        className="inline-block px-8 py-3 rounded-full bg-gradient-to-b  from-purple-700/80 to-pink-700/80 text-white font-semibold hover:opacity-90 transition-opacity duration-300"
                    >
                        Get a Custom Quote
                    </a>
                </div>
            </div>
        </div>
    );
}