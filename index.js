// // // // baba gboorr , gboorr adura mi ooo

// let num1 = 8;
// let num2 = 2;
// document.getElementById("num1-el").textContent = num1;
// document.getElementById("num2-el").textContent = num2;

// // Create four functions: add(), subtract(), divide(), multiply()
// // Call the correct function when the user clicks on one of the buttons
// // Perform the given calculation using num1 and num2
// // Render the result of the calculation in the paragraph with id="sum-el"

// // E.g. if the user clicks on the "Plus" button, you should render
// // "Sum: 10" (since 8 + 2 = 10) inside the paragraph with id="sum-el"

// function add() {
//   let sum = num1 + num2;
//   document.getElementById("sum-el").textContent = "Sum: " + sum;
//   console.log("this button was clicked");
// }

// document.getElementById("#btn-add").addEventListener("click", add);





















// // function Question(question, answers, correctAnswer) {
// //   this.question = question;
// //   this.answers = answers;
// //   this.correctAnswer = correctAnswer;
// // }

// // //method to display question
// // Question.prototype.displayQuestion = function () {
// //   console.log(this.question);

// //   for (i = 0; i < this.answers.length; i++) {
// //     console.log(i + ":" + this.answers[i]);
// //   }
// // };

// // //function to start quiz

// // function startQuiz() {
// //   //couple of question from the constructor
// //   let q1, q2;
// //   q1 = new Question("what's your name?", ["Tope", "Richard", "SG"], 2);
// //   q2 = new Question(
// //     "what's your name of your institution?",
// //     ["Harvard Uni", "UniLag", "Oxford Uni", "Manchester"],
// //     0
// //   );

// //   //storing them in an array
// //   let questions = [q1, q2];

// //   //method for random questions
// //   let randomQuestion = Math.floor(Math.random() * questions.length);
// //   questions[randomQuestion].displayQuestion();

// //   //method to check the right answer
// //   Question.prototype.checkAnswer = function (answer) {
// //     answer === this.correctAnswer
// //       ? console.log("you're right")
// //       : console.log("you're wrong. Try again!");
// //   }; //create your own future  book to read....

// //   //prompt user for correct answer
// //   userAnswer = prompt(
// //     "Enter the right answer or enter quit to quit the application."
// //   );

// //   questions[randomQuestion].checkAnswer(parseInt(userAnswer));

// //   //to quit
// //   if (userAnswer.toLowerCase() === "quit") {
// //     console.log("Quiz terminated!");
// //     return;
// //   }
// //   //to start
// //   startQuiz();
// // }

// // document.querySelector("#startButton").addEventListener("click", startQuiz);

// //function Constructor
// function Question(question, answers, correctAnswer) {
//   this.question = question;
//   this.answers = answers;
//   this.correctAnswer = correctAnswer;
// }

// //displayQuestion
// Question.prototype.displayQuestion = function () {
//   console.log(this.question);

//   for (i = 0; i < this.answers.length; i++) {
//     console.log(i + " : " + this.answers[i]);
//   }
// };

// function startQuiz() {
//   //creating a couple of question using the constructor
//   let q1, q2, q3;
//   q1 = new Question("what's the name of your PC?", ["Mac", "HP", "Acer"], 1);
//   q2 = new Question(
//     "which alumni are you?",
//     ["Unilag", "Covenant", "Funaab"],
//     2
//   );
//   q3 = new Question("what's your birth month?", ["Nov", "July", "Feb"], 0);

//   //storing them in an array
//   let questions = [q1, q2, q3];

//   //random question and logging it out
//   let randomQuestion = Math.floor(Math.random() * questions.length);
//   questions[randomQuestion].displayQuestion();

//   //correct answer
//   Question.prototype.checkAnswer = function (answer) {
//     answer === this.correctAnswer
//       ? console.log("you're right!")
//       : console.log("you're wrong!. Try again");
//   };

//   //prompt user for correct answer
//   userAnswer = prompt(
//     "Enter the right option or type quit to terminate the quiz!"
//   );

//   questions[randomQuestion].checkAnswer(parseInt(userAnswer));

//   //quit Quiz
//   if (userAnswer === "quit") {
//     console.log("Quiz terminated!");
//     return;
//   }
//   //startQuiz
//   startQuiz();
// }

// document.querySelector("#startButton").addEventListener("click", startQuiz);
