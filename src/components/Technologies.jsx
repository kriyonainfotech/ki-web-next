// "use client";
// import Image from 'next/image';
// import { useState } from 'react';

// export default function Technologies() {

//     const [activeCategory, setActiveCategory] = useState("Frontend");

//     const categories = {
//         Frontend: [
//             { name: "Next.js", img: "/nextjs.svg", link: "https://nextjs.org/" },
//             { name: "TypeScript", img: "/typescript.svg", link: "https://www.typescriptlang.org/" },
//             { name: "JavaScript", img: "/javascript.svg", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
//             { name: "React", img: "/react.svg", link: "https://react.dev" },
//             { name: "HTML", img: "/html.svg", link: "https://www.w3schools.com/html/" },
//             { name: "CSS", img: "/css.svg", link: "https://www.w3schools.com/css/" },
//             { name: "Bootstrap", img: "/bootstrap.svg", link: "https://getbootstrap.com/" },
//         ],
//         Backend: [
//             { name: "Node.js", img: "/webdev/node.png", link: "https://nodejs.org/" },
//             { name: "Express", img: "/express-js.png", link: "https://expressjs.com/" },
//             { name: "MongoDB", img: "/webdev/mongo.png", link: "https://www.mongodb.com/" },
//             { name: "PostgreSQL", img: "/Postgresql_elephant.svg.png", link: "https://www.postgresql.org/" },
//             { name: "MySQL", img: "/webdev/mysql.png", link: "https://www.mysql.com/" },
//         ],
//         DevOps: [
//             { name: "Docker", img: "/webdev/docker.png", link: "https://www.docker.com/" },
//             { name: "Kubernetes", img: "/webdev/kubernetes.png", link: "https://kubernetes.io/" },
//             { name: "Gradle", img: "/webdev/gradle.png", link: "https://gradle.org/" },
//         ],
//         "UI/UX": [
//             { name: "Figma", img: "/appdev/figma.png", link: "https://www.figma.com/" },
//             { name: "Adobe XD", img: "/services/Xd.png", link: "https://www.adobe.com/products/xd.html" },
//             { name: "Photoshop", img: "/uiux/photoshop.png", link: "https://www.adobe.com/products/photoshop.html" },
//             { name: "Illustrator", img: "/ve/illustrator.png", link: "https://www.adobe.com/products/illustrator.html" },
//         ],
//         Mobiles: [
//             { name: "React Native", img: "/services/reactjs.png", link: "https://reactnative.dev/" },
//             { name: "Flutter", img: "/services/Flutter.png", link: "https://flutter.dev/" },
//         ],
//         VideoEditing: [
//             { name: "AfterEffect", img: "/ve/after.png", link: "https://www.adobe.com/in/products/aftereffects.html" },
//             { name: "PremierPro", img: "/ve/premiere.png", link: "https://www.adobe.com/in/products/premiere.html" },
//             { name: "Adobe Illutrator", img: "/ve/illustrator.png", link: "https://www.adobe.com/products/illustrator.html" },
//         ],
//     };

//     const currentCategory = categories[activeCategory] || [];

//     return (
// <div className="bg-pink">
//     <div className="text-center xxs:mt-24 sm:mt-36 border border-[#55555580] border-opacity-40">
//         <div className="xxs:text-4xl sm:text-5xl xl:text-6xl font-bold text-primary-black py-20">
//             <h1>Technologies We Utilise</h1>
//         </div>
//         <div className="grid xxs:grid-cols-3 sm:grid-cols-5 lg:grid-cols-7 xl:grid-cols-6">
//             {Object.keys(categories).map((category) => (
//                 <p
//                     key={category}
//                     className={`p-3 text-center cursor-pointer border border-[#55555580] border-opacity-40 ${activeCategory === category ? "bg-gradient-to-r from-[#FFF4E8] to-[#FFE4FF]" : ""
//                         }`}
//                     onClick={() => setActiveCategory(category)}
//                 >
//                     {category}
//                 </p>
//             ))}
//         </div>
//         <div className="grid xxs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-0">
//             {currentCategory.map((tech) => (
//                 <div key={tech.name} className="border border-[#55555580] border-opacity-0 xxs:p-5 sm:p-7">
//                     <a href={tech.link} target="_blank" rel="noopener noreferrer">
//                         <Image
//                             alt={tech.name}
//                             loading="lazy"
//                             className="xxs:w-12 xxs:h-10 object-cover mx-auto"
//                             src={tech.img}
//                             width={100} height={50}
//                         />
//                     </a>
//                 </div>
//             ))}
//         </div>
//     </div>
// </div>
//     );
// }

