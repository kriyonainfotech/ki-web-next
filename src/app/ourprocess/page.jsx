import OurProcessClient from "./OurProcessClient";

export const metadata = {
    title: "Our 6-Step Development Blueprint for Web & App Projects",
    description:
        "Discover our agile 6-step development process for web, app, and software projects that deliver real business value.",
    keywords: [
        "software development process",
        "web development steps",
        "mobile app workflow",
        "Kriyona Infotech development cycle",
        "IT agency process Surat"
    ],
    openGraph: {
        title: "Our Process | Kriyona Infotech",
        description:
            "Explore how Kriyona Infotech transforms your ideas into successful digital products with a clear, agile, and collaborative development process.",
        url: "https://kriyonainfotech.com/ourprocess",
        type: "website",
        images: [
            {
                url: "https://kriyonainfotech.com/kriyona-infotech-logo1.png",
                width: 1200,
                height: 630,
                alt: "Kriyona Infotech Logo"
            }
        ]
    },
    alternates: {
        canonical: "https://kriyonainfotech.com/ourprocess"
    },
    other: {
        // Schema markup is not officially supported via `metadata`, so we inject it manually in layout or page
        "organizationSchema": JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Kriyona Infotech",
            "url": "https://kriyonainfotech.com",
            "logo": "https://kriyonainfotech.com/kriyona-infotech-logo1.png",
            "sameAs": [
                "https://www.instagram.com/kriyonainfotech/",
                "https://www.linkedin.com/company/kriyonainfotech/"
            ]
        }),
        "howToSchema": JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": "Kriyona’s 6-Step Development Process",
            "description": "A simplified guide to our development workflow — from research to deployment.",
            "step": [
                {
                    "@type": "HowToStep",
                    "name": "Discovery & Research",
                    "text": "We dive deep into your business goals, target audience, and competitors."
                },
                {
                    "@type": "HowToStep",
                    "name": "Strategy & Planning",
                    "text": "We define the tech stack, roadmap, and timelines tailored to your needs."
                },
                {
                    "@type": "HowToStep",
                    "name": "UI/UX Design",
                    "text": "We create wireframes, mockups, and designs optimized for user experience."
                },
                {
                    "@type": "HowToStep",
                    "name": "Development",
                    "text": "We build the product using scalable architecture and agile sprints."
                },
                {
                    "@type": "HowToStep",
                    "name": "QA & Testing",
                    "text": "We test for functionality, bugs, speed, and responsiveness."
                },
                {
                    "@type": "HowToStep",
                    "name": "Launch & Support",
                    "text": "We deploy on your preferred cloud platform and provide post-launch support."
                }
            ]
        })
    }
};

export default function OurProcess() {
    return (
        <OurProcessClient />
    )
}