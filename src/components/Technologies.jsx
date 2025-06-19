"use client";
import Image from 'next/image';
import { useState } from 'react';

export default function Technologies() {

    const [activeCategory, setActiveCategory] = useState("Frontend");

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

    return (
        <div className="bg-pink">
            <div className="text-center xxs:mt-24 sm:mt-36 border border-black-border border-opacity-40">
                <div className="xxs:text-4xl sm:text-5xl xl:text-6xl font-bold text-primary-black py-20">
                    <h1>Technologies We Utilise</h1>
                </div>
                <div className="grid xxs:grid-cols-3 sm:grid-cols-5 lg:grid-cols-7 xl:grid-cols-6">
                    {Object.keys(categories).map((category) => (
                        <p
                            key={category}
                            className={`p-3 text-center cursor-pointer border border-black-border border-opacity-40 ${activeCategory === category ? "bg-gradient-to-r from-[#FFF4E8] to-[#FFE4FF]" : ""
                                }`}
                            onClick={() => setActiveCategory(category)}
                        >
                            {category}
                        </p>
                    ))}
                </div>
                <div className="grid xxs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-0">
                    {currentCategory.map((tech) => (
                        <div key={tech.name} className="border border-black-border border-opacity-0 xxs:p-5 sm:p-7">
                            <a href={tech.link} target="_blank" rel="noopener noreferrer">
                                <Image
                                    alt={tech.name}
                                    loading="lazy"
                                    className="xxs:w-12 xxs:h-10 object-cover mx-auto"
                                    src={tech.img}
                                    width={100} height={50}
                                />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}