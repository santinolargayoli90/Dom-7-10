//guardar y modificar
//seleccionar por elemento
let p = document.querySelector("p")

//seleccionar por identificador
let parrafo = document.querySelector("#parrafo2")

//seleccionar clase por clase

let parrafos = document.querySelector(".parrafos")
let imagencaruso  = document.querySelector ("img")

//modificar evento

let b = document.querySelector("button")
b.onclick = function () {
    p.style.color = "white"
    p.style.backgroundColor = "red"  
    imagencaruso.src = "https//a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/2991350.png"
}
