var enviar = function (destino,datos){
	console.log("Enviando notificacion a :");
	console.log(destino);
	console.log("Datos a enviar:");
	console.log(datos);
	console.log("enviando......");
	procesarRespuesta('{"respuesta":"esto llego desde el servidor"}');
	return true;
}
var procesarRespuesta = function(respuesta){
	console.log(respuesta);
	return true;
}
module.exports.enviar = enviar;