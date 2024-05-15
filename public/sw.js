// Save file inside caches
let cacheData = "appV1";
this.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(cacheData)
            .then((cache) => {
                cache.addAll([
                    'static/js/bundle.js',
                    'favicon.ico',
                    'manifest.json',
                    'logo192.png',
                    "/",
                    "/users"
                ])
            })
    )
})

// this.addEventListener("activate", (event) => {
//     // Delete outdated caches
//     event.waitUntil(
//         caches.keys()
//             .then((cacheNames) => {
//                 return Promise.all(
//                     cacheNames.map((name) => {
//                         if (name !== cacheVersion) {
//                             return caches.delete(name);
//                         }
//                     })
//                 );
//             })
//     );
// });


// Load files from caches
this.addEventListener("fetch", (event) => {

    console.warn("event", event.request.url)

    if (event.request.url === "http://localhost:3000/manifest.json") {
        event.waitUntil(
            this.registration.showNotification("Notif title", {
                body: "body text for notification",
            })
        )
    }


    if (!navigator.onLine) {

        if (event.request.url === "http://localhost:3000/manifest.json") {
            event.waitUntil(
                this.registration.showNotification("Warning", {
                    body: "No internet Connection!!!",
                })
            )
        }

        event.respondWith(
            caches.match(event.request)
                .then((response) => {
                    if (response) {
                        return response;
                    }
                    // If the request is not found in the cache, fetch it from the network
                    return fetch(event.request);
                })
        )
    }
})
