"use client";

import Image from "next/image";
import Technologies from "@/components/Technologies";
import Head from "next/head";
import Hero from "./HeroSection";
import WaveStrapHero from "./HeroSection";
import FuturisticHero from "./HeroSection";
import { motion } from "framer-motion";
import { TbSeo } from "react-icons/tb";
import HeroSection from "./HeroSection";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Kriyona Infotech | Web, App & Software Development Company in Surat
        </title>
        <meta
          name="description"
          content="Kriyona Infotech is a Surat-based IT company offering website development, mobile apps, custom software, and digital marketing services to grow your business online."
        />
        <meta
          name="keywords"
          content="IT company in Surat, website development Surat, app development, custom software, digital marketing, SEO services, kriyona infotech"
        />
        <meta name="author" content="Kriyona Infotech" />
        <meta
          property="og:title"
          content="Kriyona Infotech | Web, App & Software Development Company in Surat"
        />
        <meta
          property="og:description"
          content="From websites to mobile apps, Kriyona Infotech builds digital solutions that drive results. Get your business online with expert IT services."
        />
        <meta property="og:url" content="https://kriyonainfotech.com/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.kriyonainfotech.com/kriyona-infotech-logo1.png"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://kriyonainfotech.com/" />
      </Head>

      <main className="h-auto">
        <div className="px-5 sm:px-10 lg:px-24 2xl:px-40">
          {/* <div className="bg-hero-grid h-auto mt-5">
            <div className="text-center flex flex-col justify-center">
              <div className=" border border-[#55555580] py-16 sm:py-20 md:py-32 text-center px-2 lg:px-20">
                <h1 className="text-4xl sm:text-5xl xl:text-5xl font-semibold lg:leading-tight xl:leading-tight text-[#222222]">
                  Bringing Visions to Digital Life
                </h1>
                <p className="text-xl mt-7 text-[#222222]">
                  Your Go-To IT Company in India — From custom websites to
                  mobile apps and digital marketing, Kriyona Infotech delivers
                  innovative solutions that drive real business growth.
                </p>
              </div>
              <div className="grid grid-cols-3 h-24 border border-[#55555580]">
                <div className="p-4 border-r border-[#55555580]">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth={0}
                    viewBox="0 0 16 16"
                    className="ms-auto text-base md:text-2xl text-[#A5A4A3]"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.854 10.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096z"
                    />
                  </svg>
                  <p className="text-sm sm:text-base xs:text-lg underline underline-offset-4 text-center ">
                    Expertise
                  </p>
                </div>
                <div className="p-4 border-r border-[#55555580]">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth={0}
                    viewBox="0 0 16 16"
                    className="ms-auto text-base md:text-2xl text-[#A5A4A3]"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.854 10.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096z"
                    />
                  </svg>
                  <p className="text-sm sm:text-base xs:text-lg underline underline-offset-4 text-center ">
                    Innovation
                  </p>
                </div>
                <div className="p-4 ">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth={0}
                    viewBox="0 0 16 16"
                    className="ms-auto text-base md:text-2xl text-[#A5A4A3]"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.854 10.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096z"
                    />
                  </svg>
                  <p className="text-sm sm:text-base xs:text-lg underline underline-offset-4 text-center ">
                    Solutions
                  </p>
                </div>
              </div>
            </div>
          </div> */}
          <HeroSection />

          <div className="py-20 sm:py-24">
            <div className="">
              <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200">
                {/* Header Section */}
                <div className="px-8 sm:px-14 pt-14 pb-10 text-center">
                  <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-3">
                    Who We Are
                  </p>
                  <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                    Kriyona Infotech
                  </h2>
                  <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
                    A leading IT company in Surat, India specializing in custom
                    digital solutions. We empower startups and enterprises with
                    high-performance websites, mobile apps, and digital
                    experiences that drive real business growth.
                  </p>
                </div>

                {/* Stats Section */}
                <div className="grid grid-cols-3 divide-x divide-gray-200 border-t border-gray-200">
                  <div className="p-6 sm:p-8 text-center">
                    <h3 className="text-3xl font-bold text-gray-800 mb-2">
                      100%
                    </h3>
                    <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Client Satisfaction
                    </p>
                  </div>

                  <div className="p-6 sm:p-8 text-center">
                    <h3 className="text-3xl font-bold text-gray-800 mb-2">
                      98%
                    </h3>
                    <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Success Rating
                    </p>
                  </div>

                  <div className="p-6 sm:p-8 text-center">
                    <h3 className="text-3xl font-bold text-gray-800 mb-2">
                      15+
                    </h3>
                    <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Projects Completed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="">
            {/* Section Header with Border */}
            <div className="py-16 text-center">
              <h1 className="text-4xl sm:text-5xl font-bold text-primary-black mb-4">
                Our <span className="text-indigo-600">Valued</span> Clients
              </h1>
              <p className="text-xl text-gray-600 ">
                Trusted by innovative businesses across industries - from
                healthcare to manufacturing
              </p>
            </div>

            {/* Client Logos - No Outer Borders */}
            <div className="p-8 sm:p-0">
              {/* Main Clients */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 ">
                {[
                  { src: "/worldclasse.avif", alt: "World class Export" },
                  { src: "/services/krishaexim.png", alt: "Krisha EXIM" },
                  { src: "/oceansolar.png", alt: "Ocean Solar Energy" },
                  { src: "/hem.png", alt: "HEM Shipping and Logistics" },
                  { src: "/bsm.png", alt: "BSM - Bill Stock Management" },
                  { src: "/kc.png", alt: "Kashtbhanjan Construction" },
                  {
                    src: "/fbm.png",
                    alt: "FBM - Finance & Business Management",
                  },
                  { src: "/DIGIPOSTER.png", alt: "DigiPosterPro" },
                  { src: "/ess-121-CISEWOlG.png", alt: "ESS121" },
                  { src: "/marron_icon.png", alt: "Marron" },
                  { src: "/mymovie.png", alt: "MyMovie" },
                  { src: "/eibmlogo.png", alt: "EIBM" },
                  { src: "/crebit.png", alt: "Crebit" },
                ].map((client, index) => (
                  <motion.div
                    key={index}
                    className="flex justify-center items-center p-6 border border-gray-300 rounded-lg"
                    whileHover={{
                      y: -4,
                      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                      transition: { duration: 0.3 },
                    }}
                  >
                    <Image
                      src={client.src}
                      alt={`${client.alt.trim()} logo`}
                      width={160}
                      height={80}
                      className="w-full h-auto max-h-20 object-contain  transition-all duration-300"
                    />
                  </motion.div>
                ))}
              </div>

              {/* Technology Partners */}
              {/* <div className="text-center mb-6">
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-6">
        {[
         
        ].map((client, index) => (
          <motion.div
            key={index}
            className="flex justify-center items-center p-4"
            whileHover={{ scale: 1.05 }}
          >
            <Image
              src={client.src}
              alt={client.alt}
              width={120}
              height={60}
              className="w-auto h-10 object-contain opacity-80 hover:opacity-100 transition-opacity"
            />
          </motion.div>
        ))}
      </div>
    </div> */}
            </div>
          </div>

          <section className="">
            <div className=" py-20">
              <div className="px-5 sm:px-10 lg:px-24 2xl:px-0">
                {/* Section Header */}
                <div className="text-center mb-16">
                  <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                    Our <span className="text-indigo-600">Comprehensive</span>{" "}
                    Services
                  </h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    End-to-end digital solutions tailored to your business needs
                  </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[
                    {
                      title: "Web Development",
                      description:
                        "Custom websites and web applications with modern frameworks",
                      icon: "/services/web.png",
                      color: "bg-blue-100",
                    },
                    {
                      title: "Mobile App Development",
                      description:
                        "iOS & Android apps built for performance and scalability",
                      icon: "/services/app.png",
                      color: "bg-purple-100",
                    },
                    {
                      title: "Cloud Services",
                      description:
                        "AWS, Azure & GCP solutions for your infrastructure",
                      icon: "/cloud.svg",
                      color: "bg-cyan-100",
                    },
                    {
                      title: "SEO & Digital Marketing",
                      description:
                        "Increase visibility and drive qualified traffic",
                      icon: "/seo.svg",
                      color: "bg-green-100",
                    },
                    {
                      title: "Backend Development",
                      description: "Robust APIs and server-side solutions",
                      icon: "/services/server.png",
                      color: "bg-orange-100",
                    },
                    {
                      title: "DevOps & CI/CD",
                      description:
                        "Streamlined deployment and infrastructure automation",
                      icon: "/services/devops.png",
                      color: "bg-yellow-100",
                    },
                    {
                      title: "E-commerce Solutions",
                      description:
                        "Custom online stores with secure payment integration",
                      icon: "/services/shopping-online.png",
                      color: "bg-red-100",
                    },
                    // {
                    //   title: "AI & Machine Learning",
                    //   description:
                    //     "Intelligent solutions powered by artificial intelligence",
                    //   icon: "/ai.svg",
                    //   color: "bg-indigo-100",
                    // },
                  ].map((service, index) => (
                    <motion.div
                      key={index}
                      className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200"
                      whileHover={{
                        y: -10,
                        boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1)",
                      }}
                    >
                      <div className={`${service.color} h-3 w-full`}></div>
                      <div className="p-8">
                        <div className="flex items-center mb-6">
                          <div className={`p-3 rounded-lg ${service.color}`}>
                            <img
                              src={service.icon}
                              alt={service.title}
                              className="w-10 h-10"
                            />
                          </div>
                          <h3 className="text-xl font-bold ml-4">
                            {service.title}
                          </h3>
                        </div>
                        <p className="text-gray-600 mb-6">
                          {service.description}
                        </p>
                        <a
                          href="/services"
                          className="text-blue-600 font-medium hover:text-blue-800 transition-colors"
                        >
                          Learn more →
                        </a>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="text-center mt-20 bg-gradient-to-r from-[#FFF4E8] to-[#FFE4FF] py-10 px-6 rounded-xl shadow-sm">
                  <h3 className="text-2xl font-semibold mb-6">
                    Need a custom solution?
                  </h3>
                  <button
                    onClick={() =>
                      window.open("https://wa.me/918401366742", "_blank")
                    }
                    className="px-8 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors font-medium"
                  >
                    Get a Free Consultation
                  </button>
                </div>
              </div>
            </div>

            {/* CTA Section */}
          </section>

          <div className="py-20 px-5 sm:px-10 lg:px-24 2xl:px-20">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                Business <span className="text-indigo-600">Solutions</span> We
                Build
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Custom digital platforms for 12+ industries
              </p>
            </div>

            {/* Horizontal Grid - 4 columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {[
                {
                  name: "Medical & Hospitals",
                  person: "/buisnesses/hospital.png",
                  gradient: "from-blue-100 to-cyan-100",
                },
                {
                  name: "Import/Export Trade",
                  person: "/buisnesses/trader.png",
                  gradient: "from-purple-100 to-pink-100",
                },
                {
                  name: "Retail Stores",
                  person: "/buisnesses/retailer.png",
                  gradient: "from-amber-100 to-orange-100",
                },
                {
                  name: "Restaurants & Cafes",
                  person: "/buisnesses/chef.png",
                  gradient: "from-red-100 to-rose-100",
                },
                {
                  name: "Educational Institutes",
                  person: "/buisnesses/teacher.png",
                  gradient: "from-emerald-100 to-teal-100",
                },
                {
                  name: "Real Estate Agencies",
                  person: "/buisnesses/realtor.png",
                  gradient: "from-indigo-100 to-violet-100",
                },
                {
                  name: "Manufacturing Units",
                  person: "/buisnesses/engineer.png",
                  gradient: "from-sky-100 to-blue-200",
                },
                {
                  name: "Law Firms",
                  person: "/buisnesses/lawyer.png",
                  gradient: "from-stone-100 to-gray-200",
                },
                {
                  name: "Accounting Services",
                  person: "/buisnesses/accountant.png",
                  gradient: "from-green-100 to-lime-100",
                },
                {
                  name: "Travel Agencies",
                  person: "/buisnesses/travel-agent.png",
                  gradient: "from-fuchsia-100 to-purple-200",
                },
                {
                  name: "Fitness Centers",
                  person: "/buisnesses/trainer.png",
                  gradient: "from-rose-100 to-pink-200",
                },
                {
                  name: "Event Management",
                  person: "/buisnesses/event-planner.png",
                  gradient: "from-yellow-100 to-amber-100",
                },
              ].map((business, index) => (
                <motion.div
                  key={index}
                  className={`bg-gradient-to-r ${business.gradient} rounded-xl shadow-md overflow-hidden h-48`}
                  whileHover={{ scale: 1.03 }}
                >
                  <div className="flex h-full">
                    <div className="w-1/2 h-full overflow-hidden">
                      <img
                        src={business.person}
                        alt={business.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="w-2/3 p-6 flex flex-col justify-center">
                      <h3 className="text-xl font-bold text-gray-800">
                        {business.name}
                      </h3>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Consultation CTA */}
            <div className="text-center mt-12">
              <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
                <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                  Book a free consultation with our experts
                </h3>
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                  Let's discuss your custom digital solution
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <button className="px-8 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors font-medium shadow-md hover:shadow-lg">
                    Book Consultation Now
                  </button>
                  <button className="px-8 py-3 bg-white text-gray-600 border border-gray-600 rounded-lg hover:bg-gray-50 transition-colors font-medium">
                    Call: +91 8401366742
                  </button>
                </div>
              </div>
            </div>
          </div>

          <Technologies />

          <div className="mt-24 sm:mt-36 text-center border border-[#55555580] py-20">
            <h1 className="text-4xl sm:text-5xl font-semibold leading-tight text-[#222222]">
              Success Stories
            </h1>
          </div>

          <div className=" grid grid-cols-12">
            {/* Row 1 - Left (30%) - 3 Vertical Boxes */}
            <div className="col-span-12 lg:col-span-5 flex flex-col ">
              <div className="p-7 border border-[#55555580]">
                <img alt="quote" className="w-5 h-5" src="/quote-left.png" />
                <p className="text-md mt-5">
                  Kriyona Infotech played a crucial role in bringing my startup
                  to life. Their team demonstrated exceptional professionalism,
                  technical expertise, and a deep understanding of my business
                  needs. From concept to execution, they delivered a seamless,
                  high-quality platform on time, ensuring scalability and
                  efficiency. Their ongoing support and commitment made the
                  entire process smooth. Highly recommended!
                </p>
                <div className="flex items-center mt-10">
                  <p>Rajiv M. Surati, Founder Of EES121</p>
                </div>
              </div>
              <div className="p-7 border border-[#55555580]">
                <img alt="quote" className="w-5 h-5" src="/quote-left.png" />
                <p className="text-md mt-5 ">
                  Exceptional Web Design Service!😊 The team was incredibly
                  creative, professional, and responsive throughout the entire
                  process. They delivered a visually stunning and user-friendly
                  website that perfectly aligned with our brand. Their expertise
                  in modern design trends and attention to detail have
                  significantly enhanced our online presence. Highly recommend
                  them to anyone seeking outstanding web design solutions!
                </p>
                <div className="flex items-center mt-10">
                  <p>Nayan Bhisara, CEO Of Kriyona Studio</p>
                </div>
              </div>
              {/* <div className="p-7 border border-[#55555580]">
                <img alt="quote" className="w-5 h-5" src="/quote-left.png" />
                <p className="text-sm mt-5">Excellent work!</p>
                <div className="flex items-center mt-10">
                  <p>Saurabh Baranwal</p>
                </div>
              </div> */}
            </div>

            {/* Row 1 - Right (60%) - One Large Box */}
            <div className="col-span-12 lg:col-span-7 p-7 border border-[#55555580] flex flex-col justify-center">
              <div className="flex flex-col justify-between">
                <img alt="quote" className="w-5 h-5" src="/quote-left.png" />
                <p className="text-sm md:text-lg lg:text-2xl leading-[35px] w-5/6 mx-auto">
                  I'm really impressed with the rental app developed by Kriyona
                  Infotech. The process of renting and returning products is
                  very smooth, and the stock management and billing system work
                  flawlessly. The user interface is clean and easy to navigate.
                  Overall, I’m highly satisfied with the work and would
                  definitely recommend their services.
                </p>
              </div>
              <div className="flex items-center">
                <p className="flex items-center mt-10 md:mt-20  w-5/6 mx-auto">
                  Parimal Gajera
                </p>
              </div>
            </div>

            {/* Row 2 - Three Equal Boxes */}
            {/* <div className="col-span-12 md:col-span-4 p-7 border border-[#55555580]">
              <img alt="quote" className="w-5 h-5" src="/quote-left.png" />
              <p className="text-sm mt-5">Clean and professional website!</p>
              <div className="flex items-center mt-10">
                <p>Nilesh Sosa</p>
              </div>
            </div>
            <div className="col-span-12 md:col-span-4 p-7 border border-[#55555580]">
              <img alt="quote" className="w-5 h-5" src="/quote-left.png" />
              <p className="text-sm mt-5">Superb service!</p>
              <div className="flex items-center mt-10">
                <p>Rajiv M. Surati</p>
              </div>
            </div>
            <div className="col-span-12 md:col-span-4 p-7 border border-[#55555580]">
              <img alt="quote" className="w-5 h-5" src="/quote-left.png" />
              <p className="text-sm mt-5">
                Great experience working with them!
              </p>
              <div className="flex items-center mt-10">
                <p>Akash Patel</p>
              </div>
            </div> */}

            {/* Row 3 - Full Width Box */}
            <div className="col-span-12 flex items-center  justify-center py-32 border border-[#55555580] bg-gradient-to-r from-[#FFF4E8] to-[#FFE4FF]">
              <p className="text-lg md:text-4xl text-center">
                Now that's what I call amazing!
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
