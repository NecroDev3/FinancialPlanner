(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_app_82f393._.js", {

"[project]/src/app/hooks/store.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "store": (()=>store)
});
// An array to store the detected wallet providers.
let providers = [];
const store = {
    value: ()=>providers,
    subscribe: (callback)=>{
        function onAnnouncement(event) {
            if (providers.map((p)=>p.info.uuid).includes(event.detail.info.uuid)) return;
            providers = [
                ...providers,
                event.detail
            ];
            callback();
        }
        // Listen for eip6963:announceProvider and call onAnnouncement when the event is triggered.
        window.addEventListener("eip6963:announceProvider", onAnnouncement);
        // Dispatch the event, which triggers the event listener in the MetaMask wallet.
        window.dispatchEvent(new Event("eip6963:requestProvider"));
        // Return a function that removes the event listener.
        return ()=>window.removeEventListener("eip6963:announceProvider", onAnnouncement);
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/hooks/useSyncProviders.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "useSyncProviders": (()=>useSyncProviders)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$hooks$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/hooks/store.ts [app-client] (ecmascript)");
var _s = __turbopack_refresh__.signature();
;
;
const useSyncProviders = ()=>{
    _s();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$hooks$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["store"].subscribe, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$hooks$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["store"].value, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$hooks$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["store"].value);
};
_s(useSyncProviders, "FpwL93IKMLJZuQQXefVtWynbBPQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/monitor/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$hooks$2f$useSyncProviders$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/hooks/useSyncProviders.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$coinbase$2f$onchainkit$2f$esm$2f$wallet$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@coinbase/onchainkit/esm/wallet/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/moon.js [app-client] (ecmascript) <export default as Moon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/wallet.js [app-client] (ecmascript) <export default as Wallet>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$coinbase$2f$onchainkit$2f$esm$2f$wallet$2f$components$2f$Wallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@coinbase/onchainkit/esm/wallet/components/Wallet.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$coinbase$2f$onchainkit$2f$esm$2f$wallet$2f$components$2f$ConnectWallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@coinbase/onchainkit/esm/wallet/components/ConnectWallet.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$coinbase$2f$onchainkit$2f$esm$2f$wallet$2f$components$2f$WalletDropdown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@coinbase/onchainkit/esm/wallet/components/WalletDropdown.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$coinbase$2f$onchainkit$2f$esm$2f$wallet$2f$components$2f$WalletAdvancedAddressDetails$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@coinbase/onchainkit/esm/wallet/components/WalletAdvancedAddressDetails.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$coinbase$2f$onchainkit$2f$esm$2f$wallet$2f$components$2f$WalletAdvancedWalletActions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@coinbase/onchainkit/esm/wallet/components/WalletAdvancedWalletActions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$coinbase$2f$onchainkit$2f$esm$2f$wallet$2f$components$2f$WalletAdvancedTransactionActions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@coinbase/onchainkit/esm/wallet/components/WalletAdvancedTransactionActions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$coinbase$2f$onchainkit$2f$esm$2f$wallet$2f$components$2f$WalletAdvancedTokenHoldings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@coinbase/onchainkit/esm/wallet/components/WalletAdvancedTokenHoldings.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/log-out.js [app-client] (ecmascript) <export default as LogOut>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
;
var _s = __turbopack_refresh__.signature();
'use client';
;
;
;
;
;
;
const SUPPORTED_NETWORKS = [
    {
        id: 'eth',
        name: 'Ethereum',
        chainId: 1
    },
    {
        id: 'base',
        name: 'Base',
        chainId: 8453
    },
    {
        id: 'arbitrum',
        name: 'Arbitrum',
        chainId: 42161
    }
];
const Monitor = ()=>{
    _s();
    // State management
    const [hasPermissions, setHasPermissions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [walletAddress, setWalletAddress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [selectedTimeframe, setSelectedTimeframe] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('year');
    const [selectedNetwork, setSelectedNetwork] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('eth');
    const [currentChainId, setCurrentChainId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedWallet, setSelectedWallet] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])();
    const [userAccount, setUserAccount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [errors, setErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const providers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$hooks$2f$useSyncProviders$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncProviders"])();
    const [agentName, setAgentName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    // Base Wallet Connect integration
    const [baseWalletConnected, setBaseWalletConnected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Handle Base wallet connection
    const handleBaseWalletConnection = (address)=>{
        if (address) {
            setWalletAddress(address);
            setUserAccount(address);
            setBaseWalletConnected(true);
            // Store the wallet address in localStorage
            localStorage.setItem('walletAddress', address);
            // Check if user has an agent
            fetch('https://localhost5000/agent/has_agent/' + address).then((response)=>response.json()).then((data)=>{
                if (data.result === 'ok') {
                    setAgentName(data.name);
                }
            }).catch((error)=>console.error('Error fetching agent data:', error));
        } else {
            if (baseWalletConnected) {
                handleDisconnect();
                setBaseWalletConnected(false);
            }
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Monitor.useEffect": ()=>{
            if (selectedWallet) {
                // Initial chain detection
                detectCurrentChain(selectedWallet.provider);
                // Set up chain change listener
                const handleChainChanged = {
                    "Monitor.useEffect.handleChainChanged": (chainId)=>{
                        console.log('Chain changed to:', chainId);
                        setCurrentChainId(chainId);
                        // Check if the new chain is supported
                        const newChainIdDecimal = parseInt(chainId, 16);
                        const network = SUPPORTED_NETWORKS.find({
                            "Monitor.useEffect.handleChainChanged.network": (n)=>n.chainId === newChainIdDecimal
                        }["Monitor.useEffect.handleChainChanged.network"]);
                        if (network) {
                            setSelectedNetwork(network.id);
                        } else {
                            setErrors({
                                "Monitor.useEffect.handleChainChanged": (prev)=>({
                                        ...prev,
                                        network: 'Unsupported network detected. Please switch to a supported network.'
                                    })
                            }["Monitor.useEffect.handleChainChanged"]);
                        }
                    }
                }["Monitor.useEffect.handleChainChanged"];
                selectedWallet.provider.on("chainChanged", handleChainChanged);
                // Cleanup
                return ({
                    "Monitor.useEffect": ()=>{
                        selectedWallet.provider.removeListener("chainChanged", handleChainChanged);
                    }
                })["Monitor.useEffect"];
            }
        }
    }["Monitor.useEffect"], [
        selectedWallet
    ]);
    // Add permission management functions
    const checkPermissions = async (provider)=>{
        try {
            const permissions = await provider.request({
                method: "wallet_getPermissions"
            });
            const hasAccountPermission = permissions.some((permission)=>permission.parentCapability === "eth_accounts");
            setHasPermissions(hasAccountPermission);
            return hasAccountPermission;
        } catch (error) {
            console.error("Error checking permissions:", error);
            return false;
        }
    };
    const requestPermissions = async (provider)=>{
        try {
            const permissions = await provider.request({
                method: "wallet_requestPermissions",
                params: [
                    {
                        eth_accounts: {}
                    }
                ]
            });
            const hasAccountPermission = permissions.some((permission)=>permission.parentCapability === "eth_accounts");
            setHasPermissions(hasAccountPermission);
            return hasAccountPermission;
        } catch (error) {
            if (error.code === 4001) {
                setErrors((prev)=>({
                        ...prev,
                        permissions: "Permissions needed to continue."
                    }));
            } else {
                setErrors((prev)=>({
                        ...prev,
                        permissions: "Failed to request permissions"
                    }));
            }
            return false;
        }
    };
    const revokePermissions = async ()=>{
        if (baseWalletConnected) {
            handleDisconnect();
            setBaseWalletConnected(false);
            return;
        }
        if (!selectedWallet?.provider) return;
        try {
            await selectedWallet.provider.request({
                method: "wallet_revokePermissions",
                params: [
                    {
                        eth_accounts: {}
                    }
                ]
            });
            handleDisconnect();
            console.log("Permissions revoked successfully");
        } catch (error) {
            console.error("Error revoking permissions:", error);
        }
    };
    const handleDisconnect = ()=>{
        // Reset states
        setHasPermissions(false);
        setWalletAddress('');
        setUserAccount('');
        setSelectedWallet(undefined);
        setCurrentChainId(null);
        localStorage.removeItem('walletAddress');
    };
    const detectCurrentChain = async (provider)=>{
        try {
            const chainId = await provider.request({
                method: "eth_chainId"
            });
            setCurrentChainId(chainId);
            // Update selected network based on detected chain
            const chainIdDecimal = parseInt(chainId, 16);
            const network = SUPPORTED_NETWORKS.find((n)=>n.chainId === chainIdDecimal);
            if (network) {
                setSelectedNetwork(network.id);
            } else {
                setErrors((prev)=>({
                        ...prev,
                        network: 'Unsupported network detected. Please switch to a supported network.'
                    }));
            }
        } catch (error) {
            console.error('Error detecting chain:', error);
            setErrors((prev)=>({
                    ...prev,
                    network: 'Failed to detect current network'
                }));
        }
    };
    // Validation functions
    const validateWalletAddress = (address)=>{
        const ethAddressRegex = /^0x[a-fA-F0-9]{40}$/;
        return ethAddressRegex.test(address);
    };
    const validateForm = ()=>{
        const newErrors = {};
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
            const selectedChainId = SUPPORTED_NETWORKS.find((n)=>n.id === selectedNetwork)?.chainId;
            if (currentChainIdDecimal !== selectedChainId) {
                newErrors.network = 'Selected network does not match connected network';
            }
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
    const switchNetwork = async (chainId)=>{
        if (!selectedWallet?.provider) return;
        try {
            await window.ethereum.request({
                method: 'wallet_switchEthereumChain',
                params: [
                    {
                        chainId: `0x${chainId.toString(16)}`
                    }
                ]
            });
            // Network switch successful, update UI
            setCurrentChainId(`0x${chainId.toString(16)}`);
            const network = SUPPORTED_NETWORKS.find((n)=>n.chainId === chainId);
            if (network) {
                setSelectedNetwork(network.id);
            }
        } catch (error) {
            if (error.code === 4902) {
                setErrors((prev)=>({
                        ...prev,
                        network: 'Network not added to wallet. Please add it first.'
                    }));
            } else {
                setErrors((prev)=>({
                        ...prev,
                        network: 'Failed to switch network'
                    }));
            }
            throw error;
        }
    };
    // Update the handleConnect function
    const handleConnect = async (providerWithInfo)=>{
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
            const network = SUPPORTED_NETWORKS.find((n)=>n.id === selectedNetwork);
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
            fetch('https://localhost5000/agent/has_agent/' + address).then((response)=>response.json()).then((data)=>{
                if (data.result === 'ok') {
                    setAgentName(data.name);
                }
            }).catch((error)=>console.error('Error fetching agent data:', error));
        } catch (error) {
            console.error(error);
            setErrors((prev)=>({
                    ...prev,
                    walletAddress: error instanceof Error ? error.message : 'Failed to connect wallet'
                }));
        }
    };
    const handleSubmit = async ()=>{
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
                    portfolioAnalysis: document.getElementById('portfolioAnalysis')?.checked,
                    riskAssessment: document.getElementById('riskAssessment')?.checked,
                    investmentYield: document.getElementById('investmentYield')?.checked
                },
                investmentStrategy: document.getElementById('investmentStrategy')?.value,
                allocationMethod: document.getElementById('allocationMethod')?.value
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
                    await new Promise((resolve)=>setTimeout(resolve, 2000));
                } else {
                    throw new Error(deployData.error || 'Failed to deploy agent');
                }
            }
            // Navigate to results
            window.location.href = '/insights';
        } catch (error) {
            console.error(error);
            setErrors((prev)=>({
                    ...prev,
                    submit: error instanceof Error ? error.message : 'Failed to submit analysis'
                }));
        } finally{
            setIsSubmitting(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gradient-to-b from-blue-900 to-blue-950 text-white p-8 pb-20 sm:p-20",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "flex items-center justify-between mb-16",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__["Moon"], {
                                className: "w-8 h-8 text-white"
                            }, void 0, false, {
                                fileName: "[project]/src/app/monitor/page.tsx",
                                lineNumber: 426,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-2xl font-bold",
                                children: "MOON.ai"
                            }, void 0, false, {
                                fileName: "[project]/src/app/monitor/page.tsx",
                                lineNumber: 427,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/monitor/page.tsx",
                        lineNumber: 425,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "hidden sm:flex gap-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/home",
                                className: "hover:text-blue-300 transition-colors",
                                children: "Moon"
                            }, void 0, false, {
                                fileName: "[project]/src/app/monitor/page.tsx",
                                lineNumber: 430,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/about",
                                className: "hover:text-blue-300 transition-colors",
                                children: "About"
                            }, void 0, false, {
                                fileName: "[project]/src/app/monitor/page.tsx",
                                lineNumber: 431,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/features",
                                className: "hover:text-blue-300 transition-colors",
                                children: "Features"
                            }, void 0, false, {
                                fileName: "[project]/src/app/monitor/page.tsx",
                                lineNumber: 432,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/monitor/page.tsx",
                        lineNumber: 429,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/monitor/page.tsx",
                lineNumber: 424,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-4xl mx-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white/10 backdrop-blur-lg rounded-lg overflow-hidden border border-blue-800/50",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-gradient-to-r from-blue-800 to-blue-900 p-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-2xl font-bold flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__["Wallet"], {
                                            className: "w-6 h-6"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/monitor/page.tsx",
                                            lineNumber: 440,
                                            columnNumber: 15
                                        }, this),
                                        "Investment Portfolio Analysis"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/monitor/page.tsx",
                                    lineNumber: 439,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-blue-200",
                                    children: "Get personalized insights for your investment strategy"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/monitor/page.tsx",
                                    lineNumber: 443,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/monitor/page.tsx",
                            lineNumber: 438,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-6 space-y-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium mb-2",
                                            children: "Wallet Address"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/monitor/page.tsx",
                                            lineNumber: 448,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col sm:flex-row gap-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    value: walletAddress,
                                                    readOnly: true,
                                                    placeholder: "Connect your wallet to begin analysis",
                                                    className: `flex-1 p-3 rounded-lg bg-white/5 border ${errors.walletAddress ? 'border-red-500' : 'border-blue-800/50'} text-white placeholder:text-gray-400`
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/monitor/page.tsx",
                                                    lineNumber: 450,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                            value: selectedNetwork,
                                                            onChange: (e)=>setSelectedNetwork(e.target.value),
                                                            disabled: true,
                                                            className: `p-3 rounded-lg bg-white/5 border border-blue-800/50 text-white ${!walletAddress ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'} appearance-none`,
                                                            children: SUPPORTED_NETWORKS.map((network)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: network.id,
                                                                    children: network.name
                                                                }, network.id, false, {
                                                                    fileName: "[project]/src/app/monitor/page.tsx",
                                                                    lineNumber: 467,
                                                                    columnNumber: 23
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/monitor/page.tsx",
                                                            lineNumber: 458,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex flex-wrap gap-2",
                                                            children: walletAddress ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: revokePermissions,
                                                                className: "bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg flex items-center gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__["LogOut"], {
                                                                        className: "w-5 h-5"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/monitor/page.tsx",
                                                                        lineNumber: 479,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    "Disconnect"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/monitor/page.tsx",
                                                                lineNumber: 475,
                                                                columnNumber: 23
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$coinbase$2f$onchainkit$2f$esm$2f$wallet$2f$components$2f$Wallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Wallet"], {
                                                                            onAddressChange: handleBaseWalletConnection,
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$coinbase$2f$onchainkit$2f$esm$2f$wallet$2f$components$2f$ConnectWallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectWallet"], {
                                                                                    className: "px-6 py-3 flex items-center gap-2",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                                            src: "https://assets-global.website-files.com/65425b197bd85d362d28771a/65cc4ed3cc0dd5b9ad9f0205_Base-Symbol.svg",
                                                                                            alt: "Base",
                                                                                            className: "w-6 h-6"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/monitor/page.tsx",
                                                                                            lineNumber: 488,
                                                                                            columnNumber: 31
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            children: "Base Wallet"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/monitor/page.tsx",
                                                                                            lineNumber: 493,
                                                                                            columnNumber: 31
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/app/monitor/page.tsx",
                                                                                    lineNumber: 487,
                                                                                    columnNumber: 29
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$coinbase$2f$onchainkit$2f$esm$2f$wallet$2f$components$2f$WalletDropdown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WalletDropdown"], {
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "p-4 bg-slate-900 rounded-lg",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$coinbase$2f$onchainkit$2f$esm$2f$wallet$2f$components$2f$WalletAdvancedAddressDetails$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WalletAdvancedAddressDetails"], {}, void 0, false, {
                                                                                                fileName: "[project]/src/app/monitor/page.tsx",
                                                                                                lineNumber: 497,
                                                                                                columnNumber: 33
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$coinbase$2f$onchainkit$2f$esm$2f$wallet$2f$components$2f$WalletAdvancedWalletActions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WalletAdvancedWalletActions"], {}, void 0, false, {
                                                                                                fileName: "[project]/src/app/monitor/page.tsx",
                                                                                                lineNumber: 498,
                                                                                                columnNumber: 33
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$coinbase$2f$onchainkit$2f$esm$2f$wallet$2f$components$2f$WalletAdvancedTransactionActions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WalletAdvancedTransactionActions"], {}, void 0, false, {
                                                                                                fileName: "[project]/src/app/monitor/page.tsx",
                                                                                                lineNumber: 499,
                                                                                                columnNumber: 33
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$coinbase$2f$onchainkit$2f$esm$2f$wallet$2f$components$2f$WalletAdvancedTokenHoldings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WalletAdvancedTokenHoldings"], {}, void 0, false, {
                                                                                                fileName: "[project]/src/app/monitor/page.tsx",
                                                                                                lineNumber: 500,
                                                                                                columnNumber: 33
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/app/monitor/page.tsx",
                                                                                        lineNumber: 496,
                                                                                        columnNumber: 31
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/monitor/page.tsx",
                                                                                    lineNumber: 495,
                                                                                    columnNumber: 29
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/monitor/page.tsx",
                                                                            lineNumber: 486,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/monitor/page.tsx",
                                                                        lineNumber: 485,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    providers.length > 0 ? providers?.map((provider)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            className: "bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors",
                                                                            onClick: ()=>handleConnect(provider),
                                                                            disabled: isSubmitting,
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                                    src: provider.info.icon,
                                                                                    alt: provider.info.name,
                                                                                    className: "w-6 h-6"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/monitor/page.tsx",
                                                                                    lineNumber: 514,
                                                                                    columnNumber: 29
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    children: "Connect"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/monitor/page.tsx",
                                                                                    lineNumber: 515,
                                                                                    columnNumber: 29
                                                                                }, this)
                                                                            ]
                                                                        }, provider.info.uuid, true, {
                                                                            fileName: "[project]/src/app/monitor/page.tsx",
                                                                            lineNumber: 508,
                                                                            columnNumber: 27
                                                                        }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-blue-500",
                                                                        children: "No Announced Wallet Providers"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/monitor/page.tsx",
                                                                        lineNumber: 518,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/monitor/page.tsx",
                                                            lineNumber: 473,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/monitor/page.tsx",
                                                    lineNumber: 457,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/monitor/page.tsx",
                                            lineNumber: 449,
                                            columnNumber: 15
                                        }, this),
                                        errors.walletAddress && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-2 text-red-500 text-sm",
                                            children: errors.walletAddress
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/monitor/page.tsx",
                                            lineNumber: 528,
                                            columnNumber: 17
                                        }, this),
                                        errors.network && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-2 text-red-500 text-sm",
                                            children: errors.network
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/monitor/page.tsx",
                                            lineNumber: 531,
                                            columnNumber: 17
                                        }, this),
                                        currentChainId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-2 text-gray-400 text-sm",
                                            children: [
                                                "Connected to chain: ",
                                                parseInt(currentChainId, 16),
                                                "(",
                                                SUPPORTED_NETWORKS.find((n)=>n.chainId === parseInt(currentChainId, 16))?.name || 'Unknown',
                                                ")"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/monitor/page.tsx",
                                            lineNumber: 534,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/monitor/page.tsx",
                                    lineNumber: 447,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid md:grid-cols-3 gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-4 bg-white/5 rounded-lg border border-blue-800/50",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "font-medium mb-2",
                                                    children: "Time Period"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/monitor/page.tsx",
                                                    lineNumber: 544,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    value: selectedTimeframe,
                                                    onChange: (e)=>setSelectedTimeframe(e.target.value),
                                                    className: "w-full p-2 rounded bg-white/5 border border-blue-800/50 text-white",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "year",
                                                            children: "Past Year"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/monitor/page.tsx",
                                                            lineNumber: 550,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "quarter",
                                                            children: "Past Quarter"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/monitor/page.tsx",
                                                            lineNumber: 551,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "month",
                                                            children: "Past Month"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/monitor/page.tsx",
                                                            lineNumber: 552,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "custom",
                                                            children: "Custom Range"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/monitor/page.tsx",
                                                            lineNumber: 553,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/monitor/page.tsx",
                                                    lineNumber: 545,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/monitor/page.tsx",
                                            lineNumber: 543,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-4 bg-white/5 rounded-lg border border-blue-800/50",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "font-medium mb-2",
                                                    children: "Analysis Type"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/monitor/page.tsx",
                                                    lineNumber: 558,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "flex items-center",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    id: "portfolioAnalysis",
                                                                    type: "checkbox",
                                                                    className: "mr-2",
                                                                    defaultChecked: true
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/monitor/page.tsx",
                                                                    lineNumber: 561,
                                                                    columnNumber: 21
                                                                }, this),
                                                                "Portfolio Analysis"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/monitor/page.tsx",
                                                            lineNumber: 560,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "flex items-center",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    id: "riskAssessment",
                                                                    type: "checkbox",
                                                                    className: "mr-2",
                                                                    defaultChecked: true
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/monitor/page.tsx",
                                                                    lineNumber: 565,
                                                                    columnNumber: 21
                                                                }, this),
                                                                "Risk Assessment"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/monitor/page.tsx",
                                                            lineNumber: 564,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "flex items-center",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    id: "investmentYield",
                                                                    type: "checkbox",
                                                                    className: "mr-2",
                                                                    defaultChecked: true
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/monitor/page.tsx",
                                                                    lineNumber: 569,
                                                                    columnNumber: 21
                                                                }, this),
                                                                "Investment Yield"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/monitor/page.tsx",
                                                            lineNumber: 568,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/monitor/page.tsx",
                                                    lineNumber: 559,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/monitor/page.tsx",
                                            lineNumber: 557,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-4 bg-white/5 rounded-lg border border-blue-800/50",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "font-medium mb-2",
                                                    children: "Investment Strategy"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/monitor/page.tsx",
                                                    lineNumber: 576,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    id: "investmentStrategy",
                                                    className: "w-full p-2 rounded bg-white/5 border border-blue-800/50 text-white mb-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "growth",
                                                            children: "Growth Investing"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/monitor/page.tsx",
                                                            lineNumber: 578,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "value",
                                                            children: "Value Investing"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/monitor/page.tsx",
                                                            lineNumber: 579,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "income",
                                                            children: "Income Generation"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/monitor/page.tsx",
                                                            lineNumber: 580,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "balanced",
                                                            children: "Balanced Approach"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/monitor/page.tsx",
                                                            lineNumber: 581,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/monitor/page.tsx",
                                                    lineNumber: 577,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "font-medium mb-2 mt-4",
                                                    children: "Allocation Method"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/monitor/page.tsx",
                                                    lineNumber: 584,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    id: "allocationMethod",
                                                    className: "w-full p-2 rounded bg-white/5 border border-blue-800/50 text-white",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "modernPortfolio",
                                                            children: "Modern Portfolio Theory"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/monitor/page.tsx",
                                                            lineNumber: 586,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "strategicAsset",
                                                            children: "Strategic Asset Allocation"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/monitor/page.tsx",
                                                            lineNumber: 587,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "tacticalAsset",
                                                            children: "Tactical Asset Allocation"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/monitor/page.tsx",
                                                            lineNumber: 588,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "riskParity",
                                                            children: "Risk Parity"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/monitor/page.tsx",
                                                            lineNumber: 589,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/monitor/page.tsx",
                                                    lineNumber: 585,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/monitor/page.tsx",
                                            lineNumber: 575,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/monitor/page.tsx",
                                    lineNumber: 542,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-start gap-2 text-sm bg-white/5 p-4 rounded-lg border border-blue-800/50",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                            className: "w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/monitor/page.tsx",
                                            lineNumber: 595,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-300 flex-1",
                                            children: "This tool provides personalized investment insights for informational purposes only. Please consult with a qualified financial advisor for professional investment advice. Your data is processed securely and never stored on our servers."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/monitor/page.tsx",
                                            lineNumber: 596,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: handleSubmit,
                                            disabled: isSubmitting || !walletAddress,
                                            className: "bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors",
                                            children: isSubmitting ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                        className: "w-5 h-5 animate-spin"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/monitor/page.tsx",
                                                        lineNumber: 608,
                                                        columnNumber: 21
                                                    }, this),
                                                    "Processing..."
                                                ]
                                            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    agentName === '' ? "Create Financial Plan" : "View " + agentName + " Insights",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                        className: "w-5 h-5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/monitor/page.tsx",
                                                        lineNumber: 614,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/monitor/page.tsx",
                                            lineNumber: 601,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/monitor/page.tsx",
                                    lineNumber: 594,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/monitor/page.tsx",
                            lineNumber: 446,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/monitor/page.tsx",
                    lineNumber: 437,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/monitor/page.tsx",
                lineNumber: 436,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/monitor/page.tsx",
        lineNumber: 423,
        columnNumber: 5
    }, this);
};
_s(Monitor, "fuE3rRp/qJMZqU1l4g5DsLz+wbY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$hooks$2f$useSyncProviders$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncProviders"]
    ];
});
_c = Monitor;
const __TURBOPACK__default__export__ = Monitor;
var _c;
__turbopack_refresh__.register(_c, "Monitor");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/monitor/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),
}]);

//# sourceMappingURL=src_app_82f393._.js.map