(function () {
    'use strict';
    
/*global angular*/
var app = 	angular.module('myApp') || {};
var nombreControlador="clienteController";
app.controller(nombreControlador,
	['$routeParams','$location','clienteService',
	function(rp,l,service){
		var ctl=this;
		ctl.clientes={};
		ctl.cliente={};
		
		ctl.guardar=function(frm){
		    
	        service.insertOrUpdate(ctl.cliente._id|| "",ctl.cliente)
	        .then(function(data){
					ctl.clientes=data.data;
					l.path('/clientes');
				},function(error){
					alert("Error en el servidor");
				});
				
		};
		
		ctl.init=function(){
		    //var _id=parseInt(rp.id);
		    if(rp && rp.id && rp.id.length>0){
		        service.getById(rp.id).then(function(data){
						ctl.cliente=data.data[0];
					},function(error){
						alert("Error en el servidor");
					});
		    }
		}
		ctl.init();
	}]);
	
})();