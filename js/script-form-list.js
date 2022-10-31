$('#ok').css('display','none')

var botaoListaEspera = document.querySelector('#botaoListaEspera');
var fecharListaEspera = document.querySelector('#fecharListaEspera');

botaoListaEspera.addEventListener('click',function(){
    $('#escuro').css('display','block')
    $('#ok').css('display','none')
})
fecharListaEspera.addEventListener('click',function(){
    $('#escuro').css('display','none')
})

//API ViaCEP

var campoCep = document.querySelector('#cep')
var botaoCep = document.querySelector('#botaoCep')
var rua = document.querySelector('#rua')
var bairro = document.querySelector('#bairro')
var cidade = document.querySelector('#cidade')
var estado = document.querySelector('#estado')
var invalido = document.querySelector('#invalido')
var enviarCadastro = document.querySelector('#enviarCadastro')

$('#invalido').css('display','none')

function consultarCep() {
    var cep = document.getElementById("cep").value
    var url = 'https://viacep.com.br/ws/' + cep + '/json'
    var request = new XMLHttpRequest()
    request.open('GET', url)
    request.onerror = function(e) {
        $('#invalido').css('display','block')
        invalido.innerHTML = 'CEP INVÁLIDO'
        invalido.style.color = 'red'
        campoCep.style.border = '1px solid red'

    }
    request.onload = () => {
        var response = JSON.parse(request.responseText)
        if (response.erro === true) {
            $('#invalido').css('display','block')
            campoCep.style.border = '1px solid red'
            invalido.innerHTML = 'CEP NÃO ENCONTRADO'
            invalido.style.color = 'red'
        } else {
            campoCep.style.border = ''
            rua.value = response.logradouro
            bairro.value = response.bairro
            cidade.value = response.localidade
            estado.value = response.uf
        }
    }

    request.send();
    rua.value = ''; 
    bairro.value = '';
    cidade.value = ''; 
    estado.value = '';
    invalido.innerHTML = ''

}

botaoCep.addEventListener('click',function(){
  consultarCep();
})

enviarCadastro.addEventListener('click',function(){
  $('#invalido').css('display','none')
  var nome = document.querySelector('#nome')
  var email = document.querySelector('#email')
  var rg = document.querySelector('#rg')
  var senha = document.querySelector('#senha')
  var senha2 = document.querySelector('#senha2')
  var confirmarCadastro = document.querySelector('#confirmarCadastro')
  nome.style.border = ''
  email.style.border = ''
  rg.style.border = ''
  senha.style.border = ''
    senha2.style.border = ''
    cep.style.border = ''
    numero.style.border = ''
  if(nome.value==''){
    $('#invalido').css('display','block')
    invalido.style.color = 'red'
    nome.style.border = '1px solid red'
    invalido.innerText = 'Digite seu nome'
  } else if ((email.value.indexOf("@")) == -1 ||
      (email.value.indexOf(".")) == -1 ||
      (email.value == "") ||
      (email.value == null)){
     $('#invalido').css('display','block')
    invalido.style.color = 'red'
    email.style.border = '1px solid red'
    invalido.innerText = 'Digite um email válido'
  } else if (rg.value.length!=9){
     $('#invalido').css('display','block')
    invalido.style.color = 'red'
    rg.style.border = '1px solid red'
    invalido.innerText = 'Digite um RG válido'
  } else if (senha2.value!=senha.value) {
   $('#invalido').css('display','block')
    invalido.style.color = 'red'
    senha.style.border = '1px solid red'
    senha2.style.border = '1px solid red'
    invalido.innerText = 'As senhas são diferentes'
  } else if ((cep.value=='')||(rua.value=='')){
    $('#invalido').css('display','block')
    invalido.style.color = 'red'
    cep.style.border = '1px solid red'
    invalido.innerText = 'Informe seu CEP'
  } else if (numero.value=='') {
     $('#invalido').css('display','block')
    invalido.style.color = 'red'
    numero.style.border = '1px solid red'
    invalido.innerText = 'Informe seu N°'
  } else if ((senha.value=='')||(senha.value=='')){
    $('#invalido').css('display','block')
    invalido.style.color = 'red'
    senha.style.border = '1px solid red'
    senha2.style.border = '1px solid red'
    invalido.innerText = 'Informe uma senha'
  } else {
    $('.container').css('display','none')
    $('#ok').css('display','block')
  }
})

confirmarCadastro.addEventListener('click',function(){
    $('#escuro').css('display','none')
    location.reload();
})
