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
exports.id = "pages/api/notes";
exports.ids = ["pages/api/notes"];
exports.modules = {

/***/ "next-connect":
/*!*******************************!*\
  !*** external "next-connect" ***!
  \*******************************/
/***/ ((module) => {

module.exports = import("next-connect");;

/***/ }),

/***/ "(api)/./pages/api/notes/index.js":
/*!**********************************!*\
  !*** ./pages/api/notes/index.js ***!
  \**********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-connect */ \"next-connect\");\n/* harmony import */ var _src_data_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../src/data/data */ \"(api)/./src/data/data.js\");\n/* harmony import */ var _src_data_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_src_data_data__WEBPACK_IMPORTED_MODULE_1__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_connect__WEBPACK_IMPORTED_MODULE_0__]);\nnext_connect__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_connect__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().post((req, res)=>{\n    const note = {\n        ...req.body,\n        id: Date.now().toString()\n    };\n    _src_data_data__WEBPACK_IMPORTED_MODULE_1___default().push(note);\n    res.json({\n        data: (_src_data_data__WEBPACK_IMPORTED_MODULE_1___default())\n    });\n}).get((req, res)=>{\n    res.json({\n        data: (_src_data_data__WEBPACK_IMPORTED_MODULE_1___default())\n    });\n}));\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbm90ZXMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUE4QjtBQUNhO0FBRTNDLGlFQUFlQSx3REFBRSxFQUFFLENBQ2hCRSxJQUFJLENBQUMsQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEdBQUs7SUFDbEIsTUFBTUMsSUFBSSxHQUFHO1FBQ1gsR0FBR0YsR0FBRyxDQUFDRyxJQUFJO1FBQ1hDLEVBQUUsRUFBRUMsSUFBSSxDQUFDQyxHQUFHLEVBQUUsQ0FBQ0MsUUFBUSxFQUFFO0tBQzFCO0lBQ0RULDBEQUFVLENBQUNJLElBQUksQ0FBQyxDQUFDO0lBQ2pCRCxHQUFHLENBQUNRLElBQUksQ0FBQztRQUFFQyxJQUFJLEVBQUVaLHVEQUFLO0tBQUUsQ0FBQyxDQUFDO0NBQzNCLENBQUMsQ0FDRGEsR0FBRyxDQUFDLENBQUNYLEdBQUcsRUFBRUMsR0FBRyxHQUFLO0lBQ2pCQSxHQUFHLENBQUNRLElBQUksQ0FBQztRQUFFQyxJQUFJLEVBQUVaLHVEQUFLO0tBQUUsQ0FBQyxDQUFDO0NBQzNCLENBQUMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3ZhbmlsYW5leHQvLi9wYWdlcy9hcGkvbm90ZXMvaW5kZXguanM/MTBhNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbmMgZnJvbSBcIm5leHQtY29ubmVjdFwiO1xuaW1wb3J0IG5vdGVzIGZyb20gXCIuLi8uLi8uLi9zcmMvZGF0YS9kYXRhXCI7XG5cbmV4cG9ydCBkZWZhdWx0IG5jKClcbiAgLnBvc3QoKHJlcSwgcmVzKSA9PiB7XG4gICAgY29uc3Qgbm90ZSA9IHtcbiAgICAgIC4uLnJlcS5ib2R5LFxuICAgICAgaWQ6IERhdGUubm93KCkudG9TdHJpbmcoKSxcbiAgICB9O1xuICAgIG5vdGVzLnB1c2gobm90ZSk7XG4gICAgcmVzLmpzb24oeyBkYXRhOiBub3RlcyB9KTtcbiAgfSlcbiAgLmdldCgocmVxLCByZXMpID0+IHtcbiAgICByZXMuanNvbih7IGRhdGE6IG5vdGVzIH0pO1xuICB9KTtcbiJdLCJuYW1lcyI6WyJuYyIsIm5vdGVzIiwicG9zdCIsInJlcSIsInJlcyIsIm5vdGUiLCJib2R5IiwiaWQiLCJEYXRlIiwibm93IiwidG9TdHJpbmciLCJwdXNoIiwianNvbiIsImRhdGEiLCJnZXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/notes/index.js\n");

/***/ }),

/***/ "(api)/./src/data/data.js":
/*!**************************!*\
  !*** ./src/data/data.js ***!
  \**************************/
/***/ ((module) => {

eval("\nconst notes = [];\nmodule.exports = notes;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvZGF0YS9kYXRhLmpzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQUEsTUFBTUEsS0FBSyxHQUFHLEVBQUU7QUFFaEJDLE1BQU0sQ0FBQ0MsT0FBTyxHQUFHRixLQUFLLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92YW5pbGFuZXh0Ly4vc3JjL2RhdGEvZGF0YS5qcz80ZjM0Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IG5vdGVzID0gW107XG5cbm1vZHVsZS5leHBvcnRzID0gbm90ZXM7XG4iXSwibmFtZXMiOlsibm90ZXMiLCJtb2R1bGUiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/data/data.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/notes/index.js"));
module.exports = __webpack_exports__;

})();