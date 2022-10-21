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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_GlobalLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/GlobalLayout */ \"./components/GlobalLayout.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar size = \"original\";\nvar img_url = \"https://image.tmdb.org/t/p/\";\n//Use this array to replay the month integer wit a string\nvar month = [\n    null,\n    \"January\",\n    \"February\",\n    \"March\",\n    \"April\",\n    \"May\",\n    \"June\",\n    \"July\",\n    \"August\",\n    \"September\",\n    \"October\",\n    \"November\",\n    \"December\"\n];\n//convert milliseconds to Hours, Minutes and seconds\nfunction padTo2Digits(num) {\n    return num.toString().padStart(2, \"0\");\n}\nvar embed = \"https://www.youtube.com/embed/\";\nfunction convertMsToTime(milliseconds) {\n    var seconds = Math.floor(milliseconds / 1000);\n    var minutes = Math.floor(seconds / 60);\n    var hours = Math.floor(minutes / 60);\n    seconds = seconds % 60;\n    minutes = minutes % 60;\n    //hours = hours % 24;\n    return \"\".concat(padTo2Digits(hours), \":\").concat(padTo2Digits(minutes), \":\").concat(padTo2Digits(seconds));\n}\n//Render the movie details when selected\nfunction Movie(param) {\n    var results = param.results;\n    console.log(results);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_GlobalLayout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"preview_movie_outer_container\",\n            style: {\n                backgroundImage: \"url(\".concat(img_url + size + results.backdrop_path, \")\")\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: results.original_title\n                }, void 0, false, {\n                    fileName: \"I:\\\\Web Dev Bootcamp\\\\3. Full Stack Web Developer\\\\Task 11 NEXT II\\\\Task11\\\\Next-Movie-API\\\\pages\\\\movie\\\\[id].js\",\n                    lineNumber: 41,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"movie_preview\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"header_img\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                src: img_url + size + results.poster_path,\n                                width: 360,\n                                height: 500\n                            }, void 0, false, {\n                                fileName: \"I:\\\\Web Dev Bootcamp\\\\3. Full Stack Web Developer\\\\Task 11 NEXT II\\\\Task11\\\\Next-Movie-API\\\\pages\\\\movie\\\\[id].js\",\n                                lineNumber: 46,\n                                columnNumber: 12\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"I:\\\\Web Dev Bootcamp\\\\3. Full Stack Web Developer\\\\Task 11 NEXT II\\\\Task11\\\\Next-Movie-API\\\\pages\\\\movie\\\\[id].js\",\n                            lineNumber: 44,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"description\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    children: results.tagline ? results.tagline : results.original_title\n                                }, void 0, false, {\n                                    fileName: \"I:\\\\Web Dev Bootcamp\\\\3. Full Stack Web Developer\\\\Task 11 NEXT II\\\\Task11\\\\Next-Movie-API\\\\pages\\\\movie\\\\[id].js\",\n                                    lineNumber: 52,\n                                    columnNumber: 10\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: results.overview\n                                }, void 0, false, {\n                                    fileName: \"I:\\\\Web Dev Bootcamp\\\\3. Full Stack Web Developer\\\\Task 11 NEXT II\\\\Task11\\\\Next-Movie-API\\\\pages\\\\movie\\\\[id].js\",\n                                    lineNumber: 53,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"I:\\\\Web Dev Bootcamp\\\\3. Full Stack Web Developer\\\\Task 11 NEXT II\\\\Task11\\\\Next-Movie-API\\\\pages\\\\movie\\\\[id].js\",\n                                    lineNumber: 54,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                                            children: \"Release Date:\"\n                                        }, void 0, false, {\n                                            fileName: \"I:\\\\Web Dev Bootcamp\\\\3. Full Stack Web Developer\\\\Task 11 NEXT II\\\\Task11\\\\Next-Movie-API\\\\pages\\\\movie\\\\[id].js\",\n                                            lineNumber: 55,\n                                            columnNumber: 16\n                                        }, this),\n                                        \" \\n            \".concat(results.release_date.replaceAll(\"-\", \" \").split(\" \")[2], \"\\n            \").concat(month[parseInt(results.release_date.replaceAll(\"-\", \" \").split(\" \")[1])], \"\\n            \").concat(results.release_date.replaceAll(\"-\", \" \").split(\" \")[0])\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"I:\\\\Web Dev Bootcamp\\\\3. Full Stack Web Developer\\\\Task 11 NEXT II\\\\Task11\\\\Next-Movie-API\\\\pages\\\\movie\\\\[id].js\",\n                                    lineNumber: 55,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                                            children: \"Status:\"\n                                        }, void 0, false, {\n                                            fileName: \"I:\\\\Web Dev Bootcamp\\\\3. Full Stack Web Developer\\\\Task 11 NEXT II\\\\Task11\\\\Next-Movie-API\\\\pages\\\\movie\\\\[id].js\",\n                                            lineNumber: 62,\n                                            columnNumber: 16\n                                        }, this),\n                                        \" \",\n                                        results.status\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"I:\\\\Web Dev Bootcamp\\\\3. Full Stack Web Developer\\\\Task 11 NEXT II\\\\Task11\\\\Next-Movie-API\\\\pages\\\\movie\\\\[id].js\",\n                                    lineNumber: 62,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                                            children: \"Genre:\"\n                                        }, void 0, false, {\n                                            fileName: \"I:\\\\Web Dev Bootcamp\\\\3. Full Stack Web Developer\\\\Task 11 NEXT II\\\\Task11\\\\Next-Movie-API\\\\pages\\\\movie\\\\[id].js\",\n                                            lineNumber: 63,\n                                            columnNumber: 16\n                                        }, this),\n                                        \" \",\n                                        results.genres.map(function(item) {\n                                            return \"\".concat(item.name, \", \");\n                                        }),\n                                        \" \"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"I:\\\\Web Dev Bootcamp\\\\3. Full Stack Web Developer\\\\Task 11 NEXT II\\\\Task11\\\\Next-Movie-API\\\\pages\\\\movie\\\\[id].js\",\n                                    lineNumber: 63,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                                            children: \"Runtime:\"\n                                        }, void 0, false, {\n                                            fileName: \"I:\\\\Web Dev Bootcamp\\\\3. Full Stack Web Developer\\\\Task 11 NEXT II\\\\Task11\\\\Next-Movie-API\\\\pages\\\\movie\\\\[id].js\",\n                                            lineNumber: 64,\n                                            columnNumber: 16\n                                        }, this),\n                                        \" \",\n                                        convertMsToTime(\"\".concat(results.runtime, \"00000\"))\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"I:\\\\Web Dev Bootcamp\\\\3. Full Stack Web Developer\\\\Task 11 NEXT II\\\\Task11\\\\Next-Movie-API\\\\pages\\\\movie\\\\[id].js\",\n                                    lineNumber: 64,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"iframe\", {\n                                    width: \"420\",\n                                    height: \"345\",\n                                    src: embed + results.key\n                                }, void 0, false, {\n                                    fileName: \"I:\\\\Web Dev Bootcamp\\\\3. Full Stack Web Developer\\\\Task 11 NEXT II\\\\Task11\\\\Next-Movie-API\\\\pages\\\\movie\\\\[id].js\",\n                                    lineNumber: 66,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"I:\\\\Web Dev Bootcamp\\\\3. Full Stack Web Developer\\\\Task 11 NEXT II\\\\Task11\\\\Next-Movie-API\\\\pages\\\\movie\\\\[id].js\",\n                            lineNumber: 51,\n                            columnNumber: 9\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"I:\\\\Web Dev Bootcamp\\\\3. Full Stack Web Developer\\\\Task 11 NEXT II\\\\Task11\\\\Next-Movie-API\\\\pages\\\\movie\\\\[id].js\",\n                    lineNumber: 42,\n                    columnNumber: 10\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"I:\\\\Web Dev Bootcamp\\\\3. Full Stack Web Developer\\\\Task 11 NEXT II\\\\Task11\\\\Next-Movie-API\\\\pages\\\\movie\\\\[id].js\",\n            lineNumber: 40,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"I:\\\\Web Dev Bootcamp\\\\3. Full Stack Web Developer\\\\Task 11 NEXT II\\\\Task11\\\\Next-Movie-API\\\\pages\\\\movie\\\\[id].js\",\n        lineNumber: 39,\n        columnNumber: 11\n    }, this);\n}\n_c = Movie;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Movie);\nvar _c;\n$RefreshReg$(_c, \"Movie\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQyxDQUFDOzs7Ozs7d0NBQUs7OENBRW5FLDhEQUFFQyxRQUFNO29DQUNSbEIsS0FBSyxFQUFDLEtBQUs7b0NBQ1hDLE1BQU0sRUFBQyxLQUFLO29DQUNaSCxHQUFHLEVBQUVuQixLQUFLLEdBQUNTLE9BQU8sQ0FBQytCLEdBQUc7Ozs7O3dDQUViOzs7Ozs7Z0NBQ1A7Ozs7Ozt3QkFDQzs7Ozs7O2dCQUNIOzs7OztZQUVZO0NBRXZCO0FBMUNRaEMsS0FBQUEsS0FBSzs7QUEyQ2QsK0RBQWVBLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbW92aWUvW2lkXS5qcz82MTU2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHbG9iYWxMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9HbG9iYWxMYXlvdXQnXHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xyXG5cclxuLy8gVGhlIFtpZF0uanMgd2lsbCBnZW5lcmF0ZSB0aGUgY29udGVudCBvZiBhbnkgIHNlbGVjdGVkIG1vdmllLlxyXG5cclxuLy9TdG9yZSB0aGUgbW92aWUgc3RpbmcgaW50byB2YXJpYWJsZXNcclxubGV0IGJhc2VVUkwgICAgID0gXCJodHRwczovL2FwaS50aGVtb3ZpZWRiLm9yZy8zL21vdmllL1wiO1xyXG5sZXQgbGFuZyAgICAgICAgPSBcIiZsYW5ndWFnZT1lbi1VU1wiO1xyXG5sZXQgQVBJX0tFWSAgICAgPSBcIj9hcGlfa2V5PThjZjFlZTg4ZmNmZjA4Y2FjNDcwMmE1M2NlN2JjNDcwXCI7XHJcbmxldCBzaXplICAgICAgICA9IFwib3JpZ2luYWxcIjtcclxubGV0IGltZ191cmwgICAgID0gXCJodHRwczovL2ltYWdlLnRtZGIub3JnL3QvcC9cIlxyXG5cclxuLy9Vc2UgdGhpcyBhcnJheSB0byByZXBsYXkgdGhlIG1vbnRoIGludGVnZXIgd2l0IGEgc3RyaW5nXHJcbmNvbnN0IG1vbnRoID0gW251bGwsXCJKYW51YXJ5XCIsXCJGZWJydWFyeVwiLFwiTWFyY2hcIixcIkFwcmlsXCIsXCJNYXlcIixcIkp1bmVcIixcIkp1bHlcIixcIkF1Z3VzdFwiLFwiU2VwdGVtYmVyXCIsXCJPY3RvYmVyXCIsXCJOb3ZlbWJlclwiLFwiRGVjZW1iZXJcIl07XHJcblxyXG4vL2NvbnZlcnQgbWlsbGlzZWNvbmRzIHRvIEhvdXJzLCBNaW51dGVzIGFuZCBzZWNvbmRzXHJcbmZ1bmN0aW9uIHBhZFRvMkRpZ2l0cyhudW0pIHtcclxuICAgcmV0dXJuIG51bS50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJyk7XHJcbn1cclxuXHJcbmxldCBlbWJlZCA9IGBodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC9gXHJcblxyXG5mdW5jdGlvbiBjb252ZXJ0TXNUb1RpbWUobWlsbGlzZWNvbmRzKSB7XHJcbiAgIGxldCBzZWNvbmRzID0gTWF0aC5mbG9vcihtaWxsaXNlY29uZHMgLyAxMDAwKTtcclxuICAgbGV0IG1pbnV0ZXMgPSBNYXRoLmZsb29yKHNlY29uZHMgLyA2MCk7XHJcbiAgIGxldCBob3VycyA9IE1hdGguZmxvb3IobWludXRlcyAvIDYwKTtcclxuICAgc2Vjb25kcyA9IHNlY29uZHMgJSA2MDtcclxuICAgbWludXRlcyA9IG1pbnV0ZXMgJSA2MDtcclxuICAgLy9ob3VycyA9IGhvdXJzICUgMjQ7XHJcbiAgIHJldHVybiBgJHtwYWRUbzJEaWdpdHMoaG91cnMpfToke3BhZFRvMkRpZ2l0cyhtaW51dGVzKX06JHtwYWRUbzJEaWdpdHMoXHJcbiBzZWNvbmRzLFxyXG4pfWA7XHJcbn1cclxuXHJcbi8vUmVuZGVyIHRoZSBtb3ZpZSBkZXRhaWxzIHdoZW4gc2VsZWN0ZWRcclxuZnVuY3Rpb24gTW92aWUoe3Jlc3VsdHN9KSB7XHJcbiAgIGNvbnNvbGUubG9nKHJlc3VsdHMpXHJcblxyXG4gICByZXR1cm4gPEdsb2JhbExheW91dD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J3ByZXZpZXdfbW92aWVfb3V0ZXJfY29udGFpbmVyJyBzdHlsZT17eyBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtpbWdfdXJsK3NpemUrcmVzdWx0cy5iYWNrZHJvcF9wYXRofSlgIH19PlxyXG4gICAgICA8aDE+e3Jlc3VsdHMub3JpZ2luYWxfdGl0bGUgfTwvaDE+XHJcbiAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtb3ZpZV9wcmV2aWV3JyA+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2hlYWRlcl9pbWcnPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICA8SW1hZ2UgXHJcbiAgICAgICAgICAgc3JjPXtpbWdfdXJsK3NpemUrcmVzdWx0cy5wb3N0ZXJfcGF0aH1cclxuICAgICAgICAgICB3aWR0aD17MzYwfVxyXG4gICAgICAgICAgIGhlaWdodD17NTAwfS8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Rlc2NyaXB0aW9uJz5cclxuICAgICAgICAgPGgyPntyZXN1bHRzLnRhZ2xpbmUgPyByZXN1bHRzLnRhZ2xpbmU6cmVzdWx0cy5vcmlnaW5hbF90aXRsZX08L2gyPlxyXG4gICAgICAgICAgICA8cD57cmVzdWx0cy5vdmVydmlld308L3A+XHJcbiAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgIDxwPjxiPlJlbGVhc2UgRGF0ZTo8L2I+XHJcbiAgICAgICAgICAgIHtgIFxyXG4gICAgICAgICAgICAke3Jlc3VsdHMucmVsZWFzZV9kYXRlLnJlcGxhY2VBbGwoXCItXCIsIFwiIFwiKS5zcGxpdChcIiBcIilbMl19XHJcbiAgICAgICAgICAgICR7bW9udGhbcGFyc2VJbnQocmVzdWx0cy5yZWxlYXNlX2RhdGUucmVwbGFjZUFsbChcIi1cIiwgXCIgXCIpLnNwbGl0KFwiIFwiKVsxXSldfVxyXG4gICAgICAgICAgICAke3Jlc3VsdHMucmVsZWFzZV9kYXRlLnJlcGxhY2VBbGwoXCItXCIsIFwiIFwiKS5zcGxpdChcIiBcIilbMF19YFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPHA+PGI+U3RhdHVzOjwvYj4ge3Jlc3VsdHMuc3RhdHVzfTwvcD5cclxuICAgICAgICAgICAgPHA+PGI+R2VucmU6PC9iPiB7cmVzdWx0cy5nZW5yZXMubWFwKGl0ZW09PmAke2l0ZW0ubmFtZX0sIGApfSA8L3A+XHJcbiAgICAgICAgICAgIDxwPjxiPlJ1bnRpbWU6PC9iPiB7Y29udmVydE1zVG9UaW1lKGAke3Jlc3VsdHMucnVudGltZX0wMDAwMGApfTwvcD5cclxuXHJcbiAgICAgICAgICAgIDwgaWZyYW1lIFxyXG4gICAgICAgICAgICB3aWR0aD1cIjQyMFwiIFxyXG4gICAgICAgICAgICBoZWlnaHQ9XCIzNDVcIiBcclxuICAgICAgICAgICAgc3JjPXtlbWJlZCtyZXN1bHRzLmtleX0gPlxyXG5cclxuICAgICAgICAgICAgPC9pZnJhbWU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgICAgXHJcbiAgICAgICAgIDwvR2xvYmFsTGF5b3V0PlxyXG5cclxufVxyXG5leHBvcnQgZGVmYXVsdCBNb3ZpZVxyXG5cclxuLy9TaW5jZSB3ZSBkb24ndCBrbm93IHdoYXQgdGhpIGlkIHdpbGwgYmUgd2UnbGwgdXNlIHNvbWV0aGluZyBjYWxsZWQgYSB3aWxkY2FyZCB0byByZW5kZXIgdGhlIHBhZ2Ugb2YgdGhlIHNlbGVjdGVkIG1vdmllLlxyXG5cclxuXHJcblxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7Ly9jb250ZXh0IGhvbGRzIHRoZSBkYXRhIHRoYXRzIHBhc3NlZCB3aXRoIHRoZSB1cmxcclxuICAgY29uc3QgeyBpZCB9ID0gY29udGV4dC5xdWVyeS8vdGhpcyB3aWxsIGFsc28gaG9sZCB0aGUgaWQgb2YgdGhlIG1vdmllcyBzZWxlY3RlZCBvbiB0aGUgaG9tZSBwYWdlLlxyXG5cclxuICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGZldGNoKGAke2Jhc2VVUkx9JHtpZH0ke0FQSV9LRVl9JHtsYW5nfSZhcHBlbmRfdG9fcmVzcG9uc2U9dmlkZW9zLCBpbWFnZXNgKVxyXG4gICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSk7XHJcblxyXG4gICByZXR1cm57cHJvcHM6IHtyZXN1bHRzOnJlcXVlc3R9fVxyXG4gICBcclxuXHJcbiAgIC8vY29uc29sZS50YWJsZSh1cmwpXHJcbiAgXHJcbiB9XHJcbiBcclxuIl0sIm5hbWVzIjpbIkdsb2JhbExheW91dCIsIkltYWdlIiwic2l6ZSIsImltZ191cmwiLCJtb250aCIsInBhZFRvMkRpZ2l0cyIsIm51bSIsInRvU3RyaW5nIiwicGFkU3RhcnQiLCJlbWJlZCIsImNvbnZlcnRNc1RvVGltZSIsIm1pbGxpc2Vjb25kcyIsInNlY29uZHMiLCJNYXRoIiwiZmxvb3IiLCJtaW51dGVzIiwiaG91cnMiLCJNb3ZpZSIsInJlc3VsdHMiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJiYWNrZHJvcF9wYXRoIiwiaDEiLCJvcmlnaW5hbF90aXRsZSIsInNyYyIsInBvc3Rlcl9wYXRoIiwid2lkdGgiLCJoZWlnaHQiLCJoMiIsInRhZ2xpbmUiLCJwIiwib3ZlcnZpZXciLCJiciIsImIiLCJyZWxlYXNlX2RhdGUiLCJyZXBsYWNlQWxsIiwic3BsaXQiLCJwYXJzZUludCIsInN0YXR1cyIsImdlbnJlcyIsIm1hcCIsIml0ZW0iLCJuYW1lIiwicnVudGltZSIsImlmcmFtZSIsImtleSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/movie/[id].js\n"));

/***/ })

});