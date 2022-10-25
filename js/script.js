var botaoListaEspera = document.querySelector('#botaoListaEspera');
var fecharListaEspera = document.querySelector('#fecharListaEspera');
var botaoLogin = document.querySelector('#iconLogin')
var fecharLogin = document.querySelector('#fecharLogin')
botaoListaEspera.addEventListener('click',function(){
    $('#escuro').css('display','block')
})
fecharListaEspera.addEventListener('click',function(){
    $('#escuro').css('display','none')
})
botaoLogin.addEventListener('click',function(){
    $('#login').css('display','block')
})
fecharLogin.addEventListener('click',function(){
    $('#login').css('display','none')
})