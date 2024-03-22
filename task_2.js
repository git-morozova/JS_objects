/*
Напишите функцию, которая принимает в качестве аргументов строку и объект, 
а затем проверяет, есть ли у переданного объекта свойство с данным именем. 
Функция должна возвращать true или false.
*/

console.log("Task_2 START");

const myOwnProps = function (str, obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key) && str == key) {
            console.log(1);
            return 1;
        }
    }    
    console.log(0);
    return 0;
}

const myOwnObj = {a:1, b:2, c:3};
const myOwnStr = "c"
myOwnProps(myOwnStr, myOwnObj);

console.log("Task_2 END");
