const botonMascotaJugador = document.getElementById('boton-mascota')
const sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')
const spanMascotaJugador = document.getElementById('mascota-jugador') 
const spanMascotaEnemigo = document.getElementById('mascota-enemigo') 
const spanVidasJugador = document.getElementById('vidas-jugador')
const botonReiniciar = document.getElementById('boton-reiniciar') 
const spanVidasEnemigo = document.getElementById('vidas-enemigo') 
const sectionMensajes = document.getElementById('resultado')
const ataquesDelJugador = document.getElementById('ataques-del-jugador')
const ataquesDelEnemigo = document.getElementById('ataques-del-enemigo') 
const sectionReiniciar = document.getElementById('reiniciar') 
const sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque') 
const contenedorTarjetas= document.getElementById("contenedorTarjetas") 
const contenedorAtaques= document.getElementById("contenedorAtaques") 
const sectionVerMapa= document.getElementById("ver-mapa") 
const mapa= document.getElementById("mapa")

let jugadorId= null 
let enemigoId=null
let mokepones= [] 
let mokeponesEnemigo=[]
let ataqueJugador= [] 
let ataqueEnemigo=[] 
let ataquesMokepon 
let objetoMascotaJugador 
let ataquesMokeponEnemigo
let inputHipodoge 
let botonFuego  
let botonAgua 
let botonTierra 
let botonRayo 
let botonViento 
let botonWeed
let botones= [] 
let indexAtaqueJugador 
let indexAtaqueEnemigo  
let inputCapipepo 
let inputRatigueya 
let inputChidoshi 
let inputFedeB 
let inputSonGoku
let mascotaJugador
let opcionDeMokepones 
let victoriasJugador= 0 
let victoriasEnemigo= 0
let vidasJugador = 3
let vidasEnemigo = 3 
let lienzo= mapa.getContext("2d") 
let intervalo  
let mapaBackground= new Image()
mapaBackground.src="./mascotillas/mokemap2.png" 
let alturaQueBuscamos 
let anchoDelMapa= window.innerWidth- 20  
const anchoMaximoDelMapa=800
if(anchoDelMapa>anchoMaximoDelMapa){anchoDelMapa=anchoMaximoDelMapa-20}

alturaQueBuscamos=anchoDelMapa*600/800

mapa.width=anchoDelMapa
mapa.height=alturaQueBuscamos
 class Mokepon { 
    constructor (nombre, foto, vida, fotoMapa,id=null){ 
    this.id=id
    this.nombre=nombre 
    this.foto= foto 
    this.vida= vida 
    this.ataques= [] 
    this.ancho=80 
    this.alto=80
    this.x= aleatorio(0, mapa.width-this.ancho) 
    this.y= aleatorio(0,mapa.height-this.alto)
    this.mapaFoto=new Image() 
    this.mapaFoto.src=fotoMapa   
    this.velocidadX=0
    this.velocidadY=0
} 
pintarMokepon(){ lienzo.drawImage( 
    this.mapaFoto, 
    this.x,
    this.y,
    this.alto,
    this.ancho) }
} 
let hipodoge= new Mokepon ("Hipodoge", "./mascotillas/kuramita-PhotoRoom.png-PhotoRoom.png", 5, "./mascotillas/kuramaMap.png") 
let capipepo= new Mokepon ("Capipepo", "./mascotillas/capipepo-PhotoRoom.png-PhotoRoom.png", 5, "./mascotillas/Akamaru.2005-PhotoRoom.png-PhotoRoom.png") 
let ratigueya= new Mokepon("Ratigueya", "./mascotillas/carpinchosau-PhotoRoom.png-PhotoRoom.png", 5,"./mascotillas/ratigueyaMap.png") 
let SonGoku= new Mokepon("SonGoku","./mascotillas/songoku.png",5,"./mascotillas/songokuMap.png") 
let FedeB= new Mokepon ("FedeB","./mascotillas/images-PhotoRoom.png-PhotoRoom.png",5,"./mascotillas/fedeMap.png") 
let Chidoshi= new Mokepon("Chidoshi","./mascotillas/shukaku.png",5,"./mascotillas/shukakumini.png") 



const HIPODOGE_ATAQUES=[
{nombre:"💧", id:"boton-agua"}, 
{nombre:"💧", id:"boton-agua"}, 
{nombre:"💧", id:"boton-agua"}, 
{nombre:"🔥", id:"boton-fuego"}, 
{nombre:"🌱", id:"boton-tierra"} ]

hipodoge.ataques.push(...HIPODOGE_ATAQUES )  
hipodogeEnemigo.ataques.push(...HIPODOGE_ATAQUES) 

