// MedPenguim Service Worker - prefer fresh app code, cache media/fonts
const CACHE_NAME = 'medpenguim-v3';
const STATIC_ASSETS = [
    '/app/index.html',
    '/app/css/style.css',
    '/app/css/sidebar.css',
    '/app/css/xp.css',
    '/app/js/units.js',
    '/app/js/app.js',
    '/app/js/flashcards_db.js',
    '/app/js/resumo-data.js',
    '/app/img/favicon.png',
    '/app/img/logo-medpenguim.jpg',
    '/config.js',
    'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap'
];

// Install - pre-cache essential assets
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log('[SW] Pre-caching static assets');
            return cache.addAll(STATIC_ASSETS);
        })
    );
    self.skipWaiting();
});

// Activate - clean old caches
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((keys) => {
            return Promise.all(
                keys.filter((key) => key !== CACHE_NAME)
                    .map((key) => caches.delete(key))
            );
        })
    );
    self.clients.claim();
});

// Fetch - network-first for app/auth, cache-first for media/fonts
self.addEventListener('fetch', (event) => {
    const url = new URL(event.request.url);

    // Skip non-GET requests
    if (event.request.method !== 'GET') return;

    // Network-first for Supabase API and auth
    if (url.hostname.includes('supabase') || url.pathname.includes('/auth/')) {
        event.respondWith(
            fetch(event.request).catch(() => caches.match(event.request))
        );
        return;
    }

    // Network-first for first-party app code so new deploys appear immediately
    if (
        url.origin === self.location.origin &&
        url.pathname.match(/\.(html|css|js)$/)
    ) {
        event.respondWith(
            fetch(event.request)
                .then((response) => {
                    if (response.ok) {
                        const clone = response.clone();
                        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
                    }
                    return response;
                })
                .catch(() => caches.match(event.request))
        );
        return;
    }

    // Cache-first for images and fonts
    if (
        url.pathname.match(/\.(png|jpg|jpeg|svg|woff2|woff|ttf)$/) ||
        url.hostname === 'fonts.googleapis.com' ||
        url.hostname === 'fonts.gstatic.com'
    ) {
        event.respondWith(
            caches.match(event.request).then((cached) => {
                if (cached) return cached;
                return fetch(event.request).then((response) => {
                    if (response.ok) {
                        const clone = response.clone();
                        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
                    }
                    return response;
                });
            })
        );
        return;
    }

    // Network-first for everything else
    event.respondWith(
        fetch(event.request)
            .then((response) => {
                const clone = response.clone();
                caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
                return response;
            })
            .catch(() => caches.match(event.request))
    );
});
