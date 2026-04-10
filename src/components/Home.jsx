import React from "react";
import Button from "../components/ui/Button";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  const scrollToContact = () => {
    document.getElementById("contact").scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen bg-[#141414] text-white flex items-center px-6 overflow-hidden"
    >
      {/* 🔥 Background Glow (slow floating) */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute w-96 h-96 bg-red-600/20 blur-3xl rounded-full top-20 left-10"
      />
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 7, repeat: Infinity }}
        className="absolute w-72 h-72 bg-red-500/10 blur-2xl rounded-full bottom-10 right-10"
      />

      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-sm text-gray-400 mb-2">
            👋 Welcome to my portfolio
          </p>

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Hi, I'm{" "}
            <span className="text-[#e50914] hover:text-[#f6121d] hover:scale-105 inline-block transition duration-300 cursor-pointer">
              Jatly
            </span>
          </h1>

          <p className="mt-4 text-gray-300 text-lg leading-relaxed">
            <TypeAnimation
              sequence={[
                "Full Stack MERN Developer",
                2000,
                "Frontend-Focused Developer",
                2000,
                "Building scalable web apps",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-[#e50914]"
            />
          </p>

          <p className="mt-2 text-gray-400 text-sm">
            React, Node.js, Express, MongoDB
          </p>

          <p className="mt-2 text-gray-500 text-sm">
            Turning ideas into real-world products 🚀
          </p>

          {/* 🔥 BUTTONS */}
          <div className="mt-8 flex gap-4 flex-wrap">
            <Button
              onClick={scrollToContact}
              className="bg-[#e50914] hover:bg-[#f6121d] hover:scale-105 transition-all duration-300 active:scale-95"
            >
              Contact Me
            </Button>

            <a href="/jatly_resume.pdf" download>
              <Button className="bg-[#2a2a2a] hover:bg-[#3a3a3a] hover:scale-105 transition-all duration-300 active:scale-95">
                Download Resume
              </Button>
            </a>
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center"
        >
          {/* glow */}
          <div className="absolute w-72 h-72 bg-[#e50914]/20 blur-2xl rounded-full"></div>

          {/* image */}
          <motion.img
            src="/photo.png"
            alt="Profile"
            className="h-[26rem] object-contain cursor-pointer"
            // 🔥 subtle float
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            // 🔥 hover interaction
            whileHover={{ scale: 1.05 }}
            style={{
              WebkitMaskImage:
                "linear-gradient(to bottom, black 15%, transparent 100%)",
              maskImage:
                "linear-gradient(to bottom, black 15%, transparent 100%)",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
