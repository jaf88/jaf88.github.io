
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
});