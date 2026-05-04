'use client';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, Cpu, CheckCircle2 } from 'lucide-react';

const Certifications = () => {
  const certificationCategories = [
    {
      title: 'AI & Emerging Technologies',
      icon: <Cpu className="text-blue-500" size={24} />,
      certs: [
        { name: 'Certified Chief Artificial Intelligence Officer (CCAIO)', issuer: 'TONEX / National Initiative for Cybersecurity Careers and Studies (NICCS)' },
        { name: 'Certified Artificial Intelligence Scientist (CAIS™)', issuer: 'The United States Artificial Intelligence Institute (USAII®)' },
        { name: 'AI Leadership – Driving Digital Transformation', issuer: 'MIT CSAIL' },
        { name: 'AI Leadership - Transformation for Competitive Advantage', issuer: 'Massachusetts Institute of Technology (MIT)' }
      ]
    },
    {
      title: 'Cybersecurity & Governance',
      icon: <ShieldCheck className="text-purple-500" size={24} />,
      certs: [
        { name: 'Certified Ethical Hacker (CEH)', issuer: 'EC-Council' },
        { name: 'Certified Network Defense Architect (CNDA)', issuer: 'EC-Council' },
        { name: 'Certified Information Security Manager (CISM)', issuer: 'ISACA' },
        { name: 'Computer Hacking Forensic Investigator (CHFI)', issuer: 'EC-Council' },
        { name: 'ISO/IEC 27002 – Information Security', issuer: 'Exin' },
        { name: 'ISO/IEC 20000 – IT Service Management', issuer: 'Exin' },
        { name: 'ITIL v3', issuer: 'Exin' },
      ]
    },
    {
      title: 'Technical',
      icon: <Award className="text-emerald-500" size={24} />,
      certs: [
        { name: 'Microsoft Certified Professional (MCP)', issuer: 'Microsoft' }
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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring' as const,
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section id="certifications" className="py-24 bg-black overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-widest text-blue-500 uppercase bg-blue-500/10 rounded-lg">
            Expertise
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">Professional <span className="text-blue-500">Certifications</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg">Validating executive leadership and technical excellence across AI and cybersecurity domains.</p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {certificationCategories.map((category, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
              className="bg-gray-900/40 border border-white/5 rounded-[2rem] p-8 hover:bg-gray-900/60 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-white/5 rounded-2xl">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>

              <ul className="space-y-6">
                {category.certs.map((cert, i) => (
                  <li key={i} className="group">
                    <div className="flex items-start gap-3">
                      <div className="mt-1 flex-shrink-0">
                        <CheckCircle2 size={18} className="text-blue-500/40 group-hover:text-blue-500 transition-colors" />
                      </div>
                      <div>
                        <p className="text-white font-bold text-sm md:text-base leading-tight group-hover:text-blue-400 transition-colors">
                          {cert.name}
                        </p>
                        <p className="text-gray-500 text-xs mt-1 font-medium tracking-wide">
                          {cert.issuer}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
