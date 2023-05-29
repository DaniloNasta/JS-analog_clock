function rotateClockHands() {
    const date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();

    const hourRotation = 360 * (hour / 12) + (360 / 12) * (minute / 60);
    const minuteRotation = 360 * (minute / 60) + (360 / 60) * (second / 60);
    const secondRotation = 360 * (second / 60);

    const hourHand = document.querySelector(".hour-hand");
    const minuteHand = document.querySelector(".minute-hand");
    const secondHand = document.querySelector(".second-hand");

    hourHand.style.transform = `rotate(${hourRotation}deg)`;
    minuteHand.style.transform = `rotate(${minuteRotation}deg)`;
    secondHand.style.transform = `rotate(${secondRotation}deg)`;
}

// Update the clock every second
setInterval(rotateClockHands, 1000);
