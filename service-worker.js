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
    "revision": "a377bf81b954d21018b762d57ee27795"
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
    "url": "assets/js/59.7aea15a8.js",
    "revision": "de87673fc9728c9d8b3cf8e5791d7726"
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
    "url": "assets/js/app.34318e85.js",
    "revision": "741571826552dae689a1a3be7f6de6ec"
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
    "revision": "e1485619a6eb17b314f02e982a77067b"
  },
  {
    "url": "logo.png",
    "revision": "417f7b51b74ff7a1dfe9210c2dc64d1a"
  },
  {
    "url": "zh/algorithms/binaryTree/index.html",
    "revision": "c22352a8e636efaf47874256f46e56a2"
  },
  {
    "url": "zh/algorithms/index.html",
    "revision": "6ac6f8ad8b110b3f89c26a5fbbd6b9c8"
  },
  {
    "url": "zh/array/arrayMove/index.html",
    "revision": "960de3a1dc86e0b68f9a90b91bd70b8e"
  },
  {
    "url": "zh/array/find/index.html",
    "revision": "43d6e4326b4fac6bb01de87e4d56a4b5"
  },
  {
    "url": "zh/array/index.html",
    "revision": "b4d7324405d2272e061000bc44cb96e9"
  },
  {
    "url": "zh/array/isArray/index.html",
    "revision": "60edf225f7d931e6b0c2c0a097482b02"
  },
  {
    "url": "zh/design-pattern/adapter-pattern/index.html",
    "revision": "90e514b273a86d0d1c9e68379825f61b"
  },
  {
    "url": "zh/design-pattern/decorator-pattern/index.html",
    "revision": "39097517875046f479ad50173925e951"
  },
  {
    "url": "zh/design-pattern/facade-pattern/index.html",
    "revision": "cf7255f62cb3f553c676e26710e83ce8"
  },
  {
    "url": "zh/design-pattern/factory-pattern/index.html",
    "revision": "21610116ea0542726fc744cb13db5c14"
  },
  {
    "url": "zh/design-pattern/index.html",
    "revision": "91b6b2c656530d1e25ff0ba39f74b2ba"
  },
  {
    "url": "zh/design-pattern/iterator-pattern/index.html",
    "revision": "f10f4538d56f798383917d69d8ee593d"
  },
  {
    "url": "zh/design-pattern/observer-pattern/index.html",
    "revision": "980ba39ca5ff2c04eb160139c17a374f"
  },
  {
    "url": "zh/design-pattern/proxy-pattern/index.html",
    "revision": "4077a3e6a28bba5d812b6bccea207a8a"
  },
  {
    "url": "zh/design-pattern/singleton-pattern/index.html",
    "revision": "a4eadbafbf2b0168f60ca72e09ddda31"
  },
  {
    "url": "zh/es6/index.html",
    "revision": "1cec3140b182eecd7af517cc551c2357"
  },
  {
    "url": "zh/es6/promise/index.html",
    "revision": "c012a9fa3c1f068f639afaa669170459"
  },
  {
    "url": "zh/function/debounce/index.html",
    "revision": "81856be2ec0bea4f343f4bd7f0644502"
  },
  {
    "url": "zh/function/index.html",
    "revision": "656a2206646f405acaf46f3c94b67297"
  },
  {
    "url": "zh/function/throttle/index.html",
    "revision": "eeac2724915688830aac43a715463a57"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "c2f0c6ac9d37e3055df9fd05df6f572d"
  },
  {
    "url": "zh/how-to-write-docs/index.html",
    "revision": "1c218a08e5194d90470c53fe6bcf0b47"
  },
  {
    "url": "zh/leetcode/index.html",
    "revision": "ae8426f5984f1833a17aa53e2d3fa1b5"
  },
  {
    "url": "zh/leetcode/p3/index.html",
    "revision": "285a30f33d64a2c56beb392841f37390"
  },
  {
    "url": "zh/math/binary/index.html",
    "revision": "554a3e0f8224c3190bc365ff06f64aac"
  },
  {
    "url": "zh/math/factorial/index.html",
    "revision": "cde492aadd434a35f7166864798c7562"
  },
  {
    "url": "zh/math/fibonacci/index.html",
    "revision": "4066a5139ae5169ec06751a69e29a860"
  },
  {
    "url": "zh/math/gcd/index.html",
    "revision": "dadcc8d89d4d64d7e78f588b92f0ca57"
  },
  {
    "url": "zh/math/index.html",
    "revision": "5092a010592adcc9f40a8cf78236eeb2"
  },
  {
    "url": "zh/math/lcm/index.html",
    "revision": "f8928c49acc3303b4c8356f506bdfab3"
  },
  {
    "url": "zh/math/pow/index.html",
    "revision": "22d756643a8d2edd5f21fc3ad50677cb"
  },
  {
    "url": "zh/object/index.html",
    "revision": "0e316d3ec4192afc572f8ba2653e0e08"
  },
  {
    "url": "zh/object/is/index.html",
    "revision": "d5d58de862bcb689e9dbbcd1a5141b5e"
  },
  {
    "url": "zh/primitive/apply/index.html",
    "revision": "3d9a548ed6d0625568ad84755b5e4154"
  },
  {
    "url": "zh/primitive/bind/index.html",
    "revision": "ce1591c85ae11a5bda7c8a6946111ac7"
  },
  {
    "url": "zh/primitive/call/index.html",
    "revision": "e4b272e83f8d4b37262ffcbd17310c2a"
  },
  {
    "url": "zh/primitive/index.html",
    "revision": "c21a70ebe76b87c59289322d3b6de387"
  },
  {
    "url": "zh/primitive/instanceof/index.html",
    "revision": "a83690a659fccf96c43cb06b4fbe326a"
  },
  {
    "url": "zh/primitive/new/index.html",
    "revision": "da9f249cd5891966047ed6a6bb08e967"
  },
  {
    "url": "zh/sort/bubbleSort/index.html",
    "revision": "0a315b1241d01ed694e5c8cd7144f0c1"
  },
  {
    "url": "zh/sort/bucketSort/index.html",
    "revision": "c7ced49704f2d4f782003b0263650860"
  },
  {
    "url": "zh/sort/countingSort/index.html",
    "revision": "e4d034ae42f0666cfdc9865c1ac9b338"
  },
  {
    "url": "zh/sort/heapSort/index.html",
    "revision": "f09732182044d517c69376990d7a0763"
  },
  {
    "url": "zh/sort/index.html",
    "revision": "e1c301618377c661cd4a4f739ab3da71"
  },
  {
    "url": "zh/sort/insertionSort/index.html",
    "revision": "d98185ca9aa50eb88524b738600f8738"
  },
  {
    "url": "zh/sort/mergeSort/index.html",
    "revision": "93f28f443a28b464d1005865773bffb8"
  },
  {
    "url": "zh/sort/quickSort/index.html",
    "revision": "9752c92b630f397588b0e094deaa4724"
  },
  {
    "url": "zh/sort/radixSort/index.html",
    "revision": "640221ed0c4c0103a04e81e52c9b4d66"
  },
  {
    "url": "zh/sort/selectionSort/index.html",
    "revision": "401165c87bbd97e48b6814a61cf79173"
  },
  {
    "url": "zh/sort/shellSort/index.html",
    "revision": "8a03bcea43f3421a38ce3a3ede49a370"
  },
  {
    "url": "zh/sword-means-offer/03-find-repeat-number/index.html",
    "revision": "64c2760f28fd93eccb94fdb78b0b2430"
  },
  {
    "url": "zh/sword-means-offer/64-sum-1-n-nums/index.html",
    "revision": "41a0517ce908df6505c8123754714bac"
  },
  {
    "url": "zh/sword-means-offer/index.html",
    "revision": "20234b54a10bcd47ea169d4f27e1943b"
  },
  {
    "url": "zh/types/index.html",
    "revision": "56111e3f30343f111a8fb5aa9e40b609"
  },
  {
    "url": "zh/utils/index.html",
    "revision": "f91688c6ada085ef48efc6d7da680f3a"
  },
  {
    "url": "zh/vdom-diff/index.html",
    "revision": "2550e39cb172c5aa66520fd0d7f01c0a"
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
