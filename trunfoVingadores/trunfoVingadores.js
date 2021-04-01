var cartaHomemDeFerro = {
    nome: "Homem de ferro",
    imagem: "https://1.bp.blogspot.com/-Z4uMeRHaqEI/Xi9yroWWNTI/AAAAAAACAyw/0YaZK3C4J30MoR7klAeFCbO6HKnj_63CwCLcBGAsYHQ/s1600/iron-lifesize01.jpg",
    atributos: {
      Força:5,
      Habilidade:2,
      Velocidade: 6,
     }
  }
  
  var cartaCapitaoAmerica = {
    nome: "Capitão América",
    imagem: "https://static1.purebreak.com.br/articles/9/40/29/9/@/190728-o-diretor-joe-russo-disse-que-o-personag-diapo-1.jpg",
    atributos: {
      Força:3,
      Habilidade:6,
      Velocidade: 2,
      }
   }
  
  var cartaThor = {
    nome: "Thor",
    imagem: "https://img.elo7.com.br/product/zoom/1D6C65A/painel-thor-banner-festa-thor-vingadores-baner-thor.jpg",
    atributos:{
      Força:6,
      Habilidade:3,
      Velocidade: 5,
    }
  }
  var cartaHulk = {
    nome: "Hulk",
    imagem: "https://www.einerd.com.br/wp-content/uploads/2020/11/Hulk-capa.jpg",
    atributos:{
      Força:6,
      Habilidade:4,
      Velocidade: 5,
     }
  }
  var cartaHomemAranha = {
    nome: "Homem Aranha",
    imagem: "https://static.wikia.nocookie.net/universocinematograficomarvel/images/b/b0/Spider-Man_FFH_Profile.jpg/revision/latest?cb=20190510005216&path-prefix=pt",
    atributos:{
      Força:4,
      Habilidade:6,
      Velocidade: 8,
     }
  }
  var cartaCapitaMarvel = {
    nome: "Capitã Marvel",
    imagem: "https://adnews.com.br/wp-content/uploads/2019/03/capitamarvel-1537276869.jpg",
    atributos:{
      Força:9,
      Habilidade:8,
      Velocidade: 7,
      
    }
  }
  var cartas = [cartaHomemDeFerro,cartaCapitaoAmerica,cartaThor, cartaHulk,cartaHomemAranha,cartaCapitaMarvel]
  var cartaMaquina
  var cartaJogador

    var pontosJogador = 0
    var pontosMaquina = 0
    var rodadas = 3
    atualizaPlacar()
   
