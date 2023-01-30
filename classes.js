// Classes are templates for objects and can be used to generate as many instances of those objects as we need

class Pet {
    constructor(name, age, type, breed, colour, time) {
        this.name = name;
        this.age = age;
        this.type = type;
        this.breed = breed;
        this.colour = colour;
        this.lastFed = time;
    }
// functions in classes do not neede to be inside the constructor, only in the class
    feedPet (time) {
        this.lastFed = time;
        return `Last feed updated to ${this.lastFed} for ${this.name}`;
        }
}

const Bella = new Pet ("Bella", 2, "Dog", "German shepherd", "B&T", "08:00");
console.log(Bella.feedPet("15:00"));

const Rufus = new Pet ("Rufus", 6, "Cat", "DSH", "Ginger", "08:00")
console.log(Rufus)

