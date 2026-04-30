'use client';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const Education = () => {
  const education = [
    {
      institution: 'Massachusetts Institute of Technology',
      department: 'Computer Science and Artificial Intelligence Laboratory',
      degree: 'Executive Education',
      description: 'Focused on artificial intelligence strategy, enterprise adoption, and digital transformation leadership. Studied AI system design, model governance, and ethics.',
      highlights: ['AI Strategy', 'Responsible AI', 'Model Governance']
    },
    {
      institution: 'American Sentinel University',
      degree: 'Master of Science – Information Systems',
      description: 'Advanced graduate studies in enterprise information systems, cybersecurity architecture, and data governance. Focused on systems integration and strategic leadership.',
      highlights: ['Cybersecurity Architecture', 'Data Governance', 'Strategic Leadership']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  return (
    <section id="education" className="py-24 bg-black overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 lg:mb-24"
        >
          <div className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-widest text-blue-500 uppercase bg-blue-500/10 rounded-lg">
            Academic Background
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">Academic <span className="text-blue-500">Foundation</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg">Continuous learning from world-class institutions.</p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto"
        >
          {education.map((edu, i) => (
            <motion.div 
              key={i}
              variants={itemVariants}
              className="bg-gray-900/40 border border-white/5 rounded-[2.5rem] p-8 md:p-12 hover:bg-gray-900 hover:border-blue-500/20 transition-all duration-500 flex flex-col h-full group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 blur-3xl -mr-16 -mt-16 group-hover:bg-blue-600/10 transition-colors" />
              
              <div className="mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 relative z-10">
                <div className="p-5 bg-blue-600/10 rounded-2xl text-blue-500 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                  <GraduationCap size={36} />
                </div>
                <div className="flex flex-wrap gap-2">
                  {edu.highlights.map((h, j) => (
                    <span key={j} className="px-3 py-1 bg-white/5 text-[10px] md:text-xs font-bold text-blue-400/80 rounded-full border border-blue-500/10 uppercase tracking-wider">
                      {h}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="relative z-10 flex-grow">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 tracking-tight group-hover:text-blue-400 transition-colors">{edu.institution}</h3>
                {edu.department && <p className="text-blue-500 font-bold mb-4 text-sm md:text-base uppercase tracking-wide">{edu.department}</p>}
                <p className="text-lg md:text-xl text-gray-300 font-semibold mb-6 italic">&quot;{edu.degree}&quot;</p>
                
                <p className="text-gray-400 leading-relaxed text-base md:text-lg">
                  {edu.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
