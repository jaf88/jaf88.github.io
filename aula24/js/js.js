
function minhafuncao(arg1, arg2){
  var soma = arg1 + arg2;
  var msg = 'A soma é igual a ';
  alert(msg+soma);
  var flag = true;

  if(flag)
    alert('Verdadeiro')
  else {
    alert('Falso')
  }
}

/*function escrever(arg){
  document.write(arg);
}

function escrever(arg){
  document.getElementById("minhaDiv").innerHTML = arg;
}*/

function escrever(){
  var texto = prompt("Digite um texto qualquer!");

  document.getElementById("minhaDiv").innerHTML = texto;
}

function minhafuncaoraiz(arg){
  var raiz = Math.sqrt(arg);
  msg = 'A raiz de '+arg+ ' é = ';
  alert(msg+raiz);
}


function escreverN(){
  var n = prompt("Escrevar de 1 a n = ?");
  var printnumeros = "";

  for (var i = 1; i <= n; i++) {
    printnumeros += i + "<br>";
  }
  document.getElementById("uman").innerHTML = printnumeros;
}
