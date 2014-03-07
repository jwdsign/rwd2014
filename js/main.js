    requirejs.config({
    paths: {
    "jquery": "//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min",
    "modernizr" : "libs/modernizr.custom.min",
    "polyfiller" : "helper/polyfiller",
    "respond" : "helper/respond",
    "shiv" : "helper/html5shiv"
    }
    });

    require(["jquery", "modernizr", "polyfiller"], function($) {
        $.webshims.polyfill();  
    });