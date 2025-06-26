import BlogClient from "./BlogClient";

export const metadata = {
    title: "Tech, Design & Marketing Blogs | Kriyona Infotech",
    description:
        "Stay updated with blogs on web development, UI/UX, SEO, and digital trends. Learn how to grow your business through smart tech and creative strategy.",
    keywords: [
        "web development blog",
        "UI UX design tips",
        "SEO blogs India",
        "digital marketing trends",
        "tech insights",
        "Kriyona Infotech blog"
    ],
    authors: [{ name: "Kriyona Infotech" }],
    robots: "index, follow",
    openGraph: {
        title: "Tech, Design & Marketing Blogs | Kriyona Infotech",
        description:
            "Explore insightful blogs on tech, design, SEO, and digital marketing to stay ahead in the industry.",
        url: "https://kriyonainfotech.com/blog",
        type: "website",
        images: [
            {
                url: "https://www.kriyonainfotech.com/kriyona-infotech-logo1.png",
                alt: "Kriyona Infotech Logo",
            },
        ],
    },
    alternates: {
        canonical: "https://kriyonainfotech.com/blog",
    },
};


export default function Blog() {

    return (
        <>
            <BlogClient />
        </>
    );
}