/*
Напишите функцию, которая принимает в качестве аргументов строку и объект, 
а затем проверяет, есть ли у переданного объекта свойство с данным именем. 
Функция должна возвращать true или false.
*/

console.log("Task_2 START");

const myOwnProps = function (str, obj) {
    for (let key in obj) {
        if (str == key) {
            return true;
        }
    }    
    return false;
}

const myOwnObj = {a:1, b:2, c:3};
let myOwnStr = "c";
myOwnProps(myOwnStr, myOwnObj);

let myOwnStr2 = "d";
myOwnProps(myOwnStr2, myOwnObj);

console.log("Task_2 END");

