const countdownCon = document.querySelector(".countdownCon");
const days = document.querySelector(".days");
const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");

const startDay = "1 Jan 2025";

function countdown(){
    const currentDay = new Date();
    const expectingDay = new Date(startDay);
    const remaining = (expectingDay - currentDay) / 1000;

    const day = Math.floor(remaining /3600 /24);
    const hour = Math.floor(remaining/3600) % 24;
    const minute = Math.floor(remaining/60) % 60;
    const second = Math.floor(remaining % 60);


   days.textContent = day.toString().padStart(2, 0);
   hours.textContent = hour.toString().padStart(2, 0);
   minutes.textContent = minute.toString().padStart(2, 0);
   seconds.textContent = second.toString().padStart(2, 0);

   if(day <= 0 && hour <= 0 && minute <= 0 && second <= 0){
    countdownCon.innerHTML = "<h2>FINALLY HERE🎉</h2>"
   }
}
setInterval(countdown, 1000)