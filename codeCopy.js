// function calculateAge(yearOfBirth) {
//   let age = 2023 - yearOfBirth;
//   return age;
// }

// let ageJohn = calculateAge(1990);
// let ageHomedani = calculateAge(1964 );
// let ageSegun = calculateAge(1948);

// function yearsUntilRetirement(name, year) {
//   let age = calculateAge(year);
//   let retirement = 60 - age;

//   if (retirement >= 0) {
//     console.log(name + " retires in " + retirement + "years");
//   } else {
//     console.log(name + " already retired! ");
//   }
// }
// yearsUntilRetirement("john", 1990);
// yearsUntilRetirement("Homedani", 1964);
// yearsUntilRetirement("segun", 1948);

//objects

// let segun = {
//     name: "segun",
//     yearOfBirth: 1991,
//     maritalStatus: "Single",
//     family: ["Rich", "Maggie", "Domingo"],
//     calculateAge : function(){
//         this.age = 2023 - this.yearOfBirth
//     }
// }

// segun.calculateAge()
// console.log(segun)

//Control Structures:  loops

//let's look at for loop

// for (  x =3 ; x>=1 ;x--){
//     console.log(x)

// }

// let names = ["John", "Jane", "Mary", "Mark", "Bob"];

// for(let x = 4; x>=0;x--) {
//     console.log(names[x])

// }

//while loops
// let x=0
// while(x <5){

//     console.log(names[x])
//     x++
// }

// for(let x = 1; x<=5; x++){
//     console.log(x)

//     if (x ==3){
//        break
//     }
// }

// for(let x = 1; x<=5; x++){

//     if (x ===3){
//       continue
//     }

//     console.log(x)
// }

//1 , 2 , 3

// const currentYear = new Date().getFullYear();

// const birthYears = [1990, 1985, 2000, 1978, 1995, 1996];
// const ages = [];

// for (const year of birthYears) {
//   const age = currentYear - year;
//   ages.push(age);
// }

// console.log(ages); // Output: [32, 37, 22, 44, 27]

//5
/*
function printFullAge(birthYears) {
  const currentYear = new Date().getFullYear();
  const ages = [];
  const fullAges = [];

  for (const year of birthYears) {
    const age = currentYear - year;
    ages.push(age);
  }

  for (let i = 0; i < ages.length; i++) {
    const isFullAge = ages[i] >= 18;
    fullAges.push(isFullAge);
    console.log(`Person ${i + 1} - Age: ${ages[i]}, Full Age: ${isFullAge}`);
  }

  return fullAges;
}

const birthYears = [1990, 1985, 2000, 1978, 1995];
const ageResults = printFullAge(birthYears);
console.log(ageResults); // Output: [true, true, true, true, true]


*/

//4
// const currentYear = new Date().getFullYear();
// const birthYears = [1990, 1985, 2010, 1978, 1995];
// const ages = [];

// for (const year of birthYears) {
//   const age = currentYear - year;
//   ages.push(age);
// }

// for (let i = 0; i < ages.length; i++) {
//   const isFullAge = ages[i] >= 18;
//   console.log(`Person ${i + 1} - Age: ${ages[i]}, Full Age: ${isFullAge}`);
// }

//6
/*
function printFullAge(birthYears) {
  const currentYear = new Date().getFullYear();
  const ages = [];
  const fullAges = [];

  for (const year of birthYears) {
    const age = currentYear - year;
    ages.push(age);
  }

  for (let i = 0; i < ages.length; i++) {
    const isFullAge = ages[i] >= 18;
    fullAges.push(isFullAge);
    console.log(`Person ${i + 1} - Age: ${ages[i]}, Full Age: ${isFullAge}`);
  }

  return fullAges;
}

const birthYears1 = [1995, 2008, 1992];
const birthYears2 = [1980, 2005, 1999];
const full_1 = printFullAge(birthYears1);
const full_2 = printFullAge(birthYears2);

console.log(full_1); // Output: [true, false, true]
console.log(full_2); // Output: [true, false, true]


*/

// // Mine  1,2,3
// // let currentYear = new Date().getFullYear()
// // let birthYears = [2002, 2011, 1995, 1991, 2010]
// // let ages = []

// // for (let year of birthYears){
// //     let age = currentYear - year
// //     ages.push(age)
// // }

// // console.log(ages)

// // //4
// // for (let i = 0; i < birthYears.length; i++) {
// //   let isFullAge = ages[i] >= 18;

// //   console.log(`Person ${i + 1} - Age: ${ages[i]}, Full Age: ${isFullAge}`);
// // }

// // 5

// function printFullAge(birthYears) {
//      const currentYear = new Date().getFullYear();
//     const ages = [];
//     const fullAges = [];

//     for (const year of birthYears) {
//       const age = currentYear - year;
//       ages.push(age);
//     }

//     for (let i = 0; i < ages.length; i++) {
//       const isFullAge = ages[i] >= 18;
//       fullAges.push(isFullAge);
//       console.log(`Person ${i + 1} - Age: ${ages[i]}, Full Age: ${isFullAge}`);
//     }

//     return fullAges;
//   }

// const birthYears = [1990, 1985, 2000, 1978, 1995];
//   const ageResults = printFullAge(birthYears);
//   console.log(ageResults); // Output: [true, true, true, true, true]

//   const birthYears1 = [1995, 2008, 1992];
//   const birthYears2 = [1980, 2005, 2020];
//   const full_1 = printFullAge(birthYears1);
//   const full_2 = printFullAge(birthYears2);

//   console.log(full_1); // Output: [true, false, true]
//   console.log(full_2); // Output: [true, false, true]

//CODING CHALLENGE

// //solution by JONAS
// //1 to 4
// // let years = [2001, 1985, 1999, 2014, 1973]
// // let ages = []

// // for(let i  = 0 ; i< years.length;i++){
// //     ages[i]= 2016 - years[i]
// // }
// // for(i= 0;i<ages.length; i++)
// // {
// //     if (ages[i] >=18){
// //         console.log("person " + (i+1) + "  is " + ages[i] +
// //         " years old , and is of full age.")
// //     }
// //     else{
// //         console.log("person " + (i+1) + "  is " + ages[i] +
// //         " years old , and is NOT of full age.")

// //     }
// // }

// let years = [2001, 1985, 1999, 2014, 1973]

// function printFullAge(years){
//     let ages = []
//     let fullAges = []
//     for(let i  = 0 ; i< years.length;i++){
//         ages[i]= 2016 - years[i]
//     }
//     for(i= 0;i<ages.length; i++)
//     {
//         if (ages[i] >=18){
//             console.log("person " + (i+1) + "  is " + ages[i] +
//             " years old , and is of full age.")
//             fullAges.push(true)
//         }
//         else{
//             console.log("person " + (i+1) + "  is " + ages[i] +
//             " years old , and is NOT of full age.")
//             fullAges.push(false)
//         }
//     }

//     return fullAges
// }

//   years = [2001, 1985, 1999, 2014, 1973]
// let full_1 = printFullAge(years)
// let full_2 = printFullAge([2012,1915, 1999])

// console.log(age)
// var age = 23

// function foo(){
//     console.log(age)
//     var age = 65
//     console.log(age)

// }
// foo()
// console.log(age)

//Scoping

// let a  = "omo iya mi"
// first()

// function first(){
//     let b = " kiloun shele "
//     second()

//     function second(){
//         let c = " mowa oo"
//         third()
//         // console.log(a + b + c )
//     }
// }
//     function third(){
//         let d = " wa shey re"
//         console.log(a+ d)

// }

// the THIS keyword
// console.log(this)

// calculateAge(1990)

// function calculateAge(year){
//     let currentYear = new Date().getFullYear()
//     console.log(currentYear - year)
//     console.log(this)
// }
// currentYear = new Date().getFullYear()
// let john = {
//   name: "John ",
//   yearOfBirth: 1990,
//   occupation: "techie",
//   calculateAge: function () {
//     console.log(this);
//     console.log(currentYear - this.yearOfBirth);

//     //     function innerFunction(){

//     //         console.log(this)
//     //     }
//     //     innerFunction()
//     // }
//   },
// };
// john.calculateAge();

// let mike = {
//   name: "Mike",
//   yearOfBirth: 1984
// };
// mike.calculateAge = john.calculateAge; //methos borrowing
// mike.calculateAge();

/*
// GAME RULES:

// - The game has 2 players, playing in rounds
// - In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
// - BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
// - The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
// - The first player to reach 100 points on GLOBAL score wins the game

// */

// let scores, roundScore, activePlayer, gamePlaying = true;
// init();
// // document.querySelector("#current-" + activePlayer).textContent = dice;
// //document.querySelector("#current-" + activePlayer).innerHTML = "<em>" + dice + "</em>"
// // let x = document.querySelector("#score-0").textContent;
// // console.log(x);

// document.querySelector(".btn-roll").addEventListener("click", function () {
//   if (gamePlaying) {
//     // set game playing here

//     //Do something here
//     // 1. Random number

//     dice = Math.floor(Math.random() * 6) + 1;

//     //2. Display the result
//     let diceDOM = document.querySelector(".dice");
//     diceDOM.style.display = "block";
//     diceDOM.src = "dice-" + dice + ".png";

//     // 3. update the round score if the rolled nuber was not a 1
//     if (dice !== 1) {
//       //Add score
//       roundScore += dice;
//       document.querySelector("#current-" + activePlayer).textContent =
//         roundScore;
//     } else {
//       //Next player
//       nextPlayer();
//     }
//   }
// });

// document.querySelector(".btn-hold").addEventListener("click", function () {
//   if (gamePlaying) {
//     //Add CURRENT score to GLOBAL score
//     scores[activePlayer] += roundScore;

//     //Update the UI
//     document.querySelector("#score-" + activePlayer).textContent =
//       scores[activePlayer];

//     //Check if player won the game
//     if (scores[activePlayer] >= 20) {
//       document.querySelector("#name-" + activePlayer).textContent = "Winner!";

//       document.querySelector(".dice").style.display = "none";
//       document
//         .querySelector(".player-" + activePlayer + "-panel")
//         .classList.add("winner");
//       document
//         .querySelector(".player-" + activePlayer + "-panel")
//         .classList.remove("active");

//       //se to false here:
//       gamePlaying = false;
//     } else {
//       //next player
//       nextPlayer();
//     }
//   }
//   // set game playing here
// });

// function nextPlayer() {
//   activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
//   roundScore = 0;
//   document.getElementById("current-0").textContent = 0;
//   document.getElementById("current-1").textContent = 0;

//   //we use toggle instead of add or remove classList
//   document.querySelector(".player-0-panel").classList.toggle("active");
//   document.querySelector(".player-1-panel").classList.toggle("active");

//   //  document.querySelector(".player-0-panel").classList.remove("active")
//   //  document.querySelector(".player-1-panel").classList.add("active")

//   document.querySelector(".dice").style.display = "none";
// }

// document.querySelector(".btn-new").addEventListener("click", init);

// function init() {
//   scores = [0, 0];
//   roundScore = 0;
//   activePlayer = 0;

//   document.querySelector(".dice").style.display = "none";

//   document.getElementById("score-0").textContent = "0";

//   document.getElementById("score-1").textContent = "0";
//   document.getElementById("current-0").textContent = "0";
//   document.getElementById("current-1").textContent = "0";

//   document.querySelector("#name-0").textContent = "player 1";
//   document.querySelector("#name-1").textContent = "player 2";

//   document.querySelector(".player-0-panel").classList.remove("winner");
//   document.querySelector(".player-1-panel").classList.remove("winner");

//   document.querySelector(".player-0-panel").classList.remove("active");
//   document.querySelector(".player-1-panel").classList.remove("active");
//   document.querySelector(".player-0-panel").classList.add("active");
// }

// //no two active player
// //after a winner , no more clicking and goes back to dafualt
// ///new game UI

// this is fucking working fine!!!!

/*
// GAME RULES:

// - The game has 2 players, playing in rounds
// - In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
// - BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
// - The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
// - The first player to reach 100 points on GLOBAL score wins the game

// */

//1
//first thing is to create a variable for the score for each player
//variable for round score as it can be only one at a time
//variable for the current active player

//later we got a function for this , so let's just call it
// let scores = [0, 1],
//   roundScore = 0,
//   activePlayer = 0,
//   dice;
// let scores, roundScore, activePlayer, gamePlaying;
// init();
//let's now think about the dice
//Math.random()* 6 produces number from 0 and 5
//then we add one

// console.log(dice)

//next, let's do some DOM  manipulation
//using query selector is easy to use like that of the css using . for class and # for id in quote
//let's select the currect score changing the text content to random dice value

// we can also manipulate  the active player to select stuff
// textContent can only set plain text but innerHTML(which should be written in string) can set some element in the html document
// document.querySelector("#current-" + activePlayer).textContent = dice;

//we can also use the querySelector to just read/get some value and store in a variable
// let x = document.querySelector("#current-1").textContent;
// console.log(x);

//we can also use it to change the css of our webpage
//and now, we wanna hide the dice on opening the game

//3
// document.querySelector(".dice").style.display = "none";

//next we gonna do is to show dice on roll dice click
//now let's select the roll button and add event listener
//two events we have: tag/type of event and function
// we can create the function in the eventlistener or create the function outside and call it in the event listener
//the function in the event listener is then called the call back function
//an anonymous function is a function that doesn't have a name and cannot be reused outside of its context

//
// document.querySelector(".btn-roll").addEventListener("click", btn);

// function btn() {
//...#11
//so , we want our game playing to be true
//all we have to do is to add an if statement...
//after this gamePlaying nothing is gonna happen anymore even though we push this as hard as we want

// if (gamePlaying) {
//   //do something here
//   //so what happens when someone click the button , btn roll
//   // 1. Random number (let's have a random number first set to dice)
//   dice = Math.floor(Math.random() * 6) + 1;
//   //2. then we display the result
//we have to make it visible again , because we set it to none earlier
// document.querySelector(".dice").style.display = "block";

// we also need to make sure when we click on roll dice , the display dice is equal to the current number
// that's if we roll one then we need the dice one image
// for flexibility and reusing we can create a variable to store our dice values/selection and reuse it anytime to avoid repitition

// let diceDOM = document.querySelector(".dice");
// //so let's initially block it
// document.querySelector(".dice").style.display = "block";
// //now, to change the sourse attribute , we use the src keyword
// diceDOM.src = "dice-" + dice + ".png";

//3. after then, update the round score ONLY IF the roll number is NOT ONE(1)
// again , if a player rolls a number aside ONE(1) , the current score is added to the round score
//     //otherwise, it's the next player turn
//     if (dice !== 1) {
//       //add score
//       roundScore += dice;
//       //we've updated the value
//       //but we also want to display it in the UI >>
//       //Each time the player rolls the dice, we want to first update the roundscore and then display

//       document.querySelector("#current-" + activePlayer).textContent =
//         roundScore;
//     } else {
//LET'S USE THE TENERAY OPERATOR
//and reset the roundScore back to Zero(0)
//let's reset our current class to zero also in the UI
//let's also switch the active class to the active player by adding/removing the classList
//       //we've deleted this after the implementing the hold btn which is #5
//       //next player is now #6
//       //now let's call it
//       nextPlayer();
//     }
//   }
// }
//5

//5o we wanna hold our point and update our score on the interface
//so let's start by first selecting it , adding event listener and on click
//using anonymous function(i.e a function without a name)
// //then,
// //let's add the current score to the player's global score
// document.querySelector(".btn-hold").addEventListener("click", function () {
//   //...#11
//   // so we do exact same thing here
//   // and set gameplaying
//   if (gamePlaying) {
//     //5.1
//     //add current score to global score
//     //we gonna add the score the player gat in this round plus the score the player already havee
//     scores[activePlayer] += roundScore;

//     //5.2
//update the UI
// //we need to know where to write our scores from
// // and print the element we selected before
// document.querySelector("#score-" + activePlayer).textContent =
//   scores[activePlayer];
// //5.3
// //but after this we observe that it's not changing the activePlayer
// //that means it is the next player's turn
// //next Player - but let's keep our code dry and write a function for same doings
// //since we have created a function for next player and the same functionalities, let's just call it

// //5.4
// //check if player won the game
// //// - The first player to reach 100 points on GLOBAL score wins the game
// //Now, what we can do is to check if the score of the active player is more than 100 points
// //once again, we use our scores[] , then retrieve the score of the active player
// if (scores[activePlayer] >= 20) {
//   document.querySelector("#name-" + activePlayer).textContent = "winner!";
//   //after this , let's hide the dice i.e after a player wins
//   // then remove the active class from the current player

