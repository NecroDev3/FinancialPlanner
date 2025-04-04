import React from 'react';
import { Moon, Building2, TrendingUp, PiggyBank, Target, Clock } from 'lucide-react';
import Link from 'next/link';

export default function About() {
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
        <main className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Innovative Financial Planning
              <span className="block text-blue-400">for Your Future</span>
            </h1>
            <p className="text-lg text-gray-300">
              MOON.ai combines advanced artificial intelligence with deep understanding of personal finance to help you reach your financial goals with confidence.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 mt-16">
            <section className="bg-white/10 backdrop-blur-lg rounded-lg p-8 h-full">
              <div className="flex items-center gap-4 mb-6">
                <Building2 className="w-8 h-8 text-blue-400" />
                <h2 className="text-2xl font-semibold">Our Mission</h2>
              </div>
              <p className="text-gray-300 leading-relaxed">
                We aim to demystify personal financial planning, making it accessible and manageable for everyone. Our AI-powered platform provides accurate analysis and personalized recommendations to optimize your financial health.
              </p>
            </section>

            <section className="bg-white/10 backdrop-blur-lg rounded-lg p-8 h-full">
              <div className="flex items-center gap-4 mb-6">
                <TrendingUp className="w-8 h-8 text-blue-400" />
                <h2 className="text-2xl font-semibold">Data-Driven Insights</h2>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Our platform uses advanced algorithms to analyze your financial data, identifying patterns and opportunities that humans might miss. We translate complex financial data into clear, actionable insights to help you make better decisions.
              </p>
            </section>

            <section className="bg-white/10 backdrop-blur-lg rounded-lg p-8 h-full">
              <div className="flex items-center gap-4 mb-6">
                <Target className="w-8 h-8 text-blue-400" />
                <h2 className="text-2xl font-semibold">Goal-Based Planning</h2>
              </div>
              <p className="text-gray-300 leading-relaxed">
                We believe financial planning should be centered around your unique life goals. Whether you're saving for retirement, a home purchase, or education, our platform creates personalized strategies to help you achieve what matters most to you.
              </p>
            </section>

            <section className="bg-white/10 backdrop-blur-lg rounded-lg p-8 h-full">
              <div className="flex items-center gap-4 mb-6">
                <PiggyBank className="w-8 h-8 text-blue-400" />
                <h2 className="text-2xl font-semibold">Why Choose MOON.ai?</h2>
              </div>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 mt-2 rounded-full bg-blue-400" />
                  <p>AI-powered analysis of your financial accounts and spending patterns</p>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 mt-2 rounded-full bg-blue-400" />
                  <p>Personalized financial strategies based on your unique goals</p>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 mt-2 rounded-full bg-blue-400" />
                  <p>Real-time optimization suggestions and scenario planning</p>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 mt-2 rounded-full bg-blue-400" />
                  <p>Secure, private, and user-friendly platform</p>
                </li>
              </ul>
            </section>
          </div>

          {/* Timeline section - New addition */}
          <section className="mt-16 bg-white/10 backdrop-blur-lg rounded-lg p-8">
            <div className="flex items-center gap-4 mb-8">
              <Clock className="w-8 h-8 text-blue-400" />
              <h2 className="text-2xl font-semibold">Your Financial Journey</h2>
            </div>
            
            <div className="relative pl-8 border-l-2 border-blue-400/50 space-y-12">
              <div className="relative">
                <div className="absolute -left-10 w-6 h-6 rounded-full bg-blue-400"></div>
                <h3 className="text-xl font-medium text-blue-300">Connect</h3>
                <p className="mt-2 text-gray-300">Link your financial accounts securely to get a complete picture of your finances in one place.</p>
              </div>
              
              <div className="relative">
                <div className="absolute -left-10 w-6 h-6 rounded-full bg-blue-400"></div>
                <h3 className="text-xl font-medium text-blue-300">Analyze</h3>
                <p className="mt-2 text-gray-300">Our AI reviews your financial data to identify patterns, opportunities, and areas for improvement.</p>
              </div>
              
              <div className="relative">
                <div className="absolute -left-10 w-6 h-6 rounded-full bg-blue-400"></div>
                <h3 className="text-xl font-medium text-blue-300">Plan</h3>
                <p className="mt-2 text-gray-300">Set personalized financial goals and receive tailored strategies to achieve them.</p>
              </div>
              
              <div className="relative">
                <div className="absolute -left-10 w-6 h-6 rounded-full bg-blue-400"></div>
                <h3 className="text-xl font-medium text-blue-300">Optimize</h3>
                <p className="mt-2 text-gray-300">Get ongoing recommendations to improve your financial health and accelerate progress toward your goals.</p>
              </div>
            </div>
          </section>
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