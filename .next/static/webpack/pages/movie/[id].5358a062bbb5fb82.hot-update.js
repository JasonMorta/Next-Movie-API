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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_GlobalLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/GlobalLayout */ \"./components/GlobalLayout.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar size = \"original\";\nvar img_url = \"https://image.tmdb.org/t/p/\";\nvar embed = \"https://www.youtube.com/embed/\";\n//Use this array to replay the month integer wit a string\nvar month = [\n    null,\n    \"January\",\n    \"February\",\n    \"March\",\n    \"April\",\n    \"May\",\n    \"June\",\n    \"July\",\n    \"August\",\n    \"September\",\n    \"October\",\n    \"November\",\n    \"December\"\n];\n//convert milliseconds to Hours, Minutes and seconds\nfunction padTo2Digits(num) {\n    return num.toString().padStart(2, \"0\");\n}\nvar imageStyle = {\n    with: 400,\n    height: 500\n};\nfunction convertMsToTime(milliseconds) {\n    var seconds = Math.floor(milliseconds / 1000);\n    var minutes = Math.floor(seconds / 60);\n    var hours = Math.floor(minutes / 60);\n    seconds = seconds % 60;\n    minutes = minutes % 60;\n    //hours = hours % 24;\n    return \"\".concat(padTo2Digits(hours), \":\").concat(padTo2Digits(minutes), \":\").concat(padTo2Digits(seconds));\n}\n//Render the movie details when selected\nfunction Movie(param) {\n    var results = param.results;\n    //console.log(results)\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_GlobalLayout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"preview_movie_outer_container\",\n            style: {\n                backgroundImage: \"url(\".concat(img_url + size + results.backdrop_path, \")\")\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: results.original_title\n                }, void 0, false, {\n                    fileName: \"I:\\\\Web Dev Bootcamp\\\\3. Full Stack Web Developer\\\\Task 11 NEXT II\\\\Task11\\\\Next-Movie-API\\\\pages\\\\movie\\\\[id].js\",\n                    lineNumber: 46,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"movie_preview\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"inner-container\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"header_img\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    className: \"preview-image\",\n                                    src: img_url + size + results.poster_path,\n                                    style: imageStyle,\n                                    width: imageStyle.with,\n                                    height: imageStyle.height\n                                }, void 0, false, {\n                                    fileName: \"I:\\\\Web Dev Bootcamp\\\\3. Full Stack Web Developer\\\\Task 11 NEXT II\\\\Task11\\\\Next-Movie-API\\\\pages\\\\movie\\\\[id].js\",\n                                    lineNumber: 51,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"I:\\\\Web Dev Bootcamp\\\\3. Full Stack Web Developer\\\\Task 11 NEXT II\\\\Task11\\\\Next-Movie-API\\\\pages\\\\movie\\\\[id].js\",\n                                lineNumber: 50,\n                                columnNumber: 12\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"description\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        children: results.tagline ? results.tagline : results.original_title\n                                    }, void 0, false, {\n                                        fileName: \"I:\\\\Web Dev Bootcamp\\\\3. Full Stack Web Developer\\\\Task 11 NEXT II\\\\Task11\\\\Next-Movie-API\\\\pages\\\\movie\\\\[id].js\",\n                                        lineNumber: 61,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: results.overview\n                                    }, void 0, false, {\n                                        fileName: \"I:\\\\Web Dev Bootcamp\\\\3. Full Stack Web Developer\\\\Task 11 NEXT II\\\\Task11\\\\Next-Movie-API\\\\pages\\\\movie\\\\[id].js\",\n                                        lineNumber: 62,\n                                        columnNumber: 16\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"I:\\\\Web Dev Bootcamp\\\\3. Full Stack Web Developer\\\\Task 11 NEXT II\\\\Task11\\\\Next-Movie-API\\\\pages\\\\movie\\\\[id].js\",\n                                        lineNumber: 63,\n                                        columnNumber: 16\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                                                children: \"Release Date:\"\n                                            }, void 0, false, {\n                                                fileName: \"I:\\\\Web Dev Bootcamp\\\\3. Full Stack Web Developer\\\\Task 11 NEXT II\\\\Task11\\\\Next-Movie-API\\\\pages\\\\movie\\\\[id].js\",\n                                                lineNumber: 64,\n                                                columnNumber: 19\n                                            }, this),\n                                            \" \\n               \".concat(results.release_date.replaceAll(\"-\", \" \").split(\" \")[2], \"\\n               \").concat(month[parseInt(results.release_date.replaceAll(\"-\", \" \").split(\" \")[1])], \"\\n               \").concat(results.release_date.replaceAll(\"-\", \" \").split(\" \")[0])\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"I:\\\\Web Dev Bootcamp\\\\3. Full Stack Web Developer\\\\Task 11 NEXT II\\\\Task11\\\\Next-Movie-API\\\\pages\\\\movie\\\\[id].js\",\n                                        lineNumber: 64,\n                                        columnNumber: 16\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                                                children: \"Status:\"\n                                            }, void 0, false, {\n                                                fileName: \"I:\\\\Web Dev Bootcamp\\\\3. Full Stack Web Developer\\\\Task 11 NEXT II\\\\Task11\\\\Next-Movie-API\\\\pages\\\\movie\\\\[id].js\",\n                                                lineNumber: 71,\n                                                columnNumber: 19\n                                            }, this),\n                                            \" \",\n                                            results.status\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"I:\\\\Web Dev Bootcamp\\\\3. Full Stack Web Developer\\\\Task 11 NEXT II\\\\Task11\\\\Next-Movie-API\\\\pages\\\\movie\\\\[id].js\",\n                                        lineNumber: 71,\n                                        columnNumber: 16\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                                                children: \"Genre:\"\n                                            }, void 0, false, {\n                                                fileName: \"I:\\\\Web Dev Bootcamp\\\\3. Full Stack Web Developer\\\\Task 11 NEXT II\\\\Task11\\\\Next-Movie-API\\\\pages\\\\movie\\\\[id].js\",\n                                                lineNumber: 72,\n                                                columnNumber: 19\n                                            }, this),\n                                            \" \",\n                                            results.genres.map(function(item) {\n                                                return \"\".concat(item.name, \", \");\n                                            }),\n                                            \" \"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"I:\\\\Web Dev Bootcamp\\\\3. Full Stack Web Developer\\\\Task 11 NEXT II\\\\Task11\\\\Next-Movie-API\\\\pages\\\\movie\\\\[id].js\",\n                                        lineNumber: 72,\n                                        columnNumber: 16\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                                                children: \"Runtime:\"\n                                            }, void 0, false, {\n                                                fileName: \"I:\\\\Web Dev Bootcamp\\\\3. Full Stack Web Developer\\\\Task 11 NEXT II\\\\Task11\\\\Next-Movie-API\\\\pages\\\\movie\\\\[id].js\",\n                                                lineNumber: 73,\n                                                columnNumber: 19\n                                            }, this),\n                                            \" \",\n                                            convertMsToTime(\"\".concat(results.runtime, \"00000\"))\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"I:\\\\Web Dev Bootcamp\\\\3. Full Stack Web Developer\\\\Task 11 NEXT II\\\\Task11\\\\Next-Movie-API\\\\pages\\\\movie\\\\[id].js\",\n                                        lineNumber: 73,\n                                        columnNumber: 16\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"I:\\\\Web Dev Bootcamp\\\\3. Full Stack Web Developer\\\\Task 11 NEXT II\\\\Task11\\\\Next-Movie-API\\\\pages\\\\movie\\\\[id].js\",\n                                lineNumber: 60,\n                                columnNumber: 12\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"iframe\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"iframe\", {\n                                    width: \"100%\",\n                                    height: \"100%\",\n                                    src: embed + results.videos.results[0].key\n                                }, void 0, false, {\n                                    fileName: \"I:\\\\Web Dev Bootcamp\\\\3. Full Stack Web Developer\\\\Task 11 NEXT II\\\\Task11\\\\Next-Movie-API\\\\pages\\\\movie\\\\[id].js\",\n                                    lineNumber: 79,\n                                    columnNumber: 19\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"I:\\\\Web Dev Bootcamp\\\\3. Full Stack Web Developer\\\\Task 11 NEXT II\\\\Task11\\\\Next-Movie-API\\\\pages\\\\movie\\\\[id].js\",\n                                lineNumber: 78,\n                                columnNumber: 12\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"I:\\\\Web Dev Bootcamp\\\\3. Full Stack Web Developer\\\\Task 11 NEXT II\\\\Task11\\\\Next-Movie-API\\\\pages\\\\movie\\\\[id].js\",\n                        lineNumber: 49,\n                        columnNumber: 8\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"I:\\\\Web Dev Bootcamp\\\\3. Full Stack Web Developer\\\\Task 11 NEXT II\\\\Task11\\\\Next-Movie-API\\\\pages\\\\movie\\\\[id].js\",\n                    lineNumber: 47,\n                    columnNumber: 10\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"I:\\\\Web Dev Bootcamp\\\\3. Full Stack Web Developer\\\\Task 11 NEXT II\\\\Task11\\\\Next-Movie-API\\\\pages\\\\movie\\\\[id].js\",\n            lineNumber: 45,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"I:\\\\Web Dev Bootcamp\\\\3. Full Stack Web Developer\\\\Task 11 NEXT II\\\\Task11\\\\Next-Movie-API\\\\pages\\\\movie\\\\[id].js\",\n        lineNumber: 44,\n        columnNumber: 11\n    }, this);\n}\n_c = Movie;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Movie);\nvar _c;\n$RefreshReg$(_c, \"Movie\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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NENBQUMsR0FBQzs7Ozs7OzRDQUFJO2tEQUNsRSw4REFBQ1osR0FBQzs7MERBQUMsOERBQUNHLEdBQUM7MERBQUMsVUFBUTs7Ozs7b0RBQUk7NENBQUEsR0FBQzs0Q0FBQ3hCLGVBQWUsQ0FBQyxFQUFDLENBQWtCLE1BQUssQ0FBckJRLE9BQU8sQ0FBQzBCLE9BQU8sRUFBQyxPQUFLLENBQUMsQ0FBQzs7Ozs7OzRDQUFLOzs7Ozs7b0NBSWpFOzBDQUNOLDhEQUFDekIsS0FBRztnQ0FBQ0MsU0FBUyxFQUFDLFFBQVE7MENBQ2hCLDRFQUFDeUIsUUFBTTtvQ0FFUGpCLEtBQUssRUFBQyxNQUFNO29DQUNabkIsTUFBTSxFQUFDLE1BQU07b0NBQ2JpQixHQUFHLEVBQUV6QixLQUFLLEdBQUNpQixPQUFPLENBQUM0QixNQUFNLENBQUM1QixPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM2QixHQUFHOzs7Ozt3Q0FFL0I7Ozs7O29DQUNOOzs7Ozs7NEJBQ1I7Ozs7O3dCQUNFOzs7Ozs7Z0JBQ0g7Ozs7O1lBRVk7Q0FFdkI7QUFwRFE5QixLQUFBQSxLQUFLOztBQXFEZCwrREFBZUEsS0FBSyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9tb3ZpZS9baWRdLmpzPzYxNTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdsb2JhbExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0dsb2JhbExheW91dCdcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXHJcblxyXG4vLyBUaGUgW2lkXS5qcyB3aWxsIGdlbmVyYXRlIHRoZSBjb250ZW50IG9mIGFueSAgc2VsZWN0ZWQgbW92aWUuXHJcblxyXG4vL1N0b3JlIHRoZSBtb3ZpZSBzdGluZyBpbnRvIHZhcmlhYmxlc1xyXG5sZXQgYmFzZVVSTCAgICAgPSBcImh0dHBzOi8vYXBpLnRoZW1vdmllZGIub3JnLzMvbW92aWUvXCI7XHJcbmxldCBsYW5nICAgICAgICA9IFwiJmxhbmd1YWdlPWVuLVVTXCI7XHJcbmxldCBBUElfS0VZICAgICA9IFwiP2FwaV9rZXk9OGNmMWVlODhmY2ZmMDhjYWM0NzAyYTUzY2U3YmM0NzBcIjtcclxubGV0IHNpemUgICAgICAgID0gXCJvcmlnaW5hbFwiO1xyXG5sZXQgaW1nX3VybCAgICAgPSBcImh0dHBzOi8vaW1hZ2UudG1kYi5vcmcvdC9wL1wiXHJcbmxldCBlbWJlZCAgICAgICA9IGBodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC9gXHJcblxyXG4vL1VzZSB0aGlzIGFycmF5IHRvIHJlcGxheSB0aGUgbW9udGggaW50ZWdlciB3aXQgYSBzdHJpbmdcclxuY29uc3QgbW9udGggPSBbbnVsbCxcIkphbnVhcnlcIixcIkZlYnJ1YXJ5XCIsXCJNYXJjaFwiLFwiQXByaWxcIixcIk1heVwiLFwiSnVuZVwiLFwiSnVseVwiLFwiQXVndXN0XCIsXCJTZXB0ZW1iZXJcIixcIk9jdG9iZXJcIixcIk5vdmVtYmVyXCIsXCJEZWNlbWJlclwiXTtcclxuXHJcbi8vY29udmVydCBtaWxsaXNlY29uZHMgdG8gSG91cnMsIE1pbnV0ZXMgYW5kIHNlY29uZHNcclxuZnVuY3Rpb24gcGFkVG8yRGlnaXRzKG51bSkge1xyXG4gICByZXR1cm4gbnVtLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgJzAnKTtcclxufVxyXG5cclxuY29uc3QgaW1hZ2VTdHlsZT17XHJcbiAgIHdpdGg6IDQwMCxcclxuICAgaGVpZ2h0OiA1MDAsXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBjb252ZXJ0TXNUb1RpbWUobWlsbGlzZWNvbmRzKSB7XHJcbiAgIGxldCBzZWNvbmRzID0gTWF0aC5mbG9vcihtaWxsaXNlY29uZHMgLyAxMDAwKTtcclxuICAgbGV0IG1pbnV0ZXMgPSBNYXRoLmZsb29yKHNlY29uZHMgLyA2MCk7XHJcbiAgIGxldCBob3VycyA9IE1hdGguZmxvb3IobWludXRlcyAvIDYwKTtcclxuICAgc2Vjb25kcyA9IHNlY29uZHMgJSA2MDtcclxuICAgbWludXRlcyA9IG1pbnV0ZXMgJSA2MDtcclxuICAgLy9ob3VycyA9IGhvdXJzICUgMjQ7XHJcbiAgIHJldHVybiBgJHtwYWRUbzJEaWdpdHMoaG91cnMpfToke3BhZFRvMkRpZ2l0cyhtaW51dGVzKX06JHtwYWRUbzJEaWdpdHMoXHJcbiBzZWNvbmRzLFxyXG4pfWA7XHJcbn1cclxuXHJcbi8vUmVuZGVyIHRoZSBtb3ZpZSBkZXRhaWxzIHdoZW4gc2VsZWN0ZWRcclxuZnVuY3Rpb24gTW92aWUoe3Jlc3VsdHN9KSB7XHJcbiAgIC8vY29uc29sZS5sb2cocmVzdWx0cylcclxuXHJcbiAgIHJldHVybiA8R2xvYmFsTGF5b3V0PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ncHJldmlld19tb3ZpZV9vdXRlcl9jb250YWluZXInIHN0eWxlPXt7IGJhY2tncm91bmRJbWFnZTogYHVybCgke2ltZ191cmwrc2l6ZStyZXN1bHRzLmJhY2tkcm9wX3BhdGh9KWAgfX0+XHJcbiAgICAgIDxoMT57cmVzdWx0cy5vcmlnaW5hbF90aXRsZSB9PC9oMT5cclxuICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21vdmllX3ByZXZpZXcnID5cclxuICAgICAgICBcclxuICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpbm5lci1jb250YWluZXInPlxyXG4gICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdoZWFkZXJfaW1nJz5cclxuICAgICAgICAgICAgICA8SW1hZ2UgXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPSdwcmV2aWV3LWltYWdlJ1xyXG4gICAgICAgICAgICAgIHNyYz17aW1nX3VybCtzaXplK3Jlc3VsdHMucG9zdGVyX3BhdGh9XHJcbiAgICAgICAgICAgICAgc3R5bGU9e2ltYWdlU3R5bGV9XHJcbiAgICAgICAgICAgICAgd2lkdGg9e2ltYWdlU3R5bGUud2l0aH1cclxuICAgICAgICAgICAgICBoZWlnaHQ9e2ltYWdlU3R5bGUuaGVpZ2h0fS8+XHJcbiAgICAgICAgICAgPC9kaXY+XHJcbiAgIFxyXG4gICBcclxuICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGVzY3JpcHRpb24nPlxyXG4gICAgICAgICAgICA8aDI+e3Jlc3VsdHMudGFnbGluZSA/IHJlc3VsdHMudGFnbGluZTpyZXN1bHRzLm9yaWdpbmFsX3RpdGxlfTwvaDI+XHJcbiAgICAgICAgICAgICAgIDxwPntyZXN1bHRzLm92ZXJ2aWV3fTwvcD5cclxuICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgPHA+PGI+UmVsZWFzZSBEYXRlOjwvYj5cclxuICAgICAgICAgICAgICAge2AgXHJcbiAgICAgICAgICAgICAgICR7cmVzdWx0cy5yZWxlYXNlX2RhdGUucmVwbGFjZUFsbChcIi1cIiwgXCIgXCIpLnNwbGl0KFwiIFwiKVsyXX1cclxuICAgICAgICAgICAgICAgJHttb250aFtwYXJzZUludChyZXN1bHRzLnJlbGVhc2VfZGF0ZS5yZXBsYWNlQWxsKFwiLVwiLCBcIiBcIikuc3BsaXQoXCIgXCIpWzFdKV19XHJcbiAgICAgICAgICAgICAgICR7cmVzdWx0cy5yZWxlYXNlX2RhdGUucmVwbGFjZUFsbChcIi1cIiwgXCIgXCIpLnNwbGl0KFwiIFwiKVswXX1gXHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICA8cD48Yj5TdGF0dXM6PC9iPiB7cmVzdWx0cy5zdGF0dXN9PC9wPlxyXG4gICAgICAgICAgICAgICA8cD48Yj5HZW5yZTo8L2I+IHtyZXN1bHRzLmdlbnJlcy5tYXAoaXRlbT0+YCR7aXRlbS5uYW1lfSwgYCl9IDwvcD5cclxuICAgICAgICAgICAgICAgPHA+PGI+UnVudGltZTo8L2I+IHtjb252ZXJ0TXNUb1RpbWUoYCR7cmVzdWx0cy5ydW50aW1lfTAwMDAwYCl9PC9wPlxyXG4gICBcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpZnJhbWUnPlxyXG4gICAgICAgICAgICAgICAgICA8aWZyYW1lXHJcbiAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiIFxyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxMDAlXCIgXHJcbiAgICAgICAgICAgICAgICAgIHNyYz17ZW1iZWQrcmVzdWx0cy52aWRlb3MucmVzdWx0c1swXS5rZXl9ID5cclxuICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIDwvaWZyYW1lPlxyXG4gICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgIDwvZGl2PlxyXG4gICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgICAgIFxyXG4gICAgICAgICA8L0dsb2JhbExheW91dD5cclxuXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgTW92aWVcclxuXHJcbi8vU2luY2Ugd2UgZG9uJ3Qga25vdyB3aGF0IHRoaSBpZCB3aWxsIGJlIHdlJ2xsIHVzZSBzb21ldGhpbmcgY2FsbGVkIGEgd2lsZGNhcmQgdG8gcmVuZGVyIHRoZSBwYWdlIG9mIHRoZSBzZWxlY3RlZCBtb3ZpZS5cclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkgey8vY29udGV4dCBob2xkcyB0aGUgZGF0YSB0aGF0cyBwYXNzZWQgd2l0aCB0aGUgdXJsXHJcbiAgIGNvbnN0IHsgaWQgfSA9IGNvbnRleHQucXVlcnkvL3RoaXMgd2lsbCBhbHNvIGhvbGQgdGhlIGlkIG9mIHRoZSBtb3ZpZXMgc2VsZWN0ZWQgb24gdGhlIGhvbWUgcGFnZS5cclxuXHJcbiAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBmZXRjaChgJHtiYXNlVVJMfSR7aWR9JHtBUElfS0VZfSR7bGFuZ30mYXBwZW5kX3RvX3Jlc3BvbnNlPXZpZGVvcywgaW1hZ2VzYClcclxuICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpO1xyXG5cclxuICAgcmV0dXJue3Byb3BzOiB7cmVzdWx0czpyZXF1ZXN0fX1cclxuICAgXHJcblxyXG4gICAvL2NvbnNvbGUudGFibGUodXJsKVxyXG4gIFxyXG4gfVxyXG4gXHJcbiJdLCJuYW1lcyI6WyJHbG9iYWxMYXlvdXQiLCJJbWFnZSIsInNpemUiLCJpbWdfdXJsIiwiZW1iZWQiLCJtb250aCIsInBhZFRvMkRpZ2l0cyIsIm51bSIsInRvU3RyaW5nIiwicGFkU3RhcnQiLCJpbWFnZVN0eWxlIiwid2l0aCIsImhlaWdodCIsImNvbnZlcnRNc1RvVGltZSIsIm1pbGxpc2Vjb25kcyIsInNlY29uZHMiLCJNYXRoIiwiZmxvb3IiLCJtaW51dGVzIiwiaG91cnMiLCJNb3ZpZSIsInJlc3VsdHMiLCJkaXYiLCJjbGFzc05hbWUiLCJzdHlsZSIsImJhY2tncm91bmRJbWFnZSIsImJhY2tkcm9wX3BhdGgiLCJoMSIsIm9yaWdpbmFsX3RpdGxlIiwic3JjIiwicG9zdGVyX3BhdGgiLCJ3aWR0aCIsImgyIiwidGFnbGluZSIsInAiLCJvdmVydmlldyIsImJyIiwiYiIsInJlbGVhc2VfZGF0ZSIsInJlcGxhY2VBbGwiLCJzcGxpdCIsInBhcnNlSW50Iiwic3RhdHVzIiwiZ2VucmVzIiwibWFwIiwiaXRlbSIsIm5hbWUiLCJydW50aW1lIiwiaWZyYW1lIiwidmlkZW9zIiwia2V5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/movie/[id].js\n"));

/***/ })

});