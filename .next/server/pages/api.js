"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api";
exports.ids = ["pages/api"];
exports.modules = {

/***/ "./pages/api/index.js":
/*!****************************!*\
  !*** ./pages/api/index.js ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-connect */ \"next-connect\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_connect__WEBPACK_IMPORTED_MODULE_0__]);\nnext_connect__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst handler = (0,next_connect__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().get((req, res)=>{\n    res.json({\n        message: \"get\"\n    });\n}).post((req, res)=>{\n    res.json({\n        message: \"post\"\n    });\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBOEI7QUFFOUIsTUFBTUMsT0FBTyxHQUFHRCx3REFBRSxFQUFFLENBQ2pCRSxHQUFHLENBQUMsQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEdBQUs7SUFDakJBLEdBQUcsQ0FBQ0MsSUFBSSxDQUFDO1FBQUVDLE9BQU8sRUFBRSxLQUFLO0tBQUUsQ0FBQyxDQUFDO0NBQzlCLENBQUMsQ0FDREMsSUFBSSxDQUFDLENBQUNKLEdBQUcsRUFBRUMsR0FBRyxHQUFLO0lBQ2xCQSxHQUFHLENBQUNDLElBQUksQ0FBQztRQUFFQyxPQUFPLEVBQUUsTUFBTTtLQUFFLENBQUMsQ0FBQztDQUMvQixDQUFDO0FBRUosaUVBQWVMLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3ZhbmlsYW5leHQvLi9wYWdlcy9hcGkvaW5kZXguanM/YzVmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbmMgZnJvbSBcIm5leHQtY29ubmVjdFwiO1xuXG5jb25zdCBoYW5kbGVyID0gbmMoKVxuICAuZ2V0KChyZXEsIHJlcykgPT4ge1xuICAgIHJlcy5qc29uKHsgbWVzc2FnZTogXCJnZXRcIiB9KTtcbiAgfSlcbiAgLnBvc3QoKHJlcSwgcmVzKSA9PiB7XG4gICAgcmVzLmpzb24oeyBtZXNzYWdlOiBcInBvc3RcIiB9KTtcbiAgfSk7XG5cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXI7XG4iXSwibmFtZXMiOlsibmMiLCJoYW5kbGVyIiwiZ2V0IiwicmVxIiwicmVzIiwianNvbiIsIm1lc3NhZ2UiLCJwb3N0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/index.js\n");

/***/ }),

/***/ "next-connect":
/*!*******************************!*\
  !*** external "next-connect" ***!
  \*******************************/
/***/ ((module) => {

module.exports = import("next-connect");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/index.js"));
module.exports = __webpack_exports__;

})();