//     document.querySelector(".dice").style.display = "none";

//     //so, now it won't be visible anymore
//     //it's not adviseable to manipulate the style property from the JS all the time
//     //let's toggle it by creating a class
//     document
//       .querySelector(".player-" + activePlayer + "-panel")
//       .classList.add("winner");
//     document
//       .querySelector(".player-" + activePlayer + "-panel")
//       .classList.remove("active");
//     //we added the winner class from the css
//     //remember toggle adds the class if the class ain't there and if it's already there, then it removes it
//     //but in this case it's not necessary, the winner class ain't there so we added it , active class is there so we remove it

//     //...11
//     //then we set game playing to be false here
//     gamePlaying = false;
//   //   } else {
//   //     //next player
//   //     nextPlayer();
//   //   }
//   // }
// });

// //6
// //let's create another function for next plater
// function nextPlayer() {
//   // next player
//   // if dice is rolled as 1, it does not add up but turns to player 2
//   //let's use the teneray operator

//   activePlayer == 0 ? (activePlayer = 1) : (activePlayer = 0);
//   //then if player switches, the current score or round score should be set to 0
//   roundScore = 0;

//   document.getElementById("current-0").textContent = "0";
//   document.getElementById("current-1").textContent = "0";

//Now, as soon as the player  changes  we have to remove
//the activePlayer from player-1 to 2 and  vice-versa
//as you know, start by selecting the element that you want

// document.querySelector(".player-0-panel").classList.remove("active")
// document.querySelector(".player-1-panel").classList.add("active")
// // //so great , it switches but it doesn't switch again after player-2 rolled a one
// //one way is to do this is to use toggle as a classList
// //so let's do it differently by using toggle classList instead of add or remove

// document.querySelector(".player-0-panel").classList.toggle("active");
// document.querySelector(".player-1-panel").classList.toggle("active");
// //now, what we wanna do next is to hide the dice after a player rolls a 1
// //then display at the next player's turn

// document.querySelector(".dice").style.display = "none";
// //so, the next thing to do is to implement our hold btn
//so that when we hold the current score it's gonna be visible in the global score
//Now, what we wanna do next is , after there's a winner we wanna stop playing
//   //and on the click of new game in the UI , score and everything should return to default
// }

// //7
// //implementing our botton new
// //listening for a click and using anonymous function
// document.querySelector(".btn-new").addEventListener("click", function () {
//so what do we have to do when we wanna start a new game?
//first, we have to reset our player scores,active player and roundscore
// scores = [0 ,0]
// activePlayer = 0
// roundScore = 0
//since we already did something similar, we don't wanna repeat codes and keep our codes dry
// //so we gonna create a function called init to initialize the game
// //NB* scroll up @ 38 08:55
// // init();
// //it doesn't really make much sense so call a function inside an anonymous function
// document.querySelector(".btn-new").addEventListener("click", init);
// //but up here we really not calling it directly but passing it in our listener function which is going to call it.
// //so we don't need to use the function call operator here (),because it would be immediately called , but we wanna call it after "click"
// // });

//8
// //writing a function for init
// function init() {
//   scores = [0, 0];
//   activePlayer = 0;
//   roundScore = 0;
//   //...#11
//   //let's create a state varible here
//   gamePlaying = true;

//   document.querySelector(".dice").style.display = "none";
//   //let's also keep our no#2 in the init function ...

//2
// now we wanna set our player function to 0 in the initial
// //and also our current score too to 0
// document.getElementById("score-0").textContent = "0";
// document.getElementById("score-1").textContent = "0";
// document.getElementById("current-0").textContent = "0";
// document.getElementById("current-1").textContent = "0";
// // now let's go back to the roll btn function and event listener

// //9 Now , we wanna change our player name after a player wins (i.e winner) to player no again.

// //after the winner wins, we also wanna reset player names to default
// document.querySelector("#name-0").textContent = "player 1";
// document.querySelector("#name-1").textContent = "player 2";

//10
//next we wanna remove our winner class
//   //since we don't know who won , we simply gonna remove the class from both panel
//   document.querySelector(".player-0-panel").classList.remove("winner");
//   document.querySelector(".player-1-panel").classList.remove("winner");

//   //and we do exact same thing for the active class
//   // we also need to set the first player to the active player

//   document.querySelector(".player-1-panel").classList.remove("active");

//   // we also need to set the first player to the active player
//   document.querySelector(".player-0-panel").classList.add("active");

//   document.querySelector(".player-1-panel").classList.remove("active");
// }

//11
//now after there's a winner, we don't wanna roll our dice anymore or make it active,clickable
//so what do we do?
//that brings us to the introduction of state variable
//so what's a state varible?
// a state varible simply tells us a condition of a variable
//and keep in mind that we  wanna use this in a couple of places
//and we need to keep it in the global score

// 7.. my own solution

// function playerWins(){
//   // - The first player to reach 100 points on GLOBAL score wins the game
// if( scores[activePlayer] > 20){
//  document.querySelector("#name-" + activePlayer).textContent= "player wins!!!"
// }
// }

//same code with no comment
/*

//

/*
// GAME RULES:

// - The game has 2 players, playing in rounds
// - In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
// - BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
// - The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
// - The first player to reach 100 points on GLOBAL score wins the game

  */
/*
let scores, roundScore, activePlayer, dice, gamePlaying;
init();
document.querySelector(".btn-roll").addEventListener("click", function () {
  if (gamePlaying) {
    dice = Math.floor(Math.random() * 6) + 1;
    document.querySelector(".dice").style.display = "block";
    diceDOM = document.querySelector(".dice");
    diceDOM.src = "dice-" + dice + ".png";
    if (dice !== 1) {
      //Add score
      roundScore += dice;
      document.querySelector("#current-" + activePlayer).textContent =
        roundScore;
    } else {
      nextPlayer();
    }
  }
});

document.querySelector(".btn-hold").addEventListener("click", function () {
  if (gamePlaying) {
    scores[activePlayer] += roundScore;
    document.querySelector("#score-" + activePlayer).textContent =
      scores[activePlayer];
    if (scores[activePlayer] >= 20) {
      document.querySelector("#name-" + activePlayer).textContent = "winner!";
      document.querySelector(".dice").style.display = "none";
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.add("winner");
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.remove("active");
      gamePlaying = false;
    } else {
      nextPlayer();
    }
  }
});

function nextPlayer() {
  //Next player
  document.querySelector(".dice").style.display = "none";
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  roundScore = 0;
  console.log("you rolled a one");
  document.querySelector("#current-0").textContent = 0;
  document.querySelector("#current-1").textContent = 0;
  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");
}

document.querySelector(".btn-new").addEventListener("click", init);

function init() {
  (scores = [0, 0]), (roundScore = 0), (activePlayer = 0);
  gamePlaying = true;
  document.querySelector(".dice").style.display = "none";
  document.querySelector("#current-0").textContent = "0";
  document.querySelector("#current-1").textContent = "0";
  document.querySelector("#score-0").textContent = "0";
  document.querySelector("#score-1").textContent = "0";
  document.querySelector("#name-0").textContent = "player 1";
  document.querySelector("#name-1").textContent = "player 2";
  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");
  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.remove("activr");
  document.querySelector(".player-0-panel").classList.add("active");
}

*/

/*





dice + full challenges


//

/*
// GAME RULES:

// - The game has 2 players, playing in rounds
// - In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
// - BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
// - The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
// - The first player to reach 100 points on GLOBAL score wins the game

//  

let scores, roundScore, activePlayer, gamePlaying;
init();
// let lastDice;
document.querySelector(".btn-roll").addEventListener("click", function () {
  if (gamePlaying) {
    let dice1 = Math.floor(Math.random() * 6) + 1;
    let dice2 = Math.floor(Math.random() * 6) + 1;
    showDice();

    document.querySelector("#dice-1").src = "dice-" + dice1 + ".png";
    document.querySelector("#dice-2").src = "dice-" + dice2 + ".png";
    // if (dice === 6 && lastDice === 6) {
    //   //player looses score
    //   scores[activePlayer] = 0;
    //   document.querySelector(".dice").style.display = "none";
    //   document.querySelector("#score-" + activePlayer).textContent = "0";
    //   nextPlayer();
    // } else if (dice !== 1) {
    //   //Add score
    //   roundScore += dice;
    //   document.querySelector("#current-" + activePlayer).textContent =
    //     roundScore;
    // } else {
    //   nextPlayer();
    // }
    // lastDice = dice;
    if (dice1 !== 1 && dice2 !== 1) {
      //Add score

      roundScore += dice1 + dice2;

      document.querySelector("#current-" + activePlayer).textContent =
        roundScore;
    } else {
      nextPlayer();
    }
  }
});

document.querySelector(".btn-hold").addEventListener("click", function () {
  if (gamePlaying) {
    scores[activePlayer] += roundScore;
    document.querySelector("#score-" + activePlayer).textContent =
      scores[activePlayer];
    let input = document.querySelector(".final-score").value;
    let winningScore;
    if (input) {
      winningScore = input;
    } else {
      winningScore = 20;
    }
    if (scores[activePlayer] >= winningScore) {
      document.querySelector("#name-" + activePlayer).textContent = "winner!";
      hideDice();
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.add("winner");
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.remove("active");
      gamePlaying = false;
    } else {
      nextPlayer();
    }
  }
});

function nextPlayer() {
  //Next player
  hideDice();
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  roundScore = 0;
  document.querySelector("#current-0").textContent = 0;
  document.querySelector("#current-1").textContent = 0;
  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");
}

document.querySelector(".btn-new").addEventListener("click", init);

function init() {
  (scores = [0, 0]), (roundScore = 0), (activePlayer = 0);
  gamePlaying = true;
  hideDice();

  document.querySelector("#current-0").textContent = "0";
  document.querySelector("#current-1").textContent = "0";
  document.querySelector("#score-0").textContent = "0";
  document.querySelector("#score-1").textContent = "0";
  document.querySelector("#name-0").textContent = "player 1";
  document.querySelector("#name-1").textContent = "player 2";
  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");
  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.remove("activr");
  document.querySelector(".player-0-panel").classList.add("active");
}
function hideDice() {
  document.querySelector("#dice-1").style.display = "none";
  document.querySelector("#dice-2").style.display = "none";
}
function showDice() {
  document.querySelector("#dice-1").style.display = "block";
  document.querySelector("#dice-2").style.display = "block";
}

*/

/*  CORRESPONDING HTML



<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link
      href="https://fonts.googleapis.com/css?family=Lato:100,300,600"
      rel="stylesheet"
      type="text/css"
    />
    <link
      href="http://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css"
      rel="stylesheet"
      type="text/css"
    />
    <link type="text/css" rel="stylesheet" href="style.css" />

    <title>Pig Game</title>
  </head>

  <body>
    <div class="wrapper clearfix">
      <div class="player-0-panel active">
        <div class="player-name" id="name-0">Player 1</div>
        <div class="player-score" id="score-0">43</div>
        <div class="player-current-box">
          <div class="player-current-label">Current</div>
          <div class="player-current-score" id="current-0">11</div>
        </div>
      </div>

      <div class="player-1-panel">
        <div class="player-name" id="name-1">Player 2</div>
        <div class="player-score" id="score-1">72</div>
        <div class="player-current-box">
          <div class="player-current-label">Current</div>
          <div class="player-current-score" id="current-1">0</div>
        </div>
      </div>

      <button class="btn-new">
        <i class="ion-ios-plus-outline"></i>New game
      </button>
      <button class="btn-roll"><i class="ion-ios-loop"></i>Roll dice</button>
      <button class="btn-hold">
        <i class="ion-ios-download-outline"></i>Hold
      </button>
      <input
        type="text"
        name=""
        id=""
        class="final-score"
        placeholder="Final score"
      />
      <img src="dice-5.png" alt="Dice" class="dice" id="dice-1" />
      <img src="dice-5.png" alt="Dice" class="dice" id="dice-2" />
    </div>

    <script src="app.js"></script>
  </body>
</html>
*/

/* CORRESPONDING STYLES 

/**********************************************
//*** GENERAL
//*********************************************

.final-score {
  color: #555;
  font-family: "Lato";
  font-size: 18px;
  left: 50%;
  padding: 10px;
  position: absolute;
  text-align: center;
  text-transform: uppercase;
  top: 520px;
  transform: translateX(-50%);
  width: 160px;
}
.final-score:focus {
  outline: none;
}
#dice-1{top:120px;}
#dice-2{top: 250px;;}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.clearfix::after {
  content: "";
  display: table;
  clear: both;
}

body {
  background-image: linear-gradient(
      rgba(62, 20, 20, 0.4),
      rgba(62, 20, 20, 0.4)
    ),
    url(back.jpg);
  background-size: cover;
  background-position: center;
  font-family: Lato;
  font-weight: 300;
  position: relative;
  height: 100vh;
  color: #555;
}

.wrapper {
  width: 1000px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  box-shadow: 0px 10px 50px rgba(0, 0, 0, 0.3);
  overflow: hidden;
}

.player-0-panel,
.player-1-panel {
  width: 50%;
  float: left;
  height: 600px;
  padding: 100px;
}

/**********************************************
//*** PLAYERS
//*********************************************

.player-name {
  font-size: 40px;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 100;
  margin-top: 20px;
  margin-bottom: 10px;
  position: relative;
}

.player-score {
  text-align: center;
  font-size: 80px;
  font-weight: 100;
  color: #eb4d4d;
  margin-bottom: 130px;
}

.active {
  background-color: #f7f7f7;
}
.active .player-name {
  font-weight: 300;
}

.active .player-name::after {
  content: "\2022";
  font-size: 47px;
  position: absolute;
  color: #eb4d4d;
  top: -7px;
  right: 10px;
}

.player-current-box {
  background-color: #eb4d4d;
  color: #fff;
  width: 40%;
  margin: 0 auto;
  padding: 12px;
  text-align: center;
}

.player-current-label {
  text-transform: uppercase;
  margin-bottom: 10px;
  font-size: 12px;
  color: #222;
}

.player-current-score {
  font-size: 30px;
}

button {
  position: absolute;
  width: 200px;
  left: 50%;
  transform: translateX(-50%);
  color: #555;
  background: none;
  border: none;
  font-family: Lato;
  font-size: 20px;
  text-transform: uppercase;
  cursor: pointer;
  font-weight: 300;
  transition: background-color 0.3s, color 0.3s;
}

button:hover {
  font-weight: 600;
}
button:hover i {
  margin-right: 20px;
}

button:focus {
  outline: none;
}

i {
  color: #eb4d4d;
  display: inline-block;
  margin-right: 15px;
  font-size: 32px;
  line-height: 1;
  vertical-align: text-top;
  margin-top: -4px;
  transition: margin 0.3s;
}

.btn-new {
  top: 45px;
}
.btn-roll {
  top: 403px;
}
.btn-hold {
  top: 467px;
}

.dice {
  position: absolute;
  left: 50%;
  top: 178px;
  transform: translateX(-50%);
  height: 100px;
  box-shadow: 0px 10px 60px rgba(0, 0, 0, 0.1);
}

.winner {
  background-color: #f7f7f7;
}
.winner .player-name {
  font-weight: 300;
  color: #eb4d4d;
}
*/

//let's dive in into objects and functions

//Function constructor

//let's start with john objects

// let john = {
//   name: "John",
//   yearOfBirth: 1998,
//   job: "teacher",
// };

// let Person = function (name, yearOfBirth, job) {
//   this.name = name;
//   this.yearOfBirth = yearOfBirth;
//   this.job = job;

// };

// Person.prototype.calculateAge =  function () {
//     console.log(2016 - this.yearOfBirth);
//   };

// //let's add some property
// Person.prototype.lastname = "smith"

// john = new Person("John", 1998, "teacher");
// mark = new Person("mark", 1990, "cobbler");
// jane = new Person("jane", 2005, "influencer");

// john.calculateAge()

// mark.calculateAge()

// jane.calculateAge()

// console.log(john.lastname)
// console.log(mark.lastname)
// console.log(jane.lastname)

// console.info(john.lastname)

//a similar way to this is to use the Object.create method
//Object.create method
// we first create object that would acts as a prototype
//then create a new object based on that very prototype

// let personProto = {
//     calculateAge : function(){
//         console.log(2016 - this.yearOfBirth)
//     }
// }
// let john = Object.create(personProto)
// john.name = "john"
// john.yearOfBirth = 1990
// john.job = "teacher"

// let jane  = Object.create(personProto,{
//     name: {value: "jane"},
//     job: {value: "visualizer"},
//     yearOfBirth: {value: 1991}
// })

