function clickFunction(clicked_id) {
    var element = document.getElementById(clicked_id);
    console.log(element)
    var elementClassList = document.querySelectorAll("." + element.classList[0]);

    for (var i = 0; i < elementClassList.length; i++) {
        elementClassList[i].classList.add('clicked');
    }   

    console.log(element.id);
    if (element.id == 'toggle_button') {
        document.getElementById('click_here_hover').style.display = "none";
    } else if (element.id == 'big_heart') { 
        document.getElementById('click_here_hover2').style.display = "none";
    }

}

function clickClose(clicked_id) {
    var element = document.getElementById(clicked_id);
    if (element.id == "close_1") {
        var modalElement = document.getElementById('first_modal');
        modalElement.classList.remove('clicked');
    } else if (element.id == "close_2") {
        var modalElement = document.getElementById('second_modal');
        modalElement.classList.remove('clicked');
    } else if (element.id == "close_3") {
        var modalElement = document.getElementById('third_modal');
        modalElement.classList.remove('clicked');
    } else if (element.id == "close_4") {
        var modalElement = document.getElementById('fourth_modal');
        modalElement.classList.remove('clicked');
    }
}
function expandShape() {
    document.getElementById('turn_on_hover').setAttribute("width", "181px");    
}
function normalShape() {
    document.getElementById('turn_on_hover').setAttribute("width", "40px");
}

// turn_on_hover.addEventListener("mouseover", function(event) {
//     document.getElementById('turn_on_hover').setAttribute("width", "40px");
// }, false);
function arrowHoverOn(over_id) {
    
    var elements = document.querySelectorAll('.arrow');
    for (var i = 0; i < elements.length; i++) {
        elements[i].classList.add('hovered');
    }
    
    if(over_id == 'square_1') {
        var pulse = document.getElementById('pulse_1');
        pulse.classList.add('show');
    
        var flashlight_logo = document.getElementById('flashlight_logo');
        flashlight_logo.classList.add('hide');
    } else if (over_id == 'square_2') {
        var heart_shape = document.getElementById('heart_shape');
        heart_shape.classList.add('hide');
    }
    
   
}

function arrowHoverOff() {
    var elements = document.querySelectorAll('.arrow');
    for (var i = 0; i < elements.length; i++) {
        elements[i].classList.remove('hovered');
    }
    var pulse = document.getElementById('pulse_1');
    pulse.classList.remove('show');

    var flashlight_logo = document.getElementById('flashlight_logo');
    flashlight_logo.classList.remove('hide');

    var heart_shape = document.getElementById('heart_shape');
    heart_shape.classList.remove('hide');
}
