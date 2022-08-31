"use strict";
exports.id = 290;
exports.ids = [290];
exports.modules = {

/***/ 6495:
/***/ ((__unused_webpack_module, exports) => {

var __webpack_unused_export__;

__webpack_unused_export__ = ({
    value: true
});
exports.Z = _extends;
function _extends() {
    return extends_.apply(this, arguments);
}
function extends_() {
    extends_ = Object.assign || function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source){
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }
        return target;
    };
    return extends_.apply(this, arguments);
}


/***/ }),

/***/ 2648:
/***/ ((__unused_webpack_module, exports) => {

var __webpack_unused_export__;

__webpack_unused_export__ = ({
    value: true
});
exports.Z = _interopRequireDefault;
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}


/***/ }),

/***/ 1598:
/***/ ((__unused_webpack_module, exports) => {

var __webpack_unused_export__;

__webpack_unused_export__ = ({
    value: true
});
exports.Z = _interopRequireWildcard;
function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache();
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
function _getRequireWildcardCache() {
    if (typeof WeakMap !== "function") return null;
    var cache = new WeakMap();
    _getRequireWildcardCache = function() {
        return cache;
    };
    return cache;
}


/***/ }),

/***/ 7273:
/***/ ((__unused_webpack_module, exports) => {

var __webpack_unused_export__;

__webpack_unused_export__ = ({
    value: true
});
exports.Z = _objectWithoutPropertiesLoose;
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}


/***/ }),

/***/ 9436:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;

__webpack_unused_export__ = ({
    value: true
});
exports.u = getPageHandler;
var _url = __webpack_require__(4269);
var _utils = __webpack_require__(9232);
var _sendPayload = __webpack_require__(2357);
var _utils1 = __webpack_require__(2056);
var _render = __webpack_require__(3100);
var _node = __webpack_require__(730);
var _denormalizePagePath = __webpack_require__(4406);
var _apiUtils = __webpack_require__(2155);
var _redirectStatus = __webpack_require__(746);
var _getRouteFromAssetPath = _interopRequireDefault(__webpack_require__(5714));
var _constants = __webpack_require__(6724);
var _renderResult = _interopRequireDefault(__webpack_require__(5071));
var _isError = _interopRequireDefault(__webpack_require__(676));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function getPageHandler(ctx) {
    const { page , pageComponent , pageConfig , pageGetStaticProps , pageGetStaticPaths , pageGetServerSideProps , appModule , documentModule , errorModule , notFoundModule , encodedPreviewProps , pageIsDynamic , generateEtags , poweredByHeader , runtimeConfig , buildManifest , reactLoadableManifest , i18n , buildId , basePath , assetPrefix , canonicalBase , escapedBuildId ,  } = ctx;
    const { handleLocale , handleRewrites , handleBasePath , defaultRouteRegex , dynamicRouteMatcher , interpolateDynamicPath , getParamsFromRouteMatches , normalizeDynamicRouteParams , normalizeVercelUrl ,  } = (0, _utils1).getUtils(ctx);
    async function renderReqToHTML(req, res, renderMode, _renderOpts, _params) {
        let Component;
        let App;
        let config;
        let Document;
        let Error;
        let notFoundMod;
        let getStaticProps;
        let getStaticPaths;
        let getServerSideProps;
        [getStaticProps, getServerSideProps, getStaticPaths, Component, App, config, { default: Document  }, { default: Error  }, notFoundMod, ] = await Promise.all([
            pageGetStaticProps,
            pageGetServerSideProps,
            pageGetStaticPaths,
            pageComponent,
            appModule,
            pageConfig,
            documentModule,
            errorModule,
            notFoundModule, 
        ]);
        const fromExport = renderMode === "export" || renderMode === true;
        const nextStartMode = renderMode === "passthrough";
        let hasValidParams = true;
        (0, _apiUtils).setLazyProp({
            req: req
        }, "cookies", (0, _apiUtils).getCookieParser(req.headers));
        const options = {
            App,
            Document,
            ComponentMod: {
                default: Component
            },
            buildManifest,
            getStaticProps,
            getServerSideProps,
            getStaticPaths,
            reactLoadableManifest,
            canonicalBase,
            buildId,
            assetPrefix,
            runtimeConfig: (runtimeConfig || {}).publicRuntimeConfig || {},
            previewProps: encodedPreviewProps,
            env: process.env,
            basePath,
            supportsDynamicHTML: false,
            ..._renderOpts
        };
        let _nextData = false;
        let defaultLocale = i18n == null ? void 0 : i18n.defaultLocale;
        let detectedLocale = i18n == null ? void 0 : i18n.defaultLocale;
        let parsedUrl;
        try {
            var ref;
            // We need to trust the dynamic route params from the proxy
            // to ensure we are using the correct values
            const trustQuery = !getStaticProps && req.headers[_utils1.vercelHeader];
            parsedUrl = (0, _url).parse(req.url, true);
            let routeNoAssetPath = parsedUrl.pathname;
            if (basePath) {
                routeNoAssetPath = routeNoAssetPath.replace(new RegExp(`^${basePath}`), "") || "/";
            }
            const origQuery = Object.assign({}, parsedUrl.query);
            handleRewrites(req, parsedUrl);
            handleBasePath(req, parsedUrl);
            // remove ?amp=1 from request URL if rendering for export
            if (fromExport && parsedUrl.query.amp) {
                const queryNoAmp = Object.assign({}, origQuery);
                delete queryNoAmp.amp;
                req.url = (0, _url).format({
                    ...parsedUrl,
                    search: undefined,
                    query: queryNoAmp
                });
            }
            if (parsedUrl.pathname.match(/_next\/data/)) {
                _nextData = page !== "/_error";
                parsedUrl.pathname = (0, _getRouteFromAssetPath).default(parsedUrl.pathname.replace(new RegExp(`/_next/data/${escapedBuildId}/`), "/"), ".json");
                routeNoAssetPath = parsedUrl.pathname;
            }
            const localeResult = handleLocale(req, res, parsedUrl, routeNoAssetPath, fromExport || nextStartMode);
            defaultLocale = (localeResult == null ? void 0 : localeResult.defaultLocale) || defaultLocale;
            detectedLocale = (localeResult == null ? void 0 : localeResult.detectedLocale) || detectedLocale;
            routeNoAssetPath = (localeResult == null ? void 0 : localeResult.routeNoAssetPath) || routeNoAssetPath;
            if (parsedUrl.query.nextInternalLocale) {
                detectedLocale = parsedUrl.query.nextInternalLocale;
                delete parsedUrl.query.nextInternalLocale;
            }
            const renderOpts = Object.assign({
                Component,
                pageConfig: config,
                nextExport: fromExport,
                isDataReq: _nextData,
                locales: i18n == null ? void 0 : i18n.locales,
                locale: detectedLocale,
                defaultLocale,
                domainLocales: i18n == null ? void 0 : i18n.domains,
                optimizeCss: false,
                nextScriptWorkers: false,
                crossOrigin: undefined
            }, options);
            if (page === "/_error" && !res.statusCode) {
                res.statusCode = 404;
            }
            let params = {};
            if (!fromExport && pageIsDynamic) {
                const result = normalizeDynamicRouteParams(trustQuery ? parsedUrl.query : dynamicRouteMatcher(parsedUrl.pathname));
                hasValidParams = result.hasValidParams;
                params = result.params;
            }
            let nowParams = null;
            if (pageIsDynamic && !hasValidParams && ((ref = req.headers) == null ? void 0 : ref["x-now-route-matches"])) {
                nowParams = getParamsFromRouteMatches(req, renderOpts, detectedLocale);
            }
            // make sure to set renderOpts to the correct params e.g. _params
            // if provided from worker or params if we're parsing them here
            renderOpts.params = _params || params;
            normalizeVercelUrl(req, !!trustQuery);
            // normalize request URL/asPath for fallback/revalidate pages since the
            // proxy sets the request URL to the output's path for fallback pages
            if (pageIsDynamic && nowParams && defaultRouteRegex) {
                const _parsedUrl = (0, _url).parse(req.url);
                _parsedUrl.pathname = interpolateDynamicPath(_parsedUrl.pathname, nowParams);
                parsedUrl.pathname = _parsedUrl.pathname;
                req.url = (0, _url).format(_parsedUrl);
            }
            // make sure to normalize asPath for revalidate and _next/data requests
            // since the asPath should match what is shown on the client
            if (!fromExport && (getStaticProps || getServerSideProps)) {
                // don't include dynamic route params in query while normalizing
                // asPath
                if (pageIsDynamic && defaultRouteRegex) {
                    delete parsedUrl.search;
                    for (const param of Object.keys(defaultRouteRegex.groups)){
                        delete origQuery[param];
                    }
                }
                parsedUrl.pathname = (0, _denormalizePagePath).denormalizePagePath(parsedUrl.pathname);
                renderOpts.resolvedUrl = (0, _url).format({
                    ...parsedUrl,
                    query: origQuery
                });
                // For getServerSideProps we need to ensure we use the original URL
                // and not the resolved URL to prevent a hydration mismatch on asPath
                renderOpts.resolvedAsPath = getServerSideProps ? (0, _url).format({
                    ...parsedUrl,
                    pathname: routeNoAssetPath,
                    query: origQuery
                }) : renderOpts.resolvedUrl;
            }
            const isFallback = parsedUrl.query.__nextFallback;
            const previewData = (0, _node).tryGetPreviewData(req, res, options.previewProps);
            const isPreviewMode = previewData !== false;
            if (true) {
                renderOpts.optimizeFonts = true;
                /**
         * __webpack_require__.__NEXT_FONT_MANIFEST__ is added by
         * font-stylesheet-gathering-plugin
         */ // @ts-ignore
                renderOpts.fontManifest = __webpack_require__.__NEXT_FONT_MANIFEST__;
            }
            let result = await (0, _render).renderToHTML(req, res, page, Object.assign({}, getStaticProps ? {
                ...parsedUrl.query.amp ? {
                    amp: "1"
                } : {}
            } : parsedUrl.query, nowParams ? nowParams : params, _params, isFallback ? {
                __nextFallback: "true"
            } : {}), renderOpts);
            if (!renderMode) {
                if (_nextData || getStaticProps || getServerSideProps) {
                    if (renderOpts.isNotFound) {
                        res.statusCode = 404;
                        if (_nextData) {
                            res.end('{"notFound":true}');
                            return null;
                        }
                        const NotFoundComponent = notFoundMod ? notFoundMod.default : Error;
                        const errPathname = notFoundMod ? "/404" : "/_error";
                        const result2 = await (0, _render).renderToHTML(req, res, errPathname, parsedUrl.query, Object.assign({}, options, {
                            getStaticProps: notFoundMod ? notFoundMod.getStaticProps : undefined,
                            getStaticPaths: undefined,
                            getServerSideProps: undefined,
                            Component: NotFoundComponent,
                            err: undefined,
                            locale: detectedLocale,
                            locales: i18n == null ? void 0 : i18n.locales,
                            defaultLocale: i18n == null ? void 0 : i18n.defaultLocale
                        }));
                        (0, _sendPayload).sendRenderResult({
                            req,
                            res,
                            result: result2 != null ? result2 : _renderResult.default.empty,
                            type: "html",
                            generateEtags,
                            poweredByHeader,
                            options: {
                                private: isPreviewMode || page === "/404",
                                stateful: !!getServerSideProps,
                                revalidate: renderOpts.revalidate
                            }
                        });
                        return null;
                    } else if (renderOpts.isRedirect && !_nextData) {
                        const redirect = {
                            destination: renderOpts.pageData.pageProps.__N_REDIRECT,
                            statusCode: renderOpts.pageData.pageProps.__N_REDIRECT_STATUS,
                            basePath: renderOpts.pageData.pageProps.__N_REDIRECT_BASE_PATH
                        };
                        const statusCode = (0, _redirectStatus).getRedirectStatus(redirect);
                        if (basePath && redirect.basePath !== false && redirect.destination.startsWith("/")) {
                            redirect.destination = `${basePath}${redirect.destination}`;
                        }
                        if (statusCode === _constants.PERMANENT_REDIRECT_STATUS) {
                            res.setHeader("Refresh", `0;url=${redirect.destination}`);
                        }
                        res.statusCode = statusCode;
                        res.setHeader("Location", redirect.destination);
                        res.end(redirect.destination);
                        return null;
                    } else {
                        (0, _sendPayload).sendRenderResult({
                            req,
                            res,
                            result: _nextData ? _renderResult.default.fromStatic(JSON.stringify(renderOpts.pageData)) : result != null ? result : _renderResult.default.empty,
                            type: _nextData ? "json" : "html",
                            generateEtags,
                            poweredByHeader,
                            options: {
                                private: isPreviewMode || renderOpts.is404Page,
                                stateful: !!getServerSideProps,
                                revalidate: renderOpts.revalidate
                            }
                        });
                        return null;
                    }
                }
            } else if (isPreviewMode) {
                res.setHeader("Cache-Control", "private, no-cache, no-store, max-age=0, must-revalidate");
            }
            if (renderMode) return {
                html: result,
                renderOpts
            };
            return result ? result.toUnchunkedString() : null;
        } catch (err) {
            if (!parsedUrl) {
                parsedUrl = (0, _url).parse(req.url, true);
            }
            if ((0, _isError).default(err) && err.code === "ENOENT") {
                res.statusCode = 404;
            } else if (err instanceof _utils.DecodeError) {
                res.statusCode = 400;
            } else {
                console.error("Unhandled error during request:", err);
                // Backwards compat (call getInitialProps in custom error):
                try {
                    await (0, _render).renderToHTML(req, res, "/_error", parsedUrl.query, Object.assign({}, options, {
                        getStaticProps: undefined,
                        getStaticPaths: undefined,
                        getServerSideProps: undefined,
                        Component: Error,
                        err: err,
                        // Short-circuit rendering:
                        isDataReq: true
                    }));
                } catch (underErrorErr) {
                    console.error("Failed call /_error subroutine, continuing to crash function:", underErrorErr);
                }
                // Throw the error to crash the serverless function
                if ((0, _utils).isResSent(res)) {
                    console.error("!!! WARNING !!!");
                    console.error("Your function crashed, but closed the response before allowing the function to exit.\\n" + "This may cause unexpected behavior for the next request.");
                    console.error("!!! WARNING !!!");
                }
                throw err;
            }
            const result2 = await (0, _render).renderToHTML(req, res, "/_error", parsedUrl.query, Object.assign({}, options, {
                getStaticProps: undefined,
                getStaticPaths: undefined,
                getServerSideProps: undefined,
                Component: Error,
                err: res.statusCode === 404 ? undefined : err
            }));
            return result2 ? result2.toUnchunkedString() : null;
        }
    }
    return {
        renderReqToHTML,
        render: async function render(req, res) {
            try {
                const html = await renderReqToHTML(req, res);
                if (html) {
                    (0, _sendPayload).sendRenderResult({
                        req,
                        res,
                        result: _renderResult.default.fromStatic(html),
                        type: "html",
                        generateEtags,
                        poweredByHeader
                    });
                }
            } catch (err) {
                console.error(err);
                // Throw the error to crash the serverless function
                throw err;
            }
        }
    };
}

