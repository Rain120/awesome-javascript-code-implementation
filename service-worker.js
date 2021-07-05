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
    "revision": "5d47fbb5e118294374076996908b1f74"
  },
  {
    "url": "assets/css/0.styles.9a81a41f.css",
    "revision": "85c24119dce1bd0beb219558c7181082"
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
    "url": "assets/js/10.d1751629.js",
    "revision": "640bef1346613c4c96c5f07aae9f86ae"
  },
  {
    "url": "assets/js/11.db9116e9.js",
    "revision": "0412a4d2cc83398a6cd39f7394587cad"
  },
  {
    "url": "assets/js/12.6fe8ff7c.js",
    "revision": "7f9159013e2e92e5200f792d31f4b79c"
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
    "url": "assets/js/16.be0314fc.js",
    "revision": "395a49fb95c9068e7904d1f71f679b56"
  },
  {
    "url": "assets/js/17.d6ed84f3.js",
    "revision": "5d9f0f29f267118f2e609b53205bea0e"
  },
  {
    "url": "assets/js/18.488c3d3c.js",
    "revision": "5624bb7d4d2b64613507851388024174"
  },
  {
    "url": "assets/js/19.52c3f83d.js",
    "revision": "8eea442b8d286b12a8d8c56ecf65a02c"
  },
  {
    "url": "assets/js/2.58614396.js",
    "revision": "b48c8021f14875c949fa3027acd08f52"
  },
  {
    "url": "assets/js/20.c5c8d42a.js",
    "revision": "68f098245e8db661cbee0351aeaede4f"
  },
  {
    "url": "assets/js/21.3dfbf736.js",
    "revision": "9ed7110b9dddce858bc9f1f0b5e91fad"
  },
  {
    "url": "assets/js/22.a845cb4b.js",
    "revision": "e95b7756c06af6d6a8951d36b851c3d4"
  },
  {
    "url": "assets/js/23.2ae02663.js",
    "revision": "76dd35d209a93d24e48671bfd0cc6c86"
  },
  {
    "url": "assets/js/24.bfaa07d1.js",
    "revision": "d4fb2f655e944f86256c17452506c0ec"
  },
  {
    "url": "assets/js/25.d6e5426d.js",
    "revision": "8f4678b6dc6ba4d1904030e536a7b0f1"
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
    "url": "assets/js/29.3fb2ed05.js",
    "revision": "026936152ff2f7e7cfa85a47d506f0dc"
  },
  {
    "url": "assets/js/3.3a53985c.js",
    "revision": "c1416d4aa9b3a9da391690579603e4fc"
  },
  {
    "url": "assets/js/30.ff54236c.js",
    "revision": "55ff475237d75ddacc4b176909390348"
  },
  {
    "url": "assets/js/31.fe3ad7c6.js",
    "revision": "2fab0ff80182ea2b2b45163b453e7f13"
  },
  {
    "url": "assets/js/32.a6078083.js",
    "revision": "a945a235690817b8fb8b05558dc34681"
  },
  {
    "url": "assets/js/33.5de855f8.js",
    "revision": "825b38f1a63bdf9eec8b471c377dd5f0"
  },
  {
    "url": "assets/js/34.2567c831.js",
    "revision": "5fc5b16973f98c7819f1ce4259b31584"
  },
  {
    "url": "assets/js/35.6b4ea37c.js",
    "revision": "c0240d8a17c7e6cc2006bed31ba10500"
  },
  {
    "url": "assets/js/36.daf64c48.js",
    "revision": "27d531d3b2e90c9eb6c14768ea999ab7"
  },
  {
    "url": "assets/js/37.bf5f519d.js",
    "revision": "b9577b37d31d571d777634037aaf97d1"
  },
  {
    "url": "assets/js/38.17ea9ea6.js",
    "revision": "7abb02c0347e4b1ea79a17d626085cf0"
  },
  {
    "url": "assets/js/39.2811b961.js",
    "revision": "0d2a0a91726adcb0be7c33acee5c1a71"
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
    "url": "assets/js/41.38803378.js",
    "revision": "6b8ac0ea2bae4bdfa3cde97afe4493a9"
  },
  {
    "url": "assets/js/42.03e7f691.js",
    "revision": "739e61e4bdcd3c9896933a3dc0ebcf9a"
  },
  {
    "url": "assets/js/43.ec3522b7.js",
    "revision": "6cf2891fa5fe5342b7d3b030ea99c7d0"
  },
  {
    "url": "assets/js/44.b776705e.js",
    "revision": "95c958b24866a51678ea0b65f8518cca"
  },
  {
    "url": "assets/js/45.573b6cf0.js",
    "revision": "9e07adbb553fe41abaf2fe71b68201ef"
  },
  {
    "url": "assets/js/46.5090cd34.js",
    "revision": "ab01e6682522a0cdcb5ffea1b1049c89"
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
    "url": "assets/js/49.d85f2c8a.js",
    "revision": "8d0ecc594d04f4dfa8b74ea5e5188bf9"
  },
  {
    "url": "assets/js/5.35f47e35.js",
    "revision": "d8400364677aaf12dfea1a9f85ae57af"
  },
  {
    "url": "assets/js/50.132731fc.js",
    "revision": "d0a8e4558a7a016dab7b313bb4b2e59f"
  },
  {
    "url": "assets/js/51.acff046d.js",
    "revision": "f3750b43d5017d017efab9ef7478387c"
  },
  {
    "url": "assets/js/52.3ca3e818.js",
    "revision": "509fb1010a64c27b4986e85777b64227"
  },
  {
    "url": "assets/js/53.eede24a8.js",
    "revision": "d5ae088aff2557446d27daf5b585c0ae"
  },
  {
    "url": "assets/js/54.dc5ee120.js",
    "revision": "fe535ca87c72eeae7bb55dfc55c5f2bf"
  },
  {
    "url": "assets/js/55.002fefbc.js",
    "revision": "c02dea4ae5cdefb6b98b508aba4ecac0"
  },
  {
    "url": "assets/js/56.9ea4975f.js",
    "revision": "16cdf1e4a8cc4b327e3abf4c0375f1d8"
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
    "url": "assets/js/59.991288c2.js",
    "revision": "1bc33bd2d9ae6e9ec94a05992fa957f3"
  },
  {
    "url": "assets/js/6.79e87416.js",
    "revision": "54a221eb811d1e3f4f8acc0375ef51c5"
  },
  {
    "url": "assets/js/60.60f2816a.js",
    "revision": "e96fceff490065b096ecab00397d9da2"
  },
  {
    "url": "assets/js/61.7e959e9b.js",
    "revision": "c819ef2f74e9a47c433a9fa88e503d81"
  },
  {
    "url": "assets/js/62.6b145540.js",
    "revision": "25754db88c94c4a527360366f093e8f6"
  },
  {
    "url": "assets/js/63.d406f828.js",
    "revision": "eb6ec81f422880b5cf29a89367c7a53c"
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
    "url": "assets/js/8.bd37dfda.js",
    "revision": "87eb4c6c23d072a97b91b6f3fbb1b668"
  },
  {
    "url": "assets/js/9.10f08ca5.js",
    "revision": "e7549ea0cda93e16768d9993ba8a59a2"
  },
  {
    "url": "assets/js/app.6e2a2e38.js",
    "revision": "6e3aa99a75ef008ae9c95a48cdc9974f"
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
    "revision": "046f9e4ae6eda3d7d06d6e1611fc48bd"
  },
  {
    "url": "logo.png",
    "revision": "417f7b51b74ff7a1dfe9210c2dc64d1a"
  },
  {
    "url": "zh/algorithms/binaryTree/index.html",
    "revision": "d023867b3615c5cb6ed7107b15df71d1"
  },
  {
    "url": "zh/algorithms/index.html",
    "revision": "114e408fd63ebff51f1482020a4a8100"
  },
  {
    "url": "zh/array/arrayMove/index.html",
    "revision": "6be6631db50f36c9c1ff22ea568dfaab"
  },
  {
    "url": "zh/array/find/index.html",
    "revision": "065ffd496be77601dcce41ea35b4748f"
  },
  {
    "url": "zh/array/index.html",
    "revision": "edeac331c9f5a71c53f5b05ed8d1678a"
  },
  {
    "url": "zh/array/isArray/index.html",
    "revision": "b04526d9e762f151c8531dd9642098d1"
  },
  {
    "url": "zh/design-pattern/adapter-pattern/index.html",
    "revision": "8c0b6f36cad98f5b71e9a6207a5fcc63"
  },
  {
    "url": "zh/design-pattern/decorator-pattern/index.html",
    "revision": "7e1c81117d481014f426a39c22234b0e"
  },
  {
    "url": "zh/design-pattern/facade-pattern/index.html",
    "revision": "1bd135fccc27dda6fc99c90179e0988c"
  },
  {
    "url": "zh/design-pattern/factory-pattern/index.html",
    "revision": "3833352026ffe468227c07c80227e80f"
  },
  {
    "url": "zh/design-pattern/index.html",
    "revision": "1edc70579e45aab6185858e32bdab935"
  },
  {
    "url": "zh/design-pattern/iterator-pattern/index.html",
    "revision": "b3fb65a67b8727bffa25083d3bbc4e32"
  },
  {
    "url": "zh/design-pattern/observer-pattern/index.html",
    "revision": "eb7497e50bad4536aed0e845e6e9db05"
  },
  {
    "url": "zh/design-pattern/proxy-pattern/index.html",
    "revision": "c8fad1dd5542dad54fa848be1f735495"
  },
  {
    "url": "zh/design-pattern/singleton-pattern/index.html",
    "revision": "c5f39f1cdeef47ce14b3029c3cbce9a8"
  },
  {
    "url": "zh/es6/index.html",
    "revision": "1af9bf86c06e1d4dbb07070b76af74df"
  },
  {
    "url": "zh/es6/promise/index.html",
    "revision": "24725dcc9799872cb7be17478ef5d3a6"
  },
  {
    "url": "zh/function/debounce/index.html",
    "revision": "29b790631484766c7f7f0860e02b6e44"
  },
  {
    "url": "zh/function/index.html",
    "revision": "aaec320502adc4ba7a7ef05f4798e52d"
  },
  {
    "url": "zh/function/throttle/index.html",
    "revision": "3de7b3b93223d8e2fabd00577d9de8c0"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "4e8b8bde572ccd967adcdbd44200637a"
  },
  {
    "url": "zh/how-to-write-docs/index.html",
    "revision": "37684875f276d913fc1a15500d6538f5"
  },
  {
    "url": "zh/math/binary/index.html",
    "revision": "28a32dac377a5c63045481b24179b004"
  },
  {
    "url": "zh/math/factorial/index.html",
    "revision": "f7236e285a66e052104bb70f83d55ecf"
  },
  {
    "url": "zh/math/fibonacci/index.html",
    "revision": "6f83b013c46472e8ac4661e788923afc"
  },
  {
    "url": "zh/math/gcd/index.html",
    "revision": "9541b4c888c79746599e4c84566720bb"
  },
  {
    "url": "zh/math/index.html",
    "revision": "3a9b695c1a7982858188da625af4f7bc"
  },
  {
    "url": "zh/math/lcm/index.html",
    "revision": "1ec7d23d62f89ae81fc08170c5963958"
  },
  {
    "url": "zh/math/pow/index.html",
    "revision": "a958357ff4a1cb557a4ced5d93a1c26c"
  },
  {
    "url": "zh/object/index.html",
    "revision": "dc8ac04b3a48263e1f04e85e3ae841ae"
  },
  {
    "url": "zh/object/is/index.html",
    "revision": "d150b5f6f2c968b69e387b681db82479"
  },
  {
    "url": "zh/primitive/apply/index.html",
    "revision": "e47e9f1c36c0878acddb924d38444768"
  },
  {
    "url": "zh/primitive/bind/index.html",
    "revision": "b85c65e93b16b180a81038d7224bf714"
  },
  {
    "url": "zh/primitive/call/index.html",
    "revision": "3d88cee86632b156f9a42ef9d43a5645"
  },
  {
    "url": "zh/primitive/index.html",
    "revision": "ff4b728862c5a367bb08c48e5a8e6217"
  },
  {
    "url": "zh/primitive/instanceof/index.html",
    "revision": "2c67a8bf695ed361f8c19396810b3a36"
  },
  {
    "url": "zh/primitive/new/index.html",
    "revision": "a30379a53e65142b5437a0b138b72543"
  },
  {
    "url": "zh/sort/bubbleSort/index.html",
    "revision": "a1754c79e7584e62bd14d0c568926a2b"
  },
  {
    "url": "zh/sort/bucketSort/index.html",
    "revision": "1ac1272db52a1774ff4a05e1f39aa28f"
  },
  {
    "url": "zh/sort/countingSort/index.html",
    "revision": "41a8356e2380370dc6df75c3f5517fb0"
  },
  {
    "url": "zh/sort/heapSort/index.html",
    "revision": "6bf8b1ecc242408ed74e09195942690a"
  },
  {
    "url": "zh/sort/index.html",
    "revision": "a17821719530c1c17a54f2b82971de5e"
  },
  {
    "url": "zh/sort/insertionSort/index.html",
    "revision": "33c153ce9c6556884ebfc3d8d4792507"
  },
  {
    "url": "zh/sort/mergeSort/index.html",
    "revision": "153f5343445edf30117a613d0dccb8b9"
  },
  {
    "url": "zh/sort/quickSort/index.html",
    "revision": "2105095c38f374be5f399558426ee943"
  },
  {
    "url": "zh/sort/radixSort/index.html",
    "revision": "82cba7a94ae8b3bca8b1fd145a7d5769"
  },
  {
    "url": "zh/sort/selectionSort/index.html",
    "revision": "d08ba2e7ebc55cf130c00b73ec196770"
  },
  {
    "url": "zh/sort/shellSort/index.html",
    "revision": "d01eb65336e28722cbee0eda44ecd2f7"
  },
  {
    "url": "zh/sword-means-offer/03-find-repeat-number/index.html",
    "revision": "54c092ed56af31c22e1fb64030d5962d"
  },
  {
    "url": "zh/sword-means-offer/64-sum-1-n-nums/index.html",
    "revision": "d2c9753085f91e8f9a55b97a9cc0c254"
  },
  {
    "url": "zh/sword-means-offer/index.html",
    "revision": "701353e7a938cda0431964cadcb4f326"
  },
  {
    "url": "zh/types/index.html",
    "revision": "599694710c8f96818c7b7a3a9cb47260"
  },
  {
    "url": "zh/utils/index.html",
    "revision": "019afd18d7567eb20daf134180a2bb49"
  },
  {
    "url": "zh/vdom-diff/index.html",
    "revision": "846be9c24b575793bfb801be810c83be"
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
