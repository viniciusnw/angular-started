"use strict";

// Main module name
var app = angular.module('vsh', [
    'ngRoute',
    'ngCookies',
    'ngAnimate',
    'angular-loading-bar'
]);

// App configuration constants
app.constant('$frontendUrl', 'http://localhost:8000');
app.constant('$urlApiLocal',   'URL_DEV');
app.constant('$urlApiOficial', 'URL_OFICIAL');

// App initialization
app.run(function() {});