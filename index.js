/* 
// document.getElementById("count-el").innerText = 5;


let count = 0;

console.log(count)


// create  a variable, myAge, and set its value as your age
// log the myAge variable in the console

let myAgee = 19;
console.log(myAge)
// google inspect then console

//create two variables, myAge and humanDogRatio
// multiply the two together and store the result in myDogAge
// log myDogAge to the console
let myAge = 19;
let humanDogRatio = 7;
let myDogAge = myAge * humanDogRatio;
console.log(myDogAge)

// create  a variable  bonusPoints, intitalize  it as 50 then increase it with 100
// decrease it down to 25 then finally increase it to 70 
let bonusPoints = 50;
console.log(bonusPoints)

bonusPoints = bonusPoints + 50;
console.log(bonusPoints)

bonusPoints = bonusPoints - 75;
console.log(bonusPoints)

bonusPoints =bonusPoints + 45;
console.log(bonusPoints)
 */



// create  a function that increment the lapsCompleted variable with one 
// rin it three times

let lapsCompleted = 0

function incrementLap(){
    lapsCompleted = lapsCompleted + 1
}

incrementLap()
incrementLap()
incrementLap()

console.log(lapsCompleted)



// intialize the count as 0
// listen for clicks on the increment button 
// increment the count variable when the button is clicked (log it out)
// change the count-el in the html to reflect the new count 

let countEl = document.getElementById("count-el")
console.log(countEl)

let count = 0
function increment(){
    console.log("Clicked")
    count = count + 1
    countEl.innerText = count
    console.log(count)
}

function save() {
    console.log(count)
}
