document.write('<div class="page-subtitle">'+'<h2>'+"Favoritos" +'</h2>'+'<div class="page-subtitle">')

var filmesFav = []
//Inserindo fimes no array
filmesFav.push ("https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL_.jpg")

filmesFav.push("https://m.media-amazon.com/images/M/MV5BMjgwNGNkZGYtMWQyYS00YjEzLWFmZTctODUzYWMxOWJkNTAzXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX182_CR0,0,182,268_AL_.jpg")
filmesFav.push("https://m.media-amazon.com/images/M/MV5BNTkzY2YzNmYtY2ViMS00MThiLWFlYTEtOWQ1OTBiOGEwMTdhXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg")
filmesFav.push("https://m.media-amazon.com/images/M/MV5BM2Q1MDhjYzQtZmNmYS00ZmUyLWFmYjgtZTkyMzU0ZjcyMDNmXkEyXkFqcGdeQXVyODUxOTU0OTg@._V1_UX182_CR0,0,182,268_AL_.jpg")
filmesFav.push("https://m.media-amazon.com/images/M/MV5BYjNlOWY2OWEtMGQyOC00YWQ4LWJkMjUtYzU4NGEzNjM2MWY0XkEyXkFqcGdeQXVyODUxOTU0OTg@._V1_UX182_CR0,0,182,268_AL_.jpg")
filmesFav.push("https://m.media-amazon.com/images/M/MV5BNDVkYjU0MzctMWRmZi00NTkxLTgwZWEtOWVhYjZlYjllYmU4XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_UY268_CR0,0,182,268_AL_.jpg")

for (var i=0;i<filmesFav.length;i++)
  {
    document.write('<div class="imagem">'+"<img src=" + filmesFav[i] + ">"+'<div class="imagem">')
  }

document.write('<div class="page-subtitle">'+'<h2>'+"Séries em alta" +'</h2>'+'<div class="page-subtitle">')

var filmesAlta = []

filmesAlta.push("https://m.media-amazon.com/images/M/MV5BYTM5MDg3MGMtODAyYy00MGQ0LWJhM2MtZDFmMjAzNTFhZGRmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UY268_CR4,0,182,268_AL_.jpg")
filmesAlta.push("https://m.media-amazon.com/images/M/MV5BMTQ2ZWFlNmEtNWYyYy00Yjk1LWIxMTEtMWVkM2NlMTEzOGI2XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_UX182_CR0,0,182,268_AL_.jpg")
filmesAlta.push("https://m.media-amazon.com/images/M/MV5BOTE1M2Q3YjQtZGMzYy00MDcwLWIzNzctYzI3MDBhMjBmYTQwXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_UX182_CR0,0,182,268_AL_.jpg")
filmesAlta.push("https://m.media-amazon.com/images/M/MV5BNzVkYWY4NzYtMWFlZi00YzkwLThhZDItZjcxYTU4ZTMzMDZmXkEyXkFqcGdeQXVyODUxOTU0OTg@._V1_UX182_CR0,0,182,268_AL_.jpg")
filmesAlta.push("https://m.media-amazon.com/images/M/MV5BZjFhZWViN2MtOTE3ZC00YmM5LWEwMGQtNTlhNTdlZjQ1ZDY1XkEyXkFqcGdeQXVyMTkzODUwNzk@._V1_UX182_CR0,0,182,268_AL_.jpg")
filmesAlta.push("https://m.media-amazon.com/images/M/MV5BMjEzMDAxOTUyMV5BMl5BanBnXkFtZTgwNzAxMzYzOTE@._V1_UX182_CR0,0,182,268_AL_.jpg")



for (var i=0;i<filmesAlta.length;i++)
  {
    document.write('<div class="imagem">'+"<img src=" + filmesAlta[i] + ">"+'<div class="imagem">')
  }

document.write('<div class="page-subtitle">'+'<h2>'+"Recomendado para você" +'</h2>'+'<div class="page-subtitle">')

var filmesPraVoce = []

filmesPraVoce.push("https://m.media-amazon.com/images/M/MV5BMTQ3NDA1ZWYtYjBmMC00NmJjLWI1NjgtYjg2NDhmMTY2YWQ4XkEyXkFqcGdeQXVyNzA5NjUyNjM@._V1_UX182_CR0,0,182,268_AL_.jpg")
filmesPraVoce.push("https://m.media-amazon.com/images/M/MV5BMTU0MTI0MDAyM15BMl5BanBnXkFtZTgwMDg5MzYyNTM@._V1_UY268_CR0,0,182,268_AL_.jpg")
filmesPraVoce.push("https://m.media-amazon.com/images/M/MV5BOGIwNzA2OWItMDdjYS00YWRhLWE3ODgtN2NhNzIzZmY3ZjZhXkEyXkFqcGdeQXVyODM3ODkyMDk@._V1_UX182_CR0,0,182,268_AL_.jpg")
filmesPraVoce.push("https://m.media-amazon.com/images/M/MV5BYjYyM2FmMmMtZDgyZi00NGU3LWI3NzktODllZDY0YzQyNzgyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX182_CR0,0,182,268_AL_.jpg")
filmesPraVoce.push("https://m.media-amazon.com/images/M/MV5BYjg1ZmQ0ZDktMjNhZS00MDJjLTllZTItMmIyYTBkYjM2MzQzXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX182_CR0,0,182,268_AL_.jpg")
filmesPraVoce.push("https://m.media-amazon.com/images/M/MV5BZTgzODg4Y2UtMGI3Zi00YTg3LTg4NjYtYWI2ZmJjNGNhYTlhXkEyXkFqcGdeQXVyNjEwNTM2Mzc@._V1_UY268_CR4,0,182,268_AL_.jpg")


for (var i=0;i<filmesPraVoce.length;i++)
  {
    document.write('<div class="imagem">'+"<img src="+ filmesPraVoce[i] + ">"+'<div class="imagem">')
  }