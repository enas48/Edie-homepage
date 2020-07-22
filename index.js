$(document).ready(function(){
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
