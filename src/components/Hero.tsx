'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BrainCircuit, ShieldCheck, Zap } from 'lucide-react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-black">
      {/* Abstract Background Elements */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider text-blue-400 uppercase bg-blue-400/10 border border-blue-400/20 rounded-full">
                Chief Artificial Intelligence Officer
              </span>
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                Architecting the Future of <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Agentic AI</span>
              </h1>
              <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Two decades of executive leadership in AI strategy, cybersecurity, and enterprise digital transformation. Delivering scalable, ethical, and measurable AI solutions.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <a 
                  href="#experience" 
                  className="group flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold transition-all transform hover:scale-105"
                >
                  View Experience
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="#contact" 
                  className="px-8 py-4 rounded-xl font-bold text-white border border-gray-700 hover:bg-gray-800 transition-all"
                >
                  Get in Touch
                </a>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 1 }}
              className="mt-12 flex flex-wrap justify-center lg:justify-start gap-8"
            >
              <div className="flex items-center gap-2 text-gray-500">
                <BrainCircuit size={20} className="text-blue-500" />
                <span className="text-sm font-medium uppercase tracking-widest">Generative AI</span>
              </div>
              <div className="flex items-center gap-2 text-gray-500">
                <ShieldCheck size={20} className="text-purple-500" />
                <span className="text-sm font-medium uppercase tracking-widest">AI Governance</span>
              </div>
              <div className="flex items-center gap-2 text-gray-500">
                <Zap size={20} className="text-yellow-500" />
                <span className="text-sm font-medium uppercase tracking-widest">Digital Strategy</span>
              </div>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 relative"
          >
            <div className="relative w-72 h-72 lg:w-[450px] lg:h-[450px] mx-auto">
              {/* Animated Rings */}
              <div className="absolute inset-0 border-2 border-blue-500/30 rounded-full animate-[spin_10s_linear_infinite]" />
              <div className="absolute inset-4 border-2 border-purple-500/20 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
              
              <div className="absolute inset-8 overflow-hidden rounded-full border-4 border-gray-800 shadow-2xl">
                <Image 
                  src="https://media.licdn.com/dms/image/v2/D4E03AQEAFhDi0bf3RQ/profile-displayphoto-crop_800_800/B4EZy5Sey1HgAM-/0/1772635156276?e=1779321600&v=beta&t=1IVVH7U_cMEKAB80sIAq5vqN9hrPmPRk6urz6mukCZI" 
                  alt="Steven Jones" 
                  width={800}
                  height={800}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
