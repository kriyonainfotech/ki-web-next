import PortfolioClient from "./PortfolioClient";

export const metadata = {
    title: "Web, App & Branding Portfolio | Kriyona Infotech Surat",
    description:
        "See real projects delivered by Kriyona Infotech — websites, apps, branding, and marketing work built for startups, businesses, and brands across Surat & India.",
    keywords: [
        "Kriyona Infotech portfolio",
        "web development projects Surat",
        "app design samples",
        "branding agency portfolio India",
        "UI UX case studies",
        "digital marketing work"
    ],
    authors: [{ name: "Kriyona Infotech" }],
    robots: "index, follow",
    openGraph: {
        title: "Web, App & Branding Portfolio | Kriyona Infotech Surat",
        description:
            "Browse real client work from Kriyona Infotech — expert websites, apps, branding, and UI/UX projects delivered with business goals in mind.",
        url: "https://kriyonainfotech.com/portfolio",
        type: "website",
        images: [
            {
                url: "https://kriyonainfotech.com/kriyona-infotech-logo1.png",
                alt: "Kriyona Infotech Logo",
            },
        ],
    },
    alternates: {
        canonical: "https://kriyonainfotech.com/portfolio",
    },
};

export default function Portfolio() {
    return (
        <PortfolioClient />
    )
}