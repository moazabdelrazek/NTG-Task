
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: false,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 1,
    "preload": [
      "chunk-6FWDKA5P.js"
    ],
    "redirectTo": "/dashboard",
    "route": "/"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-6FWDKA5P.js",
      "chunk-SFSH36QX.js"
    ],
    "route": "/auth"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-6FWDKA5P.js",
      "chunk-SFSH36QX.js",
      "chunk-MT7ONROM.js"
    ],
    "route": "/auth/login"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-6FWDKA5P.js",
      "chunk-U6GGGBLU.js",
      "chunk-ZOXJ3QV2.js"
    ],
    "route": "/dashboard"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-6FWDKA5P.js",
      "chunk-U6GGGBLU.js",
      "chunk-ZOXJ3QV2.js",
      "chunk-TCRFBY5J.js"
    ],
    "route": "/dashboard/task-details"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-6FWDKA5P.js",
      "chunk-U6GGGBLU.js",
      "chunk-ZOXJ3QV2.js",
      "chunk-U6IV5MFR.js",
      "chunk-S35HUXPS.js",
      "chunk-RFGYTILJ.js"
    ],
    "route": "/dashboard/service-management"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-6FWDKA5P.js",
      "chunk-U6GGGBLU.js",
      "chunk-ZOXJ3QV2.js",
      "chunk-IMTPASD3.js",
      "chunk-RFGYTILJ.js"
    ],
    "route": "/dashboard/service-management/*"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-6FWDKA5P.js",
      "chunk-U6GGGBLU.js",
      "chunk-ZOXJ3QV2.js",
      "chunk-WWC5OL22.js"
    ],
    "route": "/dashboard/invoice-management"
  },
  {
    "renderMode": 1,
    "redirectTo": "/",
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 1036, hash: '6674b92ea2b0be2d0fa0773dbf44d16258808bd94deaf3e0f58806148cd75cfd', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1576, hash: 'e68ce9ffa21fa902f699c806cd39448a97714207a53ae5c6cacaad6fdeb9dcb0', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)}
  },
};
