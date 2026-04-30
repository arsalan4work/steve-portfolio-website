'use client';
import { motion } from 'framer-motion';
import { Bot, Stethoscope, ScanEye, Sparkles } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Conversational AI for Customer Service',
      description: 'Designed and deployed a Generative AI-powered virtual agent platform supporting multi-turn conversations, autonomous reasoning, tool integration, memory persistence, and real-time personalization.',
      impact: 'Delivered significant improvements in resolution efficiency and user satisfaction during prototype and pilot testing.',
      icon: <Bot className="text-blue-500" size={32} />,
      tags: ['Generative AI', 'NLP', 'System Integration']
    },
    {
      title: 'AI-Based Medical Diagnostic System',
      description: 'Developed a multimodal AI solution combining deep learning models for medical image analysis and textual clinical data processing to support predictive diagnostics and decision assistance.',
      impact: 'Incorporated explainability layers and rigorous bias mitigation controls to promote ethical, trustworthy, and clinically viable healthcare applications.',
      icon: <Stethoscope className="text-purple-500" size={32} />,
      tags: ['Deep Learning', 'Computer Vision', 'Ethical AI']
    },
    {
      title: 'Facial Emotion Recognition & Detection System',
      description: 'Engineered a real-time computer vision model using advanced convolutional networks to accurately detect and classify human emotions from facial expressions.',
      impact: 'Applied in user experience enhancement, adaptive interface design, and mental health monitoring with privacy-preserving techniques.',
      icon: <ScanEye className="text-emerald-500" size={32} />,
      tags: ['Computer Vision', 'CNN', 'Privacy Tech']
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

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
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
    <section id="projects" className="py-24 bg-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full -mr-64 -mt-64" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/5 blur-[120px] rounded-full -ml-64 -mb-64" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 lg:mb-24"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 text-xs font-bold tracking-widest text-blue-500 uppercase bg-blue-500/10 rounded-lg">
            <Sparkles size={14} />
            Innovations
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">AI Projects & <span className="text-blue-500">Innovations</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg">Specialized solutions leveraging cutting-edge artificial intelligence to solve complex real-world challenges.</p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, i) => (
            <motion.div 
              key={i}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="group relative p-8 bg-gray-900/40 border border-white/5 rounded-[2.5rem] hover:bg-gray-900/60 hover:border-blue-500/20 transition-all duration-500"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                {project.icon}
              </div>
              
              <div className="mb-6 p-4 bg-white/5 w-fit rounded-2xl group-hover:scale-110 transition-transform duration-500">
                {project.icon}
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors leading-tight">
                {project.title}
              </h3>

              <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-6">
                {project.description}
              </p>

              <div className="pt-6 border-t border-white/5">
                <p className="text-xs font-bold text-blue-500/80 uppercase tracking-wider mb-3">Key Impact</p>
                <p className="text-gray-500 text-sm italic leading-snug">
                  &ldquo;{project.impact}&rdquo;
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                {project.tags.map((tag, j) => (
                  <span key={j} className="text-[10px] font-bold px-2.5 py-1 bg-white/5 text-gray-400 rounded-md uppercase tracking-wider">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

