function hamburgerClick() {
    var mobileMenu = document.getElementsByClassName("mobile-menu")[0];
    var display = mobileMenu.style.display;
    if (display =="") {
        mobileMenu.style.display = "flex"
    } else {
    mobileMenu.style.display = "";
    }
}



function moreClick(event) {
    event.preventDefault();
    var mobileMenu = document.getElementsByClassName("item-window")[0];
    var display = mobileMenu.style.display;
    if (display =="") {
        mobileMenu.style.display = "flex"
    } else {
    mobileMenu.style.display = "";
    }
}

var hamburgerIcon = document.getElementsByClassName("menu-icon")[0];
hamburgerIcon.addEventListener("click", hamburgerClick);
var a = document.getElementsByClassName("card-button")[1];
a.addEventListener("click", moreClick);
var b = document.getElementsByClassName("item-close")[0];
b.addEventListener("click", moreClick);