
    
    async function getQuestions() {
        let response = await fetch("https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple");
        let questions = await response.json();
        console.log(questions);
        return questions;
    }

    
    