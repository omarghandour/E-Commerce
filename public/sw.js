if(!self.define){let e,s={};const i=(i,c)=>(i=new URL(i+".js",c).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(c,a)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let t={};const r=e=>i(e,n),d={module:{uri:n},exports:t,require:r};s[n]=Promise.all(c.map((e=>d[e]||r(e)))).then((e=>(a(...e),t)))}}define(["./workbox-7c2a5a06"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"d23d875afdc41854d2c22ebb0ddd659e"},{url:"/_next/static/6X-0xizCBPQmy91AspkB4/_buildManifest.js",revision:"99cb3bbd152376567b5be2fa3b302e8b"},{url:"/_next/static/6X-0xizCBPQmy91AspkB4/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/2443530c-6d674f1ec2a7de84.js",revision:"6X-0xizCBPQmy91AspkB4"},{url:"/_next/static/chunks/247-f19dcd2bcd7d8d50.js",revision:"6X-0xizCBPQmy91AspkB4"},{url:"/_next/static/chunks/318.27b814e442622143.js",revision:"27b814e442622143"},{url:"/_next/static/chunks/394-bfe9d7a5261eaaa7.js",revision:"6X-0xizCBPQmy91AspkB4"},{url:"/_next/static/chunks/414520b4.3ee3c51a20b0c9c5.js",revision:"3ee3c51a20b0c9c5"},{url:"/_next/static/chunks/425-9cb0284348b3dc11.js",revision:"6X-0xizCBPQmy91AspkB4"},{url:"/_next/static/chunks/435-57b4e8b0fb877322.js",revision:"6X-0xizCBPQmy91AspkB4"},{url:"/_next/static/chunks/453-585d83f45837e5a7.js",revision:"6X-0xizCBPQmy91AspkB4"},{url:"/_next/static/chunks/474-2f2f18869f6b7335.js",revision:"6X-0xizCBPQmy91AspkB4"},{url:"/_next/static/chunks/488-f120255a958cdb89.js",revision:"6X-0xizCBPQmy91AspkB4"},{url:"/_next/static/chunks/649.d432d32194602501.js",revision:"d432d32194602501"},{url:"/_next/static/chunks/655-ae9710fc30f4ece9.js",revision:"6X-0xizCBPQmy91AspkB4"},{url:"/_next/static/chunks/735.56951867293c8471.js",revision:"56951867293c8471"},{url:"/_next/static/chunks/75c343e8-94996fbbd1e210ad.js",revision:"6X-0xizCBPQmy91AspkB4"},{url:"/_next/static/chunks/766.6698129d77add1e6.js",revision:"6698129d77add1e6"},{url:"/_next/static/chunks/778.ec4362989379a604.js",revision:"ec4362989379a604"},{url:"/_next/static/chunks/793.b36675c27ad164a0.js",revision:"b36675c27ad164a0"},{url:"/_next/static/chunks/794.13b772583e07c5a0.js",revision:"13b772583e07c5a0"},{url:"/_next/static/chunks/830.1e3dec3136ff9825.js",revision:"1e3dec3136ff9825"},{url:"/_next/static/chunks/920-8b15eedf9ee46995.js",revision:"6X-0xizCBPQmy91AspkB4"},{url:"/_next/static/chunks/976-ed4884d3fa4b2277.js",revision:"6X-0xizCBPQmy91AspkB4"},{url:"/_next/static/chunks/995-a235cef35d6dd346.js",revision:"6X-0xizCBPQmy91AspkB4"},{url:"/_next/static/chunks/a3d8d90f-79ab4183cdb2d2d8.js",revision:"6X-0xizCBPQmy91AspkB4"},{url:"/_next/static/chunks/app/about/page-57a1f1c2f2c6a1d0.js",revision:"6X-0xizCBPQmy91AspkB4"},{url:"/_next/static/chunks/app/cart/page-94bc44c7aa34290d.js",revision:"6X-0xizCBPQmy91AspkB4"},{url:"/_next/static/chunks/app/cod/page-cb8d7ac6fcf3bae5.js",revision:"6X-0xizCBPQmy91AspkB4"},{url:"/_next/static/chunks/app/contactus/page-31d7c3e8095bd5cb.js",revision:"6X-0xizCBPQmy91AspkB4"},{url:"/_next/static/chunks/app/faq/page-06be38ad40a960d2.js",revision:"6X-0xizCBPQmy91AspkB4"},{url:"/_next/static/chunks/app/layout-c533d5d5fc5f34db.js",revision:"6X-0xizCBPQmy91AspkB4"},{url:"/_next/static/chunks/app/page-43626dd7d8696966.js",revision:"6X-0xizCBPQmy91AspkB4"},{url:"/_next/static/chunks/app/pp/page-1e19ff85353d5beb.js",revision:"6X-0xizCBPQmy91AspkB4"},{url:"/_next/static/chunks/app/products/%5Bslug%5D/page-9d793f39c3021197.js",revision:"6X-0xizCBPQmy91AspkB4"},{url:"/_next/static/chunks/app/sarp/page-7118adff766cf45b.js",revision:"6X-0xizCBPQmy91AspkB4"},{url:"/_next/static/chunks/app/studio/page-360b350f2d1399fd.js",revision:"6X-0xizCBPQmy91AspkB4"},{url:"/_next/static/chunks/app/success/page-e7a9cb75ae7051b4.js",revision:"6X-0xizCBPQmy91AspkB4"},{url:"/_next/static/chunks/app/succs/page-2513595540fc0d56.js",revision:"6X-0xizCBPQmy91AspkB4"},{url:"/_next/static/chunks/app/tac/page-394969cc818bdce7.js",revision:"6X-0xizCBPQmy91AspkB4"},{url:"/_next/static/chunks/b426727e-f7eee0c3f13cdab4.js",revision:"6X-0xizCBPQmy91AspkB4"},{url:"/_next/static/chunks/b61d62b0-95281e30c56d3010.js",revision:"6X-0xizCBPQmy91AspkB4"},{url:"/_next/static/chunks/bda0794b-aeec06f4a9f32ee3.js",revision:"6X-0xizCBPQmy91AspkB4"},{url:"/_next/static/chunks/d7f5609f.2fa4000f0e6d7325.js",revision:"2fa4000f0e6d7325"},{url:"/_next/static/chunks/framework-43665103d101a22d.js",revision:"6X-0xizCBPQmy91AspkB4"},{url:"/_next/static/chunks/main-app-6a7c1639af48144d.js",revision:"6X-0xizCBPQmy91AspkB4"},{url:"/_next/static/chunks/main-ba71610f12d7b9f7.js",revision:"6X-0xizCBPQmy91AspkB4"},{url:"/_next/static/chunks/pages/_app-b34b2dcd2ffe424c.js",revision:"6X-0xizCBPQmy91AspkB4"},{url:"/_next/static/chunks/pages/_error-9bd91916f2ed8341.js",revision:"6X-0xizCBPQmy91AspkB4"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-6da6af9668a4d432.js",revision:"6X-0xizCBPQmy91AspkB4"},{url:"/_next/static/css/269c1500bc022aed.css",revision:"269c1500bc022aed"},{url:"/_next/static/css/5618ca4e6b20e11b.css",revision:"5618ca4e6b20e11b"},{url:"/_next/static/css/ad3af7cd7870af45.css",revision:"ad3af7cd7870af45"},{url:"/_next/static/css/b8cd91299e504a2c.css",revision:"b8cd91299e504a2c"},{url:"/_next/static/css/d28aac029713fe96.css",revision:"d28aac029713fe96"},{url:"/_next/static/media/034043092db1e233-s.woff2",revision:"985e9b4713be3b0c3210a2f4a316492d"},{url:"/_next/static/media/2b3f1035ed87a788-s.p.woff2",revision:"03e877e75c5a1213e13a56b59471c946"},{url:"/_next/static/media/34dd45dcdd6d47ee-s.woff2",revision:"4061e1fa6aa9a45d49aa1737d2826560"},{url:"/_next/static/media/65053818c3abcf97-s.woff2",revision:"9b02c436a26a8afe2e94314fdaa6d6bd"},{url:"/_next/static/media/86fdec36ddd9097e-s.p.woff2",revision:"1a5f20725a57243f64429b25b5f24075"},{url:"/_next/static/media/9e58c89b9633dcad-s.woff2",revision:"566f7796dca987bfa0ca16389bbcfb4d"},{url:"/_next/static/media/a1ab2e69d2f53384-s.woff2",revision:"c73422f422632560946874b11671ded7"},{url:"/_next/static/media/c4a41ea065a0023c-s.woff2",revision:"06e8ee29490189c118050515c65e7d20"},{url:"/_next/static/media/de2ba2ebf355004e-s.woff2",revision:"207eff257cb1b3c0007a30cda723a750"},{url:"/_next/static/media/eed6db14ac3b93a0-s.woff2",revision:"bf5e9d3da99a28e7391571987186e6ea"},{url:"/favicon.ico",revision:"37e164206875344ec267c260b6e8b4df"},{url:"/images/icons/icon-128x128.png",revision:"a2bfe6b47a6fcc8b435938f923c8f629"},{url:"/images/icons/icon-144x144.png",revision:"3bf01e552f80cfd115d4778b9aad340a"},{url:"/images/icons/icon-152x152.png",revision:"5a82dcf338ff18daa6d3ad49ee7f63b4"},{url:"/images/icons/icon-192x192.png",revision:"60dcf30e36d7c1dee26c5280712dcd02"},{url:"/images/icons/icon-384x384.png",revision:"3a4605525131edf66723d92451aca910"},{url:"/images/icons/icon-512x512.png",revision:"a6c2cbf78681e94d57b8c133f72ea7ba"},{url:"/images/icons/icon-72x72.png",revision:"b1a59a2b77468968d8e69b54bf98d6f8"},{url:"/images/icons/icon-96x96.png",revision:"9b07ecc9f78b321f2ffdf59cf3a1ae19"},{url:"/logo.png",revision:"c11b8fa4d376b69a8ce148c234d828fb"},{url:"/logo.svg",revision:"1438811afac115226e242f11de6ea9c0"},{url:"/manifest.json",revision:"ce6b111d69f198d8c3d8735638792a0c"},{url:"/products/braided-leather-belt-1.jpg",revision:"6c9736756d3da9744cf9f8902f40b023"},{url:"/products/brooks-sunglasses-1.jpg",revision:"8918de16261b91c07d0e36e796e3aab6"},{url:"/products/brooks-sunglasses-2.jpg",revision:"56367ecd4626f77c7dba7a097c5a50e4"},{url:"/products/canvas-tote-bag-1.jpg",revision:"5f59f9c5f2230cbcae44e29ba8f5eb42"},{url:"/products/canvas-tote-bag-2.jpg",revision:"ea80d974e19dd9f0cf4e2a60bb26b6c9"},{url:"/products/canvas-tote-bag-3.jpg",revision:"3473c9078098bf02a4328c1a25e47687"},{url:"/products/dock-sunglasses-1.jpg",revision:"7d61bbd03ab97aa07f61264c81e578c7"},{url:"/products/down-mittens-1.jpg",revision:"b9b643389ab2f73fb67712f396e0f211"},{url:"/products/khaki-tote-bag-1.jpg",revision:"d527f3d7e9e5b447cb8fdd8b840a6bcc"},{url:"/products/khaki-tote-bag-2.jpg",revision:"2189c93ef5ca255ff80b7314146110c8"},{url:"/products/khaki-tote-bag-3.jpg",revision:"4f96e639ac08f8cb3172c86149c17b21"},{url:"/products/leather-gloves-1.jpg",revision:"b33fca0bc997c8fe1a606b017b2099d0"},{url:"/products/tartan-scarf-1.jpg",revision:"c747ee4100c2e0ae2c4b3bf132326fa2"},{url:"/products/wool-scarf-1.jpg",revision:"23b7a3d5ca3b54375580671559c0ae3d"},{url:"/products/wool-scarf-2.jpg",revision:"10ce5d1dd5f1e3b06fff0dd07f9db792"},{url:"/products/woolblend-suit-belt-1.jpg",revision:"85217260d92b34a49cb2e704af37d8bb"},{url:"/search-5-svgrepo-com.svg",revision:"7b967351d0d9f0e2db38e63627451106"},{url:"/submit-success-check-mark-svgrepo-com.svg",revision:"62005879ea6020942f7981713d9528f9"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:i,state:c})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
