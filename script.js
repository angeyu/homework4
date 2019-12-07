// quiz content
var questions = 
[
    {
      question: "What is the resting potential of a neuron?",
      choices: ["-70 mV", "-60 mV", "0 mV", "70 mV"],
      answer: "-70 mV"
    },
    {
      question: "Which lobe of the brain is primarily responsible for our ability to see?",
      choices: ["temporal lobe", "occipital lobe", "frontal lobe", "parietal lobe"],
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
      question: "What can the nerve impulse also be called?",
      choices: ["multipolar", "refractory energy burst", "negative after-image", "action potential"],
      answer: "action potential"
     },
     { 
      question: "What is the main function of the myelin sheath?",
      choices: ["protective coating for nerve axons", "block reception of acetylcholine", "affect speed of nerve impulses", "cushion the brain"],
      answer: "affect speed of nerve impulses"
     },
  ]

//connect html elements here
var highscores = document.querySelector("#highscores");
var timer = document.querySelector("#timer");
var quizcontent = document.querySelector("#content");
var quizbody = document.querySelector("#quizbody");
var subtext = document.querySelector("#subtext");
var userscore = document.querySelector("#userscore");
//button to take quiz
var takequiz = document.querySelector("#startquiz");
var time = "150";
var ii = "0";
var score = 0;
var highscorestracker = ""


//take the quiz
takequiz.addEventListener("click", start);

function start() {
    var userchoice = questions[ii].choices
    document.getElementById("timer").innerHTML = "Timer: " + time;
    interval = setInterval(countDown, 1000);
    quizbody.textContent = questions[ii].question;
    takequiz.parentNode.removeChild(takequiz);
    subtext.textContent = " ";


//make some bottons 
    for (i = 0; i < userchoice.length; i++) 
    {
    var button01 = document.createElement("button");
    var br = document.createElement("br");
    var hr = document.createElement("hr");
    button01.setAttribute("class","answer");
    button01.innerHTML = userchoice[i];
    quizcontent.appendChild(button01);
    quizcontent.appendChild(br);
    quizcontent.appendChild(hr);

        if (userchoice[i] === questions[ii].answer) 
            {
            button01.setAttribute("id", "correct");
            button01.addEventListener("click", correct);
            }
        else 
            {
            button01.addEventListener("click", wrong);
            }
    }
}

function countDown() {

    if (time >= 0) {
        time--;
    }
    else {
        clearInterval(time);
        document.getElementById("timer").innerHTML = "Your time is up";
    }

    document.getElementById("timer").innerHTML = "Timer: " + time;
}

//correct answer
function correct() {
    ii++;
    quizbody.textContent = questions[ii].question;
    subtext.textContent = "correct!!!!!!!!! :)))";
    subtext.setAttribute("style", "color: green;");
    quizcontent.appendChild(subtext);
    score = score + 5;
    userscore.textContent = "Score: " + score;

    verify();
}

//wrong answer

function wrong() {
    ii++;
    quizbody.textContent = questions[ii].question;
    subtext.textContent = "wrong!! :(";
    subtext.setAttribute("style", "color: red;");
    quizcontent.appendChild(subtext);
    score = score - 1;
    userscore.textContent = "Score: " + score;


    verify();
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

function verify() {

    var userchoice = questions[ii].choices;
    var answer = document.querySelectorAll(".answer");

    for (i = 0; i <answer.length; i++) 
    {
        answer[i].innerHTML = userchoice[i];
    }

    if (userchoice[i] === questions[ii].answer)
    {
        answer[i].removeEventListener("click", wrong);
        answer[i].removeAttribute("id");
        answer[i].setAttribute("id", "correct");
        answer[i].addEventListener("click", correct);
    }

    else if (userchoice[i] === "finish") {

        localStorage.setItem("finalscore", JSON.stringify(ended));
        clearInterval(interval);
        window.location.href = "highscore.html";
    }

    else {
        answer[i].removeEventListener("click", correct);
        answer[i].removeAttribute("id");
        answer[i].removeAttribute("style");
        answer[i].addEventListener("click", wrong);
    }
}

