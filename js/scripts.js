$(document).ready(function() {
    $('.clickable').click(function() {
        $('.design-description').slideToggle();
        $('.design-icon').slideToggle();
    });
    $('.clickable1').click(function() {
        $('.development-description').slideToggle();
        $('.development-icon').slideToggle();
    });
    $('.clickable2').click(function () {
        $('.product-description').slideToggle();
        $('.product-icon').slideToggle();
    });  
});
