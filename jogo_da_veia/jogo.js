
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

    //alert('Jogo iniciado!');
    //alert($('#entrada_play_1').val());
    //alert($('#entrada_play_2').val());
  });
});
