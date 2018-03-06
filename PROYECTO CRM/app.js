
var express = require('express');  //Definicion de variables para cargarlas a express -- 
var path= require("path");
var mongoose = require('mongoose'); //Este es importante pa cargar base de datos mongodb
var bodyparser = require('body-parser'); //Cargamos bodyParser

//var Cliente=require("./models/tarea"); //Cargamos nuestro modelos que definimos
var Cliente=require("./models/cliente");

var app = express();
mongoose.connect("mongodb://localhost:27017/clientes");

app.get("/", function(req,res){
	res.end("Hola Mundo");

});

app.use(bodyparser.json());


app.listen(8080, function () {
  console.log('El servidor esta corriendo en el puerto 8080!');
});




var publicFolder=path.resolve(__dirname, "public");
app.use(express.static(publicFolder));


var publicFolder=path.resolve(__dirname, "public/app");
app.use(express.static(publicFolder));

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine","ejs");
app.get('/hola/:quien', function (req, resp) {
	resp.render("hola",{message:req.params.quien});
});





//Consultar todos
app.get('/Api/clientes/', 
	function (req, resp) { //Ruteo y guardar en base de datos
		//console.log();
		//var t=new Cliente(req.body);
		Cliente.find(function(err,results){
			if(err){
				resp.send({save:"No se pudo realizar la consulta"});
			}
			resp.json(results);
		});
		//resp.send({save:"Ok"});
});



//Consultar por id
app.get('/Api/clientes/:id', 
	function (req, resp) { //Ruteo y guardar en base de datos
		console.log(req.params.id);
		//var t=new Cliente(req.body);
		Cliente.find(
			{_id:req.params.id},
			function(err,results){
			if(err){
				resp.send({save:"No se pudo realizar la consulta"});
			}
			resp.json(results);
		});
		//resp.send({save:"Ok"});
});

/*
//Crear y actualizar
app.post('/Api/tareas/:id', 
	function (req, resp) { //Ruteo y guardar en base de datos
		console.log();
		var t=new Tarea(req.body);
		t.save();
		resp.send({save:"Ok"});
});

*/


//T A R E A  :  Implementar hasta el actualizar tarea
app.post('/Api/clientes/:id', 
	function (req, resp) { //Ruteo y guardar en base de datos
		//console.log();
		if(req.params.id.length>2){
			Cliente.findOne({_id:req.params.id},function(err,result){
				//console.log(result);
				if(err){
					resp.send({save:"No se pudo realizar la consulta"});
				}
				result.nombre=req.body.nombre;
				result.apellido=req.body.apellido;
				result.edad=req.body.edad;
				result.telefono=req.body.telefono;
				result.estadoCivil=req.body.estadoCivil;
				result.estadoCompra=req.body.estadoCompra;
				result.ocupacion=req.body.ocupacion;
				result.ubicacion=req.body.ubicacion;
				result.codigoPostal=req.body.codigoPostal;
				result.sexo=req.body.sexo;
				result.save();
				resp.json(result);
			}
			);
		}else{
			var c=new Cliente(req.body);
			c.save();
			resp.send({saved:"Ok"});
		}
		
		
});
/*
app.get('/Api/tareas/:id', function(req, res){
	res.render({'edit-form',{id: re.id});
});

app.put('/Api/tareas/:id', function(req, res, next, id){
	tarea.update({_id: req-params.id},
	{
		nombre: req.body.nombre,
		descripcion: req.body.descripcion
	}, function(err){
		if(err) res.json(err);
		else res.redirect('/Api/tareas/:id'+req.params.id);
	})

});
*/