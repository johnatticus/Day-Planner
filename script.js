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
    // sets variables for time and value for the info entered by user by going into the parent and sibling divs and text area
    // saves them to local storage
    $(".saveBtn").on("click", function() {
    var value = $(this).siblings(".information").val()
    var time = $(this).parent().attr("id")
    localStorage.setItem(time, value)
    })
    
    // run the hourColors function
    colorTheHours()
});    

// sets currentHour to the local time hour with moment js api
let currentHour = moment().hours();

// function to run through the hours by ID, which is 9-17 in 24 hour time
// based on the starting time of 9 
// adds a class based on the current cycled hour row against the real current time var set above this function    
function colorTheHours() {
    for (let i = 9; i < 18; i++) {
        const blockedTime = document.getElementById(`${i}`)
            if (currentHour > i) {
                $(blockedTime).addClass("past")
            } else if (currentHour < i) {
                $(blockedTime).addClass("future")
            } else {
                $(blockedTime).addClass("present")
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