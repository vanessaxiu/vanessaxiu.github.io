
var quiz = [
    {
        "question": "what is the gender you were assigned at birth",
        "choices": ["male", "female"],
        "w_i": [48.86, 21.14]
    }, {
        "question": "in the last 12 months, have you had sex with a male",
        "choices": ["yes", "choice2", "choice3", "choice4"],
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

var i_q = 0,
    w_t = 0;

function $(id) {
    return document.getElementById(id);
}

var content = $("content"),
    questionContainer = $("questionContainer"),
    choicesContainer = $("choicesContainer"),
    submitBtn = $("submitBtn");

function ask() {
    var choices = quiz[i_q].choices,
        choicesHtml = "";
    for (var i = 0; i < choices.length; i++) {
        choicesHtml += "<input type='radio' name='quiz" + i_q +
        "' id='choice" + (i + 1) +
        "' value='" + choices[i] + "'>" +
        " <label for='choice" + (i + 1) + "'>" + choices[i] + "</label><br>";
    }

    questionContainer.textContent = "Q" + (i_q + 1) + ". " +
    quiz[i_q].question;

    choicesContainer.innerHTML = choicesHtml;
}

function check() {
    var radios = document.getElementsByName("quiz" + i_q);
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            w_t = w_t + quiz[i_q].w_i[i];
        }
    }

    if (i_q < quiz.length - 1) {
        i_q++;
        ask();
    } else {
        grade();
    }

}

function grade() {
    document.getElementById('submitBtn').disabled="true";
    content.innerHTML = "<h2>Thank you for completing the test!</h2>" + "<h2>Below are your risk scale and suggested treatment options:</h2>"
    if (w_t <10){
    content.innerHTML += "<img src=\"images/test-low.jpeg\">";}
    else if(w_t<20){content.innerHTML+="<img src=\"images/test-medium.jpeg\">";}
    else {content.innerHTML+="<img src=\"images/test-high.jpeg\">";}
}


window.addEventListener("load", ask, false);
submitBtn.addEventListener("click", check, false);
(function(count){
    $("#submitBtn").click(function(){
        if(++count === 2) this.style.display = 'none';
        return false;
    });
})(0);