/* And the difference between these two is that the object.create
builds an object that inherits directly from the one that we passed
into the first argument 

NB: this also allow us to implement a complex inheritance structures in an 
easier way than function constructors because it allows us to 
specify which object should be a prototype

while on the other hand,

the function constructor, the newly created object inherit from the 
constructor's prototype property


*/

/*

//let's talk about primitive vs object



//primitives
let a = 23,b=a

a = 46 
console.log(a)
console.log(b)





//objects

let obj1 = {
    name: "SG",
    age : 26
},obj2 = obj1

obj1.age = 31
console.log(obj1)
console.log(obj2)
 




///functions
let age  =27
let obj = {
    name: "segun",
    city: "Lisbon"
}
function change(a,b){
    a.age = 30
    b.city = "San Francisco"
}
change(age,obj)
console.log(age)
console.log(obj.city)



*/

/*


let years = [1990, 1965, 1935, 2005,2004,2006, 2020, 1999, 1951, 1952];
//we first create a generic function which loops over n input array

function arrayCalc(arr, fn) {
  let arrRes = [];
  for (let i = 0; i < arr.length; i++) {
    arrRes.push(fn(arr[i]));
  }
  return arrRes;
}

function calculateAge(el) {
  return 2023 - el;
}

function isFullAge(el) {
  return el >= 18;
}
function maxHeartRate(el) {
  //now maxRate falls in the ranges of 18 and 81
  if (el >= 18 && el <= 81) {
    return Math.round(206.9 - 0.67 * el);
  } else {
    return -1;
  }
}

let ages = arrayCalc(years, calculateAge);

let fullAges = arrayCalc(ages, isFullAge);

let rates = arrayCalc(ages, maxHeartRate)

console.log(ages);
console.log(fullAges);
console.log(rates)
*/

// //let's talk about functions returning functions
// //

// function interviewQuestion(job) {
//   if (job === "designer") {
//     return function (name) {
//       console.log(
//         name + " can you please explain what UX design is?"
//       );
//     };
//   } else if (job === "teacher") {
//     return function (name) {
//       console.log(name + " what subject do you teach?");
//     };
//   } else {
//     return function (name) {
//       console.log("Hello " + name + ", what do you do?");
//     };
//   }
// }

// let teacherQuestion = interviewQuestion("teacherr");

// let designerQuestion = interviewQuestion("designer")

// teacherQuestion("John");
// designerQuestion("Jane")
// designerQuestion("Segun")

// interviewQuestion("teacher")("Mark")

// //Lectures : Closures

// //wanna write a function to calculate how many years left before retirement

// function retirement(retirementAge) {
//   //in Europe it's 65 years
//   let a = " years left until retirement.";
//   return function (yearOfBirth) {
//     let age = 2023 - yearOfBirth;
//     console.log(retirementAge - age + a);
//   };
// }

// let retirementUS = retirement(66);

// retirementUS(1990); //alt:retirement(66)(1990)

// //how closure works: An inner function has always access to the
// // variables
// //and parameters of its outer function, even after
// // the outer function has
// //arrived.

// let retirementNG = retirement(60)(1989);
// let retirementGH = retirement(60)(1993);

// //God Abeg

// function interviewQuestion(job) {
//   return function (name) {
//     if (job === "designer") {
//       console.log(name + " , can you please explain what UX design is? ");
//     } else if (job === "teacher") {
//       console.log("What subject do you teach, " + name + " ?");
//     } else {
//       console.log("Hello " + name + " , what do you do? ");
//     }
//   };
// }
// // let teacherQuestion = interviewQuestion("teacher");
// // console.log(teacherQuestion);

// interviewQuestion("designer")("John")

// //Lecture : Bind , call and apply

// //let's create an object

// let segun = {
//   name: "Segun",
//   age: 29,
//   job: "techie",
//   presentation: function (style, timeOfDay) {
//     if (style === "formal") {
//       console.log(
//         "Good " +
//           timeOfDay +
//           ", Ladies and gentlemen! I'm " +
//           this.name +
//           ", I'm a " +
//           this.job +
//           " and I'm  " +
//           this.age +
//           " years old."
//       );
//     } else if (style === "friendly") {
//       console.log(
//         "Hey! What's up ? I'm " +
//           this.name +
//           " , I'm a " +
//           this.job +
//           " and I'm " +
//           this.age +
//           " years old. Have a nice " +
//           timeOfDay
//       );
//     }
//   },
// };

// let emily = {
//   name: "Emily",
//   age: 26,
//   job: "designer"
// };

// segun.presentation("friendly", "morning");
// segun.presentation.call(emily, "friendly", "night");  //this is called method borrowing
// //we borrow the call from segun method to use in emily

// //another is apply
// // segun.presentation.apply(emily,"friendly", "afternoon")

// //let's see the bind method
// //bind doesn't immediately call a function but generate a copy of the function so that we can store somewhere
// //bind returns a function and we have to store it somewhere
// let segunFriendly = segun.presentation.bind(segun,"friendly")

// segunFriendly("morning")
// segunFriendly("night")
// //bind allows us to preset some arguments

// let emilyFormal = segun.presentation.bind(emily,"formal")

// //now let's call it
// emilyFormal("afternoon")

// //let's play with some of the codes we've written before..

// let years = [1991,1980,2007,2020,1993]

// function arrayCalc(arr,fn){
//     let arrRes = []
//     for(let i=0;i<arr.length;i++){
//         arrRes.push(fn(arr[i]))

//     }return arrRes
// }

// function calculateAge(el){
//     return 2023 - el
// }

// function isFullAge(limit, el){
//     return el >= limit
// }

// let ages = arrayCalc(years,calculateAge)

// let fullJapan = arrayCalc(ages,isFullAge.bind(this, 20))
// console.log(fullJapan)
// console.log(ages)

// let john = {
//   name: "John",
//   age: 26,
//   job: "teacher",
//   presentation: function (style, timeOfDay) {
//     if (style === "formal") {
//       console.log("Good "+ timeOfDay  + " ladies and gentlemen." + " My name is " + this.name);
//     } else if (style === "friendly") {
//       console.log("Hey "+ this.name +  " what's pomping this " + timeOfDay);
//     } else {
//       console.log("what do you really want?");
//     }
//   },

// };

// let emily= {
//   name : "Emily-James"
// }
//   john.presentation("formal" , "morning")
//   john.presentation.call( emily,"friendly","afternoon")

// let johnDetails = john.presentation.bind(john,"formal")
// johnDetails("night")

// johnDetails("evening")

// let emilyDetails = john.presentation.bind(emily,"formal")
// emilyDetails("moring")
// emilyDetails("evening")
// // //now i have a challenge to prompt different questions and respond

// // function retirement(retirementAge) {
// //   let a = " years left until retirement";
// //   return function (yearOfBirth) {
// //     let age = 2023 - yearOfBirth;
// //     console.log(retirementAge - age + a);
// //   };
// // }

// // let retirementUS = retirement(60)(1996);
// // retirementIceland = retirement(67)(1995);
// // retirementGermany = retirement(65)(1991);

// // //let's use the power of closures for the interview questions

// // function interviewQuestion(job){

// //   if(job==="techie"){
// //     return function(name){
// //       console.log("hey " + name + " what tech do you do?")
// //     }
// //   }
// //     else if(job === "marketer"){
// //       return function(name){
// //         console.log("okay " + name + " can  you market?")
// //       }
// //     }else{
// //       return function(name){
// //         console.log("what can you really do? you can't just be waking up like an accident...")
// //       }
// //     }

// // // }

// (function () {
//   function Question(question, answers, correct) {
//     this.question = question;
//     this.answers = answers;
//     this.correct = correct;
//   }
//   Question.prototype.displayQuestion = function () {
//     console.log(this.question);
//     for (let i = 0; i < this.answers.length; i++) {
//       console.log(i + ": " + this.answers[i]);
//     }
//   };

//   Question.prototype.checkAnswer = function (ans, callback) {
//     let sc;

//     if (ans === this.correct) {
//       console.log("Correct answer!");
//       sc = callback(true);
//     } else {
//       console.log("Wrong answer, try again!");
//       sc = callback(false);
//     }
//     this.displayScore(sc);
//   };
//   //let's write a method that will display the score in the console
//   Question.prototype.displayScore = function (score) {
//     console.log("Your current score is " + score);
//     console.log("------------------------------------------");
//   };
//   let q1 = new Question(
//     "Is JS the coolest language in the world?",
//     ["Yes", "No", "Maybe"],
//     0
//   );
//   let q2 = new Question(
//     "who's your tutor?",
//     ["Jonas Schmuda", "Mosh Homedani", "Max Maxiliary"],
//     0
//   );
//   let q3 = new Question(
//     "what's the name of this course?",
//     ["Js course", "The complete JS course", "JS with Mosh"],
//     1
//   );
//   let questions = [q1, q2, q3];
//   //we wanna keep the score and we are going to use the power of closures
//   function score() {
//     let sc = 0;
//     //let's return a function to increace the score if input is correct
//     return function (correct) {
//       if (correct) {
//         sc++;
//       }
//       return sc;
//     };
//   }

//   //let's now call this function and then call it

//   let keepScore = score();
//   //You remember what closures are
//   //first call the score function,defines the variable and then return the function
//   //and it's going to be attached to this variable

//   //let's create a logic to call thses lines of code below over and over
//   //let's call it nextQuestion...
//   function nextQuestion() {
//     let n = Math.floor(Math.random() * questions.length);
//     questions[n].displayQuestion();

//     let answer = prompt("Please select the correct answer: or type 'exit' to discontinue/exit")

//     if (answer !== "exit") {
//       questions[n].checkAnswer(parseInt(answer), keepScore);
//       nextQuestion();
//     }
//   }
//   nextQuestion();
// })();

// //Export Level of our small quiz app
// //let write another function to do the game logic ask over and over

// //God Abeg

// //Code from chatGpt
// // Function constructor for a Question
// // IIFE(Immediately invoked function expression)
// (function () {
//   let Question = function (question, answers, correctAnswer) {
//     this.question = question;
//     this.answers = answers;
//     this.correctAnswer = correctAnswer;
//   };

//   // Method to display the question and answers
//   Question.prototype.displayQuestion = function () {
//     console.log(this.question);

//     for (let i = 0; i < this.answers.length; i++) {
//       console.log(i + ":" + this.answers[i]);
//     }
//   };

//   // Method to check if the answer is correct
//   Question.prototype.checkAnswer = function (answer) {
//     if (answer === this.correctAnswer) {
//       console.log("yh, you picked the right option");
//     } else {
//       console.log("hey! you're wrong...");
//     }
//   };

//   // Create a couple of questions
//   let q1, q2, q3, questions, randomQuestion, userAnswer;
//   q1 = new Question(
//     "what's the name of your tutor?",
//     ["Jonas", "Homedani", "Segun"],
//     0
//   );

//   q2 = new Question(
//     "what's the name of your office?",
//     ["Paystack", "Sidmach", "Microsoft"],
//     1
//   );

//   q3 = new Question(
//     "what's the name of your girlfriend?"[("Emily", "Starr", "Elizabeth")],
//     2
//   );

//   // Store questions in an array
//   questions = [q1, q2, q3];
//   // Select a random question and display it
//   randomQuestion = Math.floor(Math.random() * questions.length);
//   questions[randomQuestion].displayQuestion();
//   // Prompt user for the correct answer
//   userAnswer = parseInt(prompt("Please enter the right option: "));
//   // Check if the answer is correct
//   questions[randomQuestion].checkAnswer(userAnswer);

// })();

// //God Abeg

// //IIFE
// //Immediately Invoked function expression
// (function () {
//   //Create a function constructor
//   let Question = function (question, answers, correctAnswer) {
//     this.question = question;
//     this.answers = answers;
//     this.correctAnswer = correctAnswer;
//   };

//   // Method to display the question and answers
//   Question.prototype.displayQuestion = function () {
//     console.log(this.question);

//     for (let i = 0; i < this.answers.length; i++) {
//       console.log(i + " : " + this.answers[i]);
//     }
//   };
//   // Method to check if the answer is correct
//   Question.prototype.checkAnswer = function (answer, callback) {
//     let sc;
//     if (answer === this.correctAnswer) {
//       console.log("You entered " + userAnswer + " And its the Correct Answer!");
//       sc = callback(true);
//     } else {
//       console.log("You entered " + userAnswer + " And its a Wrong Answer!");
//       sc = callback(false);
//     }
//     this.displayScore(sc);
//   };
//   //Method to display the score in the console
//   Question.prototype.displayScore = function (score) {
//     console.log("Your current score is: " + score);
//     //then a random seperated line so we have the
//     //question seperated
//     console.log("------------------------------");
//   };

//   // Create a couple of questions and probably add some variable here
//   let q1, q2, q3, questions, randomQuestion, userAnswer;
//   q1 = new Question(
//     "what's your net worth?",
//     ["$10billion", "$100billion dollars", "$500 billion dollars"],
//     2
//   );
//   q2 = new Question(
//     "who's your spouse?",
//     ["Yetunde ", "Felicia Durojaiye Elizabeth ", "Christabel"],
//     1
//   );
//   q3 = new Question(
//     "what's your fav country?",
//     ["U.S.A", "Canada", "Singapor"],
//     0
//   );

//   // Store questions in an array
//   questions = [q1, q2, q3];

//   //let's create a function to keep score if the answer user gave is correct
//   //and to update when user answer is correct
//   function score() {
//     //let's create a variable
//     let sc = 0;
//     return function (correctAnswer) {
//       //to increase the score if answer is correct
//       if (correctAnswer) {
//         sc++;
//       }
//       return sc;
//     };
//   }
//   //let's call the function above and store in a variable

//   let keepScore = score();
//   //let's create a function that's going to do all of
//   //the game logic in for next questions
//   function nextQuestion() {
//     // let's create a function for this next question huh

//     // Select a random question and display it
//     randomQuestion = Math.floor(Math.random() * questions.length);
//     questions[randomQuestion].displayQuestion();
//     // Prompt user for the correct answer
//     userAnswer = prompt(
//       "Please Enter the right option : or type exit to quit! "
//     );

//     //we wanna continue to the next question only if the input from the user ain't "exit"

//     // Now we wanna call this function only if the input
//     // from user is not exit

//     if (userAnswer != "exit") {
//       // Check if the answer is correct
//       questions[randomQuestion].checkAnswer(parseInt(userAnswer), keepScore);

//       //So after we selected our Question,
//       //displayed it,
//       //check the answer,
//       //we wanna ask it again
//       //so let's call the function again

//       nextQuestion();
//     }
//   }

//   nextQuestion();
// })();

// (function () {
//   // Function constructor for a Question
//   function Question(question, answers, correctAnswer) {
//     this.question = question;
//     this.answers = answers;
//     this.correctAnswer = correctAnswer;
//   }

//   // Method to display the question and answers
//   Question.prototype.displayQuestion = function () {
//     console.log(this.question);

//     for (var i = 0; i < this.answers.length; i++) {
//       console.log(i + ': ' + this.answers[i]);
//     }
//   };

//   // Method to check if the answer is correct
//   Question.prototype.checkAnswer = function (answer, callback) {
//     var sc;

//     if (answer === this.correctAnswer) {
//       console.log('Correct answer!');
//       sc = callback(true);
//     } else {
//       console.log('Wrong answer. Try again!');
//       sc = callback(false);
//     }

//     this.displayScore(sc);
//   };

//   // Method to display the current score
//   Question.prototype.displayScore = function (score) {
//     console.log('Your current score is: ' + score);
//     console.log('-------------------------');
//   };

//   // Create a quiz object to encapsulate the game logic
//   var quiz = {
//     questions: [],
//     score: 0,

//     // Method to add questions to the quiz
//     addQuestion: function (question, answers, correctAnswer) {
//       var newQuestion = new Question(question, answers, correctAnswer);
//       this.questions.push(newQuestion);
//     },

//     // Method to run the quiz
//     runQuiz: function () {
//       var currentQuestionIndex;

//       function updateScore(correct) {
//         if (correct) {
//           quiz.score++;
//         }
//         return quiz.score;
//       }

//       for (var i = 0; i < this.questions.length; i++) {
//         currentQuestionIndex = Math.floor(Math.random() * this.questions.length);
//         this.questions[currentQuestionIndex].displayQuestion();

//         var userAnswer = parseInt(prompt('Please select the correct answer (enter the number).'));

//         this.questions[currentQuestionIndex].checkAnswer(userAnswer, updateScore);
//       }

//       this.finalScore();
//     },

