
function exibirOcultarTAG(tag,flag){
  if(flag)
	 $(tag).show(1000);
	else
	 $(tag).hide(1000);
}


function exibirOcultarClasse(classe,flag){
  if(flag)
	 $('.'+classe).show(1000);
	else
	 $('.'+classe).hide(1000);
}


function exibirOcultarID(id,flag){
  if(flag)
	 $('#'+id).show(1000);
	else
	 $('#'+id).hide(1000);
}


$(document).ready(function(){
  $('.caixaevc').click(function(){
      alert('Evento Click');
  });

  $('.caixadb').dblclick(function() {
	   alert("Evento Dbclick");
	});

  $('.caixamo').mouseover(function(){
      alert('Evento Mouse Over');
  });

  $(".campo").keypress(function() {
    $(this).css("background-color", "#cccccc");
  });

  $(".input_keyup").keyup(function(){
    $(".input_keyup").css("background-color", "red");
  });

  $(".campo").focus(function(){
    $(this).css("background-color", "yellow");
  });

  $(".campo").blur(function(){
    $(this).css("background-color", "#ffffff");
  });

  $(".combo").change(function(){
    alert('O Elemento foi modificado: Pesquisar cidades do '+$(this).val());
  });

  $(".combo_site").change(function(){
    alert('O Elemento foi modificado: Pesquisar cidades do '+$(this).val());
  });
});
