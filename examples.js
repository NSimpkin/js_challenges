// console.log("Hello World!");
// console.log("Hello".toLowerCase());
// console.log("Hello, what is your name?".length);
// console.log("Hi, I'm Nick");
// console.log("  Hi, I'm Nick  ".trim());
// // removes spaces around 
// console.log("Hello".toUpperCase());
// console.log(true)
// const sentence = 'The quick brown fox jumps over the lazy dog.'; 
// // defines the sentence
// const index = 4; 
// // defines the index (number of characters into sentnce, including 0)
// console.log(`The character at index ${index} is ${sentence.charAt(index)}`);
// // Prints the result of indexing the defined sentence at the specified point
// // Expected output: "The character at index 4 is q"
 
// // from W3C 
//  let text = "Please visit Microsoft!";
//  let newText = text.replace("Microsoft", "W3Schools");
 
//  // replacing the text into a new variable
//  console.log(text);
//  console.log(newText);
 
//  // replacing the text in the same variable
//  text = text.replace("Microsoft", "JS");
//  console.log(text);

// let firstName="Nick";
// let age=29;
// let universityStudent=false;
// console.log(firstName, age, universityStudent);
// firstName="N";
// console.log(firstName);

// let modelOfCar="Volvo"
// let firstName="Nick"
// let occupation="software developer"
//console.log("I drive a" + modelOfCar)
// //prints "I drive aVolvo"

//console.log (`Hi, my name is ${firstName}. I'm a ${occupation}, and I drive a ${modelOfCar}.`);

// let age=29
// let firstName="Nick"
// let favouriteColour="Red"
// console.log (`Hi, my name is ${firstName}. I'm ${age} years old, and my favourite colour is ${favouriteColour}.`);

// let agent = "jAMES"
// let agentLast = "Bond"
// console.log(agent.charAt(0).toUpperCase() + agent.slice(1,agent.length).toLowerCase() + agentLast +":007")                              
//character at position 0 changed to upper case, characters from position 1 onwards for length of string changed to lower

// Activity 4
// Write code which will calculate how many days from today’s 
// date to your birthday.
// This must also be output to the console in a complete 
// sentence.
// Why not stretch. Calculate how many days since your birth?
// Hint Look for “Javascript Date” on MDN

// //Dates are returned as the number of milliseconds since January 1, 1970.
// // Therefore we have to convert up to the unit we want, e.g. days, years, by multplying

// // To calculate days from today's date to my birthday

// const minute = 1000 * 60;
// const hour = minute * 60;
// const day = hour * 24;
// const year = day * 365;

// const today = Date.now();
// const birthday3 = new Date(2024, 0, 24); 
// //January is month 0, December is Month 11
// console.log("There are " + ((birthday3-today)/day) + " days until my birthday.")

// // To calculate no. days since my birth:

// const minute = 1000 * 60;
// const hour = minute * 60;
// const day = hour * 24;
// const year = day * 365;

// const today = Date.now();
// const birthday3 = new Date(1994, 0, 24); 
// // the month is 0-indexed
// console.log(((today-birthday3)/day) + " days have passed since I was born.")