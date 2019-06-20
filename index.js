function hamburgerClick() {
   $(".mobile-menu").slideToggle(600);
}

function moreClick(event, cardNamber) {
    event.preventDefault();
    cardNamber = cardNamber || "";
    var mobileMenu = document.querySelector(".item-window" + cardNamber);
    var display = mobileMenu.style.display;
    if (display =="" || display=="none") {
        $(".item-window" + cardNamber).fadeIn(7000);
        mobileMenu.style.display = "flex"
    } else {
        $(".item-window" + cardNamber).fadeOut(2000);
    }
}

var hamburgerIcon = document.getElementsByClassName("menu-icon")[0];
hamburgerIcon.addEventListener("click", hamburgerClick);
var a = document.getElementsByClassName("card-button")[1];
a.addEventListener("click", moreClick);
var b = document.getElementsByClassName("item-close")[0];
b.addEventListener("click", moreClick);

$(".card-button.one").click(
    function (event) {
        moreClick(event, ".one");
    }
)

$(".card-button.two").click(
    function (event) {
        moreClick(event, ".two");
    }
)

$("a[href='#']").click(function () {
    $("html, body").animate({
        scrollTop: $("#mail").offset().top
    }, 1000);
});