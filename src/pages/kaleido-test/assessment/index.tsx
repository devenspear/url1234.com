"use client";

import { motion } from "framer-motion";
import { VideoPlaceholder } from "~/components/ui/video-placeholder";
import { useState } from "react";
import { Video, CheckCircle, ArrowRight, Heart, Users, Lightbulb } from "lucide-react";
import { Header } from "~/components/layout/header";
import { Footer } from "~/components/layout/footer";

const videoCarousel = [
  {
    title: "Understanding Trauma and Addiction",
    duration: "8:45",
    description: "Learn how trauma creates the foundation for addictive behaviors."
  },
  {
    title: "The Spiritual Path to Healing",
    duration: "12:30",
    description: "Discover how spiritual practices can accelerate your transformation."
  },
  {
    title: "Family Systems and Recovery",
    duration: "10:15",
    description: "Understand how family dynamics influence addiction and healing."
  }
];

const littleBookBelief = [
  "Addiction is a response to pain, not a moral failing",
  "Healing requires addressing root causes, not just symptoms",
  "Transformation happens through connection, not isolation",
  "Spiritual practices accelerate healing",
  "Family systems must heal together"
];

export default function AssessmentPage() {
  const [currentVideo, setCurrentVideo] = useState(0);
  const [responses, setResponses] = useState<Record<number, boolean>>({});
  const [currentStep, setCurrentStep] = useState<'videos' | 'beliefs' | 'full-assessment'>('videos');

  const handleVideoSelect = (index: number) => {
    setCurrentVideo(index);
  };

  const handleBeliefResponse = (index: number, agrees: boolean) => {
    setResponses(prev => ({ ...prev, [index]: agrees }));
  };

  const allBeliefsAnswered = littleBookBelief.every((_, index) => responses[index] !== undefined);
  const allAgreed = littleBookBelief.every((_, index) => responses[index] === true);

  const nextVideo = () => {
    setCurrentVideo((prev) => (prev + 1) % videoCarousel.length);
  };

  const prevVideo = () => {
    setCurrentVideo((prev) => (prev - 1 + videoCarousel.length) % videoCarousel.length);
  };

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
                Are You Ready For{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-400">
                  Healing?
                </span>
              </h1>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
                Take our interactive assessment to discover if you're ready for the 
                Kaleidoscope transformation journey.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Assessment Steps */}
        <section className="section-padding bg-white">
          <div className="container-width">
            {/* Progress Indicator */}
            <div className="flex items-center justify-center mb-12">
              <div className="flex items-center space-x-4">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  currentStep === 'videos' ? 'bg-purple-600 text-white' : 
                  responses[0] !== undefined ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-600'
                }`}>
                  <Video className="w-5 h-5" />
                </div>
                <div className={`h-1 w-20 ${
                  currentStep !== 'videos' ? 'bg-green-500' : 'bg-gray-200'
                }`} />
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  currentStep === 'beliefs' ? 'bg-purple-600 text-white' : 
                  allBeliefsAnswered ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-600'
                }`}>
                  <CheckCircle className="w-5 h-5" />
                </div>
                <div className={`h-1 w-20 ${
                  currentStep === 'full-assessment' ? 'bg-green-500' : 'bg-gray-200'
                }`} />
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  currentStep === 'full-assessment' ? 'bg-purple-600 text-white' : 'bg-gray-200 text-gray-600'
                }`}>
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </div>

            {/* Video Carousel Step */}
            {currentStep === 'videos' && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold mb-6 gradient-text">
                    Interactive Video Carousel
                  </h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Watch these videos to understand our core beliefs about transformation 
                    and healing. Click on any video to learn more.
                  </p>
                </div>

                {/* Main Video Display */}
                <div className="max-w-4xl mx-auto mb-8">
                  <VideoPlaceholder 
                    title={videoCarousel[currentVideo].title}
                    duration={videoCarousel[currentVideo].duration}
                    className="shadow-2xl"
                  />
                  <p className="text-center mt-4 text-gray-600">
                    {videoCarousel[currentVideo].description}
                  </p>
                </div>

                {/* Video Navigation */}
                <div className="flex justify-center space-x-4 mb-8">
                  <button
                    onClick={prevVideo}
                    className="bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700 transition-colors"
                  >
                    Previous
                  </button>
                  <button
                    onClick={nextVideo}
                    className="bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700 transition-colors"
                  >
                    Next
                  </button>
                </div>

                {/* Video Thumbnails */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
                  {videoCarousel.map((video, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      className={`cursor-pointer p-4 rounded-lg border-2 transition-colors ${
                        currentVideo === index 
                          ? 'border-purple-600 bg-purple-50' 
                          : 'border-gray-200 hover:border-purple-300'
                      }`}
                      onClick={() => handleVideoSelect(index)}
                    >
                      <VideoPlaceholder 
                        title={video.title}
                        duration={video.duration}
                        showControls={false}
                        className="mb-3"
                      />
                      <p className="text-sm text-gray-600">{video.description}</p>
                    </motion.div>
                  ))}
                </div>

                <div className="text-center mt-8">
                  <button
                    onClick={() => setCurrentStep('beliefs')}
                    className="btn-primary text-lg px-8 py-4"
                  >
                    Continue to Belief Assessment
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </button>
                </div>
              </motion.div>
            )}

            {/* Beliefs Assessment Step */}
            {currentStep === 'beliefs' && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold mb-6 gradient-text">
                    Core Belief Assessment
                  </h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Rate your agreement with these core beliefs that form the foundation 
                    of the Kaleidoscope method.
                  </p>
                </div>

                <div className="max-w-3xl mx-auto space-y-6">
                  {littleBookBelief.map((belief, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="bg-white p-6 rounded-xl shadow-lg border border-gray-100"
                    >
                      <h3 className="text-lg font-semibold mb-4 text-gray-900">
                        {belief}
                      </h3>
                      <div className="flex space-x-4">
                        <button
                          onClick={() => handleBeliefResponse(index, true)}
                          className={`flex-1 py-3 px-6 rounded-lg font-semibold transition-colors ${
                            responses[index] === true
                              ? 'bg-green-600 text-white'
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                        >
                          I Agree
                        </button>
                        <button
                          onClick={() => handleBeliefResponse(index, false)}
                          className={`flex-1 py-3 px-6 rounded-lg font-semibold transition-colors ${
                            responses[index] === false
                              ? 'bg-red-600 text-white'
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                        >
                          I Disagree
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="text-center mt-8">
                  {allBeliefsAnswered && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                    >
                      <div className="mb-4">
                        {allAgreed ? (
                          <div className="text-green-600 font-semibold text-lg">
                            Excellent! You're aligned with our core beliefs.
                          </div>
                        ) : (
                          <div className="text-orange-600 font-semibold text-lg">
                            We can help you explore these beliefs further.
                          </div>
                        )}
                      </div>
                      <button
                        onClick={() => setCurrentStep('full-assessment')}
                        className="btn-primary text-lg px-8 py-4"
                      >
                        Continue to Full Assessment
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </button>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            )}

            {/* Full Assessment Step */}
            {currentStep === 'full-assessment' && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold mb-6 gradient-text">
                    Complete Your Assessment
                  </h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Based on your responses, we'll create a personalized transformation 
                    plan just for you.
                  </p>
                </div>

                <div className="max-w-2xl mx-auto">
                  <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-2xl text-center">
                    <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Heart className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 gradient-text">
                      Ready for Transformation?
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      Your assessment shows you're ready to begin your healing journey. 
                      Our team will review your responses and create a personalized 
                      transformation plan.
                    </p>
                    <div className="space-y-4">
                      <button className="btn-primary w-full text-lg py-4">
                        Schedule Your Consultation
                      </button>
                      <button className="btn-secondary w-full text-lg py-4">
                        Download Your Assessment Report
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
