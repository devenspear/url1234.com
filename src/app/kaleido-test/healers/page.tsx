"use client";

import { motion } from "framer-motion";
import { Heart, Users, Lightbulb, Zap, Award, ArrowRight, Mail } from "lucide-react";

export default function HealersPage() {
  const idealProfile = [
    {
      title: "Trauma-Informed Practitioners",
      description: "Understanding that addiction is rooted in pain",
      icon: Heart,
    },
    {
      title: "Spiritual Guides",
      description: "Comfortable with both ancient wisdom and modern therapy",
      icon: Lightbulb,
    },
    {
      title: "Compassionate Warriors",
      description: "Willing to go where others won't to create healing",
      icon: Users,
    },
    {
      title: "Growth-Minded",
      description: "Committed to continuous learning and evolution",
      icon: Zap,
    },
    {
      title: "Mission-Driven",
      description: "More interested in transformation than transactions",
      icon: Award,
    },
  ];

  const benefits = [
    {
      category: "Professional Growth",
      items: [
        "Train in cutting-edge trauma healing modalities",
        "Access to continuous education and development",
        "Collaboration with leading transformation experts",
        "Career advancement in a growing field"
      ]
    },
    {
      category: "Personal Fulfillment",
      items: [
        "Make real, lasting impact on lives",
        "Be part of revolutionary change in recovery",
        "Work with a mission-aligned team",
        "Transform lives instead of managing symptoms"
      ]
    },
    {
      category: "Financial Rewards",
      items: [
        "Competitive compensation packages",
        "Performance bonuses tied to client outcomes",
        "Equity opportunities for key team members",
        "Professional development funding"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding spiritual-gradient text-white relative overflow-hidden">
        <div className="container-width relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Join the{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-400">
                Healing Revolution
              </span>
            </h1>
            <h2 className="text-2xl lg:text-3xl font-light mb-8 text-gray-200">
              We're Not Building a Team. We're Building a Movement.
            </h2>
            <p className="text-xl text-gray-200 leading-relaxed">
              Be part of revolutionizing the addiction recovery industry and help us 
              create lasting transformation where others have failed.
            </p>
          </motion.div>
        </div>
        
        {/* Background elements */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-white/5 rounded-full animate-float" />
        <div className="absolute bottom-20 left-10 w-24 h-24 bg-purple-400/20 rounded-full animate-float" style={{ animationDelay: "1s" }} />
      </section>

      {/* Industry Challenge */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-8 gradient-text">
              The Industry Challenge
            </h2>
            <div className="bg-gradient-to-r from-red-50 to-orange-50 p-8 rounded-2xl border border-red-100 mb-8">
              <h3 className="text-3xl font-bold text-red-800 mb-4">90% Failure Rate</h3>
              <p className="text-lg text-red-700 leading-relaxed">
                The addiction recovery industry is broken. With a 90% failure rate and a 
                $53 billion market that keeps growing, traditional methods are failing the 
                people who need help most.
              </p>
            </div>
            <p className="text-xl text-gray-600 leading-relaxed">
              We're not just offering jobs - we're offering the chance to be part of a 
              transformation revolution that addresses root causes instead of symptoms.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Ideal Healer Profile */}
      <section className="section-padding bg-gray-50">
        <div className="container-width">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 gradient-text">
              Who We're Looking For
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We seek healers who understand that addiction is rooted in pain and 
              are ready to revolutionize how we approach transformation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {idealProfile.map((profile, index) => (
              <motion.div
                key={profile.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-lg card-hover text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <profile.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 gradient-text">
                  {profile.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {profile.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Experience Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-16 max-w-4xl mx-auto"
          >
            <h3 className="text-3xl font-bold mb-8 text-center gradient-text">
              Experience We Value
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2" />
                  <span className="text-gray-700">Trauma therapy and somatic healing</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2" />
                  <span className="text-gray-700">Plant medicine integration</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2" />
                  <span className="text-gray-700">Addiction counseling with non-12-step approaches</span>
                </li>
              </ul>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2" />
                  <span className="text-gray-700">Spiritual counseling and guidance</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2" />
                  <span className="text-gray-700">Family systems therapy</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2" />
                  <span className="text-gray-700">Breathwork, meditation, and embodiment practices</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Network Benefits */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 gradient-text">
              Network Benefits
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join a community of healers dedicated to transformation and receive 
              unparalleled support for your personal and professional growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.category}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-2xl"
              >
                <h3 className="text-2xl font-bold mb-6 gradient-text">
                  {benefit.category}
                </h3>
                <ul className="space-y-3">
                  {benefit.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding spiritual-gradient text-white">
        <div className="container-width">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-8">
              Join Our Movement
            </h2>
            <p className="text-xl text-gray-200 leading-relaxed mb-12">
              If you're ready to be part of the healing revolution, we want to hear from you. 
              This isn't just a career change - it's a calling to transform lives and 
              revolutionize an industry.
            </p>
            
            {/* Application Form */}
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-6">Apply to Join Our Team</h3>
              <div className="space-y-4 mb-6">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-4 py-3 rounded-full bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:border-white/50"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 rounded-full bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:border-white/50"
                />
                <input
                  type="text"
                  placeholder="Current Role/Specialization"
                  className="w-full px-4 py-3 rounded-full bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:border-white/50"
                />
                <textarea
                  rows={4}
                  placeholder="Tell us about your passion for healing and transformation..."
                  className="w-full px-4 py-3 rounded-2xl bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:border-white/50 resize-none"
                />
              </div>
              
              <button className="btn-primary bg-white text-purple-600 hover:bg-gray-100 w-full text-lg py-4">
                <Mail className="w-5 h-5 mr-2" />
                Submit Application
              </button>
              
              <p className="text-sm text-gray-300 mt-4">
                Applications sent to connect@kaleidoscope.life
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}