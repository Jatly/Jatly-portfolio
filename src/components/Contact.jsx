import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative bg-[#141414] text-white px-6 py-28 overflow-hidden"
    >
      {/* 🔥 Animated Glow */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute w-[400px] h-[400px] bg-red-600/10 blur-3xl rounded-full top-10 left-10"
      />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        
        {/* 🔥 Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold"
        >
          Get In <span className="text-[#e50914]">Touch</span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-400 mt-4 max-w-xl mx-auto"
        >
          Have a project in mind or want to collaborate? Feel free to reach out
          — I'm always open to opportunities.
        </motion.p>

        {/* 🔥 Contact Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.15 },
            },
          }}
          className="mt-12 flex flex-wrap justify-center gap-6"
        >
          {[
            {
              icon: <FaEnvelope />,
              label: "Email",
              link: "mailto:jatly295@gmail.com",
            },
            {
              icon: <FaGithub />,
              label: "GitHub",
              link: "https://github.com/Jatly",
            },
            {
              icon: <FaLinkedin />,
              label: "LinkedIn",
              link: "https://www.linkedin.com/in/jatly-a-j/",
            },
          ].map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              target={item.label !== "Email" ? "_blank" : "_self"}
              rel="noopener noreferrer"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.4 }}
              className="group relative flex items-center gap-3 bg-gradient-to-br from-[#1f1f1f]/90 to-[#141414] px-6 py-3 rounded-xl border border-gray-800 transition duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(229,9,20,0.15)]"
            >
              
              {/* 🔥 Glow Border */}
              <div className="absolute inset-0 rounded-xl border border-transparent group-hover:border-[#e50914]/30 transition duration-300"></div>

              {/* Icon */}
              <span className="text-[#e50914] text-lg transition duration-300 group-hover:scale-125 group-hover:drop-shadow-[0_0_6px_#e50914] relative z-10">
                {item.icon}
              </span>

              {/* Label */}
              <span className="text-gray-300 group-hover:text-white transition relative z-10">
                {item.label}
              </span>
            </motion.a>
          ))}
        </motion.div>

        {/* 🔥 Bottom Line */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-14 text-gray-500 text-sm"
        >
          Frontend-focused Full Stack (MERN) Developer open to opportunities
        </motion.p>
      </div>
    </section>
  );
};

export default Contact;