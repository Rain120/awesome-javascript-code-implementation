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
    "revision": "6d39076c30d3ec13f8f87ca2c2aaf961"
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
    "url": "assets/js/18.864ef7d5.js",
    "revision": "a3fadae6d35b8e166e97f611b7bae2e7"
  },
  {
    "url": "assets/js/19.d792b6ca.js",
    "revision": "cb4f2ece79b84d139c6f6c3eea69fee5"
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
    "url": "assets/js/24.729a8966.js",
    "revision": "fb274b536c89e0da5b4139b81f9003d4"
  },
  {
    "url": "assets/js/25.1b8e3989.js",
    "revision": "2d02fbe6db53a0c17beb41a1e1264224"
  },
  {
    "url": "assets/js/26.2903550f.js",
    "revision": "a3b2e0217021140b67ed2cdeaa80a552"
  },
  {
    "url": "assets/js/27.ae881ac8.js",
    "revision": "e51b9b2f61e9b082028e91306e930972"
  },
  {
    "url": "assets/js/28.4c8af2a8.js",
    "revision": "f312f60f3bc605d5e1f6ac2ea879c587"
  },
  {
    "url": "assets/js/29.53460d45.js",
    "revision": "df21a671015053ee65b170bec0115b19"
  },
  {
    "url": "assets/js/3.3a53985c.js",
    "revision": "c1416d4aa9b3a9da391690579603e4fc"
  },
  {
    "url": "assets/js/30.44188bcc.js",
    "revision": "3b7b4eb235516973b9306f6d4d9eb0e9"
  },
  {
    "url": "assets/js/31.2fb32871.js",
    "revision": "b5acea624bf502d2c8e0ab588b3f4500"
  },
  {
    "url": "assets/js/32.2f760e18.js",
    "revision": "72e60c70065605ad31e16fa47a722dee"
  },
  {
    "url": "assets/js/33.14741db2.js",
    "revision": "eb6d7dd9bf286bf616ee7e2575f13421"
  },
  {
    "url": "assets/js/34.6f3563d4.js",
    "revision": "878129d38f0b5d2c770eb6f816c90896"
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
    "url": "assets/js/4.ed35a72b.js",
    "revision": "c126b693d912b1fde9e5283ab3ca02d0"
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
    "url": "assets/js/45.3dccc75a.js",
    "revision": "e7a7f5a3e245ea62c488b4d430641df7"
  },
  {
    "url": "assets/js/46.0ebb7267.js",
    "revision": "7e9bc2d1c7528e8b6aad6a463c2f4f8e"
  },
  {
    "url": "assets/js/47.323beef3.js",
    "revision": "bef01b586088789a87833b7932caa3b7"
  },
  {
    "url": "assets/js/48.9d15c0c7.js",
    "revision": "79f624580896222e73163fb354ba0e46"
  },
  {
    "url": "assets/js/49.f160d044.js",
    "revision": "2e3c009f688179527b5da6a9ec98eb27"
  },
  {
    "url": "assets/js/5.35f47e35.js",
    "revision": "d8400364677aaf12dfea1a9f85ae57af"
  },
  {
    "url": "assets/js/50.7e82e880.js",
    "revision": "a57759ae5b86d46b412f6f3088056c5c"
  },
  {
    "url": "assets/js/51.7b7a1eb0.js",
    "revision": "a005798d7823f27c42e055fcd12461c3"
  },
  {
    "url": "assets/js/52.a6481668.js",
    "revision": "f010f6d10110ab4cbf2bb24aa759f357"
  },
  {
    "url": "assets/js/53.eede24a8.js",
    "revision": "d5ae088aff2557446d27daf5b585c0ae"
  },
  {
    "url": "assets/js/54.bd33b269.js",
    "revision": "51842b03db42efc0c3ae441b3bf788fd"
  },
  {
    "url": "assets/js/55.dfe773ff.js",
    "revision": "0331b52173860da4e2c42f33ed81498b"
  },
  {
    "url": "assets/js/56.55cad61b.js",
    "revision": "73beb11880cd85ca6a1f5cad4aaa8926"
  },
  {
    "url": "assets/js/57.049b4b7a.js",
    "revision": "41d3539f9217fa2c5e3793eaf62b7a90"
  },
  {
    "url": "assets/js/58.36a5505d.js",
    "revision": "a701e0476b3b43ef9c78d934f4c1823d"
  },
  {
    "url": "assets/js/59.0814658b.js",
    "revision": "affb77446c0e40c66d3fc575626766aa"
  },
  {
    "url": "assets/js/6.79e87416.js",
    "revision": "54a221eb811d1e3f4f8acc0375ef51c5"
  },
  {
    "url": "assets/js/60.394f6714.js",
    "revision": "a76f8cc9fdafecb0ff3877a3574d7bba"
  },
  {
    "url": "assets/js/61.9f3b09a4.js",
    "revision": "915ba802f1392cdeeda750be449819ca"
  },
  {
    "url": "assets/js/62.6c0c7cbd.js",
    "revision": "ee0e80e15c38ac6c365d9acd26701c66"
  },
  {
    "url": "assets/js/63.b471dc3b.js",
    "revision": "c83587f1530fd2f1b3f2492151dd127d"
  },
  {
    "url": "assets/js/64.7a8794af.js",
    "revision": "9a4b68d97ccdaf865a77fa3ce9f6f606"
  },
  {
    "url": "assets/js/7.9eacc344.js",
    "revision": "b42871c01bdd2e6ed3d309ec247ef14a"
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
    "url": "assets/js/app.329e188a.js",
    "revision": "9d2ccfdbe2f6a4bb221dd6fafbd6071e"
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
    "revision": "35ae63e6fbdb5c4490a9a8cdd544c9ac"
  },
  {
    "url": "logo.png",
    "revision": "417f7b51b74ff7a1dfe9210c2dc64d1a"
  },
  {
    "url": "zh/algorithms/binaryTree/index.html",
    "revision": "3006c84fd91382fd72159fdffce40628"
  },
  {
    "url": "zh/algorithms/index.html",
    "revision": "ca2c950689dad3b757f16a00a21f5dc5"
  },
  {
    "url": "zh/array/arrayMove/index.html",
    "revision": "7ca2feeeed38fff7f913d5bd3b322c47"
  },
  {
    "url": "zh/array/find/index.html",
    "revision": "4708b708f0fd225209ea5d5e6c0dfa65"
  },
  {
    "url": "zh/array/index.html",
    "revision": "19f270eb49e70e30aef59627ae38e5f6"
  },
  {
    "url": "zh/array/isArray/index.html",
    "revision": "8dec174f6044e8536dd37e7e5e6a5be9"
  },
  {
    "url": "zh/design-pattern/adapter-pattern/index.html",
    "revision": "a60143934d2562bebff7cd55ad639462"
  },
  {
    "url": "zh/design-pattern/decorator-pattern/index.html",
    "revision": "d271221fcc02c2f69424c59556fabebd"
  },
  {
    "url": "zh/design-pattern/facade-pattern/index.html",
    "revision": "845f83b2a6d08d0c67b7344522be6f50"
  },
  {
    "url": "zh/design-pattern/factory-pattern/index.html",
    "revision": "135e84d75c0a97b3898ba63c05d25c59"
  },
  {
    "url": "zh/design-pattern/index.html",
    "revision": "8625c7e43e454eed43f2da21551423da"
  },
  {
    "url": "zh/design-pattern/iterator-pattern/index.html",
    "revision": "5fe20ea3d29d60d7982abcba09d02028"
  },
  {
    "url": "zh/design-pattern/observer-pattern/index.html",
    "revision": "faf1fd6555ca3fcde83fc31c364afa18"
  },
  {
    "url": "zh/design-pattern/proxy-pattern/index.html",
    "revision": "7b4345b44c92704a62f7e2d213db56b9"
  },
  {
    "url": "zh/design-pattern/singleton-pattern/index.html",
    "revision": "77a3d1e9ea78534edfda8cca13f118d7"
  },
  {
    "url": "zh/es6/index.html",
    "revision": "40450ee38e34bd5235dc624438d7cbbd"
  },
  {
    "url": "zh/es6/promise/index.html",
    "revision": "881d61b0d5b34a121ba2efd46ffeedea"
  },
  {
    "url": "zh/function/debounce/index.html",
    "revision": "0d498c8989f1504f6ff3e96ec1bf9f65"
  },
  {
    "url": "zh/function/index.html",
    "revision": "f3a1247f3e67572ffdb9d0bbd2204855"
  },
  {
    "url": "zh/function/throttle/index.html",
    "revision": "fd4cb5b9d580b8e9896c993e7e0cc765"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "47b6612d4a77bc58e984867c4320e416"
  },
  {
    "url": "zh/how-to-write-docs/index.html",
    "revision": "60c7b2ac57dbc06e7f63d7f179e72519"
  },
  {
    "url": "zh/math/binary/index.html",
    "revision": "14a8fb8ccfb7dd0baf09898c5135c0b3"
  },
  {
    "url": "zh/math/factorial/index.html",
    "revision": "c8fbab225ac76aa2718f042f43de1140"
  },
  {
    "url": "zh/math/fibonacci/index.html",
    "revision": "c3abc4f277203630a38612b13171f374"
  },
  {
    "url": "zh/math/gcd/index.html",
    "revision": "3bb4cb5a59bcd05dd98c2e4ba711625a"
  },
  {
    "url": "zh/math/index.html",
    "revision": "d075f069be6e47306fff33f0819eafc5"
  },
  {
    "url": "zh/math/lcm/index.html",
    "revision": "92bb258263ca6255831e5f53824b5690"
  },
  {
    "url": "zh/math/pow/index.html",
    "revision": "d2629a3aee8b1bcbae0cbfece1ae078c"
  },
  {
    "url": "zh/object/index.html",
    "revision": "2338f6d708664d5cada3293ae91d5f52"
  },
  {
    "url": "zh/object/is/index.html",
    "revision": "9f7e3bf8462878258159b6b590847b01"
  },
  {
    "url": "zh/primitive/apply/index.html",
    "revision": "b5d72b05ce07e4e970302683c60c93e2"
  },
  {
    "url": "zh/primitive/bind/index.html",
    "revision": "2ffab3a5eea1f3f8ddb836a3970672b3"
  },
  {
    "url": "zh/primitive/call/index.html",
    "revision": "f0642b69fdfa9413fae5725ad307a89e"
  },
  {
    "url": "zh/primitive/index.html",
    "revision": "77f5381a5d6cb13d834f44e9fbbfd669"
  },
  {
    "url": "zh/primitive/instanceof/index.html",
    "revision": "9862592b487dbfe90c456cf93ef49059"
  },
  {
    "url": "zh/primitive/new/index.html",
    "revision": "111b553b84d68a8a68ccb03ef3bcb1f5"
  },
  {
    "url": "zh/sort/bubbleSort/index.html",
    "revision": "9f5640eae87283a16bf460296a29ea69"
  },
  {
    "url": "zh/sort/bucketSort/index.html",
    "revision": "5a357612c57865d49e5fe4281954c916"
  },
  {
    "url": "zh/sort/countingSort/index.html",
    "revision": "4c1863292240dcbe6ace27260ac99c0a"
  },
  {
    "url": "zh/sort/heapSort/index.html",
    "revision": "79788a5c08ca709e1b5eecffc5ecf429"
  },
  {
    "url": "zh/sort/index.html",
    "revision": "d4e0bd9a47f24780ad6c26c6bc82bf2c"
  },
  {
    "url": "zh/sort/insertionSort/index.html",
    "revision": "5591c9ac4eaf57c7fb8892b625a35923"
  },
  {
    "url": "zh/sort/mergeSort/index.html",
    "revision": "13629e693096a86074f21d7a9394fb43"
  },
  {
    "url": "zh/sort/quickSort/index.html",
    "revision": "be448ec40afdfeba9aa1d86d7b7e144a"
  },
  {
    "url": "zh/sort/radixSort/index.html",
    "revision": "e58791730ee3f0b7ea96a2465a0d95ba"
  },
  {
    "url": "zh/sort/selectionSort/index.html",
    "revision": "84389bb73991e9635ec04143cccfe1ef"
  },
  {
    "url": "zh/sort/shellSort/index.html",
    "revision": "ce528cb8f7025bbd9a3b9f3ef06a6723"
  },
  {
    "url": "zh/sword-means-offer/03-find-repeat-number/index.html",
    "revision": "4a2b08e39bd846a9ac8da5def2555a32"
  },
  {
    "url": "zh/sword-means-offer/64-sum-1-n-nums/index.html",
    "revision": "0e6ebcce5e3729b4f7820adbcd12be1b"
  },
  {
    "url": "zh/sword-means-offer/index.html",
    "revision": "9d6a675ae58034cbfd7e425ad50205e1"
  },
  {
    "url": "zh/types/index.html",
    "revision": "7ccb00980a034f21ddddb12be37b98bf"
  },
  {
    "url": "zh/utils/index.html",
    "revision": "93baa69ca39b135a45e4f1026f9b181c"
  },
  {
    "url": "zh/vdom-diff/index.html",
    "revision": "10b03252c652e24ab7d7498e8e55b249"
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
