'use client';
import { motion, Variants } from 'framer-motion';
import { Mail, Send, ExternalLink, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      label: 'Email',
      value: 'pbjones2@gmail.com',
      href: 'mailto:pbjones2@gmail.com',
      icon: <Mail size={24} />
    },
    {
      label: 'Phone',
      value: '334 322 1533',
      href: 'tel:3343221533',
      icon: <Phone size={24} />
    },
    {
      label: 'Address',
      value: '555 county road 33, Prattville AL .36067',
      href: 'https://maps.google.com/?q=555+county+road+33,+Prattville+AL+.36067',
      icon: <MapPin size={24} />
    },
    {
      label: 'LinkedIn',
      value: 'Linkedin Profile',
      href: 'https://www.linkedin.com/in/steven-jones-2b089a126/',
      icon: <ExternalLink size={24} />
    }
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
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
    <section id="contact" className="py-24 bg-black overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, type: 'spring' }}
          className="max-w-6xl mx-auto bg-gray-900 border border-white/5 rounded-[3rem] overflow-hidden shadow-2xl"
        >
          <div className="flex flex-col lg:flex-row">
            {/* Left Side: Contact Info */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="lg:w-2/5 p-10 md:p-16 bg-blue-600 text-white flex flex-col justify-between relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-full bg-linear-to-br from-white/10 to-transparent pointer-events-none" />
              <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">Let&apos;s <span className="text-blue-200">Connect</span></h2>
                <p className="text-blue-100 text-lg md:text-xl mb-12 leading-relaxed font-medium">
                  Open for strategic advisory roles, executive leadership opportunities, and collaborations in AI and cybersecurity.
                </p>

                <div className="space-y-6">
                  {contactInfo.map((item, idx) => (
                    <motion.div key={idx} whileHover={{ x: 10 }} className="flex items-center gap-5 group cursor-pointer">
                      <div className="p-4 bg-white/15 rounded-2xl group-hover:bg-white/20 transition-colors">
                        {item.icon}
                      </div>
                      <a href={item.href} target={item.label === 'LinkedIn' ? "_blank" : undefined} rel={item.label === 'LinkedIn' ? "noopener noreferrer" : undefined}>
                        <p className="text-blue-200 text-xs font-bold uppercase tracking-widest mb-1">{item.label}</p>
                        <p className="font-bold text-lg md:text-xl group-hover:underline decoration-2 underline-offset-4">{item.value}</p>
                      </a>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="mt-16 relative z-10">
                <div className="flex items-center gap-3 text-blue-100 font-bold tracking-wide text-sm bg-black/10 w-fit px-4 py-2 rounded-full border border-white/10">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  Prattville, Alabama
                </div>
              </div>
            </motion.div>

            {/* Right Side: Form */}
            <div className="lg:w-3/5 p-10 md:p-16 bg-gray-900/50">
              <motion.form 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <motion.div variants={itemVariants} className="space-y-3">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Full Name</label>
                    <input 
                      type="text" 
                      className="w-full bg-white/5 border border-white/5 rounded-2xl py-4 px-6 text-white focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all font-medium placeholder:text-gray-600"
                      placeholder="John Doe"
                    />
                  </motion.div>
                  <motion.div variants={itemVariants} className="space-y-3">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Email Address</label>
                    <input 
                      type="email" 
                      className="w-full bg-white/5 border border-white/5 rounded-2xl py-4 px-6 text-white focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all font-medium placeholder:text-gray-600"
                      placeholder="john@example.com"
                    />
                  </motion.div>
                </div>
                
                <motion.div variants={itemVariants} className="space-y-3">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Subject</label>
                  <input 
                    type="text" 
                    className="w-full bg-white/5 border border-white/5 rounded-2xl py-4 px-6 text-white focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all font-medium placeholder:text-gray-600"
                    placeholder="Executive Collaboration"
                  />
                </motion.div>

                <motion.div variants={itemVariants} className="space-y-3">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Message</label>
                  <textarea 
                    rows={4}
                    className="w-full bg-white/5 border border-white/5 rounded-2xl py-4 px-6 text-white focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all font-medium placeholder:text-gray-600 resize-none"
                    placeholder="Tell me about your project..."
                  />
                </motion.div>

                <motion.button 
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-5 rounded-2xl transition-all flex items-center justify-center gap-3 group shadow-xl shadow-blue-600/20 active:shadow-none"
                >
                  <span className="text-lg">Send Message</span>
                  <Send size={22} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </motion.button>
              </motion.form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
