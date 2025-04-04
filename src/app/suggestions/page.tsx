'use client'

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { 
  Lightbulb, 
  TrendingUp, 
  AlertTriangle, 
  Calendar,
  ArrowRight,
  DollarSign,
  Clock,
  Moon,
  Send,
  Bot,
  User,
  Loader,
  PiggyBank,
  Target,
  Wallet
} from 'lucide-react';
import Link from 'next/link';

const GoalsPage = () => {
  const [chatMessages, setChatMessages] = useState([
    { id: 1, sender: 'bot', text: 'Hello! I\'m your MOON.ai financial assistant. How can I help with your financial goals today?' }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isSending, setIsSending] = useState(false);
  const [isDemo, setIsDemo] = useState(false);
  const chatContainerRef = useRef(null);

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
      const accountId = localStorage.getItem('accountId');
      
      if (!accountId) {
        console.log('No account ID found, using demo data');
        setSuggestions(generateDemoSuggestions());
        setIsDemo(true);
        return;
      }
      
      console.log(`Fetching data for account: ${accountId}`);
      
      try {
        const response = await fetch(`https://localhost:5000/agent/analyze/${accountId}`);
        
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

  // Auto-scroll to bottom of chat when new messages are added
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [chatMessages]);

  const handleSendMessage = async () => {
    console.log('handleSendMessage called with input:', inputMessage);
    if (inputMessage.trim() === '' || isSending) {
      console.log('Message empty or already sending, returning');
      return;
    }
    
    // Add user message
    const newUserMessage = {
      id: chatMessages.length + 1,
      sender: 'user',
      text: inputMessage
    };
    
    console.log('Adding user message to chat:', newUserMessage);
    setChatMessages(prev => [...prev, newUserMessage]);
    
    const messageToSend = inputMessage;
    setInputMessage('');
    setIsSending(true);
    
    try {
      const accountId = localStorage.getItem('accountId');
      console.log('Account ID from localStorage:', accountId);
      
      if (!accountId) {
        // Demo mode - simulate a response instead of calling the API
        await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate API delay
        
        let response;
        if (messageToSend.toLowerCase().includes('savings') || messageToSend.toLowerCase().includes('save')) {
          response = "Based on your spending patterns, you could save approximately $350 per month by reducing discretionary spending. I recommend setting up an automatic transfer to your savings account on paydays.";
        } else if (messageToSend.toLowerCase().includes('debt') || messageToSend.toLowerCase().includes('loan')) {
          response = "I suggest prioritizing your high-interest credit card debt first. Using the debt avalanche method, you could be debt-free in approximately 18 months with your current payment level.";
        } else if (messageToSend.toLowerCase().includes('invest') || messageToSend.toLowerCase().includes('portfolio')) {
          response = "Your current asset allocation is too concentrated in a single sector. Consider diversifying by adding index funds to reduce risk while maintaining similar returns.";
        } else if (messageToSend.toLowerCase().includes('budget')) {
          response = "Looking at your spending patterns, your housing costs are within the recommended 30% of income, but your food and entertainment spending is above average. You might want to consider setting category limits in these areas.";
        } else {
          response = "I'm here to help with your financial planning questions. You can ask me about savings strategies, debt management, investment options, or budget optimization.";
        }
        
        const botResponse = {
          id: chatMessages.length + 2,
          sender: 'bot',
          text: response
        };
        
        setChatMessages(prev => [...prev, botResponse]);
      } else {
        // Real API call
        console.log('About to call API with payload:', { query: messageToSend });
        const response = await fetch(`https://localhost:5000/agent/chat/${accountId}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ query: messageToSend }),
        });

        console.log('API response status:', response.status);
        
        if (!response.ok) {
          throw new Error(`API error: ${response.status} ${response.statusText}`);
        }
        
        const data = await response.json();
        console.log('API response data:', data);
        
        // Add bot response
        const botResponse = {
          id: chatMessages.length + 2,
          sender: 'bot',
          text: data.analysis || data.response || "I'm sorry, I couldn't process your request. Please try again."
        };

        console.log('Adding bot response to chat:', botResponse);
        setChatMessages(prev => [...prev, botResponse]);
      }
    } catch (error) {
      console.error('Chat error:', error);
      
      // Add error message from bot
      const errorResponse = {
        id: chatMessages.length + 2,
        sender: 'bot',
        text: `I encountered an error: ${error.message}. Please try again later.`
      };
      
      console.log('Adding error response to chat:', errorResponse);
      setChatMessages(prev => [...prev, errorResponse]);
    } finally {
      setIsSending(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

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
          <Link href="/insights" className="hover:text-blue-300 transition-colors">Insights</Link>
          <Link href="/goals" className="hover:text-blue-300 transition-colors">Goals</Link>
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

      <div className="flex flex-col lg:flex-row gap-6 p-8 sm:px-20 pb-20">
        {/* Main Content Area */}
        <div className="flex-1">
          <div className="bg-white/10 backdrop-blur-lg rounded-lg border border-blue-800/50 overflow-hidden">
            <div className="bg-gradient-to-r from-blue-800 to-blue-900 p-6">
              <div className="flex items-center gap-2 text-xl font-bold">
                <Lightbulb className="w-6 h-6" />
                Financial Goals &amp; Recommendations
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

        {/* Chat Section */}
        <div className="lg:w-96 flex flex-col h-full">
          <div className="bg-white/10 backdrop-blur-lg rounded-lg border border-blue-800/50 overflow-hidden flex flex-col h-[calc(100vh-10rem)]">
            <div className="bg-gradient-to-r from-blue-800 to-blue-900 p-4">
              <div className="flex items-center gap-2 font-bold">
                <Bot className="w-5 h-5" />
                Financial Assistant
              </div>
              <p className="text-blue-200 text-sm">Get answers to your financial questions</p>
            </div>

            <div 
              ref={chatContainerRef}
              className="flex-1 overflow-y-auto p-4 space-y-4"
            >
              {chatMessages.map((message) => (
                <div 
                  key={message.id} 
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div 
                    className={`max-w-xs rounded-lg px-3 py-2 ${
                      message.sender === 'user' 
                        ? 'bg-blue-600 text-white rounded-tr-none' 
                        : 'bg-blue-900/50 border border-blue-800 text-blue-100 rounded-tl-none'
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      {message.sender === 'user' ? (
                        <User className="w-4 h-4" />
                      ) : (
                        <Bot className="w-4 h-4" />
                      )}
                      <span className="text-xs font-semibold">
                        {message.sender === 'user' ? 'You' : 'MOON.ai'}
                      </span>
                    </div>
                    <p>{message.text}</p>
                  </div>
                </div>
              ))}
              {isSending && (
                <div className="flex justify-start">
                  <div className="max-w-xs rounded-lg px-3 py-2 bg-blue-900/50 border border-blue-800 text-blue-100 rounded-tl-none">
                    <div className="flex items-center gap-2 mb-1">
                      <Bot className="w-4 h-4" />
                      <span className="text-xs font-semibold">MOON.ai</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-150"></div>
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-300"></div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="p-4 border-t border-blue-800/50 bg-blue-950/50">
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyDown={handleKeyPress}
                  placeholder="Type your question..."
                  className="flex-1 bg-blue-900/30 text-white placeholder-blue-300/50 border border-blue-800/50 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  disabled={isSending}
                />
                <button
                  onClick={handleSendMessage}
                  disabled={isSending || inputMessage.trim() === ''}
                  className={`p-2 ${isSending ? 'bg-blue-700' : 'bg-blue-600 hover:bg-blue-700'} rounded-lg transition-colors`}
                >
                  {isSending ? <Loader className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
                </button>
              </div>
              <div className="text-blue-400/70 text-xs mt-2">
                Ask about financial goals, investment strategies, or clarification on recommendations
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoalsPage;