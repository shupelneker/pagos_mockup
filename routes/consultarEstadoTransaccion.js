var index = function (req,res){
	var json_respuesta = {
		"respuesta":"",
		"token":req.params.token,
		"trx_id":"",
		"medio_pago":"",
		"medio_pago_descripcion":"",
		"monto":"",
		"fecha_aprobacion":"",
		"numero_tarjeta":"",
		"num_cuotas":"",
		"tipo_cuotas":"",
		"valor_cuota":"",
		"primer_vencimiento":"",
		"numero_operacion":"",
		"codigo_autorizacion":"",
		"tipo_pago":"",
		"error":""
	}
	res.send(json_respuesta);
	/*
	{respuesta:__,token:____________,trx_id:_______,medio_pago:__,medio_pago_descripcion:__________.
	  	//monto:____.__,fecha_aprobacion:___-__-__T__:__:__,numero_tarjeta:____,num_cuotas:_,
	  	//tipo_cuotas:____,valor_cuota:______,primer_vencimiento:____-__-__,numero_operacion:________,
	  	//codigo_autorizacion:_______,tipo_pago:_______,error:___________}*/
	return;
}
module.exports.index = index;