
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CAEIEFZK.js"
    ],
    "route": "/about"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 161776, hash: 'e2cb8a55952e4ef08acda7762aff65707906f30a6e17b6ea3456e2215f51cf41', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 162289, hash: '39740d00db330ecce7ebd2f6137153629e4efcb1e2e3b1c90b052821479bbc3b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about/index.html': {size: 171980, hash: 'f2c11873ddda9d6844320c3ff9e94df453c480ac1bd619f3ab9bd14cd7856fea', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'index.html': {size: 170917, hash: 'afd2068a6a6b7503ab83758343cc0da6995b9cbb958d03ed3c1457f8a0d0b2bf', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
