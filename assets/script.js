$(document).ready(function(){
    
    var todayDate = moment().format('dddd, MMM Do YYYY');
    $("#currentDay").html(todayDate);
    
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
        })
    }
    
    timeBlockUpdater()

})