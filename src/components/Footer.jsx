import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-[#0f0f0f] text-gray-400 border-t border-gray-800 px-6 py-16 overflow-hidden">
      {/* 🔥 Glow */}
      <div className="absolute w-72 h-72 bg-red-600/10 blur-2xl rounded-full bottom-0 left-10"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* 🔥 Top Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid gap-10 md:grid-cols-3 text-center md:text-left"
        >
          {/* 🔥 Brand */}
          <div>
            <h2 className="text-xl font-bold text-white mb-2">
              Jatly<span className="text-[#e50914]">.</span>
            </h2>
            <p className="text-sm text-gray-500">
              Building modern web experiences with clean UI & powerful backend.
            </p>
          </div>

          {/* 🔥 Navigation */}
          <div>
            <h3 className="text-white font-semibold mb-3">Navigation</h3>
            <ul className="space-y-2 text-sm">
              {["Home", "Projects", "Skills", "Contact"].map((item, i) => (
                <li key={i}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="hover:text-[#e50914] transition"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 🔥 Social */}
          <div>
            <h3 className="text-white font-semibold mb-3">Connect</h3>
            <div className="flex justify-center md:justify-start gap-5 text-xl">
              <motion.a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                className="hover:text-[#e50914] transition"
              >
                <FaGithub />
              </motion.a>

              <motion.a
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                className="hover:text-[#e50914] transition"
              >
                <FaLinkedin />
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* 🔥 Divider */}
        <div className="border-t border-gray-800 my-10"></div>

        {/* 🔥 Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Jatly. All rights reserved.</p>

          <p>Built with React & Tailwind CSS</p>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="hover:text-[#e50914] transition"
          >
            ↑ Back to Top
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
