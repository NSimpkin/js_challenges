// // Activity 1
let favouriteFilms= [
    "Donnie Darko",
    "Pandorum",
    "Joker"
]
// console.log(favouriteFilms)
// console.log(favouriteFilms[2])
// // index [2] is 3rd position
// console.log(favouriteFilms[0])
// // index [0] is 1st position

// // Activity 3
// favouriteFilms[1]= "American Psycho"
// console.log(favouriteFilms)

// // Array length
// console.log(favouriteFilms.length)
// Expected output: 3
// number of items in array
// console.log(favouriteFilms[0].length)
// Expected output: 12
// number of characters in string "Donnie Darko"

// // Array.pop()
// console.log(favouriteFilms.pop())
// Expected output: Joker
// gets last item in array, and removes from array
// console.log(favouriteFilms)
// Expected output: [ 'Donnie Darko', 'American Psycho' ] = last item of array has gone

// // Array.push()
// favouriteFilms.push("Groundhog day")
// console.log(favouriteFilms)
// // adds another item to array
// let length=favouriteFilms.push("Groundhog day")
// // returns new length of array including new item

// // Activity 4

// // Array.shift()
// The array.shift() method removes the first array element and "shifts" all other elements to a lower index.
// This method changes the length of the array.
// favouriteFilms.shift()
// console.log(favouriteFilms)
// Expected output: [ 'Pandorum', 'Joker' ]
// defining a new variable with the variable=array.shift() method returns the value that was "shifted out":
// let film1=favouriteFilms.shift()
// console.log(film1)
// Expected output: Donnie Darko

// // Array.unshift()
// The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.
// const array1 = [1, 2, 3];
// console.log(array1.unshift(4, 5));
// // Expected output: 5
// console.log(array1);
// // Expected output: Array [4, 5, 1, 2, 3]

// // Array.map()
// The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
// let map1=favouriteFilms.map(x => x+1)
// console.log(map1)
// Expected output: [ 'Donnie Darko1', 'Pandorum1', 'Joker1' ]

// // Array.slice()
// The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included)
// where start and end represent the index of items in that array. 
// The original array will not be modified.
// const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
// console.log(animals.slice(2));
// // starts slice at index 2 (3rd position)
// // Expected output: Array ["camel", "duck", "elephant"]
// console.log(animals.slice(2, 4));
// // starts slice at index 2 and ends at index 4-1 (doesn't include end index)
// // Expected output: Array ["camel", "duck"]
// console.log(animals.slice(1, 5));
// // Expected output: Array ["bison", "camel", "duck", "elephant"]
// console.log(animals.slice(-2));
// // Expected output: Array ["duck", "elephant"]
// console.log(animals.slice(2, -1));
// // Expected output: Array ["camel", "duck"]
// console.log(animals.slice());
// // Expected output: Array ["ant", "bison", "camel", "duck", "elephant"]

// // Array.splice()
// The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
// .splice(index position, 0=insert or 1=replace, "new item")
// const months = ['Jan', 'March', 'April', 'June'];
// months.splice(1, 0, 'Feb');
// // Inserts at index 1
// console.log(months);
// // Expected output: Array ["Jan", "Feb", "March", "April", "June"]
// months.splice(4, 1, 'May');
// // Replaces 1 element at index 4
// console.log(months);
// // Expected output: Array ["Jan", "Feb", "March", "April", "May"]

// // Activity 5
// Create a list of your favourite songs (3 of them). Log 
// them to the console. Add another two songs to the list 
// using a method and then remove the last one.

// let favSongs= ["Are you the one", "Do you love me", "People ain't no good"]
// console.log(favSongs)
// favSongs.unshift("This charming man", "How soon is now")
// favSongs.pop()
// console.log(favSongs)