import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Loader from "./components/ui/Loader";

import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

const AppContent = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* 🔥 Loader */}
      <AnimatePresence>
        {loading && <Loader />}
      </AnimatePresence>

      {/* 🔥 Main App */}
      {!loading && <AppContent />}
    </>
  );
};

export default App;