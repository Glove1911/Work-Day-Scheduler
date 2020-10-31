var currentDay = $("#currentDay");
var containerEl = $(".container");








$(document).ready(function(){
    $(".saveBtn").on("click",function(){
       var value = $(this).siblings(".description").val();
       var time = $(this).parent().attr("id");
       localStorage.setItem(time,value);
    });
// function to compare current hour to schedule time
    function compareHour(){
        var currentHour = moment().hours();
        console.log(currentHour);
        $(".time-block").each(function(){
            // parses schedule time out as interger for comparison
            var schedTime = parseInt($(this).attr("id").split("-")[1]);
            console.log(schedTime);
        

        if (schedTime < currentHour){
            $(this).addClass("past");
        }   
        else if (schedTime === currentHour){
          $(this).removeClass("past");
          $(this).addClass("present");  
        }   
        else {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        }

        
        
        });
    }
        compareHour();

        var time = setInterval(compareHour, 15000);

    


currentDay.html(moment().format('LL'));

$("#hr-9 .description").val(localStorage.getItem("hr-9"));
$("#hr-10 .description").val(localStorage.getItem("hr-10"));
$("#hr-11 .description").val(localStorage.getItem("hr-11"));
$("#hr-12 .description").val(localStorage.getItem("hr-12"));
$("#hr-13 .description").val(localStorage.getItem("hr-13"));
$("#hr-14 .description").val(localStorage.getItem("hr-14"));
$("#hr-15 .description").val(localStorage.getItem("hr-15"));
$("#hr-16 .description").val(localStorage.getItem("hr-16"));
$("#hr-17 .description").val(localStorage.getItem("hr-17"));

});

