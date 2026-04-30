'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Cpu } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
  ];

  const springTransition = { type: 'spring', stiffness: 300, damping: 30 };

  return (
    <header className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-black/80 backdrop-blur-xl py-3 border-b border-white/5' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={springTransition}
          className="flex items-center gap-2 cursor-pointer relative z-50"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className="bg-blue-600 p-2 rounded-xl shadow-lg shadow-blue-600/20">
            <Cpu className="text-white w-5 h-5 md:w-6 md:h-6" />
          </div>
          <span className="text-lg md:text-xl font-bold tracking-tight text-white">Steven Jones</span>
        </motion.div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...springTransition, delay: i * 0.1 }}
              className="text-gray-400 hover:text-white transition-colors font-medium text-sm lg:text-base relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full" />
            </motion.a>
          ))}
          <motion.a
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ ...springTransition, delay: 0.4 }}
            href="#contact"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full font-bold text-sm transition-all shadow-lg shadow-blue-600/20 hover:shadow-blue-600/40 active:scale-95"
          >
            Contact
          </motion.a>
        </nav>

        {/* Mobile Menu Button */}
        <motion.button 
          initial={false}
          animate={{ rotate: isOpen ? 90 : 0 }}
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden relative z-50 p-2 text-white bg-white/5 rounded-lg border border-white/10"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 md:hidden bg-black/95 backdrop-blur-2xl flex flex-col justify-center items-center"
          >
            <div className="flex flex-col items-center gap-8 p-6 w-full">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.1, ...springTransition }}
                  onClick={() => setIsOpen(false)}
                  className="text-gray-300 hover:text-blue-500 transition-colors text-3xl font-bold"
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, ...springTransition }}
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="mt-4 bg-blue-600 text-white text-center py-4 px-12 rounded-2xl font-bold text-xl shadow-xl shadow-blue-600/30 w-full max-w-xs"
              >
                Contact
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
