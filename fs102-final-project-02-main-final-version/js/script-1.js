//Sticky Header NavBar
$(window).scroll(function() {    // this will work when your window scrolled.
    var height = $(window).scrollTop();  //getting the scrolling height of window
    if(height  > 100) {
        $(".header").css({"position": "fixed"});
    } else{
        $(".header").css({"position": "relative"});
    }
});
 
//Image Carousel - Slogan Slide
$(document).ready(() => {
    $(".carousel").hover(function(){
       $("#panel").slideDown();
    });
});

//Featured Work Tag 
$(document).ready(() => {
    $("#featured").hover(function(){
       $("#feature-tag").hide("p");
    }, function(){
       $("#feature-tag").show("p");
    });
});

//Creative Collection Mouseover
//1st Column
$("#cc1") .mouseover(function () {
    this.src= "images/homepage/creative-collection/artist-tags/Group 16188.png"
 }).mouseout(function () {
     this.src= "images/homepage/creative-collection/Rectangle 5.png"
 });
 $("#cc2") .mouseover(function () {
    this.src= "images/homepage/creative-collection/artist-tags/Group 16192.png"
 }).mouseout(function () {
     this.src= "images/homepage/creative-collection/Rectangle 10.png"
 });
 $("#cc3") .mouseover(function () {
    this.src= "images/homepage/creative-collection/artist-tags/Group 16189.png"
 }).mouseout(function () {
     this.src= "images/homepage/creative-collection/Rectangle 104.png"
 });
 $("#cc4") .mouseover(function () {
    this.src= "images/homepage/creative-collection/artist-tags/Group 16193.png"
 }).mouseout(function () {
     this.src= "images/homepage/creative-collection/Rectangle 105.png"
 });
 //2nd Column
 $("#cc5") .mouseover(function () {
    this.src= "images/homepage/creative-collection/artist-tags/Group 16194.png"
 }).mouseout(function () {
     this.src= "images/homepage/creative-collection/Rectangle 107.png"
 });
 $("#cc6") .mouseover(function () {
    this.src= "images/homepage/creative-collection/artist-tags/Group 16190.png"
 }).mouseout(function () {
     this.src= "images/homepage/creative-collection/Rectangle 106.png"
 });
 $("#cc7") .mouseover(function () {
    this.src= "images/homepage/creative-collection/artist-tags/Group 16195.png"
 }).mouseout(function () {
     this.src= "images/homepage/creative-collection/Rectangle 109.png"
 });
 $("#cc8") .mouseover(function () {
    this.src= "images/homepage/creative-collection/artist-tags/Group 16191.png"
 }).mouseout(function () {
     this.src= "images/homepage/creative-collection/Rectangle 108.png"
 });
  //3rd Column
  $("#cc9") .mouseover(function () {
    this.src= "images/homepage/creative-collection/artist-tags/Group 16196.png"
 }).mouseout(function () {
     this.src= "images/homepage/creative-collection/Rectangle 110.png"
 });
 $("#cc10") .mouseover(function () {
    this.src= "images/homepage/creative-collection/artist-tags/Group 16200.png"
 }).mouseout(function () {
     this.src= "images/homepage/creative-collection/Rectangle 112.png"
 });
 $("#cc11") .mouseover(function () {
    this.src= "images/homepage/creative-collection/artist-tags/Group 16197.png"
 }).mouseout(function () {
     this.src= "images/homepage/creative-collection/Rectangle 111.png"
 });
 $("#cc12") .mouseover(function () {
    this.src= "images/homepage/creative-collection/artist-tags/Group 16201.png"
 }).mouseout(function () {
     this.src= "images/homepage/creative-collection/Rectangle 113.png"
 });
 //4th Column
$("#cc13") .mouseover(function () {
    this.src= "images/homepage/creative-collection/artist-tags/Group 16202.png"
 }).mouseout(function () {
     this.src= "images/homepage/creative-collection/Rectangle 115.png"
 });
 $("#cc14") .mouseover(function () {
    this.src= "images/homepage/creative-collection/artist-tags/Group 16198.png"
 }).mouseout(function () {
     this.src= "images/homepage/creative-collection/Rectangle 114.png"
 });
 $("#cc15") .mouseover(function () {
    this.src= "images/homepage/creative-collection/artist-tags/Group 16203.png"
 }).mouseout(function () {
     this.src= "images/homepage/creative-collection/Rectangle 117.png"
 });
 $("#cc16") .mouseover(function () {
    this.src= "images/homepage/creative-collection/artist-tags/Group 16199.png"
 }).mouseout(function () {
     this.src= "images/homepage/creative-collection/Rectangle 116.png"
 });

 //Events animation
$(document).ready(() => {
    $(".event1").hover(function(){
       $("h2").css({"color": "red",});
    }, function(){
       $("h2").css({"color": "black",});
    });
});
$(document).ready(() => {
    $(".event2").hover(function(){
       $("h2").css({"color": "red",});
    }, function(){
       $("h2").css({"color": "black",});
    });
});
$(document).ready(() => {
    $(".event3").hover(function(){
       $("h2").css({"color": "red",});
    }, function(){
       $("h2").css({"color": "black",});
    });
});
