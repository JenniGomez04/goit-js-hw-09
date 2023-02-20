import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

let inici = document.querySelector("#datetime-picker");
let butStart = document.querySelector("button[data-start]");
let daysHtml = document.querySelector(`[data-days=""]`);
let hoursHtml = document.querySelector(`[data-hours=""]`);
let minutesHtml = document.querySelector(`[data-minutes=""]`);
let secondsHtml = document.querySelector(`[data-seconds=""]`);

butStart.style.opacity -0.7;  //opacar boton start
butStart.disabled = true;    // boton habilitado

//getTime convierte fecha en numero

let DatConvNum;

flatpickr("input[type=text]",{
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    DatConvNum = selectedDates[0]
    let defaultDateFe = new Date();


  if (DatConvNum.getTime() > defaultDateFe.getTime()) {
      butStart.style.opacity -1;
      butStart.disabled = false;

    }else{
      Notiflix.Notify.failure("Please choose a date in the future")
    }

  },
});

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

butStart.addEventListener('click', ()=>{
  let intervalTime = setInterval(()=>{
    let defaultDateFe = new Date();
    let timeRestan = DatConvNum.getTime() - defaultDateFe.getTime();
    console.log(timeRestan)

    const {
      days,
      hours,
      minutes,
      seconds,
  } = convertMs(timeRestan);

  if (days < 10) {
    daysHtml.innerText = `0${days}`;  //Imprime el contenido actual y se reemplaza por el nuevo dato
} else {
    daysHtml.innerText = days;
}

if (hours < 10) {
  hoursHtml.innerText = `0${hours}`;
} else {
  hoursHtml.innerText = hours;
}

if (minutes < 10) {
  minutesHtml.innerText = `0${minutes}`;
} else {
  minutesHtml.innerText = minutes;
}

if (seconds < 10) {
  secondsHtml.innerText = `0${seconds}`;
} else {
  secondsHtml.innerText = seconds;
}

if (timeRestan <= 1 ) {
  clearInterval(intervalTime);
  Notiflix.Notify.success('finished process');
}

  },1000)

});

butStart.addEventListener("click", () => {
  Notiflix.Notify.success('In Progress');
});


