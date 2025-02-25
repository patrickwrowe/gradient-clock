const hourHand = document.getElementById('hour-hand');
const minuteHand = document.getElementById('minute-hand');
const secondHand = document.getElementById('second-hand');

function getTime() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    return [hours, minutes, seconds]
}

const hoursToDegrees = (hours, minutes) => {
    return hours * 30 + minutes * 0.5
}

const minutesOrSecondsToDegrees = (minutesOrSeconds) => {
    return minutesOrSeconds * 6
}

function convertTimeToAngle(hours, minutes, seconds) {
    const hoursDegrees = hoursToDegrees(hours, minutes);
    const minutesDegrees = minutesOrSecondsToDegrees(minutes);
    const secondsDegrees = minutesOrSecondsToDegrees(seconds);

    return [hoursDegrees, minutesDegrees, secondsDegrees]
}

function rotateHands() {
    const [hours, minutes, seconds] = getTime();
    const [hoursDegrees, minutesDegrees, secondsDegrees] = convertTimeToAngle(hours, minutes, seconds);
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    }

setInterval(rotateHands, 500);

