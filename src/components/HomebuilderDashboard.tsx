export default function HomebuilderDashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            HomebuilderAI Interactive Dashboard
          </h1>
          <p className="text-xl text-gray-600 mb-2">
            Master Aiglish™, build automations, and optimize your conversion funnel
          </p>
          <p className="text-lg text-gray-500">
            8 powerful AI modules for sales optimization
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
            <div className="text-3xl font-bold text-sky-500 mb-2">8</div>
            <div className="text-gray-600">Total Modules</div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
            <div className="text-3xl font-bold text-orange-500 mb-2">0</div>
            <div className="text-gray-600">In Progress</div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
            <div className="text-3xl font-bold text-green-500 mb-2">0%</div>
            <div className="text-gray-600">Complete</div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            { icon: '📚', title: 'Glossary Lab', desc: 'Master 22 Aiglish™ terms for better sales conversations' },
            { icon: '✉️', title: 'Drips Generator', desc: 'Create automated email sequences that convert' },
            { icon: '🎯', title: 'Simulator', desc: 'Test buyer journeys and optimize conversion paths' },
            { icon: '🔍', title: 'AI Visibility Audit', desc: 'Analyze website visibility and get improvement recommendations' },
            { icon: '⚖️', title: 'Lead Scoring', desc: 'Fine-tune behavioral weights for better lead prioritization' },
            { icon: '🏗️', title: 'AI Frame Builder', desc: 'Optimize entity structure and eliminate naming drift' },
            { icon: '🤖', title: 'MarvelBot Studio', desc: 'Train your sales bot for better customer interactions' },
            { icon: '📋', title: 'Playbooks', desc: 'Follow guided implementations for specific scenarios' }
          ].map((module, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl">{module.icon}</span>
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">Not Started</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{module.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{module.desc}</p>
              <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{width: '0%'}}></div>
              </div>
              <div className="text-xs text-gray-500">0% Complete</div>
            </div>
          ))}
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Start Recommendations</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="border-2 border-dashed border-blue-200 p-6 rounded-xl text-center">
              <span className="text-2xl mb-3 block">📚</span>
              <h3 className="font-semibold mb-2">New to Aiglish™?</h3>
              <p className="text-sm text-gray-600 mb-4">
                Start with the Glossary Lab to master the 22 AI terms that will transform your sales conversations.
              </p>
              <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Start Learning →
              </button>
            </div>
            <div className="border-2 border-dashed border-green-200 p-6 rounded-xl text-center">
              <span className="text-2xl mb-3 block">📋</span>
              <h3 className="font-semibold mb-2">Ready to Execute?</h3>
              <p className="text-sm text-gray-600 mb-4">
                Follow step-by-step playbooks for proven scenarios like move-in ready pushes and luxury buyer acceleration.
              </p>
              <button className="w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                Browse Playbooks →
              </button>
            </div>
            <div className="border-2 border-dashed border-orange-200 p-6 rounded-xl text-center">
              <span className="text-2xl mb-3 block">🎯</span>
              <h3 className="font-semibold mb-2">Want to Experiment?</h3>
              <p className="text-sm text-gray-600 mb-4">
                Use the Simulator to test different buyer journeys and see how your automation responds in real-time.
              </p>
              <button className="w-full px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors">
                Start Simulating →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}