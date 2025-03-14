"use client"; // For Next.js (remove if using CRA)
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useSpring } from "framer-motion";

function Headersample() {
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();
  const scrollYProgress = useSpring(scrollY, {
    stiffness: 100,
    damping: 20,
    restDelta: 0.001,
  });

  useEffect(() => {
    let lastScrollY = 0;
    const updateHeader = () => {
      if (window.scrollY > lastScrollY) {
        setHidden(true); // Hide when scrolling down
      } else {
        setHidden(false); // Show when scrolling up
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", updateHeader);
    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  return (
    <motion.header
      className="fixed top-0 left-0 w-full bg-gray-900 bg-opacity-80 backdrop-blur-md text-white py-4 px-8 flex items-center justify-between shadow-md transition-all duration-300 z-50"
      initial={{ y: -100 }}
      animate={{ y: hidden ? -100 : 0 }}
    >
      {/* Logo and Brand Name */}
      <div className="flex items-center space-x-3 text-2xl font-bold">
        <Link href="/">
          <Image src="/logo.png" alt="DroneVision Logo" width={50} height={50} />
        </Link>
        <Link href="/">
          <span className="text-blue-500">Drone</span>Vision
        </Link>
      </div>

      {/* Navigation Links */}
      <nav className="hidden md:flex space-x-6">
        <Link href="/" className="hover:text-blue-400 transition">
          Home
        </Link>
        <Link href="/about" className="hover:text-blue-400 transition">
          About
        </Link>
        <Link href="/services" className="hover:text-blue-400 transition">
          Services
        </Link>
        <Link href="/contact" className="hover:text-blue-400 transition">
          Contact
        </Link>
      </nav>

      {/* Scroll Progress Indicator */}
      <motion.div
        className="absolute bottom-0 left-0 h-1 bg-blue-500 w-full"
        style={{ scaleX: scrollYProgress }}
      />
    </motion.header>
  );
}

export default Headersample;
