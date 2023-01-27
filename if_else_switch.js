// //If Else 

//let hunger="full"
// if (hunger=="hungry") {
//     console.log("Yes please, I'm starving!")
// }
// else if (hunger=="full") {
//     console.log("No thanks, I'm stuffed!")
// }
// else {console.log("Oh go on then, why not!?")}

// // Activity 1

// let music="classical"
// if (music=="classical") {
//     console.log("How relaxing.")
// }
// else if (music=="disco") {
//     console.log("Let's dance!")
// }
// else if (music=="dance") {
//     console.log("Where's the party?")
// }
// else {console.log("Turn it down")
// }

// if (4 != "4") {
//     console.log(true)
// }
// else {
//     console.log(false)
// }

// // And &&
// let food = "sprouts"
// let hunger = "hungry"

// if (hunger == "full" && food == "ice cream") {
//     console.log("Of course!")
// }
// else if (hunger == "hungry" && food == "ice cream") {
//     console.log("Yes please, I'm Starving!")
// }
// else if (hunger == "hungry" && food == "sprouts") {
//     console.log("Actually, I can wait")
// }
// else {
//     console.log("No thanks, I'm stuffed")
// }

// // Or ||
// let food = "chips"

// if (food == "ice cream" || food == "pizza") {
//     console.log("Yay, let's eat!")
// }
// else if (food == "sprouts" || food == "broccoli") {
//     console.log("Ergh, no thanks!")
// }
// else {
//     console.log("Ok, go on then, why not.")
// }

// // Switch statements
// let food = "chips"

// switch (food) {
//     case "ice cream":
//     case "pizza":
//         console.log("Yay, let's eat!")
//         break
//     case "sprouts":
//     case "broccoli":
//         console.log("Ergh, no thanks!")
//         break
//     default:
//         console.log("Ok, go on then, why not.")
// }

// // Activity 4
// let day="Saturday"
// if (day=="Saturday" || day=="Sunday") {
//     console.log("Yay, it's the weekend!")
// }
// else {
//     console.log("Oh no, work again.")
// }

// // Activity 4 (again)
// let pizzaTopping = "pepperoni"

// switch (pizzaTopping) {
//     case "pepperoni":
//     case "chicken":
//     case "anchovies":
//         console.log(`${pizzaTopping} is an important ingredient for my pizza`)
//         break
//     case "sweetcorn":
//     case "olives":
//     case "onions":
//         console.log(`I don't mind having" ${pizzaTopping} "on my pizza`)
//         break
//     case "aubergine":
//     case "courgette":
//         console.log(`${pizzaTopping} should not be on my pizza`)
//         break
//     default:
//         console.log("Ok, go on then, why not.")
// }

// // Activity 5
// let password = "Password123"

// if (password.length<8) {
//     console.log("Password is too short.")
// }
// else {console.log(`Password is ${password}`)}

// // Activity 6
// let num=15

// if (num%3==0 && num%5==0) {
//     console.log("fizz buzz")
// }
// else if (num%3==0 ) {
//     console.log("fizz")
// }
// else if (num%5==0) {
//     console.log("buzz")
// }
// else {console.log(num)}

// Activity 7
// Create a variable called time, a variable called
// placeOfWork and a variable called townOfHome. Create
// an if statement that logs to the console where someone is
// at times of day. E.g. if the time is 7 I’m at home, at 8 I’m
// commuting, at 9 I’m at work.

// let time=19
// let placeOfWork="CodeNation"
// let townOfHome="Frodsham"

// console.log("Enter the time to the nearest hour in 24 hour format eg 17 for 5pm")
// if (time<8 || time>=22) {
//     console.log("Nick is in Bed")
// }
// else if (time>9 && time<18) {
//     console.log(`Nick is working in ${placeOfWork}`)
// }
// else {
//     console.log(`Nick is in ${townOfHome}`)
// }


// Activity 8
// Take the string
// “jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuh
// gtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi”.
// Find the index of a last vowel in the string.

// exampleString="jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi"
// // Array
// let vowels= ["a", "e", "i", "o", "u"]
// console.log(exampleString.lastIndexOf(vowels))
// // Output: -1 (last position)


// Activity 9
// Create a variable called word that takes a
// string. Create an if statement that checks if the
// last letter is the same as the first. If it is return
// true, otherwise return false.

// let word="Hello"
// if (word.charAt(0) == word.charAt(word.length-1)) {
//     console.log(true)
// }
// else {
//     console.log(false)
// }

////OR

// let word="Hello"
// if (word.indexOf() == word.lastIndexOf()) {
//     console.log(true)
// }
// else {
//     console.log(false)
// }


// Activity 10
// Create two variables called num1 and num2.
// Create an if statement that checks if the result of
// the sum is even. If it is return the number,
// otherwise return the numbers multiplied together.

// let num1=5
// let num2=2
// let sum12=num1+num2
// // if modulus (remainder of sum12/2) is 0, then even
// if (sum12%2==0) {
//     console.log(sum12)
// }
// else {console.log(num1*num2)}

// Activity 11
// Create a variable called num. Check if the
// number is a palindrome (looks the same forward
// as it does backwards e.g. 1001 or 20202).

// Palindrome Algorithm in JavaScript:
// Get the strings or numbers from the user.
// Take a temporary variable that holds the numbers.
// Reverse the given number.
// Compare the original number with the reversed number
// If the temporary and original number are same, it the number or string is a Palindrome.
// Else the given string or number is not the Palindrome.

// num="2002"

// let palCheck=(num.toString())
// let palCheckReversed=palCheck.split("").reverse().join("") //###

// if(palCheck===palCheckReversed){
//     console.log(`${num} is a Palindrome!`)
// }
// else {
//     console.log(`${num} is not a Palindrome`)
// }

//###
//text.split(' ') = splits by spaces into words
//text.split('') = splits by characters into single characters
//text.split() = splits by nothing, returns copy of whole string
//text.split(",")    // Split on commas
//text.split(" ")    // Split on spaces
//text.split("|")    // Split on pipe
// Syntax: split(separator) or split(separator, limit)