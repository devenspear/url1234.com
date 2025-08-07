"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "Is alcoholism really not a disease?",
    answer: "We believe alcoholism is a response to pain and trauma, not a chronic disease. When we heal the underlying pain, the compulsion to drink naturally dissolves. This isn't about willpower - it's about addressing root causes. The disease model has led to a 90% failure rate in traditional treatment because it treats symptoms rather than causes."
  },
  {
    question: "Do you really guarantee success?",
    answer: "Yes, we offer a 100% guarantee. If you complete our program and don't experience the transformation we promise, we'll refund your investment. We can make this guarantee because our approach addresses causes, not symptoms. When we heal the pain that drives drinking, the desire to drink naturally disappears."
  },
  {
    question: "What if my loved one isn't ready?",
    answer: "Readiness is crucial for transformation. We work with families to help create the conditions for readiness, but we can't force someone to heal. Our assessment process helps determine genuine readiness for change. We also provide resources and support for families whether their loved one enters our program or not."
  },
  {
    question: "What makes Kaleidoscope different from rehab?",
    answer: "Traditional rehab focuses on abstinence through willpower and coping mechanisms. We focus on healing the pain that drives the drinking. When the pain is gone, the desire to drink disappears naturally. We use trauma-informed healing, plant medicine (where appropriate), and spiritual practices rather than just behavioral modification."
  },
  {
    question: "What's in The Little Book?",
    answer: "The Little Book contains our core beliefs about transformation and healing. It challenges conventional wisdom about addiction and offers a new perspective on what's possible for those who are suffering. It includes the nine fundamental beliefs that form the foundation of our approach to healing."
  },
  {
    question: "Do you use plant medicine?",
    answer: "Plant medicine can be a powerful tool for trauma healing when used in the right context with proper preparation and integration. We use whatever modalities are most appropriate for each individual's healing journey. This is always done safely, legally, and with extensive preparation and integration support."
  },
  {
    question: "What if I've already tried everything?",
    answer: "Many of our clients have been through multiple rehabs, therapy programs, and 12-step meetings. Our approach is fundamentally different because we address trauma and pain at the deepest levels. We've seen people transform who had given up hope after decades of failed attempts with traditional methods."
  },
  {
    question: "Is this spiritual or clinical?",
    answer: "We integrate both spiritual and clinical approaches. Healing happens on multiple levels - mental, emotional, physical, and spiritual. We use whatever combination of modalities serves each person's transformation. Our team includes licensed therapists, spiritual guides, and trauma specialists."
  },
  {
    question: "How long does the program take?",
    answer: "The intensive retreat is 28 days, but transformation begins during the preparation phase and continues through our lifetime ForeverCare™ support. Real healing happens quickly when we address root causes. Most clients experience significant shifts within the first few days of the retreat."
  },
  {
    question: "Can families be involved?",
    answer: "Absolutely. Addiction affects entire family systems, and healing often requires family participation. We offer family healing sessions and ongoing support for loved ones throughout the process. Family involvement is often crucial for creating lasting transformation and preventing relapse."
  }
];

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

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
              Frequently Asked{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-400">
                Questions
              </span>
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Get answers to common questions about our approach, program, and 
              what makes Kaleidoscope different from traditional recovery methods.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl border border-purple-100 overflow-hidden"
                >
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-white/50 transition-colors"
                  >
                    <h3 className="text-xl font-bold gradient-text pr-4">
                      {faq.question}
                    </h3>
                    {openItems.includes(index) ? (
                      <ChevronUp className="w-6 h-6 text-purple-600 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-purple-600 flex-shrink-0" />
                    )}
                  </button>
                  
                  <motion.div
                    initial={false}
                    animate={{
                      height: openItems.includes(index) ? "auto" : 0,
                      opacity: openItems.includes(index) ? 1 : 0
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <p className="text-gray-700 leading-relaxed text-lg">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Still Have Questions CTA */}
      <section className="section-padding bg-gray-50">
        <div className="container-width">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6 gradient-text">
              Still Have Questions?
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              We're here to help. Our team is available to answer any questions 
              you might have about our approach, program, or whether Kaleidoscope 
              is right for you or your loved one.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary text-lg px-8 py-4">
                Schedule a Call
              </button>
              <button className="btn-secondary text-lg px-8 py-4">
                Send Us a Message
              </button>
            </div>
            
            <div className="mt-8 p-6 bg-white rounded-2xl border border-purple-100">
              <h3 className="text-lg font-semibold mb-2 gradient-text">
                24/7 Support Available
              </h3>
              <p className="text-gray-600">
                Call 1-800-HEALING for immediate support and guidance. 
                We're here whenever you need us.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}