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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_GlobalLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/GlobalLayout */ \"./components/GlobalLayout.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar size = \"original\";\nvar img_url = \"https://image.tmdb.org/t/p/\";\nvar embed = \"https://www.youtube.com/embed/\";\n//Use this array to replay the month integer wit a string\nvar month = [\n    null,\n    \"January\",\n    \"February\",\n    \"March\",\n    \"April\",\n    \"May\",\n    \"June\",\n    \"July\",\n    \"August\",\n    \"September\",\n    \"October\",\n    \"November\",\n    \"December\"\n];\n//convert milliseconds to Hours, Minutes and seconds\nfunction padTo2Digits(num) {\n    return num.toString().padStart(2, \"0\");\n}\nvar imageStyle = {\n    \"with\": \"100%\",\n    \"min-width\": \"320px\",\n    \"height\": \"100%\"\n};\nvar nimg = {\n    minWidth: \"320px\",\n    maxWidth: \"500px !important\"\n};\nfunction convertMsToTime(milliseconds) {\n    var seconds = Math.floor(milliseconds / 1000);\n    var minutes = Math.floor(seconds / 60);\n    var hours = Math.floor(minutes / 60);\n    seconds = seconds % 60;\n    minutes = minutes % 60;\n    //hours = hours % 24;\n    return \"\".concat(padTo2Digits(hours), \":\").concat(padTo2Digits(minutes), \":\").concat(padTo2Digits(seconds));\n}\n//Render the movie details when selected\nfunction Movie(param) {\n    var results = param.results;\n    console.log(results);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_GlobalLayout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"preview_movie_outer_container\",\n            style: {\n                backgroundImage: \"url(\".concat(img_url + size + results.backdrop_path, \")\")\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: results.original_title\n                }, void 0, false, {\n                    fileName: \"I:\\\\Web Dev Bootcamp\\\\3. Full Stack Web Developer\\\\Task 11 NEXT II\\\\Task11\\\\Next-Movie-API\\\\pages\\\\movie\\\\[id].js\",\n                    lineNumber: 52,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"movie_preview\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"inner-container\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"header_img\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    \"data-set\": nimg,\n                                    className: \"preview-image\",\n                                    src: img_url + size + results.poster_path,\n                                    style: imageStyle,\n                                    width: imageStyle.with,\n                                    height: imageStyle.height\n                                }, void 0, false, {\n                                    fileName: \"I:\\\\Web Dev Bootcamp\\\\3. Full Stack Web Developer\\\\Task 11 NEXT II\\\\Task11\\\\Next-Movie-API\\\\pages\\\\movie\\\\[id].js\",\n                                    lineNumber: 57,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"I:\\\\Web Dev Bootcamp\\\\3. Full Stack Web Developer\\\\Task 11 NEXT II\\\\Task11\\\\Next-Movie-API\\\\pages\\\\movie\\\\[id].js\",\n                                lineNumber: 56,\n                                columnNumber: 12\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"description\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        children: results.tagline ? results.tagline : results.original_title\n                                    }, void 0, false, {\n                                        fileName: \"I:\\\\Web Dev Bootcamp\\\\3. Full Stack Web Developer\\\\Task 11 NEXT II\\\\Task11\\\\Next-Movie-API\\\\pages\\\\movie\\\\[id].js\",\n                                        lineNumber: 68,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: results.overview\n                                    }, void 0, false, {\n                                        fileName: \"I:\\\\Web Dev Bootcamp\\\\3. Full Stack Web Developer\\\\Task 11 NEXT II\\\\Task11\\\\Next-Movie-API\\\\pages\\\\movie\\\\[id].js\",\n                                        lineNumber: 69,\n                                        columnNumber: 16\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"I:\\\\Web Dev Bootcamp\\\\3. Full Stack Web Developer\\\\Task 11 NEXT II\\\\Task11\\\\Next-Movie-API\\\\pages\\\\movie\\\\[id].js\",\n                                        lineNumber: 70,\n                                        columnNumber: 16\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                                                children: \"Release Date:\"\n                                            }, void 0, false, {\n                                                fileName: \"I:\\\\Web Dev Bootcamp\\\\3. Full Stack Web Developer\\\\Task 11 NEXT II\\\\Task11\\\\Next-Movie-API\\\\pages\\\\movie\\\\[id].js\",\n                                                lineNumber: 71,\n                                                columnNumber: 19\n                                            }, this),\n                                            \" \\n               \".concat(results.release_date.replaceAll(\"-\", \" \").split(\" \")[2], \"\\n               \").concat(month[parseInt(results.release_date.replaceAll(\"-\", \" \").split(\" \")[1])], \"\\n               \").concat(results.release_date.replaceAll(\"-\", \" \").split(\" \")[0])\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"I:\\\\Web Dev Bootcamp\\\\3. Full Stack Web Developer\\\\Task 11 NEXT II\\\\Task11\\\\Next-Movie-API\\\\pages\\\\movie\\\\[id].js\",\n                                        lineNumber: 71,\n                                        columnNumber: 16\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                                                children: \"Status:\"\n                                            }, void 0, false, {\n                                                fileName: \"I:\\\\Web Dev Bootcamp\\\\3. Full Stack Web Developer\\\\Task 11 NEXT II\\\\Task11\\\\Next-Movie-API\\\\pages\\\\movie\\\\[id].js\",\n                                                lineNumber: 78,\n                                                columnNumber: 19\n                                            }, this),\n                                            \" \",\n                                            results.status\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"I:\\\\Web Dev Bootcamp\\\\3. Full Stack Web Developer\\\\Task 11 NEXT II\\\\Task11\\\\Next-Movie-API\\\\pages\\\\movie\\\\[id].js\",\n                                        lineNumber: 78,\n                                        columnNumber: 16\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                                                children: \"Genre:\"\n                                            }, void 0, false, {\n                                                fileName: \"I:\\\\Web Dev Bootcamp\\\\3. Full Stack Web Developer\\\\Task 11 NEXT II\\\\Task11\\\\Next-Movie-API\\\\pages\\\\movie\\\\[id].js\",\n                                                lineNumber: 79,\n                                                columnNumber: 19\n                                            }, this),\n                                            \" \",\n                                            results.genres.map(function(item) {\n                                                return \"\".concat(item.name, \", \");\n                                            }),\n                                            \" \"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"I:\\\\Web Dev Bootcamp\\\\3. Full Stack Web Developer\\\\Task 11 NEXT II\\\\Task11\\\\Next-Movie-API\\\\pages\\\\movie\\\\[id].js\",\n                                        lineNumber: 79,\n                                        columnNumber: 16\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                                                children: \"Runtime:\"\n                                            }, void 0, false, {\n                                                fileName: \"I:\\\\Web Dev Bootcamp\\\\3. Full Stack Web Developer\\\\Task 11 NEXT II\\\\Task11\\\\Next-Movie-API\\\\pages\\\\movie\\\\[id].js\",\n                                                lineNumber: 80,\n                                                columnNumber: 19\n                                            }, this),\n                                            \" \",\n                                            convertMsToTime(\"\".concat(results.runtime, \"00000\"))\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"I:\\\\Web Dev Bootcamp\\\\3. Full Stack Web Developer\\\\Task 11 NEXT II\\\\Task11\\\\Next-Movie-API\\\\pages\\\\movie\\\\[id].js\",\n                                        lineNumber: 80,\n                                        columnNumber: 16\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"I:\\\\Web Dev Bootcamp\\\\3. Full Stack Web Developer\\\\Task 11 NEXT II\\\\Task11\\\\Next-Movie-API\\\\pages\\\\movie\\\\[id].js\",\n                                lineNumber: 67,\n                                columnNumber: 12\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"iframe\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"iframe\", {\n                                    width: \"100%\",\n                                    height: \"100%\",\n                                    src: embed + results.videos.results[0].key\n                                }, void 0, false, {\n                                    fileName: \"I:\\\\Web Dev Bootcamp\\\\3. Full Stack Web Developer\\\\Task 11 NEXT II\\\\Task11\\\\Next-Movie-API\\\\pages\\\\movie\\\\[id].js\",\n                                    lineNumber: 86,\n                                    columnNumber: 19\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"I:\\\\Web Dev Bootcamp\\\\3. Full Stack Web Developer\\\\Task 11 NEXT II\\\\Task11\\\\Next-Movie-API\\\\pages\\\\movie\\\\[id].js\",\n                                lineNumber: 85,\n                                columnNumber: 12\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"I:\\\\Web Dev Bootcamp\\\\3. Full Stack Web Developer\\\\Task 11 NEXT II\\\\Task11\\\\Next-Movie-API\\\\pages\\\\movie\\\\[id].js\",\n                        lineNumber: 55,\n                        columnNumber: 8\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"I:\\\\Web Dev Bootcamp\\\\3. Full Stack Web Developer\\\\Task 11 NEXT II\\\\Task11\\\\Next-Movie-API\\\\pages\\\\movie\\\\[id].js\",\n                    lineNumber: 53,\n                    columnNumber: 10\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"I:\\\\Web Dev Bootcamp\\\\3. Full Stack Web Developer\\\\Task 11 NEXT II\\\\Task11\\\\Next-Movie-API\\\\pages\\\\movie\\\\[id].js\",\n            lineNumber: 51,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"I:\\\\Web Dev Bootcamp\\\\3. Full Stack Web Developer\\\\Task 11 NEXT II\\\\Task11\\\\Next-Movie-API\\\\pages\\\\movie\\\\[id].js\",\n        lineNumber: 50,\n        columnNumber: 11\n    }, this);\n}\n_c = Movie;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Movie);\nvar _c;\n$RefreshReg$(_c, \"Movie\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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REFBQyxRQUFNOzs7OztvREFBSTs0Q0FBQSxHQUFDOzRDQUFDckIsT0FBTyxDQUFDMkIsTUFBTSxDQUFDQyxHQUFHLENBQUNDLFNBQUFBLElBQUk7dURBQUUsRUFBQyxDQUFZLE1BQUUsQ0FBWkEsSUFBSSxDQUFDQyxJQUFJLEVBQUMsSUFBRSxDQUFDOzZDQUFBLENBQUM7NENBQUMsR0FBQzs7Ozs7OzRDQUFJO2tEQUNsRSw4REFBQ1osR0FBQzs7MERBQUMsOERBQUNHLEdBQUM7MERBQUMsVUFBUTs7Ozs7b0RBQUk7NENBQUEsR0FBQzs0Q0FBQzdCLGVBQWUsQ0FBQyxFQUFDLENBQWtCLE1BQUssQ0FBckJRLE9BQU8sQ0FBQytCLE9BQU8sRUFBQyxPQUFLLENBQUMsQ0FBQzs7Ozs7OzRDQUFLOzs7Ozs7b0NBSWpFOzBDQUNOLDhEQUFDNUIsS0FBRztnQ0FBQ0MsU0FBUyxFQUFDLFFBQVE7MENBQ2hCLDRFQUFDNEIsUUFBTTtvQ0FFUG5CLEtBQUssRUFBQyxNQUFNO29DQUNaRSxNQUFNLEVBQUMsTUFBTTtvQ0FDYkosR0FBRyxFQUFFN0IsS0FBSyxHQUFDa0IsT0FBTyxDQUFDaUMsTUFBTSxDQUFDakMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDa0MsR0FBRzs7Ozs7d0NBRS9COzs7OztvQ0FDTjs7Ozs7OzRCQUNSOzs7Ozt3QkFDRTs7Ozs7O2dCQUNIOzs7OztZQUVZO0NBRXZCO0FBckRRbkMsS0FBQUEsS0FBSzs7QUFzRGQsK0RBQWVBLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbW92aWUvW2lkXS5qcz82MTU2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHbG9iYWxMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9HbG9iYWxMYXlvdXQnXHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xyXG5cclxuLy8gVGhlIFtpZF0uanMgd2lsbCBnZW5lcmF0ZSB0aGUgY29udGVudCBvZiBhbnkgIHNlbGVjdGVkIG1vdmllLlxyXG5cclxuLy9TdG9yZSB0aGUgbW92aWUgc3RpbmcgaW50byB2YXJpYWJsZXNcclxubGV0IGJhc2VVUkwgICAgID0gXCJodHRwczovL2FwaS50aGVtb3ZpZWRiLm9yZy8zL21vdmllL1wiO1xyXG5sZXQgbGFuZyAgICAgICAgPSBcIiZsYW5ndWFnZT1lbi1VU1wiO1xyXG5sZXQgQVBJX0tFWSAgICAgPSBcIj9hcGlfa2V5PThjZjFlZTg4ZmNmZjA4Y2FjNDcwMmE1M2NlN2JjNDcwXCI7XHJcbmxldCBzaXplICAgICAgICA9IFwib3JpZ2luYWxcIjtcclxubGV0IGltZ191cmwgICAgID0gXCJodHRwczovL2ltYWdlLnRtZGIub3JnL3QvcC9cIlxyXG5sZXQgZW1iZWQgICAgICAgPSBgaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvYFxyXG5cclxuLy9Vc2UgdGhpcyBhcnJheSB0byByZXBsYXkgdGhlIG1vbnRoIGludGVnZXIgd2l0IGEgc3RyaW5nXHJcbmNvbnN0IG1vbnRoID0gW251bGwsXCJKYW51YXJ5XCIsXCJGZWJydWFyeVwiLFwiTWFyY2hcIixcIkFwcmlsXCIsXCJNYXlcIixcIkp1bmVcIixcIkp1bHlcIixcIkF1Z3VzdFwiLFwiU2VwdGVtYmVyXCIsXCJPY3RvYmVyXCIsXCJOb3ZlbWJlclwiLFwiRGVjZW1iZXJcIl07XHJcblxyXG4vL2NvbnZlcnQgbWlsbGlzZWNvbmRzIHRvIEhvdXJzLCBNaW51dGVzIGFuZCBzZWNvbmRzXHJcbmZ1bmN0aW9uIHBhZFRvMkRpZ2l0cyhudW0pIHtcclxuICAgcmV0dXJuIG51bS50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJyk7XHJcbn1cclxuXHJcbmNvbnN0IGltYWdlU3R5bGU9e1xyXG4gICBcIndpdGhcIjogXCIxMDAlXCIsXHJcbiAgIFwibWluLXdpZHRoXCI6IFwiMzIwcHhcIixcclxuICAgXCJoZWlnaHRcIjogXCIxMDAlXCIsXHJcbn1cclxuXHJcbmxldCBuaW1nID17XHJcbm1pbldpZHRoOiBcIjMyMHB4XCIsXHJcbm1heFdpZHRoOiBcIjUwMHB4ICFpbXBvcnRhbnRcIlxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gY29udmVydE1zVG9UaW1lKG1pbGxpc2Vjb25kcykge1xyXG4gICBsZXQgc2Vjb25kcyA9IE1hdGguZmxvb3IobWlsbGlzZWNvbmRzIC8gMTAwMCk7XHJcbiAgIGxldCBtaW51dGVzID0gTWF0aC5mbG9vcihzZWNvbmRzIC8gNjApO1xyXG4gICBsZXQgaG91cnMgPSBNYXRoLmZsb29yKG1pbnV0ZXMgLyA2MCk7XHJcbiAgIHNlY29uZHMgPSBzZWNvbmRzICUgNjA7XHJcbiAgIG1pbnV0ZXMgPSBtaW51dGVzICUgNjA7XHJcbiAgIC8vaG91cnMgPSBob3VycyAlIDI0O1xyXG4gICByZXR1cm4gYCR7cGFkVG8yRGlnaXRzKGhvdXJzKX06JHtwYWRUbzJEaWdpdHMobWludXRlcyl9OiR7cGFkVG8yRGlnaXRzKFxyXG4gc2Vjb25kcyxcclxuKX1gO1xyXG59XHJcblxyXG4vL1JlbmRlciB0aGUgbW92aWUgZGV0YWlscyB3aGVuIHNlbGVjdGVkXHJcbmZ1bmN0aW9uIE1vdmllKHtyZXN1bHRzfSkge1xyXG4gICBjb25zb2xlLmxvZyhyZXN1bHRzKVxyXG5cclxuICAgcmV0dXJuIDxHbG9iYWxMYXlvdXQ+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdwcmV2aWV3X21vdmllX291dGVyX2NvbnRhaW5lcicgc3R5bGU9e3sgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7aW1nX3VybCtzaXplK3Jlc3VsdHMuYmFja2Ryb3BfcGF0aH0pYCB9fT5cclxuICAgICAgPGgxPntyZXN1bHRzLm9yaWdpbmFsX3RpdGxlIH08L2gxPlxyXG4gICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbW92aWVfcHJldmlldycgPlxyXG4gICAgICAgIFxyXG4gICAgICAgPGRpdiBjbGFzc05hbWU9J2lubmVyLWNvbnRhaW5lcic+XHJcbiAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2hlYWRlcl9pbWcnPlxyXG4gICAgICAgICAgICAgIDxJbWFnZSBcclxuICAgICAgICAgICAgICBkYXRhLXNldD17bmltZ31cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9J3ByZXZpZXctaW1hZ2UnXHJcbiAgICAgICAgICAgICAgc3JjPXtpbWdfdXJsK3NpemUrcmVzdWx0cy5wb3N0ZXJfcGF0aH1cclxuICAgICAgICAgICAgICBzdHlsZT17aW1hZ2VTdHlsZX1cclxuICAgICAgICAgICAgICB3aWR0aD17aW1hZ2VTdHlsZS53aXRofVxyXG4gICAgICAgICAgICAgIGhlaWdodD17aW1hZ2VTdHlsZS5oZWlnaHR9Lz5cclxuICAgICAgICAgICA8L2Rpdj5cclxuICAgXHJcbiAgIFxyXG4gICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkZXNjcmlwdGlvbic+XHJcbiAgICAgICAgICAgIDxoMj57cmVzdWx0cy50YWdsaW5lID8gcmVzdWx0cy50YWdsaW5lOnJlc3VsdHMub3JpZ2luYWxfdGl0bGV9PC9oMj5cclxuICAgICAgICAgICAgICAgPHA+e3Jlc3VsdHMub3ZlcnZpZXd9PC9wPlxyXG4gICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICA8cD48Yj5SZWxlYXNlIERhdGU6PC9iPlxyXG4gICAgICAgICAgICAgICB7YCBcclxuICAgICAgICAgICAgICAgJHtyZXN1bHRzLnJlbGVhc2VfZGF0ZS5yZXBsYWNlQWxsKFwiLVwiLCBcIiBcIikuc3BsaXQoXCIgXCIpWzJdfVxyXG4gICAgICAgICAgICAgICAke21vbnRoW3BhcnNlSW50KHJlc3VsdHMucmVsZWFzZV9kYXRlLnJlcGxhY2VBbGwoXCItXCIsIFwiIFwiKS5zcGxpdChcIiBcIilbMV0pXX1cclxuICAgICAgICAgICAgICAgJHtyZXN1bHRzLnJlbGVhc2VfZGF0ZS5yZXBsYWNlQWxsKFwiLVwiLCBcIiBcIikuc3BsaXQoXCIgXCIpWzBdfWBcclxuICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgIDxwPjxiPlN0YXR1czo8L2I+IHtyZXN1bHRzLnN0YXR1c308L3A+XHJcbiAgICAgICAgICAgICAgIDxwPjxiPkdlbnJlOjwvYj4ge3Jlc3VsdHMuZ2VucmVzLm1hcChpdGVtPT5gJHtpdGVtLm5hbWV9LCBgKX0gPC9wPlxyXG4gICAgICAgICAgICAgICA8cD48Yj5SdW50aW1lOjwvYj4ge2NvbnZlcnRNc1RvVGltZShgJHtyZXN1bHRzLnJ1bnRpbWV9MDAwMDBgKX08L3A+XHJcbiAgIFxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2lmcmFtZSc+XHJcbiAgICAgICAgICAgICAgICAgIDxpZnJhbWVcclxuICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCIgXHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjEwMCVcIiBcclxuICAgICAgICAgICAgICAgICAgc3JjPXtlbWJlZCtyZXN1bHRzLnZpZGVvcy5yZXN1bHRzWzBdLmtleX0gPlxyXG4gICAgICBcclxuICAgICAgICAgICAgICAgICAgPC9pZnJhbWU+XHJcbiAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgPC9kaXY+XHJcbiAgICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgICAgXHJcbiAgICAgICAgIDwvR2xvYmFsTGF5b3V0PlxyXG5cclxufVxyXG5leHBvcnQgZGVmYXVsdCBNb3ZpZVxyXG5cclxuLy9TaW5jZSB3ZSBkb24ndCBrbm93IHdoYXQgdGhpIGlkIHdpbGwgYmUgd2UnbGwgdXNlIHNvbWV0aGluZyBjYWxsZWQgYSB3aWxkY2FyZCB0byByZW5kZXIgdGhlIHBhZ2Ugb2YgdGhlIHNlbGVjdGVkIG1vdmllLlxyXG5cclxuXHJcblxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7Ly9jb250ZXh0IGhvbGRzIHRoZSBkYXRhIHRoYXRzIHBhc3NlZCB3aXRoIHRoZSB1cmxcclxuICAgY29uc3QgeyBpZCB9ID0gY29udGV4dC5xdWVyeS8vdGhpcyB3aWxsIGFsc28gaG9sZCB0aGUgaWQgb2YgdGhlIG1vdmllcyBzZWxlY3RlZCBvbiB0aGUgaG9tZSBwYWdlLlxyXG5cclxuICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGZldGNoKGAke2Jhc2VVUkx9JHtpZH0ke0FQSV9LRVl9JHtsYW5nfSZhcHBlbmRfdG9fcmVzcG9uc2U9dmlkZW9zLCBpbWFnZXNgKVxyXG4gICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSk7XHJcblxyXG4gICByZXR1cm57cHJvcHM6IHtyZXN1bHRzOnJlcXVlc3R9fVxyXG4gICBcclxuXHJcbiAgIC8vY29uc29sZS50YWJsZSh1cmwpXHJcbiAgXHJcbiB9XHJcbiBcclxuIl0sIm5hbWVzIjpbIkdsb2JhbExheW91dCIsIkltYWdlIiwic2l6ZSIsImltZ191cmwiLCJlbWJlZCIsIm1vbnRoIiwicGFkVG8yRGlnaXRzIiwibnVtIiwidG9TdHJpbmciLCJwYWRTdGFydCIsImltYWdlU3R5bGUiLCJuaW1nIiwibWluV2lkdGgiLCJtYXhXaWR0aCIsImNvbnZlcnRNc1RvVGltZSIsIm1pbGxpc2Vjb25kcyIsInNlY29uZHMiLCJNYXRoIiwiZmxvb3IiLCJtaW51dGVzIiwiaG91cnMiLCJNb3ZpZSIsInJlc3VsdHMiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJiYWNrZHJvcF9wYXRoIiwiaDEiLCJvcmlnaW5hbF90aXRsZSIsImRhdGEtc2V0Iiwic3JjIiwicG9zdGVyX3BhdGgiLCJ3aWR0aCIsIndpdGgiLCJoZWlnaHQiLCJoMiIsInRhZ2xpbmUiLCJwIiwib3ZlcnZpZXciLCJiciIsImIiLCJyZWxlYXNlX2RhdGUiLCJyZXBsYWNlQWxsIiwic3BsaXQiLCJwYXJzZUludCIsInN0YXR1cyIsImdlbnJlcyIsIm1hcCIsIml0ZW0iLCJuYW1lIiwicnVudGltZSIsImlmcmFtZSIsInZpZGVvcyIsImtleSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/movie/[id].js\n"));

/***/ })

});