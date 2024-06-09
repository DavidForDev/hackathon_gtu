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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Quizz; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _assets_images_quizz_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/assets/images/quizz.png */ \"(app-pages-browser)/./src/assets/images/quizz.png\");\n/* harmony import */ var _components_quizz_components_quizCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/quizz/_components/quizCard */ \"(app-pages-browser)/./src/components/quizz/_components/quizCard.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _apollo_apollo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/apollo/apollo */ \"(app-pages-browser)/./src/apollo/apollo.ts\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! graphql-tag */ \"(app-pages-browser)/./node_modules/graphql-tag/lib/index.js\");\n/* harmony import */ var _contexts_user_context__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/contexts/user.context */ \"(app-pages-browser)/./src/contexts/user.context.tsx\");\n/* harmony import */ var _ui_buttons_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../ui/buttons.ui */ \"(app-pages-browser)/./src/components/ui/buttons.ui.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nfunction _templateObject() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n      mutation Mutation($levelUpInput: LevelUpInput) {\\n        levelUp(levelUpInput: $levelUpInput) {\\n          data\\n          message\\n          status\\n        }\\n      }\\n    \"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction Quizz(param) {\n    let { sliders, changer, quantity, step, course_id } = param;\n    _s();\n    const { user } = (0,_contexts_user_context__WEBPACK_IMPORTED_MODULE_7__.useUserContext)();\n    const [score, setScore] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(0);\n    const [correct, setCorrect] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);\n    const insertScore = async ()=>{\n        const schema = (0,graphql_tag__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(_templateObject());\n        await _apollo_apollo__WEBPACK_IMPORTED_MODULE_6__[\"default\"].mutate({\n            mutation: schema,\n            variables: {\n                levelUpInput: {\n                    user_id: Number(user.id),\n                    course_id: Number(course_id),\n                    score: 10,\n                    missiondone: false,\n                    quizDone: true\n                }\n            }\n        });\n    };\n    if (step >= quantity) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: \"w-full h-full\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                            children: \"congratulations\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\GTU-306\\\\Desktop\\\\hackathon\\\\hackathon\\\\client\\\\src\\\\components\\\\quizz\\\\index.tsx\",\n                            lineNumber: 62,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                            children: [\n                                \"your score:\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                                    children: score\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\GTU-306\\\\Desktop\\\\hackathon\\\\hackathon\\\\client\\\\src\\\\components\\\\quizz\\\\index.tsx\",\n                                    lineNumber: 64,\n                                    columnNumber: 24\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\GTU-306\\\\Desktop\\\\hackathon\\\\hackathon\\\\client\\\\src\\\\components\\\\quizz\\\\index.tsx\",\n                            lineNumber: 63,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\GTU-306\\\\Desktop\\\\hackathon\\\\hackathon\\\\client\\\\src\\\\components\\\\quizz\\\\index.tsx\",\n                    lineNumber: 61,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_ui_buttons_ui__WEBPACK_IMPORTED_MODULE_8__.PrimaryButton, {\n                    children: \"start Mission\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\GTU-306\\\\Desktop\\\\hackathon\\\\hackathon\\\\client\\\\src\\\\components\\\\quizz\\\\index.tsx\",\n                    lineNumber: 67,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\GTU-306\\\\Desktop\\\\hackathon\\\\hackathon\\\\client\\\\src\\\\components\\\\quizz\\\\index.tsx\",\n            lineNumber: 60,\n            columnNumber: 7\n        }, this);\n    }\n    const { options, correct_answer, question } = sliders;\n    const { score: scoreNumber, answer: correctAnswer } = correct_answer;\n    const submitHandle = async (answer)=>{\n        if (answer === correctAnswer) {\n            setCorrect(true);\n            setTimeout(()=>{\n                setScore(score + scoreNumber);\n                changer((prev)=>prev + 1);\n                insertScore();\n                setCorrect(false);\n            }, 2000);\n        }\n    };\n    const correctStyle = correct ? \"bg-green-300 border-green-300\" : \"bg-transparent\";\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"w-full h-full flex items-start\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"h-full object-cover relative w-1/2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        src: _assets_images_quizz_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                        alt: \"quizz\",\n                        className: \"h-full w-full object-cover\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\GTU-306\\\\Desktop\\\\hackathon\\\\hackathon\\\\client\\\\src\\\\components\\\\quizz\\\\index.tsx\",\n                        lineNumber: 96,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"absolute w-full h-full flex items-start justify-center top-0 left-0 bg-black/60 flex-col gap-3 p-8\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                                className: \"text-2xl font-bold text-white\",\n                                children: [\n                                    \"stage \",\n                                    \"\".concat(step + 1, \" / \").concat(quantity)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\GTU-306\\\\Desktop\\\\hackathon\\\\hackathon\\\\client\\\\src\\\\components\\\\quizz\\\\index.tsx\",\n                                lineNumber: 102,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: \"w-full flex flex-col gap-1\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                        className: \"text-white font-extrabold text-3xl\",\n                                        children: question\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\GTU-306\\\\Desktop\\\\hackathon\\\\hackathon\\\\client\\\\src\\\\components\\\\quizz\\\\index.tsx\",\n                                        lineNumber: 106,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                        className: \"text-white/30\",\n                                        children: \"Select only one answer\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\GTU-306\\\\Desktop\\\\hackathon\\\\hackathon\\\\client\\\\src\\\\components\\\\quizz\\\\index.tsx\",\n                                        lineNumber: 107,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\GTU-306\\\\Desktop\\\\hackathon\\\\hackathon\\\\client\\\\src\\\\components\\\\quizz\\\\index.tsx\",\n                                lineNumber: 105,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\GTU-306\\\\Desktop\\\\hackathon\\\\hackathon\\\\client\\\\src\\\\components\\\\quizz\\\\index.tsx\",\n                        lineNumber: 101,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\GTU-306\\\\Desktop\\\\hackathon\\\\hackathon\\\\client\\\\src\\\\components\\\\quizz\\\\index.tsx\",\n                lineNumber: 95,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"w-1/2 p-3 bg-[#2F80ED] h-full flex flex-col gap-9 justify-center \",\n                children: options.map((option)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_quizz_components_quizCard__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        onClick: ()=>submitHandle(option),\n                        className: \"\".concat(correctStyle),\n                        answer: option,\n                        isTrue: correct\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\GTU-306\\\\Desktop\\\\hackathon\\\\hackathon\\\\client\\\\src\\\\components\\\\quizz\\\\index.tsx\",\n                        lineNumber: 113,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\GTU-306\\\\Desktop\\\\hackathon\\\\hackathon\\\\client\\\\src\\\\components\\\\quizz\\\\index.tsx\",\n                lineNumber: 111,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\GTU-306\\\\Desktop\\\\hackathon\\\\hackathon\\\\client\\\\src\\\\components\\\\quizz\\\\index.tsx\",\n        lineNumber: 94,\n        columnNumber: 5\n    }, this);\n}\n_s(Quizz, \"XNdC/fNjos5xBTZMTCfNJBElS8w=\", false, function() {\n    return [\n        _contexts_user_context__WEBPACK_IMPORTED_MODULE_7__.useUserContext\n    ];\n});\n_c = Quizz;\nvar _c;\n$RefreshReg$(_c, \"Quizz\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL3F1aXp6L2luZGV4LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFK0I7QUFFb0I7QUFDWTtBQUdkO0FBRVo7QUFDUDtBQUMyQjtBQUNSO0FBRWxDLFNBQVNRLE1BQU0sS0FZN0I7UUFaNkIsRUFDNUJDLE9BQU8sRUFDUEMsT0FBTyxFQUNQQyxRQUFRLEVBQ1JDLElBQUksRUFDSkMsU0FBUyxFQU9WLEdBWjZCOztJQWE1QixNQUFNLEVBQUVDLElBQUksRUFBRSxHQUFHUixzRUFBY0E7SUFDL0IsTUFBTSxDQUFDUyxPQUFPQyxTQUFTLEdBQUdiLCtDQUFRQSxDQUFTO0lBQzNDLE1BQU0sQ0FBQ2MsU0FBU0MsV0FBVyxHQUFHZiwrQ0FBUUEsQ0FBVTtJQUVoRCxNQUFNZ0IsY0FBYztRQUNsQixNQUFNQyxTQUFTZix1REFBR0E7UUFVbEIsTUFBTUQsc0RBQU1BLENBQUNpQixNQUFNLENBQUM7WUFDbEJDLFVBQVVGO1lBQ1ZHLFdBQVc7Z0JBQ1RDLGNBQWM7b0JBQ1pDLFNBQVNDLE9BQU9aLEtBQUthLEVBQUU7b0JBQ3ZCZCxXQUFXYSxPQUFPYjtvQkFDbEJFLE9BQU87b0JBQ1BhLGFBQWE7b0JBQ2JDLFVBQVU7Z0JBQ1o7WUFDRjtRQUNGO0lBQ0Y7SUFFQSxJQUFJakIsUUFBUUQsVUFBVTtRQUNwQixxQkFDRSw4REFBQ21COzs4QkFDQyw4REFBQ0E7b0JBQUlDLFdBQVU7O3NDQUNiLDhEQUFDQztzQ0FBRzs7Ozs7O3NDQUNKLDhEQUFDQzs7Z0NBQUU7OENBQ1UsOERBQUNDOzhDQUFNbkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs4QkFHdEIsOERBQUNSLHlEQUFhQTs4QkFBQzs7Ozs7Ozs7Ozs7O0lBR3JCO0lBRUEsTUFBTSxFQUFFNEIsT0FBTyxFQUFFQyxjQUFjLEVBQUVDLFFBQVEsRUFBRSxHQUFHNUI7SUFFOUMsTUFBTSxFQUFFTSxPQUFPdUIsV0FBVyxFQUFFQyxRQUFRQyxhQUFhLEVBQUUsR0FBR0o7SUFFdEQsTUFBTUssZUFBZSxPQUFPRjtRQUMxQixJQUFJQSxXQUFXQyxlQUFlO1lBQzVCdEIsV0FBVztZQUVYd0IsV0FBVztnQkFDVDFCLFNBQVNELFFBQVF1QjtnQkFDakI1QixRQUFRLENBQUNpQyxPQUFjQSxPQUFPO2dCQUM5QnhCO2dCQUNBRCxXQUFXO1lBQ2IsR0FBRztRQUNMO0lBQ0Y7SUFFQSxNQUFNMEIsZUFBZTNCLFVBQ2pCLGtDQUNBO0lBRUoscUJBQ0UsOERBQUNhO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUMvQixrREFBS0E7d0JBQ0o2QyxLQUFLNUMsZ0VBQVVBO3dCQUNmNkMsS0FBSTt3QkFDSmYsV0FBVTs7Ozs7O2tDQUVaLDhEQUFDRDt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUNDO2dDQUFHRCxXQUFVOztvQ0FBZ0M7b0NBQ3BDLEdBQWdCcEIsT0FBZEMsT0FBTyxHQUFFLE9BQWMsT0FBVEQ7Ozs7Ozs7MENBRTFCLDhEQUFDbUI7Z0NBQUlDLFdBQVU7O2tEQUNiLDhEQUFDRTt3Q0FBRUYsV0FBVTtrREFBc0NNOzs7Ozs7a0RBQ25ELDhEQUFDSjt3Q0FBRUYsV0FBVTtrREFBZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFJbkMsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUNaSSxRQUFRWSxHQUFHLENBQUMsQ0FBQ0MsdUJBQ1osOERBQUM5Qyw2RUFBUUE7d0JBQ1ArQyxTQUFTLElBQU1SLGFBQWFPO3dCQUM1QmpCLFdBQVcsR0FBZ0IsT0FBYmE7d0JBQ2RMLFFBQVFTO3dCQUNSRSxRQUFRakM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTXBCO0dBM0d3QlQ7O1FBYUxGLGtFQUFjQTs7O0tBYlRFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL3F1aXp6L2luZGV4LnRzeD83ZTQ4Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5cclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcblxyXG5pbXBvcnQgcXVpenpJbWFnZSBmcm9tIFwiQC9hc3NldHMvaW1hZ2VzL3F1aXp6LnBuZ1wiO1xyXG5pbXBvcnQgUXVpekNhcmQgZnJvbSBcIkAvY29tcG9uZW50cy9xdWl6ei9fY29tcG9uZW50cy9xdWl6Q2FyZFwiO1xyXG5pbXBvcnQgcXVpenpEQiBmcm9tIFwiQC9kYi9xdWl6ei5qc29uXCI7XHJcbmltcG9ydCB7IHVzZVBhcmFtcyB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcclxuaW1wb3J0IHsgU2V0U3RhdGVBY3Rpb24sIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgQXBvbGxvIGZyb20gXCJAL2Fwb2xsby9hcG9sbG9cIjtcclxuaW1wb3J0IGdxbCBmcm9tIFwiZ3JhcGhxbC10YWdcIjtcclxuaW1wb3J0IHsgdXNlVXNlckNvbnRleHQgfSBmcm9tIFwiQC9jb250ZXh0cy91c2VyLmNvbnRleHRcIjtcclxuaW1wb3J0IHsgUHJpbWFyeUJ1dHRvbiB9IGZyb20gXCIuLi91aS9idXR0b25zLnVpXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBRdWl6eih7XHJcbiAgc2xpZGVycyxcclxuICBjaGFuZ2VyLFxyXG4gIHF1YW50aXR5LFxyXG4gIHN0ZXAsXHJcbiAgY291cnNlX2lkLFxyXG59OiB7XHJcbiAgc2xpZGVyczogYW55O1xyXG4gIGNoYW5nZXI6IFNldFN0YXRlQWN0aW9uPGFueT47XHJcbiAgcXVhbnRpdHk6IG51bWJlcjtcclxuICBzdGVwOiBudW1iZXI7XHJcbiAgY291cnNlX2lkOiBhbnk7XHJcbn0pIHtcclxuICBjb25zdCB7IHVzZXIgfSA9IHVzZVVzZXJDb250ZXh0KCk7XHJcbiAgY29uc3QgW3Njb3JlLCBzZXRTY29yZV0gPSB1c2VTdGF0ZTxudW1iZXI+KDApO1xyXG4gIGNvbnN0IFtjb3JyZWN0LCBzZXRDb3JyZWN0XSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuXHJcbiAgY29uc3QgaW5zZXJ0U2NvcmUgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCBzY2hlbWEgPSBncWxgXHJcbiAgICAgIG11dGF0aW9uIE11dGF0aW9uKCRsZXZlbFVwSW5wdXQ6IExldmVsVXBJbnB1dCkge1xyXG4gICAgICAgIGxldmVsVXAobGV2ZWxVcElucHV0OiAkbGV2ZWxVcElucHV0KSB7XHJcbiAgICAgICAgICBkYXRhXHJcbiAgICAgICAgICBtZXNzYWdlXHJcbiAgICAgICAgICBzdGF0dXNcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIGA7XHJcblxyXG4gICAgYXdhaXQgQXBvbGxvLm11dGF0ZSh7XHJcbiAgICAgIG11dGF0aW9uOiBzY2hlbWEsXHJcbiAgICAgIHZhcmlhYmxlczoge1xyXG4gICAgICAgIGxldmVsVXBJbnB1dDoge1xyXG4gICAgICAgICAgdXNlcl9pZDogTnVtYmVyKHVzZXIuaWQpLFxyXG4gICAgICAgICAgY291cnNlX2lkOiBOdW1iZXIoY291cnNlX2lkKSxcclxuICAgICAgICAgIHNjb3JlOiAxMCxcclxuICAgICAgICAgIG1pc3Npb25kb25lOiBmYWxzZSxcclxuICAgICAgICAgIHF1aXpEb25lOiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBpZiAoc3RlcCA+PSBxdWFudGl0eSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBoLWZ1bGxcIj5cclxuICAgICAgICAgIDxoMz5jb25ncmF0dWxhdGlvbnM8L2gzPlxyXG4gICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgIHlvdXIgc2NvcmU6PHNwYW4+e3Njb3JlfTwvc3Bhbj5cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8UHJpbWFyeUJ1dHRvbj5zdGFydCBNaXNzaW9uPC9QcmltYXJ5QnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBjb25zdCB7IG9wdGlvbnMsIGNvcnJlY3RfYW5zd2VyLCBxdWVzdGlvbiB9ID0gc2xpZGVycztcclxuXHJcbiAgY29uc3QgeyBzY29yZTogc2NvcmVOdW1iZXIsIGFuc3dlcjogY29ycmVjdEFuc3dlciB9ID0gY29ycmVjdF9hbnN3ZXI7XHJcblxyXG4gIGNvbnN0IHN1Ym1pdEhhbmRsZSA9IGFzeW5jIChhbnN3ZXI6IHN0cmluZykgPT4ge1xyXG4gICAgaWYgKGFuc3dlciA9PT0gY29ycmVjdEFuc3dlcikge1xyXG4gICAgICBzZXRDb3JyZWN0KHRydWUpO1xyXG5cclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgc2V0U2NvcmUoc2NvcmUgKyBzY29yZU51bWJlcik7XHJcbiAgICAgICAgY2hhbmdlcigocHJldjogYW55KSA9PiBwcmV2ICsgMSk7XHJcbiAgICAgICAgaW5zZXJ0U2NvcmUoKTtcclxuICAgICAgICBzZXRDb3JyZWN0KGZhbHNlKTtcclxuICAgICAgfSwgMjAwMCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY29ycmVjdFN0eWxlID0gY29ycmVjdFxyXG4gICAgPyBcImJnLWdyZWVuLTMwMCBib3JkZXItZ3JlZW4tMzAwXCJcclxuICAgIDogXCJiZy10cmFuc3BhcmVudFwiO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1mdWxsIGZsZXggaXRlbXMtc3RhcnRcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLWZ1bGwgb2JqZWN0LWNvdmVyIHJlbGF0aXZlIHctMS8yXCI+XHJcbiAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICBzcmM9e3F1aXp6SW1hZ2V9XHJcbiAgICAgICAgICBhbHQ9XCJxdWl6elwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJoLWZ1bGwgdy1mdWxsIG9iamVjdC1jb3ZlclwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHctZnVsbCBoLWZ1bGwgZmxleCBpdGVtcy1zdGFydCBqdXN0aWZ5LWNlbnRlciB0b3AtMCBsZWZ0LTAgYmctYmxhY2svNjAgZmxleC1jb2wgZ2FwLTMgcC04XCI+XHJcbiAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkIHRleHQtd2hpdGVcIj5cclxuICAgICAgICAgICAgc3RhZ2Uge2Ake3N0ZXAgKyAxfSAvICR7cXVhbnRpdHl9YH1cclxuICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBmbGV4IGZsZXgtY29sIGdhcC0xXCI+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgZm9udC1leHRyYWJvbGQgdGV4dC0zeGxcIj57cXVlc3Rpb259PC9wPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlLzMwXCI+U2VsZWN0IG9ubHkgb25lIGFuc3dlcjwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEvMiBwLTMgYmctWyMyRjgwRURdIGgtZnVsbCBmbGV4IGZsZXgtY29sIGdhcC05IGp1c3RpZnktY2VudGVyIFwiPlxyXG4gICAgICAgIHtvcHRpb25zLm1hcCgob3B0aW9uOiBhbnkpID0+IChcclxuICAgICAgICAgIDxRdWl6Q2FyZFxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzdWJtaXRIYW5kbGUob3B0aW9uKX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtjb3JyZWN0U3R5bGV9YH1cclxuICAgICAgICAgICAgYW5zd2VyPXtvcHRpb259XHJcbiAgICAgICAgICAgIGlzVHJ1ZT17Y29ycmVjdH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJxdWl6ekltYWdlIiwiUXVpekNhcmQiLCJ1c2VTdGF0ZSIsIkFwb2xsbyIsImdxbCIsInVzZVVzZXJDb250ZXh0IiwiUHJpbWFyeUJ1dHRvbiIsIlF1aXp6Iiwic2xpZGVycyIsImNoYW5nZXIiLCJxdWFudGl0eSIsInN0ZXAiLCJjb3Vyc2VfaWQiLCJ1c2VyIiwic2NvcmUiLCJzZXRTY29yZSIsImNvcnJlY3QiLCJzZXRDb3JyZWN0IiwiaW5zZXJ0U2NvcmUiLCJzY2hlbWEiLCJtdXRhdGUiLCJtdXRhdGlvbiIsInZhcmlhYmxlcyIsImxldmVsVXBJbnB1dCIsInVzZXJfaWQiLCJOdW1iZXIiLCJpZCIsIm1pc3Npb25kb25lIiwicXVpekRvbmUiLCJkaXYiLCJjbGFzc05hbWUiLCJoMyIsInAiLCJzcGFuIiwib3B0aW9ucyIsImNvcnJlY3RfYW5zd2VyIiwicXVlc3Rpb24iLCJzY29yZU51bWJlciIsImFuc3dlciIsImNvcnJlY3RBbnN3ZXIiLCJzdWJtaXRIYW5kbGUiLCJzZXRUaW1lb3V0IiwicHJldiIsImNvcnJlY3RTdHlsZSIsInNyYyIsImFsdCIsIm1hcCIsIm9wdGlvbiIsIm9uQ2xpY2siLCJpc1RydWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/quizz/index.tsx\n"));

/***/ })

});