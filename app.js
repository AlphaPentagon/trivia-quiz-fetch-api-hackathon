
    
    
    // Fetch the questions 

    let questions;
    async function getQuestions() {
        let response = await fetch("https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple");
         questions = await response.json();
        console.log(questions);
        
        return questions;
    }
// We have some code that works 
   getQuestions().then( questions => {
    console.log(questions.results[0].question);
    let question= document.querySelector("#question");
    question.innerText= questions.results[0].question;
  })
// Getting the elements 
// console log 1 question
// while the promise is in a state of resolve 
//console.log(questions.results[0].question);
  // Set the inner Text to be the current question
// let question= document.querySelector("#question");
// question.innerText= questions.results[0].question;
// Select the Question using our question id 

// Function
    // Set the inner Text to be the current question
    // Fetch one random question from the array of results
    // Put the other possible answers in the buttons 
    // if statement to check if the answer matches correct answer
        // tell if the answer is right or wrong and display it
    // function that updates the score and displays it        
    // function for timer 
    // function for feedback


    
    