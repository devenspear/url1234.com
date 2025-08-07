"use client";

import { motion } from "framer-motion";
import { VideoPlaceholder } from "~/components/ui/video-placeholder";
import { Download, BookOpen, ArrowRight, Heart, Zap, Shield } from "lucide-react";
import Link from "next/link";
import { Header } from "~/components/layout/header";
import { Footer } from "~/components/layout/footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <div>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center spiritual-gradient overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container-width relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white"
            >
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
                It's Not About{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-400">
                  Not Drinking
                </span>
              </h1>
              <h2 className="text-2xl lg:text-3xl font-light mb-8 text-gray-200">
                It's About Not Wanting To.
              </h2>
              <p className="text-xl mb-12 text-gray-200 max-w-2xl leading-relaxed">
                Kaleidoscope delivers fast, personal, and permanent transformation 
                for alcoholics and their families through trauma-informed healing.
              </p>
              
              {/* Primary CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button className="btn-primary flex items-center gap-2 text-lg px-8 py-4">
                  <Download className="w-5 h-5" />
                  Download "Smashed: Sober"
                </button>
                <button className="btn-secondary bg-white/10 border-white/30 text-white hover:bg-white hover:text-gray-900 flex items-center gap-2 text-lg px-8 py-4">
                  <BookOpen className="w-5 h-5" />
                  Get Hardcover on Amazon
                </button>
              </div>
              
              {/* Email Capture */}
              <div className="flex gap-2 max-w-md">
                <input
                  type="email"
                  placeholder="Enter your email for transformation insights"
                  className="flex-1 px-4 py-3 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:border-white/50"
                />
                <button className="bg-white text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                  Join
                </button>
              </div>
            </motion.div>
            
            {/* Right Column - Video */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <VideoPlaceholder 
                title="Smashed: Sober (with a twist)"
                duration="12:34"
                className="shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
        
        {/* Floating elements */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-white/5 rounded-full animate-float" />
        <div className="absolute bottom-20 left-10 w-24 h-24 bg-purple-400/20 rounded-full animate-float" style={{ animationDelay: "1s" }} />
      </section>

      {/* Key Messaging Section */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* You're Not Broken */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-blue-50 card-hover"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 gradient-text">
                You're Not Broken. You're in Pain.
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Compassionate understanding of the real issue. Our trauma-informed 
                approach recognizes that addiction is a response to pain, not a 
                character flaw.
              </p>
            </motion.div>

            {/* Fast, Personal, Permanent */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 card-hover"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 gradient-text">
                Fast, Personal, Permanent.
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Quick results that last. Customized to your individual needs 
                with our lifetime transformation guarantee. Real change happens 
                when we address root causes.
              </p>
            </motion.div>

            {/* Relief is Here */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center p-8 rounded-2xl bg-gradient-to-br from-indigo-50 to-purple-50 card-hover"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 gradient-text">
                Relief is Here.
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Immediate hope and support. End the cycle of suffering with our 
                proven approach that provides lasting freedom from the desire to 
                drink.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Secondary CTA Section */}
      <section className="section-padding bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="container-width text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Life?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Learn more about the Kaleidoscope method and discover how we create 
              lasting transformation where others have failed.
            </p>
            <Link href="/kaleido-test/method" className="inline-flex items-center gap-2 bg-white text-purple-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-200 hover:scale-105">
              Discover The Method
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 100% Guarantee Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-width">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 gradient-text">
              Our 100% Transformation Guarantee
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              We guarantee your transformation or your money back. This isn't about 
              willpower or struggle - it's about addressing the root cause of your pain 
              and providing the tools for permanent healing. When you complete our program, 
              you'll experience the freedom from wanting to drink, not just the ability 
              to abstain.
            </p>
          </motion.div>
        </div>
      </section>
      </div>
      <Footer />
    </>
  );
}