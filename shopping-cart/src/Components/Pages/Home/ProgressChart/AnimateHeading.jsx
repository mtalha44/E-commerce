import React from "react";
import { motion } from "framer-motion";

const AnimatedHeading = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        whileHover={{ scale: 1.05 }}
        style={{
          fontSize: "2.5rem",
          background: "linear-gradient(90deg, #58cbe6, #00c6ff)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          margin: "0",
        }}
      >
        Performance That Speaks for Itself
      </motion.h1>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1, ease: "easeInOut" }}
        style={{
          fontSize: "1.2rem",
          color: "#999",
          margin: "10px 0 0",
        }}
      >
        Real-time metrics showcasing the power behind our platform.
      </motion.h2>
    </div>
  );
};

export default AnimatedHeading;
