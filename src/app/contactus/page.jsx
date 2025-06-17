'use client';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Head from "next/head";

export default function ContactUs() {
    const form = useRef();
    const [status, setStatus] = useState(""); // "loading", "success", "error"

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    const sendEmail = (e) => {
        e.preventDefault();

        const email = form.current.email.value;

        if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        setStatus("loading");

        emailjs
            .sendForm(
                "service_p7xu84h",
                "template_xjsdxhh",
                form.current,
                "YEoXwG0EOr3JLvPiE"
            )
            .then(
                () => {
                    setStatus("success");
                    form.current.reset();
                },
                () => {
                    setStatus("error");
                }
            );
    };

    return (
        <div className="xxs:px-5 sm:px-5 lg:px-24 2xl:px-40">

            <Head>
                <title>Contact Us | Kriyona Infotech - Web, App & Marketing Services in Surat</title>
                <meta
                    name="description"
                    content="Get in touch with Kriyona Infotech for web development, app development, software solutions, and digital marketing. Let’s turn your idea into a digital product."
                />
                <meta
                    name="keywords"
                    content="Contact Kriyona Infotech, Web development contact, App development agency Surat, digital marketing help, IT services contact"
                />
                <meta property="og:title" content="Contact Us | Kriyona Infotech" />
                <meta
                    property="og:description"
                    content="Need a website, mobile app, or branding help? Reach out to Kriyona Infotech, Surat's trusted IT partner."
                />
                <meta property="og:url" content="https://kriyonainfotech.com/contactus" />
                <meta property="og:type" content="website" />
                <meta
                    property="og:image"
                    content="https://kriyonainfotech.com/kriyona-infotech-logo1.png"
                />
                <link rel="canonical" href="https://kriyonainfotech.com/contactus" />
            </Head>


            <div className="bg-hero-grid py-20 px-4 border border-[#55555580]">
                <h1 className="text-center text-4xl font-semibold text-[#222222]">
                    Contact Us
                </h1>
                <p className="text-center text-xl text-[#888888] mt-5">
                    Have questions or want to get in touch? We’re here to help!
                </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 py-20 px-10 border border-[#55555580] mt-10">
                <div>
                    <h2 className="text-2xl font-semibold text-[#222222]">
                        Reach Out to Us
                    </h2>
                    <p className="text-[#888888] mt-5">
                        Feel free to contact us through any of the channels below. We look
                        forward to hearing from you!
                    </p>
                    <ul className="mt-5 space-y-3">
                        <li className="text-[#555555]">
                            <strong>Email:</strong> kriyonainfotech@gmail.com
                        </li>
                        <li className="text-[#555555]">
                            <strong>Phone:</strong> +91 84013 66742
                        </li>
                        <li className="text-[#555555]">
                            <strong>Address:</strong> 3rd floor, 51-52 Pramukh park society,
                            Mahadev chowk, Mota Varachha, Surat, Gujarat 394101
                        </li>
                    </ul>

                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5  mt-8 w-fit">
                        <a
                            href="https://www.youtube.com/@KriyonaInfotech"
                            className="text-grey-500 text-2xl text-center border border-[#55555570] bg-white rounded p-3 w-fit"
                        >
                            <img src="/services/youtube.png" className="w-8 h-8" alt="" />
                        </a>
                        <a
                            href="https://www.linkedin.com/company/kriyonainfotech"
                            className="border border-[#55555570] bg-white rounded p-3 w-fit"
                        >
                            <img src="/services/linkedin.png" className="w-8 h-8" alt="" />
                        </a>
                        <a
                            href="https://www.facebook.com/profile.php?id=61567821947508"
                            className="border border-[#55555570] bg-white rounded p-3 w-fit"
                        >
                            <img
                                src="/services/facebook.png"
                                className="w-8 h-8 object-cover"
                                alt=""
                            />
                        </a>
                        <a
                            href="https://www.instagram.com/kriyonainfotech/"
                            className="border border-[#55555570] bg-white rounded p-3 w-fit"
                        >
                            <img src="/services/instagram.png" className="w-8 h-8" alt="" />
                        </a>
                        <a
                            href="https://clutch.co/profile/kriyona-infotech#highlights"
                            target="_blank"
                            className="border border-[#55555570] bg-white rounded p-3 w-fit"
                        >
                            <img src="/services/clutch.webp" className="w-8 h-8" alt="" />
                        </a>
                    </div>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold text-[#222222]">
                        Send Us a Message
                    </h2>
                    <div>
                        {status === "success" ? (
                            <div className="text-green-600 font-semibold text-start my-4">
                                Thank you! Our team will get back to you as soon as possible.
                            </div>
                        ) : (
                            <form ref={form} onSubmit={sendEmail} className="mt-5 space-y-5">
                                <div>
                                    <label className="block text-[#555555] font-medium">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        className="w-full mt-2 p-3 border border-[#55555580] rounded"
                                        placeholder="Your Name"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block text-[#555555] font-medium">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        className="w-full mt-2 p-3 border border-[#55555580] rounded"
                                        placeholder="Your Email"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block text-[#555555] font-medium">
                                        Message
                                    </label>
                                    <textarea
                                        name="message"
                                        rows="5"
                                        className="w-full mt-2 p-3 border border-[#55555580] rounded"
                                        placeholder="Your Message"
                                        required
                                    ></textarea>
                                </div>

                                <input
                                    type="hidden"
                                    name="time"
                                    value={new Date().toLocaleString()}
                                />

                                <button
                                    type="submit"
                                    disabled={status === "loading"}
                                    className="w-full py-3 text-gray-900 border border-black-border rounded bg-gradient-to-r from-[#FFF4E8] to-[#FFE4FF]"
                                >
                                    {status === "loading" ? "Sending..." : "Submit"}
                                </button>

                                {status === "error" && (
                                    <div className="text-red-600 mt-2 text-sm">
                                        Something went wrong. Please try again.
                                    </div>
                                )}
                            </form>
                        )}
                    </div>
                </div>
            </div>
            <div className="py-20 border border-[#55555580] mt-10 px-4">
                <h2 className="text-center text-2xl font-semibold text-[#222222]">
                    Business Hours
                </h2>
                <p className="text-center text-[#888888] mt-5">
                    Monday - Saturday: 9:00 AM - 7:00 PM
                </p>
            </div>
            <div className="py-20 border border-[#55555580] mt-10 px-8">
                <h2 className="text-center text-2xl font-semibold text-[#222222]">
                    Frequently Asked Questions
                </h2>

                <div className="mt-8 max-w-3xl mx-auto space-y-6">
                    <div>
                        <h3 className="text-lg font-semibold">
                            What services does Kriyona Infotech offer?
                        </h3>
                        <p className="mt-2 text-[#555555]">
                            We specialize in web development, mobile app development, UI/UX
                            design, digital marketing, SEO services, Video Editing & Graphics
                            for businesses of all sizes.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold">
                            How quickly will you respond to my inquiry?
                        </h3>
                        <p className="mt-2 text-[#555555]">
                            We typically respond to all inquiries within 24 hours during our
                            business days (Monday to Saturday, 9 AM to 7 PM IST).
                        </p>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold">
                            Do you offer free consultations?
                        </h3>
                        <p className="mt-2 text-[#555555]">
                            Yes! We offer free 30-minute consultations to discuss your project
                            requirements and how we can help your business grow.
                        </p>
                    </div>
                </div>
            </div>
            <div className="py-16 bg-gradient-to-r from-[#FFF4E8] to-[#FFE4FF] border border-[#55555580] mt-10 text-center">
                <h2 className="text-2xl font-semibold text-[#222222]">
                    Ready to Start Your Project?
                </h2>
                <p className="text-[#555555] mt-4 max-w-2xl mx-auto">
                    Contact us today to discuss your requirements and get a free quote for
                    your project.
                </p>
                <div className="mt-8">
                    <a
                        href="mailto:kriyonainfotech@gmail.com"
                        className="inline-block bg-black text-white px-8 py-3 rounded hover:bg-gray-800 transition-colors"
                    >
                        Email Us Now
                    </a>
                    <a
                        href="tel:+918401366742"
                        className="inline-block mt-5 sm:ml-4 border border-black px-8 py-3 rounded hover:bg-gray-100 transition-colors"
                    >
                        Call Us Now
                    </a>
                </div>
            </div>{" "}
        </div>
    );
}