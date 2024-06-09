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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Quizz; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _assets_images_quizz_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/assets/images/quizz.png */ \"(app-pages-browser)/./src/assets/images/quizz.png\");\n/* harmony import */ var _components_quizz_components_quizCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/quizz/_components/quizCard */ \"(app-pages-browser)/./src/components/quizz/_components/quizCard.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _apollo_apollo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/apollo/apollo */ \"(app-pages-browser)/./src/apollo/apollo.ts\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! graphql-tag */ \"(app-pages-browser)/./node_modules/graphql-tag/lib/index.js\");\n/* harmony import */ var _contexts_user_context__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/contexts/user.context */ \"(app-pages-browser)/./src/contexts/user.context.tsx\");\n/* harmony import */ var _ui_buttons_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../ui/buttons.ui */ \"(app-pages-browser)/./src/components/ui/buttons.ui.tsx\");\n/* harmony import */ var _assets_icons_done__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/assets/icons/done */ \"(app-pages-browser)/./src/assets/icons/done.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nfunction _templateObject() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n      mutation Mutation($levelUpInput: LevelUpInput) {\\n        levelUp(levelUpInput: $levelUpInput) {\\n          data\\n          message\\n          status\\n        }\\n      }\\n    \"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction Quizz(param) {\n    let { sliders, changer, quantity, step, course_id } = param;\n    _s();\n    const { user } = (0,_contexts_user_context__WEBPACK_IMPORTED_MODULE_7__.useUserContext)();\n    const [score, setScore] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(0);\n    const [correct, setCorrect] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);\n    const insertScore = async ()=>{\n        const schema = (0,graphql_tag__WEBPACK_IMPORTED_MODULE_10__[\"default\"])(_templateObject());\n        await _apollo_apollo__WEBPACK_IMPORTED_MODULE_6__[\"default\"].mutate({\n            mutation: schema,\n            variables: {\n                levelUpInput: {\n                    user_id: Number(user.id),\n                    course_id: Number(course_id),\n                    score: 10,\n                    missiondone: false,\n                    quizDone: true\n                }\n            }\n        });\n    };\n    if (step >= quantity) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: \"w-full h-full\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                            children: \"congratulations\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\GTU-306\\\\Desktop\\\\hackathon\\\\hackathon\\\\client\\\\src\\\\components\\\\quizz\\\\index.tsx\",\n                            lineNumber: 63,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                            children: [\n                                \"your score:\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                                    children: score\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\GTU-306\\\\Desktop\\\\hackathon\\\\hackathon\\\\client\\\\src\\\\components\\\\quizz\\\\index.tsx\",\n                                    lineNumber: 65,\n                                    columnNumber: 24\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\GTU-306\\\\Desktop\\\\hackathon\\\\hackathon\\\\client\\\\src\\\\components\\\\quizz\\\\index.tsx\",\n                            lineNumber: 64,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\GTU-306\\\\Desktop\\\\hackathon\\\\hackathon\\\\client\\\\src\\\\components\\\\quizz\\\\index.tsx\",\n                    lineNumber: 62,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_ui_buttons_ui__WEBPACK_IMPORTED_MODULE_8__.PrimaryButton, {\n                    children: \"start Mission\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\GTU-306\\\\Desktop\\\\hackathon\\\\hackathon\\\\client\\\\src\\\\components\\\\quizz\\\\index.tsx\",\n                    lineNumber: 68,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\GTU-306\\\\Desktop\\\\hackathon\\\\hackathon\\\\client\\\\src\\\\components\\\\quizz\\\\index.tsx\",\n            lineNumber: 61,\n            columnNumber: 7\n        }, this);\n    }\n    const { options, correct_answer, question } = sliders;\n    const { score: scoreNumber, answer: correctAnswer } = correct_answer;\n    const submitHandle = async (answer)=>{\n        if (answer === correctAnswer) {\n            setCorrect(true);\n            setTimeout(()=>{\n                setScore(score + scoreNumber);\n                changer((prev)=>prev + 1);\n                insertScore();\n                setCorrect(false);\n            }, 2000);\n        }\n    };\n    const correctStyle = correct ? \"bg-green-300 border-green-300\" : \"bg-transparent\";\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"w-full h-full flex items-start\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"h-full object-cover relative w-1/2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        src: _assets_images_quizz_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                        alt: \"quizz\",\n                        className: \"h-full w-full object-cover\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\GTU-306\\\\Desktop\\\\hackathon\\\\hackathon\\\\client\\\\src\\\\components\\\\quizz\\\\index.tsx\",\n                        lineNumber: 97,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"absolute w-full h-full flex items-start justify-center top-0 left-0 bg-black/60 flex-col gap-3 p-8\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                                className: \"text-2xl font-bold text-white\",\n                                children: [\n                                    \"stage \",\n                                    \"\".concat(step + 1, \" / \").concat(quantity)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\GTU-306\\\\Desktop\\\\hackathon\\\\hackathon\\\\client\\\\src\\\\components\\\\quizz\\\\index.tsx\",\n                                lineNumber: 103,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: \"w-full flex flex-col gap-1\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                        className: \"text-white font-extrabold text-3xl\",\n                                        children: question\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\GTU-306\\\\Desktop\\\\hackathon\\\\hackathon\\\\client\\\\src\\\\components\\\\quizz\\\\index.tsx\",\n                                        lineNumber: 107,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                        className: \"text-white/30\",\n                                        children: \"Select only one answer\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\GTU-306\\\\Desktop\\\\hackathon\\\\hackathon\\\\client\\\\src\\\\components\\\\quizz\\\\index.tsx\",\n                                        lineNumber: 108,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\GTU-306\\\\Desktop\\\\hackathon\\\\hackathon\\\\client\\\\src\\\\components\\\\quizz\\\\index.tsx\",\n                                lineNumber: 106,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\GTU-306\\\\Desktop\\\\hackathon\\\\hackathon\\\\client\\\\src\\\\components\\\\quizz\\\\index.tsx\",\n                        lineNumber: 102,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\GTU-306\\\\Desktop\\\\hackathon\\\\hackathon\\\\client\\\\src\\\\components\\\\quizz\\\\index.tsx\",\n                lineNumber: 96,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"w-1/2 p-3 bg-[#2F80ED] relative h-full flex flex-col gap-9 justify-center \",\n                children: [\n                    correct ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"flex items-center justify-center absolute\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_assets_icons_done__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                fill: \"green\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\GTU-306\\\\Desktop\\\\hackathon\\\\hackathon\\\\client\\\\src\\\\components\\\\quizz\\\\index.tsx\",\n                                lineNumber: 115,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                                className: \" bg-green-300 text-bold text-3xl \",\n                                children: \"correct\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\GTU-306\\\\Desktop\\\\hackathon\\\\hackathon\\\\client\\\\src\\\\components\\\\quizz\\\\index.tsx\",\n                                lineNumber: 116,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\GTU-306\\\\Desktop\\\\hackathon\\\\hackathon\\\\client\\\\src\\\\components\\\\quizz\\\\index.tsx\",\n                        lineNumber: 114,\n                        columnNumber: 11\n                    }, this) : \"\",\n                    options.map((option)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_quizz_components_quizCard__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            onClick: ()=>submitHandle(option),\n                            answer: option\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\GTU-306\\\\Desktop\\\\hackathon\\\\hackathon\\\\client\\\\src\\\\components\\\\quizz\\\\index.tsx\",\n                            lineNumber: 122,\n                            columnNumber: 11\n                        }, this))\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\GTU-306\\\\Desktop\\\\hackathon\\\\hackathon\\\\client\\\\src\\\\components\\\\quizz\\\\index.tsx\",\n                lineNumber: 112,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\GTU-306\\\\Desktop\\\\hackathon\\\\hackathon\\\\client\\\\src\\\\components\\\\quizz\\\\index.tsx\",\n        lineNumber: 95,\n        columnNumber: 5\n    }, this);\n}\n_s(Quizz, \"XNdC/fNjos5xBTZMTCfNJBElS8w=\", false, function() {\n    return [\n        _contexts_user_context__WEBPACK_IMPORTED_MODULE_7__.useUserContext\n    ];\n});\n_c = Quizz;\nvar _c;\n$RefreshReg$(_c, \"Quizz\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL3F1aXp6L2luZGV4LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRStCO0FBRW9CO0FBQ1k7QUFHZDtBQUVaO0FBQ1A7QUFDMkI7QUFDUjtBQUNOO0FBRTVCLFNBQVNTLE1BQU0sS0FZN0I7UUFaNkIsRUFDNUJDLE9BQU8sRUFDUEMsT0FBTyxFQUNQQyxRQUFRLEVBQ1JDLElBQUksRUFDSkMsU0FBUyxFQU9WLEdBWjZCOztJQWE1QixNQUFNLEVBQUVDLElBQUksRUFBRSxHQUFHVCxzRUFBY0E7SUFDL0IsTUFBTSxDQUFDVSxPQUFPQyxTQUFTLEdBQUdkLCtDQUFRQSxDQUFTO0lBQzNDLE1BQU0sQ0FBQ2UsU0FBU0MsV0FBVyxHQUFHaEIsK0NBQVFBLENBQVU7SUFFaEQsTUFBTWlCLGNBQWM7UUFDbEIsTUFBTUMsU0FBU2hCLHdEQUFHQTtRQVVsQixNQUFNRCxzREFBTUEsQ0FBQ2tCLE1BQU0sQ0FBQztZQUNsQkMsVUFBVUY7WUFDVkcsV0FBVztnQkFDVEMsY0FBYztvQkFDWkMsU0FBU0MsT0FBT1osS0FBS2EsRUFBRTtvQkFDdkJkLFdBQVdhLE9BQU9iO29CQUNsQkUsT0FBTztvQkFDUGEsYUFBYTtvQkFDYkMsVUFBVTtnQkFDWjtZQUNGO1FBQ0Y7SUFDRjtJQUVBLElBQUlqQixRQUFRRCxVQUFVO1FBQ3BCLHFCQUNFLDhEQUFDbUI7OzhCQUNDLDhEQUFDQTtvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUNDO3NDQUFHOzs7Ozs7c0NBQ0osOERBQUNDOztnQ0FBRTs4Q0FDVSw4REFBQ0M7OENBQU1uQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhCQUd0Qiw4REFBQ1QseURBQWFBOzhCQUFDOzs7Ozs7Ozs7Ozs7SUFHckI7SUFFQSxNQUFNLEVBQUU2QixPQUFPLEVBQUVDLGNBQWMsRUFBRUMsUUFBUSxFQUFFLEdBQUc1QjtJQUU5QyxNQUFNLEVBQUVNLE9BQU91QixXQUFXLEVBQUVDLFFBQVFDLGFBQWEsRUFBRSxHQUFHSjtJQUV0RCxNQUFNSyxlQUFlLE9BQU9GO1FBQzFCLElBQUlBLFdBQVdDLGVBQWU7WUFDNUJ0QixXQUFXO1lBRVh3QixXQUFXO2dCQUNUMUIsU0FBU0QsUUFBUXVCO2dCQUNqQjVCLFFBQVEsQ0FBQ2lDLE9BQWNBLE9BQU87Z0JBQzlCeEI7Z0JBQ0FELFdBQVc7WUFDYixHQUFHO1FBQ0w7SUFDRjtJQUVBLE1BQU0wQixlQUFlM0IsVUFDakIsa0NBQ0E7SUFFSixxQkFDRSw4REFBQ2E7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ2hDLGtEQUFLQTt3QkFDSjhDLEtBQUs3QyxnRUFBVUE7d0JBQ2Y4QyxLQUFJO3dCQUNKZixXQUFVOzs7Ozs7a0NBRVosOERBQUNEO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ0M7Z0NBQUdELFdBQVU7O29DQUFnQztvQ0FDcEMsR0FBZ0JwQixPQUFkQyxPQUFPLEdBQUUsT0FBYyxPQUFURDs7Ozs7OzswQ0FFMUIsOERBQUNtQjtnQ0FBSUMsV0FBVTs7a0RBQ2IsOERBQUNFO3dDQUFFRixXQUFVO2tEQUFzQ007Ozs7OztrREFDbkQsOERBQUNKO3dDQUFFRixXQUFVO2tEQUFnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUluQyw4REFBQ0Q7Z0JBQUlDLFdBQVU7O29CQUNaZCx3QkFDQyw4REFBQ2E7d0JBQUlDLFdBQVU7OzBDQUNiLDhEQUFDeEIsMERBQVFBO2dDQUFDd0MsTUFBSzs7Ozs7OzBDQUNmLDhEQUFDZjtnQ0FBR0QsV0FBVTswQ0FBb0M7Ozs7Ozs7Ozs7OytCQUdwRDtvQkFFREksUUFBUWEsR0FBRyxDQUFDLENBQUNDLHVCQUNaLDhEQUFDaEQsNkVBQVFBOzRCQUFDaUQsU0FBUyxJQUFNVCxhQUFhUTs0QkFBU1YsUUFBUVU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtqRTtHQTlHd0J6Qzs7UUFhTEgsa0VBQWNBOzs7S0FiVEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvcXVpenovaW5kZXgudHN4PzdlNDgiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcblxyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuXHJcbmltcG9ydCBxdWl6ekltYWdlIGZyb20gXCJAL2Fzc2V0cy9pbWFnZXMvcXVpenoucG5nXCI7XHJcbmltcG9ydCBRdWl6Q2FyZCBmcm9tIFwiQC9jb21wb25lbnRzL3F1aXp6L19jb21wb25lbnRzL3F1aXpDYXJkXCI7XHJcbmltcG9ydCBxdWl6ekRCIGZyb20gXCJAL2RiL3F1aXp6Lmpzb25cIjtcclxuaW1wb3J0IHsgdXNlUGFyYW1zIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xyXG5pbXBvcnQgeyBTZXRTdGF0ZUFjdGlvbiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCBBcG9sbG8gZnJvbSBcIkAvYXBvbGxvL2Fwb2xsb1wiO1xyXG5pbXBvcnQgZ3FsIGZyb20gXCJncmFwaHFsLXRhZ1wiO1xyXG5pbXBvcnQgeyB1c2VVc2VyQ29udGV4dCB9IGZyb20gXCJAL2NvbnRleHRzL3VzZXIuY29udGV4dFwiO1xyXG5pbXBvcnQgeyBQcmltYXJ5QnV0dG9uIH0gZnJvbSBcIi4uL3VpL2J1dHRvbnMudWlcIjtcclxuaW1wb3J0IERvbmVJY29uIGZyb20gXCJAL2Fzc2V0cy9pY29ucy9kb25lXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBRdWl6eih7XHJcbiAgc2xpZGVycyxcclxuICBjaGFuZ2VyLFxyXG4gIHF1YW50aXR5LFxyXG4gIHN0ZXAsXHJcbiAgY291cnNlX2lkLFxyXG59OiB7XHJcbiAgc2xpZGVyczogYW55O1xyXG4gIGNoYW5nZXI6IFNldFN0YXRlQWN0aW9uPGFueT47XHJcbiAgcXVhbnRpdHk6IG51bWJlcjtcclxuICBzdGVwOiBudW1iZXI7XHJcbiAgY291cnNlX2lkOiBhbnk7XHJcbn0pIHtcclxuICBjb25zdCB7IHVzZXIgfSA9IHVzZVVzZXJDb250ZXh0KCk7XHJcbiAgY29uc3QgW3Njb3JlLCBzZXRTY29yZV0gPSB1c2VTdGF0ZTxudW1iZXI+KDApO1xyXG4gIGNvbnN0IFtjb3JyZWN0LCBzZXRDb3JyZWN0XSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuXHJcbiAgY29uc3QgaW5zZXJ0U2NvcmUgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCBzY2hlbWEgPSBncWxgXHJcbiAgICAgIG11dGF0aW9uIE11dGF0aW9uKCRsZXZlbFVwSW5wdXQ6IExldmVsVXBJbnB1dCkge1xyXG4gICAgICAgIGxldmVsVXAobGV2ZWxVcElucHV0OiAkbGV2ZWxVcElucHV0KSB7XHJcbiAgICAgICAgICBkYXRhXHJcbiAgICAgICAgICBtZXNzYWdlXHJcbiAgICAgICAgICBzdGF0dXNcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIGA7XHJcblxyXG4gICAgYXdhaXQgQXBvbGxvLm11dGF0ZSh7XHJcbiAgICAgIG11dGF0aW9uOiBzY2hlbWEsXHJcbiAgICAgIHZhcmlhYmxlczoge1xyXG4gICAgICAgIGxldmVsVXBJbnB1dDoge1xyXG4gICAgICAgICAgdXNlcl9pZDogTnVtYmVyKHVzZXIuaWQpLFxyXG4gICAgICAgICAgY291cnNlX2lkOiBOdW1iZXIoY291cnNlX2lkKSxcclxuICAgICAgICAgIHNjb3JlOiAxMCxcclxuICAgICAgICAgIG1pc3Npb25kb25lOiBmYWxzZSxcclxuICAgICAgICAgIHF1aXpEb25lOiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBpZiAoc3RlcCA+PSBxdWFudGl0eSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBoLWZ1bGxcIj5cclxuICAgICAgICAgIDxoMz5jb25ncmF0dWxhdGlvbnM8L2gzPlxyXG4gICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgIHlvdXIgc2NvcmU6PHNwYW4+e3Njb3JlfTwvc3Bhbj5cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8UHJpbWFyeUJ1dHRvbj5zdGFydCBNaXNzaW9uPC9QcmltYXJ5QnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBjb25zdCB7IG9wdGlvbnMsIGNvcnJlY3RfYW5zd2VyLCBxdWVzdGlvbiB9ID0gc2xpZGVycztcclxuXHJcbiAgY29uc3QgeyBzY29yZTogc2NvcmVOdW1iZXIsIGFuc3dlcjogY29ycmVjdEFuc3dlciB9ID0gY29ycmVjdF9hbnN3ZXI7XHJcblxyXG4gIGNvbnN0IHN1Ym1pdEhhbmRsZSA9IGFzeW5jIChhbnN3ZXI6IHN0cmluZykgPT4ge1xyXG4gICAgaWYgKGFuc3dlciA9PT0gY29ycmVjdEFuc3dlcikge1xyXG4gICAgICBzZXRDb3JyZWN0KHRydWUpO1xyXG5cclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgc2V0U2NvcmUoc2NvcmUgKyBzY29yZU51bWJlcik7XHJcbiAgICAgICAgY2hhbmdlcigocHJldjogYW55KSA9PiBwcmV2ICsgMSk7XHJcbiAgICAgICAgaW5zZXJ0U2NvcmUoKTtcclxuICAgICAgICBzZXRDb3JyZWN0KGZhbHNlKTtcclxuICAgICAgfSwgMjAwMCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY29ycmVjdFN0eWxlID0gY29ycmVjdFxyXG4gICAgPyBcImJnLWdyZWVuLTMwMCBib3JkZXItZ3JlZW4tMzAwXCJcclxuICAgIDogXCJiZy10cmFuc3BhcmVudFwiO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1mdWxsIGZsZXggaXRlbXMtc3RhcnRcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLWZ1bGwgb2JqZWN0LWNvdmVyIHJlbGF0aXZlIHctMS8yXCI+XHJcbiAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICBzcmM9e3F1aXp6SW1hZ2V9XHJcbiAgICAgICAgICBhbHQ9XCJxdWl6elwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJoLWZ1bGwgdy1mdWxsIG9iamVjdC1jb3ZlclwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHctZnVsbCBoLWZ1bGwgZmxleCBpdGVtcy1zdGFydCBqdXN0aWZ5LWNlbnRlciB0b3AtMCBsZWZ0LTAgYmctYmxhY2svNjAgZmxleC1jb2wgZ2FwLTMgcC04XCI+XHJcbiAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkIHRleHQtd2hpdGVcIj5cclxuICAgICAgICAgICAgc3RhZ2Uge2Ake3N0ZXAgKyAxfSAvICR7cXVhbnRpdHl9YH1cclxuICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBmbGV4IGZsZXgtY29sIGdhcC0xXCI+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgZm9udC1leHRyYWJvbGQgdGV4dC0zeGxcIj57cXVlc3Rpb259PC9wPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlLzMwXCI+U2VsZWN0IG9ubHkgb25lIGFuc3dlcjwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEvMiBwLTMgYmctWyMyRjgwRURdIHJlbGF0aXZlIGgtZnVsbCBmbGV4IGZsZXgtY29sIGdhcC05IGp1c3RpZnktY2VudGVyIFwiPlxyXG4gICAgICAgIHtjb3JyZWN0ID8gKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBhYnNvbHV0ZVwiPlxyXG4gICAgICAgICAgICA8RG9uZUljb24gZmlsbD1cImdyZWVuXCIgLz5cclxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIiBiZy1ncmVlbi0zMDAgdGV4dC1ib2xkIHRleHQtM3hsIFwiPmNvcnJlY3Q8L2gzPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIFwiXCJcclxuICAgICAgICApfVxyXG4gICAgICAgIHtvcHRpb25zLm1hcCgob3B0aW9uOiBhbnkpID0+IChcclxuICAgICAgICAgIDxRdWl6Q2FyZCBvbkNsaWNrPXsoKSA9PiBzdWJtaXRIYW5kbGUob3B0aW9uKX0gYW5zd2VyPXtvcHRpb259IC8+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJxdWl6ekltYWdlIiwiUXVpekNhcmQiLCJ1c2VTdGF0ZSIsIkFwb2xsbyIsImdxbCIsInVzZVVzZXJDb250ZXh0IiwiUHJpbWFyeUJ1dHRvbiIsIkRvbmVJY29uIiwiUXVpenoiLCJzbGlkZXJzIiwiY2hhbmdlciIsInF1YW50aXR5Iiwic3RlcCIsImNvdXJzZV9pZCIsInVzZXIiLCJzY29yZSIsInNldFNjb3JlIiwiY29ycmVjdCIsInNldENvcnJlY3QiLCJpbnNlcnRTY29yZSIsInNjaGVtYSIsIm11dGF0ZSIsIm11dGF0aW9uIiwidmFyaWFibGVzIiwibGV2ZWxVcElucHV0IiwidXNlcl9pZCIsIk51bWJlciIsImlkIiwibWlzc2lvbmRvbmUiLCJxdWl6RG9uZSIsImRpdiIsImNsYXNzTmFtZSIsImgzIiwicCIsInNwYW4iLCJvcHRpb25zIiwiY29ycmVjdF9hbnN3ZXIiLCJxdWVzdGlvbiIsInNjb3JlTnVtYmVyIiwiYW5zd2VyIiwiY29ycmVjdEFuc3dlciIsInN1Ym1pdEhhbmRsZSIsInNldFRpbWVvdXQiLCJwcmV2IiwiY29ycmVjdFN0eWxlIiwic3JjIiwiYWx0IiwiZmlsbCIsIm1hcCIsIm9wdGlvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/quizz/index.tsx\n"));

/***/ })

});