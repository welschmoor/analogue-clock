"use strict";

const hourHand = document.querySelector('.hours-hand')
const minuteHand = document.querySelector('.minutes-hand')
const secondHand = document.querySelector('.seconds-hand')
const initialRotation = document.querySelector('.clockhand')


const updateClock = setInterval(() => {
    const now = new Date();
    let degHoursInitial = (now.getHours()*30+90)%360
    let degMinutesInitial = (now.getMinutes()*6+90)%360
    let degSecondsInitial = (now.getSeconds()*6+90)%360

    secondHand.style.transform = `rotate(${degSecondsInitial}deg)`;
    hourHand.style.transform = `rotate(${degHoursInitial}deg)`;
    minuteHand.style.transform = `rotate(${degMinutesInitial}deg)`;
}, 1000)
