"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const navigation = [
  { name: "Home", href: "/kaleido-test" },
  { name: "About", href: "/kaleido-test/about" },
  { name: "The Method", href: "/kaleido-test/method" },
  { name: "Assessment", href: "/kaleido-test/assessment" },
  { name: "Healers", href: "/kaleido-test/healers" },
  { name: "Insights", href: "/kaleido-test/newsletter" },
  { name: "FAQ", href: "/kaleido-test/faq" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Element;
      if (mobileMenuOpen && !target.closest('.mobile-menu-container') && !target.closest('.mobile-menu-button')) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [mobileMenuOpen]);

  // Reset menu state on route change
  useEffect(() => {
    const handleRouteChange = () => {
      setMobileMenuOpen(false);
    };

    // Listen for route changes
    window.addEventListener('popstate', handleRouteChange);
    return () => window.removeEventListener('popstate', handleRouteChange);
  }, []);

  const handleMenuToggle = () => {
    console.log('Menu toggle clicked, current state:', mobileMenuOpen);
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleMenuClose = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="bg-white/95 backdrop-blur-md border-b border-purple-100 sticky top-0 z-50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:p-6 lg:px-8">
        {/* Logo */}
        <Link href="/kaleido-test" className="flex items-center" onClick={handleMenuClose}>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2 lg:space-x-3"
          >
            <img 
              src="/kaleidoscope-logo.svg" 
              alt="Kaleidoscope Logo" 
              className="w-10 h-10 lg:w-12 lg:h-12"
            />
            <span className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Kaleidoscope
            </span>
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-lg font-semibold leading-6 text-gray-700 hover:text-purple-600 transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden lg:flex">
          <Link
            href="/kaleido-test/assessment"
            className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transition-all duration-200 hover:scale-105"
          >
            Start Assessment
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="mobile-menu-button inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500 min-h-[44px] min-w-[44px]"
            onClick={handleMenuToggle}
            aria-label={mobileMenuOpen ? "Close mobile menu" : "Open mobile menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence mode="wait">
        {mobileMenuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden mobile-menu-container"
          >
            {/* Backdrop */}
            <div 
              className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm"
              onClick={handleMenuClose}
            />
            
            {/* Menu panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 right-0 z-50 w-full max-w-sm overflow-y-auto bg-white shadow-xl"
            >
              <div className="flex items-center justify-between p-4 border-b border-gray-200">
                <Link 
                  href="/kaleido-test" 
                  className="flex items-center space-x-2"
                  onClick={handleMenuClose}
                >
                  <img 
                    src="/kaleidoscope-logo.svg" 
                    alt="Kaleidoscope Logo" 
                    className="w-10 h-10"
                  />
                  <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                    Kaleidoscope
                  </span>
                </Link>
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500 min-h-[44px] min-w-[44px]"
                  onClick={handleMenuClose}
                  aria-label="Close mobile menu"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              
              <div className="px-4 py-6">
                <div className="space-y-1">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block px-3 py-4 text-xl font-semibold text-gray-900 hover:bg-purple-50 hover:text-purple-600 rounded-lg transition-colors min-h-[44px] flex items-center"
                      onClick={handleMenuClose}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <Link
                    href="/kaleido-test/assessment"
                    className="block w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-4 rounded-full font-semibold text-center hover:shadow-lg transition-all duration-200 min-h-[44px] flex items-center justify-center"
                    onClick={handleMenuClose}
                  >
                    Start Assessment
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}