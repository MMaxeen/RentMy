$(document).ready(function () {
    $(document).on("scroll", onScroll);
    onScroll();
    //smoothscroll
    $('ul a').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        
        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');
      
        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+2
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
});

$(".btn").click(function() {
    $('html,body').animate({
        scrollTop: $(".mountain").offset().top},
        'slow');
});

function onScroll(event){
    console.log('Coucou');
    var scrollPos = $(document).scrollTop();
    $('nav a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('nav ul a').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
         }
    });
}


$('.toggle').on('click', function(e){
    e.preventDefault();
    
    var elemParent = $(this).parents('.wrapper');
    elemParent.find('.wrapper-toggle').toggleClass('opened');
    elemParent.find('.test').slideToggle(200, function(){
        TweenMax.to($('.text'), 0.4, {opacity: 1});
    });
});

TweenMax.from(".icon-ry", 1.6, {opacity:0, x:-40});
TweenMax.from(["#ski", "#kayak", "#tent", "#surf"], 1.6, {opacity:0, y:-400});

