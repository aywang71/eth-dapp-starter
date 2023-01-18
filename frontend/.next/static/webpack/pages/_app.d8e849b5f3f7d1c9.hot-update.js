"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/walletConnect.js":
/*!*************************************!*\
  !*** ./components/walletConnect.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"WalletConnect\": function() { return /* binding */ WalletConnect; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\n\nvar _s = $RefreshSig$();\n\n\n\nfunction WalletConnect() {\n    _s();\n    // getting whether user is authenticated\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), authenticated = ref[0], setAuthenticated = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), walletAddress = ref1[0], setWalletAddress = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), balance = ref2[0], setBalance = ref2[1];\n    // getting wallet balance\n    var getBalance = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(function() {\n            var ref, account, _tmp, provider, balance;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        _tmp = {};\n                        return [\n                            4,\n                            window.ethereum.request((_tmp.method = \"eth_requestAccounts\", _tmp))\n                        ];\n                    case 1:\n                        ref = _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"].apply(void 0, [\n                            _state.sent(),\n                            1\n                        ]), account = ref[0];\n                        provider = new ethers__WEBPACK_IMPORTED_MODULE_5__.ethers.providers.Web3Provider(window.ethereum);\n                        return [\n                            4,\n                            provider.getBalance(account)\n                        ];\n                    case 2:\n                        balance = _state.sent();\n                        setBalance(ethers__WEBPACK_IMPORTED_MODULE_5__.ethers.utils.formatEther(balance));\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function getBalance() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    function requestAccount() {\n        return _requestAccount.apply(this, arguments);\n    }\n    function _requestAccount() {\n        _requestAccount = // talking with metamask to get the accounts with wallet connections\n        (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(function() {\n            var accounts, _tmp, error;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        console.log(\"Requesting account...\");\n                        if (!window.ethereum) return [\n                            3,\n                            5\n                        ];\n                        console.log(\"detected metamask\");\n                        _state.label = 1;\n                    case 1:\n                        _state.trys.push([\n                            1,\n                            3,\n                            ,\n                            4\n                        ]);\n                        _tmp = {};\n                        return [\n                            4,\n                            window.ethereum.request((_tmp.method = \"eth_requestAccounts\", _tmp))\n                        ];\n                    case 2:\n                        accounts = _state.sent();\n                        console.log(accounts);\n                        setWalletAddress(accounts[0]);\n                        getBalance();\n                        if (accounts.length > 0) {\n                            setAuthenticated(true);\n                        } else {\n                            setAuthenticated(false);\n                        }\n                        console.log(\"auth detected\", authenticated);\n                        return [\n                            3,\n                            4\n                        ];\n                    case 3:\n                        error = _state.sent();\n                        console.error(error);\n                        return [\n                            3,\n                            4\n                        ];\n                    case 4:\n                        return [\n                            3,\n                            6\n                        ];\n                    case 5:\n                        console.log(\"no metamask detected\");\n                        _state.label = 6;\n                    case 6:\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return _requestAccount.apply(this, arguments);\n    }\n    function connectWallet() {\n        return _connectWallet.apply(this, arguments);\n    }\n    function _connectWallet() {\n        _connectWallet = // connecting wallet to app after requestAccount() is complete\n        (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(function() {\n            var provider;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        if (!(typeof window.ethereum !== \"undefined\")) return [\n                            3,\n                            2\n                        ];\n                        return [\n                            4,\n                            requestAccount()\n                        ];\n                    case 1:\n                        _state.sent();\n                        provider = new ethers__WEBPACK_IMPORTED_MODULE_5__.ethers.providers.Web3Provider(window.ethereum);\n                        _state.label = 2;\n                    case 2:\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return _connectWallet.apply(this, arguments);\n    }\n    // Top Navigation Element\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: \"py-1 backdrop-brightness-100\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"mx-auto max-w-screen-xl\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"m-6 flex items-center justify-end\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        className: \"\",\n                        children: !authenticated ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"px-5 py-2.5 text-sm font-medium text-white bg-zinc-600 hover:bg-zinc-700 rounded-md shadow\",\n                            onClick: function() {\n                                return connectWallet();\n                            },\n                            children: \"Connect Wallet\"\n                        }, void 0, false, {\n                            fileName: \"/Users/zman61/Desktop/FranklinDAO Edu/FranklinDAO_dApp_starter-main/components/walletConnect.js\",\n                            lineNumber: 73,\n                            columnNumber: 15\n                        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"px-5 py-2.5 text-sm font-medium text-white bg-green-600 rounded-md shadow\",\n                            onClick: function() {\n                                return connectWallet();\n                            },\n                            children: \"Connect Wallet\"\n                        }, void 0, false, {\n                            fileName: \"/Users/zman61/Desktop/FranklinDAO Edu/FranklinDAO_dApp_starter-main/components/walletConnect.js\",\n                            lineNumber: 74,\n                            columnNumber: 17\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/zman61/Desktop/FranklinDAO Edu/FranklinDAO_dApp_starter-main/components/walletConnect.js\",\n                        lineNumber: 71,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/zman61/Desktop/FranklinDAO Edu/FranklinDAO_dApp_starter-main/components/walletConnect.js\",\n                    lineNumber: 70,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"m-6\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                \"Wallet Address: \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    className: \"text-green-500\",\n                                    children: [\n                                        \" \",\n                                        walletAddress,\n                                        \" \"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/zman61/Desktop/FranklinDAO Edu/FranklinDAO_dApp_starter-main/components/walletConnect.js\",\n                                    lineNumber: 80,\n                                    columnNumber: 29\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/zman61/Desktop/FranklinDAO Edu/FranklinDAO_dApp_starter-main/components/walletConnect.js\",\n                            lineNumber: 79,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                \"Balance: \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    className: \"text-green-500\",\n                                    children: [\n                                        \" \",\n                                        balance,\n                                        \" \"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/zman61/Desktop/FranklinDAO Edu/FranklinDAO_dApp_starter-main/components/walletConnect.js\",\n                                    lineNumber: 83,\n                                    columnNumber: 22\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/zman61/Desktop/FranklinDAO Edu/FranklinDAO_dApp_starter-main/components/walletConnect.js\",\n                            lineNumber: 82,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/zman61/Desktop/FranklinDAO Edu/FranklinDAO_dApp_starter-main/components/walletConnect.js\",\n                    lineNumber: 78,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/zman61/Desktop/FranklinDAO Edu/FranklinDAO_dApp_starter-main/components/walletConnect.js\",\n            lineNumber: 69,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/zman61/Desktop/FranklinDAO Edu/FranklinDAO_dApp_starter-main/components/walletConnect.js\",\n        lineNumber: 68,\n        columnNumber: 5\n    }, this);\n}\n_s(WalletConnect, \"KTLGQHJxUohjttJfJjvxOPNCpIE=\");\n_c = WalletConnect;\nvar _c;\n$RefreshReg$(_c, \"WalletConnect\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsR0FBQzs7Ozs7O3dDQUFJOzs7Ozs7Z0NBQ3BEOzs7Ozs7d0JBR0E7Ozs7OztnQkFHRjs7Ozs7WUFDQyxDQUNWO0FBQ0gsQ0FBQztHQXhGZUwsYUFBYTtBQUFiQSxLQUFBQSxhQUFhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvd2FsbGV0Q29ubmVjdC5qcz9kMjdjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGV0aGVycywgQmlnTnVtYmVyIH0gZnJvbSBcImV0aGVyc1wiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgV2ViM1Byb3ZpZGVyIH0gZnJvbSAnQGV0aGVyc3Byb2plY3QvcHJvdmlkZXJzJztcblxuZXhwb3J0IGZ1bmN0aW9uIFdhbGxldENvbm5lY3QoKSB7XG5cbiAgLy8gZ2V0dGluZyB3aGV0aGVyIHVzZXIgaXMgYXV0aGVudGljYXRlZFxuICBjb25zdCBbYXV0aGVudGljYXRlZCwgc2V0QXV0aGVudGljYXRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgW3dhbGxldEFkZHJlc3MsIHNldFdhbGxldEFkZHJlc3NdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtiYWxhbmNlLCBzZXRCYWxhbmNlXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gIC8vIGdldHRpbmcgd2FsbGV0IGJhbGFuY2VcbiAgY29uc3QgZ2V0QmFsYW5jZSA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBbYWNjb3VudF0gPSBhd2FpdCB3aW5kb3cuZXRoZXJldW0ucmVxdWVzdCh7IG1ldGhvZDogJ2V0aF9yZXF1ZXN0QWNjb3VudHMnIH0pO1xuICAgIGNvbnN0IHByb3ZpZGVyID0gbmV3IGV0aGVycy5wcm92aWRlcnMuV2ViM1Byb3ZpZGVyKHdpbmRvdy5ldGhlcmV1bSk7XG4gICAgY29uc3QgYmFsYW5jZSA9IGF3YWl0IHByb3ZpZGVyLmdldEJhbGFuY2UoYWNjb3VudCk7XG4gICAgc2V0QmFsYW5jZShldGhlcnMudXRpbHMuZm9ybWF0RXRoZXIoYmFsYW5jZSkpO1xuICB9O1xuXG4gIC8vIHRhbGtpbmcgd2l0aCBtZXRhbWFzayB0byBnZXQgdGhlIGFjY291bnRzIHdpdGggd2FsbGV0IGNvbm5lY3Rpb25zXG4gIGFzeW5jIGZ1bmN0aW9uIHJlcXVlc3RBY2NvdW50KCkge1xuICAgIGNvbnNvbGUubG9nKCdSZXF1ZXN0aW5nIGFjY291bnQuLi4nKTtcblxuICAgIC8vIGNoZWNrIGlmIE1ldGFNYXNrIGlzIGluc3RhbGxlZFxuICAgIGlmICh3aW5kb3cuZXRoZXJldW0pIHtcbiAgICAgIGNvbnNvbGUubG9nKCdkZXRlY3RlZCBtZXRhbWFzaycpO1xuXG4gICAgICAvLyB1cGRhdGUgd2FsbGV0IGFkZHJlc3MgYW5kIGJhbGFuY2VcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2luZG93LmV0aGVyZXVtLnJlcXVlc3QoeyBtZXRob2Q6ICdldGhfcmVxdWVzdEFjY291bnRzJyB9KTtcbiAgICAgICAgY29uc29sZS5sb2coYWNjb3VudHMpO1xuXG5cbiAgICAgICAgc2V0V2FsbGV0QWRkcmVzcyhhY2NvdW50c1swXSk7XG4gICAgICAgIGdldEJhbGFuY2UoKTtcblxuICAgICAgICBpZiAoYWNjb3VudHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHNldEF1dGhlbnRpY2F0ZWQodHJ1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2V0QXV0aGVudGljYXRlZChmYWxzZSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zb2xlLmxvZygnYXV0aCBkZXRlY3RlZCcsIGF1dGhlbnRpY2F0ZWQpXG5cbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgfVxuXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKCdubyBtZXRhbWFzayBkZXRlY3RlZCcpO1xuICAgIH1cbiAgfVxuXG5cbiAgLy8gY29ubmVjdGluZyB3YWxsZXQgdG8gYXBwIGFmdGVyIHJlcXVlc3RBY2NvdW50KCkgaXMgY29tcGxldGVcbiAgYXN5bmMgZnVuY3Rpb24gY29ubmVjdFdhbGxldCgpIHtcbiAgICBpZiAodHlwZW9mIHdpbmRvdy5ldGhlcmV1bSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGF3YWl0IHJlcXVlc3RBY2NvdW50KCk7XG5cbiAgICAgIGNvbnN0IHByb3ZpZGVyID0gbmV3IGV0aGVycy5wcm92aWRlcnMuV2ViM1Byb3ZpZGVyKHdpbmRvdy5ldGhlcmV1bSk7XG4gICAgfVxuICB9XG5cblxuICAvLyBUb3AgTmF2aWdhdGlvbiBFbGVtZW50XG4gIHJldHVybiAoXG4gICAgPGhlYWRlciBjbGFzc05hbWU9XCJweS0xIGJhY2tkcm9wLWJyaWdodG5lc3MtMTAwXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LWF1dG8gbWF4LXctc2NyZWVuLXhsXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibS02IGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktZW5kXCI+XG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwiXCI+XG4gICAgICAgICAgICB7IWF1dGhlbnRpY2F0ZWQgP1xuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInB4LTUgcHktMi41IHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC13aGl0ZSBiZy16aW5jLTYwMCBob3ZlcjpiZy16aW5jLTcwMCByb3VuZGVkLW1kIHNoYWRvd1wiIG9uQ2xpY2s9eygpID0+IGNvbm5lY3RXYWxsZXQoKX0+Q29ubmVjdCBXYWxsZXQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgOiA8YnV0dG9uIGNsYXNzTmFtZT1cInB4LTUgcHktMi41IHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC13aGl0ZSBiZy1ncmVlbi02MDAgcm91bmRlZC1tZCBzaGFkb3dcIiBvbkNsaWNrPXsoKSA9PiBjb25uZWN0V2FsbGV0KCl9PkNvbm5lY3QgV2FsbGV0PC9idXR0b24+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtLTZcIj5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIFdhbGxldCBBZGRyZXNzOiA8YSBjbGFzc05hbWU9XCJ0ZXh0LWdyZWVuLTUwMFwiPiB7d2FsbGV0QWRkcmVzc30gPC9hPlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIEJhbGFuY2U6IDxhIGNsYXNzTmFtZT1cInRleHQtZ3JlZW4tNTAwXCI+IHtiYWxhbmNlfSA8L2E+XG4gICAgICAgICAgPC9wPlxuXG5cbiAgICAgICAgPC9kaXY+XG5cblxuICAgICAgPC9kaXY+XG4gICAgPC9oZWFkZXI+XG4gIClcbn0iXSwibmFtZXMiOlsiZXRoZXJzIiwiQmlnTnVtYmVyIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJXZWIzUHJvdmlkZXIiLCJXYWxsZXRDb25uZWN0IiwiYXV0aGVudGljYXRlZCIsInNldEF1dGhlbnRpY2F0ZWQiLCJ3YWxsZXRBZGRyZXNzIiwic2V0V2FsbGV0QWRkcmVzcyIsImJhbGFuY2UiLCJzZXRCYWxhbmNlIiwiZ2V0QmFsYW5jZSIsImFjY291bnQiLCJwcm92aWRlciIsIndpbmRvdyIsImV0aGVyZXVtIiwicmVxdWVzdCIsIm1ldGhvZCIsInByb3ZpZGVycyIsInV0aWxzIiwiZm9ybWF0RXRoZXIiLCJyZXF1ZXN0QWNjb3VudCIsImFjY291bnRzIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwibGVuZ3RoIiwiY29ubmVjdFdhbGxldCIsImhlYWRlciIsImNsYXNzTmFtZSIsImRpdiIsImEiLCJidXR0b24iLCJvbkNsaWNrIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/walletConnect.js\n"));

/***/ })

});