(function () {
    'use strict';
    
/*global angular*/
var app = 	angular.module('myApp') || {};

    var nombreControlador3="Controlador3";
app.controller(nombreControlador3,
	['$scope','$http','idioma',
	function($s,$http, apiUrl){
		var ctl=this;
		ctl.clientes=[];
		
		ctl.init=function(){
			var request2={
				method:'GET',
				url:apiUrl+'/Api/clientes'

			};
			var request1={
				method:'POST',
				url:apiUrl+'/Api/clientes/',
				data:{"c.nombre":"",
				"c.apellido":"",
				"c.edad":"",
				"c.telefono":"",
				"c.estadoCivil":"",
				"c.historialCompra":"",
				"c.tipoCompra":"",
				"c.ocupacion":"",
				"c.ubicacion":"",
				"c.codigoPostal":"",
				"c.sexo":""
						}
			};

			//$http(request1).then(function(data1){
					$http(request2).then(function(data){
						ctl.clientes=data.data;
					},function(error){
						
					});
			//},function(error){
				
			//});
		}
		ctl.init();
	}
]);


    
})();