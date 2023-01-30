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
// // functions in classes do not neede to be inside the constructor, only in the class
//     feedPet (time) {
//         this.lastFed = time;
//         return `Last feed updated to ${this.lastFed} for ${this.name}`;
//         }
// }

// const Bella = new Pet ("Bella", 2, "Dog", "German shepherd", "B&T", "08:00");
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

// Student class example

class Student {
    constructor(firstName, eyeColor, day){
        this.firstName = firstName
        this.eyeColor = eyeColor
        this.day = day

    }
    // workAlarm method
     workAlarm(day) {

        if (this.day === "Saturday") {
        return("Go to work today")
        }else{
        return("Stay in bed all day")
        }
    }
}

// // Instances - objects
const megan = new Student("Megan", "Green", "Wednesday")
const kate = new Student("Kate", "Brown","Sunday")
const elliot = new Student("Elliot", "Blue", "Saturday")

// console.log(megan)
// console.log(kate)
// console.log(elliot)

// console.log(elliot.workAlarm())

// Sub-class StudentMusician

class StudentMusician extends Student {
    constructor(firstName, eyeColor, day, instrument){
        super (firstName, eyeColor, day);
        this.instrument = instrument;

    }
}
const bill = new StudentMusician("Bill", "Blue", "Monday", "Trombone")
console.log (bill)
console.log (bill.workAlarm())
