import Image from "next/image";
import Homepage from '@/components/Homepage'
import Head from "next/head";
export default function Home() {
  return (
    <div >
      <Head>
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Kriyona Infotech",
              "url": "https://kriyonainfotech.com",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://kriyonainfotech.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Kriyona Infotech",
              "url": "https://kriyonainfotech.com",
              "logo": "https://kriyonainfotech.com/kriyona-infotech-logo1.png", // replace with your real logo URL
              "sameAs": [
                "https://www.instagram.com/kriyonainfotech",
                "https://www.linkedin.com/company/kriyonainfotech",
                "https://www.facebook.com/profile.php?id=61567821947508"
              ]
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Kriyona Infotech",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "3rd floor, 51-52 Pramukh park society, Mahadev chowk, Mota Varachha,",
                "addressLocality": "Surat",
                "addressRegion": "Gujarat",
                "postalCode": "394101",
                "addressCountry": "IN"
              },
              "url": "https://kriyonainfotech.com",
              "telephone": "+91-8401366742", // Replace with your number
              "openingHours": "Mo-Sa 09:00-19:00"
            }),
          }}
        />
      </Head>
      <Homepage />
    </div>
  );
}
