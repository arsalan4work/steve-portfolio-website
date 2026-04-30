'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Chief Artificial Intelligence Officer / AI Strategist',
      company: 'Mighty Muscles',
      period: 'Dec 2024 - Present',
      location: 'Birmingham, Alabama',
      bullets: [
        'Developed and executed an enterprise wide AI strategy centered on Agentic and Generative AI',
        'Integrated predictive analytics increasing customer retention by 15 percent',
        'Designed AI governance and ethics framework reducing bias incidents by 40 percent',
        'Directed a 20 million dollar AI investment portfolio',
        'Built and scaled a cross functional AI organization of more than 30 engineers'
      ]
    },
    {
      title: 'Chief Artificial Intelligence Officer',
      company: 'Freelance',
      period: 'Dec 2020 - Present',
      location: 'Remote',
      bullets: [
        'Advised executive teams on enterprise AI strategy and digital transformation',
        'Designed secure AI architectures tailored to client specific regulatory requirements',
        'Delivered predictive analytics and automation solutions improving decision accuracy',
        'Led AI innovation initiatives including conversational agents and multimodal diagnostic systems'
      ]
    },
    {
      title: 'Chief Artificial Intelligence Officer',
      company: 'ATS Technologies',
      period: 'Dec 2021 - Dec 2024',
      location: 'Montgomery, Alabama',
      bullets: [
        'Defined and led enterprise AI roadmaps for government and commercial clients',
        'Oversaw end to end AI infrastructure development and production deployment strategies',
        'Established enterprise AI safety, alignment, and governance programs',
        'Recruited and mentored high performing AI research and engineering teams'
      ]
    },
    {
      title: 'Artificial Intelligence/Splunk Administrator',
      company: 'Maxwell Air Force Base Gunter Annex',
      period: 'Dec 2019 - Dec 2021',
      location: 'Montgomery, Alabama',
      bullets: [
        'Administered and optimized enterprise scale Splunk architecture supporting real time analytics',
        'Integrated machine learning capabilities into Splunk for anomaly detection',
        'Developed advanced dashboards for threat detection and performance monitoring',
        'Leveraged Generative AI for automated search processing language optimization'
      ]
    },
    {
      title: 'Senior Unix Administrator',
      company: '22nd Century Tech - Maxwell Gunter Annex',
      period: 'Dec 2017 - Dec 2019',
      location: 'Montgomery, Alabama',
      bullets: [
        'Managed Windows, UNIX, AIX, and Linux platforms for high availability applications',
        'Developed automation scripts reducing manual intervention and improving reliability',
        'Integrated emerging AI enabled workflows into infrastructure management',
        'Provided rapid incident response and root cause analysis in secure environments'
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Professional <span className="text-blue-500">Journey</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">A progression from deep technical engineering to enterprise scale AI leadership.</p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative pl-8 pb-12 border-l border-gray-800 last:pb-0"
            >
              {/* Timeline Dot */}
              <div className="absolute left-[-9px] top-0 w-4 h-4 bg-blue-600 rounded-full border-4 border-black" />
              
              <div className="bg-gray-900/50 border border-gray-800 rounded-3xl p-8 hover:bg-gray-900 transition-all">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">{exp.title}</h3>
                    <div className="flex items-center gap-2 text-blue-400 font-medium">
                      <Briefcase size={16} />
                      <span>{exp.company}</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <Calendar size={14} />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={14} />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                <ul className="space-y-3">
                  {exp.bullets.map((bullet, j) => (
                    <li key={j} className="flex items-start gap-3 text-gray-400">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
