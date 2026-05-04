'use client';

import { motion } from 'framer-motion';
import { ArrowRight, BrainCircuit, ShieldCheck, Zap } from 'lucide-react';
import Image from 'next/image';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring' as const,
        stiffness: 100,
        damping: 20,
      },
    },
  };

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring' as const,
        stiffness: 200,
        damping: 15,
      },
    },
  };

  return (
    <section className="relative min-h-svh flex items-center pt-28 pb-20 lg:pt-20 lg:pb-0 overflow-hidden bg-black">
      {/* Abstract Background Elements */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 lg:w-96 lg:h-96 bg-blue-600/20 rounded-full blur-[100px] lg:blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-72 h-72 lg:w-96 lg:h-96 bg-purple-600/20 rounded-full blur-[100px] lg:blur-[120px] animate-pulse delay-1000" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <motion.div 
            className="flex-1 text-center lg:text-left order-2 lg:order-1"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={badgeVariants} className="inline-block px-4 py-1.5 mb-6 text-xs md:text-sm font-semibold tracking-wider text-blue-400 uppercase bg-blue-400/10 border border-blue-400/20 rounded-full">
              Chief Artificial Intelligence Officer
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-[1.1] tracking-tight">
              Architecting the Future of <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Agentic AI</span>
            </motion.h1>
            
            <motion.p variants={itemVariants} className="text-base md:text-lg lg:text-xl text-gray-400 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Two decades of executive leadership in AI strategy, cybersecurity, and enterprise digital transformation. Delivering scalable, ethical, and measurable AI solutions.
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a 
                href="#experience" 
                className="w-full sm:w-auto group flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-bold transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-blue-600/25"
              >
                View Experience
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#contact" 
                className="w-full sm:w-auto px-8 py-4 rounded-2xl font-bold text-white border border-white/10 hover:bg-white/5 transition-all text-center"
              >
                Get in Touch
              </a>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="mt-12 flex flex-wrap justify-center lg:justify-start gap-6 md:gap-8"
            >
              <div className="flex items-center gap-2.5 text-gray-400">
                <div className="p-2 bg-blue-500/10 rounded-lg">
                  <BrainCircuit size={18} className="text-blue-500" />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest">Generative AI</span>
              </div>
              <div className="flex items-center gap-2.5 text-gray-400">
                <div className="p-2 bg-purple-500/10 rounded-lg">
                  <ShieldCheck size={18} className="text-purple-500" />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest">AI Governance</span>
              </div>
              <div className="flex items-center gap-2.5 text-gray-400">
                <div className="p-2 bg-yellow-500/10 rounded-lg">
                  <Zap size={18} className="text-yellow-500" />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest">Digital Strategy</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, type: 'spring', bounce: 0.4 }}
            className="flex-1 relative order-1 lg:order-2 flex justify-center items-center"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px] xl:w-[500px] xl:h-[500px]">
              {/* Animated Rings */}
              <div className="absolute inset-[-20px] border-2 border-blue-500/20 rounded-full animate-[spin_15s_linear_infinite]" />
              <div className="absolute inset-[-10px] border border-purple-500/15 rounded-full animate-[spin_20s_linear_infinite_reverse]" />
              
              {/* Image Container — relative so fill works, overflow-hidden to clip */}
              <div className="absolute inset-0 overflow-hidden rounded-full border-4 border-white/5 shadow-2xl z-10 bg-gray-900">
                <Image 
                  src="/steven_image.jpg" 
                  alt="Steven Jones"
                  fill
                  sizes="(max-width: 768px) 288px, (max-width: 1024px) 384px, (max-width: 1280px) 450px, 500px"
                  className="object-cover object-[center_15%] grayscale hover:grayscale-0 transition-all duration-1000"
                  priority
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-600 rounded-3xl -z-10 blur-3xl opacity-30" />
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-purple-600 rounded-full -z-10 blur-3xl opacity-30" />
              
              {/* Floating Badge */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-4 top-1/4 z-20 bg-gray-900/90 backdrop-blur-md border border-white/10 p-4 rounded-2xl hidden md:block"
              >
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-xs font-bold text-white uppercase tracking-tighter">Available for Advisory</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;