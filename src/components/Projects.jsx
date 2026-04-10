import { motion } from "framer-motion";
import React from "react";
import Card from "../components/ui/Card";

const Projects = () => {
const arr = [
  {
    title: "WorkHive – Resource Allocation System",
    description:
      "Full-stack MERN application handling 50+ resource bookings with role-based authentication and authorization. Built conflict detection logic to prevent overlapping bookings and ensure smooth scheduling. Developed REST APIs and deployed on Render for high reliability.",
    image: "proj1.png",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "Render"],
    live: "https://resource-allocation-system-1.onrender.com/",
    github: "https://github.com/Jatly/resource-allocation-system",
  },
  {
    title: "Book-It – Online Bookstore",
    description:
      "Responsive e-commerce platform featuring cart, wishlist, search, and filtering functionality. Implemented persistent state management using LocalStorage and JSON Server, ensuring a seamless and consistent user experience across devices.",
    image: "proj2.png",
    tech: ["HTML", "CSS", "JavaScript", "JSON Server", "Render"],
    live: "https://books-it.netlify.app/",
    github: "https://github.com/Jatly/Book-It",
  },
  {
    title: "Knowhere Unknown – Travel Blog",
    description:
      "Interactive travel blog with responsive design and AOS-powered animations. Enhanced user engagement through smooth scrolling effects and visually rich storytelling optimized for both mobile and desktop.",
    image: "proj3.png",
    tech: ["HTML", "CSS", "JavaScript", "AOS"],
    live: "https://knowhereunknown.netlify.app/",
    github: "https://github.com/Jatly/Travel-Blog-website",
  }
];
  return (

<section
  id="projects"
  className="bg-[#141414] text-white py-24 px-6"
>
  <div className="max-w-6xl mx-auto">

    {/* 🔥 Title Animation */}
    <motion.h2
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-3xl md:text-4xl font-bold mb-12"
    >
      Featured <span className="text-[#e50914]">Projects</span>
    </motion.h2>

    {/* 🔥 Grid */}
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.2, // 🔥 stagger effect
          },
        },
      }}
      className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
    >
      
      {arr.map((project, index) => (
        <motion.div
          key={index}
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.5 }}
        >
          <Card {...project} />
        </motion.div>
      ))}

    </motion.div>

  </div>
</section>
  );
};

export default Projects;