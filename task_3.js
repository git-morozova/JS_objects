/*
Напишите функцию, которая создает пустой объект, но без прототипа.
*/

console.log("Task_3 START");

function createEmptyObj() {
   return Object.create(null);
}

console.log(createEmptyObj());

console.log("Task_3 END");
