$(document).ready(function () {

  // moment JS used to update the date everyday to current date
  let todayDate = moment().format("dddd, MMM Do YYYY");
  $("#currentDay").html(todayDate);

  function timeBlockUpdater() {
    let currentHour = moment().hours();
    $(".time-block").each(function () {
      let timeBlockHour = parseInt($(this).attr("id"));
      console.log(timeBlockHour);


      // if statment used for color change throughout the day 
      if (timeBlockHour < currentHour) {
        $(this).addClass("past");
      } else if (timeBlockHour === currentHour) {
        $(this).removeClass("past");
        $(this).addClass("present");
      } else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
      }

      // saves local storage 
      $(".saveBtn").on("click", function () {
        console.log("saveBtn");
        let time = $(this).parent().attr("id");
        let text = $(this).siblings(".description").val();
        console.log(time, text);
        localStorage.setItem(time, text);
      });
    });
  }
  timeBlockUpdater();

// for loop for local storage 
for (let i = 8; i<=17; i++){
  $(`#${i} .description`).val(localStorage.getItem(`${i}`));
}

});