
let question = null;
let score = 0;
let totalQuestions = allQs.length;
let questionNum =1;
let quizTotal = 10;



//allButtons
let btn1 = document.getElementById("op1");
let btn2 = document.getElementById("op2");
let btn3 = document.getElementById("op3");
let btn4 = document.getElementById("op4");
let buttonPressed =  document.getElementById("op4");
getRandomQuestion();
function getRandomQuestion()
{
    let random = getRandomNumber();
    makeButtonClickable();
    document.getElementById("face").setAttribute("src","assests/Thinking.gif");
    question = allQs[random];
    console.log(question.Answer);
    document.getElementById("question").innerText = questionNum +". "+question.Question;
    let options = question.Options;
    let allOptions = options.split(",");
    
    document.getElementById("op1").innerText = allOptions[0];
    document.getElementById("op2").innerText = allOptions[1];
    document.getElementById("op3").innerText = allOptions[2];
    document.getElementById("op4").innerText = allOptions[3];
    questionNum++;

}

function makeButtonNonClickable()
{
    btn1.removeAttribute("onclick");
    btn2.removeAttribute("onclick");
    btn3.removeAttribute("onclick");
    btn4.removeAttribute("onclick");
}
function makeButtonClickable()
{
    btn1.setAttribute("onclick","checkAnswer('op1')");
    btn2.setAttribute("onclick","checkAnswer('op2')");
    btn3.setAttribute("onclick","checkAnswer('op3')");
    btn4.setAttribute("onclick","checkAnswer('op4')");
    buttonPressed.setAttribute("style","background-color:aqua");
}
function checkAnswer(userButton)
{
    console.log("Clicked");
    buttonPressed = document.getElementById(userButton);
    buttonPressed.setAttribute("style","background-color:cornflowerblue");
    let userAnswer = buttonPressed.innerText;
    console.log(userAnswer);
    makeButtonNonClickable();
    if(question.Answer === userAnswer)
    {
        console.log("equal");
        score ++;
        document.getElementById("score").innerHTML = "<h2>You Score is : "+score+ "</h2>";
        document.getElementById("face").setAttribute("src","assests/HappyImage.jpg");
    }
    else
    {   
        console.log("not equal");
        score --;
        
        document.getElementById("Score").innerText = "<h2>you Score is: "+score+"</h2>";
        document.getElementById("face").setAttribute("src","assests/sad2.gif");

    }
   setTimeout(nextStep, 5000);
   
}

function nextStep()
{
    if(questionNum <= quizTotal)
    getRandomQuestion();
    else
    gameOver();
}

function getRandomNumber()
{
   
    let randomNumber = Math.floor(Math.random() * totalQuestions);  
     console.log(randomNumber);
     return randomNumber;
      
}

function gameOver()
{
    let header = document.getElementById("empty");
    let main = document.getElementById("main");
    let image = document.getElementById("faceDiv");
    image.innerHTML="";
    image
    if(score >7)
    {
        main.innerHTML = "<h1>GAME OVER</h1>";
        main.innerHTML += "<h2>Good Job. You are stellar</h2><h3> You Score is "+score+"</h3>";
    }
    else
    {
        main.innerHTML = "<h1>GAME OVER</h1>";
        main.innerHTML += "<h2> Better luck next time </h2><h3> You Score is "+score+"</h3>";
    }

    //Question in different js
    //more questions
    // Display proper big image of score while playing the game 
    // display messsage to over Game over . you score is 
}

