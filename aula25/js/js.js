/*
Faça um programa que entre com três números, faça a média aritmética e mostre o
resultado.
*/
function questao1() {
  for (var i = 0; i < 3; i++) {
      var media += parseInt(prompt('Entre como o '+i+' Némero!'));
  }
  document.write(media/3);
}
