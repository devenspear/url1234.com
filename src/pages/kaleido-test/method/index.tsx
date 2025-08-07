"use client";

import { motion } from "framer-motion";
import { VideoPlaceholder } from "~/components/ui/video-placeholder";
import { ArrowRight, CheckCircle, Users, Heart, Smartphone } from "lucide-react";
import Link from "next/link";
import { Header } from "~/components/layout/header";
import { Footer } from "~/components/layout/footer";

export default function MethodPage() {
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
                The Kaleidoscope{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-400">
                  Method
                </span>
              </h1>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
                A three-phase journey that transforms not just behavior, but the very 
                desire to drink. This isn't about willpower - it's about healing.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Method Overview */}
        <section className="section-padding bg-white">
          <div className="container-width">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6 gradient-text">
                Three Phases of Transformation
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our method is designed to create lasting change by addressing the root 
                causes of addiction, not just the symptoms.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Phase 1 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-2xl card-hover"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-2xl font-bold">1</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 gradient-text">
                  Awakening
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  The first phase focuses on understanding the true nature of addiction. 
                  We help you recognize that addiction is a response to pain, not a 
                  moral failing.
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>Trauma assessment and understanding</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>Spiritual foundation building</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>Family system evaluation</span>
                  </li>
                </ul>
              </motion.div>

              {/* Phase 2 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-2xl card-hover"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-2xl font-bold">2</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 gradient-text">
                  Transformation
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  The core healing phase where we address the root causes of addiction 
                  through trauma-informed therapy and spiritual practices.
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>Deep trauma healing</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>Spiritual awakening practices</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>Family system healing</span>
                  </li>
                </ul>
              </motion.div>

              {/* Phase 3 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-2xl card-hover"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-2xl font-bold">3</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 gradient-text">
                  Integration
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  The final phase focuses on integrating your transformation into daily 
                  life and building lasting connections and support systems.
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>Life integration practices</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>Community building</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>Ongoing support systems</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Key Principles */}
        <section className="section-padding bg-gray-50">
          <div className="container-width">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6 gradient-text">
                Our Core Principles
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                These principles guide every aspect of our transformation method.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-white p-8 rounded-2xl shadow-lg card-hover"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 gradient-text text-center">
                  Trauma-Informed Healing
                </h3>
                <p className="text-gray-600 leading-relaxed text-center">
                  We understand that addiction is often a response to trauma. Our approach 
                  addresses the root causes of pain and disconnection, not just the symptoms.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-white p-8 rounded-2xl shadow-lg card-hover"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 gradient-text text-center">
                  Family-Centered Approach
                </h3>
                <p className="text-gray-600 leading-relaxed text-center">
                  We heal the entire family system, recognizing that addiction affects 
                  everyone. Transformation happens together.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="bg-white p-8 rounded-2xl shadow-lg card-hover"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Smartphone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 gradient-text text-center">
                  Accessible Technology
                </h3>
                <p className="text-gray-600 leading-relaxed text-center">
                  Our method is delivered through innovative technology that makes 
                  transformation accessible to everyone, anywhere.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="bg-white p-8 rounded-2xl shadow-lg card-hover"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 gradient-text text-center">
                  Evidence-Based Results
                </h3>
                <p className="text-gray-600 leading-relaxed text-center">
                  Our method combines spiritual wisdom with evidence-based practices 
                  to create measurable, lasting transformation.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Video Section */}
        <section className="section-padding bg-white">
          <div className="container-width">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold mb-6 gradient-text">
                See Our Method in Action
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Watch these videos to understand how our three-phase method creates 
                lasting transformation.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <VideoPlaceholder 
                title="Phase 1: Awakening"
                duration="8:45"
                className="shadow-xl"
              />
              <VideoPlaceholder 
                title="Phase 2: Transformation"
                duration="12:30"
                className="shadow-xl"
              />
              <VideoPlaceholder 
                title="Phase 3: Integration"
                duration="10:15"
                className="shadow-xl"
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding spiritual-gradient text-white">
          <div className="container-width text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-6">
                Ready to Begin Your{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-400">
                  Transformation?
                </span>
              </h2>
              <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                Join thousands of families who have found lasting healing through 
                the Kaleidoscope method.
              </p>
              <Link href="/kaleido-test/assessment" className="inline-flex items-center gap-2 bg-white text-purple-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-200 hover:scale-105">
                Start Your Assessment
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
