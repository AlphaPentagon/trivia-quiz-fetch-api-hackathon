
    // Getting the elements 
    let question= document.querySelector("#question");
    let title = document.querySelector("#title");
    let timer = document.querySelector("#timer");
    let difficulty = document.querySelector("#difficulty");
    let answerButtonA = document.querySelector("#answerA");
    let answerButtonB = document.querySelector("#answerB");
    let answerButtonC = document.querySelector("#answerC");
    let answerButtonD = document.querySelector("#answerD");
    let score = document.querySelector("#score");
    let feedback = document.querySelector("#feedback");

    // Declare global variables
    let questions;
    let timerCount = 10;
    let scoreCount = 0;
    let playerAnswer;
    let correctAnswer;
    let allAnswers;

    // Put event listeners on buttons
    answerButtonA.addEventListener("click", function() { checkAnswer(answerButtonA.innerText)});
    answerButtonB.addEventListener("click", function() { checkAnswer(answerButtonB.innerText)});
    answerButtonC.addEventListener("click", function() { checkAnswer(answerButtonC.innerText)});
    answerButtonD.addEventListener("click", function() { checkAnswer(answerButtonD.innerText)});

    // Fetch the questions 
    async function getQuestionInformation() {
        let response = await fetch("https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple");
        questions = await response.json();
        console.log(questions);
        setQuestion();
        getAnswers();
        setAnswers();          
    };  
    

    // This function shows the question with the mcq

    function setQuestion() {  
        let question= document.querySelector("#question");
        question.innerText= questions.results[0].question;
    };

    function getAnswers() {
        // Gets the correct answer and incorrect answer and store it in a variable
        correctAnswer = questions.results[0].correct_answer;
        // Get the incorrect answers
        allAnswers = questions.results[0].incorrect_answers;
        // add the correct answer to the all answer array and call it all answers 
        allAnswers.push(correctAnswer);    
    };

    function setAnswers() {
        // generate randomnum between 0 and 3
        let randomnum = Math.floor(Math.random()*allAnswers.length);
        answerButtonA.innerText = allAnswers[randomnum];
        // remove the array item at index equal to random num
        allAnswers.splice(randomnum, 1);

        // generate randomnum between 0 and 2
        randomnum = Math.floor(Math.random()*allAnswers.length);
        answerButtonB.innerText = allAnswers[randomnum];
        // remove the array item at index equal to random num
        allAnswers.splice(randomnum, 1);

        // generate randomnum between 0 and 1
        randomnum = Math.floor(Math.random()*allAnswers.length);
        answerButtonC.innerText = allAnswers[randomnum];
        // remove the array item at index equal to random num
        allAnswers.splice(randomnum, 1);

        // answerArray lenght will now equal 0 - 1 item left in the array      
        answerButtonD.innerText = allAnswers[0];
        // remove the array item at index equal to random num
        allAnswers.splice(randomnum, 1);
    };

    // takes the answer parameter from the button click event and passes it in
    // as an argument 
        // checks if the answer clicked on is true or false

    function checkAnswer(answer) {
        if (answer === correctAnswer) {
            console.log(true);
        } else {
            console.log(false);
        }
     };

    getQuestionInformation()

    
     



     // // Display each of the answers to the button
//     allAnswers.forEach(allAnswers => {
//     const button = document.querySelector('button')
//     button.innerText = allAnswers[1].text

//     });

    /*
// We have some code that works 
    // displays the question on the page
   getQuestionInformation().then( questions => {   
    // Set the inner Text to be the current question    
    question.innerText= questions.results[0].question;
    // Gets the correct answer and store it in a variable
    correctAnswer = questions.results[0].correct_answer;
    
// Get the incorrect answers and store them in an array 
incorrectAnswer = questions.results[0].incorrect_answers;

// add the correct answer to the incorrect answer array and call it all answers 

let allAnswers = incorrectAnswer.push(correctAnswer)
console.log(allAnswers)

// Randomly assign the answers to the button
// Randomly generates a number between 0 and 3
let randomnum = Math.floor(Math.random()*allAnswers.length);
console.log(randomnum)
// Display each of the answers to the button
questions.results[0].allAnswers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    // button.classList.add('btn')
  });

// Put event listeners on each button
answerButtonA.addEventListener("click", function() { checkAnswer("A")});
  
// Put the possible answers in the buttons

 // if statement to check if the answer matches correct answer
    // tell if the answer is right or wrong and display it 
    function checkAnswer(answer) {

    }

// Function
    // Set the inner Text to be the current question ✅
    // Phase 2: Fetch one random question from the array of results
    // Put the other possible answers in the buttons 
    // if statement to check if the answer matches correct answer
        // tell if the answer is right or wrong and display it
    // function that updates the score and displays it        
    // function for timer 
    // function for feedback


    
   })

   */
