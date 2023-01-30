// Classes are templates for objects and can be used to generate as many instances of those objects as we need

// Car class example

// // We create our class here
// class Car {
//     // This constructor is what will be called when we do "new Car()".
//     constructor(nameOfCar, makeOfCar, yearOfMake) {

//         // Anything that has "this." as a prefix, are the properties of our class.
//         this.nameOfCar = nameOfCar;
//         this.makeOfCar = makeOfCar;
//         this.yearOfMake = yearOfMake;
//     }
// }

// // All car class instances (any variable defined with `= new Car()`) will have the same properties
// //  Variable of Class -- Class Constructor
// let carOne = new Car("Diablo SE30", "Lamborghini", 1995);

// //  Variable of Class -- Name       -- Make -- Year
// let carTwo = new Car("Impreza WRX", "Subaru", 2003);

// // Here we are accessing our lamborghini car class, through the variable "carOne"
// // And then we are accessing the name of the car through our property "nameOfCar"
// console.log(carOne.nameOfCar); // <- This will print the name of our car, the lamborghini diablo

// // Here we are accessing our subaru car class, through the variable "carTwo"
// // And then we are getting the make of the car through our property "makeOfCar"
// console.log(carTwo.makeOfCar) // <- This will print the make of our car, the subaru impreza

// let carThree = new Car("Lancer", "Mitsubishi", 2009);

// // CarMod sub-class
// class CarMod extends Car {
//     constructor(nameOfCar, makeOfCar, yearOfMake, mods) {
//         super (nameOfCar, makeOfCar, yearOfMake);
//         this.mods = mods;
//     }
// }

// const carFour = new CarMod("GT", "Nissan", 2000, "nitro injector");

// console.log(carThree)
// console.log(carFour)

// // Pet class example

// class Pet {
//     constructor(name, age, type, breed, colour, time) {
//         this.name = name;
//         this.age = age;
//         this.type = type;
//         this.breed = breed;
//         this.colour = colour;
//         this.lastFed = time;
// // the this.thingy = thingy statements mean that each time a new instance of the class is created,
// // the value of thingy in that position belongs to the parameter things in the class
//     }
// // Functions in classes are called METHODS
// they don't need to be assigned as a variable
// they do not need to be inside the constructor, only in the class
//     feedPet (time) {
//         this.lastFed = time;
//         return `Last feed updated to ${this.lastFed} for ${this.name}`;
//         }
// // GETTER
// // Getters get data from inside the object without altering it or accessing directly
//     get petInfo () {
//         return `${this.name} is a ${this.type}, ${this.age} year(s) old`;
// }

// const Bella = new Pet ("Bella", 2, "Dog", "German shepherd", "B&T", "08:00");
// // GETTER
// console.log(Bella.petInfo);
// console.log(Bella.feedPet("15:00"));

// const Rufus = new Pet ("Rufus", 6, "Cat", "DSH", "Ginger", "08:00");
// console.log(Rufus);

// const Lucien = new Pet ("Lucien", 3, "Cat", "BSH", "Black", "08:00");

// // // Sub-classes
// // Creates a new sub-class inheriting the properties of the parent class, plus more
// // the extends keyword signifies the sub-class extension
// // the constructor mimics the parent constructor, but includes any new data
// // the super function pulls in data needed for the inherited properties and assigns the values

// class PetMeds extends Pet {
//     constructor(name, age, type, breed, colour, time, mTime) {
//         super (name, age, type, breed, colour, time);
//         this.lastMeds = mTime;
//     }
//     giveMeds (time) {
//         this.lastMeds = time ;
//     }
// }
// const Barney = new PetMeds ("Barney", 4, "Cat", "DSH", "B&G", "10:00", "13:00");
// console.log(Barney)
// Barney.giveMeds ("17:00")
// console.log(Barney)

// // Student class example

// class Student {
//     constructor(firstName, surname, eyeColor, day){
//         this.firstName = firstName;
//         this.surname = surname;
//         this.eyeColor = eyeColor;
//         this.day = day;
//     }
//     // workAlarm method
//      workAlarm(day) {

//         if (this.day === "Saturday") {
//         return("Go to work today")
//         }else{
//         return("Stay in bed all day")
//         }
//     }
//     // SETTER
//     // Allows you to set data from outside the object (elliot.fullName = )
//     set fullName (name) {
//         const array = name.split(' ');
//         this.firstName = array[0];
//         this.surname = array[1];
//     }
//     // GETTER
//     get fullName() {
//         return `${this.firstName} ${this.surname}`
//     }
// }

// // // Instances - objects
// const megan = new Student("Megan", "Smith", "Green", "Wednesday")
// const kate = new Student("Kate", "Jones", "Brown","Sunday")
// const elliot = new Student("Elliot", "Davies", "Blue", "Saturday")

// // console.log(megan)
// // console.log(kate)
// // console.log(elliot)
// // // SETTER
// elliot.fullName = "Elliot Gould"
// // // GETTER
// console.log(elliot.fullName)

// // console.log(elliot.workAlarm())

// // Sub-class StudentMusician

// class StudentMusician extends Student {
//     constructor(firstName, eyeColor, day, instrument){
//         super (firstName, eyeColor, day);
//         this.instrument = instrument;

//     }
// }
// const bill = new StudentMusician("Bill", "Blue", "Monday", "Trombone")
// console.log (bill)
// console.log (bill.workAlarm())

// Activity 1
// Create a class called “Rental”.
// This class should have at least the name of the store, the store address, 
// the store contact number, and a list of available movies for rental within the constructor.
// Create an object instance called “test” from your class and output it to the console 
// to ensure it’s free from errors.

// Activity 2
// Write a function that can get all of the available movies and output them to the console.
// Write a function which can add a new movie to the list of available movies.

// Activity 3
// Movies also have prices, refactor your code so that each movie also has an associated 
// price attached.
// Output a list of all movies, including their prices, to the console when queried.

class Rental {
    constructor(storeName, storeAddress, storeTel, movieList) {
        this.storeName = storeName;
        this.storeAddress = storeAddress;
        this.storeTel = storeTel;
        this.movieList = movieList;
    }
    addMovieToList ([movie, price]) {
        this.movieList.push([movie, price])
    }
    get rentalMovieList() {
        let rentalMovieList = []
        for (let i=0; i<this.movieList.length; i++) {
            rentalMovieList.push(` ${this.movieList[i][0]} - £${this.movieList[i][1]}`);
        }
        return `This store has the following movies available to rent: ${rentalMovieList}`
    }
}

const test = new Rental ("Blockbuster", "100 Gone St", "01234567890", [["The Green Mile", 3], ["The Shawshank Redemption", 2.5], ["Castaway", 3.5]]);
console.log(test)
test.addMovieToList(["Hard rain", 2])
console.log(test)
console.log(test.rentalMovieList)

// Stretch !!!
// Create a simple cyberpet.
// We should be able to choose from at least 2 types of pet.
// We should be able to play with, feed, and clean our pet.
// Remember that actions have consequences.