//     // Method to display the final score
//     finalScore: function () {
//       console.log('Quiz completed! Your final score is: ' + this.score);
//     },
//   };

//   // Add questions to the quiz
//   quiz.addQuestion('What is the capital of France?', ['Berlin', 'Paris', 'Madrid'], 1);
//   quiz.addQuestion('What is the largest mammal?', ['Elephant', 'Blue Whale', 'Giraffe'], 1);
//   quiz.addQuestion('What is the currency of Japan?', ['Yuan', 'Yen', 'Ringgit'], 1);

//   // Run the quiz
//   quiz.runQuiz();
// })();

/*
// God Abeg
//BUDGET APP

//USING MODULES

//The secret of the module pattern is that
//it return all object containing all
// of the  function that we want to be public
//Plus, Modules can also receive arguments

let budgetController = (function () {
  //writing simple codes
  let x = 23;
  let add = function (a) {
    return x + a;
  };

  return {
    publicTest: function (b) {
      return add(b)
    },
  };
})();

let UIController = (function () {

  //gotta write some code here

})();

let controller = (function (budgetCtrl, UICtrl) {

let z = budgetCtrl.publicTest(5)
return{
  anotherPublic : function(){
    console.log(z)
  }
}

})(budgetController, UIController)


*/

// (function () {
//   function Question(question, answers, correct) {
//     this.question = question;
//     this.answers = answers;
//     this.correct = correct;
//   }
//   Question.prototype.displayQuestion = function () {
//     console.log(this.question);
//     for (let i = 0; i < this.answers.length; i++) {
//       console.log(i + ": " + this.answers[i]);
//     }
//   };

//   Question.prototype.checkAnswer = function (ans, callback) {
//     let sc;

//     if (ans === this.correct) {
//       console.log("Correct answer!");
//       sc = callback(true);
//     } else {
//       console.log("Wrong answer, try again!");
//       sc = callback(false);
//     }
//     this.displayScore(sc);
//   };
//   //let's write a method that will display the score in the console
//   Question.prototype.displayScore = function (score) {
//     console.log("Your current score is " + score);
//     console.log("------------------------------------------");
//   };
//   let q1 = new Question(
//     "Is JS the coolest language in the world?",
//     ["Yes", "No", "Maybe"],
//     0
//   );
//   let q2 = new Question(
//     "who's your tutor?",
//     ["Jonas Schmuda", "Mosh Homedani", "Max Maxiliary"],
//     0
//   );
//   let q3 = new Question(
//     "what's the name of this course?",
//     ["Js course", "The complete JS course", "JS with Mosh"],
//     1
//   );
//   let questions = [q1, q2, q3];
//   //we wanna keep the score and we are going to use the power of closures
//   function score() {
//     let sc = 0;
//     //let's return a function to increace the score if input is correct
//     return function (correct) {
//       if (correct) {
//         sc++;
//       }
//       return sc;
//     };
//   }

//   //let's now call this function and then call it

//   let keepScore = score();
//   //You remember what closures are
//   //first call the score function,defines the variable and then return the function
//   //and it's going to be attached to this variable

//   //let's create a logic to call thses lines of code below over and over
//   //let's call it nextQuestion...
//   function nextQuestion() {
//     let n = Math.floor(Math.random() * questions.length);
//     questions[n].displayQuestion();

//     let answer = prompt("Please select the correct answer: or type 'exit' to discontinue/exit")

//     if (answer !== "exit") {
//       questions[n].checkAnswer(parseInt(answer), keepScore);
//       nextQuestion();
//     }
//   }
//   nextQuestion();
// })();

// //Export Level of our small quiz app
// //let write another function to do the game logic ask over and over

// //IIFE
// //Immediately Invoked function expression

// (function(){

//   //Create a function constructor
//   let Question = function (question, answers, correct) {
//     this.question = question;
//     this.answers = answers;
//     this.correct = correct;
//   };

//   // Method to display the question and answers
//   Question.prototype.displayQuestion = function () {
//     console.log(this.question);
//     for (i = 0; i < this.answers.length; i++) {
//       console.log(i + ":" + this.answers[i]);
//     }
//   };

//   // Method to check if the answer is correct
//   Question.prototype.checkAnswer = function (answer) {
//     if (answer === this.correct) {
//       console.log("User answer = " + userAnswer);
//       console.log("Correct Answer!");
//     } else {
//       console.log("user answer = " + userAnswer);
//       console.log("Wrong Answer!");
//     }
//   };

//   // Create a couple of questions
//   let q1 = new Question(
//     "Is JS the coolest prog. lang. in the world?",
//     ["No", "Yes"],
//     1
//   );
//   let q2 = new Question(
//     "Hope say you know wetin you dey do shaa?",
//     ["Yes", "No"],
//     0
//   );
//   let q3 = new Question(
//     "What does best describe coding",
//     ["Boring", "Hard", "Fun", "Tedious"],
//     2
//   );

//   // Store questions in an array

//   let questions = [q1, q2, q3];

//   // Select a random question and display it

//   let randomQuestion = Math.floor(Math.random() * questions.length);
//   questions[randomQuestion].displayQuestion();

//   // Prompt user for the correct answer

//   userAnswer = parseInt(prompt("Select the right option: "));

//   // Check if the answer is correct

//   questions[randomQuestion].checkAnswer(userAnswer);
//   })()

////
////

/*
//BUDGET CONTROLLER
let budgetController = (function () {
  let Expense = function (id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };
  let Income = function (id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };
  //   let allExpenses = [];
  //   let allIncomes = [];
  //   let totalExpenses = [];
  let data = {
    allItems: {
      exp: [],
      inc: [],
    },
    totals: {
      exp: 0,
      inc: 0,
    },
  };

  return {
    addItem: function (type, des, val) {
      let newItem;
      //   ID = 0;
      if (data.allItems[type].length > 0) {
        ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
      } else {
        ID = 0;
      }
      if ((type = "exp")) {
        newItem = new Expense(ID, des, val);
      } else if (type === "inc") {
        newItem = new Income(ID, des, val);
      }
      data.allItems[type].push(newItem);
      return newItem;
    },

    //
    testing: function () {
      console.log(data);
    },
  };
})();

// UI CONTROLLER
let UIController = (function () {
  let DOMstrings = {
    inputType: ".add__type",
    inputDescription: ".add__description",
    inputValue: ".add__value",
    inputBtn: ".add__btn",
  };
  return {
    getInput: function () {
      return {
        type: document.querySelector(DOMstrings.inputType).value,
        description: document.querySelector(DOMstrings.inputDescription).value,
        value: document.querySelector(DOMstrings.inputValue).value,
      };
    },
    getDomStrings: function () {
      return DOMstrings;
    },
  };
})();

//GLOBAL APP CONTROLLER
let controller = (function (budgetCtrl, UICtrl) {
  let setupEventListeners = function () {
    let DOM = UICtrl.getDomStrings();
    document.querySelector(DOM.inputBtn).addEventListener("click", ctrlAddItem);
    document.addEventListener("keypress", function (event) {
      if (event.keycode === 13 || event.which === 13) {
        ctrlAddItem();
      }
    });
  };

  let ctrlAddItem = function () {
    let input;
    input = UICtrl.getInput();
    newItem = budgetCtrl.addItem(input.type, input.description, input.value);
  };

  return {
    init: function () {
      console.log("Application has started");
      setupEventListeners();
    },
  };
})(budgetController, UIController);

controller.init();

*/

//ORIGINAL CODE FROM GITHUB FOR THE BUDGET APP
/*
HTML
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link
      href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600"
      rel="stylesheet"
      type="text/css"
    />
    <link
      href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css"
      rel="stylesheet"
      type="text/css"
    />
    <link href="favicon.ico" rel="icon" type="image/x-icon" />
    <!-- <link type="text/css" rel="stylesheet" href="styles/style.css" /> -->
    <title>Budget App</title>
  </head>

  <body>
    <div class="top">
      <div class="budget">
        <div class="budget__title">
          Available Budget in
          <span class="budget__title--month"></span>:
        </div>

        <div class="budget__value">0</div>

        <div class="budget__income clearfix">
          <div class="budget__income--text">Income</div>
          <div class="right">
            <div class="budget__income--value">0</div>
            <div class="budget__income--percentage">&nbsp;</div>
          </div>
        </div>

        <div class="budget__expenses clearfix">
          <div class="budget__expenses--text">Expenses</div>
          <div class="right clearfix">
            <div class="budget__expenses--value">0</div>
            <div class="budget__expenses--percentage">0%</div>
          </div>
        </div>
      </div>
    </div>

    <div class="bottom">
      <div class="add">
        <div class="add__container">
          <select class="add__type">
            <option value="income" selected>+</option>
            <option value="expenses">-</option>
          </select>
          <input
            type="text"
            class="add__description"
            placeholder="Add description"
          />
          <input type="number" class="add__value" placeholder="Value" />
          <button class="add__btn">
            <i class="ion-ios-checkmark-outline"></i>
          </button>
        </div>
      </div>

      <div class="container clearfix">
        <div class="income">
          <h2 class="income__title">Income</h2>

          <div class="income__list">
            <!-- income
<div class="item clearfix" id="income-0">
	<div class="item__description">Salary</div>
	<div class="right clearfix">
		<div class="item__value">+ 2,100.00</div>
		<div class="item__delete">
			<button class="item__delete--btn">
				<i class="ion-ios-close-outline"></i>
			</button>
		</div>
	</div>
</div> -->
          </div>
        </div>

        <div class="expenses">
          <h2 class="expenses__title">Expenses</h2>

          <div class="expenses__list">
            <!-- expense
<div class="item clearfix" id="expense-0">
	<div class="item__description">Grocery shopping</div>
	<div class="right clearfix">
		<div class="item__value">- 435.28</div>
		<div class="item__percentage">10%</div>
		<div class="item__delete">
			<button class="item__delete--btn">
				<i class="ion-ios-close-outline"></i>
			</button>
		</div>
	</div>
</div> -->
          </div>
        </div>
      </div>
    </div>

    <script src="index.js"></script>
  </body>
</html>



CSS
/*
/**********************************************
*** GENERAL
**********************************************/
/*
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

.clearfix::after {
	content: '';
	display: table;
	clear: both;
}

body {
	color: #555;
	font-family: Open Sans;
	font-size: 16px;
	position: relative;
	height: 100vh;
	font-weight: 400;
}

.right {
	float: right;
}
.red {
	color: #ff5049 !important;
}
.red-focus:focus {
	border: 1px solid #ff5049 !important;
}

/**********************************************
*** TOP PART
**********************************************/
/*
.top {
	height: 40vh;
	background-image: linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)),
		url('./background.jpg');
	background-size: cover;
	background-position: center;
	position: relative;
}

.budget {
	position: absolute;
	width: 350px;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	color: #fff;
}

.budget__title {
	font-size: 18px;
	text-align: center;
	margin-bottom: 10px;
	font-weight: 300;
}

.budget__value {
	font-weight: 300;
	font-size: 46px;
	text-align: center;
	margin-bottom: 25px;
	letter-spacing: 2px;
}

.budget__income,
.budget__expenses {
	padding: 12px;
	text-transform: uppercase;
}

.budget__income {
	margin-bottom: 10px;
	background-color: #28b9b5;
}

.budget__expenses {
	background-color: #ff5049;
}

.budget__income--text,
.budget__expenses--text {
	float: left;
	font-size: 13px;
	color: #444;
	margin-top: 2px;
}

.budget__income--value,
.budget__expenses--value {
	letter-spacing: 1px;
	float: left;
}

.budget__income--percentage,
.budget__expenses--percentage {
	float: left;
	width: 34px;
	font-size: 11px;
	padding: 3px 0;
	margin-left: 10px;
}

.budget__expenses--percentage {
	background-color: rgba(255, 255, 255, 0.2);
	text-align: center;
	border-radius: 3px;
}

/**********************************************
*** BOTTOM PART
**********************************************/

/***** FORM *****/

/*
.add {
	padding: 14px;
	border-bottom: 1px solid #e7e7e7;
	background-color: #f7f7f7;
}

.add__container {
	margin: 0 auto;
	text-align: center;
}

.add__type {
	width: 55px;
	border: 1px solid #e7e7e7;
	height: 44px;
	font-size: 18px;
	color: inherit;
	background-color: #fff;
	margin-right: 10px;
	font-weight: 300;
	transition: border 0.3s;
}

.add__description,
.add__value {
	border: 1px solid #e7e7e7;
	background-color: #fff;
	color: inherit;
	font-family: inherit;
	font-size: 14px;
	padding: 12px 15px;
	margin-right: 10px;
	border-radius: 5px;
	transition: border 0.3s;
}

.add__description {
	width: 400px;
}
.add__value {
	width: 100px;
}

.add__btn {
	font-size: 35px;
	background: none;
	border: none;
	color: #28b9b5;
	cursor: pointer;
	display: inline-block;
	vertical-align: middle;
	line-height: 1.1;
	margin-left: 10px;
}

.add__btn:active {
	transform: translateY(2px);
}

.add__type:focus,
.add__description:focus,
.add__value:focus {
	outline: none;
	border: 1px solid #28b9b5;
}

.add__btn:focus {
	outline: none;
}

/***** LISTS *****/

/*
.container {
	width: 1000px;
	margin: 60px auto;
}

.income {
	float: left;
	width: 475px;
	margin-right: 50px;
}

.expenses {
	float: left;
	width: 475px;
}

h2 {
	text-transform: uppercase;
	font-size: 18px;
	font-weight: 400;
	margin-bottom: 15px;
}

.icome__title {
	color: #28b9b5;
}
.expenses__title {
	color: #ff5049;
}

.item {
	padding: 13px;
	border-bottom: 1px solid #e7e7e7;
}

.item:first-child {
	border-top: 1px solid #e7e7e7;
}
.item:nth-child(even) {
	background-color: #f7f7f7;
}

.item__description {
	float: left;
}

.item__value {
	float: left;
	transition: transform 0.3s;
}

.item__percentage {
	float: left;
	margin-left: 20px;
	transition: transform 0.3s;
	font-size: 11px;
	background-color: #ffdad9;
	padding: 3px;
	border-radius: 3px;
	width: 32px;
	text-align: center;
}

.income .item__value,
.income .item__delete--btn {
	color: #28b9b5;
}

.expenses .item__value,
.expenses .item__percentage,
.expenses .item__delete--btn {
	color: #ff5049;
}

.item__delete {
	float: left;
}

.item__delete--btn {
	font-size: 22px;
	background: none;
	border: none;
	cursor: pointer;
	display: inline-block;
	vertical-align: middle;
	line-height: 1;
	display: none;
}

.item__delete--btn:focus {
	outline: none;
}
.item__delete--btn:active {
	transform: translateY(2px);
}

.item:hover .item__delete--btn {
	display: block;
}
.item:hover .item__value {
	transform: translateX(-20px);
}
.item:hover .item__percentage {
	transform: translateX(-20px);
}

.unpaid {
	background-color: #ffdad9 !important;
	cursor: pointer;
	color: #ff5049;
}

.unpaid .item__percentage {
	box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.1);
}
.unpaid:hover .item__description {
	font-weight: 900;
}

*/