const RATIGUEYA_ATAQUES= [{nombre:"🌱", id:"boton-tierra"},
{nombre:"🌱", id:"boton-tierra"}, 
{nombre:"🌱", id:"boton-tierra"},   
{nombre:"💧", id:"boton-agua"}, 
{nombre:"🔥", id:"boton-fuego"}, ]
ratigueya.ataques.push(...RATIGUEYA_ATAQUES)  
ratigueyaEnemigo.ataques.push(...RATIGUEYA_ATAQUES)

const CAPIPEPO_ATAQUES=[{nombre:"🔥", id:"boton-fuego"}, 
{nombre:"🔥", id:"boton-fuego"}, 
{nombre:"🔥", id:"boton-fuego"}, 
{nombre:"💧", id:"boton-agua"},  
{nombre:"🌱", id:"boton-tierra"}  ]
capipepo.ataques.push(...CAPIPEPO_ATAQUES)
capipepoEnemigo.ataques.push(...CAPIPEPO_ATAQUES) 

const SONGOKU_ATAQUES=[{nombre:"🌀", id:"boton-viento"}, 
{nombre:"🌀", id:"boton-viento"}, 
{nombre:"🌀",id:"boton-viento"},
{nombre:"💧", id:"boton-agua"},  
{nombre:"🔥", id:"boton-fuego"}]
SonGoku.ataques.push(...SONGOKU_ATAQUES)
SonGokuEnemigo.ataques.push(...SONGOKU_ATAQUES) 
const FEDEB_ATAQUES=[{nombre:"🍁",id:"boton-weed"},
{nombre:"🍁", id:"boton-weed"}, 
{nombre:"🍁",id:"boton-weed"},
{nombre:"🌱", id:"boton-tierra"},  
{nombre:"🔥", id:"boton-fuego"}]                   
FedeB.ataques.push(...FEDEB_ATAQUES)  
FedeBEnemigo.ataques.push(FEDEB_ATAQUES) 

const CHIDOSHI_ATAQUES=[{nombre:"⚡",id:"boton-rayo"},
{nombre:"⚡", id:"boton-rayo"}, 
{nombre:"⚡",id:"boton-rayo"},
{nombre:"🔥", id:"boton-tierra"},  
{nombre:"🔥", id:"boton-fuego"}]
Chidoshi.ataques.push(...CHIDOSHI_ATAQUES)       
ChidoshiEnemigo.ataques.push(...CHIDOSHI_ATAQUES)                                                                
mokepones.push(hipodoge,ratigueya,capipepo,FedeB,Chidoshi,SonGoku) 

function iniciarJuego() {
    
    sectionSeleccionarAtaque.style.display = 'none'
    sectionVerMapa.style.display="none"
    mokepones.forEach((mokepon) => {
        opcionDeMokepones = `
        <input type="radio" name="mascota" id=${mokepon.nombre} />
        <label class="tarjeta-de-mokepon" for=${mokepon.nombre}>
            <p>${mokepon.nombre}</p>
            <img src=${mokepon.foto} alt=${mokepon.nombre}>
        </label>`
    contenedorTarjetas.innerHTML += opcionDeMokepones

     inputHipodoge = document.getElementById('Hipodoge')
     inputCapipepo = document.getElementById('Capipepo')
     inputRatigueya = document.getElementById('Ratigueya') 
     inputChidoshi= document.getElementById("Chidoshi") 
     inputFedeB =document.getElementById("FedeB")
     inputSonGoku=document.getElementById("SonGoku")

    })
    
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)

    botonReiniciar.addEventListener('click', reiniciarJuego) 

} 


function seleccionarMascotaJugador() {
    
    sectionSeleccionarMascota.style.display = 'none'
    
    if (inputHipodoge.checked) {
        spanMascotaJugador.innerHTML = inputHipodoge.id
        mascotaJugador = inputHipodoge.id
    } else if (inputCapipepo.checked) {
        spanMascotaJugador.innerHTML = inputCapipepo.id
        mascotaJugador = inputCapipepo.id
    } else if (inputRatigueya.checked) {
        spanMascotaJugador.innerHTML = inputRatigueya.id
        mascotaJugador = inputRatigueya.id
    } else if (inputSonGoku.checked) {
        spanMascotaJugador.innerHTML = inputSonGoku.id
        mascotaJugador = inputSonGoku.id
    } else if (inputChidoshi.checked) {
        spanMascotaJugador.innerHTML = inputChidoshi.id
        mascotaJugador = inputChidoshi.id
    } else if (inputFedeB.checked) {
        spanMascotaJugador.innerHTML = inputFedeB.id
        mascotaJugador = inputFedeB.id
    }
    else {
        alert('Selecciona una mascota')
    } 

    seleccionarMokepon(mascotaJugador)
    sectionVerMapa.style.display="flex" 
    iniciarMapa()
    extraerAtaques(mascotaJugador)
}

