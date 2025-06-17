import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Roboto_Mono, Montserrat as Font_Montserrat } from 'next/font/google'
import Footer from "@/components/Footer";
import '../styles/scrollbar.css'
import DisableInspect from "@/components/DisableInspect";
import PageTransitionWrapper from "@/components/PageTransitionWrapper";

const roboto = Roboto_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-roboto', // optional: for using as CSS variable
  display: 'swap',
})

const montserrat = Font_Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-montserrat',
  display: 'swap',
});

export const metadata = {
  title: "Kriyona Infotech | IT company in Surat, offering web development, app development, software development, and branding services.",
  description: "Kriyona Infotech is a leading IT company in Surat, offering web development, app development, software development, and branding services.",
  other: {
    "p:domain_verify": "b610f1c560b3cf0b893ca727269832d1", // <-- Add this line
    "google-site-verification": "Oih10jG428lmQLpdXurp-xL8_I9o-DXmzgVd1uanwqg"
  },
};

{/* <meta name="google-site-verification" content="Oih10jG428lmQLpdXurp-xL8_I9o-DXmzgVd1uanwqg" /> */ }
export default function RootLayout({ children }) {
  return (
    <html lang="">
      <head>
        <link rel="icon" type="image/svg+xml" href="./kriyona-infotech-logo1.png" />
        <script src="https://analytics.ahrefs.com/analytics.js" data-key="1ootqa2tzJhVJi95attBbw" async></script>
      </head>
      <body
        className={`${roboto.variable} ${montserrat.variable}`}
      >
        <PageTransitionWrapper >
          <DisableInspect />
          <Navbar />
          {children}
          <Footer />
        </PageTransitionWrapper>
      </body>
    </html>
  );
}