/*
JAVASCRIPT
// App modules used to create a separation of concerns (simple MVC)
// Acts as a simplified model
const budgetController = (() => {
	const Expense = function(id, desc, value) {
		this.id = id;
		this.desc = desc;
		this.value = value;
	};

	const Income = function(id, desc, value) {
		this.id = id;
		this.desc = desc;
		this.value = value;
	};

	const calculateTotal = type => {
		let total = data.items[type].reduce((sum, item) => sum + item.value, 0);
		data.totals[type] = total;
	};

	const data = {
		items: {
			expenses: [],
			income: []
		},
		totals: {
			expenses: 0,
			income: 0
		},
		budget: 0,
		percent: -1
	};

	return {
		addItem: (type, desc, value) => {
			let newItem, id;
			// Generate a random ID
			id = (
				Date.now().toString(36) +
				Math.random()
					.toString(36)
					.substr(2, 5)
			).toUpperCase();
			// Create a new item based on type
			type === 'expenses'
				? (newItem = new Expense(id, desc, value))
				: (newItem = new Income(id, desc, value));

			// Push item into the data structure
			data.items[type].push(newItem);
			return newItem;
		},
		deleteItem: attr => {
			const type = attr.split('-')[0];
			const id = attr.split('-')[1];
			// The find method would be more efficient but it is less compatible
			const removeIndex = data.items[type].map(item => item.id).indexOf(id);

			data.items[type].splice(removeIndex, 1);
		},
		calculateBudget: () => {
			// Calculate total income and expenses
			calculateTotal('expenses');
			calculateTotal('income');
			// Calculate the budget: income - expenses
			data.budget = data.totals.income - data.totals.expenses;
			// Calculate the percentage of income spent
			if (data.totals.income > 0) {
				data.percent = Math.round(
					(data.totals.expenses / data.totals.income) * 100
				);
			} else {
				data.percent = -1;
			}
		},
		getBudget: () => {
			return {
				budget: data.budget,
				totalIncome: data.totals.income,
				totalExpenses: data.totals.expenses,
				percent: data.percent
			};
		},
		testing: () => {
			console.log(data);
		}
	};
})();

// Handles the applications view
const UIController = (() => {
	const elements = {
		inputType: '.add__type',
		inputDesc: '.add__description',
		inputValue: '.add__value',
		inputBtn: '.add__btn',
		budgetLbl: '.budget__value',
		incomeLbl: '.budget__income--value',
		expensesLbl: '.budget__expenses--value',
		percentLbl: '.budget__expenses--percentage',
		container: '.container',
		expenseListItems: '.expenses__list > div',
		dateLbl: '.budget__title--month'
	};

	const formatNumber = num => {
		return num.toLocaleString(undefined, {
			minimumFractionDigits: 2,
			maximumFractionDigits: 2
		});
	};

	return {
		getInput: () => {
			return {
				type: document.querySelector(elements.inputType).value, // Either 'income' or 'expenses'
				desc: document.querySelector(elements.inputDesc).value,
				value: parseFloat(document.querySelector(elements.inputValue).value)
			};
		},
		addListItem: (item, type) => {
			// Create HTML string for income / expense item
			let html = `
			<div class="item clearfix" id="${type}-${item.id}">
				<div class="item__description">${item.desc}</div>
				<div class="right clearfix">
					<div class="item__value" data-value="${item.value}">${formatNumber(
				item.value
			)}</div>
					${type === 'expenses' ? '<div class="item__percentage">0%</div>' : ''}
					<div class="item__delete">
						<button class="item__delete--btn">
							<i class="ion-ios-close-outline" data-item="${type}-${item.id}">
							</i>
						</button>
					</div>
				</div>
			</div>
			`;
			// Insert HTML into the DOM
			document
				.querySelector(`.${type}__list`)
				.insertAdjacentHTML('beforeend', html);
		},
		displayBudget: obj => {
			document.querySelector(elements.budgetLbl).textContent = formatNumber(
				obj.budget
			);
			document.querySelector(elements.incomeLbl).textContent = formatNumber(
				obj.totalIncome
			);
			document.querySelector(elements.expensesLbl).textContent = formatNumber(
				obj.totalExpenses
			);
			let percent = document.querySelector(elements.percentLbl);
			if (obj.percent >= 0) {
				percent.textContent = obj.percent + '%';
			} else {
				percent.textContent = '---';
			}
		},
		displayPercents: totalIncome => {
			const listItems = document.querySelectorAll(elements.expenseListItems);
			listItems.forEach(item => {
				const expense = item.querySelector('.item__value');
				const percent = item.querySelector('.item__percentage');
				if (totalIncome > 0) {
					percent.textContent =
						Math.round((expense.dataset.value / totalIncome) * 100) + '%';
				} else {
					percent.textContent = '---';
				}
			});
		},
		deleteListItem: id => {
			document.getElementById(id).remove();
		},
		getElements: () => {
			return elements;
		},
		displayDate: () => {
			const monthNames = [
				'January',
				'February',
				'March',
				'April',
				'May',
				'June',
				'July',
				'August',
				'September',
				'October',
				'November',
				'December'
			];
			const dateElement = document.querySelector(elements.dateLbl);
			const date = new Date();
			dateElement.textContent =
				monthNames[date.getMonth()] + ' ' + date.getFullYear();
		},
		changedType: () => {
			const inputs = document.querySelectorAll(
				elements.inputType +
					', ' +
					elements.inputDesc +
					', ' +
					elements.inputValue
			);

			inputs.forEach(input => {
				input.classList.toggle('red-focus');
			});

			document.querySelector(elements.inputBtn).classList.toggle('red');
		},
		clearInputs: () => {
			// Converted node list into an array to demonstrate using the call method on the Array prototype
			const inputs = document.querySelectorAll(
				elements.inputDesc + ', ' + elements.inputValue
			);
			const inputsArr = Array.prototype.slice.call(inputs);
			inputsArr.forEach(input => {
				input.value = '';
			});
			// Set focus on first input element
			inputsArr[0].focus();
		}
	};
})();

// Serves as the controller of the application
const controller = ((budgetCtrl, UICtrl) => {
	const setupEventListeners = () => {
		const UIElements = UICtrl.getElements();
		document
			.querySelector(UIElements.inputBtn)
			.addEventListener('click', ctrlAddItem);

		document.addEventListener('keypress', e => {
			// 'which' is used to support older browsers
			if (e.keyCode === 13 || e.which === 13) {
				ctrlAddItem();
			}
		});

		document
			.querySelector(UIElements.container)
			.addEventListener('click', ctrlDeleteItem);

		document
			.querySelector(UIElements.inputType)
			.addEventListener('change', UICtrl.changedType);
	};

	const updateBudget = () => {
		// 1. Recalculate the budget
		budgetCtrl.calculateBudget();
		// 2. Return the budget
		const budget = budgetCtrl.getBudget();
		// 3. Display the budget in the UI
		UICtrl.displayBudget(budget);
	};

	const updatePercents = () => {
		// 1. Get total income from budget
		const totalIncome = budgetCtrl.getBudget().totalIncome;
		// 2. Update UI with new percentages
		UICtrl.displayPercents(totalIncome);
	};

	const ctrlAddItem = () => {
		// 1. Get field input value
		const input = UICtrl.getInput();
		if (input.desc === '' || isNaN(input.value) || input.value === 0) {
			alert(
				'Please add description and valid dollar amount before submitting.'
			);
			return false;
		}
		// 2. Add item to the budget controller
		const newItem = budgetCtrl.addItem(input.type, input.desc, input.value);
		// 3. Add item to the UI
		UICtrl.addListItem(newItem, input.type);
		// 4. Clear input fields
		UICtrl.clearInputs();
		// 5. Calculate and update budget
		updateBudget();
		// 6. Calculate and update percentages
		updatePercents();
	};

	const ctrlDeleteItem = e => {
		if (e.target && e.target.nodeName === 'I') {
			// Get ID stored in a data attribute on the delete icon element
			const attr = e.target.dataset.item;
			// Delete node from the DOM
			UICtrl.deleteListItem(attr);
			// Delete item from budget array then recalculate and update budget
			budgetCtrl.deleteItem(attr);
			updateBudget();
			// recalculate and update percentages
			updatePercents();
		}
	};

	return {
		init: () => {
			console.log('Start');
			UICtrl.displayDate();
			setupEventListeners();
		}
	};
})(budgetController, UIController);

controller.init();



*/

/*

from git



// App modules used to create a separation of concerns (simple MVC)
// Acts as a simplified model
const budgetController = (() => {
	const Expense = function(id, desc, value) {
		this.id = id;
		this.desc = desc;
		this.value = value;
	};

	const Income = function(id, desc, value) {
		this.id = id;
		this.desc = desc;
		this.value = value;
	};

	const calculateTotal = type => {
		let total = data.items[type].reduce((sum, item) => sum + item.value, 0);
		data.totals[type] = total;
	};

	const data = {
		items: {
			expenses: [],
			income: []
		},
		totals: {
			expenses: 0,
			income: 0
		},
		budget: 0,
		percent: -1
	};

	return {
		addItem: (type, desc, value) => {
			let newItem, id;
			// Generate a random ID
			id = (
				Date.now().toString(36) +
				Math.random()
					.toString(36)
					.substr(2, 5)
			).toUpperCase();
			// Create a new item based on type
			type === 'expenses'
				? (newItem = new Expense(id, desc, value))
				: (newItem = new Income(id, desc, value));

			// Push item into the data structure
			data.items[type].push(newItem);
			return newItem;
		},
		deleteItem: attr => {
			/*

The split() method splits a string into an array of substrings. The split() method returns the new array. The split() method does not change the original string. If (" ") is used as separator, the string is split between words.
			*/
/*
			const type = attr.split('-')[0];
			const id = attr.split('-')[1];
			// The find method would be more efficient but it is less compatible
			const removeIndex = data.items[type].map(item => item.id).indexOf(id);

			data.items[type].splice(removeIndex, 1);
		},
		calculateBudget: () => {
			// Calculate total income and expenses
			calculateTotal('expenses');
			calculateTotal('income');
			// Calculate the budget: income - expenses
			data.budget = data.totals.income - data.totals.expenses;
			// Calculate the percentage of income spent
			if (data.totals.income > 0) {
				data.percent = Math.round(
					(data.totals.expenses / data.totals.income) * 100
				);
			} else {
				data.percent = -1;
			}
		},
		getBudget: () => {
			return {
				budget: data.budget,
				totalIncome: data.totals.income,
				totalExpenses: data.totals.expenses,
				percent: data.percent
			};
		},
		testing: () => {
			console.log(data);
		}
	};
})();

// Handles the applications view
const UIController = (() => {
	const elements = {
		inputType: '.add__type',
		inputDesc: '.add__description',
		inputValue: '.add__value',
		inputBtn: '.add__btn',
		budgetLbl: '.budget__value',
		incomeLbl: '.budget__income--value',
		expensesLbl: '.budget__expenses--value',
		percentLbl: '.budget__expenses--percentage',
		container: '.container',
		expenseListItems: '.expenses__list > div',
		dateLbl: '.budget__title--month'
	};

	const formatNumber = num => {
		return num.toLocaleString(undefined, {
			minimumFractionDigits: 2,
			maximumFractionDigits: 2
		});
	};

	return {
		getInput: () => {
			return {
				type: document.querySelector(elements.inputType).value, // Either 'income' or 'expenses'
				desc: document.querySelector(elements.inputDesc).value,
				value: parseFloat(document.querySelector(elements.inputValue).value)
			};
		},
		addListItem: (item, type) => {
			// Create HTML string for income / expense item
			let html = `
			<div class="item clearfix" id="${type}-${item.id}">
				<div class="item__description">${item.desc}</div>
				<div class="right clearfix">
					<div class="item__value" data-value="${item.value}">${formatNumber(
				item.value
			)}</div>
					${type === 'expenses' ? '<div class="item__percentage">0%</div>' : ''}
					<div class="item__delete">
						<button class="item__delete--btn">
							<i class="ion-ios-close-outline" data-item="${type}-${item.id}">
							</i>
						</button>
					</div>
				</div>
			</div>
			`;
			// Insert HTML into the DOM
			document
				.querySelector(`.${type}__list`)
				.insertAdjacentHTML('beforeend', html);
		},
		displayBudget: obj => {
			document.querySelector(elements.budgetLbl).textContent = formatNumber(
				obj.budget
			);
			document.querySelector(elements.incomeLbl).textContent = formatNumber(
				obj.totalIncome
			);
			document.querySelector(elements.expensesLbl).textContent = formatNumber(
				obj.totalExpenses
			);
			let percent = document.querySelector(elements.percentLbl);
			if (obj.percent >= 0) {
				percent.textContent = obj.percent + '%';
			} else {
				percent.textContent = '---';
			}
		},
		displayPercents: totalIncome => {
			const listItems = document.querySelectorAll(elements.expenseListItems);
			listItems.forEach(item => {
				const expense = item.querySelector('.item__value');
				const percent = item.querySelector('.item__percentage');
				if (totalIncome > 0) {
					percent.textContent =
						Math.round((expense.dataset.value / totalIncome) * 100) + '%';
				} else {
					percent.textContent = '---';
				}
			});
		},
		deleteListItem: id => {
			document.getElementById(id).remove();
		},
		getElements: () => {
			return elements;
		},
		displayDate: () => {
			const monthNames = [
				'January',
				'February',
				'March',
				'April',
				'May',
				'June',
				'July',
				'August',
				'September',
				'October',
				'November',
				'December'
			];
			const dateElement = document.querySelector(elements.dateLbl);
			const date = new Date();
			dateElement.textContent =
				monthNames[date.getMonth()] + ' ' + date.getFullYear();
		},
		changedType: () => {
			const inputs = document.querySelectorAll(
				elements.inputType +
					', ' +
					elements.inputDesc +
					', ' +
					elements.inputValue
			);

			inputs.forEach(input => {
				input.classList.toggle('red-focus');
			});

			document.querySelector(elements.inputBtn).classList.toggle('red');
		},
		clearInputs: () => {
			// Converted node list into an array to demonstrate using the call method on the Array prototype
			const inputs = document.querySelectorAll(
				elements.inputDesc + ', ' + elements.inputValue
			);
			const inputsArr = Array.prototype.slice.call(inputs);
			inputsArr.forEach(input => {
				input.value = '';
			});
			// Set focus on first input element
			inputsArr[0].focus();
		}
	};
})();

// Serves as the controller of the application
const controller = ((budgetCtrl, UICtrl) => {
	const setupEventListeners = () => {
		const UIElements = UICtrl.getElements();
		document
			.querySelector(UIElements.inputBtn)
			.addEventListener('click', ctrlAddItem);

		document.addEventListener('keypress', e => {
			// 'which' is used to support older browsers
			if (e.keyCode === 13 || e.which === 13) {
				ctrlAddItem();
			}
		});

		document
			.querySelector(UIElements.container)
			.addEventListener('click', ctrlDeleteItem);

		document
			.querySelector(UIElements.inputType)
			.addEventListener('change', UICtrl.changedType);
	};

	const updateBudget = () => {
		// 1. Recalculate the budget
		budgetCtrl.calculateBudget();
		// 2. Return the budget
		const budget = budgetCtrl.getBudget();
		// 3. Display the budget in the UI
		UICtrl.displayBudget(budget);
	};

	const updatePercents = () => {
		// 1. Get total income from budget
		const totalIncome = budgetCtrl.getBudget().totalIncome;
		// 2. Update UI with new percentages
		UICtrl.displayPercents(totalIncome);
	};

	const ctrlAddItem = () => {
		// 1. Get field input value
		const input = UICtrl.getInput();
		if (input.desc === '' || isNaN(input.value) || input.value === 0) {
			alert(
				'Please add description and valid dollar amount before submitting.'
			);
			return false;
		}
		// 2. Add item to the budget controller
		const newItem = budgetCtrl.addItem(input.type, input.desc, input.value);
		// 3. Add item to the UI
		UICtrl.addListItem(newItem, input.type);
		// 4. Clear input fields
		UICtrl.clearInputs();
		// 5. Calculate and update budget
		updateBudget();
		// 6. Calculate and update percentages
		updatePercents();
	};

	const ctrlDeleteItem = e => {
		if (e.target && e.target.nodeName === 'I') {
			// Get ID stored in a data attribute on the delete icon element
			const attr = e.target.dataset.item;
			// Delete node from the DOM
			UICtrl.deleteListItem(attr);
			// Delete item from budget array then recalculate and update budget
			budgetCtrl.deleteItem(attr);
			updateBudget();
			// recalculate and update percentages
			updatePercents();
		}
	};

	return {
		init: () => {
			console.log('Start');
			UICtrl.displayDate();
			setupEventListeners();
		}
	};
})(budgetController, UIController);

controller.init();


*/

