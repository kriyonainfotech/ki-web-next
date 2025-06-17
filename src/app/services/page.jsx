import Link from 'next/link';
import services from '@/data/services';
import Head from "next/head";

export default function Services() {
    return (
        <>
            <Head>
                <title>Our Services | Website, App, and Software Development in Surat</title>
                <meta name="description" content="Explore a full suite of digital services including website development, app development, custom software, SEO, branding, and UI/UX design by Kriyona Infotech." />
                <meta name="keywords" content="web development Surat, app development company, software development India, SEO services, branding services, UI UX design, digital agency Surat" />
                <meta name="author" content="Kriyona Infotech" />

                <meta property="og:title" content="Our Services | Web, App & Software Development Company in Surat" />
                <meta property="og:description" content="From web and app development to branding, SEO, and design – Kriyona Infotech offers end-to-end digital solutions tailored for your business." />
                <meta property="og:url" content="https://kriyonainfotech.com/services" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="https://www.kriyonainfotech.com/kriyona-infotech-logo1.png" />

                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://kriyonainfotech.com/services" />
            </Head>

            <div className="px-5 sm:px-5 lg:px-24 2xl:px-40 ">
                {/* Hero Section */}
                <section className="hero-section text-center pb-20 animate-fade-in">
                    <div className="container mx-auto py-24 px-8 bg-gradient-to-b  from-purple-600/10 to-pink-500/10 backdrop-blur-sm border border-[#55555580]">
                        <h1 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-6">
                            Transformative Tech Solutions
                        </h1>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                            Accelerate your digital transformation with our full-stack
                            development expertise and AI-powered solutions.
                        </p>
                    </div>
                </section>

                {/* Services Grid */}
                <section className="services-grid py-16 space-y-16">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Our Development Expertise
                        </h2>
                        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                            Bridging innovation with execution through cutting-edge technologies
                        </p>
                    </div>

                    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="service-card border border-[#55555580] p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group relative overflow-hidden flex flex-col h-full"
                            >
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 bg-gradient-to-r from-pink-600 via-purple-700 to-blue-500 backdrop-blur-sm border border-white/20 "></div>

                                <div className="relative z-10 flex flex-col h-full">
                                    <div className="h-full flex flex-col justify-between">
                                        <div>
                                            <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                                {service.name}
                                            </h3>

                                            <p className="text-gray-600 mb-6 min-h-[80px]">
                                                {service.text}
                                            </p>

                                            {service.list && (
                                                <ul className="list-disc list-inside mb-6 space-y-2">
                                                    {service.list.map((item, idx) => (
                                                        <li key={idx} className="text-gray-700">
                                                            {item.li}
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}

                                            {service.icons && (
                                                <div className="tech-stack mb-6 flex flex-wrap gap-4">
                                                    {service.icons.map((icon, idx) => (
                                                        <img
                                                            key={idx}
                                                            src={icon.img}
                                                            alt={icon.alt}
                                                            className="w-10 h-10 object-contain hover:scale-125 transition-transform duration-200"
                                                            title={icon.alt} // SEO-friendly tooltips
                                                        />
                                                    ))}
                                                </div>
                                            )}
                                        </div>

                                        <Link
                                            href={service.link}
                                            className="inline-block px-6 py-3 bg-gradient-to-r from-pink-600 via-purple-700 to-blue-500 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 font-medium hover:no-underline"
                                            aria-label={`Learn more about ${service.name}`}
                                        >
                                            Explore Solutions
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* CTA Section */}
                <section className="cta-section py-20 text-center">
                    <div className="bg-gradient-to-r from-pink-600 via-purple-700 to-blue-500 backdrop-blur-sm rounded-2xl p-12 shadow-xl">
                        <h2 className="text-4xl font-bold text-white mb-6">
                            Ready to Revolutionize Your Tech Stack?
                        </h2>
                        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                            Let's build something extraordinary together. Schedule a free tech
                            consultation today.
                        </p>
                        <Link
                            href="/contactus"
                            className="bg-white text-blue-900 px-8 py-4 rounded-lg font-bold hover:bg-blue-50 transition-colors duration-300 transform hover:scale-105"
                        >
                            Start Your Project Now
                        </Link>
                    </div>
                </section>
            </div>
        </>
    );
}