$(".header__burgir").click(function() {
    $(this).toggleClass('active');
    $(".header__navbar").toggleClass('active');
    $(".header__soc").toggleClass('active');
    $("body").toggleClass('hidden');
});

$('.banner__down').click(function(){
    var target = $(this).attr('href');
    $('html, body').animate({scrollTop: $(target).offset().top}, 800);
    return false; 
}); 