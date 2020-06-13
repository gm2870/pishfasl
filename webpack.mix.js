const mix = require("laravel-mix");
require('laravel-mix-polyfill');

mix.js(["resources/js/index.js"], "public/js/app.js").sass('resources/sass/main.scss', 'public/css').options({
    processCssUrls: false
}).polyfill({
        enabled: true,
        useBuiltIns: "usage",
        targets: false
     });
