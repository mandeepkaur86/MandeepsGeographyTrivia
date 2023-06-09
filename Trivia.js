
allQs = [
    {
        "Question":"Which is largest state in United States",
        "Answer":"Arizona",
        "Options":"Texas , Arizona, California, Indiana"
    },

    {
        "Question":"Which is largest river in United States",
        "Answer":"Nile",
        "Options":"Texas,Nile,Missisippi,Indiana"
    },
    {
        "Question":"Which is largest Q3 in United States",
        "Answer":"A3",
        "Options":"A1,A2,A3,A4"
    },
    {
        "Question":"Which is largest Q4 in United States",
        "Answer":"A4",
        "Options":"A1,A2,A3,A4"
    },
    {
        "Question":"Which is largest Q5 in United States",
        "Answer":"A5",
        "Options":"A1,A2,A4,A5"
    }
]


let question = null;
let score = 0;
let totalQuestion = 0;
let max =5;
getRandomQuestion();


function getRandomQuestion()
{
    let random = getRandomNumber();
    question = allQs[random];

    document.getElementById("question").innerText = question.Question;
    let options = question.Options;
    let allOptions = options.split(",");
    console.log(allOptions[2]);
    document.getElementById("op1").textContent = allOptions[0];
    document.getElementById("op2").innerText = allOptions[1];
    document.getElementById("op3").innerText = allOptions[2];
    document.getElementById("op4").innerText = allOptions[3];
    totalQuestion++;

}


function checkAnswer(userButton)
{
    console.log(question.Answer);
    let buttonPressed = document.getElementById(userButton);
    let userAnswer = buttonPressed.innerText;
    console.log(userAnswer);
    if(question.Answer === userAnswer)
    {
        console.log("qual");
        score ++;
        document.getElementById("score").innerText = score;
        document.getElementById("face").setAttribute("src","assests/HappyImage.jpg");
    }
    else
    {   
        console.log("not equal");
        score --;
        document.getElementById("score").innerText = score;
        document.getElementById("face").setAttribute("src","assests/sadface.png");

    }
    setTimeout('', 10000);
    if(totalQuestion < max)
        getRandomQuestion();
    else
        gameOver();
}


function getRandomNumber()
{
   
    let randomNumber = Math.floor(Math.random() * max);
     console.log(randomNumber);
     return randomNumber;
      
}

function gameOver()
{
    let gameOver = document.getElementById(gameOver);
    console.log(gameOver);

    //Question in different js
    //more questions
    // Display proper big image of score while playing the game 
    // display messsage to over Game over . you score is 
}

