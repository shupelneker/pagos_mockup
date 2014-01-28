var express = require('express');
var config = require('./config/conf.json');
var app = express();

console.log("INFO : ESCUCHANDO EN EL PUERTO " + config.port);
//ROUTES
var home =  require('./routes/index.js');
var consultarEstadoTransaccion =  require('./routes/consultarEstadoTransaccion.js');
var crearTransaccion =  require('./routes/crearTransaccion.js');
var procesarTransaccion =  require('./routes/procesarTransaccion.js');

app.get('/', home.index);
app.get('/transaccion/:token', consultarEstadoTransaccion.index);
app.get('/transaccion/crear/', crearTransaccion.index);
app.get('/transaccion/procesar/:token', procesarTransaccion.index);

//CONTROLLERS
var notifiacion =  require('./controllers/notifiacion.js');
var destino = {
	"url":"http://localhost/notifiacion.php",
	"method":"post"
}
var datos = {
	"token":"ZMXCVXMCVXCV",
	"estado":"pagado"
}
notifiacion.enviar(destino,datos);
app.listen(config.port);