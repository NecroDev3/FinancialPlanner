'use client'

import React, { useState, useEffect } from 'react';
import { ArrowRight, Clock, AlertCircle, Moon, LogOut } from 'lucide-react';
import Link from 'next/link';
import { useSyncProviders } from "../hooks/useSyncProviders";
import {
  ConnectWallet,
  Wallet as BaseWallet,
  WalletDropdown,
  WalletAdvancedAddressDetails,
  WalletAdvancedTokenHoldings,
  WalletAdvancedTransactionActions,
  WalletAdvancedWalletActions,
} from '@coinbase/onchainkit/wallet';
import { Avatar, Name } from '@coinbase/onchainkit/identity';
import { Wallet } from 'lucide-react';

// Types
interface ValidationErrors {
  walletAddress?: string;
  timeframe?: string;
  analysisType?: string;
  network?: string;
}

interface NetworkOption {
  id: string;
  name: string;
  chainId: number;
}

interface WalletPermission {
  invoker: string;
  parentCapability: string;
  caveats: unknown[];
}

interface EIP6963ProviderDetail {
  info: {
    uuid: string;
    name: string;
    icon: string;
  };
  provider: any;
}

const SUPPORTED_NETWORKS: NetworkOption[] = [
  { id: 'eth', name: 'Ethereum', chainId: 1 },
  { id: 'base', name: 'Base', chainId: 8453 },
  { id: 'arbitrum', name: 'Arbitrum', chainId: 42161 }
];

