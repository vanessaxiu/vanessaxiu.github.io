
var quiz = [
    {
    "question": "what is the gender you were assigned at birth",
    "choices":[ "male", "female"],
    "w_i": [2, 1]
    }, 
    {"question": "In the last 12 months, have you had sex with a male",
    "choices":[ "Yes", "No", "Unknown"],
    "w_i": [4, 1, 3]
    }, 
    {
    "question": "Did you use condoms with male partners in the past 12 months",
    "choices":[ "Always", "Never", "Usually (>50%) or sometimes", "Not applicable (no vag/anal sex)" ],
    "w_i": [1, 3, 2, 0]
    }, 
    {
    "question": "In the last 12 months, have you had sex with a female",
    "choices":[ "Yes", "No", "Unknown"],
    "w_i": [2, 1, 0]
    }, 
    {
    "question": "Did you use condoms with female partners in the past 12 months",
    "choices":[ "Always", "Never", "Usually (>50%) or Sometimes", "Not applicable (no vag/anal sex)", "Unknown or Declined"],
    "w_i": [0, 3, 1, 0, 1]
    }, 
    {
    "question": "When was the last time you injected drugs",
    "choices":[ "Less than 12 months ago", "Less than 3 months ago", "More than 12 months ago", "Never injected"],
    "w_i": [1, 2, 0, 0]
    }, 
    {
    "question": "Did you have Hepatitis B infection in the past",
    "choices":[ "Yes", "No"],
    "w_i": [2, 1]
    }, 
    {
    "question": "Did you have contact with chlamydia",
    "choices":[ "Yes", "No"],
    "w_i": [2, 1]
    }, 
    {
    "question": "Did you have other past STI infections",
    "choices":[ "Yes", "No"],
    "w_i": [2, 1]
    }, 
    {
    "question": "Did you have gonorrhea infection in the past",
    "choices":[ "Yes", "No"],
    "w_i": [2, 1]
    },
    {"question": "what is your immigration status",
    "choices": ["Canadian citizen, Quebec residents", "Canadian citizen, non-Quebec residents", "foreigner"],
    "w_i": [0, 0,0]
    },
    {
    "question": "what is your annual income level",
    "choices": ["0-10000CAD", "10001-50000CAD", ">50000CAD"],
    "w_i": [0,0,0]
    },
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
    content.innerHTML = "<h1>Thank you for completing the test!</h1>" + "<h1>Below are your risk scale and suggested prevention options:</h1>" + "<h1><a href=\"https://fqsida.org/en/member-organizations/?lang=en\"><span>NGO prevention resources</span></a></h1>";
    if (w_t <11){
    content.innerHTML += "<img src=\"images/test-low.jpeg\">";}
    else if(w_t<19){content.innerHTML+="<img src=\"images/test-medium.jpeg\">";}
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


