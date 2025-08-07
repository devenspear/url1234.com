"use client";

import { motion } from "framer-motion";
import { Mail, Heart, Users, Lightbulb } from "lucide-react";
import { Header } from "~/components/layout/header";
import { Footer } from "~/components/layout/footer";

export default function NewsletterPage() {
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
                Transformation{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-400">
                  Insights
                </span>
              </h1>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
                Stay connected with the latest insights, stories, and wisdom from 
                our healing community.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="section-padding bg-white">
          <div className="container-width">
            <div className="max-w-2xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl font-bold mb-6 gradient-text">
                  Join Our Community
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  Receive weekly insights, healing stories, and transformation wisdom 
                  delivered directly to your inbox.
                </p>

                <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-2xl">
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="First Name"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-purple-600"
                      />
                      <input
                        type="text"
                        placeholder="Last Name"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-purple-600"
                      />
                    </div>
                    <input
                      type="email"
                      placeholder="Your Email Address"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-purple-600"
                    />
                    <button
                      type="submit"
                      className="btn-primary w-full text-lg py-4"
                    >
                      Subscribe to Insights
                    </button>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Featured Articles */}
        <section className="section-padding bg-gray-50">
          <div className="container-width">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6 gradient-text">
                Latest Insights
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover the latest wisdom and stories from our transformation community.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-lg card-hover"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 gradient-text">
                  The Science of Trauma and Healing
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Understanding how trauma affects the brain and body, and the 
                  revolutionary approaches to healing that are changing lives.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">5 min read</span>
                  <button className="text-purple-600 font-semibold hover:text-purple-700">
                    Read More →
                  </button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white p-6 rounded-2xl shadow-lg card-hover"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 gradient-text">
                  Family Healing: A Complete Guide
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  How to heal family systems affected by addiction and create 
                  lasting transformation for everyone involved.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">8 min read</span>
                  <button className="text-purple-600 font-semibold hover:text-purple-700">
                    Read More →
                  </button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white p-6 rounded-2xl shadow-lg card-hover"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mb-4">
                  <Lightbulb className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 gradient-text">
                  Spiritual Practices for Recovery
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Ancient wisdom meets modern science in these powerful spiritual 
                  practices that accelerate healing and transformation.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">6 min read</span>
                  <button className="text-purple-600 font-semibold hover:text-purple-700">
                    Read More →
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Community Stories */}
        <section className="section-padding bg-white">
          <div className="container-width">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6 gradient-text">
                Stories of Transformation
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Real stories from real families who have experienced the power of 
                the Kaleidoscope method.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-2xl"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold">S</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Sarah M.</h4>
                    <p className="text-gray-600">Mother of 2</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed italic">
                  "Kaleidoscope didn't just help my husband stop drinking - it helped 
                  our entire family heal. The trauma-informed approach made all the 
                  difference. We're stronger than ever."
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-2xl"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold">M</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Michael R.</h4>
                    <p className="text-gray-600">Father of 3</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed italic">
                  "After 15 years of struggling, I finally found a method that 
                  addressed the root causes of my addiction. The spiritual practices 
                  gave me the strength I never knew I had."
                </p>
              </motion.div>
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
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-200 hover:scale-105 flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  Start Your Assessment
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-purple-600 transition-all duration-200">
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