const Monitor = () => {
  // State management
  const [hasPermissions, setHasPermissions] = useState(false);
  const [walletAddress, setWalletAddress] = useState('');
  const [selectedTimeframe, setSelectedTimeframe] = useState('year');
  const [selectedNetwork, setSelectedNetwork] = useState<string>('eth');
  const [currentChainId, setCurrentChainId] = useState<string | null>(null);
  const [selectedWallet, setSelectedWallet] = useState<EIP6963ProviderDetail>();
  const [userAccount, setUserAccount] = useState<string>('');
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const providers = useSyncProviders();
  const [agentName, setAgentName] = useState('');
  
  // Base Wallet Connect integration
  const [baseWalletConnected, setBaseWalletConnected] = useState(false);
  
  // Handle Base wallet connection
  const handleBaseWalletConnection = (address: string) => {
    if (address) {
      setWalletAddress(address);
      setUserAccount(address);
      setBaseWalletConnected(true);
      
      // Store the wallet address in localStorage
      localStorage.setItem('walletAddress', address);
      
      // Check if user has an agent
      fetch('https://localhost5000/agent/has_agent/' + address)
        .then(response => response.json())
        .then(data => {
          if (data.result === 'ok') {
            setAgentName(data.name);
          }
        })
        .catch(error => console.error('Error fetching agent data:', error));
    } else {
      if (baseWalletConnected) {
        handleDisconnect();
        setBaseWalletConnected(false);
      }
    }
  };

  useEffect(() => {
    if (selectedWallet) {
      // Initial chain detection
      detectCurrentChain(selectedWallet.provider);
      
      // Set up chain change listener
      const handleChainChanged = (chainId: string) => {
        console.log('Chain changed to:', chainId);
        setCurrentChainId(chainId);
        
        // Check if the new chain is supported
        const newChainIdDecimal = parseInt(chainId, 16);
        const network = SUPPORTED_NETWORKS.find(n => n.chainId === newChainIdDecimal);
        
        if (network) {
          setSelectedNetwork(network.id);
        } else {
          setErrors(prev => ({
            ...prev,
            network: 'Unsupported network detected. Please switch to a supported network.'
          }));
        }
      };

      selectedWallet.provider.on("chainChanged", handleChainChanged);

      // Cleanup
      return () => {
        selectedWallet.provider.removeListener("chainChanged", handleChainChanged);
      };
    }
  }, [selectedWallet]);

  // Add permission management functions
  const checkPermissions = async (provider: any): Promise<boolean> => {
    try {
      const permissions = await provider.request({
        method: "wallet_getPermissions"
      }) as WalletPermission[];

      const hasAccountPermission = permissions.some(
        permission => permission.parentCapability === "eth_accounts"
      );

      setHasPermissions(hasAccountPermission);
      return hasAccountPermission;
    } catch (error) {
      console.error("Error checking permissions:", error);
      return false;
    }
  };

  const requestPermissions = async (provider: any): Promise<boolean> => {
    try {
      const permissions = await provider.request({
        method: "wallet_requestPermissions",
        params: [{ eth_accounts: {} }]
      }) as WalletPermission[];

      const hasAccountPermission = permissions.some(
        permission => permission.parentCapability === "eth_accounts"
      );

      setHasPermissions(hasAccountPermission);
      return hasAccountPermission;
    } catch (error: any) {
      if (error.code === 4001) {
        setErrors(prev => ({
          ...prev,
          permissions: "Permissions needed to continue."
        }));
      } else {
        setErrors(prev => ({
          ...prev,
          permissions: "Failed to request permissions"
        }));
      }
      return false;
    }
  };

  const revokePermissions = async () => {
    if (baseWalletConnected) {
      handleDisconnect();
      setBaseWalletConnected(false);
      return;
    }
    
    if (!selectedWallet?.provider) return;

    try {
      await selectedWallet.provider.request({
        method: "wallet_revokePermissions",
        params: [{ eth_accounts: {} }]
      });

      handleDisconnect();
      console.log("Permissions revoked successfully");
    } catch (error) {
      console.error("Error revoking permissions:", error);
    }
  };
  
  const handleDisconnect = () => {
    // Reset states
    setHasPermissions(false);
    setWalletAddress('');
    setUserAccount('');
    setSelectedWallet(undefined);
    setCurrentChainId(null);
    localStorage.removeItem('walletAddress');
  };

  const detectCurrentChain = async (provider: any) => {
    try {
      const chainId = await provider.request({ method: "eth_chainId" });
      setCurrentChainId(chainId);
      
      // Update selected network based on detected chain
      const chainIdDecimal = parseInt(chainId, 16);
      const network = SUPPORTED_NETWORKS.find(n => n.chainId === chainIdDecimal);
      
      if (network) {
        setSelectedNetwork(network.id);
      } else {
        setErrors(prev => ({
          ...prev,
          network: 'Unsupported network detected. Please switch to a supported network.'
        }));
      }
    } catch (error) {
      console.error('Error detecting chain:', error);
      setErrors(prev => ({
        ...prev,
        network: 'Failed to detect current network'
      }));
    }
  };

  // Validation functions
  const validateWalletAddress = (address: string): boolean => {
    const ethAddressRegex = /^0x[a-fA-F0-9]{40}$/;
    return ethAddressRegex.test(address);
  };

  const validateForm = (): boolean => {
    const newErrors: ValidationErrors = {};

    if (!walletAddress) {
      newErrors.walletAddress = 'Wallet address is required';
    } else if (!validateWalletAddress(walletAddress)) {
      newErrors.walletAddress = 'Invalid wallet address';
    }

    if (!selectedNetwork) {
      newErrors.network = 'Please select a network';
    }

    // Validate that current chain matches selected network
    if (currentChainId) {
      const currentChainIdDecimal = parseInt(currentChainId, 16);
      const selectedChainId = SUPPORTED_NETWORKS.find(n => n.id === selectedNetwork)?.chainId;
      
      if (currentChainIdDecimal !== selectedChainId) {
        newErrors.network = 'Selected network does not match connected network';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const switchNetwork = async (chainId: number) => {
    if (!selectedWallet?.provider) return;
    
    try {
      await (window as any).ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: `0x${chainId.toString(16)}` }],
      });

      // Network switch successful, update UI
      setCurrentChainId(`0x${chainId.toString(16)}`);
      const network = SUPPORTED_NETWORKS.find(n => n.chainId === chainId);
      if (network) {
        setSelectedNetwork(network.id);
      }

    } catch (error: any) {
      if (error.code === 4902) {
        setErrors(prev => ({
          ...prev,
          network: 'Network not added to wallet. Please add it first.'
        }));
      } else {
        setErrors(prev => ({
          ...prev,
          network: 'Failed to switch network'
        }));
      }
      throw error;
    }
  };

  // Update the handleConnect function
  const handleConnect = async (providerWithInfo: EIP6963ProviderDetail) => {
    try {
      setErrors({});

      // First check existing permissions
      const hasExistingPermissions = await checkPermissions(providerWithInfo.provider);
      
      // If no permissions, request them
      if (!hasExistingPermissions) {
        const permissionsGranted = await requestPermissions(providerWithInfo.provider);
        if (!permissionsGranted) {
          throw new Error('Required permissions not granted');
        }
      }

      // Detect current chain
      await detectCurrentChain(providerWithInfo.provider);
      
      // Switch network if needed
      const network = SUPPORTED_NETWORKS.find(n => n.id === selectedNetwork);
      if (!network) {
        throw new Error('Invalid network selected');
      }

      await switchNetwork(network.chainId);

      const accounts = await providerWithInfo.provider.request({
        method: "eth_requestAccounts"
      });
      
      if (!accounts || !Array.isArray(accounts)) {
        throw new Error('No accounts returned');
      }

      const address = accounts[0];
      if (!validateWalletAddress(address)) {
        throw new Error('Invalid wallet address format');
      }

      // Store the wallet address in localStorage
      localStorage.setItem('walletAddress', address);

      setSelectedWallet(providerWithInfo);
      setUserAccount(address);
      setWalletAddress(address);

      fetch('https://localhost5000/agent/has_agent/' + address)
        .then(response => response.json())
        .then(data => {
          if (data.result === 'ok') {
            setAgentName(data.name);
          }
        })
        .catch(error => console.error('Error fetching agent data:', error));
    } catch (error) {
      console.error(error);
      setErrors(prev => ({
        ...prev,
        walletAddress: error instanceof Error ? error.message : 'Failed to connect wallet'
      }));
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      if (!validateForm()) {
        throw new Error('Please fix validation errors before submitting');
      }

      // Prepare the analysis data
      const analysisData = {
        walletAddress,
        network: selectedNetwork,
        chainId: currentChainId,
        timeframe: selectedTimeframe,
        analysisTypes: {
          portfolioAnalysis: (document.getElementById('portfolioAnalysis') as HTMLInputElement)?.checked,
          riskAssessment: (document.getElementById('riskAssessment') as HTMLInputElement)?.checked,
          investmentYield: (document.getElementById('investmentYield') as HTMLInputElement)?.checked,
        },
        investmentStrategy: (document.getElementById('investmentStrategy') as HTMLSelectElement)?.value,
        allocationMethod: (document.getElementById('allocationMethod') as HTMLSelectElement)?.value
      };

      console.log('Submitting analysis:', analysisData);
      
      // Check if we need to deploy an agent first
      if (agentName === '') {
        console.log('No agent found, deploying new agent...');
        // Create a name for the agent
        const agentNameToUse = `FinAdvisor_${walletAddress.slice(0, 6)}`;
        
        // Deploy agent
        const deployResponse = await fetch(`https://localhost5000/agent/deploy/${walletAddress}/${agentNameToUse}`);
        
        const deployData = await deployResponse.json();
        if (deployData.result === 'ok') {
          console.log('Agent deployed successfully:', deployData.name);
          setAgentName(deployData.name);
          // Wait a moment for the agent to be fully deployed
          await new Promise(resolve => setTimeout(resolve, 2000));
        } else {
          throw new Error(deployData.error || 'Failed to deploy agent');
        }
      }
      // Navigate to results
      window.location.href = '/insights';
    } catch (error) {
      console.error(error);
      setErrors(prev => ({
        ...prev,
        submit: error instanceof Error ? error.message : 'Failed to submit analysis'
      }));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-blue-950 text-white p-8 pb-20 sm:p-20">
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

      <div className="max-w-4xl mx-auto">
        <div className="bg-white/10 backdrop-blur-lg rounded-lg overflow-hidden border border-blue-800/50">
          <div className="bg-gradient-to-r from-blue-800 to-blue-900 p-6">
            <div className="text-2xl font-bold flex items-center gap-2">
              <Wallet className="w-6 h-6" />
              Investment Portfolio Analysis
            </div>
            <p className="text-blue-200">Get personalized insights for your investment strategy</p>
          </div>

          <div className="p-6 space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Wallet Address</label>
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="text"
                  value={walletAddress}
                  readOnly
                  placeholder="Connect your wallet to begin analysis"
                  className={`flex-1 p-3 rounded-lg bg-white/5 border ${errors.walletAddress ? 'border-red-500' : 'border-blue-800/50'} text-white placeholder:text-gray-400`}
                />
                <div className="flex gap-2">
                  <select
                    value={selectedNetwork}
                    onChange={(e) => setSelectedNetwork(e.target.value)}
                    disabled={true}
                    className={`p-3 rounded-lg bg-white/5 border border-blue-800/50 text-white ${
                      !walletAddress ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
                    } appearance-none`}
                  >
                    {SUPPORTED_NETWORKS.map((network) => (
                      <option key={network.id} value={network.id}>
                        {network.name}
                      </option>
                    ))}
                  </select>
                  
                  <div className="flex flex-wrap gap-2">
                    {walletAddress ? (
                      <button
                        onClick={revokePermissions}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg flex items-center gap-2"
                      >
                        <LogOut className="w-5 h-5" />
                        Disconnect
                      </button>
                    ) : (
                      <>
                        {/* Base Wallet Connect Component */}
                        <div className="bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors">
                          <BaseWallet onAddressChange={handleBaseWalletConnection}>
                            <ConnectWallet className="px-6 py-3 flex items-center gap-2">
                              <img 
                                src="https://assets-global.website-files.com/65425b197bd85d362d28771a/65cc4ed3cc0dd5b9ad9f0205_Base-Symbol.svg" 
                                alt="Base" 
                                className="w-6 h-6" 
                              />
                              <span>Base Wallet</span>
                            </ConnectWallet>
                            <WalletDropdown>
                              <div className="p-4 bg-slate-900 rounded-lg">
                                <WalletAdvancedAddressDetails />
                                <WalletAdvancedWalletActions />
                                <WalletAdvancedTransactionActions />
                                <WalletAdvancedTokenHoldings />
                              </div>
                            </WalletDropdown>
                          </BaseWallet>
                        </div>
                        
                        {/* Traditional EIP-6963 Wallet Connect */}
                        {providers.length > 0 ? providers?.map((provider: EIP6963ProviderDetail) => (
                          <button 
                            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                            key={provider.info.uuid} 
                            onClick={() => handleConnect(provider)}
                            disabled={isSubmitting}
                          >
                            <img src={provider.info.icon} alt={provider.info.name} className="w-6 h-6" />
                            <span>Connect</span>
                          </button>
                        )) : (
                          <div className="text-blue-500">
                            No Announced Wallet Providers
                          </div>
                        )}
                      </>
                    )}
                  </div>
                </div>
              </div>
              {errors.walletAddress && (
                <p className="mt-2 text-red-500 text-sm">{errors.walletAddress}</p>
              )}
              {errors.network && (
                <p className="mt-2 text-red-500 text-sm">{errors.network}</p>
              )}
              {currentChainId && (
                <p className="mt-2 text-gray-400 text-sm">
                  Connected to chain: {parseInt(currentChainId, 16)} 
                  ({SUPPORTED_NETWORKS.find(n => n.chainId === parseInt(currentChainId, 16))?.name || 'Unknown'})
                </p>
              )}
            </div>

            {/* Rest of the form components */}
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 bg-white/5 rounded-lg border border-blue-800/50">
                <h3 className="font-medium mb-2">Time Period</h3>
                <select
                  value={selectedTimeframe}
                  onChange={(e) => setSelectedTimeframe(e.target.value)}
                  className="w-full p-2 rounded bg-white/5 border border-blue-800/50 text-white"
                >
                  <option value="year">Past Year</option>
                  <option value="quarter">Past Quarter</option>
                  <option value="month">Past Month</option>
                  <option value="custom">Custom Range</option>
                </select>
              </div>

              <div className="p-4 bg-white/5 rounded-lg border border-blue-800/50">
                <h3 className="font-medium mb-2">Analysis Type</h3>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input id="portfolioAnalysis" type="checkbox" className="mr-2" defaultChecked />
                    Portfolio Analysis
                  </label>
                  <label className="flex items-center">
                    <input id="riskAssessment" type="checkbox" className="mr-2" defaultChecked />
                    Risk Assessment
                  </label>
                  <label className="flex items-center">
                    <input id="investmentYield" type="checkbox" className="mr-2" defaultChecked />
                    Investment Yield
                  </label>
                </div>
              </div>

              <div className="p-4 bg-white/5 rounded-lg border border-blue-800/50">
                <h3 className="font-medium mb-2">Investment Strategy</h3>
                <select id="investmentStrategy" className="w-full p-2 rounded bg-white/5 border border-blue-800/50 text-white mb-2">
                  <option value="growth">Growth Investing</option>
                  <option value="value">Value Investing</option>
                  <option value="income">Income Generation</option>
                  <option value="balanced">Balanced Approach</option>
                </select>

                <h3 className="font-medium mb-2 mt-4">Allocation Method</h3>
                <select id="allocationMethod" className="w-full p-2 rounded bg-white/5 border border-blue-800/50 text-white">
                  <option value="modernPortfolio">Modern Portfolio Theory</option>
                  <option value="strategicAsset">Strategic Asset Allocation</option>
                  <option value="tacticalAsset">Tactical Asset Allocation</option>
                  <option value="riskParity">Risk Parity</option>
                </select>
              </div>
            </div>

            <div className="flex items-start gap-2 text-sm bg-white/5 p-4 rounded-lg border border-blue-800/50">
              <AlertCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
              <p className="text-gray-300 flex-1">
                This tool provides personalized investment insights for informational purposes only. 
                Please consult with a qualified financial advisor for professional investment advice. 
                Your data is processed securely and never stored on our servers.
              </p>
              <button
                onClick={handleSubmit}
                disabled={isSubmitting || !walletAddress}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {isSubmitting ? (
                  <>
                    <Clock className="w-5 h-5 animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>
                    {agentName === '' ? "Create Financial Plan" : ("View "+ agentName+" Insights")}
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Monitor;