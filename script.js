let hamburgerIcon = document.querySelector(".span");
let dropdown = document.querySelector(".hamburg");

dropdown.classList.add("clicked")

hamburgerIcon.addEventListener("click", function(){
    dropdown.classList.toggle("clicked")
})