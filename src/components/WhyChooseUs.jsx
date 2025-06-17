'use client';

import React from "react";
import { FaScrewdriverWrench } from "react-icons/fa6";
import { IoIosRocket } from "react-icons/io";
import { RiTimerFill } from "react-icons/ri";
import { FaHandshakeSimple } from "react-icons/fa6";

export default function WhyChooseUs() {
    return (
        <>
            <section className="pb-16 pt-28 px-6 ">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">
                        Why Choose Us?
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-12">
                        At Kriyona Infotech, we don’t just build websites—we deliver digital
                        experiences that convert, scale, and stand out. Here’s why
                        businesses trust us:
                    </p>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                title: "Custom-Built Solutions",
                                desc: "We tailor every website to meet your specific business goals and target audience.",
                                icon: <FaScrewdriverWrench />,
                            },
                            {
                                title: "Scalable Technology",
                                desc: "Our stack ensures future-proof performance across platforms and devices.",
                                icon: <IoIosRocket />,
                            },
                            {
                                title: "On-Time Delivery",
                                desc: "Time is money—we stick to timelines and deliver as promised.",
                                icon: <RiTimerFill />,
                            },
                            {
                                title: "Ongoing Support",
                                desc: "We offer reliable post-launch support and maintenance to keep you stress-free.",
                                icon: <FaHandshakeSimple />,
                            },
                        ].map((item, idx) => (
                            <div
                                key={idx}
                                className="border border-[#55555580] p-6 hover:shadow-lg transition duration-300 rounded-xl cursor-pointer"
                            >
                                <div className="text-4xl mb-4 flex justify-center">
                                    {" "}
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-semibold mb-3 bg-gradient-to-r from-pink-600 via-purple-700 to-blue-500 bg-clip-text text-transparent">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};


