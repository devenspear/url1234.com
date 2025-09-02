"use client";

import { motion } from "framer-motion";
import { Heart, Users, Lightbulb, Zap, Mail } from "lucide-react";
import { Header } from "~/components/layout/header";
import { Footer } from "~/components/layout/footer";

export default function HealersPage() {
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
                Join Our{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-400">
                  Healing Team
                </span>
              </h1>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
                We're looking for compassionate healers, therapists, and transformation 
                specialists to join our mission of creating lasting change.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Why Join Us */}
        <section className="section-padding bg-white">
          <div className="container-width">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6 gradient-text">
                Why Join Kaleidoscope?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Be part of a revolutionary approach to addiction recovery and family healing.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-2xl card-hover"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 gradient-text text-center">
                  Mission-Driven Work
                </h3>
                <p className="text-gray-600 leading-relaxed text-center">
                  Make a real difference in families' lives through our innovative 
                  trauma-informed approach to healing.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-2xl card-hover"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 gradient-text text-center">
                  Collaborative Environment
                </h3>
                <p className="text-gray-600 leading-relaxed text-center">
                  Work with a team of passionate healers and specialists who share 
                  your commitment to transformation.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-2xl card-hover"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Lightbulb className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 gradient-text text-center">
                  Innovative Methods
                </h3>
                <p className="text-gray-600 leading-relaxed text-center">
                  Learn and apply cutting-edge trauma-informed and spiritual healing 
                  techniques that create lasting change.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Positions Available */}
        <section className="section-padding bg-gray-50">
          <div className="container-width">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6 gradient-text">
                Open Positions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We're currently seeking qualified professionals for these roles.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-white p-8 rounded-2xl shadow-lg card-hover"
              >
                <h3 className="text-2xl font-bold mb-4 gradient-text">
                  Trauma-Informed Therapist
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Lead individual and family therapy sessions using our unique 
                  trauma-informed approach to addiction recovery.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-2">
                    <Zap className="w-5 h-5 text-purple-600" />
                    <span className="text-gray-700">Licensed clinical therapist</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Zap className="w-5 h-5 text-purple-600" />
                    <span className="text-gray-700">Trauma-informed training</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Zap className="w-5 h-5 text-purple-600" />
                    <span className="text-gray-700">Remote work available</span>
                  </div>
                </div>
                <button className="btn-primary w-full">
                  Apply Now
                </button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-white p-8 rounded-2xl shadow-lg card-hover"
              >
                <h3 className="text-2xl font-bold mb-4 gradient-text">
                  Spiritual Guide
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Facilitate spiritual practices and guide clients through their 
                  spiritual awakening journey as part of their healing process.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-2">
                    <Zap className="w-5 h-5 text-purple-600" />
                    <span className="text-gray-700">Spiritual counseling experience</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Zap className="w-5 h-5 text-purple-600" />
                    <span className="text-gray-700">Meditation/mindfulness training</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Zap className="w-5 h-5 text-purple-600" />
                    <span className="text-gray-700">Flexible schedule</span>
                  </div>
                </div>
                <button className="btn-primary w-full">
                  Apply Now
                </button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Application Form */}
        <section className="section-padding bg-white">
          <div className="container-width">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl mx-auto"
            >
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-6 gradient-text">
                  Apply to Join Our Team
                </h2>
                <p className="text-xl text-gray-600">
                  Tell us about your experience and why you'd like to join our 
                  mission of transformation.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-2xl">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-purple-600"
                        placeholder="Your first name"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-purple-600"
                        placeholder="Your last name"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-purple-600"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Position of Interest
                    </label>
                    <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-purple-600">
                      <option>Select a position</option>
                      <option>Trauma-Informed Therapist</option>
                      <option>Spiritual Guide</option>
                      <option>Family Systems Specialist</option>
                      <option>Transformation Coach</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Tell Us About Your Experience
                    </label>
                    <textarea
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-purple-600"
                      placeholder="Share your background, experience, and why you're interested in joining our team..."
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Why Kaleidoscope?
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-purple-600"
                      placeholder="What draws you to our mission and approach to healing?"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-primary w-full text-lg py-4"
                  >
                    Submit Application
                  </button>
                </form>
              </div>
            </motion.div>
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
                Questions About Joining Our Team?
              </h2>
              <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                We'd love to hear from you. Reach out to learn more about our 
                mission and how you can contribute to our healing work.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-200 hover:scale-105 flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  Contact Us
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-purple-600 transition-all duration-200">
                  Learn More
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
