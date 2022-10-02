$(document).ready(function(){

    // Displays today's day and date
    var todayDate = moment().format('dddd, MMM Do YYYY');
    $("#currentDay").html(todayDate);
    

    // Functions to save tasks by clicking on the save button.
    $(".saveBtn").on("click", function() {
        console.log("saveBtn")
        var time = $(this).parent().attr('id')
        var text = $(this).siblings(".description").val()
        console.log(time, text)
        localStorage.setItem(time,text)
    })
    // Function to check the time and change the color
    function timeBlockUpdater() {
        var currentHour = moment().hours()

        $('.time-block').each(function(){
            var timeBlockHour = parseInt($(this).attr('id'))
            console.log(timeBlockHour)

            if(timeBlockHour<currentHour){
                $(this).addClass('past')
            } else if (timeBlockHour === currentHour) {
                $(this).removeClass('past')
                $(this).addClass('present')
            } else {
                $(this).removeClass('past')
                $(this).removeClass('present')
                $(this).addClass('future')
            }
            $(".saveBtn").on("click", function() {
                console.log("saveBtn")
                var time = $(this).parent().attr('id')
                var text = $(this).siblings(".description").val()
                console.log(time, text)
                localStorage.setItem(time,text)
            })
        })
    }
    
    timeBlockUpdater()

    $('#8 .description').val(localStorage.getItem('8'))
    $('#9 .description').val(localStorage.getItem('9'))
    $('#10 .description').val(localStorage.getItem('10'))
    $('#11 .description').val(localStorage.getItem('11'))
    $('#12 .description').val(localStorage.getItem('12'))
    $('#13 .description').val(localStorage.getItem('13'))
    $('#14 .description').val(localStorage.getItem('14'))
    $('#15 .description').val(localStorage.getItem('15'))
    $('#16 .description').val(localStorage.getItem('16'))
    $('#17 .description').val(localStorage.getItem('17'))

})