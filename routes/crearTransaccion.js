var index = function (req,res){

	var json = {
		"respuesta":"",
		"token":"",
		"trx_id":"",
		"medio_pago":"",
		"monto":""
	}
	res.send(json);
	//{respuesta:__,token:____________,trx_id:_______,medio_pago:__,monto:____.__}
	return;
}
module.exports.index = index;