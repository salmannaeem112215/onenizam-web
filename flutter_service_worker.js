'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "e7fcdf4c497355ffe6b217861584e41f",
"assets/AssetManifest.json": "813c0a6fd50bb4a6c311c882f6cf6eb9",
"assets/assets/icons/bg.png": "31fe2a95def6277a06f51b4d8bcf5720",
"assets/assets/icons/bg1.jpg": "e8f5cb27b98df23a796563765d89a334",
"assets/assets/icons/boy.png": "e09dcd633b09903a3d6628471262e4aa",
"assets/assets/icons/camera.png": "33984f0debe7281b72d75baa8195132d",
"assets/assets/icons/check-double.png": "31e36b4d601dbe657948acb99b222f22",
"assets/assets/icons/check.png": "0acccbd68ae4924c881730426084db55",
"assets/assets/icons/gallary.png": "740b20ab34b1f4822e245cd279a0fcb4",
"assets/assets/icons/home.png": "ab32dc0c5e2c6111a8a52bf7adf9655d",
"assets/assets/icons/message.png": "5e5d9a8181f9ac5690c4a66cf4e2c2a1",
"assets/assets/icons/no-wifi.png": "e7014d2e98eeee6604cc5fd586f30d0e",
"assets/assets/icons/no_profile.png": "561f4b073f28d1df8d23132920decba9",
"assets/assets/icons/profile.png": "29479ba0435741580ca9f4a467be6207",
"assets/assets/icons/protection.png": "54bf1c5bdde98438319b0f71bc71835c",
"assets/assets/icons/search.png": "2ffd0e2a3d1ed091fb5e4fc5775e6347",
"assets/assets/icons/search_1.png": "ba565b6e940bfe85fb87dc4c8ad1e4cb",
"assets/assets/icons/user.png": "c20e6d0a23bb5ca9b310598e65054167",
"assets/assets/images/posts/large/1.jpg": "edeaf6185c8ee7b81f8db3047cbf059e",
"assets/assets/images/posts/large/10.jpg": "4fcc4d5513761ee5076a8dcf7b1a6fb3",
"assets/assets/images/posts/large/12.jpg": "af16a7b69d8dcc945bb45a884b12da12",
"assets/assets/images/posts/large/13.jpg": "871c56a2cdc2631a4f86951ef81bec03",
"assets/assets/images/posts/large/14.jpg": "6ac9c71171359d5b5cdaabd7e7fbfba9",
"assets/assets/images/posts/large/15.jpg": "c6c77d3ac9dfe3e9a56fd6b6155ac801",
"assets/assets/images/posts/large/16.jpg": "1d45dffc4fb9b935eae6bc96a4f978f8",
"assets/assets/images/posts/large/17.jpg": "3636814b32218cfe8b07d3a9601160a3",
"assets/assets/images/posts/large/18.jpg": "021a882c72b2b8c282dcd3ab52a60c82",
"assets/assets/images/posts/large/19.jpg": "209ff635d2b2e9384dfaac1e1e59e3d5",
"assets/assets/images/posts/large/2.jpg": "c13245c4aac19f88b623fe68a2fa8863",
"assets/assets/images/posts/large/20.jpg": "66c8e551980dd880bd984c513922e19d",
"assets/assets/images/posts/large/21.jpg": "42d15697c964cfabf3b2d51d5f4ddbd8",
"assets/assets/images/posts/large/3.jpg": "1faf30cb0f431e76f4f550008ad64830",
"assets/assets/images/posts/large/4.jpg": "cae9a07531aead4bb8a9f9e04aeac2f0",
"assets/assets/images/posts/large/5.jpg": "ed7ae449f2c9094371fe03394aa47525",
"assets/assets/images/posts/large/6.jpg": "6a4d3fbf977a47cc61564d686944a33a",
"assets/assets/images/posts/large/7.jpg": "6b81bb8bc8735a4492c52ea484924f63",
"assets/assets/images/posts/large/8.jpg": "3598956e6d0d183a380c4df5d6e48425",
"assets/assets/images/posts/large/9.jpg": "77b04dca6ab5c7dc381851cefb052d6b",
"assets/assets/images/posts/small/1.jpg": "b6aeddd3f08f1bc9ddb740b37d3a25f5",
"assets/assets/images/posts/small/10.jpg": "a05714fc47c7d64238d6c884140720b7",
"assets/assets/images/posts/small/12.jpg": "e3e59f6578fea64e785a57c00688a6fc",
"assets/assets/images/posts/small/13.jpg": "b32ea6400234dcecb1f66e0c1a34354e",
"assets/assets/images/posts/small/14.jpg": "285a818a3ce616502927e9499d54afaf",
"assets/assets/images/posts/small/15.jpg": "6e5ff0bcfe90a447067ca6be70fe7733",
"assets/assets/images/posts/small/16.jpg": "bad9e2bdb68fb55dc8d98bb03135e2ad",
"assets/assets/images/posts/small/17.jpg": "bc5c981c222152bb0a4d3ddea2e9adfe",
"assets/assets/images/posts/small/18.jpg": "d45194dc525849fd5d2f00c4a867267e",
"assets/assets/images/posts/small/19.jpg": "d41ce131320ae08cf9c1417e31dbd7d0",
"assets/assets/images/posts/small/2.jpg": "e26ab34fee9e4dbea22f583cd84b4e21",
"assets/assets/images/posts/small/20.jpg": "7a6000b57b18d3c538553af02610ef80",
"assets/assets/images/posts/small/21.jpg": "447be8d1f342469b32c356d22a1c09a7",
"assets/assets/images/posts/small/3.jpg": "338a54774c7c59c0c1dc94186998576f",
"assets/assets/images/posts/small/4.jpg": "6ba3c512348def148fca0cd9cbc117b7",
"assets/assets/images/posts/small/5.jpg": "92225b7dafcd330ad59c0fc1811c7d9c",
"assets/assets/images/posts/small/6.jpg": "5e39f36c1af9d5bd262c17cd89462640",
"assets/assets/images/posts/small/7.jpg": "34ccae8395c3d9b8211849ecfbb8adaf",
"assets/assets/images/posts/small/8.jpg": "8c3362a86dbc3a0cfac3c7c1c813719c",
"assets/assets/images/posts/small/9.jpg": "5c2ca5b5031aa2bbf3df945c2d417af7",
"assets/assets/images/profile/large/1.jpg": "d96af65092bdbbbc670cf4c5c7da16f5",
"assets/assets/images/profile/large/10.jpg": "d1862a5fc4a010d38c54231058a69e17",
"assets/assets/images/profile/large/11.jpg": "6fa7489331ca852fa3c222d8476de650",
"assets/assets/images/profile/large/12.jpg": "30e9ebda758682fc1f595a0b002cc36b",
"assets/assets/images/profile/large/13.jpg": "c531db066e24e06686b73c8432344775",
"assets/assets/images/profile/large/14.jpg": "28148151a04554344b172c9555b7f475",
"assets/assets/images/profile/large/15.jpg": "ba5f064077a9830846c156b9189b609e",
"assets/assets/images/profile/large/16.jpg": "9c43401671d36e224495d8be331f0663",
"assets/assets/images/profile/large/17.jpg": "10227081aa853b03d17772d94125be14",
"assets/assets/images/profile/large/2.jpg": "e5f7ea9872155da66dd1f5ddb3e5b71d",
"assets/assets/images/profile/large/3.jpg": "95e6dfbd23455d79454a6220b71f7b4f",
"assets/assets/images/profile/large/4.jpg": "610066414cbf743393714d8789833cc9",
"assets/assets/images/profile/large/5.jpg": "7fe46b9ec32a2af41ba5435d3eed04dd",
"assets/assets/images/profile/large/6.jpg": "f6395adf91f7804b2ca12dd1074140df",
"assets/assets/images/profile/large/7.jpg": "d299bedab4b8e1925cbb867c6ae070fd",
"assets/assets/images/profile/large/8.jpg": "c25d8ee34e3fad6eb56c2ac030029f17",
"assets/assets/images/profile/large/9.jpg": "a072101f30f1633ab3c3afb2ec359d46",
"assets/assets/images/profile/small/1.jpg": "7b4632820ecd01c500a2f277076a6ac6",
"assets/assets/images/profile/small/10.jpg": "25035dc0da7406436ca7a05406cd1cb5",
"assets/assets/images/profile/small/11.jpg": "559ecc700f340599970ceaff6f86d505",
"assets/assets/images/profile/small/12.jpg": "a2f10a901243f8f108626bf68afdb001",
"assets/assets/images/profile/small/13.jpg": "746376750dccac7591edc8afc215488e",
"assets/assets/images/profile/small/14.jpg": "1a9045c674279080d905f5000e3c6335",
"assets/assets/images/profile/small/15.jpg": "f172b425e01b978d3559fff871d2228e",
"assets/assets/images/profile/small/16.jpg": "8a63c884229c8fa2617f094c61c7d69a",
"assets/assets/images/profile/small/17.jpg": "4100e95db436bbc0f977b469c59124b7",
"assets/assets/images/profile/small/2.jpg": "305cd4cf1de10ef47f62066eb77e6ce2",
"assets/assets/images/profile/small/3.jpg": "e31c91e34be2b8d57715406e38d34a61",
"assets/assets/images/profile/small/4.jpg": "0a6fbcf11f044eaca5a5963d8cbfd2a0",
"assets/assets/images/profile/small/5.jpg": "79dfeaf8bad80337c5423cf6f9e4402b",
"assets/assets/images/profile/small/6.jpg": "cd30f00bfc102126f2c46b88db77c24b",
"assets/assets/images/profile/small/7.jpg": "380065a3b8dfbfb34fb6cf484f2ab0d7",
"assets/assets/images/profile/small/8.jpg": "f3d1bda88da6b707d29408cc3913dde3",
"assets/assets/images/profile/small/9.jpg": "16b19596ffc33fcd5f125ce08da20037",
"assets/assets/images/profile_bg.jpeg": "50d350958664f24f413c53d247238b61",
"assets/assets/interface/comment_e.png": "66b4e4bed3b47dde072f04eb42e3e659",
"assets/assets/interface/comment_f.png": "b99bba4bb7c363ae594dbce63ccecbdc",
"assets/assets/interface/followers.png": "2942d4cc94733274319c7eecffa99514",
"assets/assets/interface/heart_e.png": "1f2de813cee552561b4b21aaad8ecf46",
"assets/assets/interface/heart_f.png": "93d8d6776f45d072adcfa70ed5c53f91",
"assets/assets/interface/message.png": "3940bdcac76f6ca872b373faf21c7b15",
"assets/assets/interface/message_2.png": "a900877d866adff6c069440f46321c9c",
"assets/assets/interface/more.png": "d1f26049172b6a1350faccba37cb867d",
"assets/assets/interface/personal_message.png": "70d16ab97df485ebd785ffb528342958",
"assets/assets/interface/personal_message_1.png": "a4f3e755ec7ba7a2e2cf7211b80234e6",
"assets/assets/interface/personal_message_2.png": "18e8cd09535f7645eb9d82cf1a504284",
"assets/assets/interface/profile_edit.png": "43440ff608907be68b55a865c72b044d",
"assets/assets/interface/profile_edit_1.png": "00b2365b0807a04a30322f4a0cbda441",
"assets/assets/interface/share_e.png": "917b19985e5ad29b1db881dcc91013e5",
"assets/assets/interface/share_f.png": "28a726c5275e15a92f29e10a5b831efc",
"assets/assets/logo/logo.png": "3e8b569db61b09ca9e27a4ec6aa1204b",
"assets/assets/logo/text.png": "2ceb8a309629281fc9d61c5fdf58bceb",
"assets/assets/svg/check-double.svg": "7467c61e0e7776b942af7b9d66f5e3cf",
"assets/assets/svg/check.svg": "cdc5307c02e4931c1b50198a74711032",
"assets/assets/svg/facebook.svg": "a0d54e7c84c4a100c7460b0b250c497a",
"assets/assets/svg/github.svg": "aaa31b38ea5241a1838df1b22387aadb",
"assets/assets/svg/instagram.svg": "e7449d3dd1eea545fdefecfad43f7223",
"assets/assets/svg/log_out.svg": "a7847a7f663504dc0e2749efe3c0d473",
"assets/assets/svg/mic_filled.svg": "dabe866092609384d7b47fc0cbe1d217",
"assets/assets/svg/mic_unfilled.svg": "769e014533e4429650e3d019f363d4cf",
"assets/assets/svg/no_wifi.svg": "bfaf16cf5c42163946c4be1c78008469",
"assets/assets/svg/share.svg": "c1bb7ae64e5eedeabefdc6538bb66640",
"assets/assets/svg/whatsapp.svg": "7f5989f9473fae5d1cf92150bbcedca1",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "c69946b906427d503c8d386d62aaa334",
"assets/NOTICES": "dfcbb30b37061244c0f30ee4ecd8628d",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "27bac8fd4356f049079345410dc34cf1",
"/": "27bac8fd4356f049079345410dc34cf1",
"main.dart.js": "5861b41e4d48abda1a9bdb8ac0c04d01",
"manifest.json": "5bf6c28551e3ecc84c383ef03cd0a2a4",
"version.json": "1d4866783bbe9bc1e4c49c7fa7740bc1",
"_redirects": "d38a2b58df330c85e0029eecf71d7c26"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
