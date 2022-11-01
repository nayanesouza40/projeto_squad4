// variáveis globais
var campoCep = document.querySelector('#cep')
var botaoCep = document.querySelector('#botaoCep')
var rua = document.querySelector('#rua')
var bairro = document.querySelector('#bairro')
var cidade = document.querySelector('#cidade')
var estado = document.querySelector('#estado')
var invalido = document.querySelector('#invalido')
var enviarCadastro = document.querySelector('#enviarCadastro')
var botaoListaEspera = document.querySelector('#botaoListaEspera');
var fecharListaEspera = document.querySelector('#fecharListaEspera');
// popup de confirmação de inscrição: invisível
$('#ok').css('display','none')
// mensagem de erro que aparece no formulário: invisível
$('#invalido').css('display','none')
// função que busca o cep na API e preenche os campo de endereço no formulário
function consultarCep() {
    var cep = document.getElementById("cep").value
    var url = 'https://viacep.com.br/ws/' + cep + '/json'
    var request = new XMLHttpRequest()
    request.open('GET', url)
    // mensagem de erro se a API não carregar
    request.onerror = function(e) {
        $('#invalido').css('display','block')
        invalido.innerHTML = 'CEP INVÁLIDO'
        invalido.style.color = 'red'
        campoCep.style.border = '1px solid red'
    }
    request.onload = () => {
        var response = JSON.parse(request.responseText)
        // mensagem de erro se o cep informado não for encontrado
        if (response.erro === true) {
            $('#invalido').css('display','block')
            campoCep.style.border = '1px solid red'
            invalido.innerHTML = 'CEP NÃO ENCONTRADO'
            invalido.style.color = 'red'
        } else {
          // extrai os dados da API 
            campoCep.style.border = ''
            rua.value = response.logradouro
            bairro.value = response.bairro
            cidade.value = response.localidade
            estado.value = response.uf
        }
    }
    // limpa os campos
    request.send();
    rua.value = ''; 
    bairro.value = '';
    cidade.value = ''; 
    estado.value = '';
    invalido.innerHTML = ''
}
// evento que mostra o popup do formulário quando aperta o botão
botaoListaEspera.addEventListener('click',function(){
  $('#escuro').css('display','block')
})
// evento que fecha o popup do formulário quando apertar o X 
fecharListaEspera.addEventListener('click',function(){
  $('#escuro').css('display','none')
})
// evento que execulta a função para buscar o CEP na API quando aperta o botão no formulário
botaoCep.addEventListener('click',function(){
  consultarCep();
})
// evento que valida os dados do formulário de cadastro
enviarCadastro.addEventListener('click',function(){
  // variáveis do formulário
  var nome = document.querySelector('#nome')
  var email = document.querySelector('#email')
  var rg = document.querySelector('#rg')
  var senha = document.querySelector('#senha')
  var senha2 = document.querySelector('#senha2')
  var confirmarCadastro = document.querySelector('#confirmarCadastro')
  // se o dado digitado pelo usuário for inválido
  // o input ficara com a borda vermelha
  // ele 'reseta' as bordas sempre que a função e executada 
  nome.style.border = ''
  email.style.border = ''
  rg.style.border = ''
  senha.style.border = ''
  senha2.style.border = ''
  cep.style.border = ''
  numero.style.border = ''
  if(nome.value==''){
    // o usuário deve digitar um nome
    $('#invalido').css('display','block')
    invalido.style.color = 'red'
    nome.style.border = '1px solid red'
    invalido.innerText = 'Digite seu nome'
  } else if ((email.value.indexOf("@")) == -1 ||
      (email.value.indexOf(".")) == -1 ||
      (email.value == "") ||
      (email.value == null)){
    // email deve estar preenchido e com @ e .
    $('#invalido').css('display','block')
    invalido.style.color = 'red'
    email.style.border = '1px solid red'
    invalido.innerText = 'Digite um email válido'
  } else if (rg.value.length!=9){
    // o rg deve conter 9 dígitos
     $('#invalido').css('display','block')
    invalido.style.color = 'red'
    rg.style.border = '1px solid red'
    invalido.innerText = 'Digite um RG válido'
  } else if (senha2.value!=senha.value) {
    // o segundo campo de senha deve ser igual ao primeiro
    $('#invalido').css('display','block')
    invalido.style.color = 'red'
    senha.style.border = '1px solid red'
    senha2.style.border = '1px solid red'
    invalido.innerText = 'As senhas são diferentes'
  } else if ((cep.value=='')||(rua.value=='')){
    // o cep deve ser preenchido
    // a rua deve ser preenchida(o usuário deve apertar o botão para a função de consultar cep ser execultada e preencher os demais campos de endereço)
    $('#invalido').css('display','block')
    invalido.style.color = 'red'
    cep.style.border = '1px solid red'
    invalido.innerText = 'Informe seu CEP'
  } else if (numero.value=='') {
    // o campo de número deve ser preenchido
     $('#invalido').css('display','block')
    invalido.style.color = 'red'
    numero.style.border = '1px solid red'
    invalido.innerText = 'Informe seu N°'
  } else if ((senha.value=='')||(senha2.value=='')){
    // os campos de senha deve ser preenchido
    $('#invalido').css('display','block')
    invalido.style.color = 'red'
    senha.style.border = '1px solid red'
    senha2.style.border = '1px solid red'
    invalido.innerText = 'Informe uma senha'
  } else {
    // fecha o formulário de cadastro e mostra o popup de confirmação de cadastro
    $('.container').css('display','none')
    $('#ok').css('display','block')
  }
})

// popup de cadastro confirmado, quando aperta o botão ele fecha todo o popup e atualiza a página
confirmarCadastro.addEventListener('click',function(){
    $('#escuro').css('display','none')
    location.reload();
})
