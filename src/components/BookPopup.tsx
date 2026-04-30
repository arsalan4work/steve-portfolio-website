'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Star, ShoppingCart } from 'lucide-react';
import Image from 'next/image';

const BookPopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => setIsVisible(false);

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-0 z-999 flex items-center justify-center px-4">

          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          />

          {/* Popup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 40 }}
            transition={{ type: 'spring', stiffness: 200, damping: 22 }}
            className="relative z-10 w-full max-w-md"
          >
            <div className="relative bg-gray-950 border border-white/10 rounded-3xl shadow-2xl overflow-hidden">

              {/* Top gradient bar */}
              <div className="h-1 w-full bg-linear-to-r from-blue-500 via-purple-500 to-blue-500" />

              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all z-20"
              >
                <X size={18} />
              </button>

              <div className="p-6 flex flex-col sm:flex-row gap-6 items-center">

                {/* Book Image */}
                <div className="relative w-36 h-48 shrink-0 rounded-xl overflow-hidden shadow-xl shadow-blue-500/20 border border-white/5">
                  <Image
                    src="/book_cover.jpg"
                    alt="The Intelligence We Built"
                    fill
                    className="object-cover"
                    priority
                  />
                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-linear-to-br from-white/10 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Content */}
                <div className="flex-1 text-center sm:text-left">

                  {/* Badge */}
                  <span className="inline-block px-3 py-1 mb-3 text-[10px] font-bold tracking-widest uppercase text-blue-400 bg-blue-400/10 border border-blue-400/20 rounded-full">
                    New Release
                  </span>

                  {/* Title */}
                  <h3 className="text-white font-bold text-base leading-snug mb-1">
                    The Intelligence We Built
                  </h3>
                  <p className="text-gray-500 text-xs mb-3">
                    by <span className="text-gray-300">Steven Jones</span> · Kindle Edition
                  </p>

                  {/* Stars */}
                  <div className="flex items-center justify-center sm:justify-start gap-1.5 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={13}
                        className="fill-yellow-400 text-yellow-400"
                      />
                    ))}
                    <span className="text-yellow-400 text-xs font-bold ml-1">4.9</span>
                    <span className="text-gray-600 text-xs">(24 reviews)</span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 text-xs leading-relaxed mb-5">
                    A plain-language guide to how AI is quietly shaping business, creativity, and the future of work — written for everyone, not just techies.
                  </p>

                  {/* CTA Button */}
                  <a
                    href="https://www.amazon.com/dp/B0GNKY26D7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white text-sm font-bold px-6 py-3 rounded-2xl transition-all transform hover:scale-[1.02] active:scale-95 shadow-lg shadow-blue-600/25"
                  >
                    <ShoppingCart size={15} />
                    Purchase on Amazon
                  </a>
                  {/* Dismiss */}
                  <button
                    onClick={handleClose}
                    className="mt-3 w-full text-center text-gray-600 hover:text-gray-400 text-xs transition-colors"
                  >
                    Maybe later
                  </button>
                </div>
                
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default BookPopup;