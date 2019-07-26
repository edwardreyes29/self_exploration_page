function clickFunction() {
    var element = document.querySelector(".clickable");
    element.classList.add('clicked');

   console.log(element.id);
   if (element.id == "big_heart_section") {
       var textElement = document.getElementById("furthermore_text");
       textElement.classList.add('clicked');
   }
}