//# sourceMappingURL=page-handler.js.map

/***/ }),

/***/ 2056:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.getUtils = getUtils;
exports.vercelHeader = void 0;
var _url = __webpack_require__(4269);
var _querystring = __webpack_require__(9819);
var _normalizeLocalePath = __webpack_require__(4014);
var _pathMatch = __webpack_require__(5753);
var _routeRegex = __webpack_require__(5052);
var _routeMatcher = __webpack_require__(4226);
var _prepareDestination = __webpack_require__(9521);
var _acceptHeader = __webpack_require__(600);
var _detectLocaleCookie = __webpack_require__(2374);
var _detectDomainLocale = __webpack_require__(3539);
var _denormalizePagePath = __webpack_require__(4406);
var _cookie = _interopRequireDefault(__webpack_require__(252));
var _constants = __webpack_require__(6724);
var _requestMeta = __webpack_require__(2779);
var _removeTrailingSlash = __webpack_require__(3297);
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const vercelHeader = "x-vercel-id";
exports.vercelHeader = vercelHeader;
function getUtils({ page , i18n , basePath , rewrites , pageIsDynamic , trailingSlash  }) {
    let defaultRouteRegex;
    let dynamicRouteMatcher;
    let defaultRouteMatches;
    if (pageIsDynamic) {
        defaultRouteRegex = (0, _routeRegex).getNamedRouteRegex(page);
        dynamicRouteMatcher = (0, _routeMatcher).getRouteMatcher(defaultRouteRegex);
        defaultRouteMatches = dynamicRouteMatcher(page);
    }
    function handleRewrites(req, parsedUrl) {
        const rewriteParams = {};
        let fsPathname = parsedUrl.pathname;
        const matchesPage = ()=>{
            const fsPathnameNoSlash = (0, _removeTrailingSlash).removeTrailingSlash(fsPathname || "");
            return fsPathnameNoSlash === (0, _removeTrailingSlash).removeTrailingSlash(page) || (dynamicRouteMatcher == null ? void 0 : dynamicRouteMatcher(fsPathnameNoSlash));
        };
        const checkRewrite = (rewrite)=>{
            const matcher = (0, _pathMatch).getPathMatch(rewrite.source + (trailingSlash ? "(/)?" : ""), {
                removeUnnamedParams: true,
                strict: true
            });
            let params = matcher(parsedUrl.pathname);
            if (rewrite.has && params) {
                const hasParams = (0, _prepareDestination).matchHas(req, rewrite.has, parsedUrl.query);
                if (hasParams) {
                    Object.assign(params, hasParams);
                } else {
                    params = false;
                }
            }
            if (params) {
                const { parsedDestination , destQuery  } = (0, _prepareDestination).prepareDestination({
                    appendParamsToQuery: true,
                    destination: rewrite.destination,
                    params: params,
                    query: parsedUrl.query
                });
                // if the rewrite destination is external break rewrite chain
                if (parsedDestination.protocol) {
                    return true;
                }
                Object.assign(rewriteParams, destQuery, params);
                Object.assign(parsedUrl.query, parsedDestination.query);
                delete parsedDestination.query;
                Object.assign(parsedUrl, parsedDestination);
                fsPathname = parsedUrl.pathname;
                if (basePath) {
                    fsPathname = fsPathname.replace(new RegExp(`^${basePath}`), "") || "/";
                }
                if (i18n) {
                    const destLocalePathResult = (0, _normalizeLocalePath).normalizeLocalePath(fsPathname, i18n.locales);
                    fsPathname = destLocalePathResult.pathname;
                    parsedUrl.query.nextInternalLocale = destLocalePathResult.detectedLocale || params.nextInternalLocale;
                }
                if (fsPathname === page) {
                    return true;
                }
                if (pageIsDynamic && dynamicRouteMatcher) {
                    const dynamicParams = dynamicRouteMatcher(fsPathname);
                    if (dynamicParams) {
                        parsedUrl.query = {
                            ...parsedUrl.query,
                            ...dynamicParams
                        };
                        return true;
                    }
                }
            }
            return false;
        };
        for (const rewrite1 of rewrites.beforeFiles || []){
            checkRewrite(rewrite1);
        }
        if (fsPathname !== page) {
            let finished = false;
            for (const rewrite of rewrites.afterFiles || []){
                finished = checkRewrite(rewrite);
                if (finished) break;
            }
            if (!finished && !matchesPage()) {
                for (const rewrite of rewrites.fallback || []){
                    finished = checkRewrite(rewrite);
                    if (finished) break;
                }
            }
        }
        return rewriteParams;
    }
    function handleBasePath(req, parsedUrl) {
        // always strip the basePath if configured since it is required
        req.url = req.url.replace(new RegExp(`^${basePath}`), "") || "/";
        parsedUrl.pathname = parsedUrl.pathname.replace(new RegExp(`^${basePath}`), "") || "/";
    }
    function getParamsFromRouteMatches(req, renderOpts, detectedLocale) {
        return (0, _routeMatcher).getRouteMatcher(function() {
            const { groups , routeKeys  } = defaultRouteRegex;
            return {
                re: {
                    // Simulate a RegExp match from the \`req.url\` input
                    exec: (str)=>{
                        const obj = (0, _querystring).parse(str);
                        const matchesHasLocale = i18n && detectedLocale && obj["1"] === detectedLocale;
                        // favor named matches if available
                        const routeKeyNames = Object.keys(routeKeys || {});
                        const filterLocaleItem = (val)=>{
                            if (i18n) {
                                // locale items can be included in route-matches
                                // for fallback SSG pages so ensure they are
                                // filtered
                                const isCatchAll = Array.isArray(val);
                                const _val = isCatchAll ? val[0] : val;
                                if (typeof _val === "string" && i18n.locales.some((item)=>{
                                    if (item.toLowerCase() === _val.toLowerCase()) {
                                        detectedLocale = item;
                                        renderOpts.locale = detectedLocale;
                                        return true;
                                    }
                                    return false;
                                })) {
                                    // remove the locale item from the match
                                    if (isCatchAll) {
                                        val.splice(0, 1);
                                    }
                                    // the value is only a locale item and
                                    // shouldn't be added
                                    return isCatchAll ? val.length === 0 : true;
                                }
                            }
                            return false;
                        };
                        if (routeKeyNames.every((name)=>obj[name])) {
                            return routeKeyNames.reduce((prev, keyName)=>{
                                const paramName = routeKeys == null ? void 0 : routeKeys[keyName];
                                if (paramName && !filterLocaleItem(obj[keyName])) {
                                    prev[groups[paramName].pos] = obj[keyName];
                                }
                                return prev;
                            }, {});
                        }
                        return Object.keys(obj).reduce((prev, key)=>{
                            if (!filterLocaleItem(obj[key])) {
                                let normalizedKey = key;
                                if (matchesHasLocale) {
                                    normalizedKey = parseInt(key, 10) - 1 + "";
                                }
                                return Object.assign(prev, {
                                    [normalizedKey]: obj[key]
                                });
                            }
                            return prev;
                        }, {});
                    }
                },
                groups
            };
        }())(req.headers["x-now-route-matches"]);
    }
    function interpolateDynamicPath(pathname, params) {
        if (!defaultRouteRegex) return pathname;
        for (const param of Object.keys(defaultRouteRegex.groups)){
            const { optional , repeat  } = defaultRouteRegex.groups[param];
            let builtParam = `[${repeat ? "..." : ""}${param}]`;
            if (optional) {
                builtParam = `[${builtParam}]`;
            }
            const paramIdx = pathname.indexOf(builtParam);
            if (paramIdx > -1) {
                let paramValue;
                if (Array.isArray(params[param])) {
                    paramValue = params[param].map((v)=>v && encodeURIComponent(v)).join("/");
                } else {
                    paramValue = params[param] && encodeURIComponent(params[param]);
                }
                pathname = pathname.slice(0, paramIdx) + (paramValue || "") + pathname.slice(paramIdx + builtParam.length);
            }
        }
        return pathname;
    }
    function normalizeVercelUrl(req, trustQuery, paramKeys) {
        // make sure to normalize req.url on Vercel to strip dynamic params
        // from the query which are added during routing
        if (pageIsDynamic && trustQuery && defaultRouteRegex) {
            const _parsedUrl = (0, _url).parse(req.url, true);
            delete _parsedUrl.search;
            for (const param of paramKeys || Object.keys(defaultRouteRegex.groups)){
                delete _parsedUrl.query[param];
            }
            req.url = (0, _url).format(_parsedUrl);
        }
    }
    function normalizeDynamicRouteParams(params, ignoreOptional) {
        let hasValidParams = true;
        if (!defaultRouteRegex) return {
            params,
            hasValidParams: false
        };
        params = Object.keys(defaultRouteRegex.groups).reduce((prev, key)=>{
            let value = params[key];
            // if the value matches the default value we can't rely
            // on the parsed params, this is used to signal if we need
            // to parse x-now-route-matches or not
            const defaultValue = defaultRouteMatches[key];
            const isOptional = defaultRouteRegex.groups[key].optional;
            const isDefaultValue = Array.isArray(defaultValue) ? defaultValue.some((defaultVal)=>{
                return Array.isArray(value) ? value.some((val)=>val.includes(defaultVal)) : value == null ? void 0 : value.includes(defaultVal);
            }) : value == null ? void 0 : value.includes(defaultValue);
            if (isDefaultValue || typeof value === "undefined" && !(isOptional && ignoreOptional)) {
                hasValidParams = false;
            }
            // non-provided optional values should be undefined so normalize
            // them to undefined
            if (isOptional && (!value || Array.isArray(value) && value.length === 1 && // fallback optional catch-all SSG pages have
            // [[...paramName]] for the root path on Vercel
            (value[0] === "index" || value[0] === `[[...${key}]]`))) {
                value = undefined;
                delete params[key];
            }
            // query values from the proxy aren't already split into arrays
            // so make sure to normalize catch-all values
            if (value && typeof value === "string" && defaultRouteRegex.groups[key].repeat) {
                value = value.split("/");
            }
            if (value) {
                prev[key] = value;
            }
            return prev;
        }, {});
        return {
            params,
            hasValidParams
        };
    }
    function handleLocale(req, res, parsedUrl, routeNoAssetPath, shouldNotRedirect) {
        if (!i18n) return;
        const pathname = parsedUrl.pathname || "/";
        let defaultLocale = i18n.defaultLocale;
        let detectedLocale = (0, _detectLocaleCookie).detectLocaleCookie(req, i18n.locales);
        let acceptPreferredLocale;
        try {
            acceptPreferredLocale = i18n.localeDetection !== false ? (0, _acceptHeader).acceptLanguage(req.headers["accept-language"], i18n.locales) : detectedLocale;
        } catch (_) {
            acceptPreferredLocale = detectedLocale;
        }
        const { host  } = req.headers || {};
        // remove port from host and remove port if present
        const hostname = host && host.split(":")[0].toLowerCase();
        const detectedDomain = (0, _detectDomainLocale).detectDomainLocale(i18n.domains, hostname);
        if (detectedDomain) {
            defaultLocale = detectedDomain.defaultLocale;
            detectedLocale = defaultLocale;
            (0, _requestMeta).addRequestMeta(req, "__nextIsLocaleDomain", true);
        }
        // if not domain specific locale use accept-language preferred
        detectedLocale = detectedLocale || acceptPreferredLocale;
        let localeDomainRedirect;
        const localePathResult = (0, _normalizeLocalePath).normalizeLocalePath(pathname, i18n.locales);
        routeNoAssetPath = (0, _normalizeLocalePath).normalizeLocalePath(routeNoAssetPath, i18n.locales).pathname;
        if (localePathResult.detectedLocale) {
            detectedLocale = localePathResult.detectedLocale;
            req.url = (0, _url).format({
                ...parsedUrl,
                pathname: localePathResult.pathname
            });
            (0, _requestMeta).addRequestMeta(req, "__nextStrippedLocale", true);
            parsedUrl.pathname = localePathResult.pathname;
        }
        // If a detected locale is a domain specific locale and we aren't already
        // on that domain and path prefix redirect to it to prevent duplicate
        // content from multiple domains
        if (detectedDomain) {
            const localeToCheck = localePathResult.detectedLocale ? detectedLocale : acceptPreferredLocale;
            const matchedDomain = (0, _detectDomainLocale).detectDomainLocale(i18n.domains, undefined, localeToCheck);
            if (matchedDomain && matchedDomain.domain !== detectedDomain.domain) {
                localeDomainRedirect = `http${matchedDomain.http ? "" : "s"}://${matchedDomain.domain}/${localeToCheck === matchedDomain.defaultLocale ? "" : localeToCheck}`;
            }
        }
        const denormalizedPagePath = (0, _denormalizePagePath).denormalizePagePath(pathname);
        const detectedDefaultLocale = !detectedLocale || detectedLocale.toLowerCase() === defaultLocale.toLowerCase();
        const shouldStripDefaultLocale = false;
        // detectedDefaultLocale &&
        // denormalizedPagePath.toLowerCase() === \`/\${i18n.defaultLocale.toLowerCase()}\`
        const shouldAddLocalePrefix = !detectedDefaultLocale && denormalizedPagePath === "/";
        detectedLocale = detectedLocale || i18n.defaultLocale;
        if (!shouldNotRedirect && !req.headers[vercelHeader] && i18n.localeDetection !== false && (localeDomainRedirect || shouldAddLocalePrefix || shouldStripDefaultLocale)) {
            // set the NEXT_LOCALE cookie when a user visits the default locale
            // with the locale prefix so that they aren't redirected back to
            // their accept-language preferred locale
            if (shouldStripDefaultLocale && acceptPreferredLocale !== defaultLocale) {
                const previous = res.getHeader("set-cookie");
                res.setHeader("set-cookie", [
                    ...typeof previous === "string" ? [
                        previous
                    ] : Array.isArray(previous) ? previous : [],
                    _cookie.default.serialize("NEXT_LOCALE", defaultLocale, {
                        httpOnly: true,
                        path: "/"
                    }), 
                ]);
            }
            res.setHeader("Location", (0, _url).format({
                // make sure to include any query values when redirecting
                ...parsedUrl,
                pathname: localeDomainRedirect ? localeDomainRedirect : shouldStripDefaultLocale ? basePath || "/" : `${basePath}/${detectedLocale}`
            }));
            res.statusCode = _constants.TEMPORARY_REDIRECT_STATUS;
            res.end();
            return;
        }
        detectedLocale = localePathResult.detectedLocale || detectedDomain && detectedDomain.defaultLocale || defaultLocale;
        return {
            defaultLocale,
            detectedLocale,
            routeNoAssetPath
        };
    }
    return {
        handleLocale,
        handleRewrites,
        handleBasePath,
        defaultRouteRegex,
        normalizeVercelUrl,
        dynamicRouteMatcher,
        defaultRouteMatches,
        interpolateDynamicPath,
        getParamsFromRouteMatches,
        normalizeDynamicRouteParams
    };
}

