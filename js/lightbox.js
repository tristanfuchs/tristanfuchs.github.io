$(document).ready(function() {

//global var

var LB_ACTIVE_IMG;
var LB_IMG_URL;

//create lightbox

$('body').append('<div id="lightbox_overlay"><div id="lightbox_content"><div id="lightbox_nav"><span class="ion-close"></span></div><img /></div></div>');

$('.lightbox-gallery img').stop().click(function(){
    LB_IMG_URL = $(this).attr('src');
    $('#lightbox_overlay #lightbox_content img').attr('src',LB_IMG_URL);
    $('#lightbox_overlay').fadeIn(500);

    LB_ACTIVE_IMG = $(this);
});

$('.ion-close').stop().click(function(){
    $('#lightbox_overlay').fadeOut(300);
});

});
