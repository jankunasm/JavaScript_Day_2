// ========== Exercise #1 =========== //

/*
Write a function that parses through the below object 
and displays all of their favorite food dishes as shown:
*/

//  *=*=*  just console.log it to show it in console  *=*=*  //

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

function parser(object) {
    console.log(`Mr. Person 3 likes ${person3.pizza[0]} and ${person3.pizza[1]} pizza.`);
    console.log(`Senor Person Tres enjoys ${person3.burgers}.`);
    console.log(`Elder Gentleman "Third Person" enjoys ${person3.ice_cream[0]} icecream the most.`);
    console.log(`Super cool dude Person 3 LOVES ${person3.shakes[0].oberwise}, ${person3.shakes[0].dunkin},
    ${person3.shakes[0].mcDonalds}, and ${person3.shakes[0].cupids_candies} shakes.`)
}

console.log(parser(person3))



// ======= Exercise #2 ========= //

/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

//  *=*=*  Making a Class == object prototype  *=*=*  //

function Person(name, age){
    this.name = name;
    this.age = age;

    // A method belonging to the Prototype
    this.printInfo = function(){
        console.log(`This persons name is ${this.name} and is ${this.age} years old.`)
        return "BoilerPlate sentence to prevent undefined in Console."
    }
    this.addAge = function(age){
        this.age++
    } 
}


let Person1 = new Person("Wiz Khalifa", 34)

let Person2 = new Person("Lil Wayne", 39)

let Person3 = new Person("Matas Jankunas", 26)

console.log(Person1.printInfo())

console.log(Person2.printInfo())

console.log(Person3.printInfo())

Person1.addAge()
Person1.addAge()
Person1.addAge()
console.log(Person1)



// ============= Exercise #3 ============ //

/*
    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

string = "BigBoisAreUs"

let prom = new Promise((resolve, reject) => {
    if (string.length >= 10) {
        resolve("success");
     } else {
         reject("failed");
     }
});

prom.then(() => {
    console.log("Big Word");
}).catch(() => {
    console.log("Small Number");
});


console.log(prom)

// ============ Two Code Wars Problems Below ============ //

// Problem 1: You get an array of numbers, return the sum of all the positive ones.
// Example : [1, -4, 7, 12]  => 1 + 7 + 12 = 20

function positiveSum(arr) {
    let emptyList = []
    let reducer = (accumulator, curr) => accumulator + curr;
    for ( i = 0; i < arr.length; i++) {
        if ( arr[i] > 0) {
            emptyList.push(arr[i])
        } 
    }
    return emptyList.reduce(reducer)
}

console.log(positiveSum([1, -4, 7, 12]))
console.log(positiveSum([6, 12, -8, 2, 17]))



// Problem 2: Write a function that checks if a given string (case insensitive) is a palindrone.
// Examples: "racecar", "MaDAm", "Deified"

function isPalindrone(s) {
    let st = s.toLowerCase();
    let splitString = st.split("")
    let reverser = splitString.reverse()
    let joinArray = reverser.join("")
    if (st == joinArray) {
        return true
    } else {
        return false
    }
}
    
console.log(isPalindrone('racecar'))
console.log(isPalindrone('Deified'))
console.log(isPalindrone('MaDAm'))
console.log(isPalindrone('Anajgjgja'))
