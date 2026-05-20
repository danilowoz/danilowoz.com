import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_Cd30bIRo.mjs';
import { manifest } from './manifest_mydK9Bz0.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/blog/atomic-design-with-react.astro.mjs');
const _page2 = () => import('./pages/blog/benefits-and-potencial-challenges-on-open-source-projects.astro.mjs');
const _page3 = () => import('./pages/blog/blockchain-and-react-native-apps.astro.mjs');
const _page4 = () => import('./pages/blog/my-code-principles.astro.mjs');
const _page5 = () => import('./pages/blog/react-code-editor.astro.mjs');
const _page6 = () => import('./pages/blog/sandpack.astro.mjs');
const _page7 = () => import('./pages/blog/spatial-keyboard-navigation.astro.mjs');
const _page8 = () => import('./pages/_slug_/og-image.png.astro.mjs');
const _page9 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/.pnpm/astro@5.7.10_rollup@4.40.1_sass@1.81.0_typescript@5.6.3/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/blog/atomic-design-with-react.md", _page1],
    ["src/pages/blog/benefits-and-potencial-challenges-on-open-source-projects.md", _page2],
    ["src/pages/blog/blockchain-and-react-native-apps.md", _page3],
    ["src/pages/blog/my-code-principles.md", _page4],
    ["src/pages/blog/react-code-editor.md", _page5],
    ["src/pages/blog/sandpack.md", _page6],
    ["src/pages/blog/spatial-keyboard-navigation.md", _page7],
    ["src/pages/[slug]/og-image.png.ts", _page8],
    ["src/pages/index.astro", _page9]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "9fede413-c6ea-4e2f-87f4-4c64c4e5f176",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
