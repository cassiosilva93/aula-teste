const catalogo = require('./database/catalogo.json')

function listarTodosOsFilmes() {
  for(let i = 0; i < catalogo.length; i++) {
    console.log(catalogo[i]);
  }
}

function listarFilmesEmCartaz() {
  let filmesEmCartaz = []

  for(let i = 0; i < catalogo.length; i++) {
    if (catalogo[i].emCartaz) {
      filmesEmCartaz.push(catalogo[i])
    }
  }

  return filmesEmCartaz
}

function adicionarFilme(filme) {
  catalogo.push(filme)
}

function buscarFilme(codigo) { 
  let filmeEncontrado = []

  for(let i = 0; i < catalogo.length; i++) { 
    if (catalogo[i].codigo === codigo) {
      filmeEncontrado = catalogo[i]
    }
  }

  return filmeEncontrado
}

function alterarEmCartaz(codigo, buscarFilme) { 
  const filmeEncontrado = buscarFilme(codigo)
  filmeEncontrado.emCartaz = !filmeEncontrado.emCartaz
  return filmeEncontrado
}


// comentário de teste
console.log('Commit do Professor Cassio')


function teste() {
  console.log('teste')
}

function digaAdeus() {
  console.log('Adeus! :)')
}