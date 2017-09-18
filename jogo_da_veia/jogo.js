
var rodada = 1;

var matriz_jogo = Array(3);

matriz_jogo['a'] = Array(3);
matriz_jogo['b'] = Array(3);
matriz_jogo['c'] = Array(3);

matriz_jogo['a'][1] = 0;
matriz_jogo['a'][2] = 0;
matriz_jogo['a'][3] = 0;

matriz_jogo['b'][1] = 0;
matriz_jogo['b'][2] = 0;
matriz_jogo['b'][3] = 0;

matriz_jogo['c'][1] = 0;
matriz_jogo['c'][2] = 0;
matriz_jogo['c'][3] = 0;


$(document).ready(function() {

  $('#btn_iniciar_jogo').click(function () {

    if ($('#entrada_play_1').val()=='') {
      alert("O apelido do jogador 1 deve ser informado!");
      return false;
    }

    if ($('#entrada_play_2').val()=='') {
      alert("O apelido do jogador 2  deve ser informado!");
      return false;
    }

    $('#name_play_1').html($('#entrada_play_1').val());
    $('#name_play_2').html($('#entrada_play_2').val());

    $('#pagina_inicial').hide();
    $('#palco_jogo').show();

    //alert('Jogo iniciado!');
    //alert($('#entrada_play_1').val());
    //alert($('#entrada_play_2').val());
  });

  $('.jogada').click(function(){
    var id_campo_clicado = this.id;
    //alert("jogada capturada: "+id_campo_clicado);
    jogada(id_campo_clicado);
  })
});

function jogada(id) {

  var icone = '';
  var ponto = 0;

  if ((rodada % 2) == 1) {
    icone = 'url(imagens/marcacao_1.png)';
    ponto = -1;
    //alert("Jogada do jogador 01");
  }
  else {
    icone = 'url(imagens/marcacao_2.png)';
    ponto = 1;
//    alert("Jogada do jogador 02");
  }
  rodada++;
  $('#'+id).css('background-image', icone);

  var linha_coluna = id.split('-');
  var linha = linha_coluna[0];
  var coluna = linha_coluna[1];

  matriz_jogo[linha][coluna] = ponto;
  console.log(matriz_jogo);
  //alert('Linha ' +linha_coluna[0]);
  //alert('Coluna ' +linha_coluna[1]);
  verifica_ganhador();
}

function verifica_ganhador() {
  var pontos = 0;
  // fixa a linha 'a' e varre a coluna
  for (var i = 1; i <= 3; i++) {
    pontos = pontos + matriz_jogo['a'][i];
  }
  // mostra o ganhador caso já exista um
  mostra_ganhador(pontos);

  var pontos = 0;
  // fixa a linha 'b' e varre a coluna
  for (var i = 1; i <= 3; i++) {
    pontos = pontos + matriz_jogo['b'][i];
  }
  // mostra o ganhador caso já exista um
  mostra_ganhador(pontos);

  var pontos = 0;
  // fixa a linha 'c' e varre a coluna
  for (var i = 1; i <= 3; i++) {
    pontos = pontos + matriz_jogo['c'][i];
  }
  // mostra o ganhador caso já exista um
  mostra_ganhador(pontos);

  // verifica na vertical
  for (var j = 1; j <= 3; j++) {
    pontos = 0;
    pontos += matriz_jogo['a'][j];
    pontos += matriz_jogo['b'][j];
    pontos += matriz_jogo['c'][j];

    mostra_ganhador(pontos);
  }
   // verifica na diagonal: Essa parte é com vocês, boa sorte
   for (var j = 1; j <= 3; j++) {
     pontos = 0;
     pontos += matriz_jogo['a'][1];
     pontos += matriz_jogo['b'][2];
     pontos += matriz_jogo['c'][3];

     mostra_ganhador(pontos);
   }

   for (var j = 1; j <= 3; j++) {
     pontos = 0;
     pontos += matriz_jogo['a'][3];
     pontos += matriz_jogo['b'][2];
     pontos += matriz_jogo['c'][1];

     mostra_ganhador(pontos);
   }
}

function mostra_ganhador(pontos) {
  //  alert("entreiii caralho na função kkkkk");
  if (pontos == -3) {
  //  alert("entreiii caralho");
    var jogada_1 = $('#entrada_play_1').val();
    alert(jogada_1 + ' é o vencedor');
    $('.jogada').off();
  } else if (pontos == 3) {
    //    alert("entreiii caralho else if");
    var jogada_2 = $('#entrada_play_2').val();
    alert(jogada_2 + ' é o vencedor');
    $('.jogada').off();
  }{

  }
}
