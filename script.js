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

    $("saveBtn").on("click", function() {
    var value = $(this).siblings(".information").val()
    var time = $(this).parent().attr("id")
    localStorage.setItem(time, value)
    })

    function colorUpdate()
    // var currentHour = moment().hours();
    // $(".time-block").each(function() {
    //     // create sometime to loop over time blocks
    // var blockTime =
    // )}

    
    // need saved data from local storage
    $("#9am .information").val(localStorage.getItem("9am"))
    $("#10am .information").val(localStorage.getItem("10am"))
    $("#11am .information").val(localStorage.getItem("11am"))
    $("#12pm .information").val(localStorage.getItem("12pm"))
    $("#12pm .information").val(localStorage.getItem("1pm"))
    $("#12pm .information").val(localStorage.getItem("2pm"))
    $("#12pm .information").val(localStorage.getItem("3pm"))
    $("#12pm .information").val(localStorage.getItem("4pm"))
    $("#12pm .information").val(localStorage.getItem("5pm"))
});