function atualizaPlacar(){
    var divPlacar = document.getElementById('placar')
   
    var html = '<div class="placar-jogo">'+ "Jogador    " + pontosJogador + "X" + pontosMaquina + "    Máquina"+ '<div class="placar-jogo">'
    divPlacar.innerHTML = html
  }
  
  function sortearCarta (){
    var numeroCartaMaquina = parseInt(Math.random()* cartas.length)
    cartaMaquina = cartas[numeroCartaMaquina]
    var numeroCartaJogador = parseInt(Math.random()*cartas.length)
    while (numeroCartaJogador == numeroCartaMaquina)
      {
        numeroCartaJogador = parseInt(Math.random()*6)
      }
    
    cartaJogador = cartas [numeroCartaJogador]
    document.getElementById('btnSortear').disabled = true
    document.getElementById('btnJogar').disabled = false
    
    exibeCartaJogador()
    
  }
  
  function exibeCartaJogador(){
    var divCartaJogador = document.getElementById("carta-jogador")
    var moldura = '<img src="https://lh3.googleusercontent.com/proxy/bQwW-JeynNbOS6TdKSZlO6gJDHm_eLGtpBhLjEUsjLY67lYVQxY-9paNKjJbGuvjJH8vHi749omX2HLLDE2P-wl-Rnwp5WT_pycCpzw6X2a_HJO_c3pdevuh5-x9x575W0WCeBbyEkFHP5USoSoXx5WKaRlA-kOb9lTsW6C6ubTcJRVJYn2amTVX" style=" width: inherit; height: inherit; position: absolute;">';
    
    divCartaJogador.style.backgroundImage=`url(${cartaJogador.imagem})`
    var nome = `<p class= "carta-subtitle">${cartaJogador.nome}</p>`
    var opcoesTexto = ""  
    for(var atributo in cartaJogador.atributos){
       opcoesTexto+= "<input type= 'radio' name='atributo' value='"+atributo+"'>"+atributo + " = "+ cartaJogador.atributos[atributo] + "<br>"
      }
      
    var html = "<div id='opcoes' class='carta-status'>"
    divCartaJogador.innerHTML = moldura+nome+html+opcoesTexto+'</div>'
  }
  
  
  function obtemAtributoSelecionado(){
    var radioAtributo = document.getElementsByName('atributo')
    for(var i=0; i<radioAtributo.length; i++){
      if (radioAtributo[i].checked){
         return radioAtributo[i].value
      }
    }
  }
  
  function jogar(){
    var divResultado = document.getElementById("resultado")
    var atributoSelecionado = obtemAtributoSelecionado()
    
    if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado])
    {
       htmlResultado = ('<div class="resultado-final">'+"<img src="+ "https://fontmeme.com/permalink/210401/6e24f28c014d4318cd1b08ba35b50dcd.png"+">"+'<div class="resultado-final">')
       pontosJogador++
    }
    else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado])
    {
      htmlResultado =('<div class="resultado-final">'+"<img src="+ "https://fontmeme.com/permalink/210401/676bab79b8b9a55f63dcd1324ac09672.png"+">"+'<div class="resultado-final">')
      pontosMaquina++
    }
    else
    {
      htmlResultado =htmlResultado =('<div class="resultado-final">'+"<img src="+ "https://fontmeme.com/permalink/210401/8d143cd4be217969dbef81e825b4db4f.png"+">"+'<div class="resultado-final">')
      
    }
    rodadas--
    if (rodadas == 0)
      {
        alert ("Fim de Jogo")
        if(pontosJogador>pontosMaquina){
            htmlResultado = ('<div class="resultado-final">'+"<img src="+ "https://fontmeme.com/permalink/210401/6e24f28c014d4318cd1b08ba35b50dcd.png"+">"+'<div class="resultado-final">')
      
            
        }
        else if(pontosJogador<pontosMaquina){
            htmlResultado =('<div class="resultado-final">'+"<img src="+ "https://fontmeme.com/permalink/210401/676bab79b8b9a55f63dcd1324ac09672.png"+">"+'<div class="resultado-final">')
     
        }
        else{
            htmlResultado =htmlResultado =('<div class="resultado-final">'+"<img src="+ "https://fontmeme.com/permalink/210401/8d143cd4be217969dbef81e825b4db4f.png"+">"+'<div class="resultado-final">')
        }
        
      }
    else{
        document.getElementById('btnProximaRodada').disabled=false
    }

    divResultado.innerHTML = htmlResultado
    document.getElementById('btnJogar').disabled=true
    atualizaPlacar()
    exibeCartaMaquina()
   
  }
  
  function exibeCartaMaquina(){
    var divCartaMaquina = document.getElementById("carta-maquina")
    var moldura = '<img src="https://lh3.googleusercontent.com/proxy/bQwW-JeynNbOS6TdKSZlO6gJDHm_eLGtpBhLjEUsjLY67lYVQxY-9paNKjJbGuvjJH8vHi749omX2HLLDE2P-wl-Rnwp5WT_pycCpzw6X2a_HJO_c3pdevuh5-x9x575W0WCeBbyEkFHP5USoSoXx5WKaRlA-kOb9lTsW6C6ubTcJRVJYn2amTVX" style=" width: inherit; height: inherit; position: absolute;">';
    
    divCartaMaquina.style.backgroundImage=`url(${cartaMaquina.imagem})`
    var nome = `<p class= "carta-subtitle">${cartaMaquina.nome}</p>`
    var opcoesTexto = ""  
    for(var atributo in cartaMaquina.atributos){
       opcoesTexto+= "<p type= 'text' name='atributo' value='"+atributo+"'>"+" ->  "+atributo + " = "+ cartaMaquina.atributos[atributo] + "<br>"
      }
      
    var html = "<div id='opcoes' class='carta-status'>"
    divCartaMaquina.innerHTML = moldura+nome+html+opcoesTexto+'</div>'
  }

  function proximaRodada(){
    
    var divCartas = document.getElementById('cartas')
    divCartas.innerHTML = `<div id="carta-jogador" class="carta"></div> <div id="carta-maquina" class="carta"></div>`
 
    document.getElementById('btnSortear').disabled=false
    document.getElementById('btnJogar').disabled=true
    document.getElementById('btnProximaRodada').disabled=true

    var divResultado = document.getElementById('resultado')
    divResultado.innerHTML= ""
 }

