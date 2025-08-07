"use client";

import { motion } from "framer-motion";
import { Shield, Lock, Eye, Users, FileText } from "lucide-react";
import { Header } from "~/components/layout/header";
import { Footer } from "~/components/layout/footer";

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="section-padding spiritual-gradient text-white">
          <div className="container-width text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl lg:text-6xl font-bold mb-6">
                Privacy{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-400">
                  Policy
                </span>
              </h1>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
                Your privacy and trust are sacred to us. Learn how we protect your 
                information and maintain the highest standards of confidentiality.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Privacy Content */}
        <section className="section-padding bg-white">
          <div className="container-width">
            <div className="max-w-4xl mx-auto space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-2xl"
              >
                <h2 className="text-3xl font-bold mb-6 gradient-text">
                  Our Commitment to Privacy
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  At Kaleidoscope, we understand that your healing journey is deeply 
                  personal. We are committed to protecting your privacy and maintaining 
                  the highest standards of confidentiality in everything we do.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  This Privacy Policy explains how we collect, use, and protect your 
                  information when you use our services, website, and transformation 
                  programs.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-2xl"
              >
                <h3 className="text-2xl font-bold mb-4 gradient-text">
                  Information We Collect
                </h3>
                <div className="space-y-4 text-gray-700">
                  <div>
                    <h4 className="font-semibold mb-2">Personal Information</h4>
                    <p>Name, email address, phone number, and other contact information you provide when you interact with our services.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Health Information</h4>
                    <p>Information about your health, treatment, and transformation journey that you choose to share with us.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Usage Information</h4>
                    <p>How you interact with our website, assessment tools, and digital resources.</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-2xl"
              >
                <h3 className="text-2xl font-bold mb-4 gradient-text">
                  How We Use Your Information
                </h3>
                <div className="space-y-4 text-gray-700">
                  <div>
                    <h4 className="font-semibold mb-2">To Provide Our Services</h4>
                    <p>We use your information to deliver our transformation programs, assessments, and healing support.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">To Communicate With You</h4>
                    <p>We may contact you about your account, our services, or to provide support and guidance.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">To Improve Our Services</h4>
                    <p>We analyze usage patterns to enhance our programs and create better healing experiences.</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-2xl"
              >
                <h3 className="text-2xl font-bold mb-4 gradient-text">
                  How We Protect Your Information
                </h3>
                <div className="space-y-4 text-gray-700">
                  <div>
                    <h4 className="font-semibold mb-2">HIPAA Compliance</h4>
                    <p>We maintain strict HIPAA compliance standards to protect your health information and ensure your privacy.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Secure Technology</h4>
                    <p>We use industry-standard encryption and security measures to protect your data from unauthorized access.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Limited Access</h4>
                    <p>Only authorized personnel have access to your information, and all access is logged and monitored.</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-2xl"
              >
                <h3 className="text-2xl font-bold mb-4 gradient-text">
                  Your Rights and Choices
                </h3>
                <div className="space-y-4 text-gray-700">
                  <div>
                    <h4 className="font-semibold mb-2">Access Your Information</h4>
                    <p>You have the right to access, correct, or delete your personal information at any time.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Control Communications</h4>
                    <p>You can choose how and when we communicate with you, including opting out of certain communications.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Data Portability</h4>
                    <p>You can request a copy of your data in a portable format for your own use.</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-2xl"
              >
                <h3 className="text-2xl font-bold mb-4 gradient-text">
                  Contact Us
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  If you have any questions about this Privacy Policy or our privacy 
                  practices, please contact us:
                </p>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Email:</strong> privacy@kaleidoscope.life</p>
                  <p><strong>Phone:</strong> 1-800-HEALING</p>
                  <p><strong>Address:</strong> [Your Business Address]</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="section-padding bg-gray-50">
          <div className="container-width">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6 gradient-text">
                Your Privacy is Sacred
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We maintain the highest standards of privacy and security to protect 
                your healing journey.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 gradient-text">HIPAA Compliant</h3>
                <p className="text-gray-600">We maintain strict HIPAA compliance to protect your health information.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 gradient-text">Secure Technology</h3>
                <p className="text-gray-600">Industry-standard encryption and security measures protect your data.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 gradient-text">Transparent Practices</h3>
                <p className="text-gray-600">We're open about how we use and protect your information.</p>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
