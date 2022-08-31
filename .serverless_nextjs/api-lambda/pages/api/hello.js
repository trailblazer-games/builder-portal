"use strict";
(() => {
var exports = {};
exports.id = 453;
exports.ids = [453];
exports.modules = {

/***/ 5360:
/***/ ((module) => {

module.exports = require("@next/env");

/***/ }),

/***/ 252:
/***/ ((module) => {

module.exports = require("next/dist/compiled/cookie");

/***/ }),

/***/ 9371:
/***/ ((module) => {

module.exports = require("next/dist/compiled/node-fetch");

/***/ }),

/***/ 600:
/***/ ((module) => {

module.exports = require("next/dist/server/accept-header.js");

/***/ }),

/***/ 730:
/***/ ((module) => {

module.exports = require("next/dist/server/api-utils/node.js");

/***/ }),

/***/ 5947:
/***/ ((module) => {

module.exports = require("next/dist/server/base-http/node.js");

/***/ }),

/***/ 2779:
/***/ ((module) => {

module.exports = require("next/dist/server/request-meta.js");

/***/ }),

/***/ 6724:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/constants.js");

/***/ }),

/***/ 3539:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/detect-domain-locale.js");

/***/ }),

/***/ 2374:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/detect-locale-cookie.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 5753:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-match.js");

/***/ }),

/***/ 9521:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/prepare-destination.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 9819:
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ 4269:
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ 3685:
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ 9455:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ next_serverless_loaderabsolute404Path_absoluteAppPath_private_next_pages_2F_app_tsx_absoluteDocumentPath_next_2Fdist_2Fpages_2F_document_absoluteErrorPath_next_2Fdist_2Fpages_2F_error_absolutePagePath_private_next_pages_2Fapi_2Fhello_ts_assetPrefix_basePath_buildId_3V8yEUy1DpxkqrteSZ1_T_canonicalBase_distDir_private_dot_next_generateEtags_true_i18n_loadedEnvFiles_W10_3D_page_2Fapi_2Fhello_poweredByHeader_true_previewProps_7B_22previewModeId_22_3A_2201411580183b596f4be345ec70aedae6_22_2C_22previewModeSigningKey_22_3A_22f6ba80879d9ef8d97f180596d02025f94cc39755d7a42c2349fba33ccd41cfa9_22_2C_22previewModeEncryptionKey_22_3A_22120e952a6e2d7b5862dfd201f4e989210862c10f5196e0e25560583275999bb9_22_7D_runtimeConfig_)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/node-polyfill-fetch.js
var node_polyfill_fetch = __webpack_require__(7157);
;// CONCATENATED MODULE: ./.next/routes-manifest.json
const routes_manifest_namespaceObject = {"Dg":[]};
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-serverless-loader/api-handler.js
var api_handler = __webpack_require__(6249);
;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-serverless-loader/index.js?absolute404Path=&absoluteAppPath=private-next-pages%2F_app.tsx&absoluteDocumentPath=next%2Fdist%2Fpages%2F_document&absoluteErrorPath=next%2Fdist%2Fpages%2F_error&absolutePagePath=private-next-pages%2Fapi%2Fhello.ts&assetPrefix=&basePath=&buildId=3V8yEUy1DpxkqrteSZ1_T&canonicalBase=&distDir=private-dot-next&generateEtags=true&i18n=&loadedEnvFiles=W10%3D&page=%2Fapi%2Fhello&poweredByHeader=true&previewProps=%7B%22previewModeId%22%3A%2201411580183b596f4be345ec70aedae6%22%2C%22previewModeSigningKey%22%3A%22f6ba80879d9ef8d97f180596d02025f94cc39755d7a42c2349fba33ccd41cfa9%22%2C%22previewModeEncryptionKey%22%3A%22120e952a6e2d7b5862dfd201f4e989210862c10f5196e0e25560583275999bb9%22%7D&runtimeConfig=!

        
      const { processEnv } = __webpack_require__(5360)
      processEnv([])
    
        
        const runtimeConfig = {}
        ;
        

        

        const rewrites = Array.isArray(routes_manifest_namespaceObject.Dg)
          ? {
            afterFiles: routes_manifest_namespaceObject.Dg
          }
          : routes_manifest_namespaceObject.Dg

        const apiHandler = (0,api_handler/* getApiHandler */.Y)({
          pageModule: __webpack_require__(8505),
          rewrites: rewrites,
          i18n: undefined,
          page: "/api/hello",
          basePath: "",
          pageIsDynamic: false,
          encodedPreviewProps: {previewModeId:"01411580183b596f4be345ec70aedae6",previewModeSigningKey:"f6ba80879d9ef8d97f180596d02025f94cc39755d7a42c2349fba33ccd41cfa9",previewModeEncryptionKey:"120e952a6e2d7b5862dfd201f4e989210862c10f5196e0e25560583275999bb9"}
        })
        /* harmony default export */ const next_serverless_loaderabsolute404Path_absoluteAppPath_private_next_pages_2F_app_tsx_absoluteDocumentPath_next_2Fdist_2Fpages_2F_document_absoluteErrorPath_next_2Fdist_2Fpages_2F_error_absolutePagePath_private_next_pages_2Fapi_2Fhello_ts_assetPrefix_basePath_buildId_3V8yEUy1DpxkqrteSZ1_T_canonicalBase_distDir_private_dot_next_generateEtags_true_i18n_loadedEnvFiles_W10_3D_page_2Fapi_2Fhello_poweredByHeader_true_previewProps_7B_22previewModeId_22_3A_2201411580183b596f4be345ec70aedae6_22_2C_22previewModeSigningKey_22_3A_22f6ba80879d9ef8d97f180596d02025f94cc39755d7a42c2349fba33ccd41cfa9_22_2C_22previewModeEncryptionKey_22_3A_22120e952a6e2d7b5862dfd201f4e989210862c10f5196e0e25560583275999bb9_22_7D_runtimeConfig_ = (apiHandler);
      

/***/ }),

/***/ 8505:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
function handler(req, res) {
    res.status(200).json({
        name: "John Doe"
    });
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [884], () => (__webpack_exec__(9455)));
module.exports = __webpack_exports__;

})();