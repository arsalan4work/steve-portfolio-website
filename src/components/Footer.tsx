import React from 'react';
import { Mail, Cpu } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-950 pt-24 pb-12 border-t border-gray-900">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8 text-center md:text-left">
          <div className="flex items-center gap-3">
            <div className="bg-blue-600 p-2 rounded-lg">
              <Cpu className="text-white w-6 h-6" />
            </div>
            <span className="text-2xl font-bold text-white tracking-tight">Steven Jones</span>
          </div>
          
          <div className="flex gap-12 text-gray-400 font-medium">
            <a href="#about" className="hover:text-blue-500 transition-colors">About</a>
            <a href="#experience" className="hover:text-blue-500 transition-colors">Experience</a>
            <a href="#skills" className="hover:text-blue-500 transition-colors">Skills</a>
            <a href="#contact" className="hover:text-blue-500 transition-colors">Contact</a>
          </div>

          <div className="flex gap-4">
            <a href="https://www.linkedin.com/in/steven-jones-2b089a126/" className="p-3 bg-gray-900 border border-gray-800 rounded-xl text-gray-400 hover:text-white hover:border-blue-500 transition-all">
            </a>
            <a href="mailto:steven.jones@example.com" className="p-3 bg-gray-900 border border-gray-800 rounded-xl text-gray-400 hover:text-white hover:border-blue-500 transition-all">
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-900 text-gray-500 text-sm gap-4">
          <p>© {new Date().getFullYear()} Steven Jones. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-gray-300">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
