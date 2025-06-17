'use client';

import CTASection from "@/components/CTASection";
import { TbDeviceMobileCode } from "react-icons/tb";
import { SlEnergy } from "react-icons/sl";
import { MdLock } from "react-icons/md";
import { IoLogoWhatsapp, IoIosColorPalette } from "react-icons/io";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { motion } from "framer-motion";
import Techweuse from "@/components/Techweuse";
import Head from "next/head";

export default function MobileAppDevelopment() {

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const service = {
    id: 1,
    name: "MOBILE APP DEVELOPMENT",
    text: "We specialize in developing mobile applications using Flutter and React Native, building apps for both Android and iOS platforms that cater to a wide range of needs like multimedia, finance, business, communication, and more.",
    list: [
      { id: 1, li: "Android" },
      { id: 2, li: "Flutter" },
      { id: 3, li: "IOS" },
      { id: 4, li: "React-Native" },
    ],
    icons: [
      { id: 1, img: "/services/android.png", alt: "Android App Development" },
      { id: 2, img: "/services/Flutter.png", alt: "Flutter Development" },
      { id: 3, img: "/services/ios.png", alt: "iOS App Development" },
      { id: 4, img: "/services/reactjs.png", alt: "React Native Development" },
    ],
  };

  const techList = [
    "Flutter",
    "Figma",
    "Firebase",
    "Postman",
    "AWS",
    "Mongo DB",
    "GITHUB",
    'Google AdMob',
    "OpenAI",
  ];
  const techIcons = [
    { id: 1, img: "/appdev/flutter.png", alt: "Flutter" },
    { id: 2, img: "/appdev/figma.png", alt: "Figma" },
    { id: 3, img: "/appdev/firebase.png", alt: "Firebase" },
    { id: 4, img: "/webdev/postman.png", alt: "Postman" },
    { id: 5, img: "/webdev/aws.png", alt: "AWS" },
    { id: 6, img: "/webdev/mongo.png", alt: "MongoDB" },
    { id: 7, img: "/webdev/github.jpg", alt: "GITHUB" },
    { id: 8, img: "/appdev/googleadmob.png", alt: "googleadmob" },
    { id: 9, img: "/webdev/openai.png", alt: "OpenAI" },
  ];

  const features = [
    {
      title: "Cross-Platform Solutions",
      description:
        "Build once, deploy everywhere with our Flutter and React Native expertise.",
      icon: <TbDeviceMobileCode />,
    },
    {
      title: "Performance Optimized",
      description:
        "Smooth 60fps performance guaranteed for all user interactions.",
      icon: <SlEnergy />,
    },
    {
      title: "Custom UI/UX",
      description:
        "Tailored interfaces that reflect your brand identity perfectly.",
      icon: <IoIosColorPalette />,
    },
    {
      title: "Secure Backend",
      description:
        "Enterprise-grade security for all your data and transactions.",
      icon: <MdLock />,
    },
  ];

  const processSteps = [
    {
      step: "1",
      title: "Discovery",
      description:
        "We analyze your requirements and create a detailed project roadmap.",
    },
    {
      step: "2",
      title: "Design",
      description:
        "Our designers create pixel-perfect UI/UX mockups for your approval.",
    },
    {
      step: "3",
      title: "Development",
      description: "Agile development with weekly demos and iterations.",
    },
    {
      step: "4",
      title: "Testing",
      description: "Rigorous QA testing across all devices and scenarios.",
    },
    {
      step: "5",
      title: "Launch",
      description: "App store deployment and post-launch support.",
    },
  ];

  const breadcrumbPaths = [
    { name: "Home", to: "/" },
    { name: "Services", to: "/services" },
    { name: "Mobile App Development" },
  ];

  return (
    <>
      <Head>
        <title>Mobile App Development Company in Surat | iOS & Android Solutions</title>
        <meta
          name="description"
          content="Build cutting-edge mobile apps with Kriyona Infotech. We offer custom iOS & Android app development services in Surat for startups & businesses."
        />
        <meta
          name="keywords"
          content="mobile app development Surat, app developers in Surat, Android app development, iOS app development, custom app development company"
        />
        <meta name="author" content="Kriyona Infotech" />

        <meta
          property="og:title"
          content="App Development Company in Surat | iOS & Android Experts"
        />
        <meta
          property="og:description"
          content="Kriyona Infotech builds powerful Android & iOS mobile apps tailored to your business needs. Trusted app development company in Surat."
        />
        <meta
          property="og:url"
          content="https://www.kriyonainfotech.com/services/app-development"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://kriyonainfotech.com/services/app-development-hero.png"
        />

        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.kriyonainfotech.com/services/app-development"
        />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "serviceType": "Mobile App Development",
              "provider": {
                "@type": "Organization",
                "name": "Kriyona Infotech",
                "url": "https://www.kriyonainfotech.com"
              },
              "description": "Professional mobile application development services for Android and iOS platforms using Flutter and React Native technologies.",
              "offers": {
                "@type": "Offer",
                "price": "Varies",
                "priceCurrency": "IND"
              },
              "areaServed": {
                "@type": "Country",
                "name": "Global"
              }
            }
          `}
        </script>
      </Head>

      <div className="w-full max-w-7xl mx-auto px-4 md:px-6">
        <Breadcrumb paths={breadcrumbPaths} />
        {/* Hero Section */}
        <section className="relative pt-5 md:pt-0 md:pb-24 overflow-hidden">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row items-center h-full">
              <motion.div
                className="md:w-1/2 h-full mb-10 md:mb-0 flex flex-col justify-evenly"
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
              >
                <motion.h1
                  className="text-4xl md:text-6xl font-bold pb-16"
                  variants={fadeIn}
                >
                  Building{" "}
                  <span className=" bg-gradient-to-r from-pink-600 via-purple-500 to-blue-600 bg-clip-text text-transparent">
                    {" "}
                    Future-Ready Mobile Apps
                  </span>{" "}
                  <span className="text-gray-900"> for Ambitious Brands</span>
                </motion.h1>

                <motion.p
                  className="text-xl text-gray-600 mb-8 leading-8"
                  variants={fadeIn}
                >
                  As Surat's{" "}
                  <strong>leading mobile app development partner</strong>, we
                  craft results-driven solutions for startups to enterprises.
                  Our team transforms ideas into market-ready apps using
                  cutting-edge technology and intuitive UX design.
                  <br />
                  <br />
                  We've delivered 50+ high-performance Android/iOS applications
                  across industries, from concept to successful launch. Trusted
                  as Surat's <strong>top development team</strong>, we turn
                  visions into scalable digital products.
                </motion.p>

                <motion.div variants={fadeIn} className="mt-4">
                  <Link
                    href={"/contactus"}
                    className=" bg-gradient-to-r from-pink-600 via-purple-700 to-blue-500 text-white font-semibold py-3 px-8 rounded-full transition duration-300"
                  >
                    Get Free Consultation →
                  </Link>
                </motion.div>
              </motion.div>

              <motion.div
                className="md:w-1/2"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                {" "}
                <div className="relative z-10">
                  <img
                    src="/services/app-development-hero.png"
                    alt="Mobile App Development"
                    className="w-full h-auto max-w-lg mx-auto rounded-lg "
                    loading="lazy"
                  />
                  <div className="absolute -bottom-8 -right-8 bg-white p-4 rounded-2xl shadow-lg w-64">
                    <div className="flex items-center gap-3">
                      <div>
                        <p className="font-semibold">85%+</p>
                        <p className="text-sm text-gray-500">
                          Client Retention Rate
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <Techweuse techIcons={techIcons} techList={techList} />

        <CTASection icon={<IoLogoWhatsapp className="text-green-700" />} />

        {/* Service Overview */}
        {/* <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              className="text-center mb-16"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Mobile App Development Services
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <motion.div
                className="border border-[#55555580] cursor-pointer p-8 rounded-xl"
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center mb-4">
                  <div className="bg-gray-50 shadow-lg border border-gray-200 p-3 rounded-full mr-4">
                    <img
                      src="/services/android.png"
                      alt="Android"
                      className="w-8 h-8"
                    />
                  </div>
                  <h3 className="text-xl font-semibold">
                    Native Android Development
                  </h3>
                </div>
                <p className="text-gray-600">
                  Build high-performance Android apps with Kotlin and Java,
                  optimized for all device sizes and versions.
                </p>
              </motion.div>

              <motion.div
                className="border border-[#55555580] cursor-pointer p-8 rounded-xl"
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center mb-4">
                  <div className="bg-gray-50 shadow-lg border border-gray-200 p-3 rounded-full mr-4">
                    <img
                      src="/appdev/ios.png"
                      alt="iOS"
                      className="w-8 h-8 object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold">
                    Native iOS Development
                  </h3>
                </div>
                <p className="text-gray-600">
                  Create elegant iOS applications with Swift, following Apple's
                  human interface guidelines.
                </p>
              </motion.div>

              <motion.div
                className="border border-[#55555580] cursor-pointer p-8 rounded-xl"
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center mb-4">
                  <div className="bg-gray-50 shadow-lg border border-gray-200 p-3 rounded-full mr-4">
                    <img
                      src="/services/Flutter.png"
                      alt="Flutter"
                      className="w-8 h-8"
                    />
                  </div>
                  <h3 className="text-xl font-semibold">Flutter Development</h3>
                </div>
                <p className="text-gray-600">
                  Beautiful, natively compiled applications for mobile, web, and
                  desktop from a single codebase.
                </p>
              </motion.div>

              <motion.div
                className="border border-[#55555580] cursor-pointer p-8 rounded-xl"
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center mb-4">
                  <div className="bg-gray-50 shadow-lg border border-gray-200 p-3 rounded-full mr-4">
                    <img
                      src="/services/reactjs.png"
                      alt="React Native"
                      className="w-8 h-8"
                    />
                  </div>
                  <h3 className="text-xl font-semibold">
                    React Native Development
                  </h3>
                </div>
                <p className="text-gray-600">
                  Leverage React ecosystem to build truly native apps with
                  shared JavaScript code.
                </p>
              </motion.div>
            </div>
          </div>
        </section> */}

        {/* Key Features */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              className="text-center mb-16"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Our Mobile App Development
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We deliver more than just code - we create digital experiences
                that drive business growth.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="border border-[#55555580] p-8 rounded-xl text-center cursor-pointer"
                  initial="hidden"
                  animate="visible"
                  variants={fadeIn}
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="text-4xl mb-4 flex justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 bg-gradient-to-r from-pink-600 via-purple-700 to-blue-500 bg-clip-text text-transparent">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Development Process */}
        <section className="py-16">
          <div className="container mx-auto border border-[#55555580]">
            <motion.div
              className="text-center py-10"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Development Process
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Transparent, collaborative, and designed for success at every
                stage.
              </p>
            </motion.div>

            <div className="relative border-t border-[#55555580] px-8">
              <div className="hidden lg:block absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-pink-600 via-purple-700 to-blue-500 transform -translate-x-1/2 opacity-30"></div>

              <div className="space-y-12 lg:space-y-0 py-10">
                {processSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    className="relative lg:flex items-center"
                    initial="hidden"
                    animate="visible"
                    variants={fadeIn}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div
                      className={`flex-shrink-0 mx-auto lg:mx-0 ${index % 2 === 0 ? "lg:mr-8" : "lg:ml-8 lg:order-last"
                        }`}
                    >
                      <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-pink-600 via-purple-700 to-blue-500 text-white text-2xl font-bold">
                        {step.step}
                      </div>
                    </div>

                    <div
                      className={`mt-4 lg:mt-0 ${index % 2 === 0
                        ? "lg:text-right lg:mr-auto"
                        : "lg:text-left lg:ml-auto"
                        }`}
                    >
                      <h3 className="text-xl font-semibold text-gray-900">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-gray-600 max-w-md">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full flex justify-center px-4">
          <div className="w-full flex justify-center text-center max-w-7xl bg-gradient-to-r from-pink-600 via-purple-700 to-blue-500 py-16 px-8 text-white relative overflow-hidden rounded-xl shadow-lg">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.h2
                className="text-3xl md:text-4xl font-bold mb-6"
                variants={fadeIn}
              >
                Ready to Build Your Mobile App?
              </motion.h2>
              <motion.p
                className="text-xl mb-8 max-w-2xl mx-auto"
                variants={fadeIn}
              >
                Let's discuss how we can turn your app idea into reality with
                our expert mobile development services.
              </motion.p>
              <motion.div variants={fadeIn}>
                <Link
                  href={"/contactus"}
                  className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition duration-300"
                >
                  Get Started Today
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}