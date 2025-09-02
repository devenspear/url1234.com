'use client';

import React from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Method', href: '#method' },
    { name: 'About', href: '#about' },
    { name: 'Resources', href: '#resources' },
    { name: 'Contact', href: '#contact' }
  ];

  const resources = [
    { name: 'Download "Smashed"', href: '#book' },
    { name: 'Free Assessment', href: '#cta' },
    { name: 'Insurance Info', href: '#insurance' },
    { name: 'ForeverCare™', href: '#forevercare' }
  ];

  const legal = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'HIPAA Notice', href: '/hipaa' },
    { name: 'Accessibility', href: '/accessibility' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-background border-t border-white/10">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="text-2xl font-light text-white mb-4">kaleidoscope</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                A radical recovery solution for those ready to be free from drinking and the pain beneath it.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-text-secondary">
                <Phone className="w-5 h-5" />
                <a href="tel:1-800-RECOVER" className="hover:text-accent-light transition-colors">
                  1-800-RECOVER
                </a>
              </div>
              <div className="flex items-center space-x-3 text-text-secondary">
                <Mail className="w-5 h-5" />
                <a href="mailto:hello@kaleidoscope.recovery" className="hover:text-accent-light transition-colors">
                  hello@kaleidoscope.recovery
                </a>
              </div>
              <div className="flex items-start space-x-3 text-text-secondary">
                <MapPin className="w-5 h-5 mt-0.5" />
                <div>
                  <p>123 Recovery Lane</p>
                  <p>Austin, TX 78701</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-medium text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-text-secondary hover:text-accent-light transition-colors duration-300"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-medium text-white mb-6">Resources</h4>
            <ul className="space-y-3">
              {resources.map((resource) => (
                <li key={resource.name}>
                  <button
                    onClick={() => scrollToSection(resource.href)}
                    className="text-text-secondary hover:text-accent-light transition-colors duration-300"
                  >
                    {resource.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Social */}
          <div>
            <h4 className="text-lg font-medium text-white mb-6">Stay Connected</h4>
            <p className="text-text-secondary mb-4">
              Get weekly insights and inspiration delivered to your inbox.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-3 bg-surface border border-white/20 rounded-l-lg text-white placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent opacity-50 cursor-not-allowed"
                  disabled
                />
                <button className="px-6 py-3 bg-primary/50 text-white rounded-r-lg transition-all duration-300 transform hover:scale-95 cursor-not-allowed opacity-50" disabled>
                  Subscribe
                </button>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <p className="text-text-secondary mb-4">Follow us</p>
              <div className="flex space-x-4">
                <button
                  className="w-10 h-10 bg-surface rounded-full flex items-center justify-center text-text-secondary transition-all duration-300 transform hover:scale-95 hover:bg-primary/20 cursor-not-allowed opacity-50"
                  disabled
                >
                  <Facebook className="w-5 h-5" />
                </button>
                <button
                  className="w-10 h-10 bg-surface rounded-full flex items-center justify-center text-text-secondary transition-all duration-300 transform hover:scale-95 hover:bg-primary/20 cursor-not-allowed opacity-50"
                  disabled
                >
                  <Instagram className="w-5 h-5" />
                </button>
                <button
                  className="w-10 h-10 bg-surface rounded-full flex items-center justify-center text-text-secondary transition-all duration-300 transform hover:scale-95 hover:bg-primary/20 cursor-not-allowed opacity-50"
                  disabled
                >
                  <Twitter className="w-5 h-5" />
                </button>
                <button
                  className="w-10 h-10 bg-surface rounded-full flex items-center justify-center text-text-secondary transition-all duration-300 transform hover:scale-95 hover:bg-primary/20 cursor-not-allowed opacity-50"
                  disabled
                >
                  <Linkedin className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 bg-surface/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
            <div className="flex flex-wrap items-center justify-center lg:justify-start space-x-6 text-sm text-text-secondary">
              {legal.map((item, index) => (
                <React.Fragment key={item.name}>
                  <button 
                    className="transition-all duration-300 transform hover:scale-95 cursor-not-allowed opacity-50"
                    disabled
                  >
                    {item.name}
                  </button>
                  {index < legal.length - 1 && <span className="text-white/20">•</span>}
                </React.Fragment>
              ))}
            </div>

            <div className="text-sm text-text-secondary text-center lg:text-right">
              <p>© {currentYear} Kaleidoscope Recovery. All rights reserved.</p>
              <p className="mt-1">Licensed healthcare facility • HIPAA compliant</p>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;