/*
Faça um programa que entre com três números, faça a média aritmética e mostre o
resultado.
*/
function questao1() {
  var media = 0;
  for (var i = 1; i < 4; i++) {
      var entrada = prompt('Entre como o '+i+' Número!');
      media += parseInt(entrada);
  }
  alert('A média dos números é: '+(media/3));
}

/*
Faça um programa que entre com o nome e o salário de um funcionário e mostre seu
novo salário, sabendo que o mesmo teve um aumento de 10%.
*/

function questao2() {
  var nome = prompt("Informe o Nome do Funcionário!");
  var sal = prompt("Informe o Salário do Funcionário!");
  sal = parseFloat(sal);

  alert('O Novo Salário é: '+(sal+(sal*0.10)));
}
