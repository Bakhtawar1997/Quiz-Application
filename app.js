

function check() {
    var score = 0
    var right_answer_1 = document.getElementById("q1-right");
    var q1_ans2 = document.getElementById("q1-ans2");
    var q1_ans3 = document.getElementById("q1-ans3");
    var q1_ans4 = document.getElementById("q1-ans4");
    if(right_answer_1.checked == true) {
        score++
        alert("Q1 answer Right")
    }
else{
    alert("Q1 answer wrong")
}

var right_answer_2 = document.getElementById("q2-right");
    var q2_ans2 = document.getElementById("q2-ans2");
    var q2_ans3 = document.getElementById("q2-ans3");
    var q2_ans4 = document.getElementById("q2-ans4");
    if(right_answer_2.checked == true) {
        score++
        alert("Q2 answer Right")
    }
else{
    alert("Q1 answer wrong")
}

var right_answer_3 = document.getElementById("q3-right");
    var q2_ans2 = document.getElementById("q3-ans2");
    var q3_ans3 = document.getElementById("q3-ans3");
    var q3_ans4 = document.getElementById("q3-ans4");
    if(right_answer_3.checked == true) {
        score++
        alert("Q3 answer Right")
    }
else{
    alert("Q1 answer wrong")
}
location.href = "end.html"
 var result = score++;

document.write("Your scors is " + " " + result)


}