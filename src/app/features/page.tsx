import React from 'react';
import { Moon, Check, Download, AlertCircle, Star, Wallet, Calculator, FileSpreadsheet, BarChart } from 'lucide-react';
import Link from 'next/link';

export default function Features() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-blue-950 text-white">
      {/* Background effect */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-blue-200"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
              animation: `float ${Math.random() * 10 + 5}s linear infinite`
            }}
          />
        ))}
      </div>

      <div className="relative min-h-screen p-8 pb-20 gap-16 sm:p-20">
        {/* Header */}
        <header className="flex items-center justify-between mb-16">
          <div className="flex items-center gap-2">
            <Moon className="w-8 h-8 text-white" />
            <span className="text-2xl font-bold">MOON.ai</span>
          </div>
          <nav className="hidden sm:flex gap-8">
            <Link href="/home" className="hover:text-blue-300 transition-colors">Moon</Link>
            <Link href="/about" className="hover:text-blue-300 transition-colors">About</Link>
            <Link href="/features" className="hover:text-blue-300 transition-colors">Features</Link>
          </nav>
        </header>

        {/* Main Content */}
        <main className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Choose Your Financial
              <span className="block text-blue-400">Journey</span>
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Select the plan that best suits your financial planning needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {/* Free Tier */}
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-8 border border-blue-800/50">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-semibold">Starter</h2>
                <span className="text-blue-400">Free</span>
              </div>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-2">
                  <Wallet className="w-5 h-5 text-blue-400 mt-1" />
                  <p className="text-gray-300">Basic account analysis and transaction tracking</p>
                </div>
                <div className="flex items-start gap-2">
                  <Calculator className="w-5 h-5 text-blue-400 mt-1" />
                  <p className="text-gray-300">Standard financial health monitoring</p>
                </div>
                <div className="flex items-start gap-2">
                  <AlertCircle className="w-5 h-5 text-blue-400 mt-1" />
                  <p className="text-gray-300">Basic financial alerts</p>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-blue-400 mt-1" />
                  <p className="text-gray-300">View insights in web dashboard</p>
                </div>
              </div>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold transition-colors">
                <Link href="/dashboard" className="hover:text-blue-300 transition-colors">Get Started</Link>
              </button>
            </div>

            {/* Premium Tier */}
            <div className="bg-gradient-to-br from-blue-800/50 to-blue-900/50 backdrop-blur-lg rounded-lg p-8 border-2 border-blue-400/50 relative">
              <div className="absolute -top-4 right-4 bg-blue-400 text-blue-900 px-4 py-1 rounded-full text-sm font-semibold">
                RECOMMENDED
              </div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-semibold">Lunar Pro</h2>
                <span className="text-blue-400">Premium</span>
              </div>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-2">
                  <Star className="w-5 h-5 text-blue-400 mt-1" />
                  <p className="text-gray-300">Advanced AI-powered financial analysis and insights</p>
                </div>
                <div className="flex items-start gap-2">
                  <Calculator className="w-5 h-5 text-blue-400 mt-1" />
                  <p className="text-gray-300">Comprehensive budget planning with optimization suggestions</p>
                </div>
                <div className="flex items-start gap-2">
                  <FileSpreadsheet className="w-5 h-5 text-blue-400 mt-1" />
                  <p className="text-gray-300">Export results to Excel for detailed analysis</p>
                </div>
                <div className="flex items-start gap-2">
                  <BarChart className="w-5 h-5 text-blue-400 mt-1" />
                  <p className="text-gray-300">Advanced financial projections and scenario planning</p>
                </div>
                <div className="flex items-start gap-2">
                  <AlertCircle className="w-5 h-5 text-blue-400 mt-1" />
                  <p className="text-gray-300">Priority financial notifications and smart alerts</p>
                </div>
              </div>
              <button className="w-full bg-blue-400 hover:bg-blue-500 text-blue-900 px-6 py-3 rounded-full font-semibold transition-colors">
                Upgrade to Premium (Coming soon!)
              </button>
            </div>
          </div>

          {/* Feature Comparison */}
          <div className="mt-20">
            <h2 className="text-2xl font-semibold text-center mb-8">Detailed Feature Comparison</h2>
            <div className="bg-white/10 backdrop-blur-lg rounded-lg overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-blue-800/50">
                    <th className="p-4 text-left">Feature</th>
                    <th className="p-4 text-center">Starter</th>
                    <th className="p-4 text-center">Lunar Pro</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-blue-800/50">
                    <td className="p-4">Account Analysis</td>
                    <td className="p-4 text-center">Basic</td>
                    <td className="p-4 text-center text-blue-400">Advanced</td>
                  </tr>
                  <tr className="border-b border-blue-800/50">
                    <td className="p-4">Financial Forecasting</td>
                    <td className="p-4 text-center">Standard</td>
                    <td className="p-4 text-center text-blue-400">Comprehensive</td>
                  </tr>
                  <tr className="border-b border-blue-800/50">
                    <td className="p-4">Export Options</td>
                    <td className="p-4 text-center">Web View Only</td>
                    <td className="p-4 text-center text-blue-400">Excel + PDF</td>
                  </tr>
                  <tr className="border-b border-blue-800/50">
                    <td className="p-4">Multi-Account Integration</td>
                    <td className="p-4 text-center">Up to 2</td>
                    <td className="p-4 text-center text-blue-400">Unlimited</td>
                  </tr>
                  <tr>
                    <td className="p-4">Support</td>
                    <td className="p-4 text-center">Community</td>
                    <td className="p-4 text-center text-blue-400">Priority</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="text-center text-sm text-gray-400 mt-16">
          <div className="flex justify-center gap-8 mb-4">
            <a href="#" className="hover:text-blue-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-blue-300 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-blue-300 transition-colors">Contact</a>
          </div>
          <p>© 2025 MOON.ai - Your Financial Planning Assistant</p>
        </footer>
      </div>
    </div>
  );
}