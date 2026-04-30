'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { User, Award, Globe, LineChart } from 'lucide-react';

const About = () => {
  const highlights = [
    { icon: <Award className="text-blue-500" />, title: '20+ Years', desc: 'Executive Leadership' },
    { icon: <Globe className="text-purple-500" />, title: 'Global Impact', desc: 'Enterprise Scale AI' },
    { icon: <LineChart className="text-green-500" />, title: '15% Increase', desc: 'Customer Retention' },
    { icon: <User className="text-orange-500" />, title: 'Mentor', desc: 'AI Talent Development' },
  ];

  return (
    <section id="about" className="py-24 bg-gray-950">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <h2 className="text-4xl font-bold text-white mb-8">Professional <span className="text-blue-500">Overview</span></h2>
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                I am a Chief Artificial Intelligence Officer and enterprise AI strategist with more than two decades of executive leadership across artificial intelligence, cybersecurity, enterprise infrastructure, and digital transformation in highly regulated, mission critical environments. My career reflects a consistent progression from deep technical engineering roles to enterprise scale AI leadership, enabling organizations to move from experimentation to measurable business impact.
              </p>
              <p>
                I architect and scale Agentic AI and Generative AI systems that reason, plan, execute, and adapt across complex workflows. My work has delivered measurable results including increased customer retention, reduced resolution times through intelligent automation, and meaningful reductions in algorithmic bias through robust governance frameworks.
              </p>
              <p>
                My leadership approach integrates innovation with responsibility. I establish AI governance, ethics frameworks, bias mitigation strategies, observability standards, and secure data pipelines to ensure regulatory alignment and trustworthy deployment. I partner closely with executive stakeholders to align AI initiatives with strategic priorities, drive cultural adoption, and embed intelligent automation into the core of business operations.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {highlights.map((item, i) => (
              <div 
                key={i} 
                className="p-8 rounded-3xl bg-gray-900 border border-gray-800 hover:border-blue-500/50 transition-all group"
              >
                <div className="mb-4 transform group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-500">{item.desc}</p>
              </div>
            ))}
            
            <div className="sm:col-span-2 p-8 rounded-3xl bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-blue-500/30">
              <h3 className="text-xl font-bold text-white mb-4 italic">&quot;Delivering scalable, ethical, and measurable AI solutions that create long term competitive advantage.&quot;</h3>
              <p className="text-blue-400 font-medium">— Strategic Vision</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
