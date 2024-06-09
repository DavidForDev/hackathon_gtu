"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("src/middleware",{

/***/ "(middleware)/./src/middleware.ts":
/*!***************************!*\
  !*** ./src/middleware.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   middleware: () => (/* binding */ middleware)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(middleware)/./node_modules/next/dist/esm/api/server.js\");\n\nfunction middleware(req, res) {\n    const hasToken = req.cookies.has(\"token\");\n    const token = req.cookies.get(\"token\");\n    const authorizedPaths = [\n        \"/\",\n        \"/courses\",\n        /^\\/courses\\/([^\\/]+)$/,\n        /^\\/courses\\/\\d+\\/quizz$/,\n        /^\\/courses\\/\\d+\\/missions$/,\n        \"/new\"\n    ];\n    const { pathname, origin } = req.nextUrl;\n    const isAuthorized = authorizedPaths.some((path)=>{\n        if (typeof path === \"string\") {\n            return path === pathname;\n        } else if (path instanceof RegExp) {\n            const match = pathname.match(path);\n            if (match) return true;\n        }\n        return false;\n    });\n    if (isAuthorized) {\n        if (hasToken) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.next();\n        } else {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.redirect(new URL(\"/sign-in\", origin));\n        }\n    } else {\n        if (hasToken) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.redirect(new URL(\"/\", origin));\n        } else {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.next();\n        }\n    }\n}\nconst config = {\n    matcher: [\n        \"/((?!api|_next/static|_next/image|favicon.ico|.mp4|.webm|.mov).*)\"\n    ],\n    static: true\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vc3JjL21pZGRsZXdhcmUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXdEO0FBRWpELFNBQVNDLFdBQVdDLEdBQWdCLEVBQUVDLEdBQWlCO0lBQzVELE1BQU1DLFdBQVdGLElBQUlHLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDO0lBQ2pDLE1BQU1DLFFBQVFMLElBQUlHLE9BQU8sQ0FBQ0csR0FBRyxDQUFDO0lBQzlCLE1BQU1DLGtCQUFrQjtRQUN0QjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7S0FDRDtJQUNELE1BQU0sRUFBRUMsUUFBUSxFQUFFQyxNQUFNLEVBQUUsR0FBR1QsSUFBSVUsT0FBTztJQUV4QyxNQUFNQyxlQUFlSixnQkFBZ0JLLElBQUksQ0FBQyxDQUFDQztRQUN6QyxJQUFJLE9BQU9BLFNBQVMsVUFBVTtZQUM1QixPQUFPQSxTQUFTTDtRQUNsQixPQUFPLElBQUlLLGdCQUFnQkMsUUFBUTtZQUNqQyxNQUFNQyxRQUFRUCxTQUFTTyxLQUFLLENBQUNGO1lBRTdCLElBQUlFLE9BQU8sT0FBTztRQUNwQjtRQUVBLE9BQU87SUFDVDtJQUVBLElBQUlKLGNBQWM7UUFDaEIsSUFBSVQsVUFBVTtZQUNaLE9BQU9KLHFEQUFZQSxDQUFDa0IsSUFBSTtRQUMxQixPQUFPO1lBQ0wsT0FBT2xCLHFEQUFZQSxDQUFDbUIsUUFBUSxDQUFDLElBQUlDLElBQUksWUFBWVQ7UUFDbkQ7SUFDRixPQUFPO1FBQ0wsSUFBSVAsVUFBVTtZQUNaLE9BQU9KLHFEQUFZQSxDQUFDbUIsUUFBUSxDQUFDLElBQUlDLElBQUksS0FBS1Q7UUFDNUMsT0FBTztZQUNMLE9BQU9YLHFEQUFZQSxDQUFDa0IsSUFBSTtRQUMxQjtJQUNGO0FBQ0Y7QUFFTyxNQUFNRyxTQUFTO0lBQ3BCQyxTQUFTO1FBQ1A7S0FDRDtJQUNEQyxRQUFRO0FBQ1YsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvbWlkZGxld2FyZS50cz9kMTk5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXF1ZXN0LCBOZXh0UmVzcG9uc2UgfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBtaWRkbGV3YXJlKHJlcTogTmV4dFJlcXVlc3QsIHJlczogTmV4dFJlc3BvbnNlKSB7XHJcbiAgY29uc3QgaGFzVG9rZW4gPSByZXEuY29va2llcy5oYXMoXCJ0b2tlblwiKTtcclxuICBjb25zdCB0b2tlbiA9IHJlcS5jb29raWVzLmdldChcInRva2VuXCIpO1xyXG4gIGNvbnN0IGF1dGhvcml6ZWRQYXRocyA9IFtcclxuICAgIFwiL1wiLFxyXG4gICAgXCIvY291cnNlc1wiLFxyXG4gICAgL15cXC9jb3Vyc2VzXFwvKFteXFwvXSspJC8sXHJcbiAgICAvXlxcL2NvdXJzZXNcXC9cXGQrXFwvcXVpenokLyxcclxuICAgIC9eXFwvY291cnNlc1xcL1xcZCtcXC9taXNzaW9ucyQvLFxyXG4gICAgXCIvbmV3XCIsXHJcbiAgXTtcclxuICBjb25zdCB7IHBhdGhuYW1lLCBvcmlnaW4gfSA9IHJlcS5uZXh0VXJsO1xyXG5cclxuICBjb25zdCBpc0F1dGhvcml6ZWQgPSBhdXRob3JpemVkUGF0aHMuc29tZSgocGF0aCkgPT4ge1xyXG4gICAgaWYgKHR5cGVvZiBwYXRoID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgIHJldHVybiBwYXRoID09PSBwYXRobmFtZTtcclxuICAgIH0gZWxzZSBpZiAocGF0aCBpbnN0YW5jZW9mIFJlZ0V4cCkge1xyXG4gICAgICBjb25zdCBtYXRjaCA9IHBhdGhuYW1lLm1hdGNoKHBhdGgpO1xyXG5cclxuICAgICAgaWYgKG1hdGNoKSByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfSk7XHJcblxyXG4gIGlmIChpc0F1dGhvcml6ZWQpIHtcclxuICAgIGlmIChoYXNUb2tlbikge1xyXG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLm5leHQoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UucmVkaXJlY3QobmV3IFVSTChcIi9zaWduLWluXCIsIG9yaWdpbikpO1xyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICBpZiAoaGFzVG9rZW4pIHtcclxuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5yZWRpcmVjdChuZXcgVVJMKFwiL1wiLCBvcmlnaW4pKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UubmV4dCgpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGNvbmZpZyA9IHtcclxuICBtYXRjaGVyOiBbXHJcbiAgICBcIi8oKD8hYXBpfF9uZXh0L3N0YXRpY3xfbmV4dC9pbWFnZXxmYXZpY29uLmljb3wubXA0fC53ZWJtfC5tb3YpLiopXCIsXHJcbiAgXSxcclxuICBzdGF0aWM6IHRydWUsXHJcbn07XHJcbiJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJtaWRkbGV3YXJlIiwicmVxIiwicmVzIiwiaGFzVG9rZW4iLCJjb29raWVzIiwiaGFzIiwidG9rZW4iLCJnZXQiLCJhdXRob3JpemVkUGF0aHMiLCJwYXRobmFtZSIsIm9yaWdpbiIsIm5leHRVcmwiLCJpc0F1dGhvcml6ZWQiLCJzb21lIiwicGF0aCIsIlJlZ0V4cCIsIm1hdGNoIiwibmV4dCIsInJlZGlyZWN0IiwiVVJMIiwiY29uZmlnIiwibWF0Y2hlciIsInN0YXRpYyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(middleware)/./src/middleware.ts\n");

/***/ })

});