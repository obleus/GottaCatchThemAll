var userFormEl = document.querySelector("#user-form")
var pokeInputEl = document.querySelector("#pokename")


var 




var getPokemon= function(name) {
    var apiUrl = "https://pokeapi.co/api/v2/pokemon/" + name + "/"
    fetch(apiUrl).then(function(response){
        response.json().then(function(data){
            console.log(data)
        })
    })
};
