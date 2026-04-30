'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen } from 'lucide-react';

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

  return (
    <section id="education" className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Academic <span className="text-blue-500">Foundation</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Continuous learning from world-class institutions.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {education.map((edu, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-gray-900/50 border border-gray-800 rounded-3xl p-10 hover:bg-gray-900 transition-all flex flex-col h-full"
            >
              <div className="mb-6 flex items-center justify-between">
                <div className="p-4 bg-blue-600/10 rounded-2xl text-blue-500">
                  <GraduationCap size={32} />
                </div>
                <div className="flex gap-2">
                  {edu.highlights.map((h, j) => (
                    <span key={j} className="px-3 py-1 bg-gray-800 text-xs font-semibold text-gray-400 rounded-full border border-gray-700">
                      {h}
                    </span>
                  ))}
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-2">{edu.institution}</h3>
              {edu.department && <p className="text-blue-400 font-medium mb-2">{edu.department}</p>}
              <p className="text-lg text-gray-300 font-bold mb-6">{edu.degree}</p>
              
              <p className="text-gray-400 leading-relaxed mb-8 flex-grow">
                {edu.description}
              </p>

              <div className="flex items-center gap-2 text-blue-500 font-bold cursor-pointer hover:underline">
                <BookOpen size={18} />
                <span>View Program Details</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
