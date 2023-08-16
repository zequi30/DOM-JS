const h1= document.querySelector('h1') 
const input1=document.querySelector('#calculo1') 
const input2=document.querySelector('#calculo2') 
const botonCalcular= document.querySelector('#botoncito') 
const pResult= document.querySelector('#result')

botonCalcular.addEventListener('click', btnOnClick)

function btnOnClick(Event){  
    console.log({Event}) 
    Event.preventDefault()
    const sumaInputs= input1.value + input2.value;
    pResult.innertext= "Resultado : " + sumaInputs;
}