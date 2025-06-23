import PricingClient from "./PricingClient";

export const metadata = {
    title: "Website, App & Branding Prices in Surat | Kriyona Infotech",
    description:
        "Compare pricing for website development, app design, SEO, and branding. Transparent, affordable, and designed for Surat-based businesses of any size.",
    keywords: [
        "web development pricing Surat",
        "app development cost India",
        "branding packages Surat",
        "digital marketing pricing",
        "SEO services cost",
        "Kriyona Infotech packages"
    ],
    authors: [{ name: "Kriyona Infotech" }],
    robots: "index, follow",
    openGraph: {
        title: "Website, App & Branding Prices in Surat | Kriyona Infotech",
        description:
            "Transparent pricing plans for custom websites, mobile apps, branding, and marketing services tailored to your business needs.",
        url: "https://kriyonainfotech.com/pricing",
        type: "website",
        images: [
            {
                url: "https://kriyonainfotech.com/kriyona-infotech-logo1.png",
                alt: "Kriyona Infotech Logo",
            },
        ],
    },
    alternates: {
        canonical: "https://kriyonainfotech.com/pricing",
    },
};

export default function Pricing() {
    return (
        <PricingClient />
    );
}