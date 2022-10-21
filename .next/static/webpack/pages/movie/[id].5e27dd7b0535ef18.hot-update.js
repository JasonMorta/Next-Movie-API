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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_GlobalLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/GlobalLayout */ \"./components/GlobalLayout.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar size = \"original\";\nvar img_url = \"https://image.tmdb.org/t/p/\";\nvar embed = \"https://www.youtube.com/embed/\";\n//Use this array to replay the month integer wit a string\nvar month = [\n    null,\n    \"January\",\n    \"February\",\n    \"March\",\n    \"April\",\n    \"May\",\n    \"June\",\n    \"July\",\n    \"August\",\n    \"September\",\n    \"October\",\n    \"November\",\n    \"December\"\n];\n//convert milliseconds to Hours, Minutes and seconds\nfunction padTo2Digits(num) {\n    return num.toString().padStart(2, \"0\");\n}\nvar imageStyle = {\n    \"with\": \"380\",\n    \"min-width\": \"250px\",\n    \"height\": \"500\"\n};\nvar nimg = {\n    minWidth: \"320px\",\n    maxWidth: \"500px !important\"\n};\nfunction convertMsToTime(milliseconds) {\n    var seconds = Math.floor(milliseconds / 1000);\n    var minutes = Math.floor(seconds / 60);\n    var hours = Math.floor(minutes / 60);\n    seconds = seconds % 60;\n    minutes = minutes % 60;\n    //hours = hours % 24;\n    return \"\".concat(padTo2Digits(hours), \":\").concat(padTo2Digits(minutes), \":\").concat(padTo2Digits(seconds));\n}\n//Render the movie details when selected\nfunction Movie(param) {\n    var results = param.results;\n    console.log(results);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_GlobalLayout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"preview_movie_outer_container\",\n            style: {\n                backgroundImage: \"url(\".concat(img_url + size + results.backdrop_path, \")\")\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: results.original_title\n                }, void 0, false, {\n                    fileName: \"I:\\\\Web Dev Bootcamp\\\\3. Full Stack Web Developer\\\\Task 11 NEXT II\\\\Task11\\\\Next-Movie-API\\\\pages\\\\movie\\\\[id].js\",\n                    lineNumber: 52,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"movie_preview\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"inner-container\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"header_img\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    \"data-set\": nimg,\n                                    className: \"preview-image\",\n                                    src: img_url + size + results.poster_path,\n                                    style: imageStyle,\n                                    width: imageStyle.with,\n                                    height: imageStyle.height\n                                }, void 0, false, {\n                                    fileName: \"I:\\\\Web Dev Bootcamp\\\\3. Full Stack Web Developer\\\\Task 11 NEXT II\\\\Task11\\\\Next-Movie-API\\\\pages\\\\movie\\\\[id].js\",\n                                    lineNumber: 57,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"I:\\\\Web Dev Bootcamp\\\\3. Full Stack Web Developer\\\\Task 11 NEXT II\\\\Task11\\\\Next-Movie-API\\\\pages\\\\movie\\\\[id].js\",\n                                lineNumber: 56,\n                                columnNumber: 12\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"description\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        children: results.tagline ? results.tagline : results.original_title\n                                    }, void 0, false, {\n                                        fileName: \"I:\\\\Web Dev Bootcamp\\\\3. Full Stack Web Developer\\\\Task 11 NEXT II\\\\Task11\\\\Next-Movie-API\\\\pages\\\\movie\\\\[id].js\",\n                                        lineNumber: 68,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: results.overview\n                                    }, void 0, false, {\n                                        fileName: \"I:\\\\Web Dev Bootcamp\\\\3. Full Stack Web Developer\\\\Task 11 NEXT II\\\\Task11\\\\Next-Movie-API\\\\pages\\\\movie\\\\[id].js\",\n                                        lineNumber: 69,\n                                        columnNumber: 16\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"I:\\\\Web Dev Bootcamp\\\\3. Full Stack Web Developer\\\\Task 11 NEXT II\\\\Task11\\\\Next-Movie-API\\\\pages\\\\movie\\\\[id].js\",\n                                        lineNumber: 70,\n                                        columnNumber: 16\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                                                children: \"Release Date:\"\n                                            }, void 0, false, {\n                                                fileName: \"I:\\\\Web Dev Bootcamp\\\\3. Full Stack Web Developer\\\\Task 11 NEXT II\\\\Task11\\\\Next-Movie-API\\\\pages\\\\movie\\\\[id].js\",\n                                                lineNumber: 71,\n                                                columnNumber: 19\n                                            }, this),\n                                            \" \\n               \".concat(results.release_date.replaceAll(\"-\", \" \").split(\" \")[2], \"\\n               \").concat(month[parseInt(results.release_date.replaceAll(\"-\", \" \").split(\" \")[1])], \"\\n               \").concat(results.release_date.replaceAll(\"-\", \" \").split(\" \")[0])\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"I:\\\\Web Dev Bootcamp\\\\3. Full Stack Web Developer\\\\Task 11 NEXT II\\\\Task11\\\\Next-Movie-API\\\\pages\\\\movie\\\\[id].js\",\n                                        lineNumber: 71,\n                                        columnNumber: 16\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                                                children: \"Status:\"\n                                            }, void 0, false, {\n                                                fileName: \"I:\\\\Web Dev Bootcamp\\\\3. Full Stack Web Developer\\\\Task 11 NEXT II\\\\Task11\\\\Next-Movie-API\\\\pages\\\\movie\\\\[id].js\",\n                                                lineNumber: 78,\n                                                columnNumber: 19\n                                            }, this),\n                                            \" \",\n                                            results.status\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"I:\\\\Web Dev Bootcamp\\\\3. Full Stack Web Developer\\\\Task 11 NEXT II\\\\Task11\\\\Next-Movie-API\\\\pages\\\\movie\\\\[id].js\",\n                                        lineNumber: 78,\n                                        columnNumber: 16\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                                                children: \"Genre:\"\n                                            }, void 0, false, {\n                                                fileName: \"I:\\\\Web Dev Bootcamp\\\\3. Full Stack Web Developer\\\\Task 11 NEXT II\\\\Task11\\\\Next-Movie-API\\\\pages\\\\movie\\\\[id].js\",\n                                                lineNumber: 79,\n                                                columnNumber: 19\n                                            }, this),\n                                            \" \",\n                                            results.genres.map(function(item) {\n                                                return \"\".concat(item.name, \", \");\n                                            }),\n                                            \" \"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"I:\\\\Web Dev Bootcamp\\\\3. Full Stack Web Developer\\\\Task 11 NEXT II\\\\Task11\\\\Next-Movie-API\\\\pages\\\\movie\\\\[id].js\",\n                                        lineNumber: 79,\n                                        columnNumber: 16\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                                                children: \"Runtime:\"\n                                            }, void 0, false, {\n                                                fileName: \"I:\\\\Web Dev Bootcamp\\\\3. Full Stack Web Developer\\\\Task 11 NEXT II\\\\Task11\\\\Next-Movie-API\\\\pages\\\\movie\\\\[id].js\",\n                                                lineNumber: 80,\n                                                columnNumber: 19\n                                            }, this),\n                                            \" \",\n                                            convertMsToTime(\"\".concat(results.runtime, \"00000\"))\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"I:\\\\Web Dev Bootcamp\\\\3. Full Stack Web Developer\\\\Task 11 NEXT II\\\\Task11\\\\Next-Movie-API\\\\pages\\\\movie\\\\[id].js\",\n                                        lineNumber: 80,\n                                        columnNumber: 16\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"I:\\\\Web Dev Bootcamp\\\\3. Full Stack Web Developer\\\\Task 11 NEXT II\\\\Task11\\\\Next-Movie-API\\\\pages\\\\movie\\\\[id].js\",\n                                lineNumber: 67,\n                                columnNumber: 12\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"iframe\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"iframe\", {\n                                    width: \"100%\",\n                                    height: \"100%\",\n                                    src: embed + results.videos.results[0].key\n                                }, void 0, false, {\n                                    fileName: \"I:\\\\Web Dev Bootcamp\\\\3. Full Stack Web Developer\\\\Task 11 NEXT II\\\\Task11\\\\Next-Movie-API\\\\pages\\\\movie\\\\[id].js\",\n                                    lineNumber: 86,\n                                    columnNumber: 19\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"I:\\\\Web Dev Bootcamp\\\\3. Full Stack Web Developer\\\\Task 11 NEXT II\\\\Task11\\\\Next-Movie-API\\\\pages\\\\movie\\\\[id].js\",\n                                lineNumber: 85,\n                                columnNumber: 12\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"I:\\\\Web Dev Bootcamp\\\\3. Full Stack Web Developer\\\\Task 11 NEXT II\\\\Task11\\\\Next-Movie-API\\\\pages\\\\movie\\\\[id].js\",\n                        lineNumber: 55,\n                        columnNumber: 8\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"I:\\\\Web Dev Bootcamp\\\\3. Full Stack Web Developer\\\\Task 11 NEXT II\\\\Task11\\\\Next-Movie-API\\\\pages\\\\movie\\\\[id].js\",\n                    lineNumber: 53,\n                    columnNumber: 10\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"I:\\\\Web Dev Bootcamp\\\\3. Full Stack Web Developer\\\\Task 11 NEXT II\\\\Task11\\\\Next-Movie-API\\\\pages\\\\movie\\\\[id].js\",\n            lineNumber: 51,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"I:\\\\Web Dev Bootcamp\\\\3. Full Stack Web Developer\\\\Task 11 NEXT II\\\\Task11\\\\Next-Movie-API\\\\pages\\\\movie\\\\[id].js\",\n        lineNumber: 50,\n        columnNumber: 11\n    }, this);\n}\n_c = Movie;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Movie);\nvar _c;\n$RefreshReg$(_c, \"Movie\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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REFBQyxRQUFNOzs7OztvREFBSTs0Q0FBQSxHQUFDOzRDQUFDckIsT0FBTyxDQUFDMkIsTUFBTSxDQUFDQyxHQUFHLENBQUNDLFNBQUFBLElBQUk7dURBQUUsRUFBQyxDQUFZLE1BQUUsQ0FBWkEsSUFBSSxDQUFDQyxJQUFJLEVBQUMsSUFBRSxDQUFDOzZDQUFBLENBQUM7NENBQUMsR0FBQzs7Ozs7OzRDQUFJO2tEQUNsRSw4REFBQ1osR0FBQzs7MERBQUMsOERBQUNHLEdBQUM7MERBQUMsVUFBUTs7Ozs7b0RBQUk7NENBQUEsR0FBQzs0Q0FBQzdCLGVBQWUsQ0FBQyxFQUFDLENBQWtCLE1BQUssQ0FBckJRLE9BQU8sQ0FBQytCLE9BQU8sRUFBQyxPQUFLLENBQUMsQ0FBQzs7Ozs7OzRDQUFLOzs7Ozs7b0NBSWpFOzBDQUNOLDhEQUFDNUIsS0FBRztnQ0FBQ0MsU0FBUyxFQUFDLFFBQVE7MENBQ2hCLDRFQUFDNEIsUUFBTTtvQ0FFUG5CLEtBQUssRUFBQyxNQUFNO29DQUNaRSxNQUFNLEVBQUMsTUFBTTtvQ0FDYkosR0FBRyxFQUFFN0IsS0FBSyxHQUFDa0IsT0FBTyxDQUFDaUMsTUFBTSxDQUFDakMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDa0MsR0FBRzs7Ozs7d0NBRS9COzs7OztvQ0FDTjs7Ozs7OzRCQUNSOzs7Ozt3QkFDRTs7Ozs7O2dCQUNIOzs7OztZQUVZO0NBRXZCO0FBckRRbkMsS0FBQUEsS0FBSzs7QUFzRGQsK0RBQWVBLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbW92aWUvW2lkXS5qcz82MTU2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHbG9iYWxMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9HbG9iYWxMYXlvdXQnXHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xyXG5cclxuLy8gVGhlIFtpZF0uanMgd2lsbCBnZW5lcmF0ZSB0aGUgY29udGVudCBvZiBhbnkgIHNlbGVjdGVkIG1vdmllLlxyXG5cclxuLy9TdG9yZSB0aGUgbW92aWUgc3RpbmcgaW50byB2YXJpYWJsZXNcclxubGV0IGJhc2VVUkwgICAgID0gXCJodHRwczovL2FwaS50aGVtb3ZpZWRiLm9yZy8zL21vdmllL1wiO1xyXG5sZXQgbGFuZyAgICAgICAgPSBcIiZsYW5ndWFnZT1lbi1VU1wiO1xyXG5sZXQgQVBJX0tFWSAgICAgPSBcIj9hcGlfa2V5PThjZjFlZTg4ZmNmZjA4Y2FjNDcwMmE1M2NlN2JjNDcwXCI7XHJcbmxldCBzaXplICAgICAgICA9IFwib3JpZ2luYWxcIjtcclxubGV0IGltZ191cmwgICAgID0gXCJodHRwczovL2ltYWdlLnRtZGIub3JnL3QvcC9cIlxyXG5sZXQgZW1iZWQgICAgICAgPSBgaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvYFxyXG5cclxuLy9Vc2UgdGhpcyBhcnJheSB0byByZXBsYXkgdGhlIG1vbnRoIGludGVnZXIgd2l0IGEgc3RyaW5nXHJcbmNvbnN0IG1vbnRoID0gW251bGwsXCJKYW51YXJ5XCIsXCJGZWJydWFyeVwiLFwiTWFyY2hcIixcIkFwcmlsXCIsXCJNYXlcIixcIkp1bmVcIixcIkp1bHlcIixcIkF1Z3VzdFwiLFwiU2VwdGVtYmVyXCIsXCJPY3RvYmVyXCIsXCJOb3ZlbWJlclwiLFwiRGVjZW1iZXJcIl07XHJcblxyXG4vL2NvbnZlcnQgbWlsbGlzZWNvbmRzIHRvIEhvdXJzLCBNaW51dGVzIGFuZCBzZWNvbmRzXHJcbmZ1bmN0aW9uIHBhZFRvMkRpZ2l0cyhudW0pIHtcclxuICAgcmV0dXJuIG51bS50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJyk7XHJcbn1cclxuXHJcbmNvbnN0IGltYWdlU3R5bGU9e1xyXG4gICBcIndpdGhcIjogXCIzODBcIixcclxuICAgXCJtaW4td2lkdGhcIjogXCIyNTBweFwiLFxyXG4gICBcImhlaWdodFwiOiBcIjUwMFwiLFxyXG59XHJcblxyXG5sZXQgbmltZyA9e1xyXG5taW5XaWR0aDogXCIzMjBweFwiLFxyXG5tYXhXaWR0aDogXCI1MDBweCAhaW1wb3J0YW50XCJcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGNvbnZlcnRNc1RvVGltZShtaWxsaXNlY29uZHMpIHtcclxuICAgbGV0IHNlY29uZHMgPSBNYXRoLmZsb29yKG1pbGxpc2Vjb25kcyAvIDEwMDApO1xyXG4gICBsZXQgbWludXRlcyA9IE1hdGguZmxvb3Ioc2Vjb25kcyAvIDYwKTtcclxuICAgbGV0IGhvdXJzID0gTWF0aC5mbG9vcihtaW51dGVzIC8gNjApO1xyXG4gICBzZWNvbmRzID0gc2Vjb25kcyAlIDYwO1xyXG4gICBtaW51dGVzID0gbWludXRlcyAlIDYwO1xyXG4gICAvL2hvdXJzID0gaG91cnMgJSAyNDtcclxuICAgcmV0dXJuIGAke3BhZFRvMkRpZ2l0cyhob3Vycyl9OiR7cGFkVG8yRGlnaXRzKG1pbnV0ZXMpfToke3BhZFRvMkRpZ2l0cyhcclxuIHNlY29uZHMsXHJcbil9YDtcclxufVxyXG5cclxuLy9SZW5kZXIgdGhlIG1vdmllIGRldGFpbHMgd2hlbiBzZWxlY3RlZFxyXG5mdW5jdGlvbiBNb3ZpZSh7cmVzdWx0c30pIHtcclxuICAgY29uc29sZS5sb2cocmVzdWx0cylcclxuXHJcbiAgIHJldHVybiA8R2xvYmFsTGF5b3V0PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ncHJldmlld19tb3ZpZV9vdXRlcl9jb250YWluZXInIHN0eWxlPXt7IGJhY2tncm91bmRJbWFnZTogYHVybCgke2ltZ191cmwrc2l6ZStyZXN1bHRzLmJhY2tkcm9wX3BhdGh9KWAgfX0+XHJcbiAgICAgIDxoMT57cmVzdWx0cy5vcmlnaW5hbF90aXRsZSB9PC9oMT5cclxuICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21vdmllX3ByZXZpZXcnID5cclxuICAgICAgICBcclxuICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpbm5lci1jb250YWluZXInPlxyXG4gICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdoZWFkZXJfaW1nJz5cclxuICAgICAgICAgICAgICA8SW1hZ2UgXHJcbiAgICAgICAgICAgICAgZGF0YS1zZXQ9e25pbWd9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPSdwcmV2aWV3LWltYWdlJ1xyXG4gICAgICAgICAgICAgIHNyYz17aW1nX3VybCtzaXplK3Jlc3VsdHMucG9zdGVyX3BhdGh9XHJcbiAgICAgICAgICAgICAgc3R5bGU9e2ltYWdlU3R5bGV9XHJcbiAgICAgICAgICAgICAgd2lkdGg9e2ltYWdlU3R5bGUud2l0aH1cclxuICAgICAgICAgICAgICBoZWlnaHQ9e2ltYWdlU3R5bGUuaGVpZ2h0fS8+XHJcbiAgICAgICAgICAgPC9kaXY+XHJcbiAgIFxyXG4gICBcclxuICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGVzY3JpcHRpb24nPlxyXG4gICAgICAgICAgICA8aDI+e3Jlc3VsdHMudGFnbGluZSA/IHJlc3VsdHMudGFnbGluZTpyZXN1bHRzLm9yaWdpbmFsX3RpdGxlfTwvaDI+XHJcbiAgICAgICAgICAgICAgIDxwPntyZXN1bHRzLm92ZXJ2aWV3fTwvcD5cclxuICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgPHA+PGI+UmVsZWFzZSBEYXRlOjwvYj5cclxuICAgICAgICAgICAgICAge2AgXHJcbiAgICAgICAgICAgICAgICR7cmVzdWx0cy5yZWxlYXNlX2RhdGUucmVwbGFjZUFsbChcIi1cIiwgXCIgXCIpLnNwbGl0KFwiIFwiKVsyXX1cclxuICAgICAgICAgICAgICAgJHttb250aFtwYXJzZUludChyZXN1bHRzLnJlbGVhc2VfZGF0ZS5yZXBsYWNlQWxsKFwiLVwiLCBcIiBcIikuc3BsaXQoXCIgXCIpWzFdKV19XHJcbiAgICAgICAgICAgICAgICR7cmVzdWx0cy5yZWxlYXNlX2RhdGUucmVwbGFjZUFsbChcIi1cIiwgXCIgXCIpLnNwbGl0KFwiIFwiKVswXX1gXHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICA8cD48Yj5TdGF0dXM6PC9iPiB7cmVzdWx0cy5zdGF0dXN9PC9wPlxyXG4gICAgICAgICAgICAgICA8cD48Yj5HZW5yZTo8L2I+IHtyZXN1bHRzLmdlbnJlcy5tYXAoaXRlbT0+YCR7aXRlbS5uYW1lfSwgYCl9IDwvcD5cclxuICAgICAgICAgICAgICAgPHA+PGI+UnVudGltZTo8L2I+IHtjb252ZXJ0TXNUb1RpbWUoYCR7cmVzdWx0cy5ydW50aW1lfTAwMDAwYCl9PC9wPlxyXG4gICBcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpZnJhbWUnPlxyXG4gICAgICAgICAgICAgICAgICA8aWZyYW1lXHJcbiAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiIFxyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxMDAlXCIgXHJcbiAgICAgICAgICAgICAgICAgIHNyYz17ZW1iZWQrcmVzdWx0cy52aWRlb3MucmVzdWx0c1swXS5rZXl9ID5cclxuICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIDwvaWZyYW1lPlxyXG4gICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgIDwvZGl2PlxyXG4gICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgICAgIFxyXG4gICAgICAgICA8L0dsb2JhbExheW91dD5cclxuXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgTW92aWVcclxuXHJcbi8vU2luY2Ugd2UgZG9uJ3Qga25vdyB3aGF0IHRoaSBpZCB3aWxsIGJlIHdlJ2xsIHVzZSBzb21ldGhpbmcgY2FsbGVkIGEgd2lsZGNhcmQgdG8gcmVuZGVyIHRoZSBwYWdlIG9mIHRoZSBzZWxlY3RlZCBtb3ZpZS5cclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkgey8vY29udGV4dCBob2xkcyB0aGUgZGF0YSB0aGF0cyBwYXNzZWQgd2l0aCB0aGUgdXJsXHJcbiAgIGNvbnN0IHsgaWQgfSA9IGNvbnRleHQucXVlcnkvL3RoaXMgd2lsbCBhbHNvIGhvbGQgdGhlIGlkIG9mIHRoZSBtb3ZpZXMgc2VsZWN0ZWQgb24gdGhlIGhvbWUgcGFnZS5cclxuXHJcbiAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBmZXRjaChgJHtiYXNlVVJMfSR7aWR9JHtBUElfS0VZfSR7bGFuZ30mYXBwZW5kX3RvX3Jlc3BvbnNlPXZpZGVvcywgaW1hZ2VzYClcclxuICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpO1xyXG5cclxuICAgcmV0dXJue3Byb3BzOiB7cmVzdWx0czpyZXF1ZXN0fX1cclxuICAgXHJcblxyXG4gICAvL2NvbnNvbGUudGFibGUodXJsKVxyXG4gIFxyXG4gfVxyXG4gXHJcbiJdLCJuYW1lcyI6WyJHbG9iYWxMYXlvdXQiLCJJbWFnZSIsInNpemUiLCJpbWdfdXJsIiwiZW1iZWQiLCJtb250aCIsInBhZFRvMkRpZ2l0cyIsIm51bSIsInRvU3RyaW5nIiwicGFkU3RhcnQiLCJpbWFnZVN0eWxlIiwibmltZyIsIm1pbldpZHRoIiwibWF4V2lkdGgiLCJjb252ZXJ0TXNUb1RpbWUiLCJtaWxsaXNlY29uZHMiLCJzZWNvbmRzIiwiTWF0aCIsImZsb29yIiwibWludXRlcyIsImhvdXJzIiwiTW92aWUiLCJyZXN1bHRzIiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsInN0eWxlIiwiYmFja2dyb3VuZEltYWdlIiwiYmFja2Ryb3BfcGF0aCIsImgxIiwib3JpZ2luYWxfdGl0bGUiLCJkYXRhLXNldCIsInNyYyIsInBvc3Rlcl9wYXRoIiwid2lkdGgiLCJ3aXRoIiwiaGVpZ2h0IiwiaDIiLCJ0YWdsaW5lIiwicCIsIm92ZXJ2aWV3IiwiYnIiLCJiIiwicmVsZWFzZV9kYXRlIiwicmVwbGFjZUFsbCIsInNwbGl0IiwicGFyc2VJbnQiLCJzdGF0dXMiLCJnZW5yZXMiLCJtYXAiLCJpdGVtIiwibmFtZSIsInJ1bnRpbWUiLCJpZnJhbWUiLCJ2aWRlb3MiLCJrZXkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/movie/[id].js\n"));

/***/ })

});