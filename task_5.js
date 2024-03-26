/*
Перепишите консольное приложение из предыдущего юнита на классы.

Общие требования:
- Имена классов, свойств и методов должны быть информативными.
- Соблюдайте best practices.
- Используйте синтаксис ES6.
*/

console.log("Task_5 START");

class EnergyEater {
    constructor (name, powerConsumption) {
        this.name = name,
        this.powerConsumption = powerConsumption,
        this.button = "off" // тут просто off по умолчанию. В предыдущем таске другая логика, чтобы не плодить сущности (иначе в таске 4 свойства button появляются в двух местах для одного и того же объекта)
    }
    buttonPush() {
        if (this.button == "on") {
            this.button = "off";
        } else {
            this.button = "on";
        }
    }  
}

class Lights extends EnergyEater {
    constructor (location, color, name, powerConsumption){
        super (name, powerConsumption),        
        this.type = "lights",
        this.location = location,
        this.color = color
    }
    getInfo() {
        console.log(`This is ${this.color} ${this.type}. Location: ${this.location}. Power consumption: ${this.powerConsumption}`);
    }
}

class Device extends EnergyEater {
    constructor (kind, brand, name, powerConsumption){
        super (name, powerConsumption),
        this.type = "device",
        this.kind = kind,
        this.brand = brand
    }
    getInfo() {
        console.log(`This is ${this.brand} ${this.kind}. Power consumption: ${this.powerConsumption}`);
    }
}


/* экземпляр освещения 1 */
const upperLight = new Lights("overhead", "warm", "upperLight", 80);
console.log(upperLight);
console.log(upperLight.getInfo());

/* экземпляр освещения 2 */
const floorLamp = new Lights("local", "warm", "floorLamp", 40);
console.log(floorLamp);
console.log(floorLamp.getInfo());

/* экземпляр устройства 1 */
const computer = new Device("computer", "HP", "laptop HP", 100);
console.log(computer);
console.log(computer.getInfo());

/* экземпляр устройства 2 */
const vacuumCleaner = new Device("vacuum cleaner", "Bosh", "vacuum cleaner Bosh", 1000);
console.log(vacuumCleaner);
console.log(vacuumCleaner.getInfo());


/* включаем некоторые приборы */
upperLight.buttonPush();
vacuumCleaner.buttonPush();

/* считаем общее потребление */
const energyEatersArray = [upperLight, floorLamp, computer, vacuumCleaner];
const commonPowerConsumption = energyEatersArray.reduce((accumulator, value) => {
    return value.button == "off" ? accumulator : accumulator + value.powerConsumption    
}, 0);
console.log("Common power consumption is: " + commonPowerConsumption);


console.log("Task_5 END");