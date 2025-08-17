"use client";

import { motion } from "framer-motion";
import { FileText, Scale, Users } from "lucide-react";
import { Header } from "~/components/layout/header";
import { Footer } from "~/components/layout/footer";

export default function TermsPage() {
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
                Terms of{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-400">
                  Service
                </span>
              </h1>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
                Understanding our commitment to your transformation journey and the 
                terms that govern our relationship and services.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Terms Content */}
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
                  Our Commitment to Your Transformation
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  At Kaleidoscope, we are dedicated to providing you with the highest 
                  quality transformation services. These Terms of Service outline the 
                  agreement between you and Kaleidoscope regarding your use of our 
                  services, programs, and resources.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  By using our services, you agree to these terms and acknowledge that 
                  you have read, understood, and accept them in full.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-2xl"
              >
                <h3 className="text-2xl font-bold mb-4 gradient-text">
                  Our Services
                </h3>
                <div className="space-y-4 text-gray-700">
                  <div>
                    <h4 className="font-semibold mb-2">Transformation Programs</h4>
                    <p>We provide trauma-informed healing and transformation services designed to address the root causes of addiction and create lasting change.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Assessment Tools</h4>
                    <p>Our assessment tools help identify your unique needs and create personalized transformation plans.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Support Resources</h4>
                    <p>We offer educational content, community support, and ongoing guidance throughout your transformation journey.</p>
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
                  Your Responsibilities
                </h3>
                <div className="space-y-4 text-gray-700">
                  <div>
                    <h4 className="font-semibold mb-2">Honest Participation</h4>
                    <p>You agree to participate honestly and openly in our programs, providing accurate information about your situation and needs.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Commitment to Healing</h4>
                    <p>You commit to actively engage in your transformation process and follow the guidance provided by our team.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Respectful Communication</h4>
                    <p>You agree to communicate respectfully with our team and other participants, maintaining a supportive environment.</p>
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
                  Our Guarantee and Limitations
                </h3>
                <div className="space-y-4 text-gray-700">
                  <div>
                    <h4 className="font-semibold mb-2">Transformation Guarantee</h4>
                    <p>We guarantee your transformation or your money back. This guarantee applies when you complete our full program as designed.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Individual Results</h4>
                    <p>While we provide proven methods, individual results may vary based on personal circumstances and commitment to the process.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Not Medical Advice</h4>
                    <p>Our services are not a substitute for medical treatment. Always consult with healthcare professionals for medical concerns.</p>
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
                  Payment and Refunds
                </h3>
                <div className="space-y-4 text-gray-700">
                  <div>
                    <h4 className="font-semibold mb-2">Payment Terms</h4>
                    <p>Payment is due at the time of service enrollment. We accept various payment methods and may offer payment plans.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Refund Policy</h4>
                    <p>We offer a 30-day money-back guarantee for new clients. Refunds are processed within 5-7 business days.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Transformation Guarantee</h4>
                    <p>If you complete our full program and don't experience transformation, we will provide a full refund or additional support.</p>
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
                  Privacy and Confidentiality
                </h3>
                <div className="space-y-4 text-gray-700">
                  <div>
                    <h4 className="font-semibold mb-2">HIPAA Compliance</h4>
                    <p>We maintain strict HIPAA compliance and protect your personal and health information according to federal regulations.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Confidentiality</h4>
                    <p>All information shared during our sessions is kept confidential, except where required by law or with your explicit consent.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Data Security</h4>
                    <p>We use industry-standard security measures to protect your information from unauthorized access or disclosure.</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-2xl"
              >
                <h3 className="text-2xl font-bold mb-4 gradient-text">
                  Limitation of Liability
                </h3>
                <div className="space-y-4 text-gray-700">
                  <div>
                    <h4 className="font-semibold mb-2">Service Limitations</h4>
                    <p>Our liability is limited to the amount paid for our services. We are not liable for indirect, incidental, or consequential damages.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Force Majeure</h4>
                    <p>We are not liable for delays or failures due to circumstances beyond our reasonable control, including natural disasters or technical issues.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Third-Party Services</h4>
                    <p>We are not responsible for the content or services provided by third-party websites or services that may be linked from our site.</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-2xl"
              >
                <h3 className="text-2xl font-bold mb-4 gradient-text">
                  Changes to Terms
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We may update these Terms of Service from time to time. We will notify 
                  you of any material changes via email or through our website. Your 
                  continued use of our services after such changes constitutes acceptance 
                  of the new terms.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-2xl"
              >
                <h3 className="text-2xl font-bold mb-4 gradient-text">
                  Contact Us
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  If you have any questions about these Terms of Service or need 
                  clarification on any points, please contact us:
                </p>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Email:</strong> legal@kaleidoscope.life</p>
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
                Your Trust is Our Foundation
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We maintain transparent, ethical practices and clear communication 
                to build lasting trust with our community.
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
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 gradient-text">Clear Terms</h3>
                <p className="text-gray-600">Transparent, easy-to-understand terms that protect both you and us.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Scale className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 gradient-text">Fair Practices</h3>
                <p className="text-gray-600">Equitable terms that ensure a balanced relationship between all parties.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 gradient-text">Community Focused</h3>
                <p className="text-gray-600">Terms designed to support and protect our healing community.</p>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}


