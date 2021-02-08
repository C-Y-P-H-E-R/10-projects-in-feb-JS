function ttimer()  {
    
    const newYearDate = new Date('1 jan 2022')
    const currentDate = new Date()

    const leftTime = (newYearDate - currentDate) / 1000

    const days = Math.floor(leftTime / 86400)
    const hours = Math.floor((leftTime / 3600 ) % 24)
    const minutes = Math.floor((leftTime / 60 ) % 60)
    const sec = Math.floor((leftTime) %60 )

    updateCountdown(days,hours,minutes,sec)
    
    //console.log(days)
    
    //console.log(sec)
}


ttimer()
setInterval(ttimer,1000)

function formatTime(Time) {
    return Time < 10 ? (`0${Time}`) : Time
}

//console.log(newYearDate);

function updateCountdown(days,hours,minutes,sec) {
    const d = document.getElementById('days');
    d.innerHTML = formatTime(days);

    const h = document.getElementById('hours');
    h.innerHTML = formatTime(hours);

    const m = document.getElementById('min');
    m.innerHTML = formatTime(minutes);

    const s = document.getElementById('sec');
    s.innerHTML = formatTime(sec);
}    


