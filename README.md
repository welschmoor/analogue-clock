# analogue-clock
with smooth transition at 0 seconds position, unstyled (concentrated on functionality)
This is how you have a smooth transition:

   let degHoursInitial = (now.getHours()*30+90)%360
    let degMinutesInitial = (now.getMinutes()*6+90)%360
    let degSecondsInitial = (now.getSeconds()*6+90)%360
