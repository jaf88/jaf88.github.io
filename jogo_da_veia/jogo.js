
var rodada = 1;

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
  if ((rodada % 2) == 1) {
    icone = 'url(imagens/marcacao_1.png)';
    //alert("Jogada do jogador 01");
  }
  else {
    icone = 'url(imagens/marcacao_2.png)';
//    alert("Jogada do jogador 02");
  }
  rodada++;
  $('#'+id).css('background-image', icone);
}
