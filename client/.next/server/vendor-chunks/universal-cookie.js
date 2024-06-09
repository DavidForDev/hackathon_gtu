"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/universal-cookie";
exports.ids = ["vendor-chunks/universal-cookie"];
exports.modules = {

/***/ "(ssr)/./node_modules/universal-cookie/esm/index.mjs":
/*!*****************************************************!*\
  !*** ./node_modules/universal-cookie/esm/index.mjs ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Cookies)\n/* harmony export */ });\n/*!\n * cookie\n * Copyright(c) 2012-2014 Roman Shtylman\n * Copyright(c) 2015 Douglas Christopher Wilson\n * MIT Licensed\n */\n\n/**\n * Module exports.\n * @public\n */\n\nvar parse_1 = parse;\nvar serialize_1 = serialize;\n\n/**\n * Module variables.\n * @private\n */\n\nvar __toString = Object.prototype.toString;\n\n/**\n * RegExp to match field-content in RFC 7230 sec 3.2\n *\n * field-content = field-vchar [ 1*( SP / HTAB ) field-vchar ]\n * field-vchar   = VCHAR / obs-text\n * obs-text      = %x80-FF\n */\n\nvar fieldContentRegExp = /^[\\u0009\\u0020-\\u007e\\u0080-\\u00ff]+$/;\n\n/**\n * Parse a cookie header.\n *\n * Parse the given cookie header string into an object\n * The object has the various cookies as keys(names) => values\n *\n * @param {string} str\n * @param {object} [options]\n * @return {object}\n * @public\n */\n\nfunction parse(str, options) {\n  if (typeof str !== 'string') {\n    throw new TypeError('argument str must be a string');\n  }\n\n  var obj = {};\n  var opt = options || {};\n  var dec = opt.decode || decode;\n\n  var index = 0;\n  while (index < str.length) {\n    var eqIdx = str.indexOf('=', index);\n\n    // no more cookie pairs\n    if (eqIdx === -1) {\n      break\n    }\n\n    var endIdx = str.indexOf(';', index);\n\n    if (endIdx === -1) {\n      endIdx = str.length;\n    } else if (endIdx < eqIdx) {\n      // backtrack on prior semicolon\n      index = str.lastIndexOf(';', eqIdx - 1) + 1;\n      continue\n    }\n\n    var key = str.slice(index, eqIdx).trim();\n\n    // only assign once\n    if (undefined === obj[key]) {\n      var val = str.slice(eqIdx + 1, endIdx).trim();\n\n      // quoted values\n      if (val.charCodeAt(0) === 0x22) {\n        val = val.slice(1, -1);\n      }\n\n      obj[key] = tryDecode(val, dec);\n    }\n\n    index = endIdx + 1;\n  }\n\n  return obj;\n}\n\n/**\n * Serialize data into a cookie header.\n *\n * Serialize the a name value pair into a cookie string suitable for\n * http headers. An optional options object specified cookie parameters.\n *\n * serialize('foo', 'bar', { httpOnly: true })\n *   => \"foo=bar; httpOnly\"\n *\n * @param {string} name\n * @param {string} val\n * @param {object} [options]\n * @return {string}\n * @public\n */\n\nfunction serialize(name, val, options) {\n  var opt = options || {};\n  var enc = opt.encode || encode;\n\n  if (typeof enc !== 'function') {\n    throw new TypeError('option encode is invalid');\n  }\n\n  if (!fieldContentRegExp.test(name)) {\n    throw new TypeError('argument name is invalid');\n  }\n\n  var value = enc(val);\n\n  if (value && !fieldContentRegExp.test(value)) {\n    throw new TypeError('argument val is invalid');\n  }\n\n  var str = name + '=' + value;\n\n  if (null != opt.maxAge) {\n    var maxAge = opt.maxAge - 0;\n\n    if (isNaN(maxAge) || !isFinite(maxAge)) {\n      throw new TypeError('option maxAge is invalid')\n    }\n\n    str += '; Max-Age=' + Math.floor(maxAge);\n  }\n\n  if (opt.domain) {\n    if (!fieldContentRegExp.test(opt.domain)) {\n      throw new TypeError('option domain is invalid');\n    }\n\n    str += '; Domain=' + opt.domain;\n  }\n\n  if (opt.path) {\n    if (!fieldContentRegExp.test(opt.path)) {\n      throw new TypeError('option path is invalid');\n    }\n\n    str += '; Path=' + opt.path;\n  }\n\n  if (opt.expires) {\n    var expires = opt.expires;\n\n    if (!isDate(expires) || isNaN(expires.valueOf())) {\n      throw new TypeError('option expires is invalid');\n    }\n\n    str += '; Expires=' + expires.toUTCString();\n  }\n\n  if (opt.httpOnly) {\n    str += '; HttpOnly';\n  }\n\n  if (opt.secure) {\n    str += '; Secure';\n  }\n\n  if (opt.partitioned) {\n    str += '; Partitioned';\n  }\n\n  if (opt.priority) {\n    var priority = typeof opt.priority === 'string'\n      ? opt.priority.toLowerCase()\n      : opt.priority;\n\n    switch (priority) {\n      case 'low':\n        str += '; Priority=Low';\n        break\n      case 'medium':\n        str += '; Priority=Medium';\n        break\n      case 'high':\n        str += '; Priority=High';\n        break\n      default:\n        throw new TypeError('option priority is invalid')\n    }\n  }\n\n  if (opt.sameSite) {\n    var sameSite = typeof opt.sameSite === 'string'\n      ? opt.sameSite.toLowerCase() : opt.sameSite;\n\n    switch (sameSite) {\n      case true:\n        str += '; SameSite=Strict';\n        break;\n      case 'lax':\n        str += '; SameSite=Lax';\n        break;\n      case 'strict':\n        str += '; SameSite=Strict';\n        break;\n      case 'none':\n        str += '; SameSite=None';\n        break;\n      default:\n        throw new TypeError('option sameSite is invalid');\n    }\n  }\n\n  return str;\n}\n\n/**\n * URL-decode string value. Optimized to skip native call when no %.\n *\n * @param {string} str\n * @returns {string}\n */\n\nfunction decode (str) {\n  return str.indexOf('%') !== -1\n    ? decodeURIComponent(str)\n    : str\n}\n\n/**\n * URL-encode value.\n *\n * @param {string} val\n * @returns {string}\n */\n\nfunction encode (val) {\n  return encodeURIComponent(val)\n}\n\n/**\n * Determine if value is a Date.\n *\n * @param {*} val\n * @private\n */\n\nfunction isDate (val) {\n  return __toString.call(val) === '[object Date]' ||\n    val instanceof Date\n}\n\n/**\n * Try decoding a string using a decoding function.\n *\n * @param {string} str\n * @param {function} decode\n * @private\n */\n\nfunction tryDecode(str, decode) {\n  try {\n    return decode(str);\n  } catch (e) {\n    return str;\n  }\n}\n\nfunction hasDocumentCookie() {\n    const testingValue = typeof global === 'undefined'\n        ? undefined\n        : global.TEST_HAS_DOCUMENT_COOKIE;\n    if (typeof testingValue === 'boolean') {\n        return testingValue;\n    }\n    // Can we get/set cookies on document.cookie?\n    return typeof document === 'object' && typeof document.cookie === 'string';\n}\nfunction parseCookies(cookies) {\n    if (typeof cookies === 'string') {\n        return parse_1(cookies);\n    }\n    else if (typeof cookies === 'object' && cookies !== null) {\n        return cookies;\n    }\n    else {\n        return {};\n    }\n}\nfunction readCookie(value, options = {}) {\n    const cleanValue = cleanupCookieValue(value);\n    if (!options.doNotParse) {\n        try {\n            return JSON.parse(cleanValue);\n        }\n        catch (e) {\n            // At least we tried\n        }\n    }\n    // Ignore clean value if we failed the deserialization\n    // It is not relevant anymore to trim those values\n    return value;\n}\nfunction cleanupCookieValue(value) {\n    // express prepend j: before serializing a cookie\n    if (value && value[0] === 'j' && value[1] === ':') {\n        return value.substr(2);\n    }\n    return value;\n}\n\nclass Cookies {\n    constructor(cookies, defaultSetOptions = {}) {\n        this.changeListeners = [];\n        this.HAS_DOCUMENT_COOKIE = false;\n        this.update = () => {\n            if (!this.HAS_DOCUMENT_COOKIE) {\n                return;\n            }\n            const previousCookies = this.cookies;\n            this.cookies = parse_1(document.cookie);\n            this._checkChanges(previousCookies);\n        };\n        const domCookies = typeof document === 'undefined' ? '' : document.cookie;\n        this.cookies = parseCookies(cookies || domCookies);\n        this.defaultSetOptions = defaultSetOptions;\n        this.HAS_DOCUMENT_COOKIE = hasDocumentCookie();\n    }\n    _emitChange(params) {\n        for (let i = 0; i < this.changeListeners.length; ++i) {\n            this.changeListeners[i](params);\n        }\n    }\n    _checkChanges(previousCookies) {\n        const names = new Set(Object.keys(previousCookies).concat(Object.keys(this.cookies)));\n        names.forEach((name) => {\n            if (previousCookies[name] !== this.cookies[name]) {\n                this._emitChange({\n                    name,\n                    value: readCookie(this.cookies[name]),\n                });\n            }\n        });\n    }\n    _startPolling() {\n        this.pollingInterval = setInterval(this.update, 300);\n    }\n    _stopPolling() {\n        if (this.pollingInterval) {\n            clearInterval(this.pollingInterval);\n        }\n    }\n    get(name, options = {}) {\n        if (!options.doNotUpdate) {\n            this.update();\n        }\n        return readCookie(this.cookies[name], options);\n    }\n    getAll(options = {}) {\n        if (!options.doNotUpdate) {\n            this.update();\n        }\n        const result = {};\n        for (let name in this.cookies) {\n            result[name] = readCookie(this.cookies[name], options);\n        }\n        return result;\n    }\n    set(name, value, options) {\n        if (options) {\n            options = Object.assign(Object.assign({}, this.defaultSetOptions), options);\n        }\n        else {\n            options = this.defaultSetOptions;\n        }\n        const stringValue = typeof value === 'string' ? value : JSON.stringify(value);\n        this.cookies = Object.assign(Object.assign({}, this.cookies), { [name]: stringValue });\n        if (this.HAS_DOCUMENT_COOKIE) {\n            document.cookie = serialize_1(name, stringValue, options);\n        }\n        this._emitChange({ name, value, options });\n    }\n    remove(name, options) {\n        const finalOptions = (options = Object.assign(Object.assign(Object.assign({}, this.defaultSetOptions), options), { expires: new Date(1970, 1, 1, 0, 0, 1), maxAge: 0 }));\n        this.cookies = Object.assign({}, this.cookies);\n        delete this.cookies[name];\n        if (this.HAS_DOCUMENT_COOKIE) {\n            document.cookie = serialize_1(name, '', finalOptions);\n        }\n        this._emitChange({ name, value: undefined, options });\n    }\n    addChangeListener(callback) {\n        this.changeListeners.push(callback);\n        if (this.HAS_DOCUMENT_COOKIE && this.changeListeners.length === 1) {\n            if (typeof window === 'object' && 'cookieStore' in window) {\n                window.cookieStore.addEventListener('change', this.update);\n            }\n            else {\n                this._startPolling();\n            }\n        }\n    }\n    removeChangeListener(callback) {\n        const idx = this.changeListeners.indexOf(callback);\n        if (idx >= 0) {\n            this.changeListeners.splice(idx, 1);\n        }\n        if (this.HAS_DOCUMENT_COOKIE && this.changeListeners.length === 0) {\n            if (typeof window === 'object' && 'cookieStore' in window) {\n                window.cookieStore.removeEventListener('change', this.update);\n            }\n            else {\n                this._stopPolling();\n            }\n        }\n    }\n}\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdW5pdmVyc2FsLWNvb2tpZS9lc20vaW5kZXgubWpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsK0JBQStCOztBQUUvQjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsZ0NBQWdDO0FBQ2hDO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixnQkFBZ0I7QUFDN0Msa0JBQWtCO0FBQ2xCO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGNBQWM7QUFDZDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxjQUFjO0FBQ2Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsY0FBYztBQUNkOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGNBQWM7QUFDZDs7QUFFQTtBQUNBLGNBQWM7QUFDZDs7QUFFQTtBQUNBLGNBQWM7QUFDZDs7QUFFQTtBQUNBLGNBQWM7QUFDZDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLGFBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxHQUFHO0FBQ2Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsV0FBVyxVQUFVO0FBQ3JCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLCtDQUErQztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixpQ0FBaUM7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRDtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFELG1CQUFtQixxQkFBcUI7QUFDN0Y7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLHNCQUFzQjtBQUNqRDtBQUNBO0FBQ0Esb0ZBQW9GLHVDQUF1QyxtREFBbUQ7QUFDOUssdUNBQXVDO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLGlDQUFpQztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRThCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Ly4vbm9kZV9tb2R1bGVzL3VuaXZlcnNhbC1jb29raWUvZXNtL2luZGV4Lm1qcz8yYTVhIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogY29va2llXG4gKiBDb3B5cmlnaHQoYykgMjAxMi0yMDE0IFJvbWFuIFNodHlsbWFuXG4gKiBDb3B5cmlnaHQoYykgMjAxNSBEb3VnbGFzIENocmlzdG9waGVyIFdpbHNvblxuICogTUlUIExpY2Vuc2VkXG4gKi9cblxuLyoqXG4gKiBNb2R1bGUgZXhwb3J0cy5cbiAqIEBwdWJsaWNcbiAqL1xuXG52YXIgcGFyc2VfMSA9IHBhcnNlO1xudmFyIHNlcmlhbGl6ZV8xID0gc2VyaWFsaXplO1xuXG4vKipcbiAqIE1vZHVsZSB2YXJpYWJsZXMuXG4gKiBAcHJpdmF0ZVxuICovXG5cbnZhciBfX3RvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcblxuLyoqXG4gKiBSZWdFeHAgdG8gbWF0Y2ggZmllbGQtY29udGVudCBpbiBSRkMgNzIzMCBzZWMgMy4yXG4gKlxuICogZmllbGQtY29udGVudCA9IGZpZWxkLXZjaGFyIFsgMSooIFNQIC8gSFRBQiApIGZpZWxkLXZjaGFyIF1cbiAqIGZpZWxkLXZjaGFyICAgPSBWQ0hBUiAvIG9icy10ZXh0XG4gKiBvYnMtdGV4dCAgICAgID0gJXg4MC1GRlxuICovXG5cbnZhciBmaWVsZENvbnRlbnRSZWdFeHAgPSAvXltcXHUwMDA5XFx1MDAyMC1cXHUwMDdlXFx1MDA4MC1cXHUwMGZmXSskLztcblxuLyoqXG4gKiBQYXJzZSBhIGNvb2tpZSBoZWFkZXIuXG4gKlxuICogUGFyc2UgdGhlIGdpdmVuIGNvb2tpZSBoZWFkZXIgc3RyaW5nIGludG8gYW4gb2JqZWN0XG4gKiBUaGUgb2JqZWN0IGhhcyB0aGUgdmFyaW91cyBjb29raWVzIGFzIGtleXMobmFtZXMpID0+IHZhbHVlc1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cbiAqIEByZXR1cm4ge29iamVjdH1cbiAqIEBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBwYXJzZShzdHIsIG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBzdHIgIT09ICdzdHJpbmcnKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignYXJndW1lbnQgc3RyIG11c3QgYmUgYSBzdHJpbmcnKTtcbiAgfVxuXG4gIHZhciBvYmogPSB7fTtcbiAgdmFyIG9wdCA9IG9wdGlvbnMgfHwge307XG4gIHZhciBkZWMgPSBvcHQuZGVjb2RlIHx8IGRlY29kZTtcblxuICB2YXIgaW5kZXggPSAwO1xuICB3aGlsZSAoaW5kZXggPCBzdHIubGVuZ3RoKSB7XG4gICAgdmFyIGVxSWR4ID0gc3RyLmluZGV4T2YoJz0nLCBpbmRleCk7XG5cbiAgICAvLyBubyBtb3JlIGNvb2tpZSBwYWlyc1xuICAgIGlmIChlcUlkeCA9PT0gLTEpIHtcbiAgICAgIGJyZWFrXG4gICAgfVxuXG4gICAgdmFyIGVuZElkeCA9IHN0ci5pbmRleE9mKCc7JywgaW5kZXgpO1xuXG4gICAgaWYgKGVuZElkeCA9PT0gLTEpIHtcbiAgICAgIGVuZElkeCA9IHN0ci5sZW5ndGg7XG4gICAgfSBlbHNlIGlmIChlbmRJZHggPCBlcUlkeCkge1xuICAgICAgLy8gYmFja3RyYWNrIG9uIHByaW9yIHNlbWljb2xvblxuICAgICAgaW5kZXggPSBzdHIubGFzdEluZGV4T2YoJzsnLCBlcUlkeCAtIDEpICsgMTtcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgdmFyIGtleSA9IHN0ci5zbGljZShpbmRleCwgZXFJZHgpLnRyaW0oKTtcblxuICAgIC8vIG9ubHkgYXNzaWduIG9uY2VcbiAgICBpZiAodW5kZWZpbmVkID09PSBvYmpba2V5XSkge1xuICAgICAgdmFyIHZhbCA9IHN0ci5zbGljZShlcUlkeCArIDEsIGVuZElkeCkudHJpbSgpO1xuXG4gICAgICAvLyBxdW90ZWQgdmFsdWVzXG4gICAgICBpZiAodmFsLmNoYXJDb2RlQXQoMCkgPT09IDB4MjIpIHtcbiAgICAgICAgdmFsID0gdmFsLnNsaWNlKDEsIC0xKTtcbiAgICAgIH1cblxuICAgICAgb2JqW2tleV0gPSB0cnlEZWNvZGUodmFsLCBkZWMpO1xuICAgIH1cblxuICAgIGluZGV4ID0gZW5kSWR4ICsgMTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59XG5cbi8qKlxuICogU2VyaWFsaXplIGRhdGEgaW50byBhIGNvb2tpZSBoZWFkZXIuXG4gKlxuICogU2VyaWFsaXplIHRoZSBhIG5hbWUgdmFsdWUgcGFpciBpbnRvIGEgY29va2llIHN0cmluZyBzdWl0YWJsZSBmb3JcbiAqIGh0dHAgaGVhZGVycy4gQW4gb3B0aW9uYWwgb3B0aW9ucyBvYmplY3Qgc3BlY2lmaWVkIGNvb2tpZSBwYXJhbWV0ZXJzLlxuICpcbiAqIHNlcmlhbGl6ZSgnZm9vJywgJ2JhcicsIHsgaHR0cE9ubHk6IHRydWUgfSlcbiAqICAgPT4gXCJmb289YmFyOyBodHRwT25seVwiXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWxcbiAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqIEBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBzZXJpYWxpemUobmFtZSwgdmFsLCBvcHRpb25zKSB7XG4gIHZhciBvcHQgPSBvcHRpb25zIHx8IHt9O1xuICB2YXIgZW5jID0gb3B0LmVuY29kZSB8fCBlbmNvZGU7XG5cbiAgaWYgKHR5cGVvZiBlbmMgIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdvcHRpb24gZW5jb2RlIGlzIGludmFsaWQnKTtcbiAgfVxuXG4gIGlmICghZmllbGRDb250ZW50UmVnRXhwLnRlc3QobmFtZSkpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdhcmd1bWVudCBuYW1lIGlzIGludmFsaWQnKTtcbiAgfVxuXG4gIHZhciB2YWx1ZSA9IGVuYyh2YWwpO1xuXG4gIGlmICh2YWx1ZSAmJiAhZmllbGRDb250ZW50UmVnRXhwLnRlc3QodmFsdWUpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignYXJndW1lbnQgdmFsIGlzIGludmFsaWQnKTtcbiAgfVxuXG4gIHZhciBzdHIgPSBuYW1lICsgJz0nICsgdmFsdWU7XG5cbiAgaWYgKG51bGwgIT0gb3B0Lm1heEFnZSkge1xuICAgIHZhciBtYXhBZ2UgPSBvcHQubWF4QWdlIC0gMDtcblxuICAgIGlmIChpc05hTihtYXhBZ2UpIHx8ICFpc0Zpbml0ZShtYXhBZ2UpKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdvcHRpb24gbWF4QWdlIGlzIGludmFsaWQnKVxuICAgIH1cblxuICAgIHN0ciArPSAnOyBNYXgtQWdlPScgKyBNYXRoLmZsb29yKG1heEFnZSk7XG4gIH1cblxuICBpZiAob3B0LmRvbWFpbikge1xuICAgIGlmICghZmllbGRDb250ZW50UmVnRXhwLnRlc3Qob3B0LmRvbWFpbikpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ29wdGlvbiBkb21haW4gaXMgaW52YWxpZCcpO1xuICAgIH1cblxuICAgIHN0ciArPSAnOyBEb21haW49JyArIG9wdC5kb21haW47XG4gIH1cblxuICBpZiAob3B0LnBhdGgpIHtcbiAgICBpZiAoIWZpZWxkQ29udGVudFJlZ0V4cC50ZXN0KG9wdC5wYXRoKSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignb3B0aW9uIHBhdGggaXMgaW52YWxpZCcpO1xuICAgIH1cblxuICAgIHN0ciArPSAnOyBQYXRoPScgKyBvcHQucGF0aDtcbiAgfVxuXG4gIGlmIChvcHQuZXhwaXJlcykge1xuICAgIHZhciBleHBpcmVzID0gb3B0LmV4cGlyZXM7XG5cbiAgICBpZiAoIWlzRGF0ZShleHBpcmVzKSB8fCBpc05hTihleHBpcmVzLnZhbHVlT2YoKSkpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ29wdGlvbiBleHBpcmVzIGlzIGludmFsaWQnKTtcbiAgICB9XG5cbiAgICBzdHIgKz0gJzsgRXhwaXJlcz0nICsgZXhwaXJlcy50b1VUQ1N0cmluZygpO1xuICB9XG5cbiAgaWYgKG9wdC5odHRwT25seSkge1xuICAgIHN0ciArPSAnOyBIdHRwT25seSc7XG4gIH1cblxuICBpZiAob3B0LnNlY3VyZSkge1xuICAgIHN0ciArPSAnOyBTZWN1cmUnO1xuICB9XG5cbiAgaWYgKG9wdC5wYXJ0aXRpb25lZCkge1xuICAgIHN0ciArPSAnOyBQYXJ0aXRpb25lZCc7XG4gIH1cblxuICBpZiAob3B0LnByaW9yaXR5KSB7XG4gICAgdmFyIHByaW9yaXR5ID0gdHlwZW9mIG9wdC5wcmlvcml0eSA9PT0gJ3N0cmluZydcbiAgICAgID8gb3B0LnByaW9yaXR5LnRvTG93ZXJDYXNlKClcbiAgICAgIDogb3B0LnByaW9yaXR5O1xuXG4gICAgc3dpdGNoIChwcmlvcml0eSkge1xuICAgICAgY2FzZSAnbG93JzpcbiAgICAgICAgc3RyICs9ICc7IFByaW9yaXR5PUxvdyc7XG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdtZWRpdW0nOlxuICAgICAgICBzdHIgKz0gJzsgUHJpb3JpdHk9TWVkaXVtJztcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ2hpZ2gnOlxuICAgICAgICBzdHIgKz0gJzsgUHJpb3JpdHk9SGlnaCc7XG4gICAgICAgIGJyZWFrXG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdvcHRpb24gcHJpb3JpdHkgaXMgaW52YWxpZCcpXG4gICAgfVxuICB9XG5cbiAgaWYgKG9wdC5zYW1lU2l0ZSkge1xuICAgIHZhciBzYW1lU2l0ZSA9IHR5cGVvZiBvcHQuc2FtZVNpdGUgPT09ICdzdHJpbmcnXG4gICAgICA/IG9wdC5zYW1lU2l0ZS50b0xvd2VyQ2FzZSgpIDogb3B0LnNhbWVTaXRlO1xuXG4gICAgc3dpdGNoIChzYW1lU2l0ZSkge1xuICAgICAgY2FzZSB0cnVlOlxuICAgICAgICBzdHIgKz0gJzsgU2FtZVNpdGU9U3RyaWN0JztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdsYXgnOlxuICAgICAgICBzdHIgKz0gJzsgU2FtZVNpdGU9TGF4JztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdzdHJpY3QnOlxuICAgICAgICBzdHIgKz0gJzsgU2FtZVNpdGU9U3RyaWN0JztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdub25lJzpcbiAgICAgICAgc3RyICs9ICc7IFNhbWVTaXRlPU5vbmUnO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ29wdGlvbiBzYW1lU2l0ZSBpcyBpbnZhbGlkJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0cjtcbn1cblxuLyoqXG4gKiBVUkwtZGVjb2RlIHN0cmluZyB2YWx1ZS4gT3B0aW1pemVkIHRvIHNraXAgbmF0aXZlIGNhbGwgd2hlbiBubyAlLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cblxuZnVuY3Rpb24gZGVjb2RlIChzdHIpIHtcbiAgcmV0dXJuIHN0ci5pbmRleE9mKCclJykgIT09IC0xXG4gICAgPyBkZWNvZGVVUklDb21wb25lbnQoc3RyKVxuICAgIDogc3RyXG59XG5cbi8qKlxuICogVVJMLWVuY29kZSB2YWx1ZS5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5cbmZ1bmN0aW9uIGVuY29kZSAodmFsKSB7XG4gIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQodmFsKVxufVxuXG4vKipcbiAqIERldGVybWluZSBpZiB2YWx1ZSBpcyBhIERhdGUuXG4gKlxuICogQHBhcmFtIHsqfSB2YWxcbiAqIEBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gaXNEYXRlICh2YWwpIHtcbiAgcmV0dXJuIF9fdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBEYXRlXScgfHxcbiAgICB2YWwgaW5zdGFuY2VvZiBEYXRlXG59XG5cbi8qKlxuICogVHJ5IGRlY29kaW5nIGEgc3RyaW5nIHVzaW5nIGEgZGVjb2RpbmcgZnVuY3Rpb24uXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHN0clxuICogQHBhcmFtIHtmdW5jdGlvbn0gZGVjb2RlXG4gKiBAcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIHRyeURlY29kZShzdHIsIGRlY29kZSkge1xuICB0cnkge1xuICAgIHJldHVybiBkZWNvZGUoc3RyKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBzdHI7XG4gIH1cbn1cblxuZnVuY3Rpb24gaGFzRG9jdW1lbnRDb29raWUoKSB7XG4gICAgY29uc3QgdGVzdGluZ1ZhbHVlID0gdHlwZW9mIGdsb2JhbCA9PT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgPyB1bmRlZmluZWRcbiAgICAgICAgOiBnbG9iYWwuVEVTVF9IQVNfRE9DVU1FTlRfQ09PS0lFO1xuICAgIGlmICh0eXBlb2YgdGVzdGluZ1ZhbHVlID09PSAnYm9vbGVhbicpIHtcbiAgICAgICAgcmV0dXJuIHRlc3RpbmdWYWx1ZTtcbiAgICB9XG4gICAgLy8gQ2FuIHdlIGdldC9zZXQgY29va2llcyBvbiBkb2N1bWVudC5jb29raWU/XG4gICAgcmV0dXJuIHR5cGVvZiBkb2N1bWVudCA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIGRvY3VtZW50LmNvb2tpZSA9PT0gJ3N0cmluZyc7XG59XG5mdW5jdGlvbiBwYXJzZUNvb2tpZXMoY29va2llcykge1xuICAgIGlmICh0eXBlb2YgY29va2llcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIHBhcnNlXzEoY29va2llcyk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGVvZiBjb29raWVzID09PSAnb2JqZWN0JyAmJiBjb29raWVzICE9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBjb29raWVzO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHt9O1xuICAgIH1cbn1cbmZ1bmN0aW9uIHJlYWRDb29raWUodmFsdWUsIG9wdGlvbnMgPSB7fSkge1xuICAgIGNvbnN0IGNsZWFuVmFsdWUgPSBjbGVhbnVwQ29va2llVmFsdWUodmFsdWUpO1xuICAgIGlmICghb3B0aW9ucy5kb05vdFBhcnNlKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShjbGVhblZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgLy8gQXQgbGVhc3Qgd2UgdHJpZWRcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBJZ25vcmUgY2xlYW4gdmFsdWUgaWYgd2UgZmFpbGVkIHRoZSBkZXNlcmlhbGl6YXRpb25cbiAgICAvLyBJdCBpcyBub3QgcmVsZXZhbnQgYW55bW9yZSB0byB0cmltIHRob3NlIHZhbHVlc1xuICAgIHJldHVybiB2YWx1ZTtcbn1cbmZ1bmN0aW9uIGNsZWFudXBDb29raWVWYWx1ZSh2YWx1ZSkge1xuICAgIC8vIGV4cHJlc3MgcHJlcGVuZCBqOiBiZWZvcmUgc2VyaWFsaXppbmcgYSBjb29raWVcbiAgICBpZiAodmFsdWUgJiYgdmFsdWVbMF0gPT09ICdqJyAmJiB2YWx1ZVsxXSA9PT0gJzonKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZS5zdWJzdHIoMik7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZTtcbn1cblxuY2xhc3MgQ29va2llcyB7XG4gICAgY29uc3RydWN0b3IoY29va2llcywgZGVmYXVsdFNldE9wdGlvbnMgPSB7fSkge1xuICAgICAgICB0aGlzLmNoYW5nZUxpc3RlbmVycyA9IFtdO1xuICAgICAgICB0aGlzLkhBU19ET0NVTUVOVF9DT09LSUUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy51cGRhdGUgPSAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuSEFTX0RPQ1VNRU5UX0NPT0tJRSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHByZXZpb3VzQ29va2llcyA9IHRoaXMuY29va2llcztcbiAgICAgICAgICAgIHRoaXMuY29va2llcyA9IHBhcnNlXzEoZG9jdW1lbnQuY29va2llKTtcbiAgICAgICAgICAgIHRoaXMuX2NoZWNrQ2hhbmdlcyhwcmV2aW91c0Nvb2tpZXMpO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCBkb21Db29raWVzID0gdHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJyA/ICcnIDogZG9jdW1lbnQuY29va2llO1xuICAgICAgICB0aGlzLmNvb2tpZXMgPSBwYXJzZUNvb2tpZXMoY29va2llcyB8fCBkb21Db29raWVzKTtcbiAgICAgICAgdGhpcy5kZWZhdWx0U2V0T3B0aW9ucyA9IGRlZmF1bHRTZXRPcHRpb25zO1xuICAgICAgICB0aGlzLkhBU19ET0NVTUVOVF9DT09LSUUgPSBoYXNEb2N1bWVudENvb2tpZSgpO1xuICAgIH1cbiAgICBfZW1pdENoYW5nZShwYXJhbXMpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNoYW5nZUxpc3RlbmVycy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VMaXN0ZW5lcnNbaV0ocGFyYW1zKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBfY2hlY2tDaGFuZ2VzKHByZXZpb3VzQ29va2llcykge1xuICAgICAgICBjb25zdCBuYW1lcyA9IG5ldyBTZXQoT2JqZWN0LmtleXMocHJldmlvdXNDb29raWVzKS5jb25jYXQoT2JqZWN0LmtleXModGhpcy5jb29raWVzKSkpO1xuICAgICAgICBuYW1lcy5mb3JFYWNoKChuYW1lKSA9PiB7XG4gICAgICAgICAgICBpZiAocHJldmlvdXNDb29raWVzW25hbWVdICE9PSB0aGlzLmNvb2tpZXNbbmFtZV0pIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9lbWl0Q2hhbmdlKHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHJlYWRDb29raWUodGhpcy5jb29raWVzW25hbWVdKSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIF9zdGFydFBvbGxpbmcoKSB7XG4gICAgICAgIHRoaXMucG9sbGluZ0ludGVydmFsID0gc2V0SW50ZXJ2YWwodGhpcy51cGRhdGUsIDMwMCk7XG4gICAgfVxuICAgIF9zdG9wUG9sbGluZygpIHtcbiAgICAgICAgaWYgKHRoaXMucG9sbGluZ0ludGVydmFsKSB7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKHRoaXMucG9sbGluZ0ludGVydmFsKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXQobmFtZSwgb3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIGlmICghb3B0aW9ucy5kb05vdFVwZGF0ZSkge1xuICAgICAgICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVhZENvb2tpZSh0aGlzLmNvb2tpZXNbbmFtZV0sIG9wdGlvbnMpO1xuICAgIH1cbiAgICBnZXRBbGwob3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIGlmICghb3B0aW9ucy5kb05vdFVwZGF0ZSkge1xuICAgICAgICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCByZXN1bHQgPSB7fTtcbiAgICAgICAgZm9yIChsZXQgbmFtZSBpbiB0aGlzLmNvb2tpZXMpIHtcbiAgICAgICAgICAgIHJlc3VsdFtuYW1lXSA9IHJlYWRDb29raWUodGhpcy5jb29raWVzW25hbWVdLCBvcHRpb25zKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgICBzZXQobmFtZSwgdmFsdWUsIG9wdGlvbnMpIHtcbiAgICAgICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgICAgICAgIG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHRoaXMuZGVmYXVsdFNldE9wdGlvbnMpLCBvcHRpb25zKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG9wdGlvbnMgPSB0aGlzLmRlZmF1bHRTZXRPcHRpb25zO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHN0cmluZ1ZhbHVlID0gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyA/IHZhbHVlIDogSlNPTi5zdHJpbmdpZnkodmFsdWUpO1xuICAgICAgICB0aGlzLmNvb2tpZXMgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHRoaXMuY29va2llcyksIHsgW25hbWVdOiBzdHJpbmdWYWx1ZSB9KTtcbiAgICAgICAgaWYgKHRoaXMuSEFTX0RPQ1VNRU5UX0NPT0tJRSkge1xuICAgICAgICAgICAgZG9jdW1lbnQuY29va2llID0gc2VyaWFsaXplXzEobmFtZSwgc3RyaW5nVmFsdWUsIG9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2VtaXRDaGFuZ2UoeyBuYW1lLCB2YWx1ZSwgb3B0aW9ucyB9KTtcbiAgICB9XG4gICAgcmVtb3ZlKG5hbWUsIG9wdGlvbnMpIHtcbiAgICAgICAgY29uc3QgZmluYWxPcHRpb25zID0gKG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5kZWZhdWx0U2V0T3B0aW9ucyksIG9wdGlvbnMpLCB7IGV4cGlyZXM6IG5ldyBEYXRlKDE5NzAsIDEsIDEsIDAsIDAsIDEpLCBtYXhBZ2U6IDAgfSkpO1xuICAgICAgICB0aGlzLmNvb2tpZXMgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLmNvb2tpZXMpO1xuICAgICAgICBkZWxldGUgdGhpcy5jb29raWVzW25hbWVdO1xuICAgICAgICBpZiAodGhpcy5IQVNfRE9DVU1FTlRfQ09PS0lFKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5jb29raWUgPSBzZXJpYWxpemVfMShuYW1lLCAnJywgZmluYWxPcHRpb25zKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9lbWl0Q2hhbmdlKHsgbmFtZSwgdmFsdWU6IHVuZGVmaW5lZCwgb3B0aW9ucyB9KTtcbiAgICB9XG4gICAgYWRkQ2hhbmdlTGlzdGVuZXIoY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5jaGFuZ2VMaXN0ZW5lcnMucHVzaChjYWxsYmFjayk7XG4gICAgICAgIGlmICh0aGlzLkhBU19ET0NVTUVOVF9DT09LSUUgJiYgdGhpcy5jaGFuZ2VMaXN0ZW5lcnMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcgJiYgJ2Nvb2tpZVN0b3JlJyBpbiB3aW5kb3cpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cuY29va2llU3RvcmUuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy51cGRhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fc3RhcnRQb2xsaW5nKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVtb3ZlQ2hhbmdlTGlzdGVuZXIoY2FsbGJhY2spIHtcbiAgICAgICAgY29uc3QgaWR4ID0gdGhpcy5jaGFuZ2VMaXN0ZW5lcnMuaW5kZXhPZihjYWxsYmFjayk7XG4gICAgICAgIGlmIChpZHggPj0gMCkge1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VMaXN0ZW5lcnMuc3BsaWNlKGlkeCwgMSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuSEFTX0RPQ1VNRU5UX0NPT0tJRSAmJiB0aGlzLmNoYW5nZUxpc3RlbmVycy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JyAmJiAnY29va2llU3RvcmUnIGluIHdpbmRvdykge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5jb29raWVTdG9yZS5yZW1vdmVFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLnVwZGF0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9zdG9wUG9sbGluZygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgeyBDb29raWVzIGFzIGRlZmF1bHQgfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/universal-cookie/esm/index.mjs\n");

/***/ })

};
;