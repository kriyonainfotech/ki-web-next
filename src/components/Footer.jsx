'use client';

import React from 'react';
import Link from 'next/link';
import { useState } from 'react';

export default function Footer() {
    const [email, setEmail] = useState("");
    const [msg, setMsg] = useState("");

    const handleSubscribe = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await axios.post(`${apiUrl}/api/newsletter/subscribe`, {
                email,
            });
            const data = res.data;
            console.log("Subscription response:", data);
            setMsg(data.message);
            setEmail(""); // Clear the input field after successful subscription
        } catch (error) {
            console.error("Subscription error:", error);
            setMsg(error.response.data.message || "Subscription failed");
        } finally {
            setLoading(false);
        }
    };

    return (
        <footer className="bg-pink">
            <div className="mt-32 mb-14 xxs:mx-5 sm:mx-5 lg:mx-24 2xl:mx-40">
                {/* CTA Section */}
                <div className="text-center border border-black-border py-20 px-5">
                    <h1 className="text-primary-black font-bold xxs:text-4xl lg:text-5xl">
                        Build With Kriyona Infotech
                    </h1>
                    <p className="my-10 font-medium">
                        We partner with brands of all shapes and
                        <br />
                        sizes to deliver ambitious digital projects.
                    </p>
                    <div className="bg-white mt-14 border border-[#55555550] w-fit mx-auto py-4 px-7 rounded underline">
                        <a
                            href="mailto:kriyonainfotech@gmail.com"
                            className="text-primary-black"
                        >
                            kriyonainfotech@gmail.com
                        </a>
                    </div>
                </div>

                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mt-20 border border-[#55555580] px-5">
                    {/* Company Info */}
                    <div className="text-center md:text-left md:border-r border-[#55555580] py-5">
                        <h3 className="text-xl font-bold mb-4">Kriyona Infotech</h3>
                        <p>
                            Bringing Visions to <br /> Digital Life.
                        </p>
                        <p className="mt-5">Address:</p>
                        <address className="not-italic text-gray-700 ">
                            3rd floor, 51-52 Pramukh park society,
                            <br />
                            Mahadev chowk, Mota Varachha, Surat, Gujarat 394101
                            <br />
                            India
                        </address>
                        <p className="mt-4 text-gray-700">
                            Phone: <a href="tel:+1234567890">+91 84013 66742</a>
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="text-center md:text-left md:border-r border-[#55555580] py-5">
                        <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/" className="text-gray-700 hover:text-primary-black">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/about"
                                    className="text-gray-700 hover:text-primary-black"
                                >
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/services"
                                    className="text-gray-700 hover:text-primary-black"
                                >
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/ourprocess"
                                    className="text-gray-700 hover:text-primary-black"
                                >
                                    Our Process
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/portfolio"
                                    className="text-gray-700 hover:text-primary-black"
                                >
                                    Portfolio
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/pricing"
                                    className="text-gray-700 hover:text-primary-black"
                                >
                                    Pricing
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/blog"
                                    className="text-gray-700 hover:text-primary-black"
                                >
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/contactus"
                                    className="text-gray-700 hover:text-primary-black"
                                >
                                    ContactUs
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="text-center md:text-left md:border-r border-[#55555580] py-5">
                        <h3 className="text-xl font-bold mb-4">Services</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    href="/services/web-development"
                                    className="text-gray-700 hover:text-primary-black"
                                >
                                    Web Development
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/services/app-development"
                                    className="text-gray-700 hover:text-primary-black"
                                >
                                    Mobile Apps
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/services/ui-ux-design"
                                    className="text-gray-700 hover:text-primary-black"
                                >
                                    UI/UX Design
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/services/digital-marketing"
                                    className="text-gray-700 hover:text-primary-black"
                                >
                                    Digital Marketing
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/services/seo"
                                    className="text-gray-700 hover:text-primary-black"
                                >
                                    SEO Services
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="py-5">
                        <h2 className="text-xl font-semibold mb-3">
                            Subscribe for Updates
                        </h2>
                        <p className="text-gray-600 mb-4">
                            Subscribe to our newsletter for the latest updates.
                        </p>
                        <form onSubmit={handleSubscribe} action="">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Your Email"
                                className="w-full p-2 border border-[#55555570] mb-3 outline-none focus:ring-1 focus:ring-gray-200 rounded"
                            />
                            <button
                                className="w-full py-2 px-5 border border-[#55555570] rounded
        bg-gradient-to-r from-[#FFF4E8] from-51% to-[#FFE4FF] to-100%"
                            >
                                Subscribe
                            </button>
                        </form>
                        {msg && (
                            <p className="mt-3 text-sm font-medium text-green-600">{msg}</p>
                        )}
                    </div>
                </div>

                {/* Social Links */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 mx-auto mt-24 w-fit">
                    <a
                        href="https://www.youtube.com/@KriyonaInfotech"
                        aria-label="YouTube"
                        className="text-grey-500 text-2xl text-center border border-[#55555570] bg-white rounded p-3 w-fit hover:bg-gray-100"
                    >
                        <img
                            src="/services/youtube.png"
                            className="w-8 h-8"
                            alt="YouTube"
                        />
                    </a>
                    <a
                        href="https://www.linkedin.com/company/kriyonainfotech"
                        aria-label="LinkedIn"
                        className="border border-[#55555570] bg-white rounded p-3 w-fit hover:bg-gray-100"
                    >
                        <img
                            src="/services/linkedin.png"
                            className="w-8 h-8"
                            alt="LinkedIn"
                        />
                    </a>
                    <a
                        href="https://www.facebook.com/profile.php?id=61567821947508"
                        aria-label="Facebook"
                        className="border border-[#55555570] bg-white rounded p-3 w-fit hover:bg-gray-100"
                    >
                        <img
                            src="/services/facebook.png"
                            className="w-8 h-8 object-cover"
                            alt="Facebook"
                        />
                    </a>
                    <a
                        href="https://www.instagram.com/kriyonainfotech/"
                        aria-label="Instagram"
                        className="border border-[#55555570] bg-white rounded p-3 w-fit hover:bg-gray-100"
                    >
                        <img
                            src="/services/instagram.png"
                            className="w-8 h-8"
                            alt="Instagram"
                        />
                    </a>
                    <a
                        href="https://clutch.co/profile/kriyona-infotech#highlights"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Clutch"
                        className="border border-[#55555570] bg-white rounded p-3 w-fit hover:bg-gray-100"
                    >
                        <img src="/services/clutch.webp" className="w-8 h-8" alt="Clutch" />
                    </a>
                </div>

                {/* Copyright */}
                <div className="mt-14">
                    <div className="flex flex-col md:flex-row justify-center items-center border-t border-gray-200 pt-7">
                        <p className="text-center text-[#999999] flex items-center">
                            Copyright
                            <span className="text-3xl px-1">©</span>
                            2025, KriyonaInfotech. All Rights Reserved.
                        </p>
                        {/* <div className="flex space-x-4 mt-4 md:mt-0">
                  <Link
                    href="/privacy-policy"
                    className="text-[#999999] hover:text-primary-black"
                  >
                    Privacy Policy
                  </Link>
                  <Link
                    href="/terms-of-service"
                    className="text-[#999999] hover:text-primary-black"
                  >
                    Terms of Service
                  </Link>
                  <Link
                    href="/sitemap"
                    className="text-[#999999] hover:text-primary-black"
                  >
                    Sitemap
                  </Link>
                </div> */}
                    </div>
                </div>
            </div>
        </footer>
    );
}