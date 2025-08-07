"use client";

import { motion } from "framer-motion";
import { Users, Target, BookOpen, Award } from "lucide-react";

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Noël Rihm",
      title: "Founder & CEO",
      description: "Visionary leader with deep understanding of transformation psychology and business strategy.",
      icon: Target,
    },
    {
      name: "Darren Litzow",
      title: "CTO & Transformation Design",
      description: "Technical innovator and healing methodology architect, combining ancient wisdom with modern science.",
      icon: Users,
    },
    {
      name: "Bill Brady",
      title: "COO & Client Zero",
      description: "Our first success story, now dedicated to operational excellence and client experience.",
      icon: Award,
    },
    {
      name: "Charlie Fiordalis",
      title: "CMO",
      description: "Marketing strategist focused on reaching those who need healing most.",
      icon: BookOpen,
    },
  ];

  const values = [
    {
      title: "Courageous",
      description: "We tackle the root causes others won't address.",
      color: "from-red-500 to-pink-500",
    },
    {
      title: "Compassionate",
      description: "Every interaction is rooted in empathy and understanding.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Personal",
      description: "Your journey is unique, and so is our approach to your healing.",
      color: "from-purple-500 to-indigo-500",
    },
    {
      title: "Relentless",
      description: "We don't give up until you're free.",
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Believing",
      description: "We see your potential even when you can't.",
      color: "from-yellow-500 to-orange-500",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding spiritual-gradient text-white">
        <div className="container-width">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Revolutionizing{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-400">
                Recovery
              </span>
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              We are transforming the $53 billion alcohol recovery industry by addressing 
              the root cause of addiction: trauma and pain.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Statement */}
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
              Our Mission
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              We are revolutionizing alcohol recovery by addressing the root cause of addiction: 
              trauma and pain. Unlike traditional rehab that focuses on abstinence, we focus on 
              healing - making the desire to drink simply disappear.
            </p>
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4 gradient-text">Market Challenge</h3>
              <p className="text-lg text-gray-600">
                The $53 billion US alcohol recovery industry has a 90% failure rate. 
                Traditional approaches treat symptoms, not causes. We're changing that.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
      <section className="section-padding bg-gray-50">
        <div className="container-width">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-8 text-center gradient-text">
              Our Story
            </h2>
            <div className="prose prose-lg mx-auto text-gray-600">
              <p className="text-xl leading-relaxed mb-6">
                Kaleidoscope was founded on the belief that alcoholism isn't a disease - 
                it's a response to pain. When we heal the pain, the need for alcohol 
                naturally dissolves.
              </p>
              <p className="text-lg leading-relaxed">
                Our founders experienced this transformation firsthand and dedicated their 
                lives to sharing it with others. We've seen too many people fail in 
                traditional programs not because they lack willpower, but because those 
                programs don't address the real issue: unhealed trauma and pain.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Leadership Team */}
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
              Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A diverse team of visionaries, healers, and transformation experts 
              united by our mission to revolutionize recovery.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-2xl card-hover"
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <member.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2 gradient-text">
                      {member.name}
                    </h3>
                    <h4 className="text-lg font-semibold text-purple-600 mb-4">
                      {member.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {member.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding spiritual-gradient text-white">
        <div className="container-width">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              These principles guide everything we do and shape how we approach 
              healing and transformation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 card-hover"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${value.color} rounded-lg mb-4`} />
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-200 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Citations */}
      <section className="section-padding bg-gray-50">
        <div className="container-width">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-8 text-center gradient-text">
              Research & Citations
            </h2>
            <div className="space-y-4 text-gray-600">
              <div className="bg-white p-6 rounded-lg border-l-4 border-purple-600">
                <p className="font-medium">U.S. Addiction Rehab Industry Report (2020)</p>
                <p className="text-sm mt-2">Comprehensive analysis of treatment outcomes and industry failure rates</p>
              </div>
              <div className="bg-white p-6 rounded-lg border-l-4 border-blue-600">
                <p className="font-medium">NIH Understanding Alcohol's Impact (2025)</p>
                <p className="text-sm mt-2">Latest research on trauma-informed approaches to addiction treatment</p>
              </div>
              <div className="bg-white p-6 rounded-lg border-l-4 border-indigo-600">
                <p className="font-medium">AA critiques (Dodes, 2006)</p>
                <p className="text-sm mt-2">Critical analysis of traditional 12-step program effectiveness</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}