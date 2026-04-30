'use client';

import React from 'react';
import { Mail, Send, ExternalLink } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto bg-gray-900 border border-gray-800 rounded-[3rem] overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            {/* Left Side: Contact Info */}
            <div className="lg:w-2/5 p-12 bg-blue-600 text-white flex flex-col justify-between">
              <div>
                <h2 className="text-4xl font-bold mb-6">Let&apos;s Connect</h2>
                <p className="text-blue-100 text-lg mb-12">
                  Open for strategic advisory roles, executive leadership opportunities, and collaborations in AI and cybersecurity.
                </p>

                <div className="space-y-8">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-white/10 rounded-xl">
                      <Mail size={24} />
                    </div>
                    <div>
                      <p className="text-blue-200 text-sm">Email</p>
                      <p className="font-bold text-lg">steven.jones@example.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-white/10 rounded-xl">
                    </div>
                    <div>
                      <p className="text-blue-200 text-sm">LinkedIn</p>
                      <a 
                        href="https://www.linkedin.com/in/steven-jones-2b089a126/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="font-bold text-lg flex items-center gap-2 hover:underline"
                      >
                        Profile <ExternalLink size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <p className="text-blue-100 opacity-70">Located in Birmingham, Alabama</p>
              </div>
            </div>

            {/* Right Side: Form */}
            <div className="lg:w-3/5 p-12 bg-gray-900">
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-400">Full Name</label>
                    <input 
                      type="text" 
                      className="w-full bg-gray-800 border border-gray-700 rounded-xl py-4 px-6 text-white focus:outline-none focus:border-blue-500 transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-400">Email Address</label>
                    <input 
                      type="email" 
                      className="w-full bg-gray-800 border border-gray-700 rounded-xl py-4 px-6 text-white focus:outline-none focus:border-blue-500 transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400">Subject</label>
                  <input 
                    type="text" 
                    className="w-full bg-gray-800 border border-gray-700 rounded-xl py-4 px-6 text-white focus:outline-none focus:border-blue-500 transition-all"
                    placeholder="Executive Collaboration"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400">Message</label>
                  <textarea 
                    rows={4}
                    className="w-full bg-gray-800 border border-gray-700 rounded-xl py-4 px-6 text-white focus:outline-none focus:border-blue-500 transition-all resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-5 rounded-xl transition-all flex items-center justify-center gap-2 group"
                >
                  Send Message
                  <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
