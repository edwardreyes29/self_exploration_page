function clickFunction(clicked_id) {
    var element = document.getElementById(clicked_id);

    var elementClassList = document.querySelectorAll("." + element.classList[0]);

    for (var i = 0; i < elementClassList.length; i++) {
        console.log(elementClassList[i]); //
        elementClassList[i].classList.add('clicked');
    }   
}

function clickClose(clicked_id) {
    var element = document.getElementById(clicked_id);
    console.log(element);
    
    console.log(element.id);
    if (element.id == "close_1") {
        var modalElement = document.getElementById('first_modal');
        console.log(modalElement);
        modalElement.classList.remove('clicked');
    } else if (element.id == "close_2") {
        var modalElement = document.getElementById('second_modal');
        console.log(modalElement);
        modalElement.classList.remove('clicked');
    } else if (element.id == "close_3") {
        var modalElement = document.getElementById('third_modal');
        console.log(modalElement);
        modalElement.classList.remove('clicked');
    } else if (element.id == "close_4") {
        var modalElement = document.getElementById('fourth_modal');
        console.log(modalElement);
        modalElement.classList.remove('clicked');
    }
}