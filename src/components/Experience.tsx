'use client';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Chief Artificial Intelligence Officer / AI Strategist',
      company: '(Freelance)',
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
      company: '(Freelance)',
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
      company: '(ATS Technologies)',
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
      company: '(Maxwell Air Force Base Gunter Annex)',
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
      company: '(22nd Century Tech - Maxwell Gunter Annex)',
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
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring' as const,
        stiffness: 80,
        damping: 15,
      },
    },
  };

  return (
    <section id="experience" className="py-24 bg-black overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 lg:mb-24"
        >
          <div className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-widest text-blue-500 uppercase bg-blue-500/10 rounded-lg">
            My Career Path
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">Professional <span className="text-blue-500">Journey</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg">A progression from deep technical engineering to enterprise scale AI leadership.</p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-4xl mx-auto space-y-4"
        >
          {experiences.map((exp, i) => (
            <motion.div 
              key={i}
              variants={itemVariants}
              className="relative pl-6 md:pl-10 pb-12 border-l border-white/10 last:pb-0 group"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-2.25 top-0 w-4 h-4 bg-gray-900 rounded-full border-2 border-white/20 group-hover:border-blue-500 group-hover:bg-blue-500 transition-all duration-300" />
              
              <div className="bg-gray-900/40 border border-white/5 rounded-4xl p-6 md:p-10 hover:bg-gray-900/60 hover:border-blue-500/20 transition-all duration-500 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 blur-3xl -mr-16 -mt-16 group-hover:bg-blue-600/10 transition-colors" />
                
                <div className="flex flex-col md:flex-row md:items-start justify-between mb-8 gap-4 relative z-10">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">{exp.title}</h3>
                    <div className="flex items-center gap-2 text-gray-400 font-semibold text-sm md:text-base">
                      <div className="p-1.5 bg-blue-500/10 rounded-lg">
                        <Briefcase size={14} className="text-blue-500" />
                      </div>
                      <span>{exp.company}</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2.5 text-xs md:text-sm text-gray-500 font-medium">
                    <div className="flex items-center gap-2">
                      <Calendar size={14} className="text-blue-500/60" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={14} className="text-blue-500/60" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                <ul className="space-y-4 relative z-10">
                  {exp.bullets.map((bullet, j) => (
                    <li key={j} className="flex items-start gap-3.5 text-gray-400 text-sm md:text-base leading-relaxed">
                      <div className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-500/40 group-hover:bg-blue-500 transition-colors shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
