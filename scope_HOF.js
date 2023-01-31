// // SCOPE examples

// // 1. Global Scope
// let globalVar = "globalVar";
// console.log(`Global Scope: ${globalVar}`);
// //Output: Global Scope: globalVar
// const callVar = () => {
//     console.log(`Inside function: ${globalVar}`);
//     //Output: Inside function: globalVar
// }
// callVar();

// // 2. Function Scope
// let globalVar = "globalVar";
// console.log(`Global Scope: ${globalVar}`);
// const callVar = () => {
//     let localVar = "localVar";
//     console.log(`Inside function: ${globalVar}`);
//     console.log(`Inside function: ${localVar}`);
// }
// callVar();
// console.log(`Global Scope with local variable: ${localVar}`);
// //ReferenceError: localVar is not defined

// // Scope chain
// let globalVar = "globalVar";
// console.log(`Global Scope: ${globalVar}`);
// const outerFun = () => {
//     let outerVar = "outerVar";
//     console.log(`Outer function: ${globalVar}`);
//     console.log(`Outer function: ${outerVar}`);
//     console.log(`Outer function: ${innerVar}`); //ReferenceError: innerVar is not defined
//     const innerFun = () => {
//         let innerVar = "innerVar";
        
//         console.log(`Inner function: ${globalVar}`);
//         console.log(`Inner function: ${outerVar}`);
//         console.log(`Inner function: ${innerVar}`);
//     }
//     innerFun();
// }
// outerFun();
// innerFun(); //ReferenceError: innerFun is not defined (as it's inside outerFun())

// // 3. Block Scope (var vs let)
// let stringLet = "let string";
// var stringVar = "var string";
// const newString = () => {
//     let stringLet = "new let string";
//     var stringVar = "new var string";
//     console.log(`Inside function: ${stringLet}`); //new
//     console.log(`Inside function: ${stringVar}`); //new
// }
// newString();
// console.log(`Outside function: ${stringLet}`); //old
// console.log(`Outside function: ${stringVar}`); //old

// // 3. Block Scope - for loops
// function startLet(){
//     for (let i = 0; i < 5; i++){
//         console.log(i); //Output: 0,1,2,3,4
//     }
//     console.log(i); //ReferenceError: i is not defined
// }
// function startVar(){
//     for (var i = 0; i < 5; i++){
//         console.log(i); //Output: 0,1,2,3,4
//     }
//     console.log(i); //Output: 5
// }
// console.log("Running with let:");
// startLet();
// console.log("Running with var:");
// startVar();

// // 3. Block Scope - if else
// function startLet(){
//     for (let i = 0; i < 5; i++){
//        if(true){
//            let colour = "red";
//            console.log(i, colour); //Output: 0,1,2,3,4 with red
//        }
//     }
//     console.log(i, colour); //ReferenceError: i is not defined
// }
// function startVar(){
//     for (var i = 0; i < 5; i++){
//         if(true){
//             var colour = "blue";
//             console.log(i, colour);//Output: 0,1,2,3,4 with blue
//         }
//     }
//     console.log(i, colour); //Output: 5, blue
// }
// console.log("Running with let:");
// startLet();
// console.log("Running with var:");
// startVar();

// HOF Higher Order Functions

// const whichGreeting = (timeOfDay) => {
//     console.log(`Good ${timeOfDay}`);
// }
// const greet = (time, fn) => {
//     if(time < 1200){
//         fn("Morning");
//     }else if (time >= 1200 && time < 1800){
//         fn("Afternoon");
//     }else{
//         fn("Evening");
//     }
// }
// greet(1400, whichGreeting);

// Activity 1 !!!
// Write a simple function which logs “Hello Code Nation” to the console. Then write a higher order function which will run our simple function five times, even though you only call it one time. Hint: Pass the simple function as a parameter, and this will involve a for loop.

// const sayHello=()=>{
//         console.log("Hi, how are you?")
//     }

const greetCN = function () {
    console.log("Hello Code Nation");
}

const greetTimes = (fn, number) => {
    for (let i=0; i<number; i++) {
        return (fn);

    }
}
greetTimes(greetCN, 5)

// Activity 2
// The array method .map is an example of a higher order function. Declare a variable with five numbers, then use .map to iterate through the array and multiply each array item by 3.
// e.g. let map1=favouriteFilms.map(x => x+1)

// let numList = [1, 2, 3, 4 , 5]
// let mapX3=numList.map(x => x*3)
// console.log(mapX3)