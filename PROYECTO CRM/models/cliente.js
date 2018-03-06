var mongoose = require('mongoose'), //cargamos la biblioteca
 Schema = mongoose.Schema; 

var cliente=new Schema({  //Creamos nuestra esquema
	nombre:String,
	apellido:String,
	edad:String,
	telefono:String,
	estadoCivil:String,
	historialCompra:String,
	tipoCompra:String,
	ocupacion:String,
	ubicacion:String,
	codigoPostal:String,
	sexo:String
	//usuario:{nombre:String}
	//calificaciones=[{usuario:String, evaluacion:Number}]

});

/*
tarea.validarNombre=function(){  //Valida que la tarea tenga por lo menos 3 caracteres
	
}

tarea.methods.validarNombre=function(){  

}
*/

var clienteModel=mongoose.model("cliente",cliente);  //Exportamos nuestra esquema

module.exports=clienteModel;