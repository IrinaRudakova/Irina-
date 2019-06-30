$(".card-button.three").click(
    function (event) {
        moreClick(event, ".one");
    }
)

$(".card-button.four").click(
    function (event) {
        moreClick(event, ".one");
    }
)

$("a[href='#']").click(function () {
    $("html, body").animate({
        scrollTop: $("#main").offset().top})})