/*  // God Abeg
// //BUDGET APP

// //USING MODULES

// //The secret of the module pattern is that
// //it return all object containing all
// // of the  function that we want to be public
// //Plus, Modules can also receive arguments

// //BUDGET CONTROLLER
// let budgetController = (function () {
//   //we know that each new item will hava a description and a value
//   //writing simple codes
//   //how would you store this kind of data
//   //we create custom data types for income then for expenses

//   let Expense = function (id, description, value) {
//     this.id = id;
//     this.description = description;
//     this.value = value;
//   };
//   let Income = function (id, description, value) {
//     this.id = id;
//     this.description = description;
//     this.value = value;
//   };
//   //The "new" keyword creates a new empty object and then call the expense function
//   //and points the this keyword of that function to the new object that was created
//   //when we then set properties on the this keyword, we automatic set them
//   //on the new object that was created here
//   //and that's why function constructor works

//   //let's now think abuot the data structures
//   //Remember the budget controller keeps tracks of all income and expenses
//   //of the budget itself
//   //also of the percentages
//   //let's store it in an array

//   let data = {
//     allItems: {
//       exp: [],
//       inc: [],
//     },
//     totals: {
//       exp: 0,
//       inc: 0,
//     },
//   };
//   return {
//     addItem: function (type, des, val) {
//       let id;
//       let newItem;

//       //From chat gpt the next three lines
//       // Initialize array if undefined
//       // if (!data.allItems[type]) {
//       //   data.allItems[type] = [];
//       // }
//       //ID = last ID + 1
//       // Create new ID
//       //debugger;
//       id = data.allItems[type] || []
//       id = data.allItems[type].length > 0 ? data.allItems[type][data.allItems[type].length - 1].id + 1 : 0;

//       // if (data.allItems[type].length > 0) {
//       //   id = data.allItems[type][data.allItems[type].length - 1].id + 1;
//       // } else {
//       //   id = 0;
//       // }
//       // debugger;
//       // Create new item based on "inc" or "exp" type
//       if (type === "exp") {
//         newItem = new Expense(id, des, val);
//       } else if (type === "inc") {
//         newItem = new Income(id, des, val);
//       }

//       // Push it to our data structures
//       data.allItems[type].push(newItem);

//       // Finally return the new element
//       return newItem;
//     },
//     testing: function () {
//       console.log(data);
//     },
//   };
// })();

// //You can use this just for testing but we wanna keep it private

// // let Expense = function (id, description, value) {
// //   this.id = id;
// //   this.description = description;
// //   this.value = value;
// // };

// //blessing fly pay
// //borrored #19200
// //

// //UI CONTROLLER
// let UIController = (function () {
//   ///let's create an object from where we can fetch our classes from
//   let DOMstrings = {
//     inputType: ".add__type",
//     inputDescription: ".add__description",
//     inputValue: ".add__value",
//     inputBtn: ".add__btn",
//     incomeContainer: ".income__list",
//     expensesContainer: ".expenses__list",
//   };
//   //gotta write some code here
//   return {
//     getInput: function () {
//       return {
//         type: document.querySelector(DOMstrings.inputType).value, //Will either be inc or exp
//         description: document.querySelector(DOMstrings.inputDescription).value,
//         value: document.querySelector(DOMstrings.inputValue).value,
//       };
//     },
//     // addListItem: function (obj, type) {
//     //   let html, newHtml;
//     //   //Create HTML string with placeholder text
//     //   if (type === "inc") {
//     //     element = DOMstrings.incomeContainer;
//     //     html =
//     //       '<div class="item clearfix" id="income-%id%"><div class="item__description">%description%Salary</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete">button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
//     //   } else if (type == "exp") {
//     //     element = DOMstrings.expensesContainer;
//     //     html =
//     //       '<div class="item clearfix" id="expense-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete">button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
//     //   }

//     //   //Replace the placeholdr text with some actual data
//     //   newHtml = html.replace("%id", obj.id);
//     //   newHtml = newHtml.replace("%description", obj.description);
//     //   newHtml = newHtml.replace("%value", obj.value);
//     //   //Insert the HTML into the DOM
//     //   document.querySelector(element).insertAdjacentHTML("beforeend", newHtml);
//     // },
//     getDOMstrings: function () {
//       return DOMstrings;
//     },
//   };
// })();

// //GLOBAL APP CONTROLLER
// let controller = (function (budgetCtrl, UICtrl) {
//   //let's create a function for event listerner

//   function setupEventListeners() {
//     //let's get our dom strings
//     let DOM = UICtrl.getDOMstrings();

//     document.querySelector(DOM.inputBtn).addEventListener("click", ctrlAddItem);

//     //Now we wanna allow user to alternatively use the enter key on a
//     //keyboard
//     //we're not selecting anything but adding it to the global space
//     //as it happens any where in the document
//     document.addEventListener("keypress", function (event) {
//       //some browsers don't use the keycode property/method instead "which"
//       if (event.keyCode === 13 || event.which === 13) {
//         // console.log(event);

//         ctrlAddItem();
//       }
//     });
//   }

//   //The controller is a place wh ere we call other modules
//   //let's rather create a custom function for the enter event
//   let ctrlAddItem = function () {
//     let input;
//     let newItem;
//     // 1. Get the field input data
//     input = UICtrl.getInput();
//     console.log(input);

//     //2. Add the item to the budget controller
//     newItem = budgetCtrl.addItem(input.type, input.description, input.value);
//     //3, Add the item to the UI
//     // UICtrl.addListItem(newItem, input.type);
//     //4. Calculate the budget

//     //5. Display the budget on the UI
//     // console.log("This button was clicked");
//   };
//   //Since we want it to be public , we wanna return it in an object
//   return {
//     init: function () {
//       console.log("Application has started");
//       setupEventListeners();
//     },
//   };
// })(budgetController, UIController);
// //our event listener is going to be setup as soon as we call the init function and outside of the controller
// controller.init();
*/

/*  // //BUDGET CONTROLLER
// let budgetController = (function () {
//   let Expense = function (id, description, value) {
//     this.id = id;
//     this.description = description;
//     this.value = value;
//   };
//   let Income = function (id, description, value) {
//     this.id = id;
//     this.description = description;
//     this.value = value;
//   };
//   let data = {
//     allItems: {
//       exp: [],
//       inc: [],
//     },
//     totals: {
//       exp: 0,
//       inc: 0,
//     },
//   };

//   return {
//     addItem: function (type, des, val) {
//       let newItem;
//       let ID;

//       if (!data.allItems[type]) {
//         data.allItems[type] = [];
//       }

//       ID = data.allItems[type].length > 0 ? data.allItems[type][data.allItems[type].length - 1].id + 1 : 0;
 


//       if (type === "exp") {
//         newItem = new Expense(ID, des, val);
//       } else if (type === "inc") {
//         newItem = new Income(ID, des, val);
//       }

//       data.allItems[type].push(newItem);
//       return newItem;
      
      
//     },

//     testing: () => {
//       console.log(data);
//     },
   

//   };
// })();

// // UI CONTROLLER
// let UIController = (function () {
//   let DOMstrings = {
//     inputType: ".add__type",
//     inputDescription: ".add__description",
//     inputValue: ".add__value",
//     inputBtn: ".add__btn",
//   };
//   return {
//     getInput: function () {
//       return {
//         type: document.querySelector(DOMstrings.inputType).value,
//         description: document.querySelector(DOMstrings.inputDescription).value,
//         value: document.querySelector(DOMstrings.inputValue).value,
//       };
//     },
//     getDOMstrings: function () {
//       return DOMstrings;
//     },
//   };
// })();

// //GLOBAL APP CONTROLLER
// let controller = (function (budgetCtrl, UICtrl) {
//   let setupEventListeners = function () {
//     let DOM = UICtrl.getDOMstrings();
//     document.querySelector(DOM.inputBtn).addEventListener("click", ctrlAddItem);
//     document.addEventListener("keypress", function (event) {
//       if (event.keyCode === 13 || event.which === 13) {
//         ctrlAddItem();
//       }
//     });
//   };

//   let ctrlAddItem = function () {
//     let input;
//     let newItem;
//     input = UICtrl.getInput();
//     newItem = budgetCtrl.addItem(input.type, input.description, input.value);
//   };

//   return {
//     init: function () {
//       console.log("Application has started");
//       setupEventListeners();
//     },
//   };
// })(budgetController, UIController);

// controller.init();
// /*addItem: (type, des, val) => {
//   let newItem;

//   // Ensure allItems[type] is initialized as an array
//   data.allItems[type] = data.allItems[type] || [];

//   // Check if data.allItems[type] is an array and has length property
//   let ID =
//     Array.isArray(data.allItems[type]) && data.allItems[type].length > 0
//       ? data.allItems[type][data.allItems[type].length - 1].id + 1
//       : 0;

//   if (type === "exp") {
//     newItem = new Expense(ID, des, val);
//   } else if (type === "inc") {
//     newItem = new Income(ID, des, val);
//   }

//   data.allItems[type].push(newItem);
//   return newItem;
// },
// */

/*
//Destructuring
// A way to extract data from a data structure

//ES5
let john, name, age;
john = ["john", 26];
name = john[0];
age = 26;
console.log(john);

//ES6
const [names, ages] = ["john", 27, "er"];

console.log(names, ages);

const obj = {
  firstName: "John",
  lastName: "Smith",
};
const { firstName, lastName } = obj;

const { firstName: a, lastName: b } = obj;
console.log(firstName, lastName);

calcAgeRetirement = (year) => {
  //
  const agess = new Date().getFullYear() - year;
  return [agess, 65 - agess];
};
const[agess,retirement]= calcAgeRetirement(1994)
console.log(agess, retirement);



*/

/*


//LET'S PLAY WITH SIMPLY LOOP WITH ARRAY

// const boxes = document.querySelectorAll(".box");
//we already know that querySelectorAll doesn't return an array but a node list
//so we need to convert/transform  it into an array

//ES5
// let boxesArr5 = Array.prototype.slice.call(boxes)

//let's say we wanna change all the boxes to blue background color
//we can use the for each method

// boxesArr5.forEach((element) => {
//   element.style.backgroundColor = "dodgerblue";
// });

//ES5
//let's do simply for loop here
// for (let i = 0; i < boxesArr5.length; i++) {
//   if (boxesArr5[i].className === "box blue") {
//     continue;
//   }
//   boxesArr5[i].textContent = "I changed to blue"
// }

//let's play aagin with some age here

// let ages = [15, 6, 10, 8, 17, 25];
// let fullAge = ages.map((element) => {
//   return element >= 18;
// });
// console.log(fullAge);
// //let's find out the position of the fullAge or true  element in the array
// console.log(fullAge.indexOf(true));
// //what if we wanna see how old the person is then we need to retrieve the exact element from the array

// console.log(ages[fullAge.indexOf(true)]);

//let's see ES6
//what this code below simply does is to transform the nodelist
//in the boxes into an array
//Remember when we wanna loop over an array we use map or foreach method
//just that we cannot break from them or use the continue statement

//longer
// const boxesArr6 = Array.from(boxes);
// boxesArr6.forEach((element) => {
//   element.style.background = "rgb(162, 162, 196)";
// });

//shorter
// Array.from(boxes).forEach((element) => {
//   element.style.color = "#fff";
// });

//let's explore with the "for of" in ES6
// const boxesArr6 = Array.from(boxes)
// for (const element of boxesArr6) {
// 	//
// 	if(element.className === "box blue"){
// 		continue
// 	}element.textContent = "omo"
// }

//Alternatively::
// const boxesArr6 = Array.from(boxes);
// for (const element of boxesArr6) {
//   //
//   if (element.className.includes("blue")) {
//     continue;
//   }
//   element.textContent = "omo";
//}

//let's play aagin with some age here but in ES6
//let's try this with a couple of new method
//And this methods are defined-index and define-function
//let's now start by using the define index method
//And this method , we can pass a call back method into it and it then gonna return
//us the index of the array when the call back function returns true

// console.log(ages.findIndex((element) => element >= 18));

// // //what if we wanna see how old the person is then we need to retrieve the exact element from the array
// console.log(ages.find(element => element >=18));

*/

//THE SPREAD OPERATOR
// //convenient way to expand element in an array

// addFourAges = (a, b, c, d) => {
//   //
//   return a + b + c + d;
// };

// let sum1 = addFourAges(18, 30, 12, 21);
// console.log(sum1);

// //ES5
// let ages = [18, 30, 12, 21];
// let sum2 = addFourAges.apply(null, ages);
// console.log(sum2);

// //ES6

// const sum3 = addFourAges(...ages);
// console.log(sum3);

// //let's say we have two array

// const familySmith = ["John", "Jane", "Bob"];
// const familyMiller = ["Mary", "Bob", "Ann"];
// const bigFamily = [...familySmith, "Lily", ...familyMiller];
// console.log(bigFamily);

// //we can use the spread operator on not just array but also nodelist
// //let's play with the header asap
// //remenber the node list is what the querySelectorAll returns
// const h = document.querySelector("h2");
// const boxes = document.querySelectorAll(".box");

// //Any where we have a node list , we can use the spread operator
// const all = [h, ...boxes];

// const show = Array.from(all);
// show.forEach((element) => {
//   element.style.background = "cyan";
// });
// //Alternatively

// Array.from(all).forEach(element => {
//   element.style.color = "purple"
// });

// REST PARAMETERS ALLOWS US TO PASS ARBITUARY NUMBERS OF ARGUMENT INTO A FUNCTION
//AND USE THE ARGUMENT IN THAT FUNCTION
//LOOKS LIKE SPREAD OPERATOR BUT THEY ARE COMPLETELY DIFFERENT
//SPREAD OPERATOR IS USED IN A FUNCTION CALL WHILE REST PARAMETERS IS USED IN FUNCTION DECLARATION
//THE SPREAD OPERATOR BASICLLY TAKES A ARRAY AND TRANSFROM THEM INTO A SINGLE VALUE
//WHILE THE REST PARAMETERS RECEIVE A SET OF SINGLE VALUES, AND TRANSFORM THEM INTO AN ARRAY WHEN WE CALL
//A FUNCTION WITH MULTIPLE PARAMETERS

//ES5
// function isFullAge5() {
//   //
//   //console.log(arguments);//it's still an object in the console

//   //let's say we wanna transform it into an array
//   let argsArr = Array.prototype.slice.call(arguments);
//   //so now we are ready to loop through and check for full age
//   argsArr.forEach((element) => {
//     console.log(2023 - element >= 18);
//   });
// }
// isFullAge5(1990, 2020, 1999);
// isFullAge5(1999, 2017, 2001);

//TAKE NOTE
//Normal function returns true or false values
//while arrow function returns number values
//ES5
// function isFullAge5(limit) {
//   let argsArr = Array.prototype.slice.call(arguments, 1);
//   argsArr.forEach(function (element) {
//     console.log(2023 - element >= limit);
//   });
// }
// isFullAge5(18, 2000, 2004, 2007);
//let's alternatively do this in ES6
/*

const isfull = () => {
  console.log(arguments);
};
isfull(1991, 1992, 1995);


Using arguments directly inside an arrow function will 
not work as expected. Arrow functions do not have their
own arguments object. If you try to run this code,
you'll likely encounter
n error like "Uncaught ReferenceError: arguments is not defined."

If you need to access the arguments in an arrow function,
you should use the rest parameters syntax:


const isfull = (...args) => {
    console.log(args);
}

isfull(1991, 1992, 1995);


*/

//ES6
// function isFullAge6(...years) {
//   //
//   // console.log(years);

//   years.forEach((element) => console.log(2023 - element) >= 18);
// }
// isFullAge6(1999, 2008, 2002, 1996);

// function isFullAge6(limit, ...years) {
//   years.forEach((element) => console.log(2023 - element >= limit));
// }
// isFullAge6(18,1990, 2008)

//DEFAULT PARAMETERS
//WE USED THEM WHEN WE WANT ONE OR MORE PARAMETERS OF A FUNCTION TO BE PRESET

//ES5
// function SmithPerson(firstName, yearOfBirth, lastName, nationality) {
//   this.firstName = firstName;
//   this.yearOfBirth = yearOfBirth;
//   this.lastName = lastName;
//   this.nationality = nationality;
// }

// let john = new SmithPerson("John",1990)
//Javascript actually allows us to call a function without
//specifying all of the arguments
// console.log(john); //output :
/* firstName
: 
"John"
lastName
: 
undefined
nationality
: 
undefined
yearOfBirth
: 
1990
[[Prototype]]
: 
Object
  */

//what if we wanna add a default to the arguments not passed????

// function SmithPerson(firstName, yearOfBirth, lastName, nationality) {
//   lastName === undefined ? (lastName = "smith") : lastName;
//   // nationality === undefined ? (nationality = "Nigeria") : nationality;
//   this.firstName = firstName;
//   this.yearOfBirth = yearOfBirth;
//   this.lastName = lastName;
//   this.nationality = nationality;
// }

// let john = new SmithPerson("John", 1990);
// console.log(john);
// //Meanwhile, if you later set the arguments for another objects
// //It's going to overwrite the existing/default arguments that was set.
// let emily = new SmithPerson("Emily" , 1999,"James", "Australia")
// console.log(emily);

//let's play and see how this works in ES6
//Meanwhile Arrow functions cannot be used
// as constructors and will throw an
//  error when called with new .
//  They also do not have a prototype property.

//default parameters in ES6 is done is declared in the arguments...
// function SmithPerson(firstName, lastName, yearOfBirth, nationality = "Nigerian") {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.yearOfBirth = yearOfBirth;
//   this.nationality = nationality;
// }

// let john = new SmithPerson("John", "Smith", 1993 );
// console.log(john);

