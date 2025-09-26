'use client'

export default function HomebuilderAIDashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-24 h-24 rounded-full bg-blue-600 flex items-center justify-center mx-auto mb-8">
            <span className="text-4xl text-white">🏗️</span>
          </div>

          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            HomebuilderAI Dashboard
          </h1>

          <p className="text-xl text-gray-600 mb-8">
            Coming Soon: Your complete AI-powered home building and design dashboard
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤖</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">AI Design Assistant</h3>
              <p className="text-gray-600 text-sm">Generate custom home designs with artificial intelligence</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Smart Planning</h3>
              <p className="text-gray-600 text-sm">Optimize building processes with AI-powered scheduling</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Cost Estimation</h3>
              <p className="text-gray-600 text-sm">Accurate project costing using machine learning</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏠</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">3D Visualization</h3>
              <p className="text-gray-600 text-sm">Immersive 3D rendering of your future home</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Sustainability</h3>
              <p className="text-gray-600 text-sm">Eco-friendly building recommendations</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📋</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Permit Assistance</h3>
              <p className="text-gray-600 text-sm">Streamlined building permit compliance</p>
            </div>
          </div>

          <div className="mt-12">
            <p className="text-gray-500 mb-4">
              This dashboard will be automatically populated when you push your HomebuilderAI project to GitHub.
            </p>
            <a
              href="https://github.com/devenspear/HomebuilderAI"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              <span>View GitHub Repository</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}