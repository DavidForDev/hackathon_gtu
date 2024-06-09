"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/courses/[id]/quizz/page",{

/***/ "(app-pages-browser)/./src/components/quizz/index.tsx":
/*!****************************************!*\
  !*** ./src/components/quizz/index.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Quizz; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _assets_images_quizz_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/assets/images/quizz.png */ \"(app-pages-browser)/./src/assets/images/quizz.png\");\n/* harmony import */ var _components_quizz_components_quizCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/quizz/_components/quizCard */ \"(app-pages-browser)/./src/components/quizz/_components/quizCard.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _apollo_apollo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/apollo/apollo */ \"(app-pages-browser)/./src/apollo/apollo.ts\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! graphql-tag */ \"(app-pages-browser)/./node_modules/graphql-tag/lib/index.js\");\n/* harmony import */ var _contexts_user_context__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/contexts/user.context */ \"(app-pages-browser)/./src/contexts/user.context.tsx\");\n/* harmony import */ var _ui_buttons_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../ui/buttons.ui */ \"(app-pages-browser)/./src/components/ui/buttons.ui.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nfunction _templateObject() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n      mutation Mutation($levelUpInput: LevelUpInput) {\\n        levelUp(levelUpInput: $levelUpInput) {\\n          data\\n          message\\n          status\\n        }\\n      }\\n    \"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction Quizz(param) {\n    let { sliders, changer, quantity, step, course_id } = param;\n    _s();\n    const { user } = (0,_contexts_user_context__WEBPACK_IMPORTED_MODULE_7__.useUserContext)();\n    const [score, setScore] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(0);\n    const insertScore = async ()=>{\n        const schema = (0,graphql_tag__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(_templateObject());\n        await _apollo_apollo__WEBPACK_IMPORTED_MODULE_6__[\"default\"].mutate({\n            mutation: schema,\n            variables: {\n                levelUpInput: {\n                    user_id: Number(user.id),\n                    course_id: Number(course_id),\n                    score: 10,\n                    missiondone: false,\n                    quizDone: true\n                }\n            }\n        });\n    };\n    if (step >= quantity) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: \"w-full h-full\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                            children: \"congratulations\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\GTU-306\\\\Desktop\\\\hackathon\\\\hackathon\\\\client\\\\src\\\\components\\\\quizz\\\\index.tsx\",\n                            lineNumber: 61,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                            children: [\n                                \"your score:\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                                    children: score\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\GTU-306\\\\Desktop\\\\hackathon\\\\hackathon\\\\client\\\\src\\\\components\\\\quizz\\\\index.tsx\",\n                                    lineNumber: 63,\n                                    columnNumber: 24\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\GTU-306\\\\Desktop\\\\hackathon\\\\hackathon\\\\client\\\\src\\\\components\\\\quizz\\\\index.tsx\",\n                            lineNumber: 62,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\GTU-306\\\\Desktop\\\\hackathon\\\\hackathon\\\\client\\\\src\\\\components\\\\quizz\\\\index.tsx\",\n                    lineNumber: 60,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_ui_buttons_ui__WEBPACK_IMPORTED_MODULE_8__.PrimaryButton, {\n                    children: \"start Mission\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\GTU-306\\\\Desktop\\\\hackathon\\\\hackathon\\\\client\\\\src\\\\components\\\\quizz\\\\index.tsx\",\n                    lineNumber: 66,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\GTU-306\\\\Desktop\\\\hackathon\\\\hackathon\\\\client\\\\src\\\\components\\\\quizz\\\\index.tsx\",\n            lineNumber: 59,\n            columnNumber: 7\n        }, this);\n    }\n    const { options, correct_answer, question } = sliders;\n    const { score: scoreNumber, answer: correctAnswer } = correct_answer;\n    const submitHandle = async (answer)=>{\n        if (answer === correctAnswer) {\n            setScore(score + scoreNumber);\n            changer((prev)=>prev + 1);\n            insertScore();\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"w-full h-full flex items-start\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"h-full object-cover relative w-1/2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        src: _assets_images_quizz_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                        alt: \"quizz\",\n                        className: \"h-full w-full object-cover\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\GTU-306\\\\Desktop\\\\hackathon\\\\hackathon\\\\client\\\\src\\\\components\\\\quizz\\\\index.tsx\",\n                        lineNumber: 87,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"absolute w-full h-full flex items-start justify-center top-0 left-0 bg-black/60 flex-col gap-3 p-8\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                                className: \"text-2xl font-bold text-white\",\n                                children: [\n                                    \"stage \",\n                                    \"\".concat(step + 1, \" / \").concat(quantity)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\GTU-306\\\\Desktop\\\\hackathon\\\\hackathon\\\\client\\\\src\\\\components\\\\quizz\\\\index.tsx\",\n                                lineNumber: 93,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: \"w-full flex flex-col gap-1\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                        className: \"text-white font-extrabold text-3xl\",\n                                        children: question\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\GTU-306\\\\Desktop\\\\hackathon\\\\hackathon\\\\client\\\\src\\\\components\\\\quizz\\\\index.tsx\",\n                                        lineNumber: 97,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                        className: \"text-white/30\",\n                                        children: \"Select only one answer\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\GTU-306\\\\Desktop\\\\hackathon\\\\hackathon\\\\client\\\\src\\\\components\\\\quizz\\\\index.tsx\",\n                                        lineNumber: 98,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\GTU-306\\\\Desktop\\\\hackathon\\\\hackathon\\\\client\\\\src\\\\components\\\\quizz\\\\index.tsx\",\n                                lineNumber: 96,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\GTU-306\\\\Desktop\\\\hackathon\\\\hackathon\\\\client\\\\src\\\\components\\\\quizz\\\\index.tsx\",\n                        lineNumber: 92,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\GTU-306\\\\Desktop\\\\hackathon\\\\hackathon\\\\client\\\\src\\\\components\\\\quizz\\\\index.tsx\",\n                lineNumber: 86,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"w-1/2 p-3 bg-[#2F80ED] h-full flex flex-col gap-9 justify-center \",\n                children: options.map((option)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_quizz_components_quizCard__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        onClick: ()=>submitHandle(option),\n                        answer: option,\n                        isTrue: false\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\GTU-306\\\\Desktop\\\\hackathon\\\\hackathon\\\\client\\\\src\\\\components\\\\quizz\\\\index.tsx\",\n                        lineNumber: 104,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\GTU-306\\\\Desktop\\\\hackathon\\\\hackathon\\\\client\\\\src\\\\components\\\\quizz\\\\index.tsx\",\n                lineNumber: 102,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\GTU-306\\\\Desktop\\\\hackathon\\\\hackathon\\\\client\\\\src\\\\components\\\\quizz\\\\index.tsx\",\n        lineNumber: 85,\n        columnNumber: 5\n    }, this);\n}\n_s(Quizz, \"4ZxX5o5ZJ4lLsesqwzFOSZ5qy08=\", false, function() {\n    return [\n        _contexts_user_context__WEBPACK_IMPORTED_MODULE_7__.useUserContext\n    ];\n});\n_c = Quizz;\nvar _c;\n$RefreshReg$(_c, \"Quizz\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL3F1aXp6L2luZGV4LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFK0I7QUFFb0I7QUFDWTtBQUdkO0FBRVo7QUFDUDtBQUMyQjtBQUNSO0FBRWxDLFNBQVNRLE1BQU0sS0FZN0I7UUFaNkIsRUFDNUJDLE9BQU8sRUFDUEMsT0FBTyxFQUNQQyxRQUFRLEVBQ1JDLElBQUksRUFDSkMsU0FBUyxFQU9WLEdBWjZCOztJQWE1QixNQUFNLEVBQUVDLElBQUksRUFBRSxHQUFHUixzRUFBY0E7SUFDL0IsTUFBTSxDQUFDUyxPQUFPQyxTQUFTLEdBQUdiLCtDQUFRQSxDQUFTO0lBRTNDLE1BQU1jLGNBQWM7UUFDbEIsTUFBTUMsU0FBU2IsdURBQUdBO1FBVWxCLE1BQU1ELHNEQUFNQSxDQUFDZSxNQUFNLENBQUM7WUFDbEJDLFVBQVVGO1lBQ1ZHLFdBQVc7Z0JBQ1RDLGNBQWM7b0JBQ1pDLFNBQVNDLE9BQU9WLEtBQUtXLEVBQUU7b0JBQ3ZCWixXQUFXVyxPQUFPWDtvQkFDbEJFLE9BQU87b0JBQ1BXLGFBQWE7b0JBQ2JDLFVBQVU7Z0JBQ1o7WUFDRjtRQUNGO0lBQ0Y7SUFFQSxJQUFJZixRQUFRRCxVQUFVO1FBQ3BCLHFCQUNFLDhEQUFDaUI7OzhCQUNDLDhEQUFDQTtvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUNDO3NDQUFHOzs7Ozs7c0NBQ0osOERBQUNDOztnQ0FBRTs4Q0FDVSw4REFBQ0M7OENBQU1qQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhCQUd0Qiw4REFBQ1IseURBQWFBOzhCQUFDOzs7Ozs7Ozs7Ozs7SUFHckI7SUFFQSxNQUFNLEVBQUUwQixPQUFPLEVBQUVDLGNBQWMsRUFBRUMsUUFBUSxFQUFFLEdBQUcxQjtJQUU5QyxNQUFNLEVBQUVNLE9BQU9xQixXQUFXLEVBQUVDLFFBQVFDLGFBQWEsRUFBRSxHQUFHSjtJQUV0RCxNQUFNSyxlQUFlLE9BQU9GO1FBQzFCLElBQUlBLFdBQVdDLGVBQWU7WUFDNUJ0QixTQUFTRCxRQUFRcUI7WUFDakIxQixRQUFRLENBQUM4QixPQUFjQSxPQUFPO1lBRTlCdkI7UUFDRjtJQUNGO0lBRUEscUJBQ0UsOERBQUNXO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUM3QixrREFBS0E7d0JBQ0p5QyxLQUFLeEMsZ0VBQVVBO3dCQUNmeUMsS0FBSTt3QkFDSmIsV0FBVTs7Ozs7O2tDQUVaLDhEQUFDRDt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUNDO2dDQUFHRCxXQUFVOztvQ0FBZ0M7b0NBQ3BDLEdBQWdCbEIsT0FBZEMsT0FBTyxHQUFFLE9BQWMsT0FBVEQ7Ozs7Ozs7MENBRTFCLDhEQUFDaUI7Z0NBQUlDLFdBQVU7O2tEQUNiLDhEQUFDRTt3Q0FBRUYsV0FBVTtrREFBc0NNOzs7Ozs7a0RBQ25ELDhEQUFDSjt3Q0FBRUYsV0FBVTtrREFBZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFJbkMsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUNaSSxRQUFRVSxHQUFHLENBQUMsQ0FBQ0MsdUJBQ1osOERBQUMxQyw2RUFBUUE7d0JBQ1AyQyxTQUFTLElBQU1OLGFBQWFLO3dCQUM1QlAsUUFBUU87d0JBQ1JFLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTXBCO0dBakd3QnRDOztRQWFMRixrRUFBY0E7OztLQWJURSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9xdWl6ei9pbmRleC50c3g/N2U0OCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuXHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5cclxuaW1wb3J0IHF1aXp6SW1hZ2UgZnJvbSBcIkAvYXNzZXRzL2ltYWdlcy9xdWl6ei5wbmdcIjtcclxuaW1wb3J0IFF1aXpDYXJkIGZyb20gXCJAL2NvbXBvbmVudHMvcXVpenovX2NvbXBvbmVudHMvcXVpekNhcmRcIjtcclxuaW1wb3J0IHF1aXp6REIgZnJvbSBcIkAvZGIvcXVpenouanNvblwiO1xyXG5pbXBvcnQgeyB1c2VQYXJhbXMgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XHJcbmltcG9ydCB7IFNldFN0YXRlQWN0aW9uLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IEFwb2xsbyBmcm9tIFwiQC9hcG9sbG8vYXBvbGxvXCI7XHJcbmltcG9ydCBncWwgZnJvbSBcImdyYXBocWwtdGFnXCI7XHJcbmltcG9ydCB7IHVzZVVzZXJDb250ZXh0IH0gZnJvbSBcIkAvY29udGV4dHMvdXNlci5jb250ZXh0XCI7XHJcbmltcG9ydCB7IFByaW1hcnlCdXR0b24gfSBmcm9tIFwiLi4vdWkvYnV0dG9ucy51aVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUXVpenooe1xyXG4gIHNsaWRlcnMsXHJcbiAgY2hhbmdlcixcclxuICBxdWFudGl0eSxcclxuICBzdGVwLFxyXG4gIGNvdXJzZV9pZCxcclxufToge1xyXG4gIHNsaWRlcnM6IGFueTtcclxuICBjaGFuZ2VyOiBTZXRTdGF0ZUFjdGlvbjxhbnk+O1xyXG4gIHF1YW50aXR5OiBudW1iZXI7XHJcbiAgc3RlcDogbnVtYmVyO1xyXG4gIGNvdXJzZV9pZDogYW55O1xyXG59KSB7XHJcbiAgY29uc3QgeyB1c2VyIH0gPSB1c2VVc2VyQ29udGV4dCgpO1xyXG4gIGNvbnN0IFtzY29yZSwgc2V0U2NvcmVdID0gdXNlU3RhdGU8bnVtYmVyPigwKTtcclxuXHJcbiAgY29uc3QgaW5zZXJ0U2NvcmUgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCBzY2hlbWEgPSBncWxgXHJcbiAgICAgIG11dGF0aW9uIE11dGF0aW9uKCRsZXZlbFVwSW5wdXQ6IExldmVsVXBJbnB1dCkge1xyXG4gICAgICAgIGxldmVsVXAobGV2ZWxVcElucHV0OiAkbGV2ZWxVcElucHV0KSB7XHJcbiAgICAgICAgICBkYXRhXHJcbiAgICAgICAgICBtZXNzYWdlXHJcbiAgICAgICAgICBzdGF0dXNcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIGA7XHJcblxyXG4gICAgYXdhaXQgQXBvbGxvLm11dGF0ZSh7XHJcbiAgICAgIG11dGF0aW9uOiBzY2hlbWEsXHJcbiAgICAgIHZhcmlhYmxlczoge1xyXG4gICAgICAgIGxldmVsVXBJbnB1dDoge1xyXG4gICAgICAgICAgdXNlcl9pZDogTnVtYmVyKHVzZXIuaWQpLFxyXG4gICAgICAgICAgY291cnNlX2lkOiBOdW1iZXIoY291cnNlX2lkKSxcclxuICAgICAgICAgIHNjb3JlOiAxMCxcclxuICAgICAgICAgIG1pc3Npb25kb25lOiBmYWxzZSxcclxuICAgICAgICAgIHF1aXpEb25lOiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBpZiAoc3RlcCA+PSBxdWFudGl0eSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBoLWZ1bGxcIj5cclxuICAgICAgICAgIDxoMz5jb25ncmF0dWxhdGlvbnM8L2gzPlxyXG4gICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgIHlvdXIgc2NvcmU6PHNwYW4+e3Njb3JlfTwvc3Bhbj5cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8UHJpbWFyeUJ1dHRvbj5zdGFydCBNaXNzaW9uPC9QcmltYXJ5QnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBjb25zdCB7IG9wdGlvbnMsIGNvcnJlY3RfYW5zd2VyLCBxdWVzdGlvbiB9ID0gc2xpZGVycztcclxuXHJcbiAgY29uc3QgeyBzY29yZTogc2NvcmVOdW1iZXIsIGFuc3dlcjogY29ycmVjdEFuc3dlciB9ID0gY29ycmVjdF9hbnN3ZXI7XHJcblxyXG4gIGNvbnN0IHN1Ym1pdEhhbmRsZSA9IGFzeW5jIChhbnN3ZXI6IHN0cmluZykgPT4ge1xyXG4gICAgaWYgKGFuc3dlciA9PT0gY29ycmVjdEFuc3dlcikge1xyXG4gICAgICBzZXRTY29yZShzY29yZSArIHNjb3JlTnVtYmVyKTtcclxuICAgICAgY2hhbmdlcigocHJldjogYW55KSA9PiBwcmV2ICsgMSk7XHJcblxyXG4gICAgICBpbnNlcnRTY29yZSgpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBoLWZ1bGwgZmxleCBpdGVtcy1zdGFydFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtZnVsbCBvYmplY3QtY292ZXIgcmVsYXRpdmUgdy0xLzJcIj5cclxuICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgIHNyYz17cXVpenpJbWFnZX1cclxuICAgICAgICAgIGFsdD1cInF1aXp6XCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImgtZnVsbCB3LWZ1bGwgb2JqZWN0LWNvdmVyXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdy1mdWxsIGgtZnVsbCBmbGV4IGl0ZW1zLXN0YXJ0IGp1c3RpZnktY2VudGVyIHRvcC0wIGxlZnQtMCBiZy1ibGFjay82MCBmbGV4LWNvbCBnYXAtMyBwLThcIj5cclxuICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGQgdGV4dC13aGl0ZVwiPlxyXG4gICAgICAgICAgICBzdGFnZSB7YCR7c3RlcCArIDF9IC8gJHtxdWFudGl0eX1gfVxyXG4gICAgICAgICAgPC9oMz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGZsZXggZmxleC1jb2wgZ2FwLTFcIj5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBmb250LWV4dHJhYm9sZCB0ZXh0LTN4bFwiPntxdWVzdGlvbn08L3A+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtd2hpdGUvMzBcIj5TZWxlY3Qgb25seSBvbmUgYW5zd2VyPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMS8yIHAtMyBiZy1bIzJGODBFRF0gaC1mdWxsIGZsZXggZmxleC1jb2wgZ2FwLTkganVzdGlmeS1jZW50ZXIgXCI+XHJcbiAgICAgICAge29wdGlvbnMubWFwKChvcHRpb246IGFueSkgPT4gKFxyXG4gICAgICAgICAgPFF1aXpDYXJkXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHN1Ym1pdEhhbmRsZShvcHRpb24pfVxyXG4gICAgICAgICAgICBhbnN3ZXI9e29wdGlvbn1cclxuICAgICAgICAgICAgaXNUcnVlPXtmYWxzZX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJxdWl6ekltYWdlIiwiUXVpekNhcmQiLCJ1c2VTdGF0ZSIsIkFwb2xsbyIsImdxbCIsInVzZVVzZXJDb250ZXh0IiwiUHJpbWFyeUJ1dHRvbiIsIlF1aXp6Iiwic2xpZGVycyIsImNoYW5nZXIiLCJxdWFudGl0eSIsInN0ZXAiLCJjb3Vyc2VfaWQiLCJ1c2VyIiwic2NvcmUiLCJzZXRTY29yZSIsImluc2VydFNjb3JlIiwic2NoZW1hIiwibXV0YXRlIiwibXV0YXRpb24iLCJ2YXJpYWJsZXMiLCJsZXZlbFVwSW5wdXQiLCJ1c2VyX2lkIiwiTnVtYmVyIiwiaWQiLCJtaXNzaW9uZG9uZSIsInF1aXpEb25lIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDMiLCJwIiwic3BhbiIsIm9wdGlvbnMiLCJjb3JyZWN0X2Fuc3dlciIsInF1ZXN0aW9uIiwic2NvcmVOdW1iZXIiLCJhbnN3ZXIiLCJjb3JyZWN0QW5zd2VyIiwic3VibWl0SGFuZGxlIiwicHJldiIsInNyYyIsImFsdCIsIm1hcCIsIm9wdGlvbiIsIm9uQ2xpY2siLCJpc1RydWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/quizz/index.tsx\n"));

/***/ })

});