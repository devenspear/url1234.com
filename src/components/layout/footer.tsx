import Link from "next/link";
import { Instagram, Youtube, Linkedin } from "lucide-react";

const quickLinks = [
  { name: "About", href: "/kaleido-test/about" },
  { name: "The Method", href: "/kaleido-test/method" },
  { name: "Assessment", href: "/kaleido-test/assessment" },
  { name: "Healers", href: "/kaleido-test/healers" },
  { name: "Contact", href: "/kaleido-test/contact" },
  { name: "Privacy", href: "/kaleido-test/privacy" },
];

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 lg:py-16 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-1 sm:col-span-2">
            <div className="flex items-center space-x-2 lg:space-x-3 mb-4">
              <img 
                src="/kaleidoscope-logo.svg" 
                alt="Kaleidoscope Logo" 
                className="w-8 h-8 lg:w-10 lg:h-10 brightness-0 invert"
              />
              <span className="text-lg lg:text-xl font-bold">Kaleidoscope</span>
            </div>
            <p className="text-gray-300 max-w-md leading-relaxed text-sm lg:text-base">
              Fast, personal, and permanent transformation for alcoholics and their families. 
              It's not about not drinking, it's about not wanting to.
            </p>
            <div className="flex space-x-4 mt-6">
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors p-2 min-h-[44px] min-w-[44px] flex items-center justify-center"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="h-5 w-5 lg:h-6 lg:w-6" />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors p-2 min-h-[44px] min-w-[44px] flex items-center justify-center"
                aria-label="Follow us on YouTube"
              >
                <Youtube className="h-5 w-5 lg:h-6 lg:w-6" />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors p-2 min-h-[44px] min-w-[44px] flex items-center justify-center"
                aria-label="Follow us on LinkedIn"
              >
                <Linkedin className="h-5 w-5 lg:h-6 lg:w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base lg:text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm lg:text-base block py-1"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-base lg:text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-gray-300 text-sm lg:text-base">
              <p>connect@kaleidoscope.life</p>
              <p>1-800-HEALING</p>
              <p>Available 24/7 for support</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 lg:mt-12 pt-6 lg:pt-8 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <p className="text-gray-400 text-xs lg:text-sm text-center sm:text-left">
            © 2025 Kaleidoscope. All rights reserved.
          </p>
          <div className="flex space-x-4 lg:space-x-6">
            <Link 
              href="/kaleido-test/privacy" 
              className="text-gray-400 hover:text-white text-xs lg:text-sm transition-colors py-1"
            >
              Privacy Policy
            </Link>
            <Link 
              href="/kaleido-test/terms" 
              className="text-gray-400 hover:text-white text-xs lg:text-sm transition-colors py-1"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}