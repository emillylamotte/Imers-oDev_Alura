function adicionarFinalista()
{
  var campoFavorito = document.querySelector('#favorito')
  var meuFavorito = campoFavorito.value
  console.log(meuFavorito)
  listarFavoritoNaTela(meuFavorito)
 }

function listarFavoritoNaTela(par)
{
    
  if(par.startsWith('João'))
  {   
    var listaFavorito=document.querySelector('#listaFavorito')
    var elementoFav= ("<img src=" + "https://img.estadao.com.br/thumbs/640/resources/jpg/6/4/1614249985146.jpg" + ">")
    listaFavorito.innerHTML = listaFavorito.innerHTML + elementoFav
  }
  if(par.startsWith('Camilla'))
  {    
    var listaFavorito=document.querySelector('#listaFavorito')
    var elementoFav= ("<img src=" + "https://static1.purepeople.com.br/articles/2/31/03/82/@/3510251-camilla-de-lucas-declarou-guerra-a-lucas-624x600-1.jpg" + ">")
    listaFavorito.innerHTML = listaFavorito.innerHTML + elementoFav
  }
  if(par.startsWith('Juliette'))
  {   
    var listaFavorito=document.querySelector('#listaFavorito')
    var elementoFav= ("<img src=" + "https://static1.purepeople.com.br/articles/4/31/09/44/@/3516531--bbb-21-juliette-esta-no-segundo-pared-950x0-2.jpg" + ">")
    listaFavorito.innerHTML = listaFavorito.innerHTML + elementoFav
  }
  if(par.startsWith('Pocah'))
  {   
    var listaFavorito=document.querySelector('#listaFavorito')
    var elementoFav= ("<img src=" + "https://portalpopline.com.br/wp-content/uploads/2019/06/pocah-640x800.jpg" + ">")
    listaFavorito.innerHTML = listaFavorito.innerHTML + elementoFav
  }
  if(par.startsWith('Gilberto'))
  {   
    var listaFavorito=document.querySelector('#listaFavorito')
    var elementoFav= ("<img src=" + "https://static1.purepeople.com.br/articles/6/31/07/46/@/3514335--bbb-21-gilberto-tambem-se-mostrou-pro-950x0-2.jpg" + ">")
    listaFavorito.innerHTML = listaFavorito.innerHTML + elementoFav
  }
  if(par.startsWith('Sarah'))
  {
    var listaFavorito=document.querySelector('#listaFavorito')
    var elementoFav= ("<img src=" + "https://static1.purepeople.com.br/articles/4/31/11/84/@/3519390-sarah-do-bbb21-ganha-apelido-de-esp-624x600-2.jpg" + ">")
    listaFavorito.innerHTML = listaFavorito.innerHTML + elementoFav
  }
  if(par.startsWith('Rodolfo'))
  {     
    var listaFavorito=document.querySelector('#listaFavorito')
    var elementoFav= ("<img src=" + "https://static1.purepeople.com.br/articles/3/31/02/23/@/3508493--bbb21-amizade-de-rodolffo-e-caio-bomb-624x600-2.jpg" + ">")
    listaFavorito.innerHTML = listaFavorito.innerHTML + elementoFav
  }
  if(par.startsWith('Viih Tube'))
  {   
    var listaFavorito=document.querySelector('#listaFavorito')
    var elementoFav= ("<img src=" + "https://static1.purepeople.com.br/articles/1/31/06/01/@/3512714--bbb-21-julitte-discute-com-viih-tube-950x0-2.jpg" + ">")
    listaFavorito.innerHTML = listaFavorito.innerHTML + elementoFav
  }
  if(par.startsWith('Thais'))
  {    
    var listaFavorito=document.querySelector('#listaFavorito')
    var elementoFav= ("<img src=" + "https://static1.purepeople.com.br/articles/1/31/25/91/@/3533070-thais-do-bbb-21-colocou-2-ml-de-boca-950x0-3.jpg" + ">")
    listaFavorito.innerHTML = listaFavorito.innerHTML + elementoFav
  }
  if(par.startsWith('Fiuk'))
  {  
    var listaFavorito=document.querySelector('#listaFavorito')
    var elementoFav= ("<img src=" + "https://portalpopline.com.br/wp-content/uploads/2021/01/fiuk-globo-533x800.jpg" + ">")
    listaFavorito.innerHTML = listaFavorito.innerHTML + elementoFav
  }
  if(par.startsWith('Caio'))
  {
    var listaFavorito=document.querySelector('#listaFavorito')
    var elementoFav= ("<img src=" + "https://static1.purepeople.com.br/articles/9/31/14/09/@/3521943--bbb21-caio-e-natural-de-goias-950x0-2.jpg" + ">")
    listaFavorito.innerHTML = listaFavorito.innerHTML + elementoFav
  }
   if(par.startsWith('Arthur'))
  {
    var listaFavorito=document.querySelector('#listaFavorito')
    var elementoFav= ("<img src=" + "https://static1.purepeople.com.br/articles/4/31/05/74/@/3512456--bbb21-arthur-revelou-interesse-em-tha-950x0-2.jpg" + ">")
    listaFavorito.innerHTML = listaFavorito.innerHTML + elementoFav
  }
}
