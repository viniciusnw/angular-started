// Routes more Controllers
app.config(function($routeProvider){
    
    $routeProvider
        
        // Rota Inicial
        .when('/home',{
            templateUrl:  'views/pages/home.html',
            controller:   'Home',  
            controllerAs: 'home',
            data: {
                access: 'public'
            }
        })
        
        /* ==========================================
         * Rota DEFAULT
         * 
         * Rota default, quando alguma rota não for encontrada
         * ==========================================
         */
        .otherwise({
            redirectTo: '/home'
        });
});