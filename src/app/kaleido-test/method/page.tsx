"use client";

import { motion } from "framer-motion";
import { VideoPlaceholder } from "~/components/ui/video-placeholder";
import { Play, ArrowRight, CheckCircle, Users, Heart, Smartphone } from "lucide-react";
import Link from "next/link";

export default function MethodPage() {
  const phases = [
    {
      phase: "Phase 1",
      title: "Getting Ready",
      subtitle: "Bespoke program development",
      icon: CheckCircle,
      benefits: [
        "Personalized approach from day one",
        "Begin healing before you arrive",
        "Family support and education",
        "Clear roadmap to transformation"
      ],
      details: [
        "Custom assessment and program design",
        "Remote preparation and support",
        "Comprehensive psychological and spiritual evaluation",
        "Family involvement and preparation"
      ],
      cta: "See if you're ready",
      ctaLink: "/assessment",
      gradient: "from-purple-600 to-blue-600"
    },
    {
      phase: "Phase 2",
      title: "The Catalyst",
      subtitle: "28-day immersive retreat",
      icon: Heart,
      benefits: [
        "Address root causes of addiction",
        "Rapid trauma resolution",
        "Spiritual awakening and connection",
        "New coping mechanisms",
        "Rebuilt relationships"
      ],
      details: [
        "Intensive trauma healing",
        "Custom healing modalities",
        "Plant medicine ceremonies (where appropriate)",
        "One-on-one transformation work",
        "Group healing experiences",
        "Family healing sessions"
      ],
      cta: "See if you're ready",
      ctaLink: "/assessment",
      gradient: "from-blue-600 to-indigo-600"
    },
    {
      phase: "Phase 3",
      title: "ForeverCare™",
      subtitle: "Lifetime support system",
      icon: Smartphone,
      benefits: [
        "Never go through this alone",
        "Continuous growth and support",
        "Technology-assisted recovery",
        "Lifetime guarantee honored",
        "Community connection"
      ],
      details: [
        "Ongoing coaching and support",
        "TheTwist™ app subscription",
        "Regular check-ins and adjustments",
        "Crisis intervention when needed",
        "Community of transformation"
      ],
      cta: "Learn About ForeverCare™",
      ctaLink: "#forevercare-video",
      gradient: "from-indigo-600 to-purple-600"
    }
  ];

  const testimonials = [
    {
      name: "Bill Brady",
      role: "COO & Client Zero",
      quote: "I was hopeless. 30 years of drinking, multiple rehabs, and nothing worked. Kaleidoscope didn't just help me stop drinking - they helped me stop wanting to drink. That was 3 years ago, and I've never looked back.",
      isVideo: true
    },
    {
      name: "Frank Biden",
      role: "Author & Transformation Advocate",
      quote: "The Kaleidoscope method saved my life. Read more about my journey in my book...",
      bookLink: "#",
      isVideo: false
    },
    {
      name: "Sarah M.",
      role: "Program Graduate",
      quote: "After years of trying everything, Kaleidoscope finally gave me the tools to heal the pain that was driving my drinking. I'm not just sober - I'm truly free.",
      isVideo: false
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding spiritual-gradient text-white">
        <div className="container-width">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl lg:text-6xl font-bold mb-6">
                Healing Starts Where{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-400">
                  Rehab Stops
                </span>
              </h1>
              <p className="text-xl text-gray-200 leading-relaxed mb-8">
                The Kaleidoscope Method is a revolutionary three-phase journey that 
                addresses the root causes of addiction through trauma-informed healing 
                and spiritual transformation.
              </p>
              <Link href="/assessment" className="btn-primary inline-flex items-center gap-2">
                Start Your Journey
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <VideoPlaceholder 
                title="The Kaleidoscope Method"
                duration="15:42"
                className="shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Three-Phase Journey */}
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
              Three-Phase Transformation Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive approach ensures lasting transformation through 
              preparation, intensive healing, and lifetime support.
            </p>
          </motion.div>

          <div className="space-y-16">
            {phases.map((phase, index) => (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''} flex flex-col lg:flex-row gap-12 items-center`}
              >
                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${phase.gradient} rounded-full flex items-center justify-center`}>
                      <phase.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-purple-600 uppercase tracking-wide">
                        {phase.phase}
                      </h3>
                      <h4 className="text-3xl font-bold gradient-text">
                        {phase.title}
                      </h4>
                    </div>
                  </div>
                  
                  <p className="text-xl text-gray-600 mb-6">{phase.subtitle}</p>
                  
                  <div className="mb-8">
                    <h5 className="text-lg font-semibold mb-4 text-gray-800">Program Details:</h5>
                    <ul className="space-y-2 text-gray-600">
                      {phase.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-8">
                    <h5 className="text-lg font-semibold mb-4 text-gray-800">Key Benefits:</h5>
                    <ul className="space-y-2 text-gray-600">
                      {phase.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href={phase.ctaLink}
                    className={`btn-primary bg-gradient-to-r ${phase.gradient} inline-flex items-center gap-2`}
                  >
                    {phase.cta}
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>

                {/* Visual */}
                <div className="flex-1">
                  <div className={`bg-gradient-to-br ${phase.gradient} p-8 rounded-2xl text-white relative overflow-hidden`}>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16" />
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12" />
                    <div className="relative z-10">
                      <h4 className="text-2xl font-bold mb-4">{phase.title}</h4>
                      <p className="text-white/90 mb-6">{phase.subtitle}</p>
                      <div className="space-y-2">
                        {phase.benefits.slice(0, 3).map((benefit, i) => (
                          <div key={i} className="flex items-center gap-2 text-sm">
                            <CheckCircle className="w-4 h-4" />
                            {benefit}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
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
              Transformation Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real people, real transformations. Hear from those who have experienced 
              the Kaleidoscope method firsthand.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-lg card-hover"
              >
                {testimonial.isVideo ? (
                  <div className="mb-6">
                    <VideoPlaceholder 
                      title={`${testimonial.name} Testimonial`}
                      duration="3:45"
                      className="mb-4"
                    />
                  </div>
                ) : (
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mb-4">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                  </div>
                )}
                
                <blockquote className="text-gray-600 leading-relaxed mb-6">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="border-t border-gray-200 pt-4">
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-purple-600">{testimonial.role}</div>
                  {testimonial.bookLink && (
                    <Link href={testimonial.bookLink} className="text-sm text-blue-600 hover:underline mt-2 inline-block">
                      Read more in his book →
                    </Link>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ForeverCare Video Section */}
      <section id="forevercare-video" className="section-padding bg-white">
        <div className="container-width">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 gradient-text">
              Learn About ForeverCare™
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Discover how our lifetime support system ensures your transformation 
              is permanent and you never have to face this challenge alone again.
            </p>
            <VideoPlaceholder 
              title="ForeverCare™ - Lifetime Support System"
              duration="8:30"
              className="shadow-2xl"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
}