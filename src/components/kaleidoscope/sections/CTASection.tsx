'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, CheckCircle, ArrowRight } from 'lucide-react';

const CTASection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) {
      return;
    }

    setIsLoading(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitted(true);
    setIsLoading(false);
  };

  if (isSubmitted) {
    return (
      <section id="cta" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-100 via-blue-50 to-indigo-100">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="space-y-8"
          >
            <div className="inline-flex items-center justify-center w-24 h-24 bg-green-500 rounded-full mb-8">
              <CheckCircle className="w-12 h-12 text-white" />
            </div>
            
            <h2 className="text-4xl md:text-6xl font-light text-white mb-6">
              You're One Step Closer
            </h2>
            
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Thank you for taking this important step. A member of our care team will reach out within 24 hours 
              to discuss your personalized recovery journey.
            </p>
            
            <div className="p-8 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 max-w-2xl mx-auto">
              <h3 className="text-2xl font-light text-white mb-4">What happens next?</h3>
              <div className="space-y-4 text-left">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-white/80">Confidential consultation call (30 minutes)</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-white/80">Personalized assessment and treatment plan</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-white/80">Insurance verification and financial options</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-white/80">Immediate support resources</span>
                </div>
              </div>
            </div>
            
            <p className="text-white/70 text-lg">
              Need immediate support? Call our 24/7 helpline: 
              <a href="tel:1-800-RECOVER" className="text-white font-medium ml-2 hover:underline">
                1-800-RECOVER
              </a>
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="cta" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent-light rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-6xl font-serif font-bold bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent mb-6">
            Are You Ready?
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed mb-8">
            Stay informed as the Kaleidoscope movement grows—sign up and we'll share updates, stories, and moments that matter.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 mb-12">
            <div className="flex items-center text-text-secondary">
              <CheckCircle className="w-5 h-5 mr-3 text-green-400" />
              Free consultation
            </div>
            <div className="flex items-center text-text-secondary">
              <CheckCircle className="w-5 h-5 mr-3 text-green-400" />
              Insurance accepted
            </div>
            <div className="flex items-center text-text-secondary">
              <CheckCircle className="w-5 h-5 mr-3 text-green-400" />
              100% confidential
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <div className="p-8 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-text-primary font-medium mb-2">
                  Email Address *
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-text-secondary" />
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-xl text-text-primary placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                    placeholder="Enter email address"
                    required
                  />
                </div>
              </div>


              <motion.button
                type="submit"
                disabled={isLoading || !email.trim()}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-accent-light hover:bg-white text-background px-8 py-4 rounded-xl text-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-3"
              >
                {isLoading ? (
                  <div className="w-6 h-6 border-2 border-background/30 border-t-background rounded-full animate-spin" />
                ) : (
                  <>
                    <span>Sign Up</span>
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </motion.button>

              <p className="text-text-secondary text-sm text-center">
                By submitting this form, you agree to receive communications from Kaleidoscope Recovery. 
                Your information is completely confidential and will never be shared.
              </p>
            </form>
          </div>

          {/* Alternative Contact Options */}
          <div className="mt-12 text-center">
            <p className="text-text-primary text-lg mb-6">
              Prefer to talk right now?
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
              <motion.a
                href="tel:1-800-RECOVER"
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-3 bg-primary/10 backdrop-blur-sm px-6 py-3 rounded-full text-primary hover:bg-primary/20 transition-all duration-300 border border-primary/20"
              >
                <Phone className="w-5 h-5" />
                <span>1-800-RECOVER</span>
              </motion.a>
              
              <div className="text-text-secondary">
                Available 24/7 • Completely confidential
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;