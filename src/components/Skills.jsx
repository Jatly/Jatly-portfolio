import React from "react";
import { motion } from "framer-motion";

import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaPython,
  FaProjectDiagram,
} from "react-icons/fa";

import {
  SiJavascript,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiSqlite,
  SiRedux,
} from "react-icons/si";

import { VscCode } from "react-icons/vsc";
import { TbApi } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";

const skills = [
  {
    title: "Languages",
    items: [
      { name: "Python", icon: <FaPython /> },
      { name: "JavaScript", icon: <SiJavascript /> },
    ],
  },
  {
    title: "Frontend",
    items: [
      { name: "React.js", icon: <FaReact /> },
      { name: "HTML", icon: <FaHtml5 /> },
      { name: "CSS", icon: <FaCss3Alt /> },
      { name: "Responsive Design", icon: <VscCode /> },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "REST APIs", icon: <TbApi /> },
    ],
  },
  {
    title: "Databases",
    items: [
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "MySQL", icon: <SiMysql /> },
      { name: "SQLite", icon: <SiSqlite /> },
    ],
  },
  {
    title: "Tools",
    items: [
      { name: "Git", icon: <FaGitAlt /> },
      { name: "GitHub", icon: <FaGithub /> },
      { name: "VS Code", icon: <VscCode /> },
      { name: "Thunder Client", icon: <TbApi /> },
    ],
  },
  {
    title: "Concepts",
    items: [
      { name: "MERN Stack", icon: <FaProjectDiagram /> },
      { name: "CRUD Operations", icon: <VscCode /> },
      { name: "API Integration", icon: <TbApi /> },
      { name: "MVC Architecture", icon: <FaProjectDiagram /> },
      { name: "JWT Authentication", icon: <MdSecurity /> },
      { name: "State Management", icon: <SiRedux /> },
    ],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative bg-[#141414] text-white px-6 py-28 overflow-hidden"
    >
      {/* 🔥 Background Glow */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute w-[400px] h-[400px] bg-red-600/10 blur-3xl rounded-full top-10 left-10"
      />
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 7, repeat: Infinity }}
        className="absolute w-[300px] h-[300px] bg-red-600/10 blur-2xl rounded-full bottom-10 right-10"
      />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* 🔥 Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold">
            My <span className="text-[#e50914]">Skills</span>
          </h2>

          <p className="text-gray-400 mt-3 max-w-xl">
            A blend of frontend creativity and backend logic — focused on building scalable web applications.
          </p>
        </motion.div>

        {/* 🔥 Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 items-stretch"
        >
          {skills.map((category, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}
              className="group relative bg-gradient-to-br from-[#1f1f1f]/90 to-[#141414] backdrop-blur-md border border-gray-800 rounded-2xl p-6 flex flex-col h-full min-h-[220px] transition duration-300 hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(229,9,20,0.15)]"
            >
              
              {/* 🔥 Glow Border */}
              <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-[#e50914]/30 transition duration-300"></div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-[#e50914] mb-5 relative z-10">
                {category.title}
              </h3>

              {/* Items */}
              <div
                className={`flex flex-wrap content-start relative z-10 ${
                  category.title === "Concepts" ? "gap-2" : "gap-3"
                }`}
              >
                {category.items.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 bg-gradient-to-br from-[#2a2a2a] to-[#1f1f1f] px-3 py-2 rounded-md text-sm text-gray-300 transition duration-300 hover:scale-105 hover:shadow-[0_0_10px_rgba(229,9,20,0.3)]"
                  >
                    <span className="text-[#e50914] text-lg transition duration-300 group-hover:scale-125 group-hover:drop-shadow-[0_0_6px_#e50914]">
                      {item.icon}
                    </span>
                    {item.name}
                  </div>
                ))}
              </div>

            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;