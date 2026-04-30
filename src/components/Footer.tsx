import { Mail, Cpu } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-950 pt-24 pb-12 border-t border-white/5 relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent blur-sm" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-10 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex items-center gap-3">
              <div className="bg-blue-600 p-2.5 rounded-xl shadow-lg shadow-blue-600/20">
                <Cpu className="text-white w-6 h-6" />
              </div>
              <span className="text-2xl font-bold text-white tracking-tight">Steven Jones</span>
            </div>
            <p className="text-gray-500 text-sm max-w-xs leading-relaxed">
              Architecting the future of Agentic AI with ethics and scale.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-gray-400 font-bold text-sm uppercase tracking-widest">
            <a href="#about" className="hover:text-blue-500 transition-colors">About</a>
            <a href="#experience" className="hover:text-blue-500 transition-colors">Experience</a>
            <a href="#skills" className="hover:text-blue-500 transition-colors">Skills</a>
            <a href="#contact" className="hover:text-blue-500 transition-colors">Contact</a>
          </div>

          <div className="flex gap-4">
            <a 
              href="https://www.linkedin.com/in/steven-jones-2b089a126/" 
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 bg-white/5 border border-white/5 rounded-2xl text-gray-400 hover:text-white hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-300"
            >
            </a>
            <a 
              href="mailto:steven.jones@example.com" 
              className="p-3.5 bg-white/5 border border-white/5 rounded-2xl text-gray-400 hover:text-white hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-300"
            >
              <Mail size={22} />
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-white/5 text-gray-500 text-xs md:text-sm gap-6">
          <p className="font-medium">© {new Date().getFullYear()} Steven Jones. <span className="text-gray-600 font-normal">All rights reserved.</span></p>
          <div className="flex gap-8 font-medium">
            <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
