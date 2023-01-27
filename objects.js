// // Objects

// const person = {
//     firstName: "Sally",
//     lastName: "Evans",
//     age: 27,
//     occupation: "Sales assistant",
//     married: false,
//     homeOwner: false
// }
// // object.property
// person.firstName
// console.log(person.firstName)
// console.log(person["firstName"])

// // Objects are mutable, we can change the values in them
// person.homeOwner = "true"
// console.log(person)

// // Activity 1

// const myPet = {
//     petName: "Rufus",
//     typeOfPet: "cat",
//     age: 6,
//     colour: "ginger"
// }
// console.log(`My pet is called ${myPet.petName}, he is a ${myPet.typeOfPet}, he is around ${myPet.age} years old, and he is ${myPet.colour}.`)

// // Activity 2 change pet colour
// myPet.colour = "black"
// console.log(myPet)


//  Activity 3 add key value petFeatures array of features
// const myPet = {
//     petName: "Rufus",
//     typeOfPet: "cat",
//     age: 6,
//     colour: "ginger",
//     petFeatures: ["food loving", "cheeky", "smart", "rude", "cuddly"]
// }
// console.log(myPet)

// // Values can be any data type, they can even be arrays

// // We can reference our object with if else statements

// let day = "Monday"

// const person = {
//     firstName: "Sally",
//     lastName: "Evans",
//     age: 27,
//     occupation: "Sales assistant",
//     married: false,
//     homeOwner: false,
//     hobbies: ["tennis", "gardening", "bungee jumping"]
// }

// if (day === "Saturday" || day === "Sunday") {
//     console.log(`Great, it's ${day}, let's play ${person.hobbies}!`)
// }
// else {
//     console.log(`Oh no! It's ${day}, I hate being a ${person.occupation}.`)
// }

// // and we can add functions
// // When we use functions inside objects we call them methods

// const person = {
//     firstName: "Sally",
//     lastName: "Evans",
//     age: 40,
//     occupation: "Sales assistant",
//     married: false,
//     homeOwner: true,
//     hobbies: ["tennis", "gardening", "bungee jumping"],
//     marketingOp() { // SYNTAX when we put a method in an object we don't have to use "const marketingOp=()=>", we can just write "marketingOp()"
//         if (homeOwner == false && age > 25) {
//             return "Send mortgage offer email"
//         }
//         else if (homeOwner == false && age <= 25) {
//             return "Send summer holiday fun credit card offer"
//         }
//         else if (homeOwner == true && age > 25) {
//             return "Send pension investment offer"
//         }
//         else {
//             return "Send sensible savings offer"
//         }
//     }
// }
// console.log(person.marketingOp())

// Reference error! homeOwner is not defined
// homeOwner is outside the function's SCOPE
// we have to use this.homeOwner and this.age to specify the homeOwner and age inside the object

// const person = {
//     firstName: "Sally",
//     lastName: "Evans",
//     age: 40,
//     occupation: "Sales assistant",
//     married: false,
//     homeOwner: true,
//     hobbies: ["tennis", "gardening", "bungee jumping"],
//     marketingOp() { // SYNTAX when we put a method in an object we don't have to use "const marketingOp=()=>", we can just write "marketingOp()"
//         if (this.homeOwner == false && this.age > 25) {
//             return "Send mortgage offer email"
//         }
//         else if (this.homeOwner == false && this.age <= 25) {
//             return "Send summer holiday fun credit card offer"
//         }
//         else if (this.homeOwner == true && this.age > 25) {
//             return "Send pension investment offer"
//         }
//         else {
//             return "Send sensible savings offer"
//         }
//     }
// }
// console.log(person.marketingOp())

// // Activity 4
// Add methods called eat and drink.
// They should return a string saying [Your pet name] is eating/ drinking

// const myPet = {
//     petName: "Rufus",
//     typeOfPet: "cat",
//     age: 6,
//     colour: "ginger",
//     hungry: true,
//     thirsty: false,
//     petFeatures: ["food loving", "cheeky", "smart", "rude", "cuddly"],
//     eat() {
//         if (this.hungry==true){
//             return `${this.petName} is eating`
//         }
//         else {}
//     },
//     drink() {
//         if (this.thirsty==true){
//             return `${this.petName} is drinking`
//         }
//     }

// }
// console.log(myPet.eat())

// Activity 5
// Create an object called coffee shop with key values of branch, drinks with prices and food with prices.
// Add methods called drinksOrdered and foodOrdered.
// They should return a string saying [Your order] is … with all items chosen with costs, and the total cost.

let myOrder= ["Latte", "Espresso", "Toast", "Scone"]

const coffeeShop = {
    branch: "Townsville",
    drinks: ["Latte", "Americano", "Espresso", "Mocha"],
    drinksPrices: [3.50, 3, 2.50, 4],
    food: ["Toast", "Croissant", "Scone", "Bacon roll"],
    foodPrices: [2, 2.50, 3.50, 4],
    drinksOrdered () {
        let currentOrder= []
        let currentOrderPrice= 0
        for (let i=0; i<myOrder.length; i++) {
            for (let j=0; j<this.drinks.length; j++) {
                if (myOrder[i] === this.drinks[j]) {
                    currentOrder.push(` ${this.drinks[j]} - £${this.drinksPrices[j]}`);
                    currentOrderPrice += this.drinksPrices[j]
                }
            }
        }
        return `Your drinks order is:${currentOrder}. The price of your order is £${currentOrderPrice}.`
    },
    foodOrdered () {
        let currentOrder= []
        let currentOrderPrice= 0
        for (let i=0; i<myOrder.length; i++) {
            for (let k=0; k<this.food.length; k++) {
                if (myOrder[i] === this.food[k]) {
                    currentOrder.push(` ${this.food[k]} - £${this.foodPrices[k]}`);
                    currentOrderPrice += this.foodPrices[k]
                }
            }
        }
        return `Your food order is:${currentOrder}. The price of your order is £${currentOrderPrice}.`
    }
}
console.log(coffeeShop.drinksOrdered())
// logs: Your drinks order is: Latte - £3.5, Espresso - £2.5. The price of your order is £6.
console.log(coffeeShop.foodOrdered())
// logs: Your food order is: Toast - £2, Scone - £3.5. The price of your order is £5.5.