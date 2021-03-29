const botao = document.querySelector('button')

botao.onclick = () => {

  var valorEmDolarTexto = Number(document.querySelector('input').value)
  var valorEmDolarNum = parseFloat(valorEmDolarTexto)
  var valorConvertido = (valorEmDolarNum*5.65)
  var valorEmRealDecimal = valorConvertido.toFixed(2)
  document.querySelector('h2').innerHTML = 'R$ '+(valorEmRealDecimal)
  
}