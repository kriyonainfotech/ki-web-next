'use client' // Only if you're in App Router (`app/` folder) and using state

import React, { useState } from 'react';

export default function About() {
    // State to keep track of the currently opened accordion
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        // If the clicked index is already open, close it; otherwise, open the clicked one
        setActiveIndex(activeIndex === index ? null : index);
    };

    // Accordion data
    const accordionData = [
        {
            question:
                "What services does Kriyona Infotech provide in software and digital development?",
            answer:
                "Kriyona Infotech specializes in a wide range of digital services, including custom software development, AI integration, web development, mobile app development (iOS & Android), UI/UX design, and digital marketing. We deliver tailored technology solutions to help businesses grow, streamline operations, and improve user engagement.",
        },
        {
            question:
                "How experienced is Kriyona Infotech in the IT and software industry?",
            answer:
                "Kriyona Infotech may be a relatively new IT company with one year of experience, but our team comprises seasoned developers, designers, and strategists. We have already delivered several successful software and mobile app projects to startups, SMEs, and enterprise clients.",
        },
        {
            question:
                "Why should businesses choose Kriyona Infotech over other IT companies?",
            answer:
                "Kriyona Infotech stands out with its client-centric approach, agile development methodology, and a strong focus on quality and innovation. Unlike generic software providers, we offer personalized digital solutions that align with your business goals, timelines, and budgets.",
        },
        {
            question:
                "Which industries does Kriyona Infotech serve with its digital solutions?",
            answer:
                "We work with businesses across diverse sectors, including e-commerce, healthcare, education, real estate, and manufacturing. Our team understands industry-specific challenges and crafts software, web platforms, and mobile apps tailored to your niche.",
        },
        {
            question: "What technologies does Kriyona Infotech use in its projects?",
            answer:
                "We use cutting-edge technologies like React.js, Node.js, Flutter, MongoDB, AWS, and AI APIs. Our tech stack is selected based on project requirements to ensure scalability, performance, and future growth.",
        },
        {
            question: "How can I get started with a project at Kriyona Infotech?",
            answer:
                "Getting started is simple! Contact us through our website or WhatsApp. We’ll schedule a free consultation to understand your business goals, suggest a solution roadmap, and offer a detailed proposal tailored to your budget and timeline.",
        },
    ];

    return (
        <div>
            {/* <Helmet>
                <title>
                    Custom Software, Web, AI & Mobile App Development Agency in India |
                    About Kriyona Infotech
                </title>
                <meta
                    name="description"
                    content="Kriyona Infotech offers custom software, AI, web and mobile app development. Learn more about our values, services, and team."
                />
                <meta name="robots" content="index, follow" />
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        mainEntity: accordionData.map((item) => ({
                            "@type": "Question",
                            name: item.question,
                            acceptedAnswer: {
                                "@type": "Answer",
                                text: item.answer,
                            },
                        })),
                    })}
                </script>
            </Helmet> */}
            <div className="xxs:px-5 sm:px-5 lg:px-24 2xl:px-40">
                <div className="bg-hero-grid mt-5 ">
                    <div className="text-center sm:px-10 md:px-20 lg:px-0 xl:px-10 border border-black-border py-40">
                        <h1
                            className="xxs:text-xl xs:text-2xl sm:text-4xl xl:text-4xl xs:w-auto font-semibold text-primary-black sm:w-4/5 mx-auto"
                            style={{ lineHeight: "50px" }}
                        >
                            Empowering Businesses with Custom Software, Web, AI, and Mobile
                            App Development – Building an Inclusive Digital Future
                        </h1>
                    </div>
                </div>
                <div
                    className="mt-20 border border-black-border"
                    style={{ padding: "20px" }}
                >
                    <section className="text-center py-20">
                        <h2>About Us</h2>
                        <h3 className="xs:text-2xl md:text-3xl lg:text-4xl w-5/6 text-primary-black font-bold mt-5 mx-auto">
                            We Are Professional And Experienced Team
                        </h3>

                        <p className="mt-10 text-base sm:text-lg text-gray-700 max-w-7xl mx-auto leading-relaxed">
                            At <strong>Kriyona Infotech</strong>, we specialize in{" "}
                            <strong>custom software development</strong>,
                            <strong>web and mobile app development</strong>, and cutting-edge{" "}
                            <strong>Digital solutions</strong> tailored to help startups and
                            enterprises grow digitally. Our dedicated team of developers,
                            designers, and strategists is committed to building scalable and
                            impactful digital products that align with your business goals.
                        </p>
                        <p className="mt-4 text-base sm:text-lg text-gray-700 max-w-7xl mx-auto leading-relaxed">
                            Based in <strong>Surat,India</strong>, we combine innovation with
                            expertise to deliver seamless user experiences, intuitive
                            interfaces, and powerful backend systems. Whether you're a startup
                            or an established brand, Kriyona Infotech is your trusted
                            technology partner for digital transformation.
                        </p>
                    </section>
                </div>
                <section className="border border-black-border mt-20">
                    <h3 className="xs:text-2xl md:text-3xl lg:text-4xl w-full text-center text-primary-black font-bold my-10 mx-auto">
                        FAQs – Learn More About Kriyona Infotech
                    </h3>
                    {accordionData.map((item, index) => (
                        <div className="accordion px-5" key={index}>
                            <div
                                className="accordion-title border-b border-gray-600 py-4 xxs:px-5 sm:px-10 flex justify-between text-start items-center my-4 cursor-pointer "
                                onClick={() => toggleAccordion(index)}
                            >
                                <h4 className="text-xl font-medium bg-clip-text text-transparent bg-gradient-to-r from-[#FFC487] from-43% to-[#FD98FF] to-100% lg:text-xl md:text-lg xs:text-base">
                                    {item.question}
                                </h4>
                                <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth={0}
                                    viewBox="0 0 24 24"
                                    className="button text-3xl"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path fill="none" d="M0 0h24v24H0V0z" />
                                    <path d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
                                </svg>
                            </div>
                            {activeIndex === index && (
                                <div
                                    className="accordion-content  pb-4 text-lg text-gray-700 text-primary-black"
                                    style={{ paddingLeft: "40px" }}
                                >
                                    {item.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </section>
            </div>
        </div>
    );
}