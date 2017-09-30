(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
window.addEventListener('load', function() {
  if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
    startApp(web3)
  } else {
    console.log('No web3? You should consider trying MetaMask!');
  }
});

function startApp(web3) {
  var abi = [{"constant":true,"inputs":[],"name":"usufructuario","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"ofertante","type":"address"}],"name":"consultar_oferta","outputs":[{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"revisar_fechas","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"nuevo_usufructuario","type":"address"}],"name":"aceptar_oferta","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"minutos_estancia","type":"uint256"}],"name":"proponer_oferta","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"inputs":[{"name":"primer_comprador","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"from","type":"address"},{"indexed":false,"name":"minutos_estancia","type":"uint256"},{"indexed":false,"name":"importe","type":"uint256"}],"name":"NuevaOferta","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"antiguo_usufructuario","type":"address"},{"indexed":false,"name":"fecha_aceptacion","type":"uint256"},{"indexed":false,"name":"fecha_actual","type":"uint256"},{"indexed":false,"name":"fecha_expiracion","type":"uint256"}],"name":"UsufructoFinalizado","type":"event"}];

  var contract_address = "0x9e448BCd6c2309Fad7A0Bba3B8D05Bf02391B54e";

  var Cerrojo = web3.eth.contract(abi);
  var Cerrojo = Cerrojo.at(contract_address);

  abrir_cerrojo(Cerrojo);
  ofertar(Cerrojo);
  ver_oferta(Cerrojo);
  aceptar_oferta(Cerrojo);
  finalizar_contrato(Cerrojo);
}

},{}]},{},[1]);