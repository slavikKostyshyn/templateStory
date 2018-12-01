//  Функція для кнопки переходу вгору

$(function(){
  
    $('body').append('<button class="button-up" />');
    
    $('.button-up').click(function(){
        $('body').animate({'scrollTop':0}, 1000);
        $('html').animate({'scrollTop':0}, 1000);
    });
      
    $(window).scroll(function(){
        if($(window).scrollTop() > 200){
            $('.button-up').addClass('active');
        }else{
            $('.button-up').removeClass('active');
        }
    });
      
});


//  Функція для меню

$('.menu-bth').on('click', function(e){
    e.preventDefault();
    $(this).toggleClass('menu-bth-active');
    $('.nav-bar').toggleClass('nav-bar-active');
});