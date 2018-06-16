(function() {
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
            return prompt('Enter the correct option: ');
        }
        checkQuestion(userPrompt, callback) {
            var sc = 0;
        
            if (userPrompt === this.correct) {
                console.log("Correct!");
                sc = callback(true);
            }
            else {
                console.log("Incorrect...!");
                sc = callback(false);
            }

            this.displayScore(sc);
        }
        displayScore(score) {
            console.log('--------------------');
            console.log('Score : ' + score);
            console.log('--------------------');
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

    var score = function() {
        var sc = 0;
        return function(correct) {
            if (correct) {
                sc++;
            }
            return sc;
        }
    }

    var keepScore = score();
    
    function nextQuetion() {
        var randomQuestion = questions[Math.floor((Math.random() * questions.length))];
    
        var userPrompt = randomQuestion.askQuestion();
        if (userPrompt !== 'exit') {
            randomQuestion.checkQuestion(parseInt(userPrompt), keepScore);
            nextQuetion();
        }
    }

    nextQuetion();
})();




