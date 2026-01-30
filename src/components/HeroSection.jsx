import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const HeroSection = () => {
  const containerRef = useRef(null);
  const features = [
    { label: "Custom Websites", link: "/services/web-development" },
    {
      label: "Digital Business Solution",
      link: "/services/digital-marketing",
    },
    { label: "Portfolio", link: "/portfolio" },
  ];

  const [floatingElements, setFloatingElements] = useState([]);

  useEffect(() => {
    setFloatingElements(
      [...Array(8)].map(() => ({
        width: Math.random() * 300 + 100,
        height: Math.random() * 300 + 100,
        left: Math.random() * 100,
        top: Math.random() * 100,
        animX: Math.random() * 200 - 100,
        animY: Math.random() * 200 - 100,
        animRotate: Math.random() * 360,
        animDuration: Math.random() * 20 + 15,
      }))
    );
  }, []);

  return (
    <div
      className="relative bg-white overflow-hidden shadow-sm border rounded-lg border-gray-200"
      ref={containerRef}
    >
      {/* Animated Background Elements */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,#f0f0f0_1.2px,transparent_1px)] bg-[length:40px_40px]"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
          transition: {
            duration: 30,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "linear",
          },
        }}
      />

      {/* Floating Animated Elements */}
      {floatingElements.map((el, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-gray-100/50 backdrop-blur-sm"
          style={{
            width: `${el.width}px`,
            height: `${el.height}px`,
            left: `${el.left}%`,
            top: `${el.top}%`,
          }}
          animate={{
            x: [0, el.animX],
            y: [0, el.animY],
            rotate: [0, el.animRotate],
            scale: [1, 1.2, 1],
            transition: {
              duration: el.animDuration,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            },
          }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10  px-5 sm:px-10 py-24 sm:py-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "backOut" }}
          className="text-center"
        >
          <motion.h1
            className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight"
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.3 },
            }}
          >
            Bringing{" "}
            <motion.span
              className="text-indigo-600 inline-block"
            // animate={{
            //   rotate: [0, 5, -5, 0],
            //   transition: {
            //     duration: 8,
            //     repeat: Infinity,
            //     repeatType: "mirror",
            //   },
            // }}
            >
              Visions
            </motion.span>{" "}
            to Digital Life
          </motion.h1>

          <motion.p
            className="text-lg text-gray-600 max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Your trusted IT partner in India — delivering custom websites,
            mobile apps, and digital solutions that drive real business growth.
          </motion.p>
        </motion.div>

        {/* Features */}
        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-6 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, staggerChildren: 0.1 }}
        >
          {features.map((feature, index) => (
            <motion.a
              key={index}
              href={feature.link}
              className="flex items-center gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200"
              whileHover={{
                y: -8,
                scale: 1.05,
                boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1)",
                backgroundColor: "rgba(59,130,246,0.1)",
                borderColor: "rgba(59,130,246,0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
              }}
            >
              <motion.div
                animate={{
                  rotate: [0, 10, -10, 0],
                  transition: {
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "mirror",
                  },
                }}
                className="text-gray-500"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 16 16"
                  className="text-xl"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.854 10.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096z"
                  />
                </svg>
              </motion.div>
              <motion.span
                className="text-sm font-medium text-gray-700"
                whileHover={{ color: "#3b82f6" }}
              >
                {feature.label}
              </motion.span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
