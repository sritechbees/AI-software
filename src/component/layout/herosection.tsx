import React from "react";
import { motion } from "framer-motion";
import { FaPlay } from "react-icons/fa";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative flex flex-col lg:flex-row items-center justify-between px-8 lg:px-20 bg-gradient-to-r from-gray-900 to-black text-white">
      {/* Text Content */}
      <div className="max-w-2xl text-center lg:text-left">
        <motion.h1
          className="text-4xl lg:text-6xl font-bold leading-tight"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          AI-Powered Drone <span className="text-blue-500">Surveillance</span>
        </motion.h1>
        <p className="mt-4 text-lg text-gray-300">
          Enhance security with cutting-edge AI and CCTV drone monitoring technology. Stay ahead with real-time insights.
        </p>
        
        <div className="mt-6 flex flex-col lg:flex-row items-center gap-4">
          <button className="bg-blue-500 hover:bg-blue-600 px-6 py-3 text-lg rounded-lg font-medium shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2">
            Get Started
          </button>
          <button className="flex items-center gap-2 text-lg text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2">
            <FaPlay className="text-blue-500" /> Watch Demo
          </button>
        </div>
      </div>
      
      {/* Image Section */}
      <motion.div
        className="mt-12 lg:mt-0 lg:w-1/2"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Image
          src="/home/heroo.png" 
          alt="AI Drone" height={200} width={200}
          className="w-full max-w-lg mx-auto drop-shadow-2xl"
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
