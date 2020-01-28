const app = document.getElementById('app')
app.style.cssText = `
    display: flex;
    felx-direction: row;
    justify-content: space-around
`

const carTrafficLight = document.createElement('div')
app.appendChild(carTrafficLight)

const pedestriansTrafficLight = document.createElement('div')
app.appendChild(pedestriansTrafficLight)

function TrafficLightColor (color, container) {
    const segment = document.createElement('div')
    container.appendChild(segment)
    this.opacity = function(value) {
        segment.style.opacity = value
    }
    segment.style.cssText = `
        height: 100px;
        width: 100px;
        border-radius: 50%;
        background: ${color}
    `
}
const redCar = new TrafficLightColor('red', carTrafficLight)
const yellowCar = new TrafficLightColor('yellow', carTrafficLight)
const greenCar = new TrafficLightColor('green', carTrafficLight)

const red = new TrafficLightColor('red', pedestriansTrafficLight)
const green = new TrafficLightColor('green', pedestriansTrafficLight)
const button = document.createElement('button')
pedestriansTrafficLight.appendChild(button)
button.style.cssText = `
        height: 80px;
        width: 100px;
        background: gray
    `
button.textContent = 'click'
button.onclick = () => {

}

const delay = ms => new Promise(ok => setTimeout(() => ok(ms), ms))

async function trafficLightCar(){
    const lightCar = (mainColor, color1, color2) => {
        mainColor.opacity(1)
        color1.opacity(0.3)
        color2.opacity(0.3)
    }
    while (true){
        lightCar(redCar, yellowCar, greenCar)
        await delay(5000)
        lightCar(yellowCar, redCar, greenCar)
        await delay(2000)
        lightCar(greenCar, yellowCar, redCar)
        await delay(5000)
    }
}
trafficLightCar()

async function trafficLight(){
    const light = (mainColor, color1) => {
        mainColor.opacity(1)
        color1.opacity(0.3)
    }
    while (true){
        light(green, red)
        await delay(7000)
        light(red, green)
        await delay(5000)
    }
}
trafficLight()

pedestriansTrafficLight