function seleccionarMokepon(mascotaJugador) { 
if (mokeponNombre==hipodoge){MokeponEnemigo=hipodogeEnemigo= new Mokepon ("Hipodoge", "./mascotillas/kuramita-PhotoRoom.png-PhotoRoom.png", 5, "./mascotillas/kuramaMap.png", enemigo.id)}
else if(mokeponNombre==capipepo){MokeponEnemigo= capipepoEnemigo= new Mokepon ("Capipepo", "./mascotillas/capipepo-PhotoRoom.png-PhotoRoom.png", 5, "./mascotillas/Akamaru.2005-PhotoRoom.png-PhotoRoom.png",enemigo.id) }
else if(mokeponNombre==ratigueya){MokeponEnemigo= ratigueyaEnemigo= new Mokepon("Ratigueya", "./mascotillas/carpinchosau-PhotoRoom.png-PhotoRoom.png", 5,"./mascotillas/ratigueyaMap.png", enemigo.id) }
else if(mokeponNombre==SonGoku){MokeponEnemigo= SonGokuEnemigo= new Mokepon("SonGoku","./mascotillas/songoku.png",5,"./mascotillas/songokuMap.png",enemigo.id) }
else if(mokeponNombre==FedeB){MokeponEnemigo= FedeBEnemigo= new Mokepon ("FedeB","./mascotillas/images-PhotoRoom.png-PhotoRoom.png",5,"./mascotillas/fedeMap.png",enemigo.id) }
else if(mokeponNombre==Chidoshi){MokeponEnemigo= ChidoshiEnemigo= new Mokepon("Chidoshi","./mascotillas/shukaku.png",5,"./mascotillas/shukakumini.png",enemigo.id) } 
MokeponEnemigo.x=enemigo.x 
MokeponEnemigo.y=enemigo.y 
return mokeponesEnemigo
}

function extraerAtaques(mascotaJugador) {
    let ataques
    for (let i = 0; i < mokepones.length; i++) {
        if (mascotaJugador === mokepones[i].nombre) {
            ataques = mokepones[i].ataques
        }
        
    }
    mostrarAtaques(ataques)
}

function mostrarAtaques(ataques) {
    ataques.forEach((ataque) => {
        ataquesMokepon = `
        <button id=${ataque.id} class="boton-de-ataque BAtaque">${ataque.nombre}</button>
        `
        contenedorAtaques.innerHTML = ataquesMokepon
    })

     botonFuego = document.getElementById('boton-fuego')
     botonAgua = document.getElementById('boton-agua')
     botonTierra = document.getElementById('boton-tierra') 
     botonRayo= document.getElementById('boton-rayo') 
     botonViento=document.getElementById('boton-viento') 
     botonWeed= document.getElementById('boton-weed')   
     botones = document.querySelectorAll('.BAtaque')
}

function secuenciaAtaque() {
    botones.forEach((boton) => {
        boton.addEventListener('click', (e) => {
            if (e.target.textContent === '🔥') {
                ataqueJugador.push('FUEGO')
                console.log(ataqueJugador)
                boton.style.background = '#112f58' 
                boton.disabled= true   
            } else if (e.target.textContent === '💧') {
                ataqueJugador.push('AGUA')
                console.log(ataqueJugador)
                boton.style.background = '#112f58' 
                boton.disabled= true 
            }  else if (e.target.textContent === '🌀') {
                ataqueJugador.push('VIENTO')
                console.log(ataqueJugador)
                boton.style.background = '#112f58' 
                boton.disabled= true 
            }  else if (e.target.textContent === '⚡') {
                ataqueJugador.push('RAYO')
                console.log(ataqueJugador)
                boton.style.background = '#112f58' 
                boton.disabled= true } 
                else if (e.target.textContent === '🍁') {
                    ataqueJugador.push('WEED')
                    console.log(ataqueJugador)
                    boton.style.background = '#112f58' 
                    boton.disabled= true } 
            else {
                ataqueJugador.push('TIERRA')
                console.log(ataqueJugador)
                boton.style.background = '#112f58' 
                boton.disabled= true 
            }
            if (ataqueJugador.length === 5) {
                enviarAtaques()
            }
        })
    })
    

} 

function seleccionarMascotaEnemigo(enemigo) {
    spanMascotaEnemigo.innerHTML=enemigo.nombre 
    ataquesMokeponEnemigo=enemigo.ataques
    secuenciaAtaque()
}


