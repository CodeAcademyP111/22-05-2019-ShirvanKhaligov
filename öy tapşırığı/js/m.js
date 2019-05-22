var square = document.querySelector("#square");
var span= document.querySelector("span");
var left_p = 0;
var top_p = 0;
document.body.addEventListener("keyup", function (ev) {
    
     // sag
     if (ev.which == 39) {
        if (Math.max(span.offsetLeft + span.clientWidth) < square.clientWidth - span.clientWidth) {
            left_p += 5;
        } else {
            left_p = square.clientWidth - span.clientWidth;
        }
    }
    // sol
    if (ev.which == 37) {
        if (span.offsetLeft > square.offsetLeft + span.clientWidth) {
            left_p -= 10;
        } else {
            left_p = 0;
        }
    }// yuxari 
    if (ev.which == 38) {
        if (span.offsetTop > square.offsetTop + span.clientHeight) {
            top_p -= 10;
        } else {
            top_p = 0;
        }
    }
    span.style.left = left_p + "px";
    span.style.top = top_p + "px";
   
    // asagi 
    if (ev.which == 40) {
        if (Math.max(span.offsetTop + span.clientHeight) < square.clientHeight - span.clientHeight) {
            top_p += 10;
        } else {
            top_p = square.clientHeight - span.clientHeight;
        }
    }
    

   
})