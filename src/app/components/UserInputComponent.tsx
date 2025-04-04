'use client'

import React, { useState } from 'react';

export default function UserInputComponent() {
  const [inputValue, setInputValue] = useState('');
  const [submittedValue, setSubmittedValue] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  
  const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
  
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (inputValue.trim()) {
      setSubmittedValue(inputValue);
      setIsLoading(true);
      setError('');
      
      try {
        const response = await fetch('https://api.tokenmetrics.com/v2/tmai', {
          method: 'POST',
          headers: {
            'accept': 'application/json',
            'api_key': API_KEY,
            'content-type': 'application/json'
          },
          body: JSON.stringify({
            messages: [
              {
                user: inputValue
              }
            ]
          })
        });
        
        if (!response.ok) {
          throw new Error(`API error: ${response.status}`);
        }
        
        const data = await response.json();
        console.log('API Response:', data);
        
        // Extract the answer from the correct field in the response
        if (data && data.success && data.answer) {
          setResponse(data.answer);
        } else {
          setResponse('Received response from AI but could not find the answer.');
        }
      } catch (err) {
        console.error('Error fetching from API:', err);
        setError('Failed to get a response. Please try again later.');
      } finally {
        setIsLoading(false);
        setInputValue(''); // Clear input after submission
      }
    }
  };
  
  return (
    <div className="w-full max-w-2xl mx-auto mt-8 mb-12">
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Ask me about your crypto investments..."
          className="flex-grow px-4 py-3 rounded-full bg-white/20 backdrop-blur-lg 
                    border border-blue-400/30 text-white placeholder-blue-200/70 
                    focus:outline-none focus:ring-2 focus:ring-blue-400"
          disabled={isLoading}
        />
        <button 
          type="submit"
          className={`px-6 py-3 rounded-full text-white font-medium transition-colors
                    ${isLoading 
                      ? 'bg-blue-800 cursor-not-allowed' 
                      : 'bg-blue-500 hover:bg-blue-600'}`}
          disabled={isLoading}
        >
          {isLoading ? 'Thinking...' : 'Ask'}
        </button>
      </form>
      
      {(isLoading || response || error) && (
        <div className="mt-6 p-6 bg-white/10 backdrop-blur-lg rounded-lg border border-blue-400/30">
          {isLoading && (
            <div className="flex items-center justify-center py-4">
              <div className="animate-pulse text-blue-300">Getting insights from the moon...</div>
            </div>
          )}
          
          {!isLoading && response && (
            <div>
              <div className="mb-3 pb-2 border-b border-blue-400/30">
                <p className="text-sm text-blue-300">You asked:</p>
                <p className="text-white font-medium">{submittedValue}</p>
              </div>
              <div>
                <p className="text-sm text-blue-300">MOON.ai says:</p>
                <div className="text-white mt-2 whitespace-pre-wrap">{response}</div>
              </div>
            </div>
          )}
          
          {!isLoading && error && (
            <div className="text-red-300">
              <p className="font-medium">Error</p>
              <p>{error}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}