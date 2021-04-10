//Sticky Header NavBar
$(window).scroll(function() {    // this will work when your window scrolled.
    var height = $(window).scrollTop();  //getting the scrolling height of window
    if(height  > 100) {
        $(".header").css({"position": "fixed"});
    } else{
        $(".header").css({"position": "relative"});
    }
});

//Animate enlarge map image
$(".contact-brand").each(function() {
    var current_h = null;
    var current_w = null;
    $("img", this).hover(function() {
        $(this).stop(true, false).animate({
            width: "+=80",
            height: "+=80",
            top: "-=40",
            left: "-=40"
        }, 300);
    }, function() {
        $(this).stop(true, false).animate({
            width: "-=80",
            height: "-=80",
            top: "+=40",
            left: "+=40"
        }, 300);
    });
})
//autofill contact link information
$(".contact4").hover(function() {
    $("#email").attr("href", "mailto:contact@oriell.com");
    $("#phone1").attr("href", "tel:93851853");
  })