
var botaoLogin = document.querySelector('#iconLogin')
var fecharLogin = document.querySelector('#fecharLogin')

botaoLogin.addEventListener('click',function(){
    $('#login').css('display','block')
})
fecharLogin.addEventListener('click',function(){
    $('#login').css('display','none')
})

