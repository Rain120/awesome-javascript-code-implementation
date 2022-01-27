/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "d8b8d2e7e7482b6ec020bf8c7e855cc2"
  },
  {
    "url": "assets/css/0.styles.7a9f5753.css",
    "revision": "004a797d63366d589510f918a6e9fd12"
  },
  {
    "url": "assets/img/adapter-pattern.cacc7810.png",
    "revision": "cacc7810b86702e6308ec0e0f8a037d6"
  },
  {
    "url": "assets/img/bubbleSort.33a947c7.gif",
    "revision": "33a947c71ad62b254cab62e5364d2813"
  },
  {
    "url": "assets/img/complete-binary-tree.544586e4.png",
    "revision": "544586e497e928b2ce263e85065f5f8d"
  },
  {
    "url": "assets/img/countingSort.3c7ddb59.gif",
    "revision": "3c7ddb59df2d21b287e42a7b908409cb"
  },
  {
    "url": "assets/img/debounce.a8c64f6f.png",
    "revision": "a8c64f6f5e451a308a06946c6216a42b"
  },
  {
    "url": "assets/img/decorator-pattern.851a3a83.png",
    "revision": "851a3a83107a3ba4285bf95989c94039"
  },
  {
    "url": "assets/img/dom-dff.620cf3e9.png",
    "revision": "620cf3e957fb56ac57ee5f764517ef3d"
  },
  {
    "url": "assets/img/dom-diff-algorithm.5f71270a.svg",
    "revision": "5f71270a5e4f9703c453e7bd6b47a3f0"
  },
  {
    "url": "assets/img/dom-diff-alogrithm.d369b59f.png",
    "revision": "d369b59fa90b974e4951c3f292f7cbbc"
  },
  {
    "url": "assets/img/facade-pattern.5d369bf1.png",
    "revision": "5d369bf11ee2172f77b0ba47c2c0f958"
  },
  {
    "url": "assets/img/factory-pattern.426fd23e.png",
    "revision": "426fd23ee355c773042b29aff474df53"
  },
  {
    "url": "assets/img/full-binary-tree.5ca7f09f.png",
    "revision": "5ca7f09f2717e761cc887448b2f70ce4"
  },
  {
    "url": "assets/img/heapSort.7073c729.gif",
    "revision": "7073c729230e1a2c3c3c9207b25f6b43"
  },
  {
    "url": "assets/img/insertionSort.91b76e8e.gif",
    "revision": "91b76e8e4dab9b0cad9a017d7dd431e2"
  },
  {
    "url": "assets/img/instanceof.e28e04c9.png",
    "revision": "e28e04c9bf34f324ab12763d4c177a71"
  },
  {
    "url": "assets/img/iterator-pattern.2a441995.png",
    "revision": "2a441995eae3f87ff23402e1577cb029"
  },
  {
    "url": "assets/img/js-adapter-pattern.9c91a941.png",
    "revision": "9c91a941a68ab250307e7f4352a165ee"
  },
  {
    "url": "assets/img/js-decorator-pattern.64c91419.png",
    "revision": "64c91419f490f1ee8ceb00d60aae716e"
  },
  {
    "url": "assets/img/js-factory-pattern.691e70b8.png",
    "revision": "691e70b88a02741f456acc0ef49b93b1"
  },
  {
    "url": "assets/img/js-iterator-pattern.ba8b25cb.png",
    "revision": "ba8b25cbfe4ab5d02e689cb1963d8e10"
  },
  {
    "url": "assets/img/js-observer-pattern.7effd253.png",
    "revision": "7effd25350c8b9fb8c8d03b5f234704b"
  },
  {
    "url": "assets/img/js-proxy-pattern.68b52196.png",
    "revision": "68b52196b84c24316dd6d671f86b0996"
  },
  {
    "url": "assets/img/layout-paint.7ac7962d.png",
    "revision": "7ac7962d523327a81576d9f62e6945ea"
  },
  {
    "url": "assets/img/mergeSort.cdda3f11.gif",
    "revision": "cdda3f11c6efbc01577f5c29a9066772"
  },
  {
    "url": "assets/img/observer-pattern.35ceede6.png",
    "revision": "35ceede68ff77c4a2ec1fe5bec49a76f"
  },
  {
    "url": "assets/img/plans.6bb645e5.svg",
    "revision": "6bb645e5d65a2cbf3e05f8db4069ec34"
  },
  {
    "url": "assets/img/promise-process.a7df35c6.png",
    "revision": "a7df35c69491ec76fc50d71ca62aab3e"
  },
  {
    "url": "assets/img/promise-resolve.a85a89f9.png",
    "revision": "a85a89f9594d69ecfd87b69407a305f4"
  },
  {
    "url": "assets/img/promise-then.1ba4f13d.png",
    "revision": "1ba4f13ddf68a594eb5136c6596c5bd9"
  },
  {
    "url": "assets/img/prototype.cf29c15f.png",
    "revision": "cf29c15ff7f095f6a7582881ef1d408b"
  },
  {
    "url": "assets/img/proxy-pattern.10dd5d8d.png",
    "revision": "10dd5d8de08b5bb6e0ca94dba288f885"
  },
  {
    "url": "assets/img/quickSort.c411339b.gif",
    "revision": "c411339b79f92499dcb7b5f304c826f4"
  },
  {
    "url": "assets/img/radixSort.6690b105.gif",
    "revision": "6690b1054909755ffcca96feb7a4d3ec"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/selectionSort.1c7e20f3.gif",
    "revision": "1c7e20f306ddc02eb4e3a50fa7817ff4"
  },
  {
    "url": "assets/img/shellSort.1677445a.png",
    "revision": "1677445a57362fb423c59f5b005c5a68"
  },
  {
    "url": "assets/img/shellSort.671bd19a.gif",
    "revision": "671bd19a44faf77479d68805a083892c"
  },
  {
    "url": "assets/img/singleton-pattern.5aee4d8c.png",
    "revision": "5aee4d8c454bdc71270d058ecaf61c55"
  },
  {
    "url": "assets/img/throttle.61872b74.png",
    "revision": "61872b7435da5049178455374bb4e95d"
  },
  {
    "url": "assets/img/wechat-zhifubao-pay.c574ee9e.png",
    "revision": "c574ee9ea0fcc9370d0c3b5ac12a7981"
  },
  {
    "url": "assets/js/10.9d0917d4.js",
    "revision": "15083258514ad3ae3eb8f91143661679"
  },
  {
    "url": "assets/js/11.29ed4789.js",
    "revision": "c1b3c24153c5368495181d5fcaaa53f4"
  },
  {
    "url": "assets/js/12.8faee5f0.js",
    "revision": "85333596fe75f8433ac37e3e364a7f27"
  },
  {
    "url": "assets/js/13.dd1a7b74.js",
    "revision": "15b218ff35c5eaca28cd47dee7b3103e"
  },
  {
    "url": "assets/js/14.d0ac2751.js",
    "revision": "6d1922cc03f09b874d2ff98378fc75f1"
  },
  {
    "url": "assets/js/15.d93c17b8.js",
    "revision": "8bd75cce2d706886725f7dbe1787852b"
  },
  {
    "url": "assets/js/16.4a62dda0.js",
    "revision": "aa7a7cbb488a2f4a4f89d16162b33000"
  },
  {
    "url": "assets/js/17.1373e769.js",
    "revision": "af6f0c36ce1cb103ded38fc13c44e480"
  },
  {
    "url": "assets/js/18.70696760.js",
    "revision": "19503b93bc847e562b49cf294a8a3bec"
  },
  {
    "url": "assets/js/19.bd5c72a5.js",
    "revision": "5130061b8ec3045062271208af9f51f2"
  },
  {
    "url": "assets/js/2.25b0e2c0.js",
    "revision": "b48c8021f14875c949fa3027acd08f52"
  },
  {
    "url": "assets/js/20.6b4c7006.js",
    "revision": "e8ccf87949303444da76fbd54cc614d6"
  },
  {
    "url": "assets/js/21.c01b1e1a.js",
    "revision": "4f5d52b4990102a5dcaa3a2d95e5ff35"
  },
  {
    "url": "assets/js/22.51ecaea6.js",
    "revision": "e2ac7c7c90495bd226686e1b2aaa5e92"
  },
  {
    "url": "assets/js/23.464fb10c.js",
    "revision": "c59d9e97e792eb0ad1a962532000854a"
  },
  {
    "url": "assets/js/24.38f5e16e.js",
    "revision": "9e4c50085c80ef4cbb7cff633470e6b2"
  },
  {
    "url": "assets/js/25.82eabb9b.js",
    "revision": "334439560d5ee85e5a8a88fee768586f"
  },
  {
    "url": "assets/js/26.9e759917.js",
    "revision": "08e5d71aab1916df1f571d2836b00330"
  },
  {
    "url": "assets/js/27.f60d01de.js",
    "revision": "16ab7504dedc8ffb49adac908ca21ab4"
  },
  {
    "url": "assets/js/28.9191b44a.js",
    "revision": "64c56262a28f1a80c8d0c093b2cb426c"
  },
  {
    "url": "assets/js/29.8bc953fb.js",
    "revision": "01d57ded92869d9e92c68d9565b602a6"
  },
  {
    "url": "assets/js/3.3a53985c.js",
    "revision": "c1416d4aa9b3a9da391690579603e4fc"
  },
  {
    "url": "assets/js/30.53cd8735.js",
    "revision": "073765faf5ec3e4e9ea446cdbfb0c76d"
  },
  {
    "url": "assets/js/31.6944e07b.js",
    "revision": "e9959ec3e4a9ad92e9da86984546267c"
  },
  {
    "url": "assets/js/32.8929b578.js",
    "revision": "1e02c3ae112a4a28c68e3aac3e5b404d"
  },
  {
    "url": "assets/js/33.2dccaa16.js",
    "revision": "c737d3df5608f552897ff4055ac8547c"
  },
  {
    "url": "assets/js/34.83359874.js",
    "revision": "85a25f868302647cab0f25888f4a0995"
  },
  {
    "url": "assets/js/35.6b4ea37c.js",
    "revision": "c0240d8a17c7e6cc2006bed31ba10500"
  },
  {
    "url": "assets/js/36.e2dfaea8.js",
    "revision": "26cc0bf895577c2f75aefa9a3d0f9bb0"
  },
  {
    "url": "assets/js/37.22d39db0.js",
    "revision": "371c346d485065a3821fa45b3fd9c62f"
  },
  {
    "url": "assets/js/38.a5235689.js",
    "revision": "6135c41d2e586a6f327344d4727becaa"
  },
  {
    "url": "assets/js/39.c7980061.js",
    "revision": "b2215f804739d8a8a816847070bf4d68"
  },
  {
    "url": "assets/js/4.cd189797.js",
    "revision": "3222a48679f5dccf7474015da4f0336c"
  },
  {
    "url": "assets/js/40.ddf198c6.js",
    "revision": "1a44e41d9404202ed0e86962d02cf397"
  },
  {
    "url": "assets/js/41.6d15898d.js",
    "revision": "7e39768578ef4655840dcbb7ab56cdab"
  },
  {
    "url": "assets/js/42.03e7f691.js",
    "revision": "739e61e4bdcd3c9896933a3dc0ebcf9a"
  },
  {
    "url": "assets/js/43.d9f1c01f.js",
    "revision": "63f3b9ca6053b8706db7d2e873e64c29"
  },
  {
    "url": "assets/js/44.28ffcdc2.js",
    "revision": "c210f218eee9d5b9d2f8d58e7392dfc7"
  },
  {
    "url": "assets/js/45.7d6bc2e3.js",
    "revision": "23141e3fa24835eda9c8020212f3f4d5"
  },
  {
    "url": "assets/js/46.94385552.js",
    "revision": "7c6779a070118c62589946c0dc116e41"
  },
  {
    "url": "assets/js/47.3448f165.js",
    "revision": "daeae721e906d64024200b05050110b4"
  },
  {
    "url": "assets/js/48.8ebb9011.js",
    "revision": "0a06cb94a248ae659d98390a18ebb02e"
  },
  {
    "url": "assets/js/49.9400beb1.js",
    "revision": "5a6a127e48ed6c5bc1335dd76c541d92"
  },
  {
    "url": "assets/js/5.35f47e35.js",
    "revision": "d8400364677aaf12dfea1a9f85ae57af"
  },
  {
    "url": "assets/js/50.bfaec4dc.js",
    "revision": "47400e8eec6c655d09fdf1765ce0c264"
  },
  {
    "url": "assets/js/51.cd87f48b.js",
    "revision": "9821bd92c093cc0bcab556b8af07f016"
  },
  {
    "url": "assets/js/52.c11c2d3c.js",
    "revision": "056aaa42de539728511e379dee778c89"
  },
  {
    "url": "assets/js/53.c7235104.js",
    "revision": "b3e426586e39a162391ed54c776fa805"
  },
  {
    "url": "assets/js/54.c3108295.js",
    "revision": "95b10952357bf73ed3ee0f568116f36b"
  },
  {
    "url": "assets/js/55.8d71cd24.js",
    "revision": "c9491478ce1f169f16ec2849dbcee9a4"
  },
  {
    "url": "assets/js/56.8f5b139a.js",
    "revision": "31c461a4bd08947f8357d4eeac1163f9"
  },
  {
    "url": "assets/js/57.1582b602.js",
    "revision": "19a69c77f785d0a53c8998ad29f6002b"
  },
  {
    "url": "assets/js/58.0b3c54ea.js",
    "revision": "f49de26496b6432c12507ab15dd73f17"
  },
  {
    "url": "assets/js/59.4ffbe4ac.js",
    "revision": "ef7da2b28d1c5ab765d725b7c601e667"
  },
  {
    "url": "assets/js/6.79e87416.js",
    "revision": "54a221eb811d1e3f4f8acc0375ef51c5"
  },
  {
    "url": "assets/js/60.11239868.js",
    "revision": "5b89d93316c3772f074df6211beef971"
  },
  {
    "url": "assets/js/61.1afdc0bc.js",
    "revision": "bd0db8d67d2a28e894af89c5565f938a"
  },
  {
    "url": "assets/js/62.0fa17483.js",
    "revision": "6a56c82cfc530d20b7aec011b658c6fe"
  },
  {
    "url": "assets/js/63.a6c9324e.js",
    "revision": "65cc2ff91dd8f316dd96daa52d61d0c9"
  },
  {
    "url": "assets/js/64.f4afed85.js",
    "revision": "5778db6bf7a1b2f95d6dfe02488ee29c"
  },
  {
    "url": "assets/js/65.d8e0871c.js",
    "revision": "b1ea081de2d6d59c9b2ed6147e8191af"
  },
  {
    "url": "assets/js/66.938391a5.js",
    "revision": "ee7bda470e6085b9f83f7e25b0ccdc1c"
  },
  {
    "url": "assets/js/7.a354526e.js",
    "revision": "dc87450e2c2b7a77b2d9faa9b620fb63"
  },
  {
    "url": "assets/js/8.09852e4d.js",
    "revision": "1504260823fdfe16df6d6142c88e1246"
  },
  {
    "url": "assets/js/9.7c4ea70f.js",
    "revision": "5b03c6aef1f9530c62d36b9ae271ecba"
  },
  {
    "url": "assets/js/app.9af10110.js",
    "revision": "8f329a1f96f8173a8399c7ec3f61e490"
  },
  {
    "url": "images/fe.png",
    "revision": "f9dcc0b2d1c469b2c11f779f75c2ac0f"
  },
  {
    "url": "images/icons/icon-128x128.png",
    "revision": "990c5e0b1dfe6fb536ee09eec59465cd"
  },
  {
    "url": "images/icons/icon-144x144.png",
    "revision": "f8dc7fb1af07531e2246e9830f51edc7"
  },
  {
    "url": "images/icons/icon-152x152.png",
    "revision": "0c311dc8a891275aaf6c470b93aa2074"
  },
  {
    "url": "images/icons/icon-192x192.png",
    "revision": "65093a8d112a4d8b45953084fbb16487"
  },
  {
    "url": "images/icons/icon-384x384.png",
    "revision": "4d70d214b4def5aabe58cfb017ddd16b"
  },
  {
    "url": "images/icons/icon-512x512.png",
    "revision": "4d70d214b4def5aabe58cfb017ddd16b"
  },
  {
    "url": "images/icons/icon-72x72.png",
    "revision": "eff562dd276ec4a5989ed0fb74c7fea0"
  },
  {
    "url": "images/icons/icon-96x96.png",
    "revision": "a9af55f93b2cf1d325951fde149826f7"
  },
  {
    "url": "index.html",
    "revision": "d812de2da8ceb6ec51e18706a59a05c5"
  },
  {
    "url": "logo.png",
    "revision": "417f7b51b74ff7a1dfe9210c2dc64d1a"
  },
  {
    "url": "zh/algorithms/binaryTree/index.html",
    "revision": "01a0c10eb1a9f175b20cd0d158786b25"
  },
  {
    "url": "zh/algorithms/index.html",
    "revision": "0472644c2ce473f3262d0ae2d224d3ec"
  },
  {
    "url": "zh/array/arrayMove/index.html",
    "revision": "8c1894d8b2e07c63f960e539fab8b3c9"
  },
  {
    "url": "zh/array/find/index.html",
    "revision": "993bcc4b855f4b5a8c072012f968552f"
  },
  {
    "url": "zh/array/index.html",
    "revision": "0581352dde38ea4f5c893c54003e3713"
  },
  {
    "url": "zh/array/isArray/index.html",
    "revision": "ce5316efc9fa5fdc4de9a5ab0025f352"
  },
  {
    "url": "zh/design-pattern/adapter-pattern/index.html",
    "revision": "f7e895a2aec496bf7e8b62bf25ad5cf9"
  },
  {
    "url": "zh/design-pattern/decorator-pattern/index.html",
    "revision": "9c8fdd5d26b73c6c37086befba5caf00"
  },
  {
    "url": "zh/design-pattern/facade-pattern/index.html",
    "revision": "112292f6e016cd35fb0168b8b5c7d469"
  },
  {
    "url": "zh/design-pattern/factory-pattern/index.html",
    "revision": "cdd77d20bd6f141819108427a145d441"
  },
  {
    "url": "zh/design-pattern/index.html",
    "revision": "0e27195b92ec7debb8e7574a8881b30e"
  },
  {
    "url": "zh/design-pattern/iterator-pattern/index.html",
    "revision": "73b93b53f5f97625ac007be445d518d3"
  },
  {
    "url": "zh/design-pattern/observer-pattern/index.html",
    "revision": "9726f89c1a8e6d9282a99a4cd8b12f84"
  },
  {
    "url": "zh/design-pattern/proxy-pattern/index.html",
    "revision": "25595efb9d4fd868a73c1d0eeaef9b12"
  },
  {
    "url": "zh/design-pattern/singleton-pattern/index.html",
    "revision": "fa811691de8b3ce7d76f168865027d3b"
  },
  {
    "url": "zh/es6/index.html",
    "revision": "02cd015500c9876112696da7ad3b20e5"
  },
  {
    "url": "zh/es6/promise/index.html",
    "revision": "a409c8b7dfd6a5cd33b2849fedb1de67"
  },
  {
    "url": "zh/function/debounce/index.html",
    "revision": "9f086cd4d0f29b47bbf8db2c809fc986"
  },
  {
    "url": "zh/function/index.html",
    "revision": "ab12c5457a76f9538e98656994a4b7ba"
  },
  {
    "url": "zh/function/throttle/index.html",
    "revision": "781a37a87c80dc8d060b2224fd5dd1af"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "2f496fb12c2083358e90b473abf95fb0"
  },
  {
    "url": "zh/how-to-write-docs/index.html",
    "revision": "cd08afda22168769e7605947fef94b8e"
  },
  {
    "url": "zh/leetcode/index.html",
    "revision": "865df2d80765e128c1093dff507b463b"
  },
  {
    "url": "zh/leetcode/p3/index.html",
    "revision": "d921b5b2bdd370fc6f5ed67de457f849"
  },
  {
    "url": "zh/math/binary/index.html",
    "revision": "7030fde13274b2b496ac450cb6754599"
  },
  {
    "url": "zh/math/factorial/index.html",
    "revision": "bf08a64ef6173174e575749c46aed51b"
  },
  {
    "url": "zh/math/fibonacci/index.html",
    "revision": "939714cb683b66b79ab761cd9f9ab604"
  },
  {
    "url": "zh/math/gcd/index.html",
    "revision": "ef796ba6b8dbc126f5df3de8db8d70a4"
  },
  {
    "url": "zh/math/index.html",
    "revision": "d8e3b061fb51ab8fd34c50800de17254"
  },
  {
    "url": "zh/math/lcm/index.html",
    "revision": "c8dc171e9164ad7ee44e888d4a8e6cec"
  },
  {
    "url": "zh/math/pow/index.html",
    "revision": "b364098b6efe6e11c44a2e6bd0c95815"
  },
  {
    "url": "zh/object/index.html",
    "revision": "4152cf4e483e1fdeafd71fee0ded66cc"
  },
  {
    "url": "zh/object/is/index.html",
    "revision": "7a201c7ea43754fa019353dab98e9d56"
  },
  {
    "url": "zh/primitive/apply/index.html",
    "revision": "23faf8b1fe97c73c0731c8898e973169"
  },
  {
    "url": "zh/primitive/bind/index.html",
    "revision": "676e4218b2ec067775e95e0409841ad9"
  },
  {
    "url": "zh/primitive/call/index.html",
    "revision": "e727a0514cd58494f65b3c70acb8c1a6"
  },
  {
    "url": "zh/primitive/index.html",
    "revision": "60455896fbbf00ff4bd57a336efc27ce"
  },
  {
    "url": "zh/primitive/instanceof/index.html",
    "revision": "92dd5e3d261ccadd7763c139f4b0a4e6"
  },
  {
    "url": "zh/primitive/new/index.html",
    "revision": "9b81dde93381fea67a2fd937e72ce24b"
  },
  {
    "url": "zh/sort/bubbleSort/index.html",
    "revision": "208d7533d18dc0af300e3a93ad498696"
  },
  {
    "url": "zh/sort/bucketSort/index.html",
    "revision": "3da4e3df6b91c1e977b7d0cd80165bd1"
  },
  {
    "url": "zh/sort/countingSort/index.html",
    "revision": "97f7d93c1355e1ce9c5a2e057fba1208"
  },
  {
    "url": "zh/sort/heapSort/index.html",
    "revision": "76fe0a4280821f1540a78d33e0a7f15c"
  },
  {
    "url": "zh/sort/index.html",
    "revision": "54ac247bf75c00aeacaf4828638ee27c"
  },
  {
    "url": "zh/sort/insertionSort/index.html",
    "revision": "8deae97de0e7d93c675aa0298dfa8e5e"
  },
  {
    "url": "zh/sort/mergeSort/index.html",
    "revision": "12f313f6c43877e980b7847ecbb7beb1"
  },
  {
    "url": "zh/sort/quickSort/index.html",
    "revision": "dcb418e0d99866a08cae32b9e66dc6f3"
  },
  {
    "url": "zh/sort/radixSort/index.html",
    "revision": "73b93b2f14546dfe1df16d66ed6c3966"
  },
  {
    "url": "zh/sort/selectionSort/index.html",
    "revision": "0b83d1ed164672210659efe47c06a9ee"
  },
  {
    "url": "zh/sort/shellSort/index.html",
    "revision": "b013dbeea6aff63fd84ff07400b6c675"
  },
  {
    "url": "zh/sword-means-offer/03-find-repeat-number/index.html",
    "revision": "e1583883ff21928d231510a7ddeb27b9"
  },
  {
    "url": "zh/sword-means-offer/64-sum-1-n-nums/index.html",
    "revision": "1523888e8a25ba46bbaec8746154f292"
  },
  {
    "url": "zh/sword-means-offer/index.html",
    "revision": "b21529b8d71fbca5683700a3043a568f"
  },
  {
    "url": "zh/types/index.html",
    "revision": "db23b480493dca60241db9e95ee129a8"
  },
  {
    "url": "zh/utils/index.html",
    "revision": "f6beab0b06bce27e4b17f4eb67173e74"
  },
  {
    "url": "zh/vdom-diff/index.html",
    "revision": "51c59e83565b61f8b164922c28e1ab59"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
