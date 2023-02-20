
const botonStart = document.querySelector('button[data-start]');
const botonStop= document.querySelector('button[data-stop]');
console.log(botonStart, botonStop);
const bodyBack = document.querySelector('body');
let intervalTime; // variable para asignar el set interval

botonStart.addEventListener('click', () =>{

  botonStart.disabled = true;  // propiedad que hace que deje de funcionar
  botonStart.style.opacity -0.7;
  botonStart.textContent = 'Start'

  intervalTime = setInterval(function(){
   function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
    bodyBack.style.backgroundColor = `${getRandomHexColor()}` // color random a body
  },1000)
});


botonStop.addEventListener('click', () =>{
  botonStart.textContent = 'Start';
  botonStart.style.opacity -1;
  botonStart.disabled = false;  //llama nuevamente el boton para que start se active nuevamente
  clearInterval(intervalTime);
});