//# sourceMappingURL=utils.js.map

/***/ }),

/***/ 6007:
/***/ ((module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports["default"] = initHeadManager;
exports.isEqualNode = isEqualNode;
exports.DOMAttributeNames = void 0;
function initHeadManager() {
    return {
        mountedInstances: new Set(),
        updateHead: (head)=>{
            const tags = {};
            head.forEach((h)=>{
                if (// it won't be inlined. In this case revert to the original behavior
                h.type === "link" && h.props["data-optimized-fonts"]) {
                    if (document.querySelector(`style[data-href="${h.props["data-href"]}"]`)) {
                        return;
                    } else {
                        h.props.href = h.props["data-href"];
                        h.props["data-href"] = undefined;
                    }
                }
                const components = tags[h.type] || [];
                components.push(h);
                tags[h.type] = components;
            });
            const titleComponent = tags.title ? tags.title[0] : null;
            let title = "";
            if (titleComponent) {
                const { children  } = titleComponent.props;
                title = typeof children === "string" ? children : Array.isArray(children) ? children.join("") : "";
            }
            if (title !== document.title) document.title = title;
            [
                "meta",
                "base",
                "link",
                "style",
                "script"
            ].forEach((type)=>{
                updateElements(type, tags[type] || []);
            });
        }
    };
}
const DOMAttributeNames = {
    acceptCharset: "accept-charset",
    className: "class",
    htmlFor: "for",
    httpEquiv: "http-equiv",
    noModule: "noModule"
};
exports.DOMAttributeNames = DOMAttributeNames;
function reactElementToDOM({ type , props  }) {
    const el = document.createElement(type);
    for(const p in props){
        if (!props.hasOwnProperty(p)) continue;
        if (p === "children" || p === "dangerouslySetInnerHTML") continue;
        // we don't render undefined props to the DOM
        if (props[p] === undefined) continue;
        const attr = DOMAttributeNames[p] || p.toLowerCase();
        if (type === "script" && (attr === "async" || attr === "defer" || attr === "noModule")) {
            el[attr] = !!props[p];
        } else {
            el.setAttribute(attr, props[p]);
        }
    }
    const { children , dangerouslySetInnerHTML  } = props;
    if (dangerouslySetInnerHTML) {
        el.innerHTML = dangerouslySetInnerHTML.__html || "";
    } else if (children) {
        el.textContent = typeof children === "string" ? children : Array.isArray(children) ? children.join("") : "";
    }
    return el;
}
function isEqualNode(oldTag, newTag) {
    if (oldTag instanceof HTMLElement && newTag instanceof HTMLElement) {
        const nonce = newTag.getAttribute("nonce");
        // Only strip the nonce if `oldTag` has had it stripped. An element's nonce attribute will not
        // be stripped if there is no content security policy response header that includes a nonce.
        if (nonce && !oldTag.getAttribute("nonce")) {
            const cloneTag = newTag.cloneNode(true);
            cloneTag.setAttribute("nonce", "");
            cloneTag.nonce = nonce;
            return nonce === oldTag.nonce && oldTag.isEqualNode(cloneTag);
        }
    }
    return oldTag.isEqualNode(newTag);
}
function updateElements(type, components) {
    const headEl = document.getElementsByTagName("head")[0];
    const headCountEl = headEl.querySelector("meta[name=next-head-count]");
    if (false) {}
    const headCount = Number(headCountEl.content);
    const oldTags = [];
    for(let i = 0, j = headCountEl.previousElementSibling; i < headCount; i++, j = (j == null ? void 0 : j.previousElementSibling) || null){
        var ref;
        if ((j == null ? void 0 : (ref = j.tagName) == null ? void 0 : ref.toLowerCase()) === type) {
            oldTags.push(j);
        }
    }
    const newTags = components.map(reactElementToDOM).filter((newTag)=>{
        for(let k = 0, len = oldTags.length; k < len; k++){
            const oldTag = oldTags[k];
            if (isEqualNode(oldTag, newTag)) {
                oldTags.splice(k, 1);
                return false;
            }
        }
        return true;
    });
    oldTags.forEach((t)=>{
        var ref;
        return (ref = t.parentNode) == null ? void 0 : ref.removeChild(t);
    });
    newTags.forEach((t)=>headEl.insertBefore(t, headCountEl));
    headCountEl.content = (headCount - oldTags.length + newTags.length).toString();
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=head-manager.js.map


/***/ }),

/***/ 9311:
/***/ ((module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.cancelIdleCallback = exports.requestIdleCallback = void 0;
const requestIdleCallback = typeof self !== "undefined" && self.requestIdleCallback && self.requestIdleCallback.bind(window) || function(cb) {
    let start = Date.now();
    return setTimeout(function() {
        cb({
            didTimeout: false,
            timeRemaining: function() {
                return Math.max(0, 50 - (Date.now() - start));
            }
        });
    }, 1);
};
exports.requestIdleCallback = requestIdleCallback;
const cancelIdleCallback = typeof self !== "undefined" && self.cancelIdleCallback && self.cancelIdleCallback.bind(window) || function(id) {
    return clearTimeout(id);
};
exports.cancelIdleCallback = cancelIdleCallback;
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=request-idle-callback.js.map


/***/ }),

/***/ 699:
/***/ ((module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.handleClientScriptLoad = handleClientScriptLoad;
exports.initScriptLoader = initScriptLoader;
exports["default"] = void 0;
var _extends = (__webpack_require__(6495)/* ["default"] */ .Z);
var _interop_require_wildcard = (__webpack_require__(1598)/* ["default"] */ .Z);
var _object_without_properties_loose = (__webpack_require__(7273)/* ["default"] */ .Z);
var _react = _interop_require_wildcard(__webpack_require__(6689));
var _headManagerContext = __webpack_require__(2796);
var _headManager = __webpack_require__(6007);
var _requestIdleCallback = __webpack_require__(9311);
const ScriptCache = new Map();
const LoadCache = new Set();
const ignoreProps = [
    "onLoad",
    "onReady",
    "dangerouslySetInnerHTML",
    "children",
    "onError",
    "strategy", 
];
const loadScript = (props)=>{
    const { src , id , onLoad =()=>{} , onReady =null , dangerouslySetInnerHTML , children ="" , strategy ="afterInteractive" , onError ,  } = props;
    const cacheKey = id || src;
    // Script has already loaded
    if (cacheKey && LoadCache.has(cacheKey)) {
        return;
    }
    // Contents of this script are already loading/loaded
    if (ScriptCache.has(src)) {
        LoadCache.add(cacheKey);
        // Execute onLoad since the script loading has begun
        ScriptCache.get(src).then(onLoad, onError);
        return;
    }
    const el = document.createElement("script");
    const loadPromise = new Promise((resolve, reject)=>{
        el.addEventListener("load", function(e) {
            resolve();
            if (onLoad) {
                onLoad.call(this, e);
            }
            // Run onReady for the first time after load event
            if (onReady) {
                onReady();
            }
        });
        el.addEventListener("error", function(e) {
            reject(e);
        });
    }).catch(function(e) {
        if (onError) {
            onError(e);
        }
    });
    if (src) {
        ScriptCache.set(src, loadPromise);
    }
    LoadCache.add(cacheKey);
    if (dangerouslySetInnerHTML) {
        el.innerHTML = dangerouslySetInnerHTML.__html || "";
    } else if (children) {
        el.textContent = typeof children === "string" ? children : Array.isArray(children) ? children.join("") : "";
    } else if (src) {
        el.src = src;
    }
    for (const [k, value] of Object.entries(props)){
        if (value === undefined || ignoreProps.includes(k)) {
            continue;
        }
        const attr = _headManager.DOMAttributeNames[k] || k.toLowerCase();
        el.setAttribute(attr, value);
    }
    if (strategy === "worker") {
        el.setAttribute("type", "text/partytown");
    }
    el.setAttribute("data-nscript", strategy);
    document.body.appendChild(el);
};
function handleClientScriptLoad(props) {
    const { strategy ="afterInteractive"  } = props;
    if (strategy === "lazyOnload") {
        window.addEventListener("load", ()=>{
            (0, _requestIdleCallback).requestIdleCallback(()=>loadScript(props));
        });
    } else {
        loadScript(props);
    }
}
function loadLazyScript(props) {
    if (document.readyState === "complete") {
        (0, _requestIdleCallback).requestIdleCallback(()=>loadScript(props));
    } else {
        window.addEventListener("load", ()=>{
            (0, _requestIdleCallback).requestIdleCallback(()=>loadScript(props));
        });
    }
}
function addBeforeInteractiveToCache() {
    const scripts = [
        ...document.querySelectorAll('[data-nscript="beforeInteractive"]'),
        ...document.querySelectorAll('[data-nscript="beforePageRender"]'), 
    ];
    scripts.forEach((script)=>{
        const cacheKey = script.id || script.getAttribute("src");
        LoadCache.add(cacheKey);
    });
}
function initScriptLoader(scriptLoaderItems) {
    scriptLoaderItems.forEach(handleClientScriptLoad);
    addBeforeInteractiveToCache();
}
function Script(props) {
    const { id , src ="" , onLoad =()=>{} , onReady =null , strategy ="afterInteractive" , onError  } = props, restProps = _object_without_properties_loose(props, [
        "id",
        "src",
        "onLoad",
        "onReady",
        "strategy",
        "onError"
    ]);
    // Context is available only during SSR
    const { updateScripts , scripts , getIsSsr  } = (0, _react).useContext(_headManagerContext.HeadManagerContext);
    (0, _react).useEffect(()=>{
        const cacheKey = id || src;
        // Run onReady if script has loaded before but component is re-mounted
        if (onReady && cacheKey && LoadCache.has(cacheKey)) {
            onReady();
        }
    }, [
        onReady,
        id,
        src
    ]);
    (0, _react).useEffect(()=>{
        if (strategy === "afterInteractive") {
            loadScript(props);
        } else if (strategy === "lazyOnload") {
            loadLazyScript(props);
        }
    }, [
        props,
        strategy
    ]);
    if (strategy === "beforeInteractive" || strategy === "worker") {
        if (updateScripts) {
            scripts[strategy] = (scripts[strategy] || []).concat([
                _extends({
                    id,
                    src,
                    onLoad,
                    onReady,
                    onError
                }, restProps), 
            ]);
            updateScripts(scripts);
        } else if (getIsSsr && getIsSsr()) {
            // Script has already loaded during SSR
            LoadCache.add(id || src);
        } else if (getIsSsr && !getIsSsr()) {
            loadScript(props);
        }
    }
    return null;
}
var _default = Script;
exports["default"] = _default;
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=script.js.map


/***/ }),

/***/ 3105:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.Html = Html;
exports.Main = Main;
exports["default"] = void 0;
var _react = _interopRequireWildcard(__webpack_require__(6689));
var _constants = __webpack_require__(6724);
var _getPageFiles = __webpack_require__(4140);
var _utils = __webpack_require__(6368);
var _htmlescape = __webpack_require__(9716);
var _script = _interopRequireDefault(__webpack_require__(699));
var _isError = _interopRequireDefault(__webpack_require__(676));
var _htmlContext = __webpack_require__(8743);
class Document extends _react.Component {
    /**
   * `getInitialProps` hook returns the context object with the addition of `renderPage`.
   * `renderPage` callback executes `React` rendering logic synchronously to support server-rendering wrappers
   */ static getInitialProps(ctx) {
        return ctx.defaultGetInitialProps(ctx);
    }
    render() {
        return /*#__PURE__*/ _react.default.createElement(Html, null, /*#__PURE__*/ _react.default.createElement(Head, null), /*#__PURE__*/ _react.default.createElement("body", null, /*#__PURE__*/ _react.default.createElement(Main, null), /*#__PURE__*/ _react.default.createElement(NextScript, null)));
    }
}
exports["default"] = Document;
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _getRequireWildcardCache() {
    if (typeof WeakMap !== "function") return null;
    var cache = new WeakMap();
    _getRequireWildcardCache = function() {
        return cache;
    };
    return cache;
}
function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache();
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
function getDocumentFiles(buildManifest, pathname, inAmpMode) {
    const sharedFiles = (0, _getPageFiles).getPageFiles(buildManifest, "/_app");
    const pageFiles = inAmpMode ? [] : (0, _getPageFiles).getPageFiles(buildManifest, pathname);
    return {
        sharedFiles,
        pageFiles,
        allFiles: [
            ...new Set([
                ...sharedFiles,
                ...pageFiles
            ])
        ]
    };
}
function getPolyfillScripts(context, props) {
    // polyfills.js has to be rendered as nomodule without async
    // It also has to be the first script to load
    const { assetPrefix , buildManifest , devOnlyCacheBusterQueryString , disableOptimizedLoading , crossOrigin ,  } = context;
    return buildManifest.polyfillFiles.filter((polyfill)=>polyfill.endsWith(".js") && !polyfill.endsWith(".module.js")).map((polyfill)=>/*#__PURE__*/ _react.default.createElement("script", {
            key: polyfill,
            defer: !disableOptimizedLoading,
            nonce: props.nonce,
            crossOrigin: props.crossOrigin || crossOrigin,
            noModule: true,
            src: `${assetPrefix}/_next/${polyfill}${devOnlyCacheBusterQueryString}`
        }));
}
function hasComponentProps(child) {
    return !!child && !!child.props;
}
function AmpStyles({ styles  }) {
    if (!styles) return null;
    // try to parse styles from fragment for backwards compat
    const curStyles = Array.isArray(styles) ? styles : [];
    if (styles.props && Array.isArray(styles.props.children)) {
        const hasStyles = (el)=>{
            var ref, ref1;
            return el == null ? void 0 : (ref = el.props) == null ? void 0 : (ref1 = ref.dangerouslySetInnerHTML) == null ? void 0 : ref1.__html;
        };
        // @ts-ignore Property 'props' does not exist on type ReactElement
        styles.props.children.forEach((child)=>{
            if (Array.isArray(child)) {
                child.forEach((el)=>hasStyles(el) && curStyles.push(el));
            } else if (hasStyles(child)) {
                curStyles.push(child);
            }
        });
    }
    /* Add custom styles before AMP styles to prevent accidental overrides */ return /*#__PURE__*/ _react.default.createElement("style", {
        "amp-custom": "",
        dangerouslySetInnerHTML: {
            __html: curStyles.map((style)=>style.props.dangerouslySetInnerHTML.__html).join("").replace(/\/\*# sourceMappingURL=.*\*\//g, "").replace(/\/\*@ sourceURL=.*?\*\//g, "")
        }
    });
}
class Head extends _react.Component {
    static contextType = _htmlContext.HtmlContext;
    getCssLinks(files) {
        const { assetPrefix , devOnlyCacheBusterQueryString , dynamicImports , crossOrigin , optimizeCss , optimizeFonts ,  } = this.context;
        const cssFiles = files.allFiles.filter((f)=>f.endsWith(".css"));
        const sharedFiles = new Set(files.sharedFiles);
        // Unmanaged files are CSS files that will be handled directly by the
        // webpack runtime (`mini-css-extract-plugin`).
        let unmangedFiles = new Set([]);
        let dynamicCssFiles = Array.from(new Set(dynamicImports.filter((file)=>file.endsWith(".css"))));
        if (dynamicCssFiles.length) {
            const existing = new Set(cssFiles);
            dynamicCssFiles = dynamicCssFiles.filter((f)=>!(existing.has(f) || sharedFiles.has(f)));
            unmangedFiles = new Set(dynamicCssFiles);
            cssFiles.push(...dynamicCssFiles);
        }
        let cssLinkElements = [];
        cssFiles.forEach((file)=>{
            const isSharedFile = sharedFiles.has(file);
            if (!optimizeCss) {
                cssLinkElements.push(/*#__PURE__*/ _react.default.createElement("link", {
                    key: `${file}-preload`,
                    nonce: this.props.nonce,
                    rel: "preload",
                    href: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
                    as: "style",
                    crossOrigin: this.props.crossOrigin || crossOrigin
                }));
            }
            const isUnmanagedFile = unmangedFiles.has(file);
            cssLinkElements.push(/*#__PURE__*/ _react.default.createElement("link", {
                key: file,
                nonce: this.props.nonce,
                rel: "stylesheet",
                href: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
                crossOrigin: this.props.crossOrigin || crossOrigin,
                "data-n-g": isUnmanagedFile ? undefined : isSharedFile ? "" : undefined,
                "data-n-p": isUnmanagedFile ? undefined : isSharedFile ? undefined : ""
            }));
        });
        if ( true && optimizeFonts) {
            cssLinkElements = this.makeStylesheetInert(cssLinkElements);
        }
        return cssLinkElements.length === 0 ? null : cssLinkElements;
    }
    getPreloadDynamicChunks() {
        const { dynamicImports , assetPrefix , devOnlyCacheBusterQueryString , crossOrigin ,  } = this.context;
        return dynamicImports.map((file)=>{
            if (!file.endsWith(".js")) {
                return null;
            }
            return /*#__PURE__*/ _react.default.createElement("link", {
                rel: "preload",
                key: file,
                href: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
                as: "script",
                nonce: this.props.nonce,
                crossOrigin: this.props.crossOrigin || crossOrigin
            });
        }) // Filter out nulled scripts
        .filter(Boolean);
    }
    getPreloadMainLinks(files) {
        const { assetPrefix , devOnlyCacheBusterQueryString , scriptLoader , crossOrigin ,  } = this.context;
        const preloadFiles = files.allFiles.filter((file)=>{
            return file.endsWith(".js");
        });
        return [
            ...(scriptLoader.beforeInteractive || []).map((file)=>/*#__PURE__*/ _react.default.createElement("link", {
                    key: file.src,
                    nonce: this.props.nonce,
                    rel: "preload",
                    href: file.src,
                    as: "script",
                    crossOrigin: this.props.crossOrigin || crossOrigin
                })),
            ...preloadFiles.map((file)=>/*#__PURE__*/ _react.default.createElement("link", {
                    key: file,
                    nonce: this.props.nonce,
                    rel: "preload",
                    href: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
                    as: "script",
                    crossOrigin: this.props.crossOrigin || crossOrigin
                })), 
        ];
    }
    getBeforeInteractiveInlineScripts() {
        const { scriptLoader  } = this.context;
        const { nonce , crossOrigin  } = this.props;
        return (scriptLoader.beforeInteractive || []).filter((script)=>!script.src && (script.dangerouslySetInnerHTML || script.children)).map((file, index)=>{
            const { strategy , children , dangerouslySetInnerHTML , src , ...scriptProps } = file;
            let html = "";
            if (dangerouslySetInnerHTML && dangerouslySetInnerHTML.__html) {
                html = dangerouslySetInnerHTML.__html;
            } else if (children) {
                html = typeof children === "string" ? children : Array.isArray(children) ? children.join("") : "";
            }
            return /*#__PURE__*/ _react.default.createElement("script", Object.assign({}, scriptProps, {
                dangerouslySetInnerHTML: {
                    __html: html
                },
                key: scriptProps.id || index,
                nonce: nonce,
                "data-nscript": "beforeInteractive",
                crossOrigin: crossOrigin || undefined
            }));
        });
    }
    getDynamicChunks(files) {
        return getDynamicChunks(this.context, this.props, files);
    }
    getPreNextScripts() {
        return getPreNextScripts(this.context, this.props);
    }
    getScripts(files) {
        return getScripts(this.context, this.props, files);
    }
    getPolyfillScripts() {
        return getPolyfillScripts(this.context, this.props);
    }
    makeStylesheetInert(node) {
        return _react.default.Children.map(node, (c)=>{
            var ref4, ref2;
            if ((c == null ? void 0 : c.type) === "link" && (c == null ? void 0 : (ref4 = c.props) == null ? void 0 : ref4.href) && _constants.OPTIMIZED_FONT_PROVIDERS.some(({ url  })=>{
                var ref, ref3;
                return c == null ? void 0 : (ref = c.props) == null ? void 0 : (ref3 = ref.href) == null ? void 0 : ref3.startsWith(url);
            })) {
                const newProps = {
                    ...c.props || {},
                    "data-href": c.props.href,
                    href: undefined
                };
                return /*#__PURE__*/ _react.default.cloneElement(c, newProps);
            } else if (c == null ? void 0 : (ref2 = c.props) == null ? void 0 : ref2.children) {
                const newProps1 = {
                    ...c.props || {},
                    children: this.makeStylesheetInert(c.props.children)
                };
                return /*#__PURE__*/ _react.default.cloneElement(c, newProps1);
            }
            return c;
        }).filter(Boolean);
    }
    render() {
        const { styles , ampPath , inAmpMode , hybridAmp , canonicalBase , __NEXT_DATA__ , dangerousAsPath , headTags , unstable_runtimeJS , unstable_JsPreload , disableOptimizedLoading , optimizeCss , optimizeFonts ,  } = this.context;
        const disableRuntimeJS = unstable_runtimeJS === false;
        const disableJsPreload = unstable_JsPreload === false || !disableOptimizedLoading;
        this.context.docComponentsRendered.Head = true;
        let { head  } = this.context;
        let cssPreloads = [];
        let otherHeadElements = [];
        if (head) {
            head.forEach((c)=>{
                if (c && c.type === "link" && c.props["rel"] === "preload" && c.props["as"] === "style") {
                    cssPreloads.push(c);
                } else {
                    c && otherHeadElements.push(c);
                }
            });
            head = cssPreloads.concat(otherHeadElements);
        }
        let children = _react.default.Children.toArray(this.props.children).filter(Boolean);
        // show a warning if Head contains <title> (only in development)
        if (false) {}
        if ( true && optimizeFonts && !inAmpMode) {
            children = this.makeStylesheetInert(children);
        }
        let hasAmphtmlRel = false;
        let hasCanonicalRel = false;
        // show warning and remove conflicting amp head tags
        head = _react.default.Children.map(head || [], (child)=>{
            if (!child) return child;
            const { type , props  } = child;
            if (inAmpMode) {
                let badProp = "";
                if (type === "meta" && props.name === "viewport") {
                    badProp = 'name="viewport"';
                } else if (type === "link" && props.rel === "canonical") {
                    hasCanonicalRel = true;
                } else if (type === "script") {
                    // only block if
                    // 1. it has a src and isn't pointing to ampproject's CDN
                    // 2. it is using dangerouslySetInnerHTML without a type or
                    // a type of text/javascript
                    if (props.src && props.src.indexOf("ampproject") < -1 || props.dangerouslySetInnerHTML && (!props.type || props.type === "text/javascript")) {
                        badProp = "<script";
                        Object.keys(props).forEach((prop)=>{
                            badProp += ` ${prop}="${props[prop]}"`;
                        });
                        badProp += "/>";
                    }
                }
                if (badProp) {
                    console.warn(`Found conflicting amp tag "${child.type}" with conflicting prop ${badProp} in ${__NEXT_DATA__.page}. https://nextjs.org/docs/messages/conflicting-amp-tag`);
                    return null;
                }
            } else {
                // non-amp mode
                if (type === "link" && props.rel === "amphtml") {
                    hasAmphtmlRel = true;
                }
            }
            return child;
        });
        const files = getDocumentFiles(this.context.buildManifest, this.context.__NEXT_DATA__.page, inAmpMode);
        var _nonce, _nonce1;
        return /*#__PURE__*/ _react.default.createElement("head", Object.assign({}, getHeadHTMLProps(this.props)), this.context.isDevelopment && /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/ _react.default.createElement("style", {
            "data-next-hide-fouc": true,
            "data-ampdevmode": inAmpMode ? "true" : undefined,
            dangerouslySetInnerHTML: {
                __html: `body{display:none}`
            }
        }), /*#__PURE__*/ _react.default.createElement("noscript", {
            "data-next-hide-fouc": true,
            "data-ampdevmode": inAmpMode ? "true" : undefined
        }, /*#__PURE__*/ _react.default.createElement("style", {
            dangerouslySetInnerHTML: {
                __html: `body{display:block}`
            }
        }))), head, /*#__PURE__*/ _react.default.createElement("meta", {
            name: "next-head-count",
            content: _react.default.Children.count(head || []).toString()
        }), children, optimizeFonts && /*#__PURE__*/ _react.default.createElement("meta", {
            name: "next-font-preconnect"
        }), inAmpMode && /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/ _react.default.createElement("meta", {
            name: "viewport",
            content: "width=device-width,minimum-scale=1,initial-scale=1"
        }), !hasCanonicalRel && /*#__PURE__*/ _react.default.createElement("link", {
            rel: "canonical",
            href: canonicalBase + (0, _utils).cleanAmpPath(dangerousAsPath)
        }), /*#__PURE__*/ _react.default.createElement("link", {
            rel: "preload",
            as: "script",
            href: "https://cdn.ampproject.org/v0.js"
        }), /*#__PURE__*/ _react.default.createElement(AmpStyles, {
            styles: styles
        }), /*#__PURE__*/ _react.default.createElement("style", {
            "amp-boilerplate": "",
            dangerouslySetInnerHTML: {
                __html: `body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}`
            }
        }), /*#__PURE__*/ _react.default.createElement("noscript", null, /*#__PURE__*/ _react.default.createElement("style", {
            "amp-boilerplate": "",
            dangerouslySetInnerHTML: {
                __html: `body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}`
            }
        })), /*#__PURE__*/ _react.default.createElement("script", {
            async: true,
            src: "https://cdn.ampproject.org/v0.js"
        })), !inAmpMode && /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, !hasAmphtmlRel && hybridAmp && /*#__PURE__*/ _react.default.createElement("link", {
            rel: "amphtml",
            href: canonicalBase + getAmpPath(ampPath, dangerousAsPath)
        }), this.getBeforeInteractiveInlineScripts(), !optimizeCss && this.getCssLinks(files), !optimizeCss && /*#__PURE__*/ _react.default.createElement("noscript", {
            "data-n-css": (_nonce = this.props.nonce) != null ? _nonce : ""
        }), !disableRuntimeJS && !disableJsPreload && this.getPreloadDynamicChunks(), !disableRuntimeJS && !disableJsPreload && this.getPreloadMainLinks(files), !disableOptimizedLoading && !disableRuntimeJS && this.getPolyfillScripts(), !disableOptimizedLoading && !disableRuntimeJS && this.getPreNextScripts(), !disableOptimizedLoading && !disableRuntimeJS && this.getDynamicChunks(files), !disableOptimizedLoading && !disableRuntimeJS && this.getScripts(files), optimizeCss && this.getCssLinks(files), optimizeCss && /*#__PURE__*/ _react.default.createElement("noscript", {
            "data-n-css": (_nonce1 = this.props.nonce) != null ? _nonce1 : ""
        }), this.context.isDevelopment && // ordering matches production
        // (by default, style-loader injects at the bottom of <head />)
        /*#__PURE__*/ _react.default.createElement("noscript", {
            id: "__next_css__DO_NOT_USE__"
        }), styles || null), /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, {}, ...headTags || []));
    }
}
exports.Head = Head;
function handleDocumentScriptLoaderItems(scriptLoader, __NEXT_DATA__, props) {
    var ref, ref6, ref7, ref8;
    if (!props.children) return;
    const scriptLoaderItems = [];
    const children = Array.isArray(props.children) ? props.children : [
        props.children
    ];
    const headChildren = (ref = children.find((child)=>child.type === Head)) == null ? void 0 : (ref6 = ref.props) == null ? void 0 : ref6.children;
    const bodyChildren = (ref7 = children.find((child)=>child.type === "body")) == null ? void 0 : (ref8 = ref7.props) == null ? void 0 : ref8.children;
    // Scripts with beforeInteractive can be placed inside Head or <body> so children of both needs to be traversed
    const combinedChildren = [
        ...Array.isArray(headChildren) ? headChildren : [
            headChildren
        ],
        ...Array.isArray(bodyChildren) ? bodyChildren : [
            bodyChildren
        ], 
    ];
    _react.default.Children.forEach(combinedChildren, (child)=>{
        if (!child) return;
        if (child.type === _script.default) {
            if (child.props.strategy === "beforeInteractive") {
                scriptLoader.beforeInteractive = (scriptLoader.beforeInteractive || []).concat([
                    {
                        ...child.props
                    }, 
                ]);
                return;
            } else if ([
                "lazyOnload",
                "afterInteractive",
                "worker"
            ].includes(child.props.strategy)) {
                scriptLoaderItems.push(child.props);
                return;
            }
        }
    });
    __NEXT_DATA__.scriptLoader = scriptLoaderItems;
}
function getPreNextWorkerScripts(context, props) {
    const { assetPrefix , scriptLoader , crossOrigin , nextScriptWorkers  } = context;
    // disable `nextScriptWorkers` in edge runtime
    if (!nextScriptWorkers || "nodejs" === "edge") return null;
    try {
        let { partytownSnippet  } = require("@builder.io/partytown/integration");
        const children = Array.isArray(props.children) ? props.children : [
            props.children
        ];
        // Check to see if the user has defined their own Partytown configuration
        const userDefinedConfig = children.find((child)=>{
            var ref, ref9;
            return hasComponentProps(child) && (child == null ? void 0 : (ref = child.props) == null ? void 0 : (ref9 = ref.dangerouslySetInnerHTML) == null ? void 0 : ref9.__html.length) && "data-partytown-config" in child.props;
        });
        return /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, !userDefinedConfig && /*#__PURE__*/ _react.default.createElement("script", {
            "data-partytown-config": "",
            dangerouslySetInnerHTML: {
                __html: `
            partytown = {
              lib: "${assetPrefix}/_next/static/~partytown/"
            };
          `
            }
        }), /*#__PURE__*/ _react.default.createElement("script", {
            "data-partytown": "",
            dangerouslySetInnerHTML: {
                __html: partytownSnippet()
            }
        }), (scriptLoader.worker || []).map((file, index)=>{
            const { strategy , src , children: scriptChildren , dangerouslySetInnerHTML , ...scriptProps } = file;
            let srcProps = {};
            if (src) {
                // Use external src if provided
                srcProps.src = src;
            } else if (dangerouslySetInnerHTML && dangerouslySetInnerHTML.__html) {
                // Embed inline script if provided with dangerouslySetInnerHTML
                srcProps.dangerouslySetInnerHTML = {
                    __html: dangerouslySetInnerHTML.__html
                };
            } else if (scriptChildren) {
                // Embed inline script if provided with children
                srcProps.dangerouslySetInnerHTML = {
                    __html: typeof scriptChildren === "string" ? scriptChildren : Array.isArray(scriptChildren) ? scriptChildren.join("") : ""
                };
            } else {
                throw new Error("Invalid usage of next/script. Did you forget to include a src attribute or an inline script? https://nextjs.org/docs/messages/invalid-script");
            }
            return /*#__PURE__*/ _react.default.createElement("script", Object.assign({}, srcProps, scriptProps, {
                type: "text/partytown",
                key: src || index,
                nonce: props.nonce,
                "data-nscript": "worker",
                crossOrigin: props.crossOrigin || crossOrigin
            }));
        }));
    } catch (err) {
        if ((0, _isError).default(err) && err.code !== "MODULE_NOT_FOUND") {
            console.warn(`Warning: ${err.message}`);
        }
        return null;
    }
}
function getPreNextScripts(context, props) {
    const { scriptLoader , disableOptimizedLoading , crossOrigin  } = context;
    const webWorkerScripts = getPreNextWorkerScripts(context, props);
    const beforeInteractiveScripts = (scriptLoader.beforeInteractive || []).filter((script)=>script.src).map((file, index)=>{
        const { strategy , ...scriptProps } = file;
        var _defer;
        return /*#__PURE__*/ _react.default.createElement("script", Object.assign({}, scriptProps, {
            key: scriptProps.src || index,
            defer: (_defer = scriptProps.defer) != null ? _defer : !disableOptimizedLoading,
            nonce: props.nonce,
            "data-nscript": "beforeInteractive",
            crossOrigin: props.crossOrigin || crossOrigin
        }));
    });
    return /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, webWorkerScripts, beforeInteractiveScripts);
}
function getDynamicChunks(context, props, files) {
    const { dynamicImports , assetPrefix , isDevelopment , devOnlyCacheBusterQueryString , disableOptimizedLoading , crossOrigin ,  } = context;
    return dynamicImports.map((file)=>{
        if (!file.endsWith(".js") || files.allFiles.includes(file)) return null;
        return /*#__PURE__*/ _react.default.createElement("script", {
            async: !isDevelopment && disableOptimizedLoading,
            defer: !disableOptimizedLoading,
            key: file,
            src: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
            nonce: props.nonce,
            crossOrigin: props.crossOrigin || crossOrigin
        });
    });
}
function getScripts(context, props, files) {
    var ref;
    const { assetPrefix , buildManifest , isDevelopment , devOnlyCacheBusterQueryString , disableOptimizedLoading , crossOrigin ,  } = context;
    const normalScripts = files.allFiles.filter((file)=>file.endsWith(".js"));
    const lowPriorityScripts = (ref = buildManifest.lowPriorityFiles) == null ? void 0 : ref.filter((file)=>file.endsWith(".js"));
    return [
        ...normalScripts,
        ...lowPriorityScripts
    ].map((file)=>{
        return /*#__PURE__*/ _react.default.createElement("script", {
            key: file,
            src: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
            nonce: props.nonce,
            async: !isDevelopment && disableOptimizedLoading,
            defer: !disableOptimizedLoading,
            crossOrigin: props.crossOrigin || crossOrigin
        });
    });
}
class NextScript extends _react.Component {
    static contextType = _htmlContext.HtmlContext;
    getDynamicChunks(files) {
        return getDynamicChunks(this.context, this.props, files);
    }
    getPreNextScripts() {
        return getPreNextScripts(this.context, this.props);
    }
    getScripts(files) {
        return getScripts(this.context, this.props, files);
    }
    getPolyfillScripts() {
        return getPolyfillScripts(this.context, this.props);
    }
    static getInlineScriptSource(context) {
        const { __NEXT_DATA__ , largePageDataBytes  } = context;
        try {
            const data = JSON.stringify(__NEXT_DATA__);
            const bytes =  false ? 0 : Buffer.from(data).byteLength;
            const prettyBytes = (__webpack_require__(5955)/* ["default"] */ .Z);
            if (largePageDataBytes && bytes > largePageDataBytes) {
                console.warn(`Warning: data for page "${__NEXT_DATA__.page}"${__NEXT_DATA__.page === context.dangerousAsPath ? "" : ` (path "${context.dangerousAsPath}")`} is ${prettyBytes(bytes)} which exceeds the threshold of ${prettyBytes(largePageDataBytes)}, this amount of data can reduce performance.\nSee more info here: https://nextjs.org/docs/messages/large-page-data`);
            }
            return (0, _htmlescape).htmlEscapeJsonString(data);
        } catch (err) {
            if ((0, _isError).default(err) && err.message.indexOf("circular structure") !== -1) {
                throw new Error(`Circular structure in "getInitialProps" result of page "${__NEXT_DATA__.page}". https://nextjs.org/docs/messages/circular-structure`);
            }
            throw err;
        }
    }
    render() {
        const { assetPrefix , inAmpMode , buildManifest , unstable_runtimeJS , docComponentsRendered , devOnlyCacheBusterQueryString , disableOptimizedLoading , crossOrigin ,  } = this.context;
        const disableRuntimeJS = unstable_runtimeJS === false;
        docComponentsRendered.NextScript = true;
        if (inAmpMode) {
            if (true) {
                return null;
            }
            const ampDevFiles = [
                ...buildManifest.devFiles,
                ...buildManifest.polyfillFiles,
                ...buildManifest.ampDevFiles, 
            ];
            return /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, disableRuntimeJS ? null : /*#__PURE__*/ _react.default.createElement("script", {
                id: "__NEXT_DATA__",
                type: "application/json",
                nonce: this.props.nonce,
                crossOrigin: this.props.crossOrigin || crossOrigin,
                dangerouslySetInnerHTML: {
                    __html: NextScript.getInlineScriptSource(this.context)
                },
                "data-ampdevmode": true
            }), ampDevFiles.map((file)=>/*#__PURE__*/ _react.default.createElement("script", {
                    key: file,
                    src: `${assetPrefix}/_next/${file}${devOnlyCacheBusterQueryString}`,
                    nonce: this.props.nonce,
                    crossOrigin: this.props.crossOrigin || crossOrigin,
                    "data-ampdevmode": true
                })));
        }
        if (false) {}
        const files = getDocumentFiles(this.context.buildManifest, this.context.__NEXT_DATA__.page, inAmpMode);
        return /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, !disableRuntimeJS && buildManifest.devFiles ? buildManifest.devFiles.map((file)=>/*#__PURE__*/ _react.default.createElement("script", {
                key: file,
                src: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
                nonce: this.props.nonce,
                crossOrigin: this.props.crossOrigin || crossOrigin
            })) : null, disableRuntimeJS ? null : /*#__PURE__*/ _react.default.createElement("script", {
            id: "__NEXT_DATA__",
            type: "application/json",
            nonce: this.props.nonce,
            crossOrigin: this.props.crossOrigin || crossOrigin,
            dangerouslySetInnerHTML: {
                __html: NextScript.getInlineScriptSource(this.context)
            }
        }), disableOptimizedLoading && !disableRuntimeJS && this.getPolyfillScripts(), disableOptimizedLoading && !disableRuntimeJS && this.getPreNextScripts(), disableOptimizedLoading && !disableRuntimeJS && this.getDynamicChunks(files), disableOptimizedLoading && !disableRuntimeJS && this.getScripts(files));
    }
}
exports.NextScript = NextScript;
// Add a special property to the built-in `Document` component so later we can
// identify if a user customized `Document` is used or not.
const InternalFunctionDocument = function InternalFunctionDocument() {
    return /*#__PURE__*/ _react.default.createElement(Html, null, /*#__PURE__*/ _react.default.createElement(Head, null), /*#__PURE__*/ _react.default.createElement("body", null, /*#__PURE__*/ _react.default.createElement(Main, null), /*#__PURE__*/ _react.default.createElement(NextScript, null)));
};
Document[_constants.NEXT_BUILTIN_DOCUMENT] = InternalFunctionDocument;
function Html(props) {
    const { inAmpMode , docComponentsRendered , locale , scriptLoader , __NEXT_DATA__ ,  } = (0, _react).useContext(_htmlContext.HtmlContext);
    docComponentsRendered.Html = true;
    handleDocumentScriptLoaderItems(scriptLoader, __NEXT_DATA__, props);
    return /*#__PURE__*/ _react.default.createElement("html", Object.assign({}, props, {
        lang: props.lang || locale || undefined,
        amp: inAmpMode ? "" : undefined,
        "data-ampdevmode": inAmpMode && "production" !== "production" ? 0 : undefined
    }));
}
function Main() {
    const { docComponentsRendered  } = (0, _react).useContext(_htmlContext.HtmlContext);
    docComponentsRendered.Main = true;
    // @ts-ignore
    return /*#__PURE__*/ _react.default.createElement("next-js-internal-body-render-target", null);
}
function getAmpPath(ampPath, asPath) {
    return ampPath || `${asPath}${asPath.includes("?") ? "&" : "?"}amp=1`;
}
function getHeadHTMLProps(props) {
    const { crossOrigin , nonce , ...restProps } = props;
    // This assignment is necessary for additional type checking to avoid unsupported attributes in <head>
    const headProps = restProps;
    return headProps;
} //# sourceMappingURL=_document.js.map


