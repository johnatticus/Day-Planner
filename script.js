// variable created that equals the current time and date via moment js
var timeNdate = moment().format("dddd, MMMM Do YYYY, h:mm:ss a")
// writes that created variable to the html
$("#todaysdatetime").text(timeNdate);



// function to update the above timeNdate variable every second
var update = function() {
    document.getElementById("todaysdatetime").innerHTML = moment().format("dddd, MMMM do YYYY, h:mm:ss a")
}
// sets the time displayed to update every second
setInterval(update, 1000)

// start a jquery function
$(document).ready(function() {
    // function to make info save to local storage when the save button is pressed
    // listens for click on the save button to run the function
    // sets variables for time and value for the info entered by user
    // saves them to local storage
    $(".saveBtn").on("click", function() {
    var value = $(this).siblings(".information").val()
    var time = $(this).parent().attr("id")
    localStorage.setItem(time, value)
    console.log(value)

    hourColors()
    })

    // set a constant that encompasses all rows in the html for all the business hours
    // since all arrays 
    // const rows = document.getElementsByClassName("row");
// sets currentHour to the local time hour with moment js api
    let currentHour = 11 //moment().hours();
    
    function hourColors() {
        for (let i = 9; i < 18; i++) {
            const element = document.getElementById(`${i}`)
            if (currentHour > i) {
                $(element).addClass("past")
            } else if (currentHour < i) {
                $(element).addClass("future")
            } else {
                $(element).addClass("present")
            }
        }
    }

    // pulls any local storage to populare the planner when it is refreshed or re-opened
// this information is populated by the save button earlier in the script
$("#9 .information").val(localStorage.getItem("9"))
$("#10 .information").val(localStorage.getItem("10"))
$("#11 .information").val(localStorage.getItem("11"))
$("#12 .information").val(localStorage.getItem("12"))
$("#13 .information").val(localStorage.getItem("13"))
$("#14 .information").val(localStorage.getItem("14"))
$("#15 .information").val(localStorage.getItem("15"))
$("#16 .information").val(localStorage.getItem("16"))
$("#17 .information").val(localStorage.getItem("17"))
});