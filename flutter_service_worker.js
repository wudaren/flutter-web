'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/index.html": "d1de5003b9e137028949d9f2b8b9308f",
"/main.dart.js.deps": "932a926536b7d3e81650f7823a5c415b",
"/main.dart.js": "09cd713f04471a4e18fb2f9218a9e889",
"/.git/config": "bf98e95bc8db447b87075161fd5b4ea6",
"/.git/objects/95/19e1d75e8e60fc461d42dceff7162076484747": "87166efde232eca9c4f1ad4118b6d046",
"/.git/objects/95/c5227b0cc61ca896e2c9985ae71569250fca9e": "8a8d76a005c3ed14b6f05ba16e77b4ec",
"/.git/objects/57/5b2e39e79b592a1e88a4c0b844bc11cb1a2eab": "c517124a6f3f37017e546e786beff95f",
"/.git/objects/56/d5200faf8d5515801ffb284295983557692ca4": "4b769dfcbde8344d0dab4064e547d8a7",
"/.git/objects/34/0c8185b22efc710d2acdd88c51d9e26765d020": "a52cd25798b662c8941cb30c9f6c0b63",
"/.git/objects/a3/a57eb20575ba1cdb63f356bca181536beeb1cd": "517cc78f5cbfbca9a4b7f46d2e44ed21",
"/.git/objects/d7/bc66aa7638a93f1a76465e88bb28f625366e9a": "7498fbe811fe1a7a69bef71f5ea0b723",
"/.git/objects/d0/1fe095fa095f7b9c189a00fcbc20e9fef5c6c9": "1f04c63b524da9d4e3d3478d0758aba9",
"/.git/objects/d6/d998de44140babbedd89f0219cb122518045de": "c73de97c86c383218689f41e26b63cfa",
"/.git/objects/f4/b5a8baae67c8ddf767054cc572eec199963017": "f29a0c74f3db230f8d040a49043a2dfa",
"/.git/objects/f4/deb3bafcc3037c6bb7269432c09a585e8825d2": "95c436db4e93f9e03b56633c3bc65f41",
"/.git/objects/fc/565ec170b7fd55cbf422b8188a6f64eddda60e": "c1d5b622c8e63d1865785872c9d4a21d",
"/.git/objects/cf/dd6a620b5b05dfc0fc3babe4781ccd79637e62": "49ccc043b1eacbb68beee87d8afcfe0d",
"/.git/objects/c8/7dfdc9078dc5028aca84aa7d144d397a2f623e": "9baa1f4b784f9d7d52afdeb9c8f6a5a0",
"/.git/objects/c1/ffc25b51a5bd760d51b5e32d538223857b1290": "0190118c47b41333f95a4a5c2b651d62",
"/.git/objects/c6/7111120bd5e5e507c01b5ec3dc2ca4f8af121b": "9a5145b1344f96e81c87bc33eb623b7d",
"/.git/objects/28/59e60bcee0829d7e0c1c858ee027757606f24a": "769a39b7c466078463aa9eefeded24db",
"/.git/objects/28/5cbdace07624580376616031764498b88af5e2": "7f03cf14c6d7633e8d783c7bd1831d05",
"/.git/objects/17/30d9a1a65cb8c4f829214f5737021f5dd37827": "16c749f7285fcec283d609447cf0aa8b",
"/.git/objects/81/9cfb0e48e77bc90bf6f3cbd844bfb5ac148326": "cde71e174a2b080e04f7fedfc9c338d0",
"/.git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
"/.git/objects/86/00cab02551952325ca5e3b30a3ef92773c9f78": "9f261ce5f631ff114c1d12e7628e84db",
"/.git/objects/6e/b0d046b94f42988e8a5e8793bd87fe6c70c10a": "2b9259aecbe1cbb0d8de873e030a0257",
"/.git/objects/55/0073817d21bb531adf6006fef6761bf9f253cc": "aed757426c7f501d2efdf62c6fedd440",
"/.git/objects/97/9beb1d2e654ef98d48522cc6d07c53fd25019d": "39bd82f56f8a3494763a5b0d00e8bc7d",
"/.git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
"/.git/objects/ba/61763665a7193783c8e99f2c6b31d8942d7f9b": "911aa9e90eb76ff33001e999628786e0",
"/.git/objects/dd/56eabbf298449db91bfa8644c6fbb20b8e6dda": "3fa6bb294070401dbba0b01792b84ce0",
"/.git/objects/a9/b9ff3533ad236002dc3ede8673d82e7ddb8190": "64ad0f11a982fa68491a61977929a47c",
"/.git/objects/d5/7a3875ac71729717035d977be8c6c40214b87f": "e3dbe88f5c998d044b8557e70ea75f9f",
"/.git/objects/ff/95c6639743596dcf1786a7ba671a7379527b3c": "0b63f75044b4748ee7d21adef5a380a9",
"/.git/objects/f1/1b251a77d284a84f182935834eda00d45c1369": "bab19a9699818eeace0685e2f307c526",
"/.git/objects/ce/98615a2d19397ec01ce2978a09c35de99b462e": "1be87d1da02534eb90fe8f37fe63559a",
"/.git/objects/84/1692732a39b6a5cff8922b7c968021671f2874": "416de1271e689c527aa2ceb38abb1d19",
"/.git/objects/24/047237231080b3a9138a0ea3edb70f6454888f": "cc2ddc41421187432c6548fe2568e0ba",
"/.git/objects/23/6d785d7bcb391c5fdfef152ea5b22623e1fbc7": "9ab18569da0e608a9f7b49ac53c6ad7d",
"/.git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
"/.git/objects/78/6a87cf0b0416a2c297842e535c612d9673b796": "05f9f37cefd8e4861496eb571fbd8724",
"/.git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
"/.git/info/exclude": "0aebccfd5866bfc3e7c8f625230c22f7",
"/.git/logs/HEAD": "efb60062d898d787680eec456d06cbd6",
"/.git/logs/refs/heads/master": "efb60062d898d787680eec456d06cbd6",
"/.git/logs/refs/remotes/origin/master": "d1de3b128729070c55e3c6e29ea3b9fc",
"/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"/.git/hooks/pre-rebase.sample": "81005745454846bb79cc3c7c0c57658d",
"/.git/hooks/pre-commit.sample": "01b1688f97f94776baae85d77b06048b",
"/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"/.git/hooks/prepare-commit-msg.sample": "7dfe15854212a30f346da5255c1d794b",
"/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"/.git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
"/.git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
"/.git/refs/heads/master": "d455bc07c509b66a927e6db7c006fffa",
"/.git/refs/remotes/origin/master": "d455bc07c509b66a927e6db7c006fffa",
"/.git/index": "344e3d0ef9302f8c44484d2d447caf0f",
"/.git/COMMIT_EDITMSG": "01eb2c11c2685e04a0e3b0556549b914",
"/.git/FETCH_HEAD": "2a480947329116f16aa01746ff5fe870",
"/assets/LICENSE": "1a80be6c5724a31e6f9c9e06dba53b63",
"/assets/AssetManifest.json": "459e91df8e4304aed22c0f9ff3ae9c52",
"/assets/FontManifest.json": "345456cb3715f47a6a605187896a5053",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/assets/images/go_back.png": "6cdd16c49dae0fcff5f7934ca98a36a2",
"/assets/assets/fonts/duanning_web_7.ttf": "bdc1913fc41d20a0e4ba0175e1f04786",
"/assets/assets/fonts/duanning_web.ttf": "d298969186f26c691f6890de90b213db"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request, {
          credentials: 'include'
        });
      })
  );
});