/***/ }),

/***/ 9185:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports["default"] = void 0;
var _interop_require_default = (__webpack_require__(2648)/* ["default"] */ .Z);
var _react = _interop_require_default(__webpack_require__(6689));
var _head = _interop_require_default(__webpack_require__(4957));
const statusCodes = {
    400: "Bad Request",
    404: "This page could not be found",
    405: "Method Not Allowed",
    500: "Internal Server Error"
};
function _getInitialProps({ res , err  }) {
    const statusCode = res && res.statusCode ? res.statusCode : err ? err.statusCode : 404;
    return {
        statusCode
    };
}
const styles = {
    error: {
        fontFamily: '-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',
        height: "100vh",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
    },
    desc: {
        display: "inline-block",
        textAlign: "left",
        lineHeight: "49px",
        height: "49px",
        verticalAlign: "middle"
    },
    h1: {
        display: "inline-block",
        margin: 0,
        marginRight: "20px",
        padding: "0 23px 0 0",
        fontSize: "24px",
        fontWeight: 500,
        verticalAlign: "top",
        lineHeight: "49px"
    },
    h2: {
        fontSize: "14px",
        fontWeight: "normal",
        lineHeight: "49px",
        margin: 0,
        padding: 0
    }
};
var _Component;
class Error extends (_Component = _react.default.Component) {
    render() {
        const { statusCode , withDarkMode =true  } = this.props;
        const title = this.props.title || statusCodes[statusCode] || "An unexpected error has occurred";
        return /*#__PURE__*/ _react.default.createElement("div", {
            style: styles.error
        }, /*#__PURE__*/ _react.default.createElement(_head.default, null, /*#__PURE__*/ _react.default.createElement("title", null, statusCode ? `${statusCode}: ${title}` : "Application error: a client-side exception has occurred")), /*#__PURE__*/ _react.default.createElement("div", null, /*#__PURE__*/ _react.default.createElement("style", {
            dangerouslySetInnerHTML: {
                __html: `
                body { margin: 0; color: #000; background: #fff; }
                .next-error-h1 {
                  border-right: 1px solid rgba(0, 0, 0, .3);
                }

                ${withDarkMode ? `@media (prefers-color-scheme: dark) {
                  body { color: #fff; background: #000; }
                  .next-error-h1 {
                    border-right: 1px solid rgba(255, 255, 255, .3);
                  }
                }` : ""}`
            }
        }), statusCode ? /*#__PURE__*/ _react.default.createElement("h1", {
            className: "next-error-h1",
            style: styles.h1
        }, statusCode) : null, /*#__PURE__*/ _react.default.createElement("div", {
            style: styles.desc
        }, /*#__PURE__*/ _react.default.createElement("h2", {
            style: styles.h2
        }, this.props.title || statusCode ? title : /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, "Application error: a client-side exception has occurred (see the browser console for more information)"), "."))));
    }
}
Error.displayName = "ErrorPage";
Error.getInitialProps = _getInitialProps;
Error.origGetInitialProps = _getInitialProps;
exports["default"] = Error; //# sourceMappingURL=_error.js.map


