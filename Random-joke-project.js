let jokeText = document.getElementById("jokeText");
let jokeBtn = document.getElementById("jokeBtn");

function joke() {
    let s = {
        method: "GET"
    }
    fetch("https://apis.ccbp.in/jokes/random", s)
        .then(function(response) {
            return response.json();
        })
        .then(function(text) {
            let tt = text.value;
            jokeText.textContent = tt;
        });
}




jokeBtn.addEventListener("click", joke);