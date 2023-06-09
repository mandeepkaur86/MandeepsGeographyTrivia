
let question = getRandomQuestion();

function checkAnswer(answer)
{
    let ans = document.getElementsById(answer);
    let userAnswer = ans.Text;
    console.log(userAnswer);
}

function getRandomQuestion()
{
    return allQ[1];
}