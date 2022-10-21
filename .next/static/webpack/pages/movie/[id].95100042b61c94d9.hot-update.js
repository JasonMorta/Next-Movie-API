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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_GlobalLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/GlobalLayout */ \"./components/GlobalLayout.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar size = \"original\";\nvar img_url = \"https://image.tmdb.org/t/p/\";\nvar embed = \"https://www.youtube.com/embed/\";\n//Use this array to replay the month integer wit a string\nvar month = [\n    null,\n    \"January\",\n    \"February\",\n    \"March\",\n    \"April\",\n    \"May\",\n    \"June\",\n    \"July\",\n    \"August\",\n    \"September\",\n    \"October\",\n    \"November\",\n    \"December\"\n];\n//convert milliseconds to Hours, Minutes and seconds\nfunction padTo2Digits(num) {\n    return num.toString().padStart(2, \"0\");\n}\nvar imageStyle = {\n    \"with\": \"420\",\n    \"min-width\": \"270px\",\n    \"height\": \"100%\"\n};\nvar nimg = {\n    minWidth: \"320px\",\n    maxWidth: \"500px !important\"\n};\nfunction convertMsToTime(milliseconds) {\n    var seconds = Math.floor(milliseconds / 1000);\n    var minutes = Math.floor(seconds / 60);\n    var hours = Math.floor(minutes / 60);\n    seconds = seconds % 60;\n    minutes = minutes % 60;\n    //hours = hours % 24;\n    return \"\".concat(padTo2Digits(hours), \":\").concat(padTo2Digits(minutes), \":\").concat(padTo2Digits(seconds));\n}\n//Render the movie details when selected\nfunction Movie(param) {\n    var results = param.results;\n    console.log(results);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_GlobalLayout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"preview_movie_outer_container\",\n            style: {\n                backgroundImage: \"url(\".concat(img_url + size + results.backdrop_path, \")\")\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: results.original_title\n                }, void 0, false, {\n                    fileName: \"I:\\\\Web Dev Bootcamp\\\\3. Full Stack Web Developer\\\\Task 11 NEXT II\\\\Task11\\\\Next-Movie-API\\\\pages\\\\movie\\\\[id].js\",\n                    lineNumber: 52,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"movie_preview\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"inner-container\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"header_img\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    \"data-set\": nimg,\n                                    className: \"preview-image\",\n                                    src: img_url + size + results.poster_path,\n                                    style: imageStyle,\n                                    width: imageStyle.with,\n                                    height: imageStyle.height\n                                }, void 0, false, {\n                                    fileName: \"I:\\\\Web Dev Bootcamp\\\\3. Full Stack Web Developer\\\\Task 11 NEXT II\\\\Task11\\\\Next-Movie-API\\\\pages\\\\movie\\\\[id].js\",\n                                    lineNumber: 57,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"I:\\\\Web Dev Bootcamp\\\\3. Full Stack Web Developer\\\\Task 11 NEXT II\\\\Task11\\\\Next-Movie-API\\\\pages\\\\movie\\\\[id].js\",\n                                lineNumber: 56,\n                                columnNumber: 12\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"description\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        children: results.tagline ? results.tagline : results.original_title\n                                    }, void 0, false, {\n                                        fileName: \"I:\\\\Web Dev Bootcamp\\\\3. Full Stack Web Developer\\\\Task 11 NEXT II\\\\Task11\\\\Next-Movie-API\\\\pages\\\\movie\\\\[id].js\",\n                                        lineNumber: 68,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: results.overview\n                                    }, void 0, false, {\n                                        fileName: \"I:\\\\Web Dev Bootcamp\\\\3. Full Stack Web Developer\\\\Task 11 NEXT II\\\\Task11\\\\Next-Movie-API\\\\pages\\\\movie\\\\[id].js\",\n                                        lineNumber: 69,\n                                        columnNumber: 16\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"I:\\\\Web Dev Bootcamp\\\\3. Full Stack Web Developer\\\\Task 11 NEXT II\\\\Task11\\\\Next-Movie-API\\\\pages\\\\movie\\\\[id].js\",\n                                        lineNumber: 70,\n                                        columnNumber: 16\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                                                children: \"Release Date:\"\n                                            }, void 0, false, {\n                                                fileName: \"I:\\\\Web Dev Bootcamp\\\\3. Full Stack Web Developer\\\\Task 11 NEXT II\\\\Task11\\\\Next-Movie-API\\\\pages\\\\movie\\\\[id].js\",\n                                                lineNumber: 71,\n                                                columnNumber: 19\n                                            }, this),\n                                            \" \\n               \".concat(results.release_date.replaceAll(\"-\", \" \").split(\" \")[2], \"\\n               \").concat(month[parseInt(results.release_date.replaceAll(\"-\", \" \").split(\" \")[1])], \"\\n               \").concat(results.release_date.replaceAll(\"-\", \" \").split(\" \")[0])\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"I:\\\\Web Dev Bootcamp\\\\3. Full Stack Web Developer\\\\Task 11 NEXT II\\\\Task11\\\\Next-Movie-API\\\\pages\\\\movie\\\\[id].js\",\n                                        lineNumber: 71,\n                                        columnNumber: 16\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                                                children: \"Status:\"\n                                            }, void 0, false, {\n                                                fileName: \"I:\\\\Web Dev Bootcamp\\\\3. Full Stack Web Developer\\\\Task 11 NEXT II\\\\Task11\\\\Next-Movie-API\\\\pages\\\\movie\\\\[id].js\",\n                                                lineNumber: 78,\n                                                columnNumber: 19\n                                            }, this),\n                                            \" \",\n                                            results.status\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"I:\\\\Web Dev Bootcamp\\\\3. Full Stack Web Developer\\\\Task 11 NEXT II\\\\Task11\\\\Next-Movie-API\\\\pages\\\\movie\\\\[id].js\",\n                                        lineNumber: 78,\n                                        columnNumber: 16\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                                                children: \"Genre:\"\n                                            }, void 0, false, {\n                                                fileName: \"I:\\\\Web Dev Bootcamp\\\\3. Full Stack Web Developer\\\\Task 11 NEXT II\\\\Task11\\\\Next-Movie-API\\\\pages\\\\movie\\\\[id].js\",\n                                                lineNumber: 79,\n                                                columnNumber: 19\n                                            }, this),\n                                            \" \",\n                                            results.genres.map(function(item) {\n                                                return \"\".concat(item.name, \", \");\n                                            }),\n                                            \" \"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"I:\\\\Web Dev Bootcamp\\\\3. Full Stack Web Developer\\\\Task 11 NEXT II\\\\Task11\\\\Next-Movie-API\\\\pages\\\\movie\\\\[id].js\",\n                                        lineNumber: 79,\n                                        columnNumber: 16\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                                                children: \"Runtime:\"\n                                            }, void 0, false, {\n                                                fileName: \"I:\\\\Web Dev Bootcamp\\\\3. Full Stack Web Developer\\\\Task 11 NEXT II\\\\Task11\\\\Next-Movie-API\\\\pages\\\\movie\\\\[id].js\",\n                                                lineNumber: 80,\n                                                columnNumber: 19\n                                            }, this),\n                                            \" \",\n                                            convertMsToTime(\"\".concat(results.runtime, \"00000\"))\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"I:\\\\Web Dev Bootcamp\\\\3. Full Stack Web Developer\\\\Task 11 NEXT II\\\\Task11\\\\Next-Movie-API\\\\pages\\\\movie\\\\[id].js\",\n                                        lineNumber: 80,\n                                        columnNumber: 16\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"I:\\\\Web Dev Bootcamp\\\\3. Full Stack Web Developer\\\\Task 11 NEXT II\\\\Task11\\\\Next-Movie-API\\\\pages\\\\movie\\\\[id].js\",\n                                lineNumber: 67,\n                                columnNumber: 12\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"iframe\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"iframe\", {\n                                    width: \"100%\",\n                                    height: \"100%\",\n                                    src: embed + results.videos.results[0].key\n                                }, void 0, false, {\n                                    fileName: \"I:\\\\Web Dev Bootcamp\\\\3. Full Stack Web Developer\\\\Task 11 NEXT II\\\\Task11\\\\Next-Movie-API\\\\pages\\\\movie\\\\[id].js\",\n                                    lineNumber: 86,\n                                    columnNumber: 19\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"I:\\\\Web Dev Bootcamp\\\\3. Full Stack Web Developer\\\\Task 11 NEXT II\\\\Task11\\\\Next-Movie-API\\\\pages\\\\movie\\\\[id].js\",\n                                lineNumber: 85,\n                                columnNumber: 12\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"I:\\\\Web Dev Bootcamp\\\\3. Full Stack Web Developer\\\\Task 11 NEXT II\\\\Task11\\\\Next-Movie-API\\\\pages\\\\movie\\\\[id].js\",\n                        lineNumber: 55,\n                        columnNumber: 8\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"I:\\\\Web Dev Bootcamp\\\\3. Full Stack Web Developer\\\\Task 11 NEXT II\\\\Task11\\\\Next-Movie-API\\\\pages\\\\movie\\\\[id].js\",\n                    lineNumber: 53,\n                    columnNumber: 10\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"I:\\\\Web Dev Bootcamp\\\\3. Full Stack Web Developer\\\\Task 11 NEXT II\\\\Task11\\\\Next-Movie-API\\\\pages\\\\movie\\\\[id].js\",\n            lineNumber: 51,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"I:\\\\Web Dev Bootcamp\\\\3. Full Stack Web Developer\\\\Task 11 NEXT II\\\\Task11\\\\Next-Movie-API\\\\pages\\\\movie\\\\[id].js\",\n        lineNumber: 50,\n        columnNumber: 11\n    }, this);\n}\n_c = Movie;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Movie);\nvar _c;\n$RefreshReg$(_c, \"Movie\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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REFBQyxRQUFNOzs7OztvREFBSTs0Q0FBQSxHQUFDOzRDQUFDckIsT0FBTyxDQUFDMkIsTUFBTSxDQUFDQyxHQUFHLENBQUNDLFNBQUFBLElBQUk7dURBQUUsRUFBQyxDQUFZLE1BQUUsQ0FBWkEsSUFBSSxDQUFDQyxJQUFJLEVBQUMsSUFBRSxDQUFDOzZDQUFBLENBQUM7NENBQUMsR0FBQzs7Ozs7OzRDQUFJO2tEQUNsRSw4REFBQ1osR0FBQzs7MERBQUMsOERBQUNHLEdBQUM7MERBQUMsVUFBUTs7Ozs7b0RBQUk7NENBQUEsR0FBQzs0Q0FBQzdCLGVBQWUsQ0FBQyxFQUFDLENBQWtCLE1BQUssQ0FBckJRLE9BQU8sQ0FBQytCLE9BQU8sRUFBQyxPQUFLLENBQUMsQ0FBQzs7Ozs7OzRDQUFLOzs7Ozs7b0NBSWpFOzBDQUNOLDhEQUFDNUIsS0FBRztnQ0FBQ0MsU0FBUyxFQUFDLFFBQVE7MENBQ2hCLDRFQUFDNEIsUUFBTTtvQ0FFUG5CLEtBQUssRUFBQyxNQUFNO29DQUNaRSxNQUFNLEVBQUMsTUFBTTtvQ0FDYkosR0FBRyxFQUFFN0IsS0FBSyxHQUFDa0IsT0FBTyxDQUFDaUMsTUFBTSxDQUFDakMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDa0MsR0FBRzs7Ozs7d0NBRS9COzs7OztvQ0FDTjs7Ozs7OzRCQUNSOzs7Ozt3QkFDRTs7Ozs7O2dCQUNIOzs7OztZQUVZO0NBRXZCO0FBckRRbkMsS0FBQUEsS0FBSzs7QUFzRGQsK0RBQWVBLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbW92aWUvW2lkXS5qcz82MTU2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHbG9iYWxMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9HbG9iYWxMYXlvdXQnXHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xyXG5cclxuLy8gVGhlIFtpZF0uanMgd2lsbCBnZW5lcmF0ZSB0aGUgY29udGVudCBvZiBhbnkgIHNlbGVjdGVkIG1vdmllLlxyXG5cclxuLy9TdG9yZSB0aGUgbW92aWUgc3RpbmcgaW50byB2YXJpYWJsZXNcclxubGV0IGJhc2VVUkwgICAgID0gXCJodHRwczovL2FwaS50aGVtb3ZpZWRiLm9yZy8zL21vdmllL1wiO1xyXG5sZXQgbGFuZyAgICAgICAgPSBcIiZsYW5ndWFnZT1lbi1VU1wiO1xyXG5sZXQgQVBJX0tFWSAgICAgPSBcIj9hcGlfa2V5PThjZjFlZTg4ZmNmZjA4Y2FjNDcwMmE1M2NlN2JjNDcwXCI7XHJcbmxldCBzaXplICAgICAgICA9IFwib3JpZ2luYWxcIjtcclxubGV0IGltZ191cmwgICAgID0gXCJodHRwczovL2ltYWdlLnRtZGIub3JnL3QvcC9cIlxyXG5sZXQgZW1iZWQgICAgICAgPSBgaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvYFxyXG5cclxuLy9Vc2UgdGhpcyBhcnJheSB0byByZXBsYXkgdGhlIG1vbnRoIGludGVnZXIgd2l0IGEgc3RyaW5nXHJcbmNvbnN0IG1vbnRoID0gW251bGwsXCJKYW51YXJ5XCIsXCJGZWJydWFyeVwiLFwiTWFyY2hcIixcIkFwcmlsXCIsXCJNYXlcIixcIkp1bmVcIixcIkp1bHlcIixcIkF1Z3VzdFwiLFwiU2VwdGVtYmVyXCIsXCJPY3RvYmVyXCIsXCJOb3ZlbWJlclwiLFwiRGVjZW1iZXJcIl07XHJcblxyXG4vL2NvbnZlcnQgbWlsbGlzZWNvbmRzIHRvIEhvdXJzLCBNaW51dGVzIGFuZCBzZWNvbmRzXHJcbmZ1bmN0aW9uIHBhZFRvMkRpZ2l0cyhudW0pIHtcclxuICAgcmV0dXJuIG51bS50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJyk7XHJcbn1cclxuXHJcbmNvbnN0IGltYWdlU3R5bGU9e1xyXG4gICBcIndpdGhcIjogXCI0MjBcIixcclxuICAgXCJtaW4td2lkdGhcIjogXCIyNzBweFwiLFxyXG4gICBcImhlaWdodFwiOiBcIjEwMCVcIixcclxufVxyXG5cclxubGV0IG5pbWcgPXtcclxubWluV2lkdGg6IFwiMzIwcHhcIixcclxubWF4V2lkdGg6IFwiNTAwcHggIWltcG9ydGFudFwiXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBjb252ZXJ0TXNUb1RpbWUobWlsbGlzZWNvbmRzKSB7XHJcbiAgIGxldCBzZWNvbmRzID0gTWF0aC5mbG9vcihtaWxsaXNlY29uZHMgLyAxMDAwKTtcclxuICAgbGV0IG1pbnV0ZXMgPSBNYXRoLmZsb29yKHNlY29uZHMgLyA2MCk7XHJcbiAgIGxldCBob3VycyA9IE1hdGguZmxvb3IobWludXRlcyAvIDYwKTtcclxuICAgc2Vjb25kcyA9IHNlY29uZHMgJSA2MDtcclxuICAgbWludXRlcyA9IG1pbnV0ZXMgJSA2MDtcclxuICAgLy9ob3VycyA9IGhvdXJzICUgMjQ7XHJcbiAgIHJldHVybiBgJHtwYWRUbzJEaWdpdHMoaG91cnMpfToke3BhZFRvMkRpZ2l0cyhtaW51dGVzKX06JHtwYWRUbzJEaWdpdHMoXHJcbiBzZWNvbmRzLFxyXG4pfWA7XHJcbn1cclxuXHJcbi8vUmVuZGVyIHRoZSBtb3ZpZSBkZXRhaWxzIHdoZW4gc2VsZWN0ZWRcclxuZnVuY3Rpb24gTW92aWUoe3Jlc3VsdHN9KSB7XHJcbiAgIGNvbnNvbGUubG9nKHJlc3VsdHMpXHJcblxyXG4gICByZXR1cm4gPEdsb2JhbExheW91dD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J3ByZXZpZXdfbW92aWVfb3V0ZXJfY29udGFpbmVyJyBzdHlsZT17eyBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtpbWdfdXJsK3NpemUrcmVzdWx0cy5iYWNrZHJvcF9wYXRofSlgIH19PlxyXG4gICAgICA8aDE+e3Jlc3VsdHMub3JpZ2luYWxfdGl0bGUgfTwvaDE+XHJcbiAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtb3ZpZV9wcmV2aWV3JyA+XHJcbiAgICAgICAgXHJcbiAgICAgICA8ZGl2IGNsYXNzTmFtZT0naW5uZXItY29udGFpbmVyJz5cclxuICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naGVhZGVyX2ltZyc+XHJcbiAgICAgICAgICAgICAgPEltYWdlIFxyXG4gICAgICAgICAgICAgIGRhdGEtc2V0PXtuaW1nfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT0ncHJldmlldy1pbWFnZSdcclxuICAgICAgICAgICAgICBzcmM9e2ltZ191cmwrc2l6ZStyZXN1bHRzLnBvc3Rlcl9wYXRofVxyXG4gICAgICAgICAgICAgIHN0eWxlPXtpbWFnZVN0eWxlfVxyXG4gICAgICAgICAgICAgIHdpZHRoPXtpbWFnZVN0eWxlLndpdGh9XHJcbiAgICAgICAgICAgICAgaGVpZ2h0PXtpbWFnZVN0eWxlLmhlaWdodH0vPlxyXG4gICAgICAgICAgIDwvZGl2PlxyXG4gICBcclxuICAgXHJcbiAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Rlc2NyaXB0aW9uJz5cclxuICAgICAgICAgICAgPGgyPntyZXN1bHRzLnRhZ2xpbmUgPyByZXN1bHRzLnRhZ2xpbmU6cmVzdWx0cy5vcmlnaW5hbF90aXRsZX08L2gyPlxyXG4gICAgICAgICAgICAgICA8cD57cmVzdWx0cy5vdmVydmlld308L3A+XHJcbiAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgIDxwPjxiPlJlbGVhc2UgRGF0ZTo8L2I+XHJcbiAgICAgICAgICAgICAgIHtgIFxyXG4gICAgICAgICAgICAgICAke3Jlc3VsdHMucmVsZWFzZV9kYXRlLnJlcGxhY2VBbGwoXCItXCIsIFwiIFwiKS5zcGxpdChcIiBcIilbMl19XHJcbiAgICAgICAgICAgICAgICR7bW9udGhbcGFyc2VJbnQocmVzdWx0cy5yZWxlYXNlX2RhdGUucmVwbGFjZUFsbChcIi1cIiwgXCIgXCIpLnNwbGl0KFwiIFwiKVsxXSldfVxyXG4gICAgICAgICAgICAgICAke3Jlc3VsdHMucmVsZWFzZV9kYXRlLnJlcGxhY2VBbGwoXCItXCIsIFwiIFwiKS5zcGxpdChcIiBcIilbMF19YFxyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgPHA+PGI+U3RhdHVzOjwvYj4ge3Jlc3VsdHMuc3RhdHVzfTwvcD5cclxuICAgICAgICAgICAgICAgPHA+PGI+R2VucmU6PC9iPiB7cmVzdWx0cy5nZW5yZXMubWFwKGl0ZW09PmAke2l0ZW0ubmFtZX0sIGApfSA8L3A+XHJcbiAgICAgICAgICAgICAgIDxwPjxiPlJ1bnRpbWU6PC9iPiB7Y29udmVydE1zVG9UaW1lKGAke3Jlc3VsdHMucnVudGltZX0wMDAwMGApfTwvcD5cclxuICAgXHJcbiAgICAgICAgICBcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naWZyYW1lJz5cclxuICAgICAgICAgICAgICAgICAgPGlmcmFtZVxyXG4gICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICB3aWR0aD1cIjEwMCVcIiBcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMTAwJVwiIFxyXG4gICAgICAgICAgICAgICAgICBzcmM9e2VtYmVkK3Jlc3VsdHMudmlkZW9zLnJlc3VsdHNbMF0ua2V5fSA+XHJcbiAgICAgIFxyXG4gICAgICAgICAgICAgICAgICA8L2lmcmFtZT5cclxuICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICA8L2Rpdj5cclxuICAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICAgICBcclxuICAgICAgICAgPC9HbG9iYWxMYXlvdXQ+XHJcblxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IE1vdmllXHJcblxyXG4vL1NpbmNlIHdlIGRvbid0IGtub3cgd2hhdCB0aGkgaWQgd2lsbCBiZSB3ZSdsbCB1c2Ugc29tZXRoaW5nIGNhbGxlZCBhIHdpbGRjYXJkIHRvIHJlbmRlciB0aGUgcGFnZSBvZiB0aGUgc2VsZWN0ZWQgbW92aWUuXHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHsvL2NvbnRleHQgaG9sZHMgdGhlIGRhdGEgdGhhdHMgcGFzc2VkIHdpdGggdGhlIHVybFxyXG4gICBjb25zdCB7IGlkIH0gPSBjb250ZXh0LnF1ZXJ5Ly90aGlzIHdpbGwgYWxzbyBob2xkIHRoZSBpZCBvZiB0aGUgbW92aWVzIHNlbGVjdGVkIG9uIHRoZSBob21lIHBhZ2UuXHJcblxyXG4gICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgZmV0Y2goYCR7YmFzZVVSTH0ke2lkfSR7QVBJX0tFWX0ke2xhbmd9JmFwcGVuZF90b19yZXNwb25zZT12aWRlb3MsIGltYWdlc2ApXHJcbiAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKTtcclxuXHJcbiAgIHJldHVybntwcm9wczoge3Jlc3VsdHM6cmVxdWVzdH19XHJcbiAgIFxyXG5cclxuICAgLy9jb25zb2xlLnRhYmxlKHVybClcclxuICBcclxuIH1cclxuIFxyXG4iXSwibmFtZXMiOlsiR2xvYmFsTGF5b3V0IiwiSW1hZ2UiLCJzaXplIiwiaW1nX3VybCIsImVtYmVkIiwibW9udGgiLCJwYWRUbzJEaWdpdHMiLCJudW0iLCJ0b1N0cmluZyIsInBhZFN0YXJ0IiwiaW1hZ2VTdHlsZSIsIm5pbWciLCJtaW5XaWR0aCIsIm1heFdpZHRoIiwiY29udmVydE1zVG9UaW1lIiwibWlsbGlzZWNvbmRzIiwic2Vjb25kcyIsIk1hdGgiLCJmbG9vciIsIm1pbnV0ZXMiLCJob3VycyIsIk1vdmllIiwicmVzdWx0cyIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJzdHlsZSIsImJhY2tncm91bmRJbWFnZSIsImJhY2tkcm9wX3BhdGgiLCJoMSIsIm9yaWdpbmFsX3RpdGxlIiwiZGF0YS1zZXQiLCJzcmMiLCJwb3N0ZXJfcGF0aCIsIndpZHRoIiwid2l0aCIsImhlaWdodCIsImgyIiwidGFnbGluZSIsInAiLCJvdmVydmlldyIsImJyIiwiYiIsInJlbGVhc2VfZGF0ZSIsInJlcGxhY2VBbGwiLCJzcGxpdCIsInBhcnNlSW50Iiwic3RhdHVzIiwiZ2VucmVzIiwibWFwIiwiaXRlbSIsIm5hbWUiLCJydW50aW1lIiwiaWZyYW1lIiwidmlkZW9zIiwia2V5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/movie/[id].js\n"));

/***/ })

});