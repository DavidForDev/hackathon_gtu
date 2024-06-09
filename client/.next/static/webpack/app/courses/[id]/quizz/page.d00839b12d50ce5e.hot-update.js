/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/courses/[id]/quizz/page",{

/***/ "(app-pages-browser)/./src/app/courses/[id]/quizz/page.tsx":
/*!*********************************************!*\
  !*** ./src/app/courses/[id]/quizz/page.tsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Quizz; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_quizz__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/quizz */ \"(app-pages-browser)/./src/components/quizz/index.tsx\");\n/* harmony import */ var _components_quizz__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_quizz__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _db_quizz_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/db/quizz.json */ \"(app-pages-browser)/./src/db/quizz.json\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction Quizz() {\n    _s();\n    const [currentSlide, setCurrentSlide] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(0);\n    const { courses } = _db_quizz_json__WEBPACK_IMPORTED_MODULE_2__;\n    const { id } = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useParams)();\n    const quizFilter = courses.find((x)=>x.course_id === Number(id));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_components_quizz__WEBPACK_IMPORTED_MODULE_1___default()), {\n        changer: setCurrentSlide,\n        sliders: quizFilter.questions[currentSlide],\n        quantity: quizFilter.questions.length,\n        course_id: id,\n        step: currentSlide\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\GTU-306\\\\Desktop\\\\hackathon\\\\hackathon\\\\client\\\\src\\\\app\\\\courses\\\\[id]\\\\quizz\\\\page.tsx\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, this);\n}\n_s(Quizz, \"g2VmscvNmSjI6TF4qRP7LHwMOiE=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useParams\n    ];\n});\n_c = Quizz;\nvar _c;\n$RefreshReg$(_c, \"Quizz\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY291cnNlcy9baWRdL3F1aXp6L3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFJeUM7QUFFSDtBQUVNO0FBQ1g7QUFFbEIsU0FBU0k7O0lBQ3RCLE1BQU0sQ0FBQ0MsY0FBY0MsZ0JBQWdCLEdBQUdILCtDQUFRQSxDQUFTO0lBRXpELE1BQU0sRUFBRUksT0FBTyxFQUFFLEdBQUdOLDJDQUFPQTtJQUUzQixNQUFNLEVBQUVPLEVBQUUsRUFBRSxHQUFHTiwwREFBU0E7SUFFeEIsTUFBTU8sYUFBa0JGLFFBQVFHLElBQUksQ0FBQyxDQUFDQyxJQUFNQSxFQUFFQyxTQUFTLEtBQUtDLE9BQU9MO0lBRW5FLHFCQUNFLDhEQUFDUiwwREFBT0E7UUFDTmMsU0FBU1I7UUFDVFMsU0FBU04sV0FBV08sU0FBUyxDQUFDWCxhQUFhO1FBQzNDWSxVQUFVUixXQUFXTyxTQUFTLENBQUNFLE1BQU07UUFDckNOLFdBQVdKO1FBQ1hXLE1BQU1kOzs7Ozs7QUFHWjtHQWxCd0JEOztRQUtQRixzREFBU0E7OztLQUxGRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NvdXJzZXMvW2lkXS9xdWl6ei9wYWdlLnRzeD85Yzc2Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5cclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcblxyXG5pbXBvcnQgUXVpenplciBmcm9tIFwiQC9jb21wb25lbnRzL3F1aXp6XCI7XHJcblxyXG5pbXBvcnQgcXVpenpEQiBmcm9tIFwiQC9kYi9xdWl6ei5qc29uXCI7XHJcblxyXG5pbXBvcnQgeyB1c2VQYXJhbXMgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBRdWl6eigpIHtcclxuICBjb25zdCBbY3VycmVudFNsaWRlLCBzZXRDdXJyZW50U2xpZGVdID0gdXNlU3RhdGU8bnVtYmVyPigwKTtcclxuXHJcbiAgY29uc3QgeyBjb3Vyc2VzIH0gPSBxdWl6ekRCO1xyXG5cclxuICBjb25zdCB7IGlkIH0gPSB1c2VQYXJhbXMoKTtcclxuXHJcbiAgY29uc3QgcXVpekZpbHRlcjogYW55ID0gY291cnNlcy5maW5kKCh4KSA9PiB4LmNvdXJzZV9pZCA9PT0gTnVtYmVyKGlkKSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8UXVpenplclxyXG4gICAgICBjaGFuZ2VyPXtzZXRDdXJyZW50U2xpZGV9XHJcbiAgICAgIHNsaWRlcnM9e3F1aXpGaWx0ZXIucXVlc3Rpb25zW2N1cnJlbnRTbGlkZV19XHJcbiAgICAgIHF1YW50aXR5PXtxdWl6RmlsdGVyLnF1ZXN0aW9ucy5sZW5ndGh9XHJcbiAgICAgIGNvdXJzZV9pZD17aWR9XHJcbiAgICAgIHN0ZXA9e2N1cnJlbnRTbGlkZX1cclxuICAgIC8+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiUXVpenplciIsInF1aXp6REIiLCJ1c2VQYXJhbXMiLCJ1c2VTdGF0ZSIsIlF1aXp6IiwiY3VycmVudFNsaWRlIiwic2V0Q3VycmVudFNsaWRlIiwiY291cnNlcyIsImlkIiwicXVpekZpbHRlciIsImZpbmQiLCJ4IiwiY291cnNlX2lkIiwiTnVtYmVyIiwiY2hhbmdlciIsInNsaWRlcnMiLCJxdWVzdGlvbnMiLCJxdWFudGl0eSIsImxlbmd0aCIsInN0ZXAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/courses/[id]/quizz/page.tsx\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/components/quizz/index.tsx":
/*!****************************************!*\
  !*** ./src/components/quizz/index.tsx ***!
  \****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports signature on update so we can compare the boundary
                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)
                module.hot.dispose(function (data) {
                    data.prevSignature =
                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevSignature !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {
                        module.hot.invalidate();
                    }
                    else {
                        self.$RefreshHelpers$.scheduleUpdate();
                    }
                }
            }
            else {
                // Since we just executed the code for the module, it's possible that the
                // new exports made it ineligible for being a boundary.
                // We only care about the case when we were _previously_ a boundary,
                // because we already accepted this update (accidental side effect).
                var isNoLongerABoundary = prevSignature !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ })

});