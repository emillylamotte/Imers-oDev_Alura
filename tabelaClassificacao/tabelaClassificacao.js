var j1 = {
    nome: "Jogador 1",
    vitorias: 0,
    derrotas: 0,
    pontos: 0
   }
  var j2 = {
    nome: "Jogador 2",
    vitorias: 0,
    derrotas: 0,
    pontos: 0
   }
  var j3 = {
    nome: "Jogador 3",
    vitorias: 0,
    derrotas: 0,
    pontos: 0
   }
  var j4 = {
    nome: "Jogador 4",
    vitorias: 0,
    derrotas: 0,
    pontos: 0
   }
  var j5 = {
    nome: "Jogador 5",
    vitorias: 0,
    derrotas: 0,
    pontos: 0
   }
  
  function calculaPontos(jogador)
  {
    var pontos = (jogador.vitorias * 10) - (jogador.derrotas)
    return pontos
  }
  
  function exibirJogadoresNaTela (jogadores)
  {
    var html = ""
    for(var i=0; i<jogadores.length; i++)
      {
        html += "<tr><td>" + jogadores[i].nome + "</td>"
        html += "<td>" + jogadores[i].vitorias + "</td>"
        html += "<td>" + jogadores[i].derrotas + "</td>"
        html += "<td>" + jogadores[i].pontos + "</td>"
        html += "<td><button onClick='adicionarVitoria("+ i +")'>Vitória</button></td>"
        html += "<td><button onClick='adicionarDerrota("+ i + ")'>Derrota</button></td></tr>"
      }
    var tabelaJogadores = document.getElementById("tabelaJogadores")
    tabelaJogadores.innerHTML = html
  }
  
  function adicionarVitoria (i){
    var jogador = jogadores[i]
    jogador.vitorias++
    jogador.pontos = calculaPontos(jogador)
    exibirJogadoresNaTela(jogadores)
  }
  
  function adicionarDerrota (i){
    var jogador = jogadores[i]
    jogador.derrotas++
    jogador.pontos = calculaPontos(jogador)
    exibirJogadoresNaTela(jogadores)
  }
  
  j1.pontos = calculaPontos(j1)
  j2.pontos = calculaPontos(j2)
  j3.pontos = calculaPontos(j3)
  j4.pontos = calculaPontos(j4)
  j5.pontos = calculaPontos(j5)
  var jogadores = [j1,j2,j3,j4,j5]
  exibirJogadoresNaTela(jogadores)
  