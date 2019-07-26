function clickFunction(clicked_id) {
    var element = document.getElementById(clicked_id);

    var elementClassList = document.querySelectorAll("." + element.classList[0]);

    for (var i = 0; i < elementClassList.length; i++) {
        console.log(elementClassList[i]); //
        elementClassList[i].classList.add('clicked');
    }
    
}