'use client';

import { motion } from 'framer-motion';
import { BookOpen, Star, ExternalLink } from 'lucide-react';
import Image from 'next/image';

const books = [
  {
    cover: '/book_cover.jpg',
    alt: 'The Intelligence We Built',
    badge: 'Kindle Edition · New Release',
    title: 'The Intelligence We Built',
    subtitle: null,
    author: 'Steven Jones',
    rating: 4.9,
    reviews: 24,
    description:
      'A plain-language guide to how AI is quietly shaping business, creativity, and the future of work — written for everyone, not just techies. This book reflects years of hands-on experience leading AI transformation across enterprises, distilled into actionable insight for the modern leader.',
    themes: ['AI Strategy & Leadership', 'Digital Transformation', 'Future of Work'],
    link: 'https://www.amazon.com/dp/B0GNKY26D7',
  },
  {
    cover: '/book_cover2.png',
    alt: 'The Intelligent Organization',
    badge: 'New Release · Available Now',
    title: 'The Intelligent Organization',
    subtitle: 'How to Align AI Strategy, Security, Ethics, People, and ROI for Real Business Results',
    author: 'Steven Jones',
    rating: null,
    reviews: null,
    description:
      'This book explores how AI moves from early experimentation into real-world deployment — shaping decision-making, security, and long-term organizational outcomes. With a clear emphasis on structure, it connects technical capability with leadership responsibility, offering a practical path for organizations seeking to build intelligence that is effective, trusted, and sustainable at scale.',
    themes: [
      'AI Strategy & Alignment',
      'Ethics & Governance',
      'Security & Risk',
      'Workforce Readiness',
      'ROI & Business Results',
      'Organizational Intelligence',
    ],
    link: '/',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring' as const, stiffness: 100, damping: 18 },
  },
};

const BooksSection = () => {
  return (
    <section id="books" className="py-24 bg-black overflow-hidden">
      <div className="container mx-auto px-6">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-widest text-blue-500 uppercase bg-blue-500/10 rounded-lg">
            Thought Leadership
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
            Published <span className="text-blue-500">Author</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg">
            Bridging technical insight with executive leadership — translating deep AI expertise into accessible knowledge for leaders, teams, and organizations navigating the intelligence era.
          </p>
        </motion.div>

        {/* Book Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="flex flex-col gap-8 max-w-4xl mx-auto"
        >
          {books.map((book, idx) => (
            <motion.div key={idx} variants={itemVariants}>
              <div className="relative bg-gray-900/40 border border-white/5 rounded-4xl p-8 md:p-12 overflow-hidden">

                {/* Background glows */}
                <div className="absolute -top-24 -left-24 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10 flex flex-col md:flex-row gap-10 items-center md:items-start">

                  {/* Book Cover */}
                  <div className="shrink-0">
                    <div className="relative w-44 h-60 md:w-52 md:h-72 rounded-2xl overflow-hidden shadow-2xl shadow-blue-500/20 border border-white/10">
                      <Image
                        src={book.cover}
                        alt={book.alt}
                        fill
                        sizes="(max-width: 768px) 176px, 208px"
                        className="object-cover"
                        priority={idx === 0}
                      />
                      <div className="absolute inset-0 bg-linear-to-br from-white/10 via-transparent to-transparent pointer-events-none" />
                    </div>
                  </div>

                  {/* Book Info */}
                  <div className="flex-1 text-center md:text-left">

                    {/* Badge */}
                    <span className="inline-flex items-center gap-2 px-3 py-1 mb-5 text-[10px] font-bold tracking-widest uppercase text-blue-400 bg-blue-400/10 border border-blue-400/20 rounded-full">
                      <BookOpen size={11} />
                      {book.badge}
                    </span>

                    {/* Title */}
                    <h3 className="text-white font-bold text-2xl md:text-3xl leading-snug mb-1 tracking-tight">
                      {book.title}
                    </h3>

                    {/* Subtitle */}
                    {book.subtitle && (
                      <p className="text-gray-500 text-xs md:text-sm mb-2 leading-relaxed max-w-md mx-auto md:mx-0">
                        {book.subtitle}
                      </p>
                    )}

                    <p className="text-gray-500 text-sm mb-4">
                      by <span className="text-gray-300 font-semibold">{book.author}</span>
                    </p>

                    {/* Stars — only if rating exists */}
                    {book.rating && (
                      <div className="flex items-center justify-center md:justify-start gap-1.5 mb-6">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
                        ))}
                        <span className="text-yellow-400 text-sm font-bold ml-1">{book.rating}</span>
                        <span className="text-gray-600 text-sm">({book.reviews} reviews)</span>
                      </div>
                    )}

                    {/* Description */}
                    <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8 max-w-xl">
                      {book.description}
                    </p>

                    {/* Key Themes */}
                    <div className={`grid gap-3 mb-8 ${book.themes.length > 3 ? 'grid-cols-2 sm:grid-cols-3' : 'grid-cols-1 sm:grid-cols-3'}`}>
                      {book.themes.map((theme, i) => (
                        <div
                          key={i}
                          className="px-4 py-2 bg-white/5 border border-white/5 rounded-xl text-gray-400 text-xs font-medium text-center"
                        >
                          {theme}
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <a
                      href={book.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm font-semibold transition-colors group"
                    >
                      Read on Amazon
                      <ExternalLink size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>

                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default BooksSection;