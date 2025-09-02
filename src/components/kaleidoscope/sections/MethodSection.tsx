'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

interface Phase {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  benefits: string[];
}

const MethodSection: React.FC = () => {
  const [activePhase, setActivePhase] = useState<number>(1);

  const phases: Phase[] = [
    {
      id: 1,
      title: 'Intention',
      subtitle: 'Building and beginning a bespoke program of integrative healing',
      description: 'Remote and on-property prep: comprehensive physical, emotional and spiritual assessments, holistic therapy, detox and education, beginning at the point of selection.',
      benefits: [
        'Begin transformation before you arrive.',
        'Uncover root causes through guided inquiry.',
        'Build clarity, intention, and readiness.'
      ]
    },
    {
      id: 2,
      title: 'Insight',
      subtitle: 'Becoming open to and receiving sustainable healing and shifts',
      description: '28-day immersive retreat: Custom healing plan tailored to each individual based on Phase 1 including: Somatic therapy, EMDR, psychedelic integration, and spiritual coaching.',
      benefits: [
        'End trauma quickly and safely.',
        'Rewire your body, mind, and spirit.',
        'Discover who you are without pain.'
      ]
    },
    {
      id: 3,
      title: 'ForeverCare™ Integration',
      subtitle: 'Developing and embracing a personal path to emotional mastery',
      description: '',
      benefits: [
        'Lifetime hyper-personalized support: live coaching, Kaleidoscope telehealth services, community',
        'TheTwist™ lifetime app subscription fusing bio feedback with technology, art and healing in the pursuit of emotional mastery.',
        'Personal daily support.',
        'Custom recommendations and tracking.',
        'Real accountability. Real freedom.'
      ]
    }
  ];

  return (
    <section id="method" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6 bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
            The Kaleidoscope Method
          </h2>
          <p className="text-2xl text-text-primary font-light mb-6">
            Healing Starts Where Rehab Stops
          </p>
          <p className="text-lg text-text-secondary max-w-4xl mx-auto leading-relaxed">
            Kaleidoscope only works with people who are willing to do whatever it takes, facilitates sustained healing, and never lets them go. Trauma science is reshaping mental health, and the market is primed for an outcomes-based, human-first revolution. Kaleidoscope offers a 3-phase, trauma-informed recovery experience for the alcoholic soul and their family:
          </p>
        </motion.div>

        {/* All Phases Display - Horizontal Layout */}
        <div className="grid md:grid-cols-3 gap-8">
          {phases.map((phase, index) => (
            <motion.div
              key={phase.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 h-full">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary text-white rounded-full text-xl font-bold mb-4">
                    {phase.id}
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-text-primary mb-3">
                    {phase.title}
                  </h3>
                  <p className="text-lg text-primary mb-4">{phase.subtitle}</p>
                </div>

                {phase.description && (
                  <p className="text-text-secondary text-base leading-relaxed mb-6 text-center">
                    {phase.description}
                  </p>
                )}

                <div className="space-y-3">
                  <h4 className="text-lg font-medium text-text-primary text-center">Key Benefits:</h4>
                  <ul className="space-y-2">
                    {phase.benefits.map((benefit, benefitIndex) => (
                      <motion.li
                        key={benefitIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: benefitIndex * 0.1 }}
                        className="flex items-start space-x-2 text-text-secondary text-sm"
                      >
                        <ChevronRight className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>{benefit}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default MethodSection;