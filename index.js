let main = document.querySelector('.main');

const changeColors = () => {
    if (main.classList.contains('green')) {
        main.classList.remove('green');
        main.classList.add('blue');
    } else {
        main.classList.remove('blue');
        main.classList.add('green');
    }

    setTimeout(changeColors, 4000);
}

const getTime = () => {
    let currentDate = new Date();
    let hours = currentDate.getHours();
    let minutes = currentDate.getMinutes();
    let seconds = currentDate.getSeconds();
    let ext = "AM";

    if (hours === 0) { hours = 12 }

    if (hours > 12) { hours -= 12; ext = "PM" }
    if (minutes < 10) { minutes = `0${minutes}` }
    if (seconds < 10) { seconds = `0${seconds}` }

    return `${hours}:${minutes}:${seconds} ${ext}`;
}

const updateTime = () => {
    let current = document.getElementById('time');
    let newClock = document.createElement('p');

    newClock.setAttribute('id', 'time');
    newClock.innerText = getTime()

    if (current) { current.remove() }
    clock = document.querySelector('.clock');
    clock.appendChild(newClock);

    setTimeout(updateTime, 500);
}

console.log('hey there! Thanks for taking the time to look at my portfolio.')

setTimeout(changeColors, 4000);
updateTime();
