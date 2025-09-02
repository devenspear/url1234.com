import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">
          Hello World
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Welcome to url1234.com
        </p>
        <div className="space-x-4">
          <Link 
            href="/templates" 
            className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            Template Manager
          </Link>
          <Link 
            href="/alysbeach" 
            className="inline-block px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors"
          >
            Alys Beach
          </Link>
          <Link 
            href="/kaleidoscope" 
            className="inline-block px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors"
          >
            Kaleidoscope
          </Link>
        </div>
      </div>
    </div>
  )
}