self.addEventListener("install", function (e) {
    e.waitUntil(
    caches.open("Budget Buddy-cache").then(function(cache){
        return cache.addAll(["index.html"])
    })
);
})