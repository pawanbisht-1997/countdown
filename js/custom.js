const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

const targetDate = new Date('2023-11-31T11:55:25').getTime();
const countInterval = setInterval(updateCountdown, 1000);
function updateCountdown(){
    const currentDate = new Date().getTime();
    const timeRemaining = targetDate - currentDate;
    if(timeRemaining <= 0)
    {
        days.innerText = '0';
        hours.innerText = '0';
        minutes.innerText = '0';
        seconds.innerText = '0';
    }
    else{
    const Rdays = Math.floor(timeRemaining/(1000*60*60*24));
    const Rhours = Math.floor((timeRemaining/(1000*60*60))%24);
    const Rminutes = Math.floor((timeRemaining/1000/60)%60);
    const Rseconds = Math.floor((timeRemaining/1000)%60);
    
    days.innerText = Rdays;
    hours.innerText = Rhours;
    minutes.innerText = Rminutes;
    seconds.innerText = Rseconds;
    
}
}

