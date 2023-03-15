let header = document.querySelector("h1");
let button = document.querySelector("button");
let img = document.querySelector("img");

button.onclick = function() {
    header.innerHTML = "🤯 wow cool neeto";
    img.style.border = "10px solid orange";
    img.src = "https://media4.giphy.com/media/26ufdipQqU2lhNA4g/giphy.gif";
};