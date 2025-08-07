"use client";

import { motion } from "framer-motion";
import { VideoPlaceholder } from "~/components/ui/video-placeholder";
import { useState } from "react";
import { ChevronLeft, ChevronRight, CheckCircle, X, ArrowRight, Video } from "lucide-react";

const videoCarousel = [
  { title: "Alcoholism is Not a Disease", duration: "4:32" },
  { title: "All the Answers Are Inside You", duration: "3:45" },
  { title: "You Aren't Powerless", duration: "5:12" },
  { title: "Pain Can Be Extinguished Fast", duration: "4:18" },
  { title: "Forgive Yourself", duration: "3:55" },
  { title: "Happiness is Achievable", duration: "4:42" },
  { title: "It Doesn't Have to Be Hard", duration: "3:28" },
  { title: "The Choices Are Yours", duration: "4:15" },
  { title: "You Are Not Alone", duration: "3:33" },
];

const littleBookBelief = [
  {
    belief: "Alcoholism is NOT a disease.",
    explanation: "It's a response to pain and trauma that can be healed."
  },
  {
    belief: "All the answers are inside you.",
    explanation: "You have everything you need for healing within you."
  },
  {
    belief: "You aren't powerless over anything.",
    explanation: "You have the power to transform your life completely."
  },
  {
    belief: "Even immense pain and trauma can be extinguished…fast.",
    explanation: "With the right approach, healing doesn't take decades."
  },
  {
    belief: "Forgive yourself for what you had to do to survive.",
    explanation: "Your coping mechanisms served a purpose. Now you can heal."
  },
  {
    belief: "Happiness is achievable for everyone.",
    explanation: "True joy and fulfillment are your birthright."
  },
  {
    belief: "It doesn't have to be this hard.",
    explanation: "Struggle is not required for transformation."
  },
  {
    belief: "The choices are always yours.",
    explanation: "You are the author of your own transformation story."
  },
  {
    belief: "You are not alone.",
    explanation: "We're here to walk this journey with you."
  },
];

