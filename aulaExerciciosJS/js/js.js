/*
Faça um programa que entre com três números, faça a média aritmética e mostre o
resultado.
*/
function questao1() {
  var media = 0;
  for (var i = 1; i < 4; i++) {
      var entrada = prompt('Entre como o '+i+' Némero!');
      media += parseInt(entrada);
  }
  alert('A média dos números é: '+(media/3));
}
