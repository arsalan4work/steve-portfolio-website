'use client';

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: 'spring' as const,
        stiffness: 100,
        damping: 20,
      },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring' as const,
        stiffness: 200,
        damping: 10,
      },
    },
  };

  return (
    <section id="skills" className="py-24 bg-gray-950 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 lg:mb-24"
        >
          <div className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-widest text-blue-500 uppercase bg-blue-500/10 rounded-lg">
            My Expertise
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">Core <span className="text-blue-500">Competencies</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg">Bridging the gap between executive strategy and deep technical execution.</p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {categories.map((cat, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              className="bg-gray-900/50 border border-white/5 rounded-[2.5rem] p-8 lg:p-10 hover:bg-gray-900 hover:border-blue-500/30 transition-all duration-500 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 blur-3xl -mr-16 -mt-16 group-hover:bg-blue-500/10 transition-colors" />
              
              <div className="flex items-center gap-4 mb-8 relative z-10">
                <div className="p-4 bg-gray-800/80 rounded-2xl group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                  {cat.icon}
                </div>
                <h3 className="text-xl font-bold text-white tracking-tight">{cat.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2.5 relative z-10">
                {cat.skills.map((skill, j) => (
                  <motion.span 
                    key={j}
                    variants={skillVariants}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-4 py-2 bg-white/5 text-gray-300 text-xs md:text-sm font-semibold rounded-xl border border-white/5 hover:text-white hover:border-blue-500/40 hover:bg-blue-500/10 transition-all cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
