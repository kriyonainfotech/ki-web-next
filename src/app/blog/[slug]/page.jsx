import { notFound } from "next/navigation";
import axios from "axios";
import BlogDetail from "@/components/BlogDetail";
const apiUrl = process.env.NEXT_PUBLIC_API_URL;

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
