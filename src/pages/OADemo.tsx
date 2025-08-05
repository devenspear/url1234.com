import Head from "next/head";
import Link from "next/link";

export default function OADemo() {
  return (
    <>
      <Head>
        <title>OA Demo | url1234.com</title>
        <meta name="description" content="OA Demo page showcasing features" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
        <div className="container mx-auto px-4 py-20">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent mb-6">
              OA Demo
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
              Office Automation Demo - Showcasing modern workflow solutions
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "Document Management",
                description: "Automated document processing and organization",
                icon: "📄"
              },
              {
                title: "Workflow Automation",
                description: "Streamlined business process automation",
                icon: "⚡"
              },
              {
                title: "Data Analytics",
                description: "Real-time insights and reporting",
                icon: "📊"
              },
              {
                title: "Task Scheduling",
                description: "Intelligent task and resource scheduling",
                icon: "📅"
              },
              {
                title: "Communication Hub",
                description: "Centralized team communication platform",
                icon: "💬"
              },
              {
                title: "Security & Compliance",
                description: "Enterprise-grade security and compliance",
                icon: "🔒"
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
              <p className="text-gray-300 mb-6">
                Experience the power of office automation with our comprehensive demo
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Start Demo
                </button>
                <button className="border border-white/40 text-white hover:bg-white/10 font-semibold py-3 px-8 rounded-lg transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="text-center mt-16">
            <Link 
              href="/" 
              className="text-lg text-cyan-400 hover:text-cyan-300 transition-colors underline"
            >
              ← Back to Home
            </Link>
            <span className="mx-4 text-gray-400">|</span>
            <Link 
              href="/t3demo" 
              className="text-lg text-violet-400 hover:text-violet-300 transition-colors underline"
            >
              View T3 Demo →
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}