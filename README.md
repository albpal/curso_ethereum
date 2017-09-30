# Cursto Ethereum
Código utilizado en el curso de introducción a Ethereum para desarrolladores

En este apartado final vamos a aplicar todo lo visto anteriormente. Uniremos todas las piezas: red privada de Ethereum, clientes, contratos en Solidity, Truffle, web3.js, etc. para ofrecer una propuesta de valor: gestionar quien puede abrir un cerrojo. 

La idea es:

1. El cerrojo pertenece a un usuario  (una dirección Ethereum – EOA)
2. Los usuarios podrán realizar ofertas indicando durante cuánto tiempo quieren utilizar el cerrojo y cuánto pagarán
3. El propietario puede aceptar una oferta y asumir: no poder abrir durante el periodo de tiempo de la oferta el cerrojo y recibir, al final del periodo, el importe ofrecido

Todo esto lo orquestará el contrato por lo que un usuario cuya oferta haya sido aceptada no podrá negarse a pagar puesto que el importe solicitado permanece en el balance del contrato hasta su finalización. Por otro lado, el usuario se asegura que podrá hacer uso del cerrojo durante ese tiempo y que nadie más podrá.

