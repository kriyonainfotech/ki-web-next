import AppClient from "./AppClient";

export const metadata = {
  title: "Mobile App Development in Surat | Android & iOS Experts",
  description:
    "Build fast, scalable Android and iOS apps with Kriyona Infotech. We develop mobile apps for startups, businesses, and enterprises using Flutter & React Native.",
  keywords: [
    "mobile app development Surat",
    "app developers in Surat",
    "Android app development",
    "iOS app development",
    "Flutter app development India",
    "React Native apps"
  ],
  authors: [{ name: "Kriyona Infotech" }],
  robots: "index, follow",
  openGraph: {
    title: "Mobile App Development in Surat | Android & iOS Experts",
    description:
      "Kriyona Infotech builds custom Android and iOS mobile apps tailored to your business needs. Flutter, React Native, and scalable solutions for startups and brands.",
    url: "https://www.kriyonainfotech.com/services/app-development",
    type: "website",
    images: [
      {
        url: "https://kriyonainfotech.com/services/app-development-hero.png",
        alt: "Mobile App Development by Kriyona",
      },
    ],
  },
  alternates: {
    canonical: "https://www.kriyonainfotech.com/services/app-development",
  },
};

export default function MobileAppDevelopment() {
  return (
    <AppClient />
  )
}