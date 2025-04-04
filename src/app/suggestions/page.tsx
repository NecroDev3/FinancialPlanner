'use client'

import React, { useState, useEffect, useCallback } from 'react';
import { 
  Lightbulb, 
  TrendingUp, 
  AlertTriangle, 
  Calendar,
  ArrowRight,
  DollarSign,
  Clock,
  Moon,
  Loader,
  PiggyBank,
  Target,
  Wallet
} from 'lucide-react';
import Link from 'next/link';

const Suggestions = () => {
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isDemo, setIsDemo] = useState(false);

  const priorityColors = {
    urgent: 'bg-blue-900/30 border-blue-400/50 text-blue-200',
    high: 'bg-blue-900/30 border-blue-400/50 text-blue-200',
    medium: 'bg-blue-900/30 border-blue-400/50 text-blue-200'
  };

  const getTypeFromSuggestion = (suggestion) => {
    if (suggestion.toLowerCase().includes('save') || suggestion.toLowerCase().includes('budget')) return 'savings';
    if (suggestion.toLowerCase().includes('debt') || suggestion.toLowerCase().includes('loan')) return 'debt';
    if (suggestion.toLowerCase().includes('invest') || suggestion.toLowerCase().includes('portfolio')) return 'investment';
    return 'financial';
  };

  const getTitleFromSuggestion = (suggestion) => {
    if (suggestion.toLowerCase().includes('save')) return 'Savings Opportunity';
    if (suggestion.toLowerCase().includes('debt')) return 'Debt Reduction Strategy';
    if (suggestion.toLowerCase().includes('invest')) return 'Investment Consideration';
    if (suggestion.toLowerCase().includes('budget')) return 'Budget Optimization';
    return suggestion.split('.')[0];
  };

  const getPriorityFromSuggestion = (suggestion) => {
    if (suggestion.toLowerCase().includes('urgent') || suggestion.toLowerCase().includes('immediately')) return 'urgent';
    if (suggestion.toLowerCase().includes('consider') || suggestion.toLowerCase().includes('should')) return 'high';
    return 'medium';
  };

  const getIconForSuggestion = (suggestion) => {
    if (suggestion.toLowerCase().includes('save') || suggestion.toLowerCase().includes('budget')) return PiggyBank;
    if (suggestion.toLowerCase().includes('debt') || suggestion.toLowerCase().includes('loan')) return Target;
    if (suggestion.toLowerCase().includes('invest') || suggestion.toLowerCase().includes('portfolio')) return TrendingUp;
    return Lightbulb;
  };

  // Generate demo data for when no account is connected
  const generateDemoSuggestions = () => {
    return [
      {
        id: 1,
        type: 'savings',
        title: 'Emergency Fund Priority',
        description: 'Consider increasing your emergency fund contributions to reach the recommended 6-month coverage.',
        priority: 'high',
        icon: PiggyBank,
        status: 'actionable',
        potentialSavings: 12000
      },
      {
        id: 2,
        type: 'debt', 
        title: 'Debt Consolidation Option',
        description: 'Your credit card interest rates are higher than average. Consider consolidating to reduce overall interest payments.',
        priority: 'medium',
        icon: Target,
        status: 'attention_required',
        potentialSavings: 1850
      },
      {
        id: 3,
        type: 'investment',
        title: 'Portfolio Diversification',
        description: 'Your investment portfolio is heavily concentrated in technology stocks. Consider diversifying to reduce sector risk.',
        priority: 'medium',
        icon: TrendingUp,
        status: 'recommendation'
      },
      {
        id: 4,
        type: 'financial',
        title: 'Retirement Contribution',
        description: 'You\'re currently below the annual maximum for your retirement account contributions. Increasing your contributions could provide tax advantages.',
        priority: 'high',
        icon: Lightbulb,
        status: 'actionable',
        potentialSavings: 2400,
        deadline: 'Dec 31, 2024'
      }
    ];
  };

  // Define fetchSuggestions using useCallback to maintain reference stability
  const fetchSuggestions = useCallback(async () => {
    console.log("Fetching financial suggestions...");
    setLoading(true);
    
    try {
      // Try to get suggestions from localStorage first (from monitor page)
      const storedSuggestions = localStorage.getItem('suggestions');
      
      if (storedSuggestions) {
        console.log('Found suggestions in localStorage');
        const parsedSuggestions = JSON.parse(storedSuggestions);
        if (Array.isArray(parsedSuggestions) && parsedSuggestions.length > 0) {
          // Transform stored suggestions to match the expected format
          const formattedSuggestions = parsedSuggestions.map((suggestion, index) => ({
            id: index + 1,
            type: getTypeFromSuggestion(suggestion.title || suggestion.description),
            title: suggestion.title || getTitleFromSuggestion(suggestion.description),
            description: suggestion.description,
            priority: getPriorityFromSuggestion(suggestion.description),
            icon: getIconForSuggestion(suggestion.title || suggestion.description),
            status: 'recommendation',
            actionItems: suggestion.actionItems
          }));
          
          console.log("Formatted suggestions from localStorage:", formattedSuggestions);
          setSuggestions(formattedSuggestions);
          setLoading(false);
          return;
        }
      }
      
      const walletAddress = localStorage.getItem('walletAddress');
      
      if (!walletAddress) {
        console.log('No wallet address found, using demo data');
        setSuggestions(generateDemoSuggestions());
        setIsDemo(true);
        return;
      }
      
      console.log(`Fetching data for wallet: ${walletAddress}`);
      
      try {
        const response = await fetch(`https://localhost5000/agent/analyze/${walletAddress}`);
        
        if (!response.ok) {
          throw new Error(`API error: ${response.status} ${response.statusText}`);
        }
        
        const data = await response.json();
        console.log("API response:", data);
        
        if (data.result === 'error') {
          throw new Error(`Server error: ${data.error}`);
        }
        
        // Extract suggestions from the response
        if (data.suggestions && Array.isArray(data.suggestions)) {
          console.log(`Processing ${data.suggestions.length} suggestions`);
          
          // Transform the suggestions into the format expected by the UI
          const formattedSuggestions = data.suggestions.map((suggestion, index) => ({
            id: index + 1,
            type: getTypeFromSuggestion(suggestion),
            title: getTitleFromSuggestion(suggestion),
            description: suggestion,
            priority: getPriorityFromSuggestion(suggestion),
            icon: getIconForSuggestion(suggestion),
            status: 'recommendation'
          }));
          
          console.log("Formatted suggestions:", formattedSuggestions);
          setSuggestions(formattedSuggestions);
        } else {
          // Fallback to default suggestions if needed
          throw new Error("No suggestions data in API response");
        }
      } catch (apiError) {
        console.error('API error:', apiError);
        // Fallback to demo suggestions on API error
        setSuggestions(generateDemoSuggestions());
        setIsDemo(true);
      }
    } catch (err) {
      console.error('Error fetching suggestions:', err);
      setError(err.message);
      // Set default suggestions on error as well
      setSuggestions(generateDemoSuggestions());
      setIsDemo(true);
    } finally {
      setLoading(false);
    }
  }, [/* No dependencies needed for these functions as they're defined in component scope */]);

  // Run the fetch on component mount
  useEffect(() => {
    console.log("Component mounted, fetching suggestions");
    fetchSuggestions();
  }, [fetchSuggestions]); // Only depend on fetchSuggestions

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-900 to-blue-950 text-white flex items-center justify-center">
        <div className="flex flex-col items-center">
          <Loader className="w-10 h-10 text-blue-500 animate-spin mb-4" />
          <p className="text-xl">Loading financial insights...</p>
        </div>
      </div>
    );
  }

  if (error && !isDemo) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-900 to-blue-950 text-white flex flex-col items-center justify-center p-8">
        <AlertTriangle className="w-16 h-16 text-blue-500 mb-4" />
        <h2 className="text-2xl font-bold mb-2">Error Loading Insights</h2>
        <p className="text-blue-300 mb-6 text-center max-w-md">{error}</p>
        <Link href="/dashboard" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors">
          Back to Dashboard
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-blue-950 text-white">
      <header className="flex items-center justify-between p-8 sm:px-20 sm:py-8">
        <div className="flex items-center gap-2">
          <Moon className="w-8 h-8 text-white" />
          <span className="text-2xl font-bold">MOON.ai</span>
        </div>
        <nav className="hidden sm:flex gap-8">
          <Link href="/home" className="hover:text-blue-300 transition-colors">Moon</Link>
          <Link href="/results" className="hover:text-blue-300 transition-colors">Results</Link>
          <Link href="/suggestions" className="hover:text-blue-300 transition-colors">Suggestions</Link>
        </nav>
      </header>

      {isDemo && (
        <div className="max-w-6xl mx-auto mb-6 bg-blue-700/30 border border-blue-500/50 rounded-lg p-4 flex items-center gap-3 mx-8 sm:mx-20">
          <Wallet className="w-5 h-5 text-blue-300" />
          <p className="text-blue-100">
            Viewing demo financial insights. <Link href="/dashboard" className="underline hover:text-white">Connect your accounts</Link> to see your personalized recommendations.
          </p>
        </div>
      )}

      <div className="max-w-6xl mx-auto p-8 sm:px-20 pb-20">
        {/* Main Content Area */}
        <div className="bg-white/10 backdrop-blur-lg rounded-lg border border-blue-800/50 overflow-hidden">
          <div className="bg-gradient-to-r from-blue-800 to-blue-900 p-6">
            <div className="flex items-center gap-2 text-xl font-bold">
              <Lightbulb className="w-6 h-6" />
              Financial Suggestions &amp; Recommendations
            </div>
            <p className="text-blue-200">Personalized suggestions based on your financial analysis</p>
          </div>

          <div className="p-6 space-y-6">
            {/* Summary Section */}
            <div className="bg-blue-900/30 p-4 rounded-lg border border-blue-400/50">
              <h2 className="text-lg font-semibold text-blue-200 mb-2">Financial Analysis Summary</h2>
              <p className="text-gray-300">
                Based on your financial history, we have identified {suggestions.length} actionable 
                opportunities for financial optimization and wealth-building.
              </p>
            </div>

            {/* Suggestions List */}
            <div className="space-y-4">
              {suggestions.map((suggestion) => {
                const IconComponent = suggestion.icon;
                return (
                  <div
                    key={suggestion.id}
                    className={`border rounded-lg p-4 ${priorityColors[suggestion.priority]}`}
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-2 rounded-full bg-white/10">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-semibold">{suggestion.title}</h3>
                          <span className="text-xs px-2 py-1 rounded-full bg-white/10">
                            {suggestion.priority.toUpperCase()}
                          </span>
                        </div>
                        
                        <p className="mb-3 text-gray-300">{suggestion.description}</p>
                        
                        {suggestion.actionItems && suggestion.actionItems.length > 0 && (
                          <div className="mb-3">
                            <h4 className="text-sm font-semibold text-blue-300 mb-1">Action Items:</h4>
                            <ul className="list-disc pl-5 text-gray-300 text-sm">
                              {suggestion.actionItems.map((item, index) => (
                                <li key={index}>{item}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                        
                        <div className="flex flex-wrap gap-4 text-sm text-gray-300">
                          {suggestion.potentialSavings && (
                            <div className="flex items-center gap-1">
                              <DollarSign className="w-4 h-4" />
                              Potential Impact: ${suggestion.potentialSavings.toLocaleString()}
                            </div>
                          )}
                          {suggestion.deadline && (
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              Target Date: {suggestion.deadline}
                            </div>
                          )}
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            Updated: Just now
                          </div>
                        </div>
                      </div>

                      <button className="flex items-center gap-1 px-3 py-1.5 bg-blue-600 hover:bg-blue-700 rounded-lg text-sm transition-colors">
                        Take Action
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Learning Resources */}
            <div className="border-t border-blue-800/50 pt-6">
              <h2 className="text-lg font-semibold mb-3">Related Resources</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <a href="#" className="block p-4 bg-white/10 border border-blue-800/50 rounded-lg hover:bg-white/20 transition-colors">
                  <h3 className="text-blue-400 font-semibold mb-1">Emergency Fund Basics</h3>
                  <p className="text-gray-300">Learn why emergency funds are crucial and how to build one efficiently.</p>
                </a>
                <a href="#" className="block p-4 bg-white/10 border border-blue-800/50 rounded-lg hover:bg-white/20 transition-colors">
                  <h3 className="text-blue-400 font-semibold mb-1">Investment Strategies for Beginners</h3>
                  <p className="text-gray-300">Simple approaches to building a diversified investment portfolio.</p>
                </a>
              </div>
            </div>
            
            <div className="bg-blue-900/30 p-4 rounded-lg border border-blue-400/50 flex items-start gap-2">
              <AlertTriangle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
              <p className="text-gray-300">
                These suggestions are generated based on your financial history and current best practices. 
                For personalized advice, consider consulting with a certified financial advisor.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Suggestions;