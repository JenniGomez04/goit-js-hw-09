import Notiflix from 'notiflix';

let firstDelay = document.querySelector('input[name ="delay"]');
let delayStep = document.querySelector('[name ="step"]');
let amount = document.querySelector('[name ="amount"]');
//let butPromise = document.querySelector('button')
//console.log(firstDelay, delayStep, amount, butPromise);

let form = document.querySelector('.form')

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        console.log(`✅ Fulfilled promise ${position} in ${delay} ms`);
        Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay} ms`)
        resolve(`✅ Fulfilled promise ${position} in ${delay} ms`);
      } else {
        console.log(`❌ Rejected promise ${position} in ${delay} ms`);
        Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay} ms`);
        reject(`❌ Rejected promise ${position} in ${delay} ms`);
      }
    },delay)
  })
  return promise
}

form.addEventListener('submit', (event) =>{
  event.preventDefault();
  console.log('click')
  let firstDelayN = Number(firstDelay.value);
  let delayStepN = Number(delayStep.value);
  let amountN = Number(amount.value);
  //let multiPosition = delayStep.value * position esta linea saltaria los pasos * amount

  for (let position = 1; position <= amountN; position += 1) {
  setTimeout(() => {
    let multiPosition = firstDelayN = firstDelayN;  // inicia en el valor ingresado por el usuario
     console.log(multiPosition)
     firstDelayN += delayStepN;  // sumo para el segundo paso

       createPromise(position, multiPosition)
      .then((value)=>{
        console.log(value)
      })
      .catch((error)=>{
        console.log(error)
      })
      }, firstDelayN)
};
});

