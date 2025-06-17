'use client';
import React from "react";
import CTASection from "@/components/CTASection";
import Head from "next/head";

export default function OurProcess() {
    return (
        <div>
            <Head>
                <title>Our Process | How Kriyona Infotech Builds Web, App & Software Solutions</title>
                <meta
                    name="description"
                    content="Discover Kriyona Infotech's step-by-step process for custom software, mobile app, and website development. From idea to deployment, we ensure smooth, scalable delivery."
                />
                <meta
                    name="keywords"
                    content="software development process, web development steps, mobile app workflow, Kriyona Infotech development cycle, IT agency process Surat"
                />
                <meta property="og:title" content="Our Process | Kriyona Infotech" />
                <meta
                    property="og:description"
                    content="Explore how Kriyona Infotech transforms your ideas into successful digital products with a clear, agile, and collaborative development process."
                />
                <meta property="og:url" content="https://kriyonainfotech.com/ourprocess" />
                <meta property="og:type" content="website" />
                <meta
                    property="og:image"
                    content="https://kriyonainfotech.com/kriyona-infotech-logo1.png"
                />
                <link rel="canonical" href="https://kriyonainfotech.com/ourprocess" />
            </Head>


            <div className="px-5 sm:px-5 lg:px-24 2xl:px-40">
                {/* Hero Section */}
                <div className="bg-hero-grid mt-5 h-auto">
                    <div className="text-center sm:px-10 md:px-20 lg:px-0 xl:px-10 border border-black-border py-40">
                        <h1 className="text-xl xs:text-2xl sm:text-4xl xl:text-4xl xs:w-auto font-semibold text-primary-black sm:w-4/5 mx-auto"
                            style={{ lineHeight: "50px" }}
                        >
                            Our Development Process – From Vision to Scalable Digital Solutions
                        </h1>
                        <p className="text-xl mt-7 text-[#222222] w-auto xl:w-5/6 mx-auto">
                            At Kriyona Infotech, we collaborate with startups, SMEs, and enterprises to turn innovative ideas into powerful software, web, and mobile app solutions – with a transparent and agile development approach.
                        </p>
                    </div>
                </div>

                {/* Services Section */}
                <div className="text-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 mx-auto gap-0">
                    {/* <div className="border border-black-border pb-7">
                <img alt="AI/ML Development" loading="lazy" width={80} height={80} decoding="async" data-nimg={1} className="mx-auto my-10 h-[100px]" style={{ color: 'transparent' }} src="/ai-ml.svg" />
                <p>AI/ML Development</p>
              </div>
              <div className="border border-black-border pb-7">
                <img alt="AR/VR Development" loading="lazy" width={80} height={80} decoding="async" data-nimg={1} className="mx-auto my-10 h-[100px]" style={{ color: 'transparent' }} src="/vr.svg" />
                <p>AR/VR Development</p>
              </div> */}
                    <div className="border border-black-border pb-7">
                        <img
                            alt="UI/UX Design"
                            loading="lazy"
                            width={80}
                            height={80}
                            decoding="async"
                            data-nimg={1}
                            className="mx-auto my-10 h-[100px]"
                            style={{ color: "transparent" }}
                            src="/ui-ux.svg"
                        />
                        <p>UI/UX Design</p>
                    </div>
                    <div className="border border-black-border pb-7">
                        <img
                            alt="Game Development"
                            loading="lazy"
                            width={80}
                            height={80}
                            decoding="async"
                            data-nimg={1}
                            className="mx-auto my-10 h-[100px]"
                            style={{ color: "transparent" }}
                            src="/game.svg"
                        />
                        <p>Video Editing</p>
                    </div>
                    <div className="border border-black-border pb-7">
                        <img
                            alt="App Development"
                            loading="lazy"
                            width={80}
                            height={80}
                            decoding="async"
                            data-nimg={1}
                            className="mx-auto my-10 h-[100px]"
                            style={{ color: "transparent" }}
                            src="/app.svg"
                        />
                        <p>App Development</p>
                    </div>
                    <div className="border border-black-border pb-7">
                        <img
                            alt="Web Development"
                            loading="lazy"
                            width={80}
                            height={80}
                            decoding="async"
                            data-nimg={1}
                            className="mx-auto my-10 h-[100px]"
                            style={{ color: "transparent" }}
                            src="/web.svg"
                        />
                        <p>Web Development</p>
                    </div>
                    <div className="border border-black-border pb-7">
                        <img
                            alt="Animation"
                            loading="lazy"
                            width={80}
                            height={80}
                            decoding="async"
                            data-nimg={1}
                            className="mx-auto my-10 h-[100px]"
                            style={{ color: "transparent" }}
                            src="/animation.svg"
                        />
                        <p>Search Engine Optimisation (SEO)</p>
                    </div>
                    <div className="border border-black-border pb-7">
                        <img
                            alt="Cloud And DevOps"
                            loading="lazy"
                            width={80}
                            height={80}
                            decoding="async"
                            data-nimg={1}
                            className="mx-auto my-10 h-[100px]"
                            style={{ color: "transparent" }}
                            src="/cloud.svg"
                        />
                        <p>Digital Marketing</p>
                    </div>

                </div>

                {/* Specialization Section */}
                <div className="text-center mt-20  border border-black-border py-20">
                    <h2 className="text-3xl font-semibold text-[#222222]">
                        We Specialize in Scalable Web, App & Software Solutions
                    </h2>
                    <p className="text-lg mt-7 text-[#222222] mx-auto w-4/6">
                        Our team blends business strategy, creative design, and smart technology to craft web, mobile app, and software solutions that solve real problems and drive growth. Every project is built with the perfect mix of innovation, functionality, and user experience.
                    </p>

                </div>

                {/* Key Pillars Section */}
                <div className="grid sm:grid-cols-3 gap-0 mb-20">
                    <div className="text-center border border-black-border py-20 px-10">
                        <h3 className="text-2xl font-semibold text-[#222222]">Transparency</h3>
                        <p className="mt-4 text-lg text-[#555555]">
                            We believe in clear communication, honest timelines, and full project visibility — no hidden fees, no vague promises. Just clean, collaborative work.
                        </p>
                    </div>

                    <div className="text-center border border-black-border py-20 px-10">
                        <h3 className="text-2xl font-semibold text-[#222222]">Fairness</h3>
                        <p className="mt-4 text-lg text-[#555555]">
                            Whether it’s a landing page or a full-scale app, we treat every project with equal importance — because your business matters, no matter the size.
                        </p>
                    </div>

                    <div className="text-center border border-black-border py-20 px-10">
                        <h3 className="text-2xl font-semibold text-[#222222]">Focus</h3>
                        <p className="mt-4 text-lg text-[#555555]">
                            We stay laser-focused on delivering results. Every decision is backed by data, collaboration, and the goal of building software that actually works for you.
                        </p>
                    </div>

                </div>

                {/* Closing Section */}
                <div className="text-center mt-20  border border-black-border py-20">
                    <h2 className="text-3xl font-semibold text-[#222222]">
                        Every Project Has Its Own Unique Goals and Vision
                    </h2>
                    <p className="text-xl mt-7 text-[#222222] mx-auto w-4/6">
                        Whatever your project demands, our extended network of strategists,
                        creatives, and technology specialists is always eager to pitch in.
                        We know it helps to know good people.
                    </p>
                </div>

                {/* Research and Strategy Section */}
                <div className="grid sm:grid-cols-2 gap-0">
                    <div className="text-center  border border-black-border py-20 px-10">
                        <h3 className="text-2xl font-semibold text-[#222222]">Research</h3>
                        <p className="mt-4 text-lg text-[#555555]">
                            In-depth research to understand your business, competitors, and
                            industry trends.
                        </p>
                    </div>
                    <div className="text-center  border border-black-border py-20 px-10">
                        <h3 className="text-2xl font-semibold text-[#222222]">Strategy</h3>
                        <p className="mt-4 text-lg text-[#555555]">
                            Crafting tailored strategies to meet your specific business goals
                            and objectives.
                        </p>
                    </div>
                </div>

                {/* Targeting and Data Collection Section */}
                <div className="grid sm:grid-cols-2 gap-0">
                    <div className="text-center  border border-black-border py-20 px-10">
                        <h3 className="text-2xl font-semibold text-[#222222]">Targeting</h3>
                        <p className="mt-4 text-lg text-[#555555]">
                            Identifying the right audience to ensure your message reaches the
                            people who matter.
                        </p>
                    </div>
                    <div className="text-center  border border-black-border py-20 px-10">
                        <h3 className="text-2xl font-semibold text-[#222222]">
                            Data Collection
                        </h3>
                        <p className="mt-4 text-lg text-[#555555]">
                            Gathering and analyzing data to drive informed decisions and
                            optimize performance.
                        </p>
                    </div>
                </div>

                {/* Problem Solving Section */}
                <div className="text-center mb-20  border border-black-border py-20 px-10">
                    <h3 className="text-2xl font-semibold text-[#222222]">
                        Problem Solving
                    </h3>
                    <p className="mt-4 text-lg text-[#555555]">
                        Tackling challenges with creative solutions to ensure business
                        success.
                    </p>
                </div>
            </div>

            <CTASection />
        </div>
    );
}