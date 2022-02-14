var userFormEl = document.querySelector("#user-form")
var pokeInputEl = document.querySelector("#pokename")


var formSubmitHandler = function(event) {
    event.preventDefault();
    var pokeName = pokeInputEl.value.trim();
    if(pokeName){
        getPokemon(pokeName);
        pokeInputEl.value = "";
    } else {
        alert("Please enter a Pokemon name");
    }
    console.log(event)
}

var displayPokes = function(pokes, searchPokes){
    console.log(pokes);
    console.log(searchPokes);
}



var getPokemon= function(name) {
    var apiUrl = "https://pokeapi.co/api/v2/pokemon/" + name + "/"
    fetch(apiUrl).then(function(response){
        response.json().then(function(data){
            displayPokes(data,name)
        })
    })
};

// Eventlistners //
userFormEl.addEventListener("submit", formSubmitHandler);
