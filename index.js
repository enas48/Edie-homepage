$(document).on('ready',function(){
// Add smooth scrolling to all links
$("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  })
$(window).on('scroll',function(){
    $('.bg-light').css('box-shadow','0 2px 6px #ddd');
});

const responsiveOurWorks=function(){
    if (window.matchMedia('(min-width: 768px)').matches)
{
    // do functionality on screens biger than 768px
   
    $('.our-works .work').height($('.figure').height() + 120 + 'px');
    $('.our-works .figure').width(48 + '%'); 
}
if (window.matchMedia('(max-width: 767.999px)').matches)
{
    // do functionality on screens smaller than 768px
    $('.our-works .work').height('auto');
    $('.our-works .figure').width(100 + '%');
}
}

$( window ).resize(function() {
responsiveOurWorks()
});
responsiveOurWorks();






});
