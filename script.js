class Question {
    constructor(question, answers, correct) {
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }
    
    askQuestion() {
        console.log(this.question);
        for (var i = 0; i < this.answers.length; i++)
            console.log(i + ")  " + this.answers[i]);
        return userPrompt = prompt('Enter the correct option: ');
    }
    checkQuestion(userPrompt) {
        if (userPrompt == this.correct) {
            console.log("Correct!");
        }
        else {
            console.log("Incorrect...!");
        }
    }
};

var questions = []

questions.push(new Question(
    "Who is the inventor of JavaScript?", ['James Gosling', 'Dennis Ritchie', 'Brendan Eich'], 2
));

questions.push(new Question(
    "Which is the most popular version of JavaScript?", ['ES5', 'ES6', 'ES9'], 1
));

questions.push(new Question(
    "When was JavaScript invented?", ['1955', '1967', '1991'], 0
));

//console.log(questions);

do {
    var randomQuestion = questions[Math.floor((Math.random() * 3))];

    var userPrompt = randomQuestion.askQuestion();
    if (userPrompt == 'exit') {
        break;
    }

    randomQuestion.checkQuestion(userPrompt);
} while (true);




