//Sticky Header NavBar
$(window).scroll(function() {    // this will work when your window scrolled.
    var height = $(window).scrollTop();  //getting the scrolling height of window
    if(height  > 100) {
        $(".header").css({"position": "fixed"});
    } else{
        $(".header").css({"position": "relative"});
    }
});
//NFT Artworks JSON data
$.ajax({ 
    type: 'GET', 
    url: 'collection.json',
    dataType: 'json',
    success: function (data) { 
        $.each(data, function(index, element) {
          $("#artwork1").append("<img src=\"" + element.img + "\"/><br>" + "<strong>" + element.title + "</strong><br>" + element.artist + "<br>" +  "<i>" + element.year + "</i><br>");
        });
    }
});