export default function AssessmentPage() {
  const [currentVideo, setCurrentVideo] = useState(0);
  const [responses, setResponses] = useState<Record<number, boolean>>({});
  const [currentStep, setCurrentStep] = useState<'videos' | 'beliefs' | 'full-assessment'>('videos');

  const handleVideoSelect = (index: number) => {
    setSelectedVideo(index);
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
                  title={videoCarousel[currentVideo]!.title}
                  duration={videoCarousel[currentVideo]!.duration}
                  className="shadow-2xl"
                />
                
                {/* Video Controls */}
                <div className="flex items-center justify-between mt-4">
                  <button
                    onClick={prevVideo}
                    className="flex items-center gap-2 text-purple-600 hover:text-purple-800 transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5" />
                    Previous
                  </button>
                  <span className="text-gray-600">
                    {currentVideo + 1} of {videoCarousel.length}
                  </span>
                  <button
                    onClick={nextVideo}
                    className="flex items-center gap-2 text-purple-600 hover:text-purple-800 transition-colors"
                  >
                    Next
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Video Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                {videoCarousel.map((video, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    onClick={() => handleVideoSelect(index)}
                    className={`cursor-pointer rounded-lg overflow-hidden border-2 transition-all ${
                      currentVideo === index ? 'border-purple-600 shadow-lg' : 'border-gray-200 hover:border-purple-300'
                    }`}
                  >
                    <VideoPlaceholder 
                      title={video.title}
                      duration={video.duration}
                      showControls={false}
                      className="h-32"
                    />
                  </motion.div>
                ))}
              </div>

              <div className="text-center">
                <button
                  onClick={() => setCurrentStep('beliefs')}
                  className="btn-primary"
                >
                  Continue to Assessment
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
              </div>
            </motion.div>
          )}

          {/* Little Book Beliefs Step */}
          {currentStep === 'beliefs' && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-6 gradient-text">
                  The Little Book - Core Beliefs
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Please indicate whether you agree or disagree with each of these 
                  fundamental beliefs about transformation and healing.
                </p>
              </div>

              <div className="max-w-4xl mx-auto space-y-6">
                {littleBookBelief.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-2xl border border-purple-100"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-2 gradient-text">
                          {item.belief}
                        </h3>
                        <p className="text-gray-600 mb-4">{item.explanation}</p>
                      </div>
                      
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleBeliefResponse(index, true)}
                          className={`px-4 py-2 rounded-full font-semibold transition-all ${
                            responses[index] === true
                              ? 'bg-green-500 text-white'
                              : 'bg-white text-green-600 border-2 border-green-500 hover:bg-green-50'
                          }`}
                        >
                          Agree
                        </button>
                        <button
                          onClick={() => handleBeliefResponse(index, false)}
                          className={`px-4 py-2 rounded-full font-semibold transition-all ${
                            responses[index] === false
                              ? 'bg-red-500 text-white'
                              : 'bg-white text-red-600 border-2 border-red-500 hover:bg-red-50'
                          }`}
                        >
                          Disagree
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {allBeliefsAnswered && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="mt-12 text-center"
                >
                  {allAgreed ? (
                    <div className="bg-green-50 border border-green-200 p-8 rounded-2xl max-w-2xl mx-auto">
                      <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                      <h3 className="text-2xl font-bold text-green-800 mb-4">
                        Excellent! You're Ready for Transformation
                      </h3>
                      <p className="text-green-700 mb-6">
                        Your alignment with these beliefs indicates you're prepared for 
                        the Kaleidoscope method. Let's continue with the full assessment.
                      </p>
                      <button
                        onClick={() => setCurrentStep('full-assessment')}
                        className="btn-primary bg-green-600 hover:bg-green-700"
                      >
                        Continue to Full Assessment
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </button>
                    </div>
                  ) : (
                    <div className="bg-yellow-50 border border-yellow-200 p-8 rounded-2xl max-w-2xl mx-auto">
                      <X className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
                      <h3 className="text-2xl font-bold text-yellow-800 mb-4">
                        Not Quite Ready Yet
                      </h3>
                      <p className="text-yellow-700 mb-6">
                        We believe everyone deserves healing, but our method works best 
                        when you're aligned with these core beliefs. Consider watching 
                        more of our videos or speaking with our team to learn more.
                      </p>
                      <div className="flex gap-4 justify-center">
                        <button
                          onClick={() => setCurrentStep('videos')}
                          className="btn-secondary"
                        >
                          Watch More Videos
                        </button>
                        <button className="btn-primary">
                          Speak with Our Team
                        </button>
                      </div>
                    </div>
                  )}
                </motion.div>
              )}
            </motion.div>
          )}

          {/* Full Assessment Step */}
          {currentStep === 'full-assessment' && allAgreed && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-6 gradient-text">
                  Comprehensive Readiness Assessment
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Complete this detailed assessment to determine your readiness for 
                  the Kaleidoscope transformation program.
                </p>
              </div>

              <div className="max-w-2xl mx-auto bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-2xl text-center">
                <h3 className="text-2xl font-bold mb-4 gradient-text">
                  Ready to Begin Your Journey?
                </h3>
                <p className="text-gray-600 mb-8">
                  Our comprehensive 100-question assessment will help us understand 
                  your unique situation and determine if you're ready for transformation. 
                  This process includes lead capture and Sherpa (guide) assignment for 
                  qualified candidates.
                </p>
                
                <div className="space-y-4 mb-8">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full px-4 py-3 rounded-full border border-purple-200 focus:outline-none focus:border-purple-500"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-3 rounded-full border border-purple-200 focus:outline-none focus:border-purple-500"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 rounded-full border border-purple-200 focus:outline-none focus:border-purple-500"
                  />
                </div>

                <button className="btn-primary text-lg px-8 py-4">
                  Start Full Assessment
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                
                <p className="text-sm text-gray-500 mt-4">
                  By proceeding, you agree to our privacy policy and terms of service.
                </p>
              </div>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}