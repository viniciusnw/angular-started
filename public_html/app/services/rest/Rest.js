app.factory('RestService', function($http, $urlApiLocal, $urlApiOficial, $window, Token, $rootScope, $location) {

    // Factory
    return{
        
        /* *
         * Servicos REST
         * 
         * @param {String}: Endpoit padrao vindo do service
         * @param {bool}:   Envio do toke
         * @param {type}:   GET, POST, PUT, DELETE
         * @param {method}: Complemento da url
         * @param {data}:   Array de dados para envio
         *
         * @returns Promessa das requisicoes 
         */
        REST: function( endpoint, authorization, type, method, data ) {
            
            /*
             * Defalt Headers for requests 
             * Monta o header de acordo com o endpoit solicitado
             */
            var defaultHeaders = {
                'Content-Type': 'application/json; charset=UTF-8',

                // Envia o token na requisicao caso seja necessario
                'Authorization': (function(){

                    if( authorization ){
                        return 'Bearer ' + Token.get();
                    }
                })()
            };
            
            // Seta o array base para a requisicao
            var config = {
                'method': type,
                // Url da Api
                'url': (function(){ 
                    
                    var host = $location.host();
                    
                    // Acesso Oficial
                    if( host == 'HOST_OFICIAL' || host == 'www.HOST_OFICIAL'){
                        
                        return $urlApiOficial;
                    }
                    // Acesso localhost
                    else{
                        
                        return $urlApiLocal;
                    }
                })() + endpoint + method,
                'headers': defaultHeaders,
                'data':    data
            };

            // Cria a promisse
            return $http( config )
                .success(getCustomerComplete)
                // Verificação de erro a nivel de falha de requisicao
                .error(getCustomerFailed);
        }
    };
    
    // Success Resquest ajax
    function getCustomerComplete( response ){
        
        console.log( response );
    }
    
    // Failed Resquest ajax
    function getCustomerFailed( response ){

        // Error
        console.log( 'Error Requisição' );
        console.log( response  );
    }
});