"use client";
import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';
export default function Technologies() {

    const [activeCategory, setActiveCategory] = useState("Frontend");
    const [openCategory, setOpenCategory] = useState(null);


    const categories = {
        Frontend: [
            { name: "Next.js", img: "/nextjs.svg", link: "https://nextjs.org/" },
            { name: "TypeScript", img: "/typescript.svg", link: "https://www.typescriptlang.org/" },
            { name: "JavaScript", img: "/javascript.svg", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
            { name: "React", img: "/react.svg", link: "https://react.dev" },
            { name: "HTML", img: "/html.svg", link: "https://www.w3schools.com/html/" },
            { name: "CSS", img: "/css.svg", link: "https://www.w3schools.com/css/" },
            { name: "Bootstrap", img: "/bootstrap.svg", link: "https://getbootstrap.com/" },
        ],
        Backend: [
            { name: "Node.js", img: "/webdev/node.png", link: "https://nodejs.org/" },
            { name: "Express", img: "/express-js.png", link: "https://expressjs.com/" },
            { name: "MongoDB", img: "/webdev/mongo.png", link: "https://www.mongodb.com/" },
            { name: "PostgreSQL", img: "/Postgresql_elephant.svg.png", link: "https://www.postgresql.org/" },
            { name: "MySQL", img: "/webdev/mysql.png", link: "https://www.mysql.com/" },
        ],
        DevOps: [
            { name: "Docker", img: "/webdev/docker.png", link: "https://www.docker.com/" },
            { name: "Kubernetes", img: "/webdev/kubernetes.png", link: "https://kubernetes.io/" },
            { name: "Gradle", img: "/webdev/gradle.png", link: "https://gradle.org/" },
        ],
        "UI/UX": [
            { name: "Figma", img: "/appdev/figma.png", link: "https://www.figma.com/" },
            { name: "Adobe XD", img: "/services/Xd.png", link: "https://www.adobe.com/products/xd.html" },
            { name: "Photoshop", img: "/uiux/photoshop.png", link: "https://www.adobe.com/products/photoshop.html" },
            { name: "Illustrator", img: "/ve/illustrator.png", link: "https://www.adobe.com/products/illustrator.html" },
        ],
        Mobiles: [
            { name: "React Native", img: "/services/reactjs.png", link: "https://reactnative.dev/" },
            { name: "Flutter", img: "/services/Flutter.png", link: "https://flutter.dev/" },
        ],
        VideoEditing: [
            { name: "AfterEffect", img: "/ve/after.png", link: "https://www.adobe.com/in/products/aftereffects.html" },
            { name: "PremierPro", img: "/ve/premiere.png", link: "https://www.adobe.com/in/products/premiere.html" },
            { name: "Adobe Illutrator", img: "/ve/illustrator.png", link: "https://www.adobe.com/products/illustrator.html" },
        ],
    };

    const currentCategory = categories[activeCategory] || [];


    const toggleCategory = (category) => {
        setOpenCategory(openCategory === category ? null : category);
    };


    return (
        <div className="bg-pink mt-20">
            <div className="text-center xxs:mt-24 sm:mt-36 border border-[#55555580] border-opacity-40">
                <div className="text-3xl sm:text-5xl xl:text-6xl font-bold text-primary-black lg:pt-25 py-15">
                    <h1>Technologies We Utilise</h1>
                </div>

                {/* 📱 Mobile View – Accordion */}
                <div className="block sm:hidden w-full max-w-3xl mx-auto px-4">
                    {Object.entries(categories).map(([category, techList]) => (
                        <div key={category} className="mb-4 border border-[#55555580] border-opacity-20">
                            <div
                                className={`flex justify-between items-center p-4 cursor-pointer 
                      ${openCategory === category ? "bg-gradient-to-r from-[#FFF4E8] to-[#FFE4FF]" : "bg-white"}`}
                                onClick={() => toggleCategory(category)}
                            >
                                <span className="text-base font-semibold">{category}</span>
                                <span className="text-xl">{openCategory === category ? "−" : "+"}</span>
                            </div>
                            {openCategory === category && (
                                <div className="grid grid-cols-3 gap-3 p-4 transition-all duration-300 ease-in-out">
                                    {techList.map((tech) => (
                                        <div key={tech.name} className="border border-[#55555580] border-opacity-10 p-3 rounded bg-white shadow-sm">
                                            <a href={tech.link} target="_blank" rel="noopener noreferrer">
                                                <Image
                                                    alt={tech.name}
                                                    src={tech.img}
                                                    className="w-10 h-10 object-contain mx-auto"
                                                    width={80}
                                                    height={40}
                                                />
                                            </a>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* 💻 Desktop View – Grid UI */}
               {/* 💻 Desktop View - Clean Border Structure */}
<div className="hidden sm:block">
  <div className="bg-pink">
    {/* Outer container with full border */}
    <div className="border border-[#55555580]">
      
      {/* Category tabs - single row with bottom border only */}
      <div className="flex border-b border-[#55555580]">
        {Object.keys(categories).map((category) => (
          <motion.button
            key={category}
            className={`
              flex-1 p-4 text-center 
              border-r border-[#55555580] last:border-r-0
              ${activeCategory === category 
                ? "bg-gradient-to-r from-[#FFF4E8] to-[#FFE4FF]" 
                : "hover:bg-gray-50/50"
              }
            `}
            onClick={() => setActiveCategory(category)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {category}
          </motion.button>
        ))}
      </div>

      {/* Tech grid - clean internal borders */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6">
        {currentCategory.map((tech, index) => {
          // Calculate border classes
          const showRightBorder = (index + 1) % 6 !== 0; // No right border on last column
          const showBottomBorder = index < currentCategory.length - (currentCategory.length % 6 || 6); // No bottom border on last row
          
          return (
            <motion.div 
              key={tech.name}
              className={`
                p-6 flex justify-center items-center
                ${showRightBorder ? 'border-r border-[#55555580]' : ''}
                ${showBottomBorder ? 'border-b border-[#55555580]' : ''}
                hover:bg-white/50 transition-colors
              `}
              whileHover={{ scale: 1.05 }}
            >
              <a href={tech.link} target="_blank" rel="noopener noreferrer">
                <Image
                  alt={tech.name}
                  loading="lazy"
                  className="w-12 h-10 sm:w-16 sm:h-12 object-contain"
                  src={tech.img}
                  width={100}
                  height={50}
                />
              </a>
            </motion.div>
          );
        })}
      </div>
    </div>
  </div>
</div>
            </div>
        </div>
    );
}