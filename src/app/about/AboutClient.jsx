
'use client' // Only if you're in App Router (`app/` folder) and using state
import MissionVision from '@/components/MissionVision';
import React, { useState } from 'react';

export default function AboutClient() {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    // Accordion data
    const accordionData = [
        {
            question: "What digital services does Kriyona Infotech offer?",
            answer:
                "Kriyona Infotech offers custom software development, AI integration, website development, mobile app development (Android & iOS), UI/UX design, branding, and digital marketing services. We help businesses grow with tech-driven solutions tailored to their goals.",
        },
        {
            question: "How experienced is the team at Kriyona Infotech?",
            answer:
                "Although Kriyona Infotech is a young company, our team brings years of hands-on experience in software development, mobile apps, and digital strategy. We've successfully delivered projects for startups, SMEs, and enterprise clients across various industries.",
        },
        {
            question: "What makes Kriyona Infotech different from other IT companies?",
            answer:
                "We focus on personalized, scalable solutions that match your business needs—not cookie-cutter templates. Our agile development approach, transparent communication, and design-first thinking set us apart from traditional IT vendors.",
        },
        {
            question: "Which industries do you work with?",
            answer:
                "We’ve built tech solutions for clients in e-commerce, real estate, healthcare, education, manufacturing, and more. Whether you're a startup or an established brand, we tailor our solutions to your specific industry and use case.",
        },
        {
            question: "Which technologies do you use in your projects?",
            answer:
                "We use a modern tech stack including React.js, Node.js, Next.js, Flutter, MongoDB, Express, AWS, Firebase, and third-party AI APIs. Our tech choices ensure performance, security, and scalability for your digital products.",
        },
        {
            question: "How do I start a project with Kriyona Infotech?",
            answer:
                "Just reach out via our contact form or WhatsApp. We'll schedule a free consultation, understand your goals, and provide a roadmap + detailed quote customized for your needs and budget.",
        },
    ];


    return (
        <div>

            <div className="px-5 sm:px-5 lg:px-24 2xl:px-40">
                <div className="bg-hero-grid mt-5 ">
                    <div className="text-center px-10 md:px-20 lg:px-0 xl:px-10 border border-[#55555580] py-20 xl:py-36">
                        <h1
                            className="text-2xl sm:text-4xl xl:text-4xl xs:w-auto font-semibold text-primary-black sm:w-4/5 mx-auto"

                        >
                            Kriyona Infotech – Empowering Businesses with Custom Software, Web, Mobile & AI Solutions from India
                        </h1>
                        <p className="text-md lg:text-lg pt-10 text-gray-600 w-auto xl:w-5/6 mx-auto">
                            We’re a forward-thinking IT company in India delivering cutting-edge digital solutions to help brands grow, innovate, and lead in the digital age.
                        </p>

                    </div>
                </div>
                <div
                    className="mt-20 border border-[#55555580]"
                >
                    <section className="text-center py-20">
                        <h2 className='text-lg '>About Us</h2>
                        <h3 className="text-2xl md:text-3xl lg:text-4xl w-auto xl:w-4/6 text-primary-black font-bold mt-5 mx-auto">
                            A Passionate Tech Team Powering Digital Growth
                        </h3>

                        <div className='px-5 text-center'>
                            <p className="mt-10 text-md sm:text-lg text-gray-700 max-w-5xl mx-auto leading-relaxed">
                                <strong>Kriyona Infotech</strong> is a leading IT company based in <strong>Surat, India</strong>,
                                offering expert solutions in <strong>custom software development</strong>, <strong>web development</strong>,
                                <strong>mobile app development</strong>, and innovative <strong>digital products</strong>.
                                We help startups and enterprises transform their ideas into scalable, user-friendly solutions.
                            </p>

                            <p className="mt-4 text-md sm:text-lg text-gray-700 max-w-5xl mx-auto leading-relaxed">
                                Our experienced team of developers, designers, and strategists blends creativity with technology
                                to build seamless experiences—from modern interfaces to robust backend systems.
                                Whether you're launching a new product or optimizing an existing one, we're here to bring your digital vision to life.
                            </p>
                        </div>

                    </section>
                </div>

                <MissionVision />

                <section className="border border-[#55555580] mt-20 px-5">
                    <h3 className="text-2xl md:text-3xl lg:text-4xl w-auto xl:w-4/6 text-center text-primary-black font-bold my-10 mx-auto">
                        Frequently Asked Questions About Kriyona Infotech's Services
                    </h3>

                    {accordionData.map((item, index) => (
                        <div className="accordion px-5" key={index}>
                            <div
                                className="accordion-title border-b border-gray-600 py-4 px-5 sm:px-10 flex justify-between text-start items-center my-4 cursor-pointer "
                                onClick={() => toggleAccordion(index)}
                            >
                                <h4 className="text-lg xl:text-xl font-medium bg-clip-text text-transparent bg-gradient-to-r from-[#FFC487] from-43% to-[#FD98FF] to-100% lg:text-xl md:text-lg xs:text-base">
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