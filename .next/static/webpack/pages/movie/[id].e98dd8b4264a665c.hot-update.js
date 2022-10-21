"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/movie/[id]",{

/***/ "./pages/movie/[id].js":
/*!*****************************!*\
  !*** ./pages/movie/[id].js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_GlobalLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/GlobalLayout */ \"./components/GlobalLayout.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar size = \"original\";\nvar img_url = \"https://image.tmdb.org/t/p/\";\n//Use this array to replay the month integer wit a string\nvar month = [\n    null,\n    \"January\",\n    \"February\",\n    \"March\",\n    \"April\",\n    \"May\",\n    \"June\",\n    \"July\",\n    \"August\",\n    \"September\",\n    \"October\",\n    \"November\",\n    \"December\"\n];\n//convert milliseconds to Hours, Minutes and seconds\nfunction padTo2Digits(num) {\n    return num.toString().padStart(2, \"0\");\n}\nvar embed = \"https://www.youtube.com/embed/\";\nfunction convertMsToTime(milliseconds) {\n    var seconds = Math.floor(milliseconds / 1000);\n    var minutes = Math.floor(seconds / 60);\n    var hours = Math.floor(minutes / 60);\n    seconds = seconds % 60;\n    minutes = minutes % 60;\n    //hours = hours % 24;\n    return \"\".concat(padTo2Digits(hours), \":\").concat(padTo2Digits(minutes), \":\").concat(padTo2Digits(seconds));\n}\n//Render the movie details when selected\nfunction Movie(param) {\n    var results = param.results;\n    console.log(results);\n    console.log(embed + results.videos.results[0].key);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_GlobalLayout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"preview_movie_outer_container\",\n            style: {\n                backgroundImage: \"url(\".concat(img_url + size + results.backdrop_path, \")\")\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: results.original_title\n                }, void 0, false, {\n                    fileName: \"I:\\\\Web Dev Bootcamp\\\\3. Full Stack Web Developer\\\\Task 11 NEXT II\\\\Task11\\\\Next-Movie-API\\\\pages\\\\movie\\\\[id].js\",\n                    lineNumber: 41,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"movie_preview\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"header_img\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                src: img_url + size + results.poster_path,\n                                width: 360,\n                                height: 500\n                            }, void 0, false, {\n                                fileName: \"I:\\\\Web Dev Bootcamp\\\\3. Full Stack Web Developer\\\\Task 11 NEXT II\\\\Task11\\\\Next-Movie-API\\\\pages\\\\movie\\\\[id].js\",\n                                lineNumber: 46,\n                                columnNumber: 12\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"I:\\\\Web Dev Bootcamp\\\\3. Full Stack Web Developer\\\\Task 11 NEXT II\\\\Task11\\\\Next-Movie-API\\\\pages\\\\movie\\\\[id].js\",\n                            lineNumber: 44,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"description\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    children: results.tagline ? results.tagline : results.original_title\n                                }, void 0, false, {\n                                    fileName: \"I:\\\\Web Dev Bootcamp\\\\3. Full Stack Web Developer\\\\Task 11 NEXT II\\\\Task11\\\\Next-Movie-API\\\\pages\\\\movie\\\\[id].js\",\n                                    lineNumber: 52,\n                                    columnNumber: 10\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: results.overview\n                                }, void 0, false, {\n                                    fileName: \"I:\\\\Web Dev Bootcamp\\\\3. Full Stack Web Developer\\\\Task 11 NEXT II\\\\Task11\\\\Next-Movie-API\\\\pages\\\\movie\\\\[id].js\",\n                                    lineNumber: 53,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"I:\\\\Web Dev Bootcamp\\\\3. Full Stack Web Developer\\\\Task 11 NEXT II\\\\Task11\\\\Next-Movie-API\\\\pages\\\\movie\\\\[id].js\",\n                                    lineNumber: 54,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                                            children: \"Release Date:\"\n                                        }, void 0, false, {\n                                            fileName: \"I:\\\\Web Dev Bootcamp\\\\3. Full Stack Web Developer\\\\Task 11 NEXT II\\\\Task11\\\\Next-Movie-API\\\\pages\\\\movie\\\\[id].js\",\n                                            lineNumber: 55,\n                                            columnNumber: 16\n                                        }, this),\n                                        \" \\n            \".concat(results.release_date.replaceAll(\"-\", \" \").split(\" \")[2], \"\\n            \").concat(month[parseInt(results.release_date.replaceAll(\"-\", \" \").split(\" \")[1])], \"\\n            \").concat(results.release_date.replaceAll(\"-\", \" \").split(\" \")[0])\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"I:\\\\Web Dev Bootcamp\\\\3. Full Stack Web Developer\\\\Task 11 NEXT II\\\\Task11\\\\Next-Movie-API\\\\pages\\\\movie\\\\[id].js\",\n                                    lineNumber: 55,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                                            children: \"Status:\"\n                                        }, void 0, false, {\n                                            fileName: \"I:\\\\Web Dev Bootcamp\\\\3. Full Stack Web Developer\\\\Task 11 NEXT II\\\\Task11\\\\Next-Movie-API\\\\pages\\\\movie\\\\[id].js\",\n                                            lineNumber: 62,\n                                            columnNumber: 16\n                                        }, this),\n                                        \" \",\n                                        results.status\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"I:\\\\Web Dev Bootcamp\\\\3. Full Stack Web Developer\\\\Task 11 NEXT II\\\\Task11\\\\Next-Movie-API\\\\pages\\\\movie\\\\[id].js\",\n                                    lineNumber: 62,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                                            children: \"Genre:\"\n                                        }, void 0, false, {\n                                            fileName: \"I:\\\\Web Dev Bootcamp\\\\3. Full Stack Web Developer\\\\Task 11 NEXT II\\\\Task11\\\\Next-Movie-API\\\\pages\\\\movie\\\\[id].js\",\n                                            lineNumber: 63,\n                                            columnNumber: 16\n                                        }, this),\n                                        \" \",\n                                        results.genres.map(function(item) {\n                                            return \"\".concat(item.name, \", \");\n                                        }),\n                                        \" \"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"I:\\\\Web Dev Bootcamp\\\\3. Full Stack Web Developer\\\\Task 11 NEXT II\\\\Task11\\\\Next-Movie-API\\\\pages\\\\movie\\\\[id].js\",\n                                    lineNumber: 63,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                                            children: \"Runtime:\"\n                                        }, void 0, false, {\n                                            fileName: \"I:\\\\Web Dev Bootcamp\\\\3. Full Stack Web Developer\\\\Task 11 NEXT II\\\\Task11\\\\Next-Movie-API\\\\pages\\\\movie\\\\[id].js\",\n                                            lineNumber: 64,\n                                            columnNumber: 16\n                                        }, this),\n                                        \" \",\n                                        convertMsToTime(\"\".concat(results.runtime, \"00000\"))\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"I:\\\\Web Dev Bootcamp\\\\3. Full Stack Web Developer\\\\Task 11 NEXT II\\\\Task11\\\\Next-Movie-API\\\\pages\\\\movie\\\\[id].js\",\n                                    lineNumber: 64,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"iframe\", {\n                                    width: \"300\",\n                                    height: \"300\",\n                                    src: embed + results.key\n                                }, void 0, false, {\n                                    fileName: \"I:\\\\Web Dev Bootcamp\\\\3. Full Stack Web Developer\\\\Task 11 NEXT II\\\\Task11\\\\Next-Movie-API\\\\pages\\\\movie\\\\[id].js\",\n                                    lineNumber: 66,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"I:\\\\Web Dev Bootcamp\\\\3. Full Stack Web Developer\\\\Task 11 NEXT II\\\\Task11\\\\Next-Movie-API\\\\pages\\\\movie\\\\[id].js\",\n                            lineNumber: 51,\n                            columnNumber: 9\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"I:\\\\Web Dev Bootcamp\\\\3. Full Stack Web Developer\\\\Task 11 NEXT II\\\\Task11\\\\Next-Movie-API\\\\pages\\\\movie\\\\[id].js\",\n                    lineNumber: 42,\n                    columnNumber: 10\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"I:\\\\Web Dev Bootcamp\\\\3. Full Stack Web Developer\\\\Task 11 NEXT II\\\\Task11\\\\Next-Movie-API\\\\pages\\\\movie\\\\[id].js\",\n            lineNumber: 40,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"I:\\\\Web Dev Bootcamp\\\\3. Full Stack Web Developer\\\\Task 11 NEXT II\\\\Task11\\\\Next-Movie-API\\\\pages\\\\movie\\\\[id].js\",\n        lineNumber: 39,\n        columnNumber: 11\n    }, this);\n}\n_c = Movie;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Movie);\nvar _c;\n$RefreshReg$(_c, \"Movie\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0csR0FBQztzREFBQyxVQUFROzs7OztnREFBSTt3Q0FBQSxHQUFDO3dDQUFDN0IsZUFBZSxDQUFDLEVBQUMsQ0FBa0IsTUFBSyxDQUFyQlEsT0FBTyxDQUFDK0IsT0FBTyxFQUFDLE9BQUssQ0FBQyxDQUFDOzs7Ozs7d0NBQUs7OENBRW5FLDhEQUFFQyxRQUFNO29DQUNSbEIsS0FBSyxFQUFDLEtBQUs7b0NBQ1hDLE1BQU0sRUFBQyxLQUFLO29DQUNaSCxHQUFHLEVBQUVyQixLQUFLLEdBQUNTLE9BQU8sQ0FBQ0ksR0FBRzs7Ozs7d0NBRWI7Ozs7OztnQ0FFUDs7Ozs7O3dCQUNDOzs7Ozs7Z0JBQ0g7Ozs7O1lBRVk7Q0FFdkI7QUEzQ1FMLEtBQUFBLEtBQUs7O0FBNENkLCtEQUFlQSxLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL21vdmllL1tpZF0uanM/NjE1NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR2xvYmFsTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvR2xvYmFsTGF5b3V0J1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcclxuXHJcbi8vIFRoZSBbaWRdLmpzIHdpbGwgZ2VuZXJhdGUgdGhlIGNvbnRlbnQgb2YgYW55ICBzZWxlY3RlZCBtb3ZpZS5cclxuXHJcbi8vU3RvcmUgdGhlIG1vdmllIHN0aW5nIGludG8gdmFyaWFibGVzXHJcbmxldCBiYXNlVVJMICAgICA9IFwiaHR0cHM6Ly9hcGkudGhlbW92aWVkYi5vcmcvMy9tb3ZpZS9cIjtcclxubGV0IGxhbmcgICAgICAgID0gXCImbGFuZ3VhZ2U9ZW4tVVNcIjtcclxubGV0IEFQSV9LRVkgICAgID0gXCI/YXBpX2tleT04Y2YxZWU4OGZjZmYwOGNhYzQ3MDJhNTNjZTdiYzQ3MFwiO1xyXG5sZXQgc2l6ZSAgICAgICAgPSBcIm9yaWdpbmFsXCI7XHJcbmxldCBpbWdfdXJsICAgICA9IFwiaHR0cHM6Ly9pbWFnZS50bWRiLm9yZy90L3AvXCJcclxuXHJcbi8vVXNlIHRoaXMgYXJyYXkgdG8gcmVwbGF5IHRoZSBtb250aCBpbnRlZ2VyIHdpdCBhIHN0cmluZ1xyXG5jb25zdCBtb250aCA9IFtudWxsLFwiSmFudWFyeVwiLFwiRmVicnVhcnlcIixcIk1hcmNoXCIsXCJBcHJpbFwiLFwiTWF5XCIsXCJKdW5lXCIsXCJKdWx5XCIsXCJBdWd1c3RcIixcIlNlcHRlbWJlclwiLFwiT2N0b2JlclwiLFwiTm92ZW1iZXJcIixcIkRlY2VtYmVyXCJdO1xyXG5cclxuLy9jb252ZXJ0IG1pbGxpc2Vjb25kcyB0byBIb3VycywgTWludXRlcyBhbmQgc2Vjb25kc1xyXG5mdW5jdGlvbiBwYWRUbzJEaWdpdHMobnVtKSB7XHJcbiAgIHJldHVybiBudW0udG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpO1xyXG59XHJcblxyXG5sZXQgZW1iZWQgPSBgaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvYFxyXG5cclxuZnVuY3Rpb24gY29udmVydE1zVG9UaW1lKG1pbGxpc2Vjb25kcykge1xyXG4gICBsZXQgc2Vjb25kcyA9IE1hdGguZmxvb3IobWlsbGlzZWNvbmRzIC8gMTAwMCk7XHJcbiAgIGxldCBtaW51dGVzID0gTWF0aC5mbG9vcihzZWNvbmRzIC8gNjApO1xyXG4gICBsZXQgaG91cnMgPSBNYXRoLmZsb29yKG1pbnV0ZXMgLyA2MCk7XHJcbiAgIHNlY29uZHMgPSBzZWNvbmRzICUgNjA7XHJcbiAgIG1pbnV0ZXMgPSBtaW51dGVzICUgNjA7XHJcbiAgIC8vaG91cnMgPSBob3VycyAlIDI0O1xyXG4gICByZXR1cm4gYCR7cGFkVG8yRGlnaXRzKGhvdXJzKX06JHtwYWRUbzJEaWdpdHMobWludXRlcyl9OiR7cGFkVG8yRGlnaXRzKFxyXG4gc2Vjb25kcyxcclxuKX1gO1xyXG59XHJcblxyXG4vL1JlbmRlciB0aGUgbW92aWUgZGV0YWlscyB3aGVuIHNlbGVjdGVkXHJcbmZ1bmN0aW9uIE1vdmllKHtyZXN1bHRzfSkge1xyXG4gICBjb25zb2xlLmxvZyhyZXN1bHRzKVxyXG4gICBjb25zb2xlLmxvZyhlbWJlZCtyZXN1bHRzLnZpZGVvcy5yZXN1bHRzWzBdLmtleSk7XHJcbiAgIHJldHVybiA8R2xvYmFsTGF5b3V0PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ncHJldmlld19tb3ZpZV9vdXRlcl9jb250YWluZXInIHN0eWxlPXt7IGJhY2tncm91bmRJbWFnZTogYHVybCgke2ltZ191cmwrc2l6ZStyZXN1bHRzLmJhY2tkcm9wX3BhdGh9KWAgfX0+XHJcbiAgICAgIDxoMT57cmVzdWx0cy5vcmlnaW5hbF90aXRsZSB9PC9oMT5cclxuICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21vdmllX3ByZXZpZXcnID5cclxuICAgICAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naGVhZGVyX2ltZyc+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgIDxJbWFnZSBcclxuICAgICAgICAgICBzcmM9e2ltZ191cmwrc2l6ZStyZXN1bHRzLnBvc3Rlcl9wYXRofVxyXG4gICAgICAgICAgIHdpZHRoPXszNjB9XHJcbiAgICAgICAgICAgaGVpZ2h0PXs1MDB9Lz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGVzY3JpcHRpb24nPlxyXG4gICAgICAgICA8aDI+e3Jlc3VsdHMudGFnbGluZSA/IHJlc3VsdHMudGFnbGluZTpyZXN1bHRzLm9yaWdpbmFsX3RpdGxlfTwvaDI+XHJcbiAgICAgICAgICAgIDxwPntyZXN1bHRzLm92ZXJ2aWV3fTwvcD5cclxuICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgPHA+PGI+UmVsZWFzZSBEYXRlOjwvYj5cclxuICAgICAgICAgICAge2AgXHJcbiAgICAgICAgICAgICR7cmVzdWx0cy5yZWxlYXNlX2RhdGUucmVwbGFjZUFsbChcIi1cIiwgXCIgXCIpLnNwbGl0KFwiIFwiKVsyXX1cclxuICAgICAgICAgICAgJHttb250aFtwYXJzZUludChyZXN1bHRzLnJlbGVhc2VfZGF0ZS5yZXBsYWNlQWxsKFwiLVwiLCBcIiBcIikuc3BsaXQoXCIgXCIpWzFdKV19XHJcbiAgICAgICAgICAgICR7cmVzdWx0cy5yZWxlYXNlX2RhdGUucmVwbGFjZUFsbChcIi1cIiwgXCIgXCIpLnNwbGl0KFwiIFwiKVswXX1gXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8cD48Yj5TdGF0dXM6PC9iPiB7cmVzdWx0cy5zdGF0dXN9PC9wPlxyXG4gICAgICAgICAgICA8cD48Yj5HZW5yZTo8L2I+IHtyZXN1bHRzLmdlbnJlcy5tYXAoaXRlbT0+YCR7aXRlbS5uYW1lfSwgYCl9IDwvcD5cclxuICAgICAgICAgICAgPHA+PGI+UnVudGltZTo8L2I+IHtjb252ZXJ0TXNUb1RpbWUoYCR7cmVzdWx0cy5ydW50aW1lfTAwMDAwYCl9PC9wPlxyXG5cclxuICAgICAgICAgICAgPCBpZnJhbWUgXHJcbiAgICAgICAgICAgIHdpZHRoPVwiMzAwXCIgXHJcbiAgICAgICAgICAgIGhlaWdodD1cIjMwMFwiIFxyXG4gICAgICAgICAgICBzcmM9e2VtYmVkK3Jlc3VsdHMua2V5fSA+XHJcblxyXG4gICAgICAgICAgICA8L2lmcmFtZT5cclxuICAgICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICAgICBcclxuICAgICAgICAgPC9HbG9iYWxMYXlvdXQ+XHJcblxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IE1vdmllXHJcblxyXG4vL1NpbmNlIHdlIGRvbid0IGtub3cgd2hhdCB0aGkgaWQgd2lsbCBiZSB3ZSdsbCB1c2Ugc29tZXRoaW5nIGNhbGxlZCBhIHdpbGRjYXJkIHRvIHJlbmRlciB0aGUgcGFnZSBvZiB0aGUgc2VsZWN0ZWQgbW92aWUuXHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHsvL2NvbnRleHQgaG9sZHMgdGhlIGRhdGEgdGhhdHMgcGFzc2VkIHdpdGggdGhlIHVybFxyXG4gICBjb25zdCB7IGlkIH0gPSBjb250ZXh0LnF1ZXJ5Ly90aGlzIHdpbGwgYWxzbyBob2xkIHRoZSBpZCBvZiB0aGUgbW92aWVzIHNlbGVjdGVkIG9uIHRoZSBob21lIHBhZ2UuXHJcblxyXG4gICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgZmV0Y2goYCR7YmFzZVVSTH0ke2lkfSR7QVBJX0tFWX0ke2xhbmd9JmFwcGVuZF90b19yZXNwb25zZT12aWRlb3MsIGltYWdlc2ApXHJcbiAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKTtcclxuXHJcbiAgIHJldHVybntwcm9wczoge3Jlc3VsdHM6cmVxdWVzdH19XHJcbiAgIFxyXG5cclxuICAgLy9jb25zb2xlLnRhYmxlKHVybClcclxuICBcclxuIH1cclxuIFxyXG4iXSwibmFtZXMiOlsiR2xvYmFsTGF5b3V0IiwiSW1hZ2UiLCJzaXplIiwiaW1nX3VybCIsIm1vbnRoIiwicGFkVG8yRGlnaXRzIiwibnVtIiwidG9TdHJpbmciLCJwYWRTdGFydCIsImVtYmVkIiwiY29udmVydE1zVG9UaW1lIiwibWlsbGlzZWNvbmRzIiwic2Vjb25kcyIsIk1hdGgiLCJmbG9vciIsIm1pbnV0ZXMiLCJob3VycyIsIk1vdmllIiwicmVzdWx0cyIsImNvbnNvbGUiLCJsb2ciLCJ2aWRlb3MiLCJrZXkiLCJkaXYiLCJjbGFzc05hbWUiLCJzdHlsZSIsImJhY2tncm91bmRJbWFnZSIsImJhY2tkcm9wX3BhdGgiLCJoMSIsIm9yaWdpbmFsX3RpdGxlIiwic3JjIiwicG9zdGVyX3BhdGgiLCJ3aWR0aCIsImhlaWdodCIsImgyIiwidGFnbGluZSIsInAiLCJvdmVydmlldyIsImJyIiwiYiIsInJlbGVhc2VfZGF0ZSIsInJlcGxhY2VBbGwiLCJzcGxpdCIsInBhcnNlSW50Iiwic3RhdHVzIiwiZ2VucmVzIiwibWFwIiwiaXRlbSIsIm5hbWUiLCJydW50aW1lIiwiaWZyYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/movie/[id].js\n"));

/***/ })

});