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

    $(".saveBtn").on("click", function() {
    var value = $(this).siblings(".information").val()
    var time = $(this).parent().attr("id")
    localStorage.setItem(time, value)
    console.log(value)
    })

    function colorUpdate() {
        var currentHour = moment().hours()
        
    }

    const rows = document.getElementsByClassName("row");
    let currentHour = parseInt(moment().format('H'));
    console.log(currentHour)
    
    Array.from(rows).forEach(row => {
      let rowIdString = row.id //, rowHour;
        console.log(row.id)
        console.log(currentHour)
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
    



    // function colorUpdate()
    // var currentHour = moment().hours();
    // $(".time-block").each(function() {
    //     // create sometime to loop over time blocks
    // // var blockTime = 
    // for (let index = 0; index < array.length; index++) {
    //     const element = array[index];
        
    // }
    // })


    // // need saved data from local storage
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

