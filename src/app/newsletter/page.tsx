"use client";

import { motion } from "framer-motion";
import { Mail, BookOpen, Users, Heart, Calendar } from "lucide-react";

export default function NewsletterPage() {
  const teamArticles = [
    {
      title: "Why I Founded Kaleidoscope",
      author: "Noël Rihm",
      excerpt: "The personal story behind our mission and the transformation that changed everything.",
      readTime: "5 min read",
      category: "Founder's Story"
    },
    {
      title: "What to Do If You Love an Alcoholic",
      author: "Darren Litzow",
      excerpt: "Guidance for families navigating the pain of loving someone struggling with alcohol.",
      readTime: "4 min read",
      category: "Family Support"
    },
    {
      title: "Relapse Is Not Part of Recovery",
      author: "Bill Brady",
      excerpt: "Challenging the accepted narrative that relapse is inevitable or part of the process.",
      readTime: "6 min read",
      category: "Recovery Myths"
    },
    {
      title: "Why Rehab Doesn't Work",
      author: "Charlie Fiordalis",
      excerpt: "An honest look at the systemic failures of traditional addiction treatment.",
      readTime: "7 min read",
      category: "Industry Analysis"
    },
    {
      title: "What If You're Not Broken?",
      author: "Noël Rihm",
      excerpt: "Exploring the radical idea that addiction is a response to pain, not a character flaw.",
      readTime: "5 min read",
      category: "Healing Perspective"
    },
    {
      title: "From AA to Ayahuasca",
      author: "Darren Litzow",
      excerpt: "The evolution of addiction treatment and the role of plant medicine in healing.",
      readTime: "8 min read",
      category: "Treatment Evolution"
    }
  ];

  const kindredSouls = [
    {
      title: "The Body Keeps the Score",
      author: "Dr. Bessel van der Kolk",
      source: "Trauma Research Foundation",
      excerpt: "Understanding how trauma affects the body and mind in addiction.",
    },
    {
      title: "Gabor Maté on Addiction",
      author: "Dr. Gabor Maté",
      source: "In The Realm of Hungry Ghosts",
      excerpt: "Addiction as a response to trauma and emotional pain.",
    },
    {
      title: "Plant Medicine Research",
      author: "MAPS Foundation",
      source: "Clinical Studies",
      excerpt: "Latest research on psychedelic therapy for addiction treatment.",
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
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Thoughts From{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-400">
                Kaleidoscope
              </span>
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Insights, stories, and guidance on the path to transformation. 
              Stay connected with our latest thinking on healing and recovery.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Email Capture */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-12 rounded-3xl border border-purple-100">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 gradient-text">
                Stay Connected
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Join our newsletter for weekly insights, transformation stories, 
                and exclusive access to new content and programs.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-6">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-6 py-4 rounded-full border border-purple-200 focus:outline-none focus:border-purple-500 text-lg"
                />
                <button className="btn-primary text-lg px-8 py-4">
                  Subscribe
                </button>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4" />
                  Weekly insights
                </div>
                <div className="flex items-center gap-2">
                  <Heart className="w-4 h-4" />
                  Transformation stories
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  Exclusive events
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  Early access
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Articles */}
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
              Insights from Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Deep thoughts and personal stories from the founders and team members 
              who are revolutionizing addiction recovery.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamArticles.map((article, index) => (
              <motion.article
                key={article.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-lg card-hover cursor-pointer"
              >
                <div className="mb-4">
                  <span className="text-sm font-semibold text-purple-600 bg-purple-100 px-3 py-1 rounded-full">
                    {article.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-4 gradient-text leading-tight">
                  {article.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span className="font-medium">{article.author}</span>
                  <span>{article.readTime}</span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Kindred Souls */}
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
              Kindred Souls
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Curated content from aligned voices in transformation, trauma healing, 
              and spiritual growth that inspire our work.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {kindredSouls.map((soul, index) => (
              <motion.div
                key={soul.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-2xl border border-purple-100 card-hover cursor-pointer"
              >
                <h3 className="text-xl font-bold mb-4 gradient-text">
                  {soul.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {soul.excerpt}
                </p>
                <div className="border-t border-purple-200 pt-4">
                  <div className="font-semibold text-gray-900">{soul.author}</div>
                  <div className="text-sm text-purple-600">{soul.source}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Features */}
      <section className="section-padding spiritual-gradient text-white">
        <div className="container-width">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-12">
              What You'll Receive
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
                <h3 className="text-xl font-bold mb-4">Weekly Content</h3>
                <ul className="text-left space-y-2 text-gray-200">
                  <li>• Weekly insights and inspiration</li>
                  <li>• Transformation stories and testimonials</li>
                  <li>• Resource recommendations</li>
                  <li>• Book suggestions</li>
                </ul>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
                <h3 className="text-xl font-bold mb-4">Exclusive Access</h3>
                <ul className="text-left space-y-2 text-gray-200">
                  <li>• Early access to new content</li>
                  <li>• Invitation to exclusive events</li>
                  <li>• Member-only webinars</li>
                  <li>• Priority program access</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}