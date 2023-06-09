
allQs = [
    {
        "Question":"Which is largest state in United States",
        "Answer":"Arizona",
        "Options":"Texas , Arizona, California, Indiana"
    },
    {
        "Question":"Which is largest river in United States",
        "Answer":"Nile",
        "Options":"Texas , Nile, Missisippi, Indiana"
    }
]


let question = getRandomQuestion();

function checkAnswer(answer)
{
    console.log(question.Answer);
    let buttonPressed = document.getElementById(answer);
    let userAnswer = buttonPressed.innerText;
    console.log(userAnswer);
   
}

function getRandomQuestion()
{
    console.log(allQs[1]);
    return allQs[1];

}

function displayNewQuestion()
{
    question = getRandomQuestion();
}