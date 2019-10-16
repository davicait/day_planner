// Variables
var now = moment();


//Function to display and update the time dynamically 
var update = function() {
    $("#currentDay").html(moment().format('MMMM Do YYYY, h:mm:ss a'));
}
setInterval(update, 1000);

// Button onclick events

$("#times1").click(function (){
    localStorage.one = ($("#text1").val());
})
$("#times2").click(function (){
    localStorage.two = ($("#text2").val());
})
$("#times3").click(function (){
    localStorage.three = ($("#text3").val());
})
$("#times4").click(function (){
    localStorage.four = ($("#text4").val());
})
$("#times5").click(function (){
    localStorage.five = ($("#text5").val());
})
$("#times6").click(function (){
    localStorage.six = ($("#text6").val());
})
$("#times7").click(function (){
    localStorage.seven = ($("#text7").val());
})
$("#times8").click(function (){
    localStorage.eight = ($("#text8").val());
})
$("#times9").click(function (){
    localStorage.nine = ($("#text9").val());
})

// Function to retrieve stored value from local storage
 var remember = function() { 
    var fill1 = localStorage.one;
    $("#text1").val(fill1);
    var fill2 = localStorage.two;
    $("#text2").val(fill2);
    var fill3 = localStorage.three;
    $("#text3").val(fill3);
    var fill4 = localStorage.four;
    $("#text4").val(fill4);
    var fill5 = localStorage.five;
    $("#text5").val(fill5);
    var fill6 = localStorage.six;
    $("#text6").val(fill6);
    var fill7 = localStorage.seven;
    $("#text7").val(fill7);
    var fill8 = localStorage.eight;
    $("#text8").val(fill8);
    var fill9 = localStorage.nine;
    $("#text9").val(fill9);
}

// Function to update color depending upon time of day

function colors() {
    var t = moment().format("H");
    var textFields = ["#time1", "#time2", "#time3", "#time4", "#time5", "#time6", "#time7", "#time8", "#time9"];
    for (var i=0; i<textFields.length; i++) {
        var compareTime = i+9;
    if (t<compareTime) {
        $(textFields[i]).attr("class", "future");
    } else if (t > compareTime) {
        $(textFields[i]).attr("class", "past");
    } else $(textFields[i]).attr("class", "present");
    }
}
colors();
remember();

