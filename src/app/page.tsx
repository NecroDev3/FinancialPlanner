import React from 'react';
import Link from 'next/link';
import { Wallet, Calculator, Moon } from 'lucide-react';
import UserInputComponent from './components/UserInputComponent';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-blue-950 text-white">
      {/* Moon-themed particle effect background */}
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
      <div className="relative grid grid-rows-[auto_1fr_auto] min-h-screen p-8 pb-20 gap-16 sm:p-20">
        {/* Header */}
        <header className="flex items-center justify-between">
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
        <main className="flex flex-col items-center justify-center text-center gap-12">
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-6xl font-bold">
              Your Financial Planning
              <span className="block text-blue-400">Companion to the Moon</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
              Navigate your financial journey with confidence using our AI-powered analysis and personalized recommendations.
            </p>
          </div>

          {/* User Input Component - Added here */}
          <UserInputComponent />

          <div className="grid sm:grid-cols-3 gap-8 w-full max-w-4xl">
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 text-center">
              <Wallet className="w-8 h-8 text-blue-400 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Account Analysis</h3>
              <p className="text-sm text-gray-300">Comprehensive analysis of your banking and investment accounts</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 text-center">
              <Calculator className="w-8 h-8 text-blue-400 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Financial Health</h3>
              <p className="text-sm text-gray-300">Personalized metrics and goal tracking</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 text-center">
              <Moon className="w-8 h-8 text-blue-400 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Smart Suggestions</h3>
              <p className="text-sm text-gray-300">AI-powered recommendations for financial optimization</p>
            </div>
          </div>
          <div className="flex gap-4 mt-8">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-colors">
              <Link href="/monitor" className="hover:text-blue-300 transition-colors">Get Started</Link>
            </button>
            <Link href="/features" className="border border-blue-600 hover:bg-blue-600/10 px-8 py-3 rounded-full font-semibold transition-colors">
              Learn More
            </Link>
          </div>
        </main>
        {/* Footer */}
        <footer className="text-center text-sm text-gray-400">
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