'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Terminal, Users } from 'lucide-react';

const Skills = () => {
  const categories = [
    {
      title: 'Industry Knowledge',
      icon: <Users className="text-blue-500" />,
      skills: [
        'Enterprise Infrastructure Strategy', 'Cross Functional Team Leadership', 
        'AI Adoption and Change Leadership', 'Model Lifecycle Management', 
        'AI Risk Management', 'Security Architecture', 'Identity and Access Management', 
        'Data Privacy and Protection', 'Digital Transformation Strategy', 
        'Executive AI Leadership', 'Generative AI Strategy', 'Enterprise AI Architecture', 
        'AI Governance and Ethics', 'Responsible AI Deployment', 'Team Building'
      ]
    },
    {
      title: 'Tools & Technologies',
      icon: <Terminal className="text-purple-500" />,
      skills: [
        'AI for Cybersecurity', 'Machine Learning', 'Intelligent Automation', 
        'Predictive Analytics', 'Splunk Architecture', 'Vulnerability Assessment', 
        'Penetration Testing', 'Cloud Security', 'Intelligent Networks', 
        'Data Privacy', 'Unix/Linux/AIX', 'Windows Server', 'Agentic AI Development'
      ]
    },
    {
      title: 'Specialized Domains',
      icon: <Shield className="text-green-500" />,
      skills: [
        'Generative AI', 'Predictive Modeling', 'Behavioral Insight Modeling', 
        'SIEM Operations', 'IAM Frameworks', 'Regulatory Compliance', 
        'Algorithmic Bias Mitigation', 'Multimodal Systems'
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-gray-950">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Core <span className="text-blue-500">Competencies</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Bridging the gap between executive strategy and deep technical execution.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-gray-900 border border-gray-800 rounded-3xl p-8 hover:border-blue-500/30 transition-all"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-gray-800 rounded-xl">
                  {cat.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, j) => (
                  <span 
                    key={j}
                    className="px-4 py-2 bg-gray-800 text-gray-300 text-sm font-medium rounded-full border border-gray-700 hover:text-white hover:border-blue-500/50 transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
