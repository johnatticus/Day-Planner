// variable to use moment js to put the date and time on html
var timeNdate = moment().format("dddd, MMMM Do YYYY, h:mm:ss a")
$("#todaysdatetime").text(timeNdate);

// function to update the above timeNdate variable every second
var update = function() {
    document.getElementById("todaysdatetime").innerHTML = moment().format("dddd, MMMM do YYYY, h:mm:ss a")
}
setInterval(update, 1000)

// start a jquery function
$(document).ready(function() {

    // function to make info save to local storage when the save button is pressed
    $(".saveBtn").on("click", function() {
    var value = $(this).siblings(".information").val()
    var time = $(this).parent().attr("id")
    localStorage.setItem(time, value)
    console.log(value)
    })

    //set a constant that encompasses all rows in the html for all the business hours
    const rows = document.getElementsByClassName("row");
    
    // sets currentHour to the local time hour with moment js api
    let currentHour = moment().hours();
    console.log(currentHour)
    
    Array.from(rows).forEach(row => {
      let rowIdString = row.id //, rowHour;
        console.log(row.id)
        console.log(rowIdString)
      if (rowIdString) {
        rowHour = parseInt(rowIdString);
        console.log(rowHour)
      }
      if (rowHour) {
        if (currentHour === rowHour) {
            $(".information").addClass("present")
        } else if (currentHour < rowHour) {
            $(".information").addClass("future")
        } else if (currentHour > rowHour) {
            $(".information").addClass("past")
        } 
      }
    });
    

    // pulls any local storage to populare the planner when it is refreshed or re-opened
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

