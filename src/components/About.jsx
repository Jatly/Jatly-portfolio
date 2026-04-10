import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="relative bg-[#141414] text-white px-6 py-28 overflow-hidden"
    >
      {/* 🔥 Background Glow */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute w-96 h-96 bg-red-600/10 blur-3xl rounded-full top-10 left-10"
      />

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* 🔥 LEFT - TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            About <span className="text-[#e50914]">Me</span>
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed">
            I’m a{" "}
            <span className="text-white font-semibold">
              Full Stack MERN Developer
            </span>{" "}
            focused on crafting modern, responsive, and intuitive user
            experiences.
          </p>

          <p className="mt-5 text-gray-400 leading-relaxed">
            I build scalable applications using{" "}
            <span className="text-[#e50914]">
              React, Node.js, Express, and MongoDB
            </span>{" "}
            with clean architecture and performance in mind.
          </p>

          <p className="mt-5 text-gray-400 leading-relaxed">
            I enjoy solving real-world problems and turning ideas into impactful
            digital products.
          </p>

          {/* 🔥 Highlight */}
          <div className="mt-6 border-l-2 border-[#e50914] pl-4">
            <p className="text-sm text-gray-500">
              Frontend-focused Full Stack (MERN) Developer open to opportunities.
            </p>
          </div>
        </motion.div>

        {/* 🔥 RIGHT - CARD */}
        <motion.div
          initial={{ opacity: 0, x: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="group relative bg-gradient-to-br from-[#1f1f1f]/90 to-[#141414] backdrop-blur-md p-8 rounded-2xl border border-gray-800 shadow-xl w-full max-w-sm transition duration-300 hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(229,9,20,0.15)]">
            
            {/* 🔥 Glow Border */}
            <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-[#e50914]/30 transition duration-300"></div>

            <h3 className="text-xl font-semibold mb-6 text-[#e50914] relative z-10">
              Quick Snapshot
            </h3>

            <ul className="space-y-3 text-gray-300 text-sm relative z-10">
              <li className="hover:text-white transition">🚀 Full Stack MERN Developer</li>
              <li className="hover:text-white transition">🎯 Frontend Specialist</li>
              <li className="hover:text-white transition">⚡ Builds Responsive UI</li>
              <li className="hover:text-white transition">🧠 Problem Solver</li>
              <li className="hover:text-white transition">📍 Based in India</li>
              <li className="hover:text-white transition">💼 Open to Opportunities</li>
            </ul>

            <div className="mt-6 border-t border-gray-700 pt-4 text-xs text-gray-500 relative z-10">
              Always learning. Always building.
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;