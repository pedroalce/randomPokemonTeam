
const ul = document.getElementById('pokers'); // Get the list where we will place our authors
const botao = document.querySelector("#pokemon")
console.log(botao)


// TO DO POKEMON HISTORY
// let pokemonList = []
// pokemonList.push(data.sprites.front_default)
// document.getElementById("hadybala").appendChild(el)

botao.addEventListener("click", () => {

  document.getElementById("red").style.display = "none"
  document.querySelectorAll(".content").forEach((el) => {
    el.style.display = "flex"
  })


  fetch(`https://pokeapi.co/api/v2/pokemon/${Math.floor((Math.random() * 807) + 1)}`)
    .then((resp) => resp.json()) // Transform the data into json
    .then(function (data) {
      //document.getElementById("weight").innerHTML = data.weight;
      document.getElementById("first-pokemon").style.display = "block"
      document.getElementById("first-pokemon").src = data.sprites.front_default;
      document.getElementById("first-pokename").innerHTML = data.name
      document.getElementById("first-poketype").innerHTML = data.types[0].type.name

    })

  fetch(`https://pokeapi.co/api/v2/pokemon/${Math.floor((Math.random() * 807) + 1)}`)
    .then((resp) => resp.json()) // Transform the data into json
    .then(function (data) {
      //document.getElementById("weight").innerHTML = data.weight;
      document.getElementById("second-pokemon").style.display = "block"
      //document.getElementById("poke").src = data.sprites.front_shiny;
      document.getElementById("second-pokemon").src = data.sprites.front_default;
      document.getElementById("second-pokename").innerHTML = data.name
      document.getElementById("second-poketype").innerHTML = data.types[0].type.name


    })

  fetch(`https://pokeapi.co/api/v2/pokemon/${Math.floor((Math.random() * 807) + 1)}`)
    .then((resp) => resp.json()) // Transform the data into json
    .then(function (data) {
      //document.getElementById("weight").innerHTML = data.weight;
      document.getElementById("third-pokemon").style.display = "block"
      document.getElementById("third-pokemon").src = data.sprites.front_default;
      document.getElementById("third-pokename").innerHTML = data.name
      document.getElementById("third-poketype").innerHTML = data.types[0].type.name

    })

  fetch(`https://pokeapi.co/api/v2/pokemon/${Math.floor((Math.random() * 807) + 1)}`)
    .then((resp) => resp.json()) // Transform the data into json
    .then(function (data) {
      //document.getElementById("weight").innerHTML = data.weight;
      document.getElementById("fourth-pokemon").style.display = "block"
      document.getElementById("fourth-pokemon").src = data.sprites.front_default;
      document.getElementById("fourth-pokename").innerHTML = data.name
      document.getElementById("fourth-poketype").innerHTML = data.types[0].type.name

    })

  fetch(`https://pokeapi.co/api/v2/pokemon/${Math.floor((Math.random() * 807) + 1)}`)
    .then((resp) => resp.json()) // Transform the data into json
    .then(function (data) {
      //document.getElementById("weight").innerHTML = data.weight;
      document.getElementById("fifth-pokemon").style.display = "block"
      document.getElementById("fifth-pokemon").src = data.sprites.front_default;
      document.getElementById("fifth-pokename").innerHTML = data.name
      document.getElementById("fifth-poketype").innerHTML = data.types[0].type.name

    })

  fetch(`https://pokeapi.co/api/v2/pokemon/${Math.floor((Math.random() * 807) + 1)}`)
    .then((resp) => resp.json()) // Transform the data into json
    .then(function (data) {
      //document.getElementById("weight").innerHTML = data.weight;
      document.getElementById("sixth-pokemon").style.display = "block"
      document.getElementById("sixth-pokemon").src = data.sprites.front_default;
      document.getElementById("sixth-pokename").innerHTML = data.name
      document.getElementById("sixth-poketype").innerHTML = data.types[0].type.name

      
      
      
      
    })

})


