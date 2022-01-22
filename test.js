var userName;
var userMail;
var qCount;
var attempt = [1, 2, 3, 4, 5];
var result=0;
var questionaire = {
    question: ["Hypothesis ?", "Garnish ?", "Autopsy", "Contrived ?", "Renumerate ?"],
    options: [
        [
            "complexity",
            "theory",
            "feeling",
            "fascination"
        ],
        [
            "direct",
            "cover",
            "embellish",
            "complete"
        ],
        [
            "post-mortem",
            "manufacture",
            "question hour",
            "none of these"
        ],
        [
            "controlled",
            "destroyed",
            "artificial",
            "rebuild"
        ],
        [
            "pay",
            "cover",
            "repair",
            "rebuild"
        ]

    ],
    answer: ["theory", "embellish", "post-mortem", "artificial", "pay"]
};



document.querySelector(".start-test-btn").addEventListener("click", function () {
    userName = document.getElementById("userName").value;
    userMail = document.getElementById("email").value;

    qCount = 1;


    document.querySelector(".entry").classList.add("hidden");
    document.querySelector(".test-name").classList.add("hidden");
    document.querySelector(".current-qn").classList.remove("hidden");
    document.querySelector(".question-num").classList.remove("hidden");
    displayCount();
    displayQuestion();
    document.querySelector(".test-clock").classList.remove("hidden");
    document.querySelector(".user-details").classList.remove("hidden");
    document.querySelector(".user-details").innerHTML = "Name: " + userName + "<br>Email: " + userMail;
    document.querySelector(".prev-btn").classList.add("disabled");

});










// at first qn previous btn is disabled
document.querySelector(".prev-btn").addEventListener("click", function () {

    if (qCount > 1) {
        qCount--;
        document.querySelector(".finish-btn").classList.add("disabled");
        document.querySelector(".next-btn").classList.remove("disabled");


        if (qCount == 1) {
            document.querySelector(".prev-btn").classList.add("disabled");
        }
        displayCount();
        displayQuestion();
    }

});



// at last qn next btn is disabled
document.querySelector(".next-btn").addEventListener("click", function () {

    if (qCount < attempt.length) {
        qCount++;
        document.querySelector(".prev-btn").classList.remove("disabled");


        if (qCount == attempt.length) {
            document.querySelector(".next-btn").classList.add("disabled");
            document.querySelector(".finish-btn").classList.remove("disabled");
        }
        displayCount();
        displayQuestion();
    }

});

// An option gets selected

// option A
document.querySelector(".the-1-option button").addEventListener("click", function () {
    document.querySelector(".the-1-option button").classList.add("active");
    deselectOthers(document.querySelector(".the-1-option button").innerHTML);
    markedOption(document.querySelector(".the-1-option button").innerHTML);
});

// option B
document.querySelector(".the-2-option button").addEventListener("click", function () {
    document.querySelector(".the-2-option button").classList.add("active");
    deselectOthers(document.querySelector(".the-2-option button").innerHTML);
    markedOption(document.querySelector(".the-2-option button").innerHTML);
});

// option C
document.querySelector(".the-3-option button").addEventListener("click", function () {
    document.querySelector(".the-3-option button").classList.add("active");
    deselectOthers(document.querySelector(".the-3-option button").innerHTML);
    markedOption(document.querySelector(".the-3-option button").innerHTML);
});

// option D
document.querySelector(".the-4-option button").addEventListener("click", function () {
    document.querySelector(".the-4-option button").classList.add("active");
    deselectOthers(document.querySelector(".the-4-option button").innerHTML);
    markedOption(document.querySelector(".the-4-option button").innerHTML);
});



// Finishing exam...
document.querySelector(".finish-btn").addEventListener("click",function(){
    result=0;
    for(var x=0;x<5;x++){
        result+=attempt[x];
        console.log(attempt[x]);
    }
    console.log(result);
});




function displayCount() {
    document.querySelector(".qn-count").textContent = qCount;
}


function displayQuestion() {
    document.querySelector(".display-question").textContent = questionaire.question[qCount - 1];

    document.querySelector(".the-1-option button").textContent = questionaire.options[qCount-1][0];
    document.querySelector(".the-2-option button").textContent = questionaire.options[qCount-1][1];
    document.querySelector(".the-3-option button").textContent = questionaire.options[qCount-1][2];
    document.querySelector(".the-4-option button").textContent = questionaire.options[qCount-1][3];
    

}


function deselectOthers(innerContent){
    
    for(var x=0;x<4;x++){
        if(document.querySelector(".the-"+(x+1)+"-option button").innerHTML!=innerContent) {
            document.querySelector(".the-"+(x+1)+"-option button").classList.remove("active");
        }
    }
}


function markedOption(markedOp){
    if(markedOp==questionaire.answer[qCount-1])
        attempt[qCount-1]=100;
    else
        attempt[qCount-1]=-50;    

    console.log(attempt[qCount]-1);
}