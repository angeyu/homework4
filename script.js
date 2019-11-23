// quiz content
var quizquestions = 
    
    [

    {
      question: "What is the resting potential of a neuron?",
      choices: ["-70 mV", "-60 mV", "0 mV", "70 mV"],
      answer: "-70 mV"
    },

    {
      question: "Which lobe of the brain is primarily responsible for our ability to see?",
      choices: ["occipital lobe", "temporal lobe", "frontal lobe", "parietal lobe"],
      answer: "occipital lobe"
    }, 

   { 
     question: "What is the basic sampling unit of an fMRI imaging study?",
     choices: ["cubic", "pixel", "square", "voxel"],
     answer: "voxel"
    },

    { 
      question: "Which of the following is not considered a part of the limbic system?",
      choices: ["amygdala", "globus pallidus", "hippocampus", "cingulate gyrus"],
      answer: "globus pallidus"
     },

     { 
      question: "The peripheral nervous system is derived from what embryonic structure?",
      choices: ["neural tube", "neural crest", "diencephelon", "telencephelon"],
      answer: "neural crest"
     },

    { 
      question: " ",
      choices: ["you are done!!!!!!"],
      answer: " "
     }

  ]

//html id declare

var quiztitle = document.querySelector("#highscores");
var timersign = document.querySelector("#timer");
var container = document.querySelector("#container");
var quizcontainer = document.querySelector("#thequiz");
var quiztitle = document.querySelector("#title");
var quizinfo = document.querySelector("#quizinfo");
var takequizbutton = document.querySelector("#quizstart");

var answer01 = document.querySelectorAll(".answer");

var time = "100";
var questiontracker = "0";
var score = "0";
var highscorestracker = ""

//timer

if (time >= 0) 
{

    time--;
}

else 
{
    clearInterval(time);
    document.getElementById("timer").innerHTML = "hello the time is up!!!!";
}

document.getElementById("timer").innerHTML = "Timer: " + time;

//take the quiz
takequizbutton.addEventListener("click", takequizbutton);

function takequiz() {

    document.getElementById("timer").innerHTML = "Timer: " + time;
    interval = setInterval(countDown, 1000)

    var quizchoice = quizquestions[questiontracker].choices

    quiztitle.textContent = quizquestions[questiontracker].title;

    takequizbutton.parentNode.removeChild(takequizbutton);

    quiz_instr.textContent = " ";

    for (i = 0; i < quizchoice.length; i ++) 
    {
    var button01 = document.createElement("button");
    var br = document.createElement("br");
    var hr = document.createElement("hr");
    button01.setAttribute("class", 
    "answer");
    button01.innterHTML = quizchoice[i];
    quizcontainer.appendChild(button01);
    quizcontainer.appendChild(br);
    quizcontainer.appendChild(hr);

    if (quizchoice[i] === quizquestions[questiontracker].answer) 
    {
        button01.setAttribute("id", "correct_answer");
        button01.addEventListener("click", correct_answer);
    }
    else {
        button01.addEventListener("click", wrong_answer);
         }
    }
  
}

//correct answer
function correct() {
    questiontracker++;

    quiztitle.textContent = "correct!!!!!!!!!";
    quiztitle.setAttribute("style", "color: green;");
    quizcontainer.appendChild(quiztitle);

    checker();
}

//wrong answer

function wrong() {
    questiontracker++;

    quiztitle.textContent = "wrong!! :(";
    quizcontainer.setAttribute("style", "color: red;");
    quizcontainer.appendChild(quiztitle);

    checker();
}

function countDown() {

    if (time >= 0) {
        time--;
    }
    
    else {
        clearInterval(time);
        document.getElementById("timer").innerHTML = "time is up my dude";
    }

    document.getElementById("timer").innerHTML = "Timer: " + time;
}

function checker() {

    var quizchoice = quizquestions[questiontracker].choices;

    var answer = document.querySelectorAll("")//.answer?

    for (i = 0; i <answer.length; i++) {
        answer[i].innerHTML = quizchoice[i];

    }

    if (quizchoice[i] === quizquestions[questiontracker].answer) 
    {
        answer[i].removeEventListener("click", wrong);
        answer[i].removeAttribute("id");
        answer[i].setAttribute("id", "correct");
        answer[i].addEventListener("click", correct);

    }


}