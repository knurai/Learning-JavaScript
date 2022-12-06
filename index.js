

//Hard code number means = 5 + 7
let firstBatch = 5;
let secondBatch = 7;

let countall = firstBatch + secondBatch;

console.log(countall);

// Exercise:1 Convert your Age into Dog's Age

//Create two variables, myAge and humandogRatio [given = 7]
// Multiply the two together and store the result in myDogAge
// Log myDogAge to the console

let myAge = 26;
let humandogRatio = 7;

let myDogAge = myAge * humandogRatio;
console.log(myDogAge);

//Exercise:2 | Reassiagn & increment

//Create a variable, bonusPoints. Initialize it as 50. Increase to 100. Decrease it down to 25, and then finally increase it to 70.
//Console log in everystep

let bonusPoints = 50;
console.log(bonusPoints);

bonusPoints = bonusPoints + 50;
console.log(bonusPoints);

bonusPoints = bonusPoints - 75;
console.log(bonusPoints);

bonusPoints = bonusPoints + 45;
console.log(bonusPoints);

//Exercise: 3 || first Function (Call/invoke)

//Create a function (you decide the name) that logs out the number 42 to the console.

function firstFunction() {
    console.log(42);
}

firstFunction();

//Exercise: 4 || Sum of

//Create a function that logs out the sum of the lap times

let lap1 = 34;
let lap2 = 33;
let lap3 = 36;

function totalLaps(){
   let allLaps = lap1 + lap2 + lap3;
    console.log(allLaps); //console.log(lap1 + lap2 + lap3)
}
totalLaps();


// Exercise: 5 || Increment

let lapsCompleted = 0;
//Create a function that increments the lapsCompleted variable with one.
//Run it three times

function incrementlap(){
    lapsCompleted = lapsCompleted + 1;
    console.log(lapsCompleted);
}
incrementlap();
incrementlap();
incrementlap();

//Exercise: 6 || onClick event

//initialize the count as 0
//listen for clicks on the increment button
//increment the count variable when the button is clicked (log it out)
//Change the count-el in the HTML to reflect the new count

//---------------------------------------------------

//Passenger counter


let count = 0;
let countEl = document.getElementById("count-el")

function increment(){
    console.log("clicked on increment button")
    //count = count + 1;
    count += 1;
    countEl.innerText = count;
    //console.log(count); 

}
let saveEl = document.getElementById('save-el')
console.log(saveEl);

function save(){
    //Create a variable that contains both count and the separartor, i.e, 12 - 15
    // Render the variable in the saveEl using innerText
    // Make sure not to delete the exisiting content of the paragraph

    let countStr = count + " - ";
    saveEl.innerText +=  countStr //+= will give you the previous data too
   // console.log(count);
    count = 0;
    countEl.innerText = 0;
}

//---------------------------------------------------

//Exercise: 7 || String

//Create a variable, message, that stores the string: "You have three new notification"
let userName = 'Robin';
let message = 'You have three new notification';

console.log(message + ', ' + userName + '!'); //Concatenation

//Create a variable, messageToUser, that contains the message we have logged
let messageToUser = message + ', ' + userName + '!';

//Exercise: 8 || Concatenate String

//Create 2 variables, name and greeting. The name variable should store your name, and the greeting should store e.g., "Hi, My name is "
//Create a third variable, myGreeting, that concatenates the strings
//log myGreeting to the console

let name = 'Amit Jha';
let greeting = "Hi, My name is "
let myGreeting = greeting + name;

console.log(myGreeting);

//String vs Number : String always win means if you concatenate String variable with Number than number will become string 

let points = 42;
let extraPoints = '10';

let totalPoints = points + extraPoints;
console.log('Total Points:', totalPoints);

//test
console.log(4 + 5); //9
console.log('2' + '4'); //24
console.log('5' + 1); //51
console.log(100 + '100'); //100100

// Concatenate 
// Create two variables, firstName and lastName
// Concatenate the two variables into a third variable called fullName

let firstName = 'Gufran';
let lastName = 'Khan';
let fullName = firstName + ' ' + lastName;

console.log(fullName);

//Create a function that logs out "Hi there, Linda!" when called

let fName = 'Linda';
let fGreeting = 'Hi there';

function greetLinda(){
    console.log(fGreeting + ", " + fName + '!');
}

greetLinda();

//Increment/Decrement practice

//Create two functions, add3Points and remove1Points and have them to add/remove points from the myPoints variable

//Call the functions to that the line below logs out 10

let myPoints = 3;

function add3Points(){
    myPoints += 3;
}

function remove1Points(){
    myPoints -= 1;
}

add3Points();
add3Points();
add3Points();
remove1Points();
remove1Points();

console.log(myPoints);

//Try to predict what each of the lines will log out

console.log("2" + 2); //22
console.log(11 + 7); //18
console.log(6 + "5"); //65
console.log("My Points: " + 5 + 9); //My Points: 59
console.log(2 + 2); //4
console.log('11' + '14'); //1114





