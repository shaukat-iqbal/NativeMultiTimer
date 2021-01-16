
export function decrement(time) {
    let timeArr = time.split(":");
    let seconds = parseInt(timeArr[2]);
    let minutes = parseInt(timeArr[1]);
    let hours = parseInt(timeArr[0]);

    if (seconds <= 0) {
        if (minutes > 0) {
            minutes--;
            seconds = 59;
        }
        if (minutes <= 0) {
            if (hours > 0) {
                hours--;
                minutes = 59;
                seconds = 59;
            }
        }
    } else {
        seconds--;
    }
    return to2digits(hours) + ":" + to2digits(minutes) + ":" + to2digits(seconds);
}


export function to2digits(n) {
    if (n > 9) return n;
    return "0" + n;
}

export function convertToSeconds(time) {
    let timeArr = time.split(":");
    let seconds = parseInt(timeArr[2]);
    let minutes = parseInt(timeArr[1]);
    let hours = parseInt(timeArr[0]);
    return hours * 3600 + minutes * 60 + seconds;
}
 function parseMillisecondsIntoReadableTime(milliseconds){
    //Get hours from milliseconds
    var hours = milliseconds / (1000 * 60 * 60);
    var absoluteHours = Math.floor(hours);
    var h = absoluteHours > 9 ? absoluteHours : "0" + absoluteHours;

    //Get remainder from hours and convert to minutes
    var minutes = (hours - absoluteHours) * 60;
    var absoluteMinutes = Math.floor(minutes);
    var m = absoluteMinutes > 9 ? absoluteMinutes : "0" + absoluteMinutes;

    //Get remainder from minutes and convert to seconds
    var seconds = (minutes - absoluteMinutes) * 60;
    var absoluteSeconds = Math.floor(seconds);
    var s = absoluteSeconds > 9 ? absoluteSeconds : "0" + absoluteSeconds;

    return h + ":" + m + ":" + s;
}
 function parseMillis(milliseconds){
    //Get hours from milliseconds
    var hours = milliseconds / (1000 * 60 * 60);
    var h = Math.floor(hours);

    //Get remainder from hours and convert to minutes
    var minutes = (hours - h) * 60;
    var m = Math.floor(minutes);

    //Get remainder from minutes and convert to seconds
    var seconds = (minutes - m) * 60;
    var s = Math.floor(seconds);

     return {h,m,s}
}

export  {parseMillisecondsIntoReadableTime,parseMillis}
