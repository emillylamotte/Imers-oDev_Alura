var numeroSecreto = parseInt(Math.random()*10)
console.log(numeroSecreto)

var tentativas = 3

var acerto = ('<div class="imagem">'+"<img src="+ "https://fontmeme.com/permalink/210330/1da339661c4a02ea2e87f0ca89ad4e2b.png"+">"+'<div class="imagem">') 
var eMaior = ('<div class="imagem">'+"<img src="+ "https://fontmeme.com/permalink/210330/8bb5ce0e20c87249719f390eb5e2443e.png"+">"+'<div class="imagem">') 
var eMenor = ('<div class="imagem">'+"<img src="+ "https://fontmeme.com/permalink/210330/701901acf4a7069f32451a69de05f0f9.png"+">"+'<div class="imagem">') 
var fim = ('<div class="imagem">'+"<img src="+ "https://fontmeme.com/permalink/210330/34c6e201067e44615e39e0c88c4dc43f.png"+">"+'<div class="imagem">') 

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