//DATA STRUCTURE
// //MAP - NEW KEY VALUE DATA STRUCTURE
// //we can use anything , primitive values for the keys
// //MAPPING STRING KEYS TO ARBITRARY VALUES

// //let's see how to create a map
// let question = new Map();

// //let's add some data to it
// //when you create a new method , you specify keys and values
// question.set(
//   "question",
//   "What's the official name of the latest major JS version? "
// );

// //let's now answer some answers
// question.set(1, "ES5");
// question.set(2, "ES6");
// question.set(3, "ES2015");
// question.set(4, "ES7");

// //let's now add the correct answer
// question.set("correct", 3);

// //let's also check if the answer is true or false
// question.set(true, "Correct answer: D");
// question.set(false, "Wrong answer! please try again ");

// //what if we wanna retrieve data from this map?
// // console.log(question.get("question"));
// // console.log(question.get(1));

// //what if we wanna get the size of the method that was set?
// //Remember it's not length like array but size in this case
// // console.log(question.size);

// //we can also delete data
// // question.delete(3);

// // console.log(question);

// //and we can use the if statement
// // question.has() ? question.delete(4) : console.log("se");

// //we can also use the clear method if we wanna clear everything
// // question.clear()

// //clear, set , get , delete , has are the most common method in mapping manipulation

// //we can also loop in map as they are iterable

// // question.forEach((value, key )=> {
// //  console.log(`This is ${key} , and it's set to ${value}`);

// // });

// //let's try the for loop

// // for (let [key, value] of question.entries()) {
//   //this entries method return all entries of our question map
//   // console.log(`This is ${key} , and it's set to ${value}`);

//   //if we wanna select only numbers
// //   if (typeof key === "boolean") {
// //     console.log(`This is ${key} , and it's set to ${value}`);
// //   }
// // }

// //let's take user input to check answer

// const answer = parseInt(prompt("write the correct answer! "));

// //let's play if statement...
// if(answer ===  question.get("correct")){
//   console.log(question.get(true));

// }else{
//   console.log(question.get(false));

// }

// //Alternatively without using the if statement

// console.log(question.get(answer === question.get("correct")));

// CLASSES
// classes just make it easier to implement inheritance and to create objects based on blueprint
//in ES5 , these bluepints are called function constructors

// let Person5 = function (name, yearOfBirth, job) {
// 	this.name = name;
// 	this.yearOfBirth = yearOfBirth;
// 	this.job = job;
//   };

//   Person5.prototype.calculateAge = function () {
// 	let age = (new Date().getFullYear = this.yearOfBirth);
// 	console.log(age);
//   };

//   let john = new Person5("sg", 1990, "techie");
//   console.log(john);

//   //ES6

//   class Person6 {
// 	//class declaration :- all class must have a constructor method
// 	constructor(name, yearOfBirth, job) {
// 	  this.name = name;
// 	  this.yearOfBirth = yearOfBirth;
// 	  this.job = job;
// 	}
// 	calculateAge() {
// 	  let age = (new Date().getFullYear = this.yearOfBirth);
// 	  console.log(age);
// 	}
// 	//Another thing you can do in classes is to add static method
// 	//which are simply attached to the class but not inherited by the class instances
// 	//but object that we create through that class
// 	static greeting() {
// 	  console.log("Hey there! this is static method");
// 	}
//   }

//   //let's now create an instance of this class
//   const john6 = new Person6("john", 1991, "teacher");
//   console.log(john6);

//   Person6.greeting(); // to call it : so it's basically a method that is attached to the class Person6

//   //NOTE: A class definition is not hoisted unlike function constructors
//   //we can only add method to classes and not properties

// CLASSES
// // classes just make it easier to implement inheritance and to create objects based on blueprint
// //in ES5 , these bluepints are called function constructors

// // let Person5 = function (name, yearOfBirth, job) {
// //   this.name = name;
// //   this.yearOfBirth = yearOfBirth;
// //   this.job = job;
// // };

// // Person5.prototype.calculateAge = function () {
// //   let age = (new Date().getFullYear = this.yearOfBirth);
// //   console.log(age);
// // };

// // let john = new Person5("sg", 1990, "techie");
// // console.log(john);

// // //ES6

// // class Person6 {
// //   //class declaration :- all class must have a constructor method
// //   constructor(name, yearOfBirth, job) {
// //     this.name = name;
// //     this.yearOfBirth = yearOfBirth;
// //     this.job = job;
// //   }
// //   calculateAge() {
// //     let age = (new Date().getFullYear = this.yearOfBirth);
// //     console.log(age);
// //   }
// //   //Another thing you can do in classes is to add static method
// //   //which are simply attached to the class but not inherited by the class instances
// //   //but object that we create through that class
// //   static greeting() {
// //     console.log("Hey there! this is static method");
// //   }
// // }

// // //let's now create an instance of this class
// // const john6 = new Person6("john", 1991, "teacher");
// // console.log(john6);

// // Person6.greeting(); // to call it : so it's basically a method that is attached to the class Person6

// //NOTE: A class definition is not hoisted unlike function constructors
// //we can only add method to classes and not properties

// //CLASSES AND SUBCLASSES

// let Person5 = function (name, yearOfBirth, job) {
//   this.name = name;
//   this.yearOfBirth = yearOfBirth;
//   this.job = job;
// };

// Person5.prototype.calculateAge = function () {
//   let age = new Date().getFullYear() - this.yearOfBirth;
//   console.log(age);
// };

// let Athlete5 = function (name, yearOfBirth, job, olympicGames, medals) {
//   //in the subclass , the first thing we have to do is to call the Person class

//   Person5.call(this, name, yearOfBirth, job);
//   this.olympicGames = olympicGames;
//   this.medals = medals;
// };

// Athlete5.prototype = Object.create(Person5.prototype); //Now the two function constructors are connected
// //Now these work because all of the properties in the Person class can now be assessed by the athlete class
// //Person5 is the super class and Athlete class is the subclass
// //we can also set method on the prototype property of athlete5 function constructor

// Athlete5.prototype.wonMedal = function () {
//   this.medals++;
//   console.log(this.medals);
// };

// let johnAtlete5 = new Athlete5("John", 1990, "swimmer", 3, 10);
// console.log(johnAtlete5);

// johnAtlete5.calculateAge();
// johnAtlete5.wonMedal();

// //let's do the same thing in ES6

// class Person6 {
//   //class declaration :- all class must have a constructor method
//   constructor(name, yearOfBirth, job) {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
//   }
//   calculateAge()  {
//     let age = new Date().getFullYear()  - this.yearOfBirth;
//     console.log(age);
//   }

// }

// class Athlete6 extends Person6 {
//   //it has to extend with/to the main class
//   constructor(name, yearOfBirth, job, olympicGames, medals) {
//     super(name, yearOfBirth, job);
//     this.olympicGames = olympicGames;
//     this.medals = medals;
//   }
//   wonMedal() {
//     this.medals++;
//     console.log(this.medals);
//   }
// }

// const johnAtlete6 = new Athlete6("John", 1990, "swimmer", 3, 10);
// johnAtlete6.wonMedal();
// johnAtlete6.calculateAge();

/*uppose that you're working in a small town administration , and you're in charge of two town elements:
1. Parks
2.Streets

It's a very small town, so right now there are only 3 parks and 4 streets. All parks and streets have a name and a build year.

At an end-of-year meeting, your boss wants a final report with the following:
1. Tree density of each park in the town (formula: number of trees/park area)
2. Average age of each town's park (formula: sum of all ages/numbeer of parks)
3. The name of the park that has more than 1000 treees
4. Total and average length of the town's streets
5. Size classification of all streets: tiny/smal/normal/big/huge. If the size is unknown, the default is normal

All the report data should be printed to the console.

HINT: Use some of the ES6 features: classes, subclasses, template strings, default parameters, maps, arrow functions, destructing , etc.*/

// Chatgpt solution
// class Element {
//   constructor(name, buildYear) {
//     this.name = name;
//     this.buildYear = buildYear;
//   }
// }

// class Park extends Element {
//   constructor(name, buildYear, area, numTrees) {
//     super(name, buildYear);
//     this.area = area; // in square meters
//     this.numTrees = numTrees;
//   }

//   treeDensity() {
//     const density = this.numTrees / this.area;
//     console.log(
//       `${this.name} has a tree density of ${density} trees per square meter.`
//     );
//   }
// }

// class Street extends Element {
//   constructor(name, buildYear, length, size = "normal") {
//     super(name, buildYear);
//     this.length = length; // in kilometers
//     this.size = size;
//   }

//   classifyStreet() {
//     const classification = new Map();
//     classification.set("tiny", 0.3);
//     classification.set("small", 0.5);
//     classification.set("normal", 1);
//     classification.set("big", 3);
//     classification.set("huge", 5);

//     console.log(
//       `${this.name}, built in ${this.buildYear}, is a ${this.size} street.`
//     );
//   }
// }

// // Parks
// const park1 = new Park("Green Park", 1987, 0.2, 215);
// const park2 = new Park("National Park", 1894, 2.9, 3541);
// const park3 = new Park("Oak Park", 1953, 0.4, 949);

// const parks = [park1, park2, park3];

// // Streets
// const street1 = new Street("Ocean Avenue", 1999, 1.1, "big");
// const street2 = new Street("Evergreen Street", 2008, 0.8, "small");
// const street3 = new Street("4th Street", 2015, 2.7);
// const street4 = new Street("Sunset Boulevard", 1982, 4.2, "huge");

// const streets = [street1, street2, street3, street4];

// function calculateAverage(arr) {
//   const sum = arr.reduce((prev, current) => prev + current, 0);
//   return [sum, sum / arr.length];
// }

// function reportParks(parks) {
//   console.log("----- Parks Report -----");

//   // Tree density
//   parks.forEach((park) => park.treeDensity());

//   // Average age
//   const [totalAge, avgAge] = calculateAverage(
//     parks.map((park) => new Date().getFullYear() - park.buildYear)
//   );
//   console.log(`The average age of the parks is ${avgAge} years.`);

//   // Parks with more than 1000 trees
//   const parksWithMoreThan1000Trees = parks.find((park) => park.numTrees > 1000);
//   console.log(`${parksWithMoreThan1000Trees.name} has more than 1000 trees.`);
// }

// function reportStreets(streets) {
//   console.log("----- Streets Report -----");

//   // Total and average length
//   const [totalLength, avgLength] = calculateAverage(
//     streets.map((street) => street.length)
//   );
//   console.log(
//     `The total length of streets is ${totalLength} km, with an average length of ${avgLength} km.`
//   );

//   // Street classification
//   streets.forEach((street) => street.classifyStreet());
// }

// reportParks(parks);
// reportStreets(streets);

/*
HTML
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Get Ready for the Future:</title>
    <link rel="stylesheet" href="styles/style.css" />
  </head>
  <body>
    <div>
      <h2 class="box">Section 7: Get Ready for the Future: ES6/ ES2015</h2>
    </div>

    <div class="box">
      <div class="box green">I'm green!</div>
      <div class="box blue">I'm blue!</div>
      <div class="box orange">I'm orange!</div>
    </div>

    <script src="index.js"></script>
  </body>
</html>


CSS
.green {
  background: green;

  display: flex;
}
.blue {
  background: dodgerblue;

  display: flex;
}
.orange {
  background: orangered;

  display: flex;
}
.box {
  margin-top: 2rem;
  align-items: center;
  justify-content: center;
  width: 80%;
  height: 80px;
  font: 1em sans-serif;
  font-size: 1.4rem;
  
}


*/

// Newer version in JS - ES6 and ES5

//Lecture: let and const

// //ES5
// function driverLicence5(passedTest) {
//     if (passedTest) {
//       let firstName = "John";
//       const yearOfBirth = 1990;

//       console.log(
//         firstName +
//           " born in " +
//           yearOfBirth +
//           " is now officially allowed to drive a car."
//       );
//     }
//   }
//   driverLicence5(true);

// var name5 = "Jane Smith";
// var age5 = 23;

// name5 = "Jane Miller";
// console.log(name5);

// function driverLicence5(passedTest) {
//   if (passedTest) {
//     var firstName = "John";
//     var yearOfBirth = 1990;

//     //var keywords are also only accessible inside of a function and not outside

//   }

//   console.log(
//     firstName +
//       " born in " +
//       yearOfBirth +
//       " is now officially allowed to drive a car."
//   );
// }
// driverLicence5(true);

// // //ES6
// // const name6 = "Jane Smith"
// // let age6 = 23
// // name6 = "Jame Miller"
// // console.log(name6);
// // // 08169508118  david aniyikaye

// function driverLicence6(passedTest) {

//     let firstName

//   if (passedTest) {
//     let firstName = "John";
//     const yearOfBirth = 1990;
//     //we cannot declare a const in a block and use it outside of the block

//   }

//   console.log(
//     firstName +
//       " born in " +
//       yearOfBirth +
//       " is now officially allowed to drive a car."
//   );
// }
// driverLicence6(true); //we get an error that firstname is not defined
// //because the variable declared aren't function scope but block scope
// //BLOCK - Are codes that are wrapped between curly braces

// var i = 23;
// for (var i= 0; i<3;i++){
//     console.log(i);

// }

// console.log(i);

// let h = 22;
// for (h = 0; h < 3; h++) {
//   console.log(h);
// }

// console.log(h);
// console.log(h);

//Lecture: Blocks and IIFEs
//for data privacy
//Block
// {
//   const a = 1;
//   let b = 2;
//   var c = 3;
// }
// What if we wanna console log the content in this block
// console.log(a+b); //output- a is not defined

//because they are not function scope but block scope and therefore not accessible

// console.log(c);

// // IIFE
// //
// (function () {
//   var c = 4;
//   var d = 8;
// })();

// console.log(c);
// console.log(d);

/////////////////////////

//Lecture: Strings

// let firstName = "Segun"
// let lastName = "Adeniyi"

// const yearOfBirth = 2000;

// function calculateAge(year) {
//   return 2023 - year;
// }

// //ES5
// //let's quickly talk about template literals using back ticks
// console.log(
//   "This is " +
//     firstName +
//     " " +
//     lastName +
//     "" +
//     ". She was born in " +
//     yearOfBirth +
//     ". Today is her birthday!" +
//     "She is " +
//     calculateAge(yearOfBirth) +
//     " years old."
// );

// //ES6
// //let's quickly talk about template literals using back ticks

// console.log(`Here is ${
//   firstName + " " + lastName
// } .She was born in 1990. Today is her
// birthday!She is ${calculateAge(yearOfBirth)} years old.
// `);

// // let's play some more
// const n = `${firstName} ${lastName} `; //don't forget that space is also a character
// //AS: const n = `${firstName} ${lastName} `; is different from const n = `${firstName}   ${lastName} `;

// //let's see startsWith
// console.log(n.startsWith("J")); //output - small caps :false big cap: true
// //index
// console.log(n.indexOf("i"));
// //endsWith
// console.log(n.endsWith(""));
// //includes
// console.log(n.includes("i"));

////////////////////

// // Lecture: Arrow functions

// const years = [1990, 1965, 1982, 1937];

// //ES5
// //let's use map
// //Remember using map makes us have access to the current element,index,and the entire years array

// var ages5 = years.map(function (el) {
//   return 2023 - el;
// });
// console.log(ages5);

// //ES6
// let age6 = years.map((el) => {
//   return 2023 - el;

//   //Alt
//   //const age6 = years.map(el => 2023 - el)
// });
// console.log(age6);

// age6 = years.map((el, index) => `Age element ${index + 1} : ${2023 - el}.`);
// console.log(age6);

// //if argument is more than one, we need to use parenthesis and curly braces where necessary

// age6 = years.map((el, index) => {
//   const now = new Date().getFullYear();
//  const age = now -el
//  return `Age element ${index + 1}: ${age}`

// });
// console.log(age6);

// Lecture: Arrow functions 2

//ES5
// var box5 = {
//   color: "green",
//   position: 1,
//   clickMe: function () {
//     //we can then use a "that or self" variable to point to the the this object
//     var that = this;

//     //function to attach event handler to the green box elements
//     //lets's add an event handler
//     document.querySelector(".green").addEventListener("click", function () {
//       //let's just have an alert
//       //
//       var str =
//         "This is box number " +
//         that.position +
//         " and it is color " +
//         that.color;

//       console.log(str); //output : undefined in the "this " keyword beacause it is only in a method call that the this keyword points to a object
//       alert(str);
//     });
//   },
// };
// box5.clickMe();

//ES6
// let box6 = {
//   color: "green",
//   position: 1,
//   clickMe: function () {
//     //we can then use a "that or self" variable to point to the the this object

