(function () {
    'use strict';
    
/*global angular*/
var app = 	angular.module('myApp') || {};
app.directive("ngCliente",[
    function(){
        return{
            template:"{{cliente.nombre}}, 
            {{cliente.apellido}}, 
            {{cliente.edad}}, 
            {{cliente.telefono}},
            {{cliente.estadiCivil}}, 
            {{cliente.historialCompra}}, 
            {{cliente.ocupacion}}, 
            {{cliente.ubicacion}}, 
            {{cliente.codigoPostal}}, 
            {{cliente.sexo}}<br/>"
        }
    }
    ]);
    
})();

	