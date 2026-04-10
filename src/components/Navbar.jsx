import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // 🔥 Detect scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🔥 Scroll function
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
    setMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition duration-300 ${
        scrolled
          ? "bg-[#141414] shadow-lg"
          : "bg-[#141414]/70 backdrop-blur-md"
      } text-white`}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        
        {/* 🔥 Logo */}
        <motion.h1
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => scrollToSection("home")}
          className="text-2xl font-bold text-[#e50914] cursor-pointer"
        >
          JATLY
        </motion.h1>

        {/* 🔥 Desktop Links */}
        <ul className="hidden md:flex gap-8 text-sm font-medium">
          {["home", "about", "skills","projects", "contact"].map((item) => (
            <li
              key={item}
              onClick={() => scrollToSection(item)}
              className="cursor-pointer hover:text-[#e50914] transition relative group"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}

              {/* underline animation */}
              <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-[#e50914] transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        {/* 🔥 Mobile Button */}
        <motion.div
          whileTap={{ scale: 0.9 }}
          className="md:hidden cursor-pointer text-xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </motion.div>
      </div>

      {/* 🔥 Mobile Menu (Animated) */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#141414]/95 backdrop-blur-md px-6 pb-4"
          >
            {["home", "about","skills","projects", "contact"].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => scrollToSection(item)}
                className="py-3 border-b border-gray-800 hover:text-[#e50914] cursor-pointer transition"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;