//     //function to attach event handler to the green box elements
//     //let's add an event handler
//     document.querySelector(".green").addEventListener("click", () => {
//       //let's just have an alert
//       //
//       let str =
//         "This is box number " +
//         this.position +
//         " and it is color " +
//         this.color;

//       console.log(str); //output : undefined in the "this " keyword beacause it is only in a method call that the this keyword points to a object
//       // alert(str);
//     });
//   },
// };
// box6.clickMe();

// we still have a function... let's just replace it with an arrow function
// let box6 = {
//   color: "green",
//   position: 1,
//   clickMe: () => {
//     //we can then use a "that or self" variable to point to the the this object

//     //function to attach event handler to the green box elements
//     //let's add an event handler
//     document.querySelector(".green").addEventListener("click", () => {
//       //let's just have an alert
//       //

//       let str =
//         "This is box number " +
//         self.position +
//         " and it is color " +
//         self.color;

//       console.log(str); //output : undefined in the "this " keyword beacause it is only in a method call that the this keyword points to a object
//       // alert(str);
//     });
//   },
// };
// box6.clickMe();  //this is not working yet

// //let's create another example here
// function Person(name) {
// 	this.name = name;
//   }
//   //ES5
//   Person.prototype.myFriends5 = function (freinds) {
// 	var arr = freinds.map(
// 	  function (el) {
// 		return this.name + " is friends with " + el;
// 	  }.bind(this)
// 	);
// 	console.log(arr);
//   };

//   var freinds = ["Bob", "Jane", "Mark"];

//   new Person("John").myFriends5(freinds);

//   //ES6

//   Person.prototype.myFriends6 = function (freinds) {
// 	let arr = freinds.map((el) => {
// 	  return this.name + " is friends with " + el;
// 	});
// 	console.log(arr);

//   };

//   new Person("Mike").myFriends6(freinds);

//   //once again we use the power of arrow function

/*

pluralsight login clone


<!--html -->

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Get Ready for the Future:</title>
    <link rel="stylesheet" href="styles/style.css" />
  </head>
  <body>
    <!-- let's quickly build pluralSight login page -->

    <div class="grid grid-2col">
      <div class="main">
        <form action="" class="form-group">
          <!-- header -->
          <header>
            <img id="logo" src="./images/download.jpg" alt="" srcset="" />
            <h4>pluralSight</h4>
          </header>
          <!-- label -->
          <!-- label makes our form more accessible and useable -->
          <div class="labels">
            <label for="name">Email or Username</label>
            <input type="text" id="name" />
          </div>

          <div class="labels">
            <label for="password">Password</label>
            <input type="password" id="password" />
          </div>
          <button type="submit">Sign in</button>

          <!-- forget password -->
          <p>Forget password?</p>
          <p>Sign in with company or school</p>
          <!-- horizontal line -->
          <hr />

          <!-- Create an account button -->
          <button type="submit">Create an account</button>

          <!-- footer -->

          <footer>
            Copyright &nbsp; 2004 - 2023 Pluralsight LLC. All rights reserved.
            <br />

            <div id="termsOfUse">Terms of Use | Privacy Policy</div>
          </footer>
        </form>
      </div>

      <div class="aside">
        <h1>
          Let's create the <br><div id="futTog">
            
            future <strong id="together"> together.</strong>
          </div>
        </h1>
        <button id="start">Start a FREE 10-day trial</button>
      </div>
    </div>

    <script src="index.js"></script>
  </body>
</html>




/* Css

.body {
  /* 
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  line-height: 1.5;
}
.grid {
  display: grid;
}
@media screen and (min-width: 76px) {
  .grid-2col {
    grid-template-columns: repeat(2, 1fr);
    background: #666;
  }
}

@media screen and (min-width: 768px) {
  .main {
    display: grid;
    justify-content: center;
    background: #0d0f12;
    height: auto;
  }
  header {
    display: flex;
    margin: 5rem 0.5rem;
  }
  h4 {
    color: #fff;
    margin-left: 0.5rem;
    font-size: 1.5rem;
    text-transform: uppercase;
    letter-spacing: 0.5ch;
  }
  #logo {
    width: 60px;
    border-radius: 2rem;
    height: 60px;
    margin-top: 1rem;
  }

  label {
    display: block;
    font-size: 1.3rem;
  }
  .labels {
    margin-bottom: 1.5rem;
    color: #fff;
  }
  .form-group {
    margin-bottom: 1rem;
  }
  input[type="text"],
  input[type="password"] {
    width: 20rem;
    height: 2rem;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    background-color: #0d0f12;
    border-color: #0d0f12;
    border: 1px solid #ffffff26;
    margin-top: 0.2rem;
  }
  input[type="text"]:focus,
  input[type="password"]:focus {
    border-color: #7db0fb;
    color: #fff;
  }
  button {
    width: 22.15rem;
    height: 3rem;
    background: #0074ab;
    color: #fff;
    border-radius: 5px;
  }
  p {
    margin: 1rem 0;
    color: #0074ab;
    text-align: center;
  }
  hr {
    background-color: #ffffff26;
    width: 2rem;
  }
  footer {
    color: #fff;
    margin-top: 3.5rem;
    font-size: 0.9rem;
    text-align: center;
  }
  #termsOfUse {
    margin-top: 0.2rem;
    text-decoration: underline;
  }
}

@media screen and (min-width: 768px) {
  .aside {
    /* background: #fffffff2; */

/*
    background-color: #000;
    padding: 20rem 0;
    text-align: center;
  }

  h1 {
    color: #fff;
    font-size: 3rem;
  }
  h1 > #together {
    
    font-weight: 800;
    
  }
  #start{
    border: 1px solid #fffffff2;
    background: none;
    width: 13rem;
  }

}
*/



// how to check if jquery is installed....
// if (typeof jQuery == "undefined") {
//   alert("jQuery is not installed");
//   (function () {
//       var script = document.createElement("SCRIPT");
//       script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js';
//       script.type = 'text/javascript';
//       document.getElementsByTagName("head")[0].appendChild(script);
//       console.log('we have now just installed jQuery for you.. no need to thank us ?');
//   })();
// }
// else {
//   alert("jQuery is installed correctly!");
// }




// <!-- let's quickly build react landing page -->

// html
// <div class="container">
//   <div class="main">
// 	<img src="./images/download.jpg" alt="" srcset="" />
// 	<p>Welcome to React</p>
//   </div>
//   <div class="section">
// 	<p class="text-info">To get started, edit src/App.js and save to reload.</p>
//   </div>
// </div>

// <script src="index.js"></script>

// <!-- let's add bootstrap for jquery -->
// <script src="./setup/js/jquery.js"></script>

// <!-- let's add bootstrap for js -->
// <script src="./setup/js/bootstrap.bundle.min.js"></script>

// CSS
// .container {
// 	display: grid;
//   }
  
//   .main {
// 	grid-template-rows: 2fr 2fr;
// 	background: #000;
// 	color: #fff;
// 	text-align: center;
// 	padding-top: 3rem;
// 	height: 45vh;
//   }
//   .section{
// 	  text-align: center;
//   }



//what's the output of this code snippet???
// let x = 10;

// function foo() {
//   console.log(x);

// }
// function bar( ) {
//   let x = 20;
//   foo()
// }
// bar()




/*
Recent challenge






// function printFullAge(birthYears) {
//   const currentYear = new Date().getFullYear();
//   const ages = [];
//   const fullAges = [];

//   for (const year of birthYears) {
//     const age = currentYear - year;
//     ages.push(age);
//   }

//   for (let i = 0; i < ages.length; i++) {
//     const isFullAge = ages[i] >= 18;
//     fullAges.push(isFullAge);
//     console.log(`Person ${i + 1} - Age: ${ages[i]}, Full Age: ${isFullAge}`);
//   }

//   return fullAges;
// }

// const birthYears1 = [2020, 2008, 1992];
// const birthYears2 = [1980, 2005, 1999];
// const full_1 = printFullAge(birthYears1);
// const full_2 = printFullAge(birthYears2);

// console.log(full_1); // Output: [true, false, true]
// console.log(full_2); // Output: [true, false, true]

//coding challenge

// function constructor
// function Question(question, answers, correctAnswer) {
//   this.question = question;
//   this.answers = answers;
//   this.correctAnswer = correctAnswer;
// }

// // create a couple of question using the constructor
// let q1, q2, q3;
// q1 = new Question("What's this user name", ["John", "Toheeb", "Segun"], 2);
// q2 = new Question("What's your fav. color?", ["Green", "White", "Cyan"], 1);
// q3 = new Question("What's your gf's name?", ["Cynthia", "Emily", "Dora"], 1);

// // storing them in an array
// let questions = [q1, q2, q3];

// // selecting question and logging it to the console
// Question.prototype.displayQuestion = function () {
//   console.log(this.question);
//   for (i = 0; i < this.answers.length; i++) {
//     console.log(i + ":" + this.answers[i]);
//   }
// };

// // asking for correct answer
// Question.prototype.checkAnswer = function (answer) {
//   answer = this.correctAnswer
//     ? console.log( "yeah, you are right")
//     : console.log("You're wrong dear!");
// };

// //selecting random question and displaying it
// let randomQuestion = Math.floor(Math.random() * questions.length);
// questions[randomQuestion].displayQuestion();

// // asking user for correct answer
// userAnswer = parseInt(prompt("Enter your answer: "));

// questions[randomQuestion].checkAnswer(userAnswer);

//more challenge - if the answer is wrong then retry again else close the application.

// //Create a function constructor
// let Question = function (question, answers, correct) {
//   this.question = question;
//   this.answers = answers;
//   this.correct = correct;
// };

// // Method to display the question and answers
// Question.prototype.displayQuestion = function () {
//   console.log(this.question);
//   for (i = 0; i < this.answers.length; i++) {
//     console.log(i + ":" + this.answers[i]);
//   }
// };

// // Method to check if the answer is correct
// Question.prototype.checkAnswer = function (answer) {
//   if (answer === this.correct) {
//     console.log("User answer = " + userAnswer);
//     console.log("Correct Answer!");
//   } else {
//     console.log("user answer = " + userAnswer);
//     console.log("Wrong Answer!");
//   }
// };

// // Create a couple of questions
// let q1 = new Question(
//   "Is JS the coolest prog. lang. in the world?",
//   ["No", "Yes"],
//   1
// );
// let q2 = new Question(
//   "Hope say you know wetin you dey do shaa?",
//   ["Yes", "No"],
//   0
// );
// let q3 = new Question(
//   "What does best describe coding",
//   ["Boring", "Hard", "Fun", "Tedious"],
//   2
// );

// // Store questions in an array

// let questions = [q1, q2, q3];

// // Select a random question and display it

// let randomQuestion = Math.floor(Math.random() * questions.length);
// questions[randomQuestion].displayQuestion();

// // Prompt user for the correct answer

// userAnswer = parseInt(prompt("Select the right option: "));

// // Check if the answer is correct

// questions[randomQuestion].checkAnswer(userAnswer);




// //okayy let's explore

// //let's first build a Question constructor

// function Question(question, answers, correctAnswer) {
//   this.question = question;
//   this.answers = answers;
//   this.correctAnswer = correctAnswer;
// }

// //creating a couple of questions using the constructor
// let q1, q2;
// q1 = new Question(
//   "Can you create a function constructor?",
//   ["No!", "Yes!", "Maybe!"],
//   1
// );
// q2 = new Question("Can you swim?", ["No!", "Yes!", "Maybe!"], 0);

// // storing them in an array..
// let questions = [q1, q2];

// //method for displaying the question
// Question.prototype.displayQuestion = function () {
//   console.log(this.question);

//   for (i = 0; i < this.answers.length; i++) {
//     console.log(i + ":" + this.answers[i]);
//   }
// };

// //method to check if answer is correct
// Question.prototype.checkAnswer = function (answer) {
//   answer === this.correctAnswer
//     ? console.log(`you entered ${userAnswer}`, "You are right")
//     : console.log(`${"you entered " + userAnswer}`, "Wrong answer. Try again!");
// };

// //let's modify our code that user can start and stop the application  then design it as like an app and post in your portfolio website

// function startQuiz() {
//   //method for checking for the random questions
//   let randomQuestion = Math.floor(Math.random() * questions.length);
//   questions[randomQuestion].displayQuestion();

//   // prompting the correct answer
//   userAnswer = prompt(
//     "Enter your answer! or enter quit to stop the application!"
//   );

//   //check if user wants to quit
//   if (userAnswer.toLowerCase() === "quit") {
//     console.log("Quiz terminated!.");
//     return;
//   }

//   //check if the answer is correct
//   questions[randomQuestion].checkAnswer(parseInt(userAnswer));

//   //continue the quiz
//   startQuiz();
// }

// document.getElementById("startButton").addEventListener("click", startQuiz);



// (function () {
//   // Function constructor for a Question
//   function Question(question, answers, correctAnswer) {
//     this.question = question;
//     this.answers = answers;
//     this.correctAnswer = correctAnswer;
//   }

//   // Method to display the question and answers
//   Question.prototype.displayQuestion = function () {
//     console.log(this.question);

//     for (var i = 0; i < this.answers.length; i++) {
//       console.log(i + ': ' + this.answers[i]);
//     }
//   };

//   // Method to check if the answer is correct
//   Question.prototype.checkAnswer = function (answer) {
//     if (answer === this.correctAnswer) {
//       console.log('Correct answer!');
//     } else {
//       console.log('Wrong answer. Try again!');
//     }
//   };

//   // Create a couple of questions
//   var question1 = new Question('What is the capital of France?', ['Berlin', 'Paris', 'Madrid'], 1);
//   var question2 = new Question('What is the largest mammal?', ['Elephant', 'Blue Whale', 'Giraffe'], 1);
//   var question3 = new Question('What is the currency of Japan?', ['Yuan', 'Yen', 'Ringgit'], 1);

//   // Store questions in an array
//   var questions = [question1, question2, question3];

//   // Function to start the quiz
//   function startQuiz() {
//     // Select a random question and display it
//     var randomQuestionIndex = Math.floor(Math.random() * questions.length);
//     questions[randomQuestionIndex].displayQuestion();

//     // Prompt user for the correct answer
//     var userAnswer = prompt('Please select the correct answer (enter the number) or type "quit" to stop.');

//     // Check if the user wants to quit
//     if (userAnswer.toLowerCase() === 'quit') {
//       console.log('Quiz terminated.');
//       return;
//     }

//     // Check if the answer is correct
//     questions[randomQuestionIndex].checkAnswer(parseInt(userAnswer));

//     // Continue the quiz
//     startQuiz();
//   }

//   // Start the quiz when the user clicks "start"
//   document.getElementById('startButton').addEventListener('click', startQuiz);
// })();



*/

















//Calculator

// html

// calculator challenge
// <div>
//   <span id="num1-el">8</span>
//   <span id="num2-el">2</span>
// </div>
// <br />

// <button id="btn-add">Add</button>
// <button id="btn-sub">Subtract</button>
// <button id="btn-div">Divide</button>
// <button id="btn-mul">Multiply</button>
// <br />
// <span id="sum-el">Sum: </span>
// <script src="./index.js"></script>


// /*  */
// body {
//   font-family: Arial, Helvetica, sans-serif;
//   padding: 20px 0;
//   margin: 0;
//   text-align: center;
// }

// span {
//   border-bottom: 2px solid black;
//   padding: 4px;
// }

// button {
//   margin: 20px 0;
//   background: white;
//   color: black;
//   border: 1px solid black;
//   font-weight: bold;
//   cursor: pointer;
//   padding: 5px 8px;
// }






// let num1 = 8;
// let num2 = 2;

// document.getElementById("num1-el").textContent = num1;
// document.getElementById("num2-el").textContent = num2;

// function add() {
//   let sum = num1 + num2;
//   document.getElementById("sum-el").textContent = "Sum: " + sum;
// }

// function subtract() {
//   let difference = num1 - num2;
//   document.getElementById("sum-el").textContent = "Difference: " + difference;
// }

// function divide() {
//   let quotient = num1 / num2;
//   document.getElementById("sum-el").textContent = "Quotient: " + quotient;
// }

// function multiply() {
//   let product = num1 * num2;
//   document.getElementById("sum-el").textContent = "Product: " + product;
// }

// document.getElementById("btn-add").addEventListener("click", add);
// document.getElementById("btn-sub").addEventListener("click", subtract);
// document.getElementById("btn-div").addEventListener("click", divide);
// document.getElementById("btn-mul").addEventListener("click", multiply);



