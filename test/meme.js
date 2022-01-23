var userName;
var userMail;
var qCount;
var attempt = [1, 2, 3, 4, 5];
var result = 0;
var questionaire = {
    question: ["Hello There", "It was me..", "Alright...ima", "All you had to do was to follow __________ CJ!", "Ve mera _____ ni aya _____ .."],
    options: [
        [
            "Hello",
            "Hey",
            "Hi",
            "General Kenobi"
        ],
        [
            "Apple",
            "Bat",
            "Cat",
            "Dio"
        ],
        [
            "Stop",
            "Dance",
            "Head out",
            "None of these"
        ],
        [
            "your dreams",
            "the dog",
            "the damn train",
            "the balloon"
        ],
        [
            "dolla",
            "Amazon se parcel",
            "Offer letter",
            "Kuch to ane wala tha wo"
        ]

    ],
    answer: ["General Kenobi", "Dio", "Head out", "The Damn train", "dolla"],
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
    preResult();
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
    var timer = 60, minutes, seconds;
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