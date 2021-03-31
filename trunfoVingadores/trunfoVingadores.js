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
  
  function sortearCarta (){
    var numeroCartaMaquina = parseInt(Math.random()*6)
    cartaMaquina = cartas[numeroCartaMaquina]
    var numeroCartaJogador = parseInt(Math.random()*6)
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
    var moldura = '<img src="https://lh3.googleusercontent.com/proxy/W_b-71JUmSW-xuS4v8LUsgp3xqMSbj4AUenwIT_chg9xDYoALMMluQiHlYX8vynoZ8udvIkYaxZPQBiCEmBkCggGPct0-B8MscOQWB5L2sq4QNQ4XCo1qaltc_X-gzK48rdj1S__9hYmzyfbOXgYiHdGIlWC32Clfat96pvNbhQhZ695iYDfDnGb" style=" width: inherit; height: inherit; position: absolute;">';
    
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
       htmlResultado = '<p class="resultado-final"> Você venceu </p>'
      
    }
    else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado])
    {
      htmlResultado = '<p class="resultado-final">Você perdeu</p>'
     
    }
    else
    {
      htmlResultado = '<p class="resultado-final">Empate</p>'
      
    }
    divResultado.innerHTML = htmlResultado
    exibeCartaMaquina()
  }
  
  function exibeCartaMaquina(){
    var divCartaMaquina = document.getElementById("carta-maquina")
    var moldura = '<img src="https://lh3.googleusercontent.com/proxy/W_b-71JUmSW-xuS4v8LUsgp3xqMSbj4AUenwIT_chg9xDYoALMMluQiHlYX8vynoZ8udvIkYaxZPQBiCEmBkCggGPct0-B8MscOQWB5L2sq4QNQ4XCo1qaltc_X-gzK48rdj1S__9hYmzyfbOXgYiHdGIlWC32Clfat96pvNbhQhZ695iYDfDnGb" style=" width: inherit; height: inherit; position: absolute;">';
    
    divCartaMaquina.style.backgroundImage=`url(${cartaMaquina.imagem})`
    var nome = `<p class= "carta-subtitle">${cartaMaquina.nome}</p>`
    var opcoesTexto = ""  
    for(var atributo in cartaMaquina.atributos){
       opcoesTexto+= "<p type= 'text' name='atributo' value='"+atributo+"'>"+" ->  "+atributo + " = "+ cartaMaquina.atributos[atributo] + "<br>"
      }
      
    var html = "<div id='opcoes' class='carta-status'>"
    divCartaMaquina.innerHTML = moldura+nome+html+opcoesTexto+'</div>'
  }