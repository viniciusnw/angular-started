// 
// ---------------------------------------------------------------------------
//
//  # Controller - App
//
//  Version: 1.0
//  Homepage: *
//  Latest update: 12 Dez, 2016
//  Code~Review: Vinicius Inácio <viniciusnw@hotmail.com>
//
// ---------------------------------------------------------------------------
//

app.controller('Home', function( ServiceClass ) {
    
    var controller = this;
    
    ServiceClass.get();
});
