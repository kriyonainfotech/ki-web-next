'use client';
import React, { useState } from "react";
import { motion } from "framer-motion";
import CTASection from "@/components/CTASection";

const categories = [
//   "All Projects",
  "E-commerce",
  "AI Editors",
  "Games",
  "Finance",
  "Websites",
  "OTT Platforms",
  "Computer Vision",
  "Project Tracking",
  "Health & Fitness"
];

const projects = [
  {
    id: 1,
    title: "DiGiPosterPro",
    category: ["Websites", "AI Editors"],
    location: "India, Global",
    image: "https://res.cloudinary.com/dd6vjyu3c/image/upload/v1742367190/digi_zua8zf.png",
    logo: "/DiGiPosterPro.png"
  },
  {
    id: 2,
    title: "ColorsOfEarth",
    category: ["E-commerce"],
    location: "India, Global",
    image: "https://res.cloudinary.com/dd6vjyu3c/image/upload/v1742367314/COE_ooxfoh.png",
    logo: "/colorsOfEarth.png"
  },
  {
    id: 3,
    title: "EES121",
    category: ["Finance"],
    location: "India, Global",
    image: "https://res.cloudinary.com/dd6vjyu3c/image/upload/v1742647843/ees121_vfdi93.png",
    logo: "/services/ess-121-CISEWOlG.png"
  },
  {
    id: 4,
    title: "EIBM",
    category: ["Websites"],
    location: "India, Global",
    image: "https://res.cloudinary.com/dd6vjyu3c/image/upload/v1742647845/eibm_wfwmqp.png",
    logo: "/eibmlogo.png"
  },
  {
    id: 5,
    title: "MyMovieHub",
    category: ["OTT Platforms"],
    location: "India, Global",
    image: "https://res.cloudinary.com/dd6vjyu3c/image/upload/v1742647843/mmh_mdftik.png",
    logo: "/mymoviehubbg.png"
  },
  {
    id: 6,
    title: "SaaraaTrends",
    category: ["E-commerce"],
    location: "India, Global",
    image: "https://res.cloudinary.com/dd6vjyu3c/image/upload/v1742647793/saaraa_cwivsc.png",
    logo: "/saraa-trends-bg_chr16j.png"
  },
  {
    id: 7,
    title: "WorldClassExport",
    category: ["E-commerce"],
    location: "India, Global",
    image: "https://res.cloudinary.com/dd6vjyu3c/image/upload/v1742647843/krishaexim_anjui5.jpg",
    logo: "/worldclasse.avif"
  },
  {
    id: 8,
    title: "KrishaExim",
    category: ["E-commerce"],
    location: "Dubai",
    image: "https://res.cloudinary.com/dd6vjyu3c/image/upload/v1742647790/wce_udwjoo.jpg",
    logo: "/services/krishaexim.png"
  }
];

export default function PortfolioClient() {
  const [activeCategory, setActiveCategory] = useState("All Projects");
  const [hoveredProject, setHoveredProject] = useState(null);

//   const filteredProjects = activeCategory === "All Projects" 
//     ? projects 
//     : projects.filter(project => project.category.includes(activeCategory));

  return (
    <div className="">
      <div className="px-5 sm:px-10 lg:px-24 2xl:px-40 pb-20 pt-0">

<div className="border border-[#55555580] pt-10 mb-10 bg-gradient-to-b  from-purple-100/50 to-pink-100/50 backdrop-blur-sm">
        {/* Hero Section */}
        <div className="text-center mb-16 ">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-5xl font-bold text-gray-900 mb-6"
          >
            Our <span className="">Portfolio</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.2 } }}
            className="text-lg text-gray-600 max-w-3xl mx-auto"
          >
            We collaborate with visionary companies to shape and bring to life their innovative business ideas.
          </motion.p>
        </div>

        {/* Category Filters */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 0.3 } }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${activeCategory === category ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>
</div>
        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative group"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative overflow-hidden rounded-xl shadow-md h-96 bg-white">
                {/* Project Image */}
                <motion.div
                  className="absolute inset-0 bg-gray-100"
                  initial={{ scale: 1 }}
                  animate={{ 
                    scale: hoveredProject === project.id ? 1.05 : 1,
                    transition: { duration: 0.5 }
                  }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-contain"
                  />
                </motion.div>

                {/* Overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"
                  initial={{ opacity: 0.7 }}
                  animate={{ 
                    opacity: hoveredProject === project.id ? 0.9 : 0.7,
                    transition: { duration: 0.3 }
                  }}
                />

                {/* Project Info */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="flex items-center mb-3">
                    {project.logo && (
                      <img 
                        src={project.logo} 
                        alt={`${project.title} logo`} 
                        className="w-10 h-10 mr-3 rounded-full object-contain bg-white p-1"
                      />
                    )}
                    <motion.h3 
                      className="text-xl font-bold"
                      animate={{
                        y: hoveredProject === project.id ? -5 : 0,
                        transition: { duration: 0.3 }
                      }}
                    >
                      {project.title}
                    </motion.h3>
                  </div>
                  
                  <motion.div
                    className="overflow-hidden"
                    initial={{ height: 0 }}
                    animate={{
                      height: hoveredProject === project.id ? 'auto' : 0,
                      transition: { duration: 0.3 }
                    }}
                  >
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.category.map(cat => (
                        <span key={cat} className="px-2 py-1 bg-white/20 rounded-full text-xs">
                          {cat}
                        </span>
                      ))}
                    </div>
                    <p className="text-sm opacity-90">{project.location}</p>
                  </motion.div>
                </div>

                {/* View Project Button */}
                {/* <motion.div
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    opacity: hoveredProject === project.id ? 1 : 0,
                    scale: hoveredProject === project.id ? 1 : 0.8,
                    transition: { duration: 0.3 }
                  }}
                >
                  <button className="px-6 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors">
                    View Project
                  </button>
                </motion.div> */}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <CTASection />
    </div>
  );
}