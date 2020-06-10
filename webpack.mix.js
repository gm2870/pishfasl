const mix = require('laravel-mix');

mix.js([
    'resources/js/app/elements.js',
    'resources/js/app/index.js'
    ],
    'public/js/app.js');