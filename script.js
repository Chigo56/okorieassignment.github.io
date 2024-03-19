const sec = 1000,
min = sec * 60,
hour = min * 60,
day = hour * 24;

const targetDate = new Date("1 Jun 2024");
setInterval(() => {
    const now = new Date(),
    dist = targetDate - now;

    const days = Math.floor(dist / day);
    const hours = Math.floor(dist % day / hour);
    const minutes = Math.floor(dist % hour / min);
    const seconds = Math.floor(dist % min / sec);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
}, 1000);