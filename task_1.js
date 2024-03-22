/*
Напишите функцию, которая принимает в качестве аргумента объект и выводит в консоль 
все ключи и значения только собственных свойств. Данная функция не должна возвращать значение.


console.log("Task_1 START");

const ownProps = function (obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
        console.log(key + ": " + obj[key]);
        }
    }    
}

const myObj = {a:1, b:2};
ownProps (myObj);

console.log("Task_1 END");
*/