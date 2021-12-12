    // tells computer to run HTML & CSS 1st.
    $(document).ready(function () {
    //displays the current day & time using moment js
    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));
    //assign saveBtn on click function.
    $(".saveBtn").on("click", function () {
        //gets the nearby value.
        console.log(this);
        var text = $(this).siblings(".description").val(); // taken the change from the sibling html description attribute
        var time = $(this).parent().attr("id"); // taken the change from the parent html id attribute
        //sets the items to/in local storage.
        localStorage.setItem(time, text);
    })
    //loads the saved data from the various time block divs
    $("#hour6 .description").val(localStorage.getItem("hour6"))
    $("#hour7 .description").val(localStorage.getItem("hour7"))
    $("#hour8 .description").val(localStorage.getItem("hour8"));
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));

    function loadHours() {
            //gets current hour using moment js 
             var currentHour = moment().hour();
             // loop over time blocks
             $(".time-block").each(function () {
            var blockHour = parseInt($(this).attr("id").split("hour")[1]);
            console.log(this)

            // checks to see if the block hour is greater then the current hour if so changes colors
            if (blockHour < currentHour) {
                $(this).addClass("past");
                $(this).removeClass("future");
                $(this).removeClass("present");
            }
            else if (blockHour === currentHour) {
                $(this).removeClass("past");
                $(this).addClass("present");
                $(this).removeClass("future");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }
        })
    }
    // Calls the function
    loadHours(); 
})