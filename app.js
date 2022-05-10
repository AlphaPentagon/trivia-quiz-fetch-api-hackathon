
    // Bug when using symbols in answers
    
    // Getting the elements 
    let question= document.querySelector("#question");
    let title = document.querySelector("#title");
    let timer = document.querySelector("#timer");
    let questionNumber = document.querySelector("#question-number");
    let answerButtonA = document.querySelector("#answerA");
    let answerButtonB = document.querySelector("#answerB");
    let answerButtonC = document.querySelector("#answerC");
    let answerButtonD = document.querySelector("#answerD");
    let score = document.querySelector("#score");
    let feedback = document.querySelector("#feedback");
    let continueButton = document.querySelector("#continue");
    // Declare global variables
    let questions;
    let timerCount = 10;
    let scoreCount = 0;
    let playerAnswer;
    let correctAnswer;
    let allAnswers;
    let questionCount = 1;
    let questionIndex = 0;
    // Put event listeners on buttons
    answerButtonA.addEventListener("click", function() { checkAnswer(answerButtonA.innerText)});
    answerButtonB.addEventListener("click", function() { checkAnswer(answerButtonB.innerText)});
    answerButtonC.addEventListener("click", function() { checkAnswer(answerButtonC.innerText)});
    answerButtonD.addEventListener("click", function() { checkAnswer(answerButtonD.innerText)});
    continueButton.addEventListener("click", function() { nextQuestion()});
    // Fetch the questions 
    async function getQuestionInformation() {
        let response = await fetch("https://opentdb.com/api.php?amount=10&category=11&type=multiple");
        questions = await response.json();
        console.log(questions);
        setQuestion();
        getAnswers();
        setAnswers();          
    };  
    

    // This function shows the question with the mcq

    function setQuestion() {  
        let question= document.querySelector("#question");
        question.innerHTML= questions.results[questionIndex].question;
    };

    function getAnswers() {
        // Gets the correct answer and incorrect answer and store it in a variable
        correctAnswer = questions.results[questionIndex].correct_answer;
        // Get the incorrect answers
        allAnswers = questions.results[questionIndex].incorrect_answers;
        // add the correct answer to the all answer array and call it all answers 
        allAnswers.push(correctAnswer);    
    };

    function setAnswers() {
        // generate randomnum between 0 and 3
        let randomnum = Math.floor(Math.random()*allAnswers.length);
        answerButtonA.innerHTML = allAnswers[randomnum];
        // remove the array item at index equal to random num
        allAnswers.splice(randomnum, 1);

        // generate randomnum between 0 and 2
        randomnum = Math.floor(Math.random()*allAnswers.length);
        answerButtonB.innerHTML = allAnswers[randomnum];
        // remove the array item at index equal to random num
        allAnswers.splice(randomnum, 1);

        // generate randomnum between 0 and 1
        randomnum = Math.floor(Math.random()*allAnswers.length);
        answerButtonC.innerHTML = allAnswers[randomnum];
        // remove the array item at index equal to random num
        allAnswers.splice(randomnum, 1);

        // answerArray lenght will now equal 0 - 1 item left in the array      
        answerButtonD.innerHTML = allAnswers[0];
        // remove the array item at index equal to random num
        allAnswers.splice(randomnum, 1);
    };

    // takes the answer parameter from the button click event and passes it in
    // as an argument 
        // checks if the answer clicked on is true or false

    function checkAnswer(answer) {
        answerButtonA.disabled = true;
        answerButtonB.disabled = true;
        answerButtonC.disabled = true;
        answerButtonD.disabled = true;
        if (answer === correctAnswer) {
            console.log(true);
            scoreCount++;
            score.innerText = "Score: " + scoreCount;
            feedback.innerText = "Correct answer";
        } else {
            console.log(false);
            feedback.innerText = "Wrong answer";
        }
     };

    getQuestionInformation()

    //After question is answered, generate next question
    //button (next question)
    //selct button and save into variable
    //add eventlistener to that so that when it is clicked it runs new function - generate next question
    function nextQuestion(){
        questionCount++;
        questionIndex++;
        if (questionIndex < 10) {
            setQuestion();
            questionNumber.innerText= "Question number: " + questionCount;
            getAnswers();
            setAnswers();
            answerButtonA.disabled = false;
            answerButtonB.disabled = false;
            answerButtonC.disabled = false;
            answerButtonD.disabled = false;
            feedback.innerText = "";
        } else { 
            feedback.innerText = " This is the end of the Quiz! You have scored: " + scoreCount + " points"
        }       
        
    };

    

    
     

