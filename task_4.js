/*
Реализуйте следующее консольное приложение подобно примеру, который разбирался в видео. 
Реализуйте его на прототипах.

Определите иерархию электроприборов. Включите некоторые в розетку. 
Посчитайте потребляемую мощность (передайте аргумент). 

Таких приборов должно быть как минимум два (например, настольная лампа и компьютер). 
Выбрав прибор, подумайте, какими свойствами он обладает.

План:
1. Определите родительскую функцию с методами, которые включают/выключают прибор из розетки.
2. Создайте делегирующую связь [[Prototype]] для двух конкретных приборов.
3. У каждого из приборов должны быть собственные свойства и, желательно, методы, отличные 
от родительских методов.
4. Создайте экземпляры каждого прибора.
5. Выведите в консоль и посмотрите на результаты работы, можете гордиться собой :)

Общие требования:
1. Имена функций, свойств и методов должны быть информативными
2. Соблюдайте best practices:
- использование camelCase нотации для переменных и методов, PascalCase для названия 
функций-конструкторов и классов;
- информативные имена (а не a, b);
- четкая связь между классом и его экземплярами (класс описывает множество, а экземпляр — 
конкретную реализацию);
- использование синтаксиса es6 (кроме функции-конструкторов) и так далее.
*/

console.log("Task_4 START");


function EnergyEater (name, powerConsumption) {
    this.name = name,
    this.powerConsumption = powerConsumption,
    this.buttonPush = function() {
        if (this.button == "on") {
            this.button = "off";
        } else {
            this.button = "on"; // если свойства нет либо равно "off"
        }
    }  
}

function Lights (location, color, name, powerConsumption) {
    this.name = name,
    this.powerConsumption = powerConsumption,
    this.type = "lights",
    this.location = location,
    this.color = color,
    this.getInfo = function() {
        console.log(`This is ${this.color} ${this.type}. Location: ${this.location}. Power consumption: ${this.powerConsumption}`);
    }    
}
Lights.prototype = new EnergyEater();

function Device (kind, brand, name, powerConsumption) {
    this.name = name,
    this.powerConsumption = powerConsumption,
    this.type = "device",
    this.kind = kind,
    this.brand = brand,
    this.getInfo = function() {
        console.log(`This is ${this.brand} ${this.kind}. Power consumption: ${this.powerConsumption}`);
    }
}
Device.prototype = new EnergyEater();


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
const EnergyEaterArray = [upperLight, floorLamp, computer, vacuumCleaner];
const sumPowerConsumption = EnergyEaterArray.reduce((accumulator, value) => {
    return value.button !== "on" ? accumulator : accumulator + value.powerConsumption    
}, 0);
console.log("Common power consumption is: " + sumPowerConsumption);


console.log("Task_4 END");