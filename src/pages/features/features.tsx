'use client';

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { GiDeliveryDrone, GiCctvCamera } from 'react-icons/gi';
import { FaSatellite, FaVideo, FaImage, FaMicrochip, FaShieldAlt, FaRobot, FaNetworkWired, FaCloud, FaDatabase, FaCogs } from 'react-icons/fa';
import App_layout from '@/component/layout/app_layout';
import Head from "next/head"
const features = [
  { icon: <GiDeliveryDrone size={50} />, title: 'Drones', desc: 'AI-powered drone surveillance and analytics.' },
  { icon: <GiCctvCamera size={50} />, title: 'CCTV', desc: 'Real-time video monitoring and threat detection.' },
  { icon: <FaSatellite size={50} />, title: 'Satellite', desc: 'Advanced satellite imagery processing and insights.' },
  { icon: <FaVideo size={50} />, title: 'Video Analytics', desc: 'Deep learning-based video analysis for security.' },
  { icon: <FaImage size={50} />, title: 'Image Analytics', desc: 'AI-driven image recognition and processing.' },
  { icon: <FaMicrochip size={50} />, title: 'AI Processing', desc: 'High-performance AI-driven data processing and analysis.' },
  { icon: <FaShieldAlt size={50} />, title: 'Cybersecurity', desc: 'AI-enhanced security to prevent cyber threats and attacks.' },
  { icon: <FaRobot size={50} />, title: 'Automation', desc: 'AI-powered automation for efficiency and optimization.' },
  { icon: <FaNetworkWired size={50} />, title: 'IoT Integration', desc: 'Seamless integration with IoT devices for smart monitoring.' },
  { icon: <FaCloud size={50} />, title: 'Cloud Computing', desc: 'AI-driven cloud solutions for data storage and management.' },
  { icon: <FaDatabase size={50} />, title: 'Big Data', desc: 'AI-driven big data analytics for actionable insights.' },
  { icon: <FaCogs size={50} />, title: 'Machine Learning', desc: 'AI-powered machine learning models for predictive analysis.' },
];

function Features() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <App_layout>
       <Head>
              <title>Ai Software |  Features</title>
            </Head>
    <div className='bg-gradient-to-b from-blue-600 via-purple-600 to-black'>
      <div className="relative text-white min-h-screen max-w-7xl mx-auto flex flex-col items-center justify-center p-8">
        <h2 className="text-4xl font-bold mb-6 text-center" data-aos="fade-down">AI Software Features</h2>
        <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl" data-aos="fade-up">
          Our AI software integrates cutting-edge technology for security, surveillance, and analytics, ensuring high efficiency and reliability.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white text-gray-900 p-6 rounded-2xl shadow-lg transition-all hover:scale-105 duration-300"
              data-aos="zoom-in"
            >
              <div className="text-green-600 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="text-gray-600 mt-2">{feature.desc}</p>
            </div>
          ))}
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/sky.jpg')] opacity-10 bg-cover"></div>
      </div>
    </div>
    </App_layout>
  );
}

export default Features;
