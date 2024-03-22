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


function Unit(name,type,power) {
    this.name = name,
    this.type = type,
    this.power = power,
    this.button = "off",
    this.buttonPush = function() {
        if (this.button == "on") {
            this.button = "off";
        } else {
            this.button = "on";
        }
    }  
}

function Lamp(weight,color) { 
    this.weight = weight,
    this.color = color
}

function Computer(kind,brand) {
    this.kind = kind,
    this.brand = brand
}


/* экземпляр лампы 1 */
const bigLamp = new Unit("bigLamp","lamp",60);
bigLamp.prototype = new Lamp(1000,"white");
console.log(bigLamp);
console.log(bigLamp.prototype.color); //узнать свойство нового объекта

/* экземпляр лампы 2 */
const smallLamp = new Unit("smallLamp","lamp",40);
smallLamp.prototype = new Lamp(600,"black");
console.log(smallLamp);

/* проверяем, работает ли кнопка "вкл/выкл" */
bigLamp.buttonPush();
console.log(bigLamp);
bigLamp.buttonPush();
console.log(bigLamp);


/* экземпляр компьютера 1 */
const laptopHP = new Unit("laptopHP","computer",100);
laptopHP.prototype = new Computer("laptop","HP");
console.log(laptopHP);
console.log(laptopHP.prototype.brand); //узнать свойство нового объекта

/* экземпляр компьютера 2 */
const desktopMSI = new Unit("desktopMSI","computer",200);
desktopMSI.prototype = new Computer("desktop","MSI");
console.log(desktopMSI);


console.log("Task_4 END");