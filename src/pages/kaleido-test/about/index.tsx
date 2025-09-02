"use client";

import { motion } from "framer-motion";
import { Heart, Users, Lightbulb, Zap, Mail } from "lucide-react";
import { Header } from "~/components/layout/header";
import { Footer } from "~/components/layout/footer";

export default function AboutPage() {
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
                About{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-400">
                  Kaleidoscope
                </span>
              </h1>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
                We're not just another recovery program. We're a transformation movement 
                that understands the deep roots of addiction and healing.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="section-padding bg-white">
          <div className="container-width">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl font-bold mb-6 gradient-text">
                  Our Mission
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  We believe that addiction isn't a moral failing or a lack of willpower. 
                  It's a response to pain, trauma, and disconnection. Our mission is to 
                  provide fast, personal, and permanent transformation for alcoholics and 
                  their families.
                </p>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  We don't just help people stop drinking - we help them stop wanting to. 
                  Through our unique blend of trauma-informed healing, spiritual practices, 
                  and evidence-based methods, we create lasting change where other programs 
                  have failed.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <Heart className="w-5 h-5 text-purple-600" />
                    <span className="text-gray-700">Trauma-Informed</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Zap className="w-5 h-5 text-purple-600" />
                    <span className="text-gray-700">Evidence-Based</span>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-2xl"
              >
                <h3 className="text-2xl font-bold mb-4 gradient-text">
                  Why We're Different
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center mt-1">
                      <span className="text-white text-sm font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Trauma-Informed Approach</h4>
                      <p className="text-gray-600">We understand that addiction is often a response to trauma and pain.</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center mt-1">
                      <span className="text-white text-sm font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Spiritual Foundation</h4>
                      <p className="text-gray-600">We integrate spiritual practices that honor each person's unique journey.</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center mt-1">
                      <span className="text-white text-sm font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Family-Centered</h4>
                      <p className="text-gray-600">We heal the entire family system, not just the individual.</p>
                    </div>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="section-padding bg-gray-50">
          <div className="container-width">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6 gradient-text">
                Our Team
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Meet the healers, therapists, and transformation specialists who make 
                Kaleidoscope's mission possible.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Team Member 1 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg card-hover"
              >
                <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 gradient-text">Dr. Sarah Chen</h3>
                <p className="text-purple-600 font-semibold mb-4">Lead Transformation Specialist</p>
                <p className="text-gray-600 leading-relaxed">
                  With over 15 years in trauma therapy and addiction recovery, Dr. Chen 
                  brings a unique blend of clinical expertise and spiritual wisdom to our team.
                </p>
              </motion.div>

              {/* Team Member 2 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white p-8 rounded-2xl shadow-lg card-hover"
              >
                <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 gradient-text">Michael Rodriguez</h3>
                <p className="text-purple-600 font-semibold mb-4">Family Systems Therapist</p>
                <p className="text-gray-600 leading-relaxed">
                  Michael specializes in healing family dynamics and creating lasting 
                  transformation for entire family systems affected by addiction.
                </p>
              </motion.div>

              {/* Team Member 3 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white p-8 rounded-2xl shadow-lg card-hover"
              >
                <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Lightbulb className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 gradient-text">Aisha Thompson</h3>
                <p className="text-purple-600 font-semibold mb-4">Spiritual Guide</p>
                <p className="text-gray-600 leading-relaxed">
                  Aisha brings deep spiritual wisdom and practices that honor each 
                  individual's unique path to healing and transformation.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="section-padding bg-white">
          <div className="container-width text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-6 gradient-text">
                Ready to Begin Your Transformation?
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Join thousands of families who have found lasting healing and transformation 
                through Kaleidoscope's unique approach.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="btn-primary flex items-center gap-2 text-lg px-8 py-4">
                  <Mail className="w-5 h-5" />
                  Contact Our Team
                </button>
                <button className="btn-secondary text-lg px-8 py-4">
                  Learn About Our Method
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
