import ContactUsClient from "./ContactUsClient";

export const metadata = {
    title: "Talk to Us | Kriyona Infotech – Your Web & App Partner in Surat",
    description:
        "Got an idea? Need a website, app, or marketing strategy? Contact our team at Kriyona Infotech and let’s build something impactful together.",
    keywords: [
        "Contact Kriyona Infotech",
        "Web development agency Surat",
        "App development help",
        "Digital marketing support",
        "IT services inquiry"
    ],
    openGraph: {
        title: "Talk to Us | Kriyona Infotech",
        description:
            "Looking for web, app, or digital marketing services? Let's chat – Kriyona Infotech is ready to bring your vision to life.",
        url: "https://kriyonainfotech.com/contactus",
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
        canonical: "https://kriyonainfotech.com/contactus"
    }
};

export default function ContactUs() {
    return (
        <ContactUsClient />
    )
}