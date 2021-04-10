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
$(".trio").hover(function() {
    $("h3").animate({
      "font-size": "3em"
    }, 1000);
}, function(){
    $("h3").animate({
        "font-size": "2em"
      }, 1000);
});
//About-founders image change on mouseover
$("#img1") .mouseover(function () {
    this.src= "images/about/Ellipse 8.svg"
 }).mouseout(function () {
     this.src= "images/about/Ellipse 2.svg"
 });

 $("#img2") .mouseover(function () {
    this.src= "images/about/Ellipse 9.svg"
 }).mouseout(function () {
     this.src= "images/about/Ellipse 3.svg"
 });

 $("#img3") .mouseover(function () {
    this.src= "images/about/Ellipse 10.svg"
 }).mouseout(function () {
     this.src= "images/about/Ellipse 4.svg"
 });