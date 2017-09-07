
$(document).ready(function() {

  $('#btn_iniciar_jogo').click(function () {

    if ($('#entrada_play_1').val()=='') {
      alert("O apelido do jogador 1 deve ser informado!");
      return false;
    }

    if ($('#entrada_play_2').val()=='') {
      alert("O apelido do jogador 2 deve ser informado!");
      return false;
    }
    //alert('Jogo iniciado!');
    alert($('#entrada_play_1').val());
    alert($('#entrada_play_2').val());
  });
});
