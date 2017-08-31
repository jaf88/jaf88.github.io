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

/*
Faça um algoritmo que leia dois valores inteiros A e B se os valores forem iguais devem
ser somado os dois, caso contrário multiplique A por B, ao final do cálculo ao final do
cálculo atribuir o valor para uma variável C.
*/

function questao3() {
  var a = prompt("Informe um valor para A!");
  var b = prompt("Informe um valor para B!");
  var c;

  a = parseInt(a);
  b = parseInt(b);

  if(a == b) {
    c = a + b;
    alert("A e B são iguais e C é igual a: "+(c));
  } else {
    c = a * b;
    alert("A e B são diferentes e C é igual a: "+(c));
  }

}

/*
A partir do preço à vista de um determinado produto, calcule o preço total a pagar e o
valor da prestação mensal, referentes ao pagamento parcelado. Se o pagamento for
parcelado em 3 vezes deve ser dado um acréscimo de 10% no total a ser pago. Se o
parcelamento for em 5 vezes, o acréscimo será de 20%.
*/
function questao4() {
  var produto = prompt("Informe o valor do produto à vista!");
  var parcelas = prompt("Informe o número de parcelas que deseja!");

  produto = parseFloat(produto);
  parcelas = parseInt(parcelas);

  if(parcelas <= 3) {
    produto = produto+(produto*0.10);
    parcelas = produto/parcelas;
    alert('O valor da prestação fica em: '+(parcelas) + ' e o valor total é: '+(produto));
  } else if(parcelas >= 5){
    produto = produto+(produto*0.20);
    parcelas = produto/parcelas;
    alert('O valor da prestação fica em: '+(parcelas) + ' e o valor total é: '+(produto));
  }

}

/*
Faça um algoritmo que leia o nome e as três notas de uma disciplina de um aluno e ao
final escreva o nome do aluno, sua média e se ele foi aprovado, sabendo-se que a média
para aprovação é igual ou superior a 8.
*/
function questao5() {
  var nome_aluno = prompt("Informe o nome do Aluno!");
  var nota1 = prompt("Informe a primeira Nota!");
  var nota2 = prompt("Informe a segunda Nota!");
  var nota3 = prompt("Informe a terceira Nota!");

  nota1 = parseFloat(nota1);
  nota2 = parseFloat(nota2);
  nota3 = parseFloat(nota3);

  var media = (nota1+nota2+nota3)/3;

  if (media >= 8) {
    alert("Aluno: "+(nome_aluno)+ " Média: "+(media)+ " Aprovado!");
  } else {
    alert("Aluno: "+(nome_aluno)+ " Média: "+(media)+ " Reprovado!");
  }
}
