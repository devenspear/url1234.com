"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { Header } from "~/components/layout/header";
import { Footer } from "~/components/layout/footer";

export default function FAQPage() {
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
                Frequently Asked{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-400">
                  Questions
                </span>
              </h1>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
                Find answers to common questions about the Kaleidoscope method and 
                our approach to transformation.
              </p>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section-padding bg-white">
          <div className="container-width">
            <div className="max-w-4xl mx-auto space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-2xl"
              >
                <h3 className="text-2xl font-bold mb-4 gradient-text">
                  How is Kaleidoscope different from other recovery programs?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Kaleidoscope takes a trauma-informed, family-centered approach that 
                  addresses the root causes of addiction rather than just the symptoms. 
                  We combine evidence-based therapy with spiritual practices to create 
                  lasting transformation where other programs have failed.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-2xl"
              >
                <h3 className="text-2xl font-bold mb-4 gradient-text">
                  What makes your approach "trauma-informed"?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  We understand that addiction is often a response to trauma and pain. 
                  Our method helps clients identify and heal the underlying trauma that 
                  drives addictive behaviors, rather than just focusing on abstinence.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-2xl"
              >
                <h3 className="text-2xl font-bold mb-4 gradient-text">
                  How long does the transformation process take?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Our three-phase method typically takes 6-12 months for complete 
                  transformation, but many clients experience significant changes within 
                  the first few weeks. The timeline varies based on individual needs 
                  and family dynamics.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-2xl"
              >
                <h3 className="text-2xl font-bold mb-4 gradient-text">
                  Do you work with families, not just individuals?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Yes! We believe that addiction affects entire family systems, so we 
                  work with families together. Our approach helps heal family dynamics 
                  and creates lasting change for everyone involved.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-2xl"
              >
                <h3 className="text-2xl font-bold mb-4 gradient-text">
                  What role does spirituality play in your method?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  We integrate spiritual practices that honor each person's unique 
                  journey. This might include meditation, mindfulness, or other 
                  practices that help connect with deeper meaning and purpose.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-2xl"
              >
                <h3 className="text-2xl font-bold mb-4 gradient-text">
                  Is your program covered by insurance?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  We work with many major insurance providers. Our team can help you 
                  verify your coverage and explore payment options that work for your 
                  family's needs.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-2xl"
              >
                <h3 className="text-2xl font-bold mb-4 gradient-text">
                  What if someone isn't ready to change?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  We understand that change can be scary. Our assessment process helps 
                  determine readiness, and we offer resources and support for families 
                  even when someone isn't ready to begin their transformation journey.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-2xl"
              >
                <h3 className="text-2xl font-bold mb-4 gradient-text">
                  How do I get started?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Start by taking our interactive assessment to see if our method is 
                  right for you. Then schedule a consultation with our team to discuss 
                  your specific needs and create a personalized transformation plan.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="section-padding spiritual-gradient text-white">
          <div className="container-width text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-6">
                Still Have Questions?
              </h2>
              <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                Our team is here to help. Reach out to learn more about how 
                Kaleidoscope can support your family's healing journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-200 hover:scale-105 flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  Contact Our Team
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-purple-600 transition-all duration-200">
                  Start Assessment
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
