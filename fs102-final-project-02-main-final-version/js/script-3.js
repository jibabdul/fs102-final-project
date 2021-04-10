//Sticky Header NavBar
$(window).scroll(function() {    // this will work when your window scrolled.
    var height = $(window).scrollTop();  //getting the scrolling height of window
    if(height  > 100) {
        $(".header").css({"position": "fixed"});
    } else{
        $(".header").css({"position": "relative"});
    }
});
//Animate quote font size
$(".prac-quote").hover(function() {
    $("h3").animate({
      "font-size": "3em"
    }, 1000);
});