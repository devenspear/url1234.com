'use client'

export default function HomebuilderAIDashboardPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="text-center max-w-2xl mx-auto p-8">
        <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-8">
          <span className="text-4xl">🏗️</span>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          HomebuilderAI Dashboard
        </h1>
        <p className="text-xl text-gray-600 mb-6">
          Complete HomebuilderAI application integration in progress.
          This will show the full dashboard with navigation and all modules.
        </p>
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h3 className="font-semibold text-gray-900 mb-4">Dashboard Features Coming:</h3>
          <div className="grid grid-cols-2 gap-4 text-sm text-left">
            <div>• Interactive Navigation</div>
            <div>• Module Progress Tracking</div>
            <div>• Real-time Analytics</div>
            <div>• Export Capabilities</div>
          </div>
        </div>
      </div>
    </div>
  )
}