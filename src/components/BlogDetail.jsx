'use client';
import React, { useRef, useState } from "react";
import axios from "axios";
const apiUrl = process.env.NEXT_PUBLIC_API_URL;
import emailjs from "@emailjs/browser";
import { format } from "date-fns"; // ⬅️ Add this at the top

export default function BlogDetail({ blog, relatedBlogs }) {
    if (!blog) return <div>Blog not found.</div>;

    const form = useRef();
    const [status, setStatus] = useState("");
    const [email, setEmail] = useState("");
    const [msg, setMsg] = useState("");
    const [loading, setLoading] = useState(false);

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

    const stripHtml = (html) => {
        if (!html) return '';
        return html.replace(/<[^>]*>/g, ''); // Remove all HTML tags
    };

    return (
        <div className="px-5 sm:px-5 lg:px-24 2xl:px-40 py-10">
            <div className="flex flex-col md:flex-row gap-10">
                {/* Left: Blog Content */}
                <div className="md:w-[70%] border border-[#55555580] p-8">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">
                        {blog.title}
                    </h1>
                    <p className="text-gray-500 mb-6">
                        Published on: {format(new Date(blog.createdAt), "dd/MM/yyyy")}
                    </p>

                    <img
                        src={blog.imageUrl}
                        alt={blog.title}
                        className="w-full max-h-[400px] object-cover -lg shadow-md mb-8"
                    />

                    <div
                        className="prose max-w-none"
                        dangerouslySetInnerHTML={{ __html: blog.description }}
                    />
                </div>

                {/* Right: Sticky Sidebar */}
                <div className="md:w-[30%] relative">
                    <div className="md:sticky top-20 space-y-10">
                        {/* Contact Form */}
                        <div className=" border-[#55555580] border p-5 -lg shadow-md ">
                            <h2 className="text-xl font-semibold mb-3">Contact Us</h2>

                            <div>
                                {status === "success" ? (
                                    <div className="text-green-600 font-semibold text-start my-4">
                                        Thank you! Our team will get back to you as soon as
                                        possible.
                                    </div>
                                ) : (
                                    <form
                                        ref={form}
                                        onSubmit={sendEmail}
                                        className="mt-5 space-y-5"
                                    >
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
                                            className="w-full py-3 text-gray-900 border border-[#55555570] rounded bg-gradient-to-r from-[#FFF4E8] to-[#FFE4FF]"
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

                        {/* Subscribe */}
                        <div className="border border-[#55555570] p-4 -lg">
                            <h2 className="text-xl font-semibold mb-3">
                                Subscribe for Updates
                            </h2>
                            <p className="text-gray-600 mb-4">
                                Stay updated with our latest blogs and news.
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

                        {/* Follow Us */}
                        <div className="border border-[#55555580] p-5 -lg shadow-md">
                            <h2 className="text-xl font-semibold mb-3">Follow Us</h2>

                            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 w-fit">
                                <a
                                    href="https://www.youtube.com/@KriyonaInfotech"
                                    className="text-grey-500 text-2xl text-center border border-[#55555570] rounded bg-gray-50  p-3 w-fit"
                                >
                                    <img src="/services/youtube.png" className="w-8 h-8 object-contain" alt="" />
                                </a>
                                <a
                                    href="https://www.linkedin.com/company/kriyonainfotech"
                                    className="border border-[#55555570] rounded bg-gray-50 p-3 w-fit"
                                >
                                    <img
                                        src="/services/linkedin.png"
                                        className="w-8 h-8 object-contain"
                                        alt=""
                                    />
                                </a>
                                <a
                                    href="https://www.facebook.com/profile.php?id=61567821947508"
                                    className="border border-[#55555570] rounded bg-gray-50  p-3 w-fit"
                                >
                                    <img
                                        src="/services/facebook.png"
                                        className="w-8 h-8 object-contain"
                                        alt=""
                                    />
                                </a>
                                <a
                                    href="https://www.instagram.com/kriyonainfotech/"
                                    className="border border-[#55555570] rounded bg-gray-50  p-3 w-fit"
                                >
                                    <img
                                        src="/services/instagram.png"
                                        className="w-8 h-8 object-contain"
                                        alt=""
                                    />
                                </a>
                                <a
                                    href="https://clutch.co/profile/kriyona-infotech#highlights"
                                    target="_blank"
                                    className="border border-[#55555570] rounded bg-gray-50  p-3 w-fit"
                                >
                                    <img src="/services/clutch.webp" className="w-8 h-8 object-contain" alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="pt-40">
                {/* CTA */}
                <div className="mt-10 p-6 border text-center border-[#55555580]">
                    <h2 className="text-xl font-semibold mb-2">Like what you read?</h2>
                    <p className="mb-4">
                        Subscribe to get more content like this directly to your inbox.
                    </p>
                    <form onSubmit={handleSubscribe}>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            required
                            className="border px-4 py-2 mx-w-7xl mr-2 outline-none"
                        />
                        <button
                            type="submit"
                            className="mt-2 border-[#55555580] border bg-gradient-to-r from-[#FFF4E8] from-51% to-[#FFE4FF] to-100% px-4 py-2 "
                        >
                            Subscribe
                        </button>
                    </form>
                    {msg && (
                        <p className="mt-3 text-sm font-medium text-green-600">{msg}</p>
                    )}
                </div>
            </div>

            {relatedBlogs?.length > 0 && (
                <div className="mt-20">
                    <h2 className="text-2xl font-bold mb-6 text-center">Related Blogs</h2>

                    <div className="grid md:grid-cols-3 gap-6">
                        {relatedBlogs.map((blog) => (
                            <div
                                key={blog._id}
                                className="border border-[#55555580] p-4 hover:shadow-lg transition duration-200 bg-white"
                            >
                                <h3 className="text-lg font-semibold mb-2">{blog.title}</h3>
                                <img
                                    src={blog.imageUrl}
                                    alt={blog.title}
                                    className="w-full h-48 object-cover"
                                />

                                <p className="text-sm text-gray-600 mb-2 mt-2">
                                    {new Date(blog.createdAt).toLocaleDateString("en-US", {
                                        day: "numeric",
                                        month: "short",
                                        year: "numeric",
                                    })}
                                </p>
                                <p className="text-sm text-gray-700 line-clamp-3 mb-4">
                                    {stripHtml(blog.description).slice(0, 150)}...
                                </p>
                                <a
                                    href={`/blog/${blog.slug}`}
                                    className="text-sm font-medium text-cyan-700 hover:underline"
                                >
                                    Read More →
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            )}

        </div>
    );
};

