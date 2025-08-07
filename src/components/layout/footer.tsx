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
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/kaleidoscope-logo.svg" 
                alt="Kaleidoscope Logo" 
                className="w-30 h-30 brightness-0 invert"
              />
              <span className="text-xl font-bold">Kaleidoscope</span>
            </div>
            <p className="text-gray-300 max-w-md leading-relaxed">
              Fast, personal, and permanent transformation for alcoholics and their families. 
              It's not about not drinking, it's about not wanting to.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-gray-300">
              <p>connect@kaleidoscope.life</p>
              <p>1-800-HEALING</p>
              <p>Available 24/7 for support</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 Kaleidoscope. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/kaleido-test/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/kaleido-test/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}