/***/ }),

/***/ 676:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports["default"] = isError;
exports.getProperError = getProperError;
var _isPlainObject = __webpack_require__(8524);
function isError(err) {
    return typeof err === "object" && err !== null && "name" in err && "message" in err;
}
function getProperError(err) {
    if (isError(err)) {
        return err;
    }
    if (false) {}
    return new Error((0, _isPlainObject).isPlainObject(err) ? JSON.stringify(err) : err + "");
}

//# sourceMappingURL=is-error.js.map

/***/ }),

/***/ 5955:
/***/ ((__unused_webpack_module, exports) => {

var __webpack_unused_export__;

__webpack_unused_export__ = ({
    value: true
});
exports.Z = prettyBytes;
function prettyBytes(number, options) {
    if (!Number.isFinite(number)) {
        throw new TypeError(`Expected a finite number, got ${typeof number}: ${number}`);
    }
    options = Object.assign({}, options);
    if (options.signed && number === 0) {
        return " 0 B";
    }
    const isNegative = number < 0;
    const prefix = isNegative ? "-" : options.signed ? "+" : "";
    if (isNegative) {
        number = -number;
    }
    if (number < 1) {
        const numberString = toLocaleString(number, options.locale);
        return prefix + numberString + " B";
    }
    const exponent = Math.min(Math.floor(Math.log10(number) / 3), UNITS.length - 1);
    number = Number((number / Math.pow(1000, exponent)).toPrecision(3));
    const numberString = toLocaleString(number, options.locale);
    const unit = UNITS[exponent];
    return prefix + numberString + " " + unit;
}
/*
MIT License

Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (sindresorhus.com)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/ const UNITS = [
    "B",
    "kB",
    "MB",
    "GB",
    "TB",
    "PB",
    "EB",
    "ZB",
    "YB"
];
/*
Formats the given number using `Number#toLocaleString`.
- If locale is a string, the value is expected to be a locale-key (for example: `de`).
- If locale is true, the system default locale is used for translation.
- If no value for locale is specified, the number is returned unmodified.
*/ const toLocaleString = (number, locale)=>{
    let result = number;
    if (typeof locale === "string") {
        result = number.toLocaleString(locale);
    } else if (locale === true) {
        result = number.toLocaleString();
    }
    return result;
};

//# sourceMappingURL=pretty-bytes.js.map

/***/ }),

