//Accordion
var acc = document.getElementsByClassName("accord");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    panel.classList.toggle("active");
  });
}
