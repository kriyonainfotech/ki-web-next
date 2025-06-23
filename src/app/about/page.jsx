import AboutClient from "./AboutClient";

export const metadata = {
    title: "Experts in Web, App & Digital Growth – Kriyona Infotech",
    description:
        "From design to launch, our Surat-based team helps you go digital with websites, apps, and strategies that deliver results you can see.",
    keywords: [
        "about Kriyona Infotech",
        "IT company Surat",
        "software company in India",
        "team of developers Surat",
        "digital agency"
    ],
    authors: [{ name: "Kriyona Infotech", url: "https://kriyonainfotech.com" }],
    openGraph: {
        title: "About Us | Kriyona Infotech – IT Solutions in Surat",
        description:
            "We're a passionate team of tech experts and creatives offering custom IT solutions in Surat. Let’s build your digital future.",
        url: "https://kriyonainfotech.com/about",
        type: "website",
        images: [
            {
                url: "https://www.kriyonainfotech.com/kriyona-infotech-logo1.png",
                width: 1200,
                height: 630,
                alt: "Kriyona Infotech Logo"
            }
        ]
    },
    alternates: {
        canonical: "https://kriyonainfotech.com/about"
    },
    robots: {
        index: true,
        follow: true
    }
};


export default function About() {
    return (
        <AboutClient />
    );
}