function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(0,ataquesMokeponEnemigo.length, -1)
    
    if (ataqueAleatorio == 0) {
        ataqueEnemigo.push( 'FUEGO')
    } else if (ataqueAleatorio == 1) {
        ataqueEnemigo.push( 'AGUA')
    } else if (ataqueAleatorio == 2) {
        ataqueEnemigo.push( 'RAYO')
    } else if (ataqueAleatorio == 3) {
        ataqueEnemigo.push( 'VIENTO')
    } else if (ataqueAleatorio == 4) {
        ataqueEnemigo.push( 'WEED')
    } 
    else {
        ataqueEnemigo.push( 'TIERRA')
    }

    iniciarPelea()
}

function iniciarPelea() { 
    if (ataqueJugador.length=== 5) { 
        combate()
        }
}
function indexAmbosOponentes(jugador,enemigo) { 
indexAtaqueJugador= ataqueJugador[jugador] 
indexAtaqueEnemigo= ataqueEnemigo[enemigo]
}

function combate() { 
    for (let index = 0; index < ataqueJugador.length; index++) {
        if (ataqueJugador[index]=== ataqueEnemigo[index]){  
            indexAmbosOponentes(index,index)
            crearMensaje("EMPATE") 
        } else if (ataqueJugador[index]=== ("FUEGO") && ataqueEnemigo[index]===("TIERRA")){ 
            indexAmbosOponentes(index,index)
            crearMensaje( "GANASTE") 
            victoriasJugador++ 
            spanVidasJugador.innerHTML=victoriasJugador
        } else if (ataqueJugador[index]=== ("AGUA") && ataqueEnemigo[index]===("FUEGO")){ 
            indexAmbosOponentes(index,index)
            crearMensaje( "GANASTE") 
            victoriasJugador++ 
            spanVidasJugador.innerHTML=victoriasJugador
            } else if (ataqueJugador[index]=== ("TIERRA") && ataqueEnemigo[index]===("AGUA")){ 
                indexAmbosOponentes(index,index)
                crearMensaje( "GANASTE") 
                victoriasJugador++ 
                spanVidasJugador.innerHTML=victoriasJugador
            } else if (ataqueJugador[index]=== ("VIENTO") && ataqueEnemigo[index]===("RAYO")){ 
                indexAmbosOponentes(index,index)
                crearMensaje( "GANASTE") 
                victoriasJugador++ 
                spanVidasJugador.innerHTML=victoriasJugador
            }  else if (ataqueJugador[index]=== ("RAYO") && ataqueEnemigo[index]===("WEED")){ 
                indexAmbosOponentes(index,index)
                crearMensaje( "GANASTE") 
                victoriasJugador++ 
                spanVidasJugador.innerHTML=victoriasJugador
            } else if (ataqueJugador[index]=== ("WEED") && ataqueEnemigo[index]===("VIENTO")){ 
                indexAmbosOponentes(index,index)
                crearMensaje( "GANASTE") 
                victoriasJugador++ 
                spanVidasJugador.innerHTML=victoriasJugador
            } else if (ataqueJugador[index]=== ("FUEGO") && ataqueEnemigo[index]===("WEED")){ 
                indexAmbosOponentes(index,index)
                crearMensaje( "GANASTE") 
                victoriasJugador++ 
                spanVidasJugador.innerHTML=victoriasJugador
            } else if (ataqueJugador[index]=== ("RAYO") && ataqueEnemigo[index]===("AGUA")){ 
                indexAmbosOponentes(index,index)
                crearMensaje( "GANASTE") 
                victoriasJugador++ 
                spanVidasJugador.innerHTML=victoriasJugador
            } else if (ataqueJugador[index]=== ("FUEGO") && ataqueEnemigo[index]===("VIENTO")){ 
                indexAmbosOponentes(index,index)
                crearMensaje( "GANASTE") 
                victoriasJugador++ 
                spanVidasJugador.innerHTML=victoriasJugador
            } else if (ataqueJugador[index]=== ("TIERRA") && ataqueEnemigo[index]===("WEED")){ 
                indexAmbosOponentes(index,index)
                crearMensaje( "GANASTE") 
                victoriasJugador++ 
                spanVidasJugador.innerHTML=victoriasJugador
            }  else if (ataqueJugador[index]=== ("VIENTO") && ataqueEnemigo[index]===("TIERRA")){ 
                indexAmbosOponentes(index,index)
                crearMensaje( "GANASTE") 
                victoriasJugador++ 
                spanVidasJugador.innerHTML=victoriasJugador
            } else if (ataqueJugador[index]=== ("VIENTO") && ataqueEnemigo[index]===("AGUA")){ 
                indexAmbosOponentes(index,index)
                crearMensaje( "GANASTE") 
                victoriasJugador++ 
                spanVidasJugador.innerHTML=victoriasJugador
            } 
            else { 
            crearMensaje("PERDISTE") 
            victoriasEnemigo++ 
            spanVidasEnemigo.innerHTML=victoriasEnemigo
        }
        }
   revisarVidas()
}

function revisarVidas() {
    if (victoriasJugador==victoriasEnemigo) {
        crearMensajeFinal("ZAPATA, SI NO GANA, EMPATA REY!")
    } else if (victoriasJugador>victoriasEnemigo) {
        crearMensajeFinal('GANASTE LA COPA DO MUNDO, SIUUUU')
    } else{ 
        crearMensajeFinal("PROBA JUGANDO A LAS BARBIS")
    }
}

function crearMensaje(resultado) {
   let nuevoAtaqueDelJugador = document.createElement('p')
    let nuevoAtaqueDelEnemigo = document.createElement('p')

    sectionMensajes.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = indexAtaqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = indexAtaqueEnemigo

    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}

function crearMensajeFinal(resultadoFinal) {
    let sectionMensajes = document.getElementById('resultado')
    
    sectionMensajes.innerHTML = resultadoFinal
}

function reiniciarJuego() {
    location.reload()
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function pintarCanvas(){ 
   objetoMascotaJugador.x=objetoMascotaJugador.x + objetoMascotaJugador.velocidadX 
    objetoMascotaJugador.y=objetoMascotaJugador.y+objetoMascotaJugador.velocidadY 
    lienzo.clearRect(0 , 0, mapa.width, mapa.height) 
    lienzo.drawImage( 
        mapaBackground, 
        0, 
        0, 
        mapa.width, mapa.height) 
    objetoMascotaJugador.pintarMokepon() 
    
    enviarPosicion(objetoMascotaJugador.x, objetoMascotaJugador.y) 
mokeponesEnemigo.forEach(function(mokepon){ 
mokepon.pintarMokepon 
revisarColision()
}) }

function moverDerecha () { 
    objetoMascotaJugador.velocidadX= 5
} 
function moverIzquierda () { 
    objetoMascotaJugador.velocidadX= - 5
} 
function moverArriba () {  
    objetoMascotaJugador.velocidadY= 5
} 
function moverAbajo () { 
    objetoMascotaJugador.velocidadY= -5
} 

function detenerMovimiento() { 
    
    objetoMascotaJugador.velocidadX=0 
    objetoMascotaJugador.velocidadY=0
} 
function sePresionoUnaTecla(event) { 
    switch (event.key) {
        case "ArrowUp": moverAbajo()
        break 
        case "ArrowDown":moverArriba()
            break 
            case "ArrowLeft": moverIzquierda()
            break; 
            case "ArrowRight": moverDerecha() 
            break
    
            default: 
                    break;
    }
} 
function iniciarMapa(){ 

    objetoMascotaJugador= obtenerObjetoMascota(mascotaJugador)
    intervalo= setInterval(pintarCanvas,50) 
    window.addEventListener("keydown", sePresionoUnaTecla) 
    window.addEventListener("keyup", detenerMovimiento)
} 
function obtenerObjetoMascota() { 
    for (let i = 0; i < mokepones.length; i++) {
        if (mascotaJugador === mokepones[i].nombre) {
         return mokepones[i] 
        }
        
    }
} 
function revisarColision(enemigo){ 
    const arribaEnemigo = enemigo.y
    const abajoEnemigo = enemigo.y + enemigo.alto
    const derechaEnemigo = enemigo.x + enemigo.ancho
    const izquierdaEnemigo = enemigo.x

    const arribaMascota = 
       objetoMascotaJugador.y
    const abajoMascota = 
       objetoMascotaJugador.y + objetoMascotaJugador.alto
    const derechaMascota = 
        objetoMascotaJugador.x + objetoMascotaJugador.ancho
    const izquierdaMascota = 
        objetoMascotaJugador.x

    if(
        abajoMascota < arribaEnemigo ||
        arribaMascota > abajoEnemigo ||
        derechaMascota < izquierdaEnemigo ||
        izquierdaMascota > derechaEnemigo
    ) {
        return
    }

    detenerMovimiento()
     clearInterval(intervalo)
    sectionSeleccionarAtaque.style.display="flex" 
    sectionVerMapa.style.display="none" 
    seleccionarMascotaEnemigo(enemigo)
}
window.addEventListener('load', iniciarJuego)