// Install site assets via service worker
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("restaurantReviews").then(cache => {
      return cache
        .addAll([
          "/",
          "./index.html",
          "./restaurant.html",
          "./css/styles.css",
          "./js/dbhelper.js",
          "./js/main.js",
          "./js/restaurant_info.js",
          "./data/restaurants.json",
          "./img/1.jpg",
          "./img/2.jpg",
          "./img/3.jpg",
          "./img/4.jpg",
          "./img/5.jpg",
          "./img/6.jpg",
          "./img/7.jpg",
          "./img/8.jpg",
          "./img/9.jpg",
          "./img/10.jpg"
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
