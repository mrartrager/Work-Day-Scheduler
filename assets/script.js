$(document).ready(function () {
  let todayDate = moment().format("dddd, MMM Do YYYY");
  $("#currentDay").html(todayDate);

  function timeBlockUpdater() {
    let currentHour = moment().hours();
    $(".time-block").each(function () {
      let timeBlockHour = parseInt($(this).attr("id"));
      console.log(timeBlockHour);

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

  $("#8 .description").val(localStorage.getItem("8"));
  $("#9 .description").val(localStorage.getItem("9"));
  $("#10 .description").val(localStorage.getItem("10"));
  $("#11 .description").val(localStorage.getItem("11"));
  $("#12 .description").val(localStorage.getItem("12"));
  $("#13 .description").val(localStorage.getItem("13"));
  $("#14 .description").val(localStorage.getItem("14"));
  $("#15 .description").val(localStorage.getItem("15"));
  $("#16 .description").val(localStorage.getItem("16"));
  $("#17 .description").val(localStorage.getItem("17"));
});
