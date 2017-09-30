var Cerrojo = artifacts.require("./Cerrojo.sol");

module.exports = function(deployer) {
  deployer.deploy(Cerrojo, "0x6825487b18c45c507d06b44ec2ba5b5bf3925f23");
};