/***/ 746:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.getRedirectStatus = getRedirectStatus;
exports.modifyRouteRegex = modifyRouteRegex;
exports.allowedStatusCodes = void 0;
var _constants = __webpack_require__(6724);
const allowedStatusCodes = new Set([
    301,
    302,
    303,
    307,
    308
]);
exports.allowedStatusCodes = allowedStatusCodes;
function getRedirectStatus(route) {
    return route.statusCode || (route.permanent ? _constants.PERMANENT_REDIRECT_STATUS : _constants.TEMPORARY_REDIRECT_STATUS);
}
function modifyRouteRegex(regex, restrictedPaths) {
    if (restrictedPaths) {
        regex = regex.replace(/\^/, `^(?!${restrictedPaths.map((path)=>path.replace(/\//g, "\\/")).join("|")})`);
    }
    regex = regex.replace(/\$$/, "(?:\\/)?$");
    return regex;
}

//# sourceMappingURL=redirect-status.js.map

/***/ }),

/***/ 607:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


var _nodeFetch = _interopRequireWildcard(__webpack_require__(9371));
function _getRequireWildcardCache() {
    if (typeof WeakMap !== "function") return null;
    var cache = new WeakMap();
    _getRequireWildcardCache = function() {
        return cache;
    };
    return cache;
}
function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache();
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
// Polyfill fetch() in the Node.js environment
if (!global.fetch) {
    const agent = ({ protocol  })=>protocol === "http:" ? global.__NEXT_HTTP_AGENT : global.__NEXT_HTTPS_AGENT;
    const fetchWithAgent = (url, opts, ...rest)=>{
        if (!opts) {
            opts = {
                agent
            };
        } else if (!opts.agent) {
            opts.agent = agent;
        }
        return (0, _nodeFetch).default(url, opts, ...rest);
    };
    global.fetch = fetchWithAgent;
    global.Headers = _nodeFetch.Headers;
    global.Request = _nodeFetch.Request;
    global.Response = _nodeFetch.Response;
}

//# sourceMappingURL=node-polyfill-fetch.js.map

/***/ })

};
;