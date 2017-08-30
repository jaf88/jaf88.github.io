var lista1 = Array();

var lista2 = Array('Delphi', 'Pascal', 'C', 'C++', 'Prolog');

function teste() {

  lista1[1] = 'PHP';
  lista1[2] = 'Java';
  lista1[3] = 'Python';
  lista1[4] = 'Perl';

  for (var i = 1; i < lista1.length; i++) {
    document.write(lista1[i]+'<br>');
  }

  for (var i = 1; i < lista2.length; i++) {
    document.write(lista2[i]+'<br>');
  }

  document.write('<a href="javascript:posicao()")>Consultar</a><br>');

}

function posicao() {
  var indice = prompt('Qual posição da lista1 deseja consultar?');
  alert(lista1[indice]);
