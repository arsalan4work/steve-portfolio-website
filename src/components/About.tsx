'use client';
import { motion } from 'framer-motion';
import { User, Award, Globe, LineChart } from 'lucide-react';

const About = () => {
  const highlights = [
    { icon: <Award className="text-blue-500" />, title: '20+ Years', desc: 'Executive Leadership' },
    { icon: <Globe className="text-purple-500" />, title: 'Global Impact', desc: 'Enterprise Scale AI' },
    { icon: <LineChart className="text-green-500" />, title: '15% Increase', desc: 'Customer Retention' },
    { icon: <User className="text-orange-500" />, title: 'Mentor', desc: 'AI Talent Development' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section id="about" className="py-24 bg-gray-950 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: 'spring', stiffness: 50, damping: 20 }}
            className="flex-1"
          >
            <div className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-widest text-blue-500 uppercase bg-blue-500/10 rounded-lg">
              Behind the Vision
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 tracking-tight">Professional <span className="text-blue-500">Overview</span></h2>
            <div className="space-y-6 text-gray-400 text-base md:text-lg leading-relaxed">
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
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="flex-1 w-full grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6"
          >
            {highlights.map((item, i) => (
              <motion.div 
                key={i} 
                variants={itemVariants}
                className="p-6 md:p-8 rounded-[2rem] bg-gray-900 border border-white/5 hover:border-blue-500/30 transition-all group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 blur-2xl -mr-12 -mt-12 group-hover:bg-blue-500/10 transition-colors" />
                <div className="mb-4 transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm md:text-base">{item.desc}</p>
              </motion.div>
            ))}
            
            <motion.div 
              variants={itemVariants}
              className="sm:col-span-2 p-8 rounded-[2rem] bg-gradient-to-br from-blue-600/10 to-purple-600/10 border border-blue-500/20 relative group"
            >
              <div className="absolute inset-0 bg-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-[2rem]" />
              <h3 className="text-lg md:text-xl font-bold text-white mb-4 italic leading-relaxed relative z-10">&quot;Delivering scalable, ethical, and measurable AI solutions that create long term competitive advantage.&quot;</h3>
              <p className="text-blue-400 font-bold tracking-wider text-sm relative z-10 uppercase">— Strategic Vision</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
