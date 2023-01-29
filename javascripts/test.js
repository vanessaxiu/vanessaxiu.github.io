
var quiz = [
    {
        "question": "Question01",
        "choices": ["choice1", "choice2", "choice3", "choice4"],
        "w_i": [1, 2, 3, 4]
    }, {
        "question": "Question02",
        "choices": ["choice1", "choice2", "choice3", "choice4"],
        "w_i": [1, 2, 3, 4]
    }, {
        "question": "Question03",
        "choices": ["choice1", "choice2", "choice3", "choice4"],
        "w_i": [1, 2, 3, 4]
    }, {
        "question": "Question04",
        "choices": ["choice1", "choice2", "choice3", "choice4"],
        "w_i": [1, 2, 3, 4]
    }, {
        "question": "Question05",
        "choices": ["choice1", "choice2", "choice3", "choice4"],
        "w_i": [1, 2, 3, 4]
    }
];
// define elements

// init vars
var i_q = 0,
    w_t = 0;

function $(id) { // shortcut for document.getElementById
    return document.getElementById(id);
}

var content = $("content"),
    questionContainer = $("questionContainer"),
    choicesContainer = $("choicesContainer"),
    submitBtn = $("submitBtn");

function ask() {
    var choices = quiz[i_q].choices,
        choicesHtml = "";

    // loop through choices, and create radio buttons
    for (var i = 0; i < choices.length; i++) {
        choicesHtml += "<input type='radio' name='quiz" + i_q +
        "' id='choice" + (i + 1) +
        "' value='" + choices[i] + "'>" +
        " <label for='choice" + (i + 1) + "'>" + choices[i] + "</label><br>";
    }

    // load the question
    questionContainer.textContent = "Q" + (i_q + 1) + ". " +
    quiz[i_q].question;

    // load the choices
    choicesContainer.innerHTML = choicesHtml;
}

function check() {
    // determine which radio button they clicked
    var radios = document.getElementsByName("quiz" + i_q);
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) { // if this radio button is checked
            w_t = w_t + quiz[i_q].w_i[i];
        }
    }

    // if we're not on last question, increase question number
    if (i_q < quiz.length - 1) {
        i_q++;
        ask();
    } else {
        grade();
    }

}

function grade() {
    document.getElementById('submitBtn').disabled="true";
    if (w_t <10){
    content.innerHTML="<img src=\"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/apples-at-farmers-market-royalty-free-image-1627321463.jpg?crop=1.00xw:0.631xh;0.00160xw,0.206xh&resize=980:*\">";}
    else{content.innerHTML="<img src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Banana-Single.jpg/800px-Banana-Single.jpg\">";}
}


window.addEventListener("load", ask, false);
submitBtn.addEventListener("click", check, false);
(function(count){
    $("#submitBtn").click(function(){
        if(++count === 2) this.style.display = 'none';
        return false; // returning false prevents form submission
    });
})(0);


