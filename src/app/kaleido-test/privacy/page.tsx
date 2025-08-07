"use client";

import { motion } from "framer-motion";
import { Shield, Lock, Eye, Users, FileText } from "lucide-react";

export default function PrivacyPage() {
  const sections = [
    {
      title: "Information We Collect",
      icon: FileText,
      content: [
        {
          subtitle: "Information You Provide",
          items: [
            "Contact information (name, email, phone number)",
            "Assessment responses and questionnaire data",
            "Medical and mental health history (when provided)",
            "Communication preferences",
            "Payment information"
          ]
        },
        {
          subtitle: "Information Collected Automatically",
          items: [
            "Browser and device information",
            "IP address and location data",
            "Website usage patterns and analytics",
            "Cookies and similar tracking technologies"
          ]
        }
      ]
    },
    {
      title: "How We Use Your Information",
      icon: Eye,
      content: [
        {
          subtitle: "Primary Uses",
          items: [
            "Provide and improve our services",
            "Conduct assessments and program matching",
            "Communicate about programs and services",
            "Process payments and manage accounts",
            "Comply with legal obligations"
          ]
        },
        {
          subtitle: "Marketing Communications",
          items: [
            "Newsletter and educational content",
            "Program updates and announcements",
            "Relevant resources and information",
            "Event invitations and webinars"
          ]
        }
      ]
    },
    {
      title: "Data Protection",
      icon: Shield,
      content: [
        {
          subtitle: "Security Measures",
          items: [
            "SSL encryption for data transmission",
            "Secure cloud storage with encryption at rest",
            "Regular security audits and updates",
            "Access controls and authentication protocols"
          ]
        }
      ]
    },
    {
      title: "Information Sharing",
      icon: Users,
      content: [
        {
          subtitle: "We Do Not Sell Your Data",
          items: [
            "We do not sell, trade, or rent your personal information",
            "Information may only be shared with your explicit consent",
            "Service providers under strict confidentiality agreements",
            "When required by law or legal process",
            "To protect our rights or the safety of others"
          ]
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding spiritual-gradient text-white">
        <div className="container-width text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Lock className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Privacy{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-400">
                Policy
              </span>
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Your privacy and confidentiality are fundamental to our mission. 
              Learn how we protect and handle your personal information.
            </p>
            <p className="text-sm text-gray-300 mt-4">
              Last updated: January 2025
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold mb-8 gradient-text">
              Our Commitment to Your Privacy
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Kaleidoscope ("we," "our," or "us") is committed to protecting your privacy 
              and personal information. This Privacy Policy explains how we collect, use, 
              protect, and share information about you when you use our website and services.
            </p>
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-8 rounded-2xl border border-purple-100">
              <h3 className="text-2xl font-bold mb-4 gradient-text">
                HIPAA Compliance Promise
              </h3>
              <p className="text-lg text-gray-700">
                For clients enrolled in our programs, we maintain HIPAA-compliant practices 
                for all protected health information (PHI) with the highest standards of 
                confidentiality and security.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content Sections */}
      <section className="section-padding bg-gray-50">
        <div className="container-width">
          <div className="max-w-5xl mx-auto space-y-12">
            {sections.map((section, sectionIndex) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-lg"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                    <section.icon className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold gradient-text">
                    {section.title}
                  </h2>
                </div>
                
                <div className="space-y-6">
                  {section.content.map((subsection, subIndex) => (
                    <div key={subIndex}>
                      <h3 className="text-xl font-semibold mb-4 text-gray-800">
                        {subsection.subtitle}
                      </h3>
                      <ul className="space-y-2">
                        {subsection.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0" />
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HIPAA Compliance Details */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-8 text-center gradient-text">
              HIPAA Compliance
            </h2>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-100">
              <p className="text-lg text-gray-700 mb-6">
                For clients enrolled in our programs, we maintain HIPAA-compliant practices 
                for all protected health information (PHI). This includes:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-3 text-blue-800">Security Measures</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Secure data transmission and storage</li>
                    <li>• Limited access to authorized personnel only</li>
                    <li>• Audit trails for all PHI access</li>
                    <li>• Business associate agreements with third parties</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-3 text-blue-800">Your Rights</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Access your personal information</li>
                    <li>• Correct inaccurate information</li>
                    <li>• Request deletion of your data</li>
                    <li>• Opt out of marketing communications</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Cookies Policy */}
      <section className="section-padding bg-gray-50">
        <div className="container-width">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-6 gradient-text">
              Cookies Policy
            </h2>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <p className="text-lg text-gray-700 mb-6">
                We use cookies to enhance your experience and provide personalized content:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-3">Essential Cookies</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Remember your preferences</li>
                    <li>• Enable website features</li>
                    <li>• Provide security</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">Analytics Cookies</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Analyze website performance</li>
                    <li>• Understand user behavior</li>
                    <li>• Improve our services</li>
                  </ul>
                </div>
              </div>
              <p className="text-gray-600 mt-6">
                You can control cookies through your browser settings, though some features 
                may not work properly if cookies are disabled.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding spiritual-gradient text-white">
        <div className="container-width">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-8">
              Questions About Privacy?
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              If you have any questions about this Privacy Policy or how we handle 
              your information, please don't hesitate to contact us.
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4 text-gray-200">
                <div>
                  <strong>Email:</strong> privacy@kaleidoscope.life
                </div>
                <div>
                  <strong>Phone:</strong> 1-800-HEALING
                </div>
                <div>
                  <strong>Mail:</strong> [Physical Address TBD]
                </div>
              </div>
            </div>
            
            <p className="text-sm text-gray-300 mt-8">
              We may update this Privacy Policy periodically. We will notify you of 
              material changes and post the updated policy on our website.
            </p>
            
            <p className="text-xs text-gray-400 mt-4">
              This policy is designed to comply with HIPAA, GDPR, and other applicable privacy regulations.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}