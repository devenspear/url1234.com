import Head from "next/head";

export default function OADemo() {
  return (
    <>
      <Head>
        <title>OA Demo | url1234.com</title>
        <meta name="description" content="OA Demo page showcasing features" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex flex-col items-center justify-center px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent mb-6">
            OA Demo
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
            Office Automation Demo - Showcasing modern workflow solutions
          </p>
        </div>

        {/* Subtle Rotating Animation */}
        <div className="relative">
          {/* Outer ring */}
          <div className="w-32 h-32 md:w-40 md:h-40 border-2 border-cyan-400/30 rounded-full animate-spin-slow">
            <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-cyan-400 rounded-full"></div>
          </div>
          
          {/* Inner ring - counter rotation */}
          <div className="absolute inset-4 border-2 border-violet-400/30 rounded-full animate-reverse-spin">
            <div className="absolute bottom-2 right-1/2 transform translate-x-1/2 w-1.5 h-1.5 bg-violet-400 rounded-full"></div>
          </div>
          
          {/* Center dot */}
          <div className="absolute inset-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-fuchsia-400 rounded-full animate-pulse"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        @keyframes reverse-spin {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }
        
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        
        .animate-reverse-spin {
          animation: reverse-spin 6s linear infinite;
        }
      `}</style>
    </>
  );
}