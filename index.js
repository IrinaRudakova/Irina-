function hamburgerClick() {
   $(".mobile-menu").slideToggle(600);
}

function moreClick(event, cardNamber) {
    event.preventDefault();
    cardNamber = cardNamber || "";
    var mobileMenu = document.querySelector(".item-window" + cardNamber);
    var display = mobileMenu.style.display;
    $(".item-window" + cardNamber).fadeIn(1000);
    mobileMenu.style.display = "flex"
}

var hamburgerIcon = document.getElementsByClassName("menu-icon")[0];
hamburgerIcon.addEventListener("click", hamburgerClick);
var a = document.getElementsByClassName("card-button")[1];
a.addEventListener("click", moreClick);

$(".item-close").click(function () {
    $(".item-window").fadeOut(1000);
});

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
        scrollTop: $("#main").offset().top
    }, 1000);
});