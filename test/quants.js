var userName;
var userMail;
var qCount;
var attempt = [1, 2, 3, 4, 5];
var result = 0;
var questionaire = {
    question: [
        "What must be added to each of the numbers 7, 11 and 19, so that the resulting numbers may be in continued proportion ?",
        "If x varies inversely as (y2 - 1) and is equal to 24 when y = 10, the value of x when y =  5 will be ?",
        "A basket contains Rs 216 in the form of one rupee, 50 paise and 25 paise coins in the ratio of 3 : 4 : 4. The number of 50 paise coins is ?",
        "If the ratio of boys to girls in a class is B and the ratio of girls to boys is G; then 3 (B + G) is ?",
        "If (1/3)A = (1/4)B = (1/5)C. Then A : B : C is "
    ],
    options: [
        [
            "3",
            "5",
            "-3",
            "-5"
        ],
        [
            "98",
            "99",
            "100",
            "None of these"
        ],
        [
            "96",
            "128",
            "144",
            "None of these"
        ],
        [
            "3",
            "less than 3",
            "more than 3",
            "None of the above 3"
        ],
        [
            "4:3:5",
            "5:4:3",
            "3:4:5",
            "20:15:12"
        ]

    ],
    answer: ["-3", "99", "144", "more than 3", "3:4:5"],
    marked: ['0', '0', '0', '0', '0']
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
    startTimer();
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
        recordedAttempt();
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
        recordedAttempt();
    }

});

// An option gets selected

// option A
document.querySelector(".the-1-option button").addEventListener("click", function () {
    document.querySelector(".the-1-option button").classList.add("active");
    deselectOthers(document.querySelector(".the-1-option button").innerHTML);

    questionaire.marked[qCount - 1] = '1';
});

// option B
document.querySelector(".the-2-option button").addEventListener("click", function () {
    document.querySelector(".the-2-option button").classList.add("active");
    deselectOthers(document.querySelector(".the-2-option button").innerHTML);

    questionaire.marked[qCount - 1] = '2';
});

// option C
document.querySelector(".the-3-option button").addEventListener("click", function () {
    document.querySelector(".the-3-option button").classList.add("active");
    deselectOthers(document.querySelector(".the-3-option button").innerHTML);

    questionaire.marked[qCount - 1] = '3';
});

// option D
document.querySelector(".the-4-option button").addEventListener("click", function () {
    document.querySelector(".the-4-option button").classList.add("active");
    deselectOthers(document.querySelector(".the-4-option button").innerHTML);

    questionaire.marked[qCount - 1] = '4';
});



// Finishing exam...
document.querySelector(".finish-btn").addEventListener("click", function () {
    result = 0;
    for (var x = 0; x < 5; x++) {
        if (questionaire.options[x][questionaire.marked[x] - 1] == questionaire.answer[x]) {
            result += 100;
        }
        else if (questionaire.marked[x] != 0)
            result -= 50;

    }
    console.log(result);
});




function displayCount() {
    document.querySelector(".qn-count").textContent = qCount;
}


function displayQuestion() {
    document.querySelector(".display-question").textContent = questionaire.question[qCount - 1];

    document.querySelector(".the-1-option button").textContent = questionaire.options[qCount - 1][0];
    document.querySelector(".the-2-option button").textContent = questionaire.options[qCount - 1][1];
    document.querySelector(".the-3-option button").textContent = questionaire.options[qCount - 1][2];
    document.querySelector(".the-4-option button").textContent = questionaire.options[qCount - 1][3];


}


function deselectOthers(innerContent) {

    for (var x = 0; x < 4; x++) {
        if (document.querySelector(".the-" + (x + 1) + "-option button").innerHTML != innerContent) {
            document.querySelector(".the-" + (x + 1) + "-option button").classList.remove("active");
        }
    }
}



function recordedAttempt() {
    if (questionaire.marked[qCount - 1] == 0) {
        deselectOthers("unmarked");
    }
    if (questionaire.marked[qCount - 1] != 0) {
        document.querySelector(".the-" + questionaire.marked[qCount - 1] + "-option button").classList.add("active");
        deselectOthers(document.querySelector(".the-" + questionaire.marked[qCount - 1] + "-option button").innerHTML);

    }
}


//creating timer
function startTimer() {
    var timer = 5*60, minutes, seconds;
    const timedec = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        document.querySelector(".time-left").textContent = "00:" + minutes + ":" + seconds;

        if (--timer < 0) {
            clearInterval(timedec);
            preResult();
        }

    }, 1000);
}


function preResult() {
    document.querySelector(".question-num").classList.add("hidden");
    document.querySelector(".test-clock").classList.add("hidden");
    document.querySelector(".current-qn").classList.add("hidden");
    document.querySelector(".qn-ans-window").innerHTML = "<h1>Calculating Result...</h1>";

    setTimeout(() => {
        document.querySelector(".qn-ans-window").innerHTML = "<h1>You Scored " + result + "/500 marks. Well done( I guess :3 )</h1>";
    }, 5000);

}