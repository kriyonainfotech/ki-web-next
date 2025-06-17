'use client'; // only needed if you're in /app and using useState/useEffect

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link'; // ✅ Correct way to use links in Next.js
import CTASection from '@/components/CTASection'; // ✅ Adjusted path for Next.js
const apiUrl = process.env.NEXT_PUBLIC_API_URL;
import Head from "next/head";

export default function Blog() {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await axios.get(
                    `${apiUrl}/api/blogs/allblogs`
                );
                const allBlogs = response.data;
                console.log(allBlogs, "allBlogs");

                const filteredBlogs = allBlogs.filter(
                    (blog) => blog?.website === "infotech"
                );

                console.log(filteredBlogs, "filteredBlogs");
                setBlogs(filteredBlogs);
            } catch (error) {
                console.error("Error fetching blog data:", error);
            }
        };

        fetchBlogs();
    }, []);

    const slugify = (text) =>
        text
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-") // replace non-alphanumerics with hyphen
            .replace(/^-+|-+$/g, ""); // trim hyphens from start/end

    return (
        <>
            <Head>
                <title>Blog | Kriyona Infotech</title>
                <meta name="description" content="Explore insightful blogs on tech, design, and digital marketing." />
                <meta name="keywords" content="blog, tech, web development, kriyona, UI/UX, SEO" />
                <link rel="canonical" href="https://kriyonainfotech.com/blog" />
                <meta property="og:title" content="Blog | Kriyona Infotech" />
                <meta property="og:description" content="Explore insightful blogs on tech, design, and digital marketing." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://kriyonainfotech.com/blog" />
                <meta property="og:image" content="https://www.kriyonainfotech.com/kriyona-infotech-logo1.png" />
            </Head>

            <div className="xxs:px-5 sm:px-5 lg:px-24 2xl:px-40">
                {/* Hero Section */}
                <section className="text-center pt-0">
                    <div className="bg-hero-grid py-20 border border-[#55555580]">
                        <h1 className="xxs:text-4xl sm:text-5xl xl:text-6xl font-semibold text-[#222]">
                            Our Blogs
                        </h1>
                        <p className="text-lg text-gray-600 mt-4">
                            Stay updated with the latest news, articles, and insights from
                            Kriyona Infotech.
                        </p>
                    </div>
                </section>

                {/* Blog Cards */}
                <section className="py-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogs.length > 0 ? (
                            blogs.map((blog) => (
                                <div
                                    key={blog._id}
                                    className=" border border-[#55555580] shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                                >
                                    <img
                                        src={blog.imageUrl}
                                        alt={blog.title}
                                        className="w-full h-64 object-cover"
                                    />
                                    <div className="p-6">
                                        <h2 className="text-xl font-semibold text-gray-800 mb-2">
                                            {blog.title}
                                        </h2>
                                        <p
                                            className="text-gray-600 line-clamp-4 mb-4"
                                            dangerouslySetInnerHTML={{
                                                __html:
                                                    blog.description.split("</h3>")[0] || blog.description,
                                            }}
                                        />
                                        <p className="text-sm text-gray-500 mb-2">
                                            Published on:{" "}
                                            {new Date(blog.createdAt).toLocaleDateString()}
                                        </p>
                                        <Link
                                            href={`/blog/${blog.slug}`}
                                            // state={{ blog }}
                                            // rel="noopener noreferrer"
                                            className="inline-block mt-2 text-blue-600 hover:underline font-medium"
                                        >
                                            Read More →
                                        </Link>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p className="col-span-3 text-center text-gray-500">
                                Loading blogs...
                            </p>
                        )}
                    </div>
                </section>

                <CTASection />
            </div>
        </>
    );
}