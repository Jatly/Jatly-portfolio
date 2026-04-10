import { motion } from "framer-motion";

const Loader = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed inset-0 bg-[#141414] flex flex-col items-center justify-center z-[9999]"
    >
      
      {/* 🔥 Animated Logo */}
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold text-[#e50914] tracking-widest"
      >
        JATLY
      </motion.h1>

      {/* 🔥 Underline Animation */}
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "120px" }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="h-[2px] bg-[#e50914] mt-2 rounded-full"
      />

      {/* 🔥 Spinner */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        className="mt-6 w-10 h-10 border-4 border-gray-700 border-t-[#e50914] rounded-full"
      />

      {/* 🔥 Loading Text */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0.5, 1] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="text-gray-500 text-sm mt-4"
      >
        Loading...
      </motion.p>

    </motion.div>
  );
};

export default Loader;