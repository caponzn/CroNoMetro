//Variaveis para as horas
const hoursEl = document.querySelector("#hours");
const minutesEl = document.querySelector("#minutes");
const secondsEl = document.querySelector("#seconds");
const millisecondsEl = document.querySelector("#milliseconds");
// Variaveis para os botões
const startBtn = document.querySelector("#startBtn");
const pauseBtn = document.querySelector("#pauseBtn");
const resumeBtn = document.querySelector("#resumeBtn");
const resetBtn = document.querySelector("#resetBtn");
//Definição das Variaveis
let interval;
let hours = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let isPaused = false;
//Eventos dos Botões
startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", pauseTimer);
resumeBtn.addEventListener("click", resumeTimer);
resetBtn.addEventListener("click", resetTimer);
//Funções
function startTimer(){
    interval = setInterval(()=>{
        if(!isPaused){
            milliseconds += 10
            if(milliseconds === 1000){
                seconds++;
                milliseconds = 0;
            }
            if(seconds === 60){
                minutes++;
                seconds = 0;
            }
            if(minutes === 60){
                hours++;
                minutes = 0;
            }
            hoursEl.textContent = formatTime(hours);
            minutesEl.textContent = formatTime(minutes);
            secondsEl.textContent = formatTime(seconds);
            millisecondsEl.textContent = formatMilliseconds(milliseconds);
        }
    },10);

    startBtn.style.display = "none";
    pauseBtn.style.display = "block";
}
function pauseTimer(){
    isPaused = true;
    pauseBtn.style.display = "none";
    resumeBtn.style.display = "block";
}
function resumeTimer(){
    isPaused =  false;
    resumeBtn.style.display = "none";
    pauseBtn.style.display = "block";
}
function resetTimer(){
    clearInterval(interval);
    hours=0;
    minutes=0;
    seconds=0;
    milliseconds=0;

    hoursEl.textContent = "00";
    minutesEl.textContent = "00";
    secondsEl.textContent = "00";
    millisecondsEl.textContent = "000";

    pauseBtn.style.display = "none";
    startBtn.style.display = "block";
    resumeBtn.style.display="none";
}

function formatTime(time){
    return time < 10? `0${time}` : time;
}
function formatMilliseconds(time){
    return time < 100? `${time}`.padStart(3,"0") : time;
}
