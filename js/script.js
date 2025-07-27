document.getElementById("botao_enviar").addEventListener("click", valida_formulario )

function valida_formulario(){
	
	if(document.getElementById("nome").value != "" &&
		 document.getElementById("email").value != "" &&
		 document.getElementById("telefone").value != ""){
		alert("Prontinho! Você receberá as novidades por e-mail.")
	}else{
	alert("Por favor, preencha os campos nome e email!")
	}
}
