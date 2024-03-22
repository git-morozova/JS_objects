/*
Перепишите консольное приложение из предыдущего юнита на классы.

Общие требования:
- Имена классов, свойств и методов должны быть информативными.
- Соблюдайте best practices.
- Используйте синтаксис ES6.
*/

console.log("Task_5 START");

class Unit {
    constructor (name, powerConsumption) {
        this.name = name,
        this.powerConsumption = powerConsumption,
        this.button = "off"
    }
    buttonPush() {
        if (this.button == "on") {
            this.button = "off";
        } else {
            this.button = "on";
        }
    }  
}

class Lamp extends Unit {
    constructor (weight, color, name, powerConsumption){
        super (name,powerConsumption),        
        this.type = "lamp",
        this.weight = weight,
        this.color = color
    }
    getInfo() {
        console.log(`This is the ${this.color} ${this.type}. Weight: ${this.weight}g. Power consumption: ${this.powerConsumption}`);
    }
}

class Computer extends Unit {
    constructor (kind, brand, name, powerConsumption){
        super (name,powerConsumption),
        this.type = "computer",
        this.kind = kind,
        this.brand = brand
    }
    getInfo() {
        console.log(`This is the ${this.brand} ${this.type}. Kind: ${this.kind}. Power consumption: ${this.powerConsumption}`);
    }
}


/* экземпляр лампы 1 */
let bigLamp = new Lamp(1000,"white","bigLamp",60);
console.log(bigLamp);
console.log(bigLamp.getInfo());

/* экземпляр лампы 2 */
let smallLamp = new Lamp(600,"black","smallLamp",40);
console.log(smallLamp);
console.log(smallLamp.getInfo());

/* проверяем, работает ли кнопка "вкл/выкл" */
bigLamp.buttonPush();
console.log(bigLamp.button);
bigLamp.buttonPush();
console.log(bigLamp.button);


/* экземпляр компьютера 1 */
let laptopHP = new Computer("laptop","HP","laptopHP",100);
console.log(laptopHP);
console.log(laptopHP.getInfo());

/* экземпляр компьютера 2 */
let desktopMSI = new Computer("desktop","MSI","desktopMSI",200);
console.log(desktopMSI);
console.log(desktopMSI.getInfo());


console.log("Task_5 END");