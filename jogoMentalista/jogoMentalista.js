var numeroSecreto = parseInt(Math.random()*10)
console.log(numeroSecreto)

var tentativas = 3

var acerto = ('<div class="imagem">'+"<img src="+ "https://fontmeme.com/temporary/d64be7100a065bb4afb4ca19e349f341.png"+">"+'<div class="imagem">') 
var eMaior = ('<div class="imagem">'+"<img src="+ "https://fontmeme.com/temporary/179682ebf643efacec29dbd26369c084.png"+">"+'<div class="imagem">') 
var eMenor = ('<div class="imagem">'+"<img src="+ "https://fontmeme.com/temporary/05dd47fb986b21145002180cee1f021c.png"+">"+'<div class="imagem">') 
var fim = ('<div class="imagem">'+"<img src="+ "https://fontmeme.com/temporary/f281fd87c7bbb7cd7096b29702626876.png"+">"+'<div class="imagem">') 

function adicionarChute(){

  var palpite = document.querySelector('#chute')
  var chute = palpite.value

   if (numeroSecreto == chute){
       var acertou = document.getElementById("imagem")  
       acertou.innerHTML = acerto
     }
    if (numeroSecreto < chute){
         var menor = document.getElementById("imagem")  
         menor.innerHTML = eMenor
         tentativas = tentativas-1
     }
    if (numeroSecreto > chute){
         var maior = document.getElementById("imagem")  
         maior.innerHTML = eMaior
         tentativas = tentativas-1
     } 
  if (tentativas<0){
        var fimDeJogo = document.getElementById("imagem")  
        fimDeJogo.innerHTML = fim
    }
} 
