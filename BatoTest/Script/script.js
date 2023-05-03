/* Swiper */
const swiper = new Swiper('.swiper', {
  
  direction: 'horizontal',
  loop: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

/* Accordion */

var acc = document.getElementsByClassName("accordion__button");
var i;

for (i = 0; i < acc.length; i++) {
  
  acc[i].addEventListener("click", function() {

    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

/* ModalForm */
var modal = document.getElementById("myModal");
var btn = document.getElementById("ContactBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";  
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

/* BurgerMenu */

var btnBurger = document.getElementById("buttonBurger");
var btnOpen = document.getElementsByClassName("header__burgerOpen")[0];
var btnClose = document.getElementsByClassName("header__burgerClose")[0];
var burgerMenu = document.getElementsByClassName("menu")[0];

btnBurger.onclick = function() {
  if(btnOpen.style.display != "none") {
    btnOpen.style.display = "none";
    btnClose.style.display = "block";
    burgerMenu.style.left = "0";
  } else {
    btnOpen.style.display = "block";
    btnClose.style.display = "none";
    burgerMenu.style.left = "425px";
  }
}

