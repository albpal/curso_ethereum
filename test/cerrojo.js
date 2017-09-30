var Cerrojo = artifacts.require("./Cerrojo.sol");

contract('Cerrojo', function(accounts) {
  var owner_account = accounts[0];
  it("debe guardar una oferta de accounts[1]", function() {
    var cerrojo;
    return Cerrojo.deployed().then(function(instance) {
      cerrojo =  instance;
      dias = 1;
      importe = 3;
      return cerrojo.proponer_oferta(dias, {from: accounts[1], value: importe})
    }).then(function() {
      return cerrojo.consultar_oferta(accounts[1]);
    }).then(function(oferta){
      assert.equal(oferta[0], 1); // minutos
      assert.equal(oferta[1], 3); // euros
      assert.equal(oferta[2], 0); // fecha aceptacion
    });
  });
  it("debe aceptar la oferta de accounts[1] y cambiar usufructuario a accounts[1]", function() {
    var cerrojo;
    return Cerrojo.deployed().then(function(instance) {
      cerrojo =  instance;
      return cerrojo.usufructuario.call();
    }).then(function(usufructuario) {
      assert.equal(usufructuario, owner_account);
      // La oferta esta guardada del test anterior
      return cerrojo.aceptar_oferta(accounts[1]);
    }).then(function() {
      return cerrojo.usufructuario.call();
    }).then(function(usufructuario){
      assert.equal(usufructuario, accounts[1]);
    });
  });

  it("debe de mantener al usufructuario accounts[1] si el tiempo pagado no ha pasado", function() {
    var cerrojo;
    return Cerrojo.deployed().then(function(instance) {
      cerrojo =  instance;
      return cerrojo.usufructuario.call();
    }).then(function(usufructuario) {
      assert.equal(usufructuario, accounts[1]);
      return cerrojo.revisar_fechas();
    }).then(function(){
      return cerrojo.usufructuario.call();
    }).then(function(usufructuario) {
      assert.equal(usufructuario, accounts[1]);
    });
  });

  it("debe de quitar al usufructuario accounts[1] al pasar el tiempo pagado y volver a asignar a " + owner_account, function() {
    var cerrojo;
    return Cerrojo.deployed().then(function(instance) {
      cerrojo =  instance;
      return cerrojo.usufructuario.call();
    }).then(function(usufructuario) {
      assert.equal(usufructuario, accounts[1]);
      return delay(61000);
    }).then(function() {
      return cerrojo.revisar_fechas();
    }).then(function(){
      return cerrojo.usufructuario.call();
    }).then(function(usufructuario) {
      assert.equal(usufructuario, owner_account);
    });
  });

  function delay(t) {
    return new Promise(function(f) {
      setTimeout(f, t)
    });
  }
});
