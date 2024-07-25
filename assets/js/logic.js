console.log("Tamosredy")

// Seleccionar los contadores
let like1 = document.querySelector("#like1");
let like2 = document.querySelector("#like2");
let like3 = document.querySelector("#like3");

//Seleccionar los botones de "Like"
let likeButton1 = document.querySelectorAll(".like")[0];
let likeButton2 = document.querySelectorAll(".like")[1];
let likeButton3 = document.querySelectorAll(".like")[2];

// ++Contador de likes
likeButton1.addEventListener("click", function() {
    like1.innerText = parseInt(like1.innerText) + 1;
});

likeButton2.addEventListener("click", function() {
    like2.innerText = parseInt(like2.innerText) + 1;
});

likeButton3.addEventListener("click", function() {
    like3.innerText = parseInt(like3.innerText) + 1;
});