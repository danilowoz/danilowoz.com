import { g as decodeKey } from './chunks/astro/server_B5SraF0R.mjs';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_BGx1cWa3.mjs';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/danilowoznica/project/danilowoz.com/","cacheDir":"file:///Users/danilowoznica/project/danilowoz.com/node_modules/.astro/","outDir":"file:///Users/danilowoznica/project/danilowoz.com/dist/","srcDir":"file:///Users/danilowoznica/project/danilowoz.com/src/","publicDir":"file:///Users/danilowoznica/project/danilowoz.com/public/","buildClientDir":"file:///Users/danilowoznica/project/danilowoz.com/dist/client/","buildServerDir":"file:///Users/danilowoznica/project/danilowoz.com/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/.pnpm/astro@5.7.10_rollup@4.40.1_sass@1.81.0_typescript@5.6.3/node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/atomic-design-with-react.CS3hJRMd.css"}],"routeData":{"route":"/blog/atomic-design-with-react","isIndex":false,"type":"page","pattern":"^\\/blog\\/atomic-design-with-react\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"atomic-design-with-react","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/atomic-design-with-react.md","pathname":"/blog/atomic-design-with-react","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/atomic-design-with-react.CS3hJRMd.css"}],"routeData":{"route":"/blog/benefits-and-potencial-challenges-on-open-source-projects","isIndex":false,"type":"page","pattern":"^\\/blog\\/benefits-and-potencial-challenges-on-open-source-projects\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"benefits-and-potencial-challenges-on-open-source-projects","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/benefits-and-potencial-challenges-on-open-source-projects.md","pathname":"/blog/benefits-and-potencial-challenges-on-open-source-projects","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/atomic-design-with-react.CS3hJRMd.css"}],"routeData":{"route":"/blog/blockchain-and-react-native-apps","isIndex":false,"type":"page","pattern":"^\\/blog\\/blockchain-and-react-native-apps\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"blockchain-and-react-native-apps","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/blockchain-and-react-native-apps.md","pathname":"/blog/blockchain-and-react-native-apps","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/atomic-design-with-react.CS3hJRMd.css"}],"routeData":{"route":"/blog/my-code-principles","isIndex":false,"type":"page","pattern":"^\\/blog\\/my-code-principles\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"my-code-principles","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/my-code-principles.md","pathname":"/blog/my-code-principles","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/atomic-design-with-react.CS3hJRMd.css"}],"routeData":{"route":"/blog/react-code-editor","isIndex":false,"type":"page","pattern":"^\\/blog\\/react-code-editor\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"react-code-editor","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/react-code-editor.md","pathname":"/blog/react-code-editor","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/atomic-design-with-react.CS3hJRMd.css"}],"routeData":{"route":"/blog/sandpack","isIndex":false,"type":"page","pattern":"^\\/blog\\/sandpack\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"sandpack","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/sandpack.md","pathname":"/blog/sandpack","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/atomic-design-with-react.CS3hJRMd.css"}],"routeData":{"route":"/blog/spatial-keyboard-navigation","isIndex":false,"type":"page","pattern":"^\\/blog\\/spatial-keyboard-navigation\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"spatial-keyboard-navigation","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/spatial-keyboard-navigation.md","pathname":"/blog/spatial-keyboard-navigation","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/atomic-design-with-react.CS3hJRMd.css"}],"routeData":{"route":"/[slug]/og-image.png","isIndex":false,"type":"endpoint","pattern":"^\\/([^/]+?)\\/og-image\\.png\\/?$","segments":[[{"content":"slug","dynamic":true,"spread":false}],[{"content":"og-image.png","dynamic":false,"spread":false}]],"params":["slug"],"component":"src/pages/[slug]/og-image.png.ts","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.Tooia8GP.css"},{"type":"external","src":"/_astro/atomic-design-with-react.CS3hJRMd.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"site":"https://danilowoz","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/danilowoznica/project/danilowoz.com/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/Users/danilowoznica/project/danilowoz.com/src/pages/blog/atomic-design-with-react.md",{"propagation":"none","containsHead":true}],["/Users/danilowoznica/project/danilowoz.com/src/pages/[slug]/og-image.png.ts",{"propagation":"none","containsHead":true}],["/Users/danilowoznica/project/danilowoz.com/src/pages/blog/benefits-and-potencial-challenges-on-open-source-projects.md",{"propagation":"none","containsHead":true}],["/Users/danilowoznica/project/danilowoz.com/src/pages/blog/blockchain-and-react-native-apps.md",{"propagation":"none","containsHead":true}],["/Users/danilowoznica/project/danilowoz.com/src/pages/blog/my-code-principles.md",{"propagation":"none","containsHead":true}],["/Users/danilowoznica/project/danilowoz.com/src/pages/blog/react-code-editor.md",{"propagation":"none","containsHead":true}],["/Users/danilowoznica/project/danilowoz.com/src/pages/blog/sandpack.md",{"propagation":"none","containsHead":true}],["/Users/danilowoznica/project/danilowoz.com/src/pages/blog/spatial-keyboard-navigation.md",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-page:src/pages/blog/atomic-design-with-react@_@md":"pages/blog/atomic-design-with-react.astro.mjs","\u0000@astro-page:src/pages/blog/benefits-and-potencial-challenges-on-open-source-projects@_@md":"pages/blog/benefits-and-potencial-challenges-on-open-source-projects.astro.mjs","\u0000@astro-page:src/pages/blog/blockchain-and-react-native-apps@_@md":"pages/blog/blockchain-and-react-native-apps.astro.mjs","\u0000@astro-page:src/pages/blog/my-code-principles@_@md":"pages/blog/my-code-principles.astro.mjs","\u0000@astro-page:src/pages/blog/react-code-editor@_@md":"pages/blog/react-code-editor.astro.mjs","\u0000@astro-page:src/pages/blog/sandpack@_@md":"pages/blog/sandpack.astro.mjs","\u0000@astro-page:src/pages/blog/spatial-keyboard-navigation@_@md":"pages/blog/spatial-keyboard-navigation.astro.mjs","\u0000@astro-page:src/pages/[slug]/og-image.png@_@ts":"pages/_slug_/og-image.png.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-page:node_modules/.pnpm/astro@5.7.10_rollup@4.40.1_sass@1.81.0_typescript@5.6.3/node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","/Users/danilowoznica/project/danilowoz.com/node_modules/.pnpm/astro@5.7.10_rollup@4.40.1_sass@1.81.0_typescript@5.6.3/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_C5oc4v2_.mjs","/Users/danilowoznica/project/danilowoz.com/src/content/coverify.md":"chunks/coverify_DtR9Ynil.mjs","/Users/danilowoznica/project/danilowoz.com/src/content/memories.md":"chunks/memories_tsPV9YKX.mjs","/Users/danilowoznica/project/danilowoz.com/src/content/my-own-styled-components.md":"chunks/my-own-styled-components_DKLFxfVd.mjs","/Users/danilowoznica/project/danilowoz.com/src/content/react-content-loader.md":"chunks/react-content-loader_Y7UNsBJQ.mjs","/Users/danilowoznica/project/danilowoz.com/src/content/sandpack.md":"chunks/sandpack_1goJ63j-.mjs","\u0000@astrojs-manifest":"manifest_mydK9Bz0.mjs","@astrojs/react/client.js":"_astro/client.C1HDdQl_.js","/Users/danilowoznica/project/danilowoz.com/src/components/Footer.astro?astro&type=script&index=0&lang.ts":"_astro/Footer.astro_astro_type_script_index_0_lang.4gwLiYIK.js","/Users/danilowoznica/project/danilowoz.com/src/components/AboutTimeZone.astro?astro&type=script&index=0&lang.ts":"_astro/AboutTimeZone.astro_astro_type_script_index_0_lang.DdcBlX8G.js","/Users/danilowoznica/project/danilowoz.com/node_modules/.pnpm/@codesandbox+sandpack-client@2.19.8/node_modules/@codesandbox/sandpack-client/dist/clients/node/index.mjs":"_astro/index.hP1zVJbi.js","/Users/danilowoznica/project/danilowoz.com/node_modules/.pnpm/@codesandbox+sandpack-client@2.19.8/node_modules/@codesandbox/sandpack-client/dist/index-599aeaf7.mjs":"_astro/index-599aeaf7.Dw0ppYNx.js","/Users/danilowoznica/project/danilowoz.com/node_modules/.pnpm/@codesandbox+sandpack-client@2.19.8/node_modules/@codesandbox/sandpack-client/dist/clients/runtime/index.mjs":"_astro/index.Cmu1y1QQ.js","/Users/danilowoznica/project/danilowoz.com/src/components/Sandbox":"_astro/Sandbox.BNE5j7_v.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/Users/danilowoznica/project/danilowoz.com/src/components/Footer.astro?astro&type=script&index=0&lang.ts","window.dataLayer=window.dataLayer||[];function a(){dataLayer.push(arguments)}a(\"js\",new Date);a(\"config\",\"UA-112414056-1\");"],["/Users/danilowoznica/project/danilowoz.com/src/components/AboutTimeZone.astro?astro&type=script&index=0&lang.ts","const t=document.getElementById(\"utm\");setInterval(()=>{t.setAttribute(\"data-content\",`UTC+0 - ${new Intl.DateTimeFormat(\"en-US\",{timeZone:\"Europe/Lisbon\",hour:\"numeric\",minute:\"2-digit\",hour12:!0}).format(new Date)}`)},1e3);"]],"assets":["/_astro/atomic-design-with-react.CS3hJRMd.css","/_astro/index.Tooia8GP.css","/CNAME","/favicon.ico","/share-new.png","/_astro/Sandbox.BNE5j7_v.js","/_astro/Sandbox.DgdztZM7.js","/_astro/base-80a1f760.B5aFVQS0.js","/_astro/client.C1HDdQl_.js","/_astro/consoleHook-59e792cb.RH3uq1J8.js","/_astro/index-599aeaf7.Dw0ppYNx.js","/_astro/index.Cmu1y1QQ.js","/_astro/index.Ef5jSzfd.js","/_astro/index.hP1zVJbi.js","/assets/cursor.png","/assets/diferent.png","/assets/garden.png","/assets/paragraph.png","/assets/quoting.png","/assets/section.png","/assets/semicol.png","/images/code-editor.png","/images/cover.jpg","/images/cover.png","/images/coverify.png","/images/nodebox.png","/images/sandpack.png","/images/todomovie.png","/images/advanced-blog-system-in-gatsby/asset-2.jpeg","/images/atomic-design-with-react/asset-10.png","/images/atomic-design-with-react/asset-11.png","/images/atomic-design-with-react/asset-2.png","/images/atomic-design-with-react/asset-3.png","/images/atomic-design-with-react/asset-4.png","/images/atomic-design-with-react/asset-5.png","/images/atomic-design-with-react/asset-6.png","/images/atomic-design-with-react/asset-7.png","/images/atomic-design-with-react/asset-8.png","/images/atomic-design-with-react/asset-9.png","/images/atomic-design-with-react/cover.png","/images/code-editor/anatomy.jpg","/images/code-editor/cover.png","/images/code-editor/ide-concept.mp4","/images/css-display-grid-and-sketch-layout/asset-1.jpeg","/images/css-display-grid-and-sketch-layout/asset-2.png","/images/css-display-grid-and-sketch-layout/asset-3.png","/images/css-display-grid-and-sketch-layout/asset-4.jpeg","/images/css-display-grid-and-sketch-layout/asset-5.jpeg","/images/css-display-grid-and-sketch-layout/asset-6.jpeg","/images/css-display-grid-and-sketch-layout/asset-7.jpeg","/images/generating-typescript-types-and-react-hooks-based-on-graphql-endpoint/cover.png","/images/generating-typescript-types-and-react-hooks-based-on-graphql-endpoint/live-coding.gif","/images/beginner-guide-where-to-start-testing-in-javascript/cover.png","/images/bringing-your-blockchain-business-to-react-native/cover.png","/images/principles/cover.png","/images/open-source/cover.png","/images/sandpack/react-dev.png","/images/spatial/cover.png","/images/spatial/micro-ui.mp4","/images/spatial/spatial-navigation.mp4"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"49AeKMZAGePan5XdgeLDBc88LEQm5jDjG1iPBKO0nyw="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
