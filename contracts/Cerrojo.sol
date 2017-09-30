pragma solidity ^0.4.4;

contract Cerrojo {
	address propietario;
	address public usufructuario;

	struct Oferta {
		uint minutos_estancia;
		uint importe;
		uint fecha_aceptacion;
	}
	Oferta oferta_aceptada;

	mapping (address => Oferta) ofertas;

	event NuevaOferta(address from, uint minutos_estancia, uint importe);
	event UsufructoFinalizado(address antiguo_usufructuario, uint fecha_aceptacion, uint fecha_actual, uint fecha_expiracion);

	function Cerrojo(address primer_comprador) {
		propietario = primer_comprador;
		usufructuario = primer_comprador;
	}

	function proponer_oferta (uint minutos_estancia)	payable {
			ofertas[msg.sender] = Oferta(minutos_estancia, msg.value, 0);
			NuevaOferta(msg.sender, minutos_estancia, msg.value);
	}

	function consultar_oferta(address ofertante) public constant returns (uint, uint, uint) {
		return (ofertas[ofertante].minutos_estancia, ofertas[ofertante].importe, ofertas[ofertante].fecha_aceptacion);
	}

	function aceptar_oferta(address nuevo_usufructuario)	{
		if (msg.sender != propietario) return;
		if (usufructuario != propietario) return;
		usufructuario =  nuevo_usufructuario;
		oferta_aceptada = ofertas[nuevo_usufructuario];
		oferta_aceptada.fecha_aceptacion = now;
	}

	function revisar_fechas()	{
		if (msg.sender != propietario && msg.sender != usufructuario) return;
		uint fecha_actual = now;
		uint fecha_expiracion = oferta_aceptada.fecha_aceptacion + oferta_aceptada.minutos_estancia*60;
		if ( fecha_actual > fecha_expiracion) {
			UsufructoFinalizado(usufructuario, oferta_aceptada.fecha_aceptacion, fecha_actual, fecha_expiracion);
      usufructuario = propietario;
			propietario.transfer(oferta_aceptada.importe);
    }
	}
}
