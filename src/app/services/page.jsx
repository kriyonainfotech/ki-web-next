import ServicesClient from "./ServicesClient";

export const metadata = {
    title: "IT Services for Businesses in Surat | Kriyona Infotech",
    description: "Looking for a reliable IT partner in Surat? We build custom websites, mobile apps, branding, SEO, and digital solutions that help your business grow.",
    keywords: [
        "web development Surat",
        "app development company",
        "software development India",
        "SEO services",
        "branding services",
        "UI UX design",
        "digital agency Surat"
    ],
    authors: [{ name: "Kriyona Infotech" }],
    robots: "index, follow",
    openGraph: {
        title: "IT Services for Businesses in Surat | Kriyona Infotech",
        description: "Custom websites, mobile apps, branding, and digital marketing services tailored for businesses in Surat. Your trusted local IT partner.",
        url: "https://kriyonainfotech.com/services",
        type: "website",
        images: [
            {
                url: "https://www.kriyonainfotech.com/kriyona-infotech-logo1.png",
                alt: "Kriyona Infotech Logo",
            },
        ],
    },
    alternates: {
        canonical: "https://kriyonainfotech.com/services",
    },
};


export default function Services() {
    return (
        <ServicesClient />
    );
}