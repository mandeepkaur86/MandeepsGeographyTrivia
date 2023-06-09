
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
        document.getElementById("face").setAttribute("src","assests/SadFace.png");

    }
    setTimeout('', 10000);
}


function getRandomNumber()
{
    let max = 5;
    let randomNumber = Math.floor(Math.random() * max);
     console.log(randomNumber);
     return randomNumber;
      
}
