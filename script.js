// variable to use moment js to put the date and time on html
var timeNdate = moment().format("MMMM Do YYYY, h:mm:ss a")
$("#todaysdatetime").text(timeNdate);

// function to update the above timeNdate variable every second
var update = function() {
    document.getElementById("todaysdatetime").innerHTML = moment().format("MMM do YYYY, h:mm:ss a")
}

setInterval(update, 1000)

// $(document).ready(function() {

    $("saveBtn").on("click", function() {
    var value = $(this).sibling(".information").val()
    var time = $(this).parent().attr("id")
    localStorage.setItem(time, value)
    }) 

function updateColor() {
    var now = new Date().getHours()
    if (now > 9) {
        $("#9am").addClass("past")
    }   else if (now >= 9 && now <10) {
        $("#9am").addClass("present")
    }   else {
        $("#9am").addClass("future")
    }            
}