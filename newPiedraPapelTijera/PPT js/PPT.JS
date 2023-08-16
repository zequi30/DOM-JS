const botonTijera= document.getElementById("Tijera") 
const botonPiedra= document.getElementById("Piedra") 
const botonPapel= document.getElementById("Papel")  


function elegirAtaque(juga) { 
    botonTijera.addEventListener("click", console.log("ATAQUE TIJERA")) 
    botonPiedra.addEventListener("click", console.log("ATAQUE PIEDRA")) 
    botonPapel.addEventListener("click", console.log("ATAQUE PAPEL"))
}