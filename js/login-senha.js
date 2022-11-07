function validarSenha() {
	let usuario = document.getElementById("usuario").value;
    let password = document.getElementById("password").value;
	
	 // só permitirá o envio se os dados forem fornecidos
    if ((usuario.indexOf("@")) == -1 ||
      (usuario.indexOf(".")) == -1) {
        alert('Digite um usuário válido ')
      } else if ((usuario == "") ||
      (usuario == null)){
        alert('Digite um usuário')
      } else if (password=='') {
        alert('Digite sua senha')
      } else {
        alert('Login efetuado!')
        window.location.reload()
      }
	}

  function validarrecuperacao(){
    const Email = document.querySelector("#Email");

  if (Email.value === "") {
    alert('Digite um Email')
  }                          

  /* Permiti somente informação com @ e "." e Bloquear @ seguido de "."  */ 
  else if (Email.value.indexOf("@") == -1 || Email.value.indexOf(".") == -1 || (Email.value.indexOf(".") - Email.value.indexOf("@") == 1 )){
    alert('Email Invalido');
  }
   else {
    alert('Enviado com Sucesso');
    location.reload()
  }
}
