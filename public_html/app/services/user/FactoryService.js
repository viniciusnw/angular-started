app.factory('FactoryService', function ( RestService ) {    
            
    var endpoint = '/endpoint';
    
    // Exemplo Fabrica
    return{
        
        get: function () {
        
            return RestService.REST( endpoint, true, 'METHOD', '/METHOD_URL/' );
        }
    };
});