window.addEventListener('load', function() {
  if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
    startApp(web3)
  } else {
    document.getElementById("main").innerHTML = "<a href='https://metamask.io/'><img src='images/download_metamask.png'/></a>"
    console.log('No web3? You should consider trying MetaMask!');
  }
});

function startApp(web3) {
  var abi = [{"constant":true,"inputs":[],"name":"usufructuario","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"ofertante","type":"address"}],"name":"consultar_oferta","outputs":[{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"revisar_fechas","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"nuevo_usufructuario","type":"address"}],"name":"aceptar_oferta","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"minutos_estancia","type":"uint256"}],"name":"proponer_oferta","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"inputs":[{"name":"primer_comprador","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"from","type":"address"},{"indexed":false,"name":"minutos_estancia","type":"uint256"},{"indexed":false,"name":"importe","type":"uint256"}],"name":"NuevaOferta","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"antiguo_usufructuario","type":"address"},{"indexed":false,"name":"fecha_aceptacion","type":"uint256"},{"indexed":false,"name":"fecha_actual","type":"uint256"},{"indexed":false,"name":"fecha_expiracion","type":"uint256"}],"name":"UsufructoFinalizado","type":"event"}];

  var contract_address = "0xCBD7A6600223191EaDF6375196341f7308428a69";

  var Cerrojo = web3.eth.contract(abi);
  var Cerrojo = Cerrojo.at(contract_address);

  abrir_cerrojo(Cerrojo);
  ofertar(Cerrojo);
  ver_oferta(Cerrojo);
  aceptar_oferta(Cerrojo);
  finalizar_contrato(Cerrojo);
  listar_ofertas(Cerrojo);
}
