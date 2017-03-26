app.controller('meow', function($scope) {
    function getTimeRemaining(endtime) {
        var t = Date.parse(endtime) - Date.now(),
            days = Math.floor(t / (1000 * 60 * 60 * 24));
        return {
            'total': t,
            'days': days
        };
    }

    function initializeClock(id, endtime) {
        var clock = document.getElementById(id),
            daysSpan = clock.querySelector('.days');

        function updateClock() {
            var t = getTimeRemaining(endtime);
            daysSpan.innerHTML = t.days;
            if (t.total <= 0) {
                clearInterval(timeinterval);
            }
        }

        updateClock();
        var timeinterval = setInterval(updateClock, 1000);
    }
    // count down timer:
    var date = "11-11-2017",
        deadline = new Date(date);
    initializeClock('clockdiv', deadline);
})