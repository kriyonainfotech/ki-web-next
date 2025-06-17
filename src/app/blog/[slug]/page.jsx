import { notFound } from "next/navigation";
import axios from "axios";
import BlogDetail from "@/components/BlogDetail";
const apiUrl = process.env.NEXT_PUBLIC_API_URL;

// DYNAMIC META
export async function generateMetadata({ params }) {
    const { slug } = params;

    try {
        const { data } = await axios.get(`${apiUrl}/api/blogs/slug/${slug}`);
        const blog = data.blog;

        return {
            title: `${blog.metaTitle || blog.title} | Kriyona Infotech Blog`,
            description: blog.metaDescription || blog.excerpt || blog.description?.slice(0, 150),
            keywords: blog.keywords?.join(", "),
            openGraph: {
                title: `${blog.metaTitle || blog.title} | Kriyona Infotech`,
                description: blog.metaDescription || blog.excerpt || blog.description?.slice(0, 150),
                url: `https://kriyonainfotech.com/blog/${slug}`,
                type: "article",
                images: [
                    {
                        url: blog.thumbnail || "/default-og.png",
                        width: 1200,
                        height: 630,
                        alt: blog.title,
                    },
                ],
            },
            alternates: {
                canonical: `https://kriyonainfotech.com/blog/${slug}`,
            },
        };
    } catch (error) {
        console.error("Failed to generate metadata:", error);
        return {
            title: "Blog | Kriyona Infotech",
            description: "Explore tech, design, and marketing blogs from Kriyona Infotech.",
        };
    }
}


export default async function Page({ params: { slug } }) {
    console.log(slug, 'data slug')
    if (!slug) return notFound();

    try {
        const { data } = await axios.get(`${apiUrl}/api/blogs/slug/${slug}`, {
            headers: {
                "Cache-Control": "no-store", // Mimic fetch's cache: "no-store"
            },
        });
        console.log(data, 'blog data')
        const { blog, relatedBlogs } = data;
        return <BlogDetail blog={blog} relatedBlogs={relatedBlogs} />;
    } catch (error) {
        console.error("Error fetching blog:", error);
        return notFound();
    }
}
