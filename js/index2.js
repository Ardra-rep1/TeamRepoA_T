//  this option can be extended for any tasks adding for future use using JQuery
function moreLess(readMoreId) {

    const btn = document.getElementById(readMoreId + '_btn').innerHTML;
    if (btn == "Read More") {
        document.getElementById(readMoreId).style.display = "block";
        document.getElementById(readMoreId + '_btn').innerHTML = "Read Less";
    }
    else {
        document.getElementById(readMoreId).style.display = "none";
        document.getElementById(readMoreId + '_btn').innerHTML = "Read More";

    }

} 