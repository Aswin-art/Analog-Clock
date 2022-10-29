setInterval(setClock, 1000)

const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')


function setClock(){
    const currDate = new Date()
    const second = currDate.getSeconds() / 60
    const minute = (second + currDate.getMinutes()) / 60
    const hour = (minute + currDate.getHours()) / 12
    setRotation(secondHand, second)
    setRotation(minuteHand, minute)
    setRotation(hourHand, hour)
}

function setRotation(element, rotationRatio){
    element.style.setProperty('--rotation', rotationRatio * 360)
}

setClock()