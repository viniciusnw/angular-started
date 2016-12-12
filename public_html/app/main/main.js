// 
// 
// ---------------------------------------------------------------------------
//
//  # Main - App
//
//  Version: 1.0
//  Homepage: *
//  Latest update: 12 Dez, 2016
//  Code~Review: Vinicius Inácio <viniciusnw@hotmail.com>
//
// ---------------------------------------------------------------------------

"use strict";

// Main module name
var app = angular.module('vsh', [
    'ngRoute',
    'ngCookies',
    'ngAnimate',
    'angular-loading-bar',
    'ui.bootstrap'
]);

// App configuration constants
app.constant('$frontendUrl', 'http://localhost:8000');
app.constant('$urlApiLocal',   'URL_DEV');
app.constant('$urlApiOficial', 'URL_OFICIAL');

// App initialization
app.run( function( $rootScope ) {
    
    $rootScope.$on('$routeChangeStart', function(event, nextRoute, currRoute) {
                
        console.log(event);
        console.log(nextRoute);
        console.log(currRoute);
    });
});