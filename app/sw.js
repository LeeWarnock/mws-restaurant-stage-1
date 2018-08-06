// Install event for service worker
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(cacheID).then(cache => {
      return cache
        .addAll([
          "/",
          "/index.html",
          "/restaurant.html",
          "/css/styles.css",
          "/css/mainstyles.css",
          "/js/dbhelper.js",
          "/js/main.js",
          "/js/restaurant_info.js"
        ])
        .catch(error => {
          console.log("Caches open failed: " + error);
        });
    })
  );
});

// Log requests made from parent page
self.addEventListener("fetch", function(event) {
  console.log(event.request.url);
});
