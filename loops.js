// // For Loops
// let favHolidayDestinations = [
//     "Venice, Italy",
//     "Paris, France",
//     "Barcelona, Spain"
// ]
// for (let i=0; i < favHolidayDestinations.length; i++){
//     console.log(favHolidayDestinations[i])
// }

// // Activity 1
// Add 2 more items to the array and change the 
// initial expression. What happens?
// let favHolidayDestinations = [
//     "Venice, Italy",
//     "Paris, France",
//     "Barcelona, Spain",
//     "Prague, Chechia",
//     "Bodrum, Turkije"
// ]
// for (let i=2; i < favHolidayDestinations.length; i++){
//     console.log(favHolidayDestinations[i])
// }
// loop starts at new position (index 2) in new list, skips first 2 items

// for (let i = 0; i <= 10; i++) {
//     console.log(i += 2)
// }
// starting at i=0, for each i, add 2 to i 
// then increment by 1 from new i value
// until i>10

// let evenNumbers = []

// for (let n = 0; n < 20; n++) {
//     if (n % 2 == 0) {
//         (evenNumbers.push(n))
//         }
// }
// console.log(`The even numbers between 0 and 20 are; ${evenNumbers}`)

// // This for loop checks if n/2 gives modulus (remainder of) 0
// // if true then n is even, is added to the array
// // Then increases n by 1 and carries on until n!<20

// // Activity 2
// Find even numbers in reverse order.
// let evenNumbers = []

// for (let n = 20; n > 0; n--) {
//     if (n % 2 == 0) {
//         (evenNumbers.push(n))
//         }
// }
// console.log(`The even numbers between 20 and 0 in reverse order are; ${evenNumbers}`)

// // Activity 3
// Find odd numbers 1-30.
// let oddNumbers = []

// for (let n = 0; n < 30; n++) {
//     if (n % 2 != 0) {
//         (oddNumbers.push(n))
//         }
// }
// console.log(`The odd numbers between 0 and 30 are; ${oddNumbers}`)

// // While Loops

// let lives = 3
// while (lives >0){
//     console.log("Well done! you're still in the game.");
//     lives--
// }
// console.log("Game over!")

// let currentDiceRoll = 3

// while (currentDiceRoll != 1) {
//     console.log(currentDiceRoll);
//     currentDiceRoll = Math.floor(Math.random()*6)+1
// }
// console.log(currentDiceRoll)
// Math.randowm generates 0<=n<1
// Float (decimal) *6
// Math.floor rounds decimal down to integer (between 0 and 5)
// +1 to get number between 1 and 6

// Activity 3
// Create a while loop that checks age. While age 
// is less than 18 log “You’re a child!”. When age is 
// more than 18 log “You’re an adult!"

// let currentAge = 1

// while (currentAge <18){
//     console.log("You're a child");
//     currentAge++;
// }
// console.log("You're an adult")

// Age starts at 1
// is checked and logged "you're a child"
// incremented by +1 until 18
// then logs "you're an adult"

// // Activity 4
// Generate 6 random numbers and log them to the console

// let n=0
// while (n<6) {
//     console.log((Math.floor(Math.random()*10)) +1);
//     n++;
// }
// returns random whole number between 1 and 10

// Activity 5
// Display 4 films stored in an array. Use a for loop to show each film in the array. 
// Use an if statement to check if the 3rd film in the array is Ghostbusters.
// If it is return “Yay it’s Ghostbusters”. 
// If it isn’t return “Boo! We want Ghostbusters".

// let films= ["Scooby Doo", "Pirates of the Caribbean", "Shrek", "Puss in Boots"]

// for (let i=0; i < films.length; i++) {
//     console.log(films[i]);
// }
// if (films[2] == "Ghostbusters") {
//     console.log("Yay, it's Ghostbusters!");
// }
// else { console.log ("Boo! We want Ghostbusters")}

// Activity 6
// Generate a random number between 1 and 30 six times.
// For each random number generated, check if this number is divisible by 7 or not.
// Log out a message to the console if it is divisible by 7 or not.

// let n=0
// while (n<6) {
//     let rand1to30=((Math.floor(Math.random()*30))+1)
//     console.log(rand1to30);
//         if (rand1to30%7==0) {
//         console.log("This number IS divisible by 7")
//         }
//         else {
//         console.log("This number is NOT divisible by 7")
//         };
//     n++;
// }

// Activity 7
// Imagine you’re a programmer for a social media platform!
// You have been tasked with building a prototype for a mutual followers program. 
// Create 2 arrays of followers e.g bobsFollowers & hannahsFollowers.
// In these arrays place 4 names as strings.
// Make sure there are 2 names that are in both arrays. 
// Using a nested FOR loop iterate over both arrays and console.
// log out the matching follower.

// let sameFollowers= [];
// let bobsFollowers=["John", "Jane", "Joan", "Jenny"];
// let hannahsFollowers=["Jeremy", "Jude", "Johann", "Jane"];

// for (let i=0; i<bobsFollowers.length; i++) {
//     for (let j=0; j<hannahsFollowers.length; j++) {
//         if (hannahsFollowers[j] === bobsFollowers[i]){
//             sameFollowers.push(hannahsFollowers[j]);
//         }
//     }
// }
// console.log(`${sameFollowers}`)
// // logs Jane
