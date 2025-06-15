'use client';
import React from "react";
import CTASection from "@/components/CTASection";

export default function OurProcess() {
    return (
        <div>
            <div className="xxs:px-5 sm:px-5 lg:px-24 2xl:px-40">
                {/* Hero Section */}
                <div className="bg-hero-grid mt-5 h-auto">
                    <div className="text-center sm:px-10 md:px-20 lg:px-0 xl:px-10 border border-black-border py-40">
                        <h1 className="xxs:text-4xl sm:text-5xl xl:text-6xl font-semibold leading-tight text-[#222222]">
                            Our Process
                        </h1>
                        <p className="text-xl mt-7 text-[#222222] xxs:w-auto xl:w-4/6 mx-auto">
                            We Team Up With Visionary Companies To Shape And Bring To Life
                            Their Innovative Business Ideas.
                        </p>
                    </div>
                </div>

                {/* Services Section */}
                <div className="text-center grid xxs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 mx-auto gap-0">
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
                        <p>Animation</p>
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
                        <p>Cloud And DevOps</p>
                    </div>
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
                </div>

                {/* Specialization Section */}
                <div className="text-center mt-20  border border-black-border py-20">
                    <h2 className="text-3xl font-semibold text-[#222222]">
                        We Specialize In
                    </h2>
                    <p className="text-xl mt-7 text-[#222222] mx-auto w-4/6">
                        Projects that combine business strategy and technology, enabling our
                        customers to bring the right mix of process, innovation, experience,
                        and imagination to each part of their web and mobile-based tasks.
                    </p>
                </div>

                {/* Key Pillars Section */}
                <div className="grid sm:grid-cols-3 gap-0 mb-20">
                    <div className="text-center border border-black-border py-20 px-10">
                        <h3 className="text-2xl font-semibold text-[#222222]">
                            Transparency
                        </h3>
                        <p className="mt-4 text-lg text-[#555555]">
                            Our primary goal has always been to put forth constant effort and
                            drive the growth of the client's business.
                        </p>
                    </div>
                    <div className="text-center border border-black-border py-20 px-10">
                        <h3 className="text-2xl font-semibold text-[#222222]">Fairness</h3>
                        <p className="mt-4 text-lg text-[#555555]">
                            Regardless of how big or little the client's requirement is, we
                            treat every job with the same importance and put our best effort
                            forward.
                        </p>
                    </div>
                    <div className="text-center border border-black-border py-20 px-10">
                        <h3 className="text-2xl font-semibold text-[#222222]">Focus</h3>
                        <p className="mt-4 text-lg text-[#555555]">
                            While working on any company decision-making process, we are
                            adamant about keeping complete openness.
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