// select toggle icon
let toggleBtn = document.querySelector(".toggle-btn"),
//select navlink element
navlinks = document.querySelector(".navlinks");
// create toggle function 
toggleBtn.onclick = function () {
    navlinks.classList.toggle("active");
}