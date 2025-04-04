'use client'

import React, { useState, useEffect } from 'react';
import { Download, Filter, PieChart, ArrowUpRight, Moon, Wallet, LineChart as LineChartIcon, TrendingUp } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Link from 'next/link';

const InsightsPage = () => {
  const [activeTab, setActiveTab] = useState('summary');
  const [timeFilter, setTimeFilter] = useState('yearly');
  const [financialYear, setFinancialYear] = useState('2024');
  const [analysisData, setAnalysisData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isDemo, setIsDemo] = useState(false);

  // Generate demo data based on current date
  const generateDemoData = () => {
    // Create an array of dates covering a full month
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();
    
    // Generate multiple entries for different days in the month
    const financialEvents = [];
    
    // Salary - beginning of month
    financialEvents.push({
      accountId: "checking-demo",
      transactionType: "income",
      category: "salary",
      amount: 5000,
      date: `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-05`,
      budgetAllocation: 0,
      variance: 0,
      monthlyTrend: "stable"
    });
    
    // Regular expenses throughout month
    financialEvents.push({
      accountId: "checking-demo",
      transactionType: "expense",
      category: "housing",
      amount: 1500,
      date: `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-06`,
      budgetAllocation: 1550,
      variance: 50,
      monthlyTrend: "stable"
    });
    
    financialEvents.push({
      accountId: "checking-demo",
      transactionType: "expense",
      category: "groceries",
      amount: 120,
      date: `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-08`,
      budgetAllocation: 150,
      variance: 30,
      monthlyTrend: "decreasing"
    });
    
    financialEvents.push({
      accountId: "checking-demo",
      transactionType: "expense",
      category: "groceries",
      amount: 85,
      date: `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-15`,
      budgetAllocation: 150,
      variance: 65,
      monthlyTrend: "decreasing"
    });
    
    financialEvents.push({
      accountId: "checking-demo",
      transactionType: "expense",
      category: "groceries",
      amount: 110,
      date: `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-22`,
      budgetAllocation: 150,
      variance: 40,
      monthlyTrend: "decreasing"
    });
    
    financialEvents.push({
      accountId: "checking-demo",
      transactionType: "expense",
      category: "utilities",
      amount: 180,
      date: `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-10`,
      budgetAllocation: 200,
      variance: 20,
      monthlyTrend: "stable"
    });
    
    financialEvents.push({
      accountId: "checking-demo",
      transactionType: "expense",
      category: "dining",
      amount: 75,
      date: `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-12`,
      budgetAllocation: 300,
      variance: 225,
      monthlyTrend: "decreasing"
    });
    
    financialEvents.push({
      accountId: "checking-demo",
      transactionType: "expense",
      category: "dining",
      amount: 95,
      date: `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-19`,
      budgetAllocation: 300,
      variance: 205,
      monthlyTrend: "decreasing"
    });
    
    // Interest - mid-month
    financialEvents.push({
      accountId: "savings-demo",
      transactionType: "income",
      category: "interest",
      amount: 25,
      date: `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-15`,
      budgetAllocation: 0,
      variance: 0,
      monthlyTrend: "increasing"
    });
    
    // Transportation
    financialEvents.push({
      accountId: "checking-demo",
      transactionType: "expense",
      category: "transportation",
      amount: 140,
      date: `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-20`,
      budgetAllocation: 150,
      variance: 10,
      monthlyTrend: "stable"
    });
    
    // Entertainment
    financialEvents.push({
      accountId: "checking-demo",
      transactionType: "expense",
      category: "entertainment",
      amount: 65,
      date: `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-24`,
      budgetAllocation: 100,
      variance: 35,
      monthlyTrend: "stable"
    });
    
    // Transfer to savings
    financialEvents.push({
      accountId: "savings-demo",
      transactionType: "income",
      category: "transfer",
      amount: 500,
      date: `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-06`,
      budgetAllocation: 500,
      variance: 0,
      monthlyTrend: "stable"
    });
    
    // Secondary income
    financialEvents.push({
      accountId: "checking-demo",
      transactionType: "income",
      category: "freelance",
      amount: 350,
      date: `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-18`,
      budgetAllocation: 0,
      variance: 0,
      monthlyTrend: "increasing"
    });
  
    // Calculate monthly totals
    const totalIncome = financialEvents
      .filter(event => event.transactionType === 'income')
      .reduce((sum, event) => sum + event.amount, 0);
      
    const totalExpenses = financialEvents
      .filter(event => event.transactionType === 'expense')
      .reduce((sum, event) => sum + event.amount, 0);
      
    const netCashFlow = totalIncome - totalExpenses;
    const savingsRate = netCashFlow / totalIncome;
    
    return {
      analysis: {
        financialEvents,
        financialHealth: {
          monthlyExpenses: totalExpenses,
          monthlyIncome: totalIncome,
          savingsRate: savingsRate,
          emergencyFundStatus: "building",
          debtToIncomeRatio: 0.32
        }
      },
      suggestions: [
        "Your grocery spending is trending downward - nice work keeping to your budget!",
        "Consider increasing your emergency fund contributions to reach the recommended 6-month coverage.",
        "Your housing expenses are within the recommended 30% of income threshold.",
        "You're currently saving " + (savingsRate * 100).toFixed(0) + "% of your income - aim for 20% for optimal financial health."
      ]
    };
  };

  // Fetch data from API
  useEffect(() => {
    const fetchAnalysisData = async () => {
      setLoading(true);
      
      try {
        // Get the account ID from localStorage
        const accountId = localStorage.getItem('accountId') || '';
        
        // If no account ID, use demo data instead of throwing an error
        if (!accountId) {
          console.log('No account ID found, using demo data');
          setAnalysisData(generateDemoData());
          setIsDemo(true);
          return;
        }
        
        // Call your API endpoint
        try {
          const response = await fetch(`https://localhost:5000/agent/analyze/${accountId}`);
          
          if (!response.ok) {
            throw new Error(`API error: ${response.status} ${response.statusText}`);
          }
          
          const data = await response.json();
          
          if (data.result === 'error') {
            throw new Error(`Server error: ${data.error}`);
          }
          
          setAnalysisData(data);
        } catch (apiError) {
          console.error('API error:', apiError);
          // If API call fails, fall back to demo data
          setAnalysisData(generateDemoData());
          setIsDemo(true);
        }
      } catch (err) {
        console.error('Error in data handling:', err);
        setAnalysisData(generateDemoData());
        setIsDemo(true);
      } finally {
        setLoading(false);
      }
    };

    fetchAnalysisData();
  }, []);

  // Calculate financial totals
  const calculateTotals = () => {
    if (!analysisData || !analysisData.analysis || !analysisData.analysis.financialEvents) {
      return { totalIncome: 0, totalExpenses: 0, netCashFlow: 0 };
    }

    const events = analysisData.analysis.financialEvents;
    const totalIncome = events
      .filter(event => event.transactionType === 'income')
      .reduce((sum, event) => sum + event.amount, 0);

    const totalExpenses = events
      .filter(event => event.transactionType === 'expense')
      .reduce((sum, event) => sum + event.amount, 0);

    return {
      totalIncome,
      totalExpenses,
      netCashFlow: totalIncome - totalExpenses
    };
  };

  const { totalIncome, totalExpenses, netCashFlow } = calculateTotals();

  // FinancialChart Component
  const FinancialChart = ({ data }) => {
    // Sample data to fall back on if data is empty
    const sampleData = [
      { label: 'Jan', income: 5000, expenses: 3000, savings: 2000 },
      { label: 'Feb', income: 5200, expenses: 3100, savings: 2100 },
      { label: 'Mar', income: 5100, expenses: 3300, savings: 1800 },
      { label: 'Apr', income: 5300, expenses: 3200, savings: 2100 },
      { label: 'May', income: 5500, expenses: 3400, savings: 2100 },
      { label: 'Jun', income: 5400, expenses: 3100, savings: 2300 },
    ];
    
    // Use sample data if no data is provided or data is empty
    const chartData = data && data.length > 0 ? data : sampleData;
  
    return (
      <div className="h-96 mb-6 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={chartData}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis 
              dataKey="label" 
              stroke="#9CA3AF"
            />
            <YAxis stroke="#9CA3AF" />
            <Tooltip 
              formatter={(value) => `$${value.toLocaleString(undefined, {maximumFractionDigits: 2})}`}
              contentStyle={{ 
                backgroundColor: '#1F2937',
                border: '1px solid #4B5563'
              }}
            />
            <Legend />
            <Line 
              type="monotone" 
              dataKey="income" 
              stroke="#4ADE80" 
              strokeWidth={2}
              activeDot={{ r: 8 }}
              name="Income"
              isAnimationActive={true}
            />
            <Line 
              type="monotone" 
              dataKey="expenses" 
              stroke="#F87171" 
              strokeWidth={2}
              activeDot={{ r: 8 }}
              name="Expenses"
              isAnimationActive={true}
            />
            <Line 
              type="monotone" 
              dataKey="savings" 
              stroke="#60A5FA" 
              strokeWidth={2}
              activeDot={{ r: 8 }}
              name="Savings"
              isAnimationActive={true}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  };

  // Prepare chart data
  const prepareChartData = () => {
    if (!analysisData || !analysisData.analysis || !analysisData.analysis.financialEvents) return [];
    
    const events = analysisData.analysis.financialEvents;
    
    // Group by month for yearly view or by day for monthly view
    const groupedData = {};
    
    events.forEach(event => {
      const date = new Date(event.date);
      
      let key;
      if (timeFilter === 'yearly') {
        // Group by month for yearly view
        const month = date.toLocaleString('default', { month: 'short' });
        key = month;
      } else {
        // Group by day for monthly view
        key = date.getDate().toString();
      }
      
      if (!groupedData[key]) {
        groupedData[key] = { income: 0, expenses: 0, savings: 0 };
      }
      
      if (event.transactionType === 'income') {
        groupedData[key].income += event.amount;
      } else if (event.transactionType === 'expense') {
        groupedData[key].expenses += event.amount;
      }
      
      // Calculate savings
      groupedData[key].savings = groupedData[key].income - groupedData[key].expenses;
    });
    
    // Convert to array format for chart and sort by date/label
    return Object.keys(groupedData)
      .map(key => ({
        label: key,
        income: groupedData[key].income,
        expenses: groupedData[key].expenses,
        savings: groupedData[key].savings
      }))
      .sort((a, b) => {
        // If using month names for yearly view
        if (timeFilter === 'yearly') {
          const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
          return months.indexOf(a.label) - months.indexOf(b.label);
        }
        // If using day numbers for monthly view
        return parseInt(a.label) - parseInt(b.label);
      });
  };

  const chartData = prepareChartData();

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-900 to-blue-950 text-white p-8 flex items-center justify-center">
        <div className="text-xl">Loading financial insights...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-blue-950 text-white p-8 pb-20 sm:p-20">
      <header className="flex items-center justify-between mb-16">
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
        <div className="max-w-6xl mx-auto mb-6 bg-blue-700/30 border border-blue-500/50 rounded-lg p-4 flex items-center gap-3">
          <Wallet className="w-5 h-5 text-blue-300" />
          <p className="text-blue-100">
            Viewing demo financial data. <Link href="/dashboard" className="underline hover:text-white">Connect your accounts</Link> to see your personal insights.
          </p>
        </div>
      )}

      <div className="max-w-6xl mx-auto space-y-6">
        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-blue-800/50">
            <div className="text-gray-300 text-sm">Monthly Income</div>
            <div className="text-2xl font-bold mb-2">${totalIncome.toLocaleString(undefined, {maximumFractionDigits: 2})}</div>
            <div className="flex items-center text-green-400">
              <ArrowUpRight className="w-4 h-4" />
              <span className="text-sm ml-1">From all sources</span>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-blue-800/50">
            <div className="text-gray-300 text-sm">Monthly Expenses</div>
            <div className="text-2xl font-bold mb-2">${totalExpenses.toLocaleString(undefined, {maximumFractionDigits: 2})}</div>
            <div className="flex items-center text-blue-400">
              <Filter className="w-4 h-4" />
              <span className="text-sm ml-1">Across all categories</span>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-blue-800/50">
            <div className="text-gray-300 text-sm">Net Cash Flow</div>
            <div className="text-2xl font-bold mb-2">${netCashFlow.toLocaleString(undefined, {maximumFractionDigits: 2})}</div>
            <div className="flex items-center text-gray-300">
              <TrendingUp className="w-4 h-4" />
              <span className="text-sm ml-1">Monthly savings</span>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-blue-800/50">
            <div className="text-gray-300 text-sm">Savings Rate</div>
            <div className="text-2xl font-bold mb-2">{(analysisData.analysis.financialHealth.savingsRate * 100).toFixed(0)}%</div>
            <div className="flex items-center text-blue-400">
              <PieChart className="w-4 h-4" />
              <span className="text-sm ml-1">Of total income</span>
            </div>
          </div>
        </div>

        {/* Detailed Analysis */}
        <div className="bg-white/10 backdrop-blur-lg rounded-lg border border-blue-800/50">
          <div className="p-6 border-b border-blue-800/50">
            <div className="flex justify-between items-center flex-wrap gap-4">
              <div className="flex items-center gap-4">
                <h2 className="text-xl font-semibold">Financial Analysis</h2>
                <select 
                  value={financialYear}
                  onChange={(e) => setFinancialYear(e.target.value)}
                  className="bg-white/5 border border-blue-800/50 rounded-lg px-3 py-2 text-white"
                >
                  <option value="2024">2024 Calendar Year</option>
                  <option value="2023">2023 Calendar Year</option>
                </select>
                <select
                  value={timeFilter}
                  onChange={(e) => setTimeFilter(e.target.value)}
                  className="bg-white/5 border border-blue-800/50 rounded-lg px-3 py-2 text-white"
                >
                  <option value="yearly">Annual View</option>
                  <option value="monthly">Monthly View</option>
                </select>
              </div>
              <Link href="/goals" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors">
                <TrendingUp className="w-4 h-4" />
                Financial Goals
              </Link>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors">
                <Download className="w-4 h-4" />
                Export Report
              </button>
            </div>
          </div>

          <div className="p-6">
            {/* Tabs */}
            <div className="border-b border-blue-800/50 mb-6">
              <div className="flex gap-4">
                {['summary', 'transactions', 'budget', 'spending_analysis'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-2 text-sm capitalize ${
                      activeTab === tab 
                        ? 'text-blue-400 border-b-2 border-blue-400' 
                        : 'text-gray-300 hover:text-blue-300'
                    }`}
                  >
                    {tab.replace('_', ' ')}
                  </button>
                ))}
              </div>
            </div>

            {activeTab === 'summary' && (
              <>
                {/* Chart */}
                <FinancialChart data={chartData} />

                {/* Suggestions */}
                <div className="bg-white/5 rounded-lg p-6 border border-blue-800/50">
                  <h3 className="text-lg font-semibold mb-4">Financial Insights</h3>
                  <ul className="space-y-2">
                    {analysisData.suggestions.map((suggestion, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Moon className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                        <span>{suggestion}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            )}

            {activeTab === 'transactions' && (
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-blue-800/50">
                      <th className="px-4 py-2 text-left">Date</th>
                      <th className="px-4 py-2 text-left">Category</th>
                      <th className="px-4 py-2 text-left">Type</th>
                      <th className="px-4 py-2 text-right">Amount ($)</th>
                      <th className="px-4 py-2 text-right">Budget</th>
                      <th className="px-4 py-2 text-right">Variance</th>
                      <th className="px-4 py-2 text-center">Trend</th>
                    </tr>
                  </thead>
                  <tbody>
                    {analysisData.analysis.financialEvents.map((event, index) => (
                      <tr key={index} className="border-b border-blue-800/30 hover:bg-white/5">
                        <td className="px-4 py-2">{new Date(event.date).toLocaleDateString()}</td>
                        <td className="px-4 py-2 capitalize">{event.category}</td>
                        <td className="px-4 py-2 capitalize">{event.transactionType}</td>
                        <td className={`px-4 py-2 text-right ${event.transactionType === 'income' ? 'text-green-400' : 'text-red-400'}`}>
                          {event.transactionType === 'income' ? '+' : '-'}${event.amount.toFixed(2)}
                        </td>
                        <td className="px-4 py-2 text-right">${event.budgetAllocation?.toFixed(2) || '0.00'}</td>
                        <td className={`px-4 py-2 text-right ${event.variance > 0 ? 'text-green-400' : event.variance < 0 ? 'text-red-400' : 'text-gray-400'}`}>
                          {event.variance ? `${event.variance > 0 ? '+' : ''}${event.variance.toFixed(2)}` : '0.00'}
                        </td>
                        <td className="px-4 py-2 text-center">
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            event.monthlyTrend === 'increasing' 
                              ? 'bg-green-900/50 text-green-200' 
                              : event.monthlyTrend === 'decreasing'
                                ? 'bg-red-900/50 text-red-200'
                                : 'bg-blue-900/50 text-blue-200'
                          }`}>
                            {event.monthlyTrend || 'stable'}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {activeTab === 'spending_analysis' && (
              <div className="bg-white/5 rounded-lg p-6 border border-blue-800/50">
                <h3 className="text-lg font-semibold mb-4">Financial Health Summary</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium mb-2">Income & Expenses</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Monthly Income:</span>
                        <span>${analysisData.analysis.financialHealth.monthlyIncome.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Monthly Expenses:</span>
                        <span>${analysisData.analysis.financialHealth.monthlyExpenses.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between font-bold">
                        <span>Net Cash Flow:</span>
                        <span>${(analysisData.analysis.financialHealth.monthlyIncome - analysisData.analysis.financialHealth.monthlyExpenses).toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2">Financial Ratios</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Savings Rate:</span>
                        <span>{(analysisData.analysis.financialHealth.savingsRate * 100).toFixed(0)}%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Debt-to-Income Ratio:</span>
                        <span>{(analysisData.analysis.financialHealth.debtToIncomeRatio * 100).toFixed(0)}%</span>
                      </div>
                      <div className="flex justify-between font-bold">
                        <span>Emergency Fund Status:</span>
                        <span className="capitalize">{analysisData.analysis.financialHealth.emergencyFundStatus}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsightsPage;