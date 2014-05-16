requirejs.config({
    "baseUrl": "assets/js/lib",
    "paths": {
        "base": "../",
        "jquery": "//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js",
        "bootstrap" : "//netdna.bootstrapcdn.com/bootstrap/3.1.1/js/bootstrap.min.js"
    }
});

// Load the main app module to start the app
requirejs(["base/customui"]);