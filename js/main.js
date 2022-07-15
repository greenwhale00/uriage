$(function () {

    $('.mainSlider').slick({
        arrows: false,
        autoplay: true,
        dots: true,
        pauseOnHover: false,
        pauseOnFocus: false,
        fade: true,
    });

    $('.mainArrow i:nth-child(1)').on('click', function () {
        $('.mainSlider').slick('slickPrev')
    });
    $('.mainArrow i:nth-child(2)').on('click', function () {
        $('.mainSlider').slick('slickNext')
    });


    $('.july_banner .banner').slick({
        arrows: false,
        autoplay: true,
        dots: true,
        pauseOnHover: false,
        pauseOnFocus: false,
        fade: true,
    });

    $('.pause').click(function () {
        $('.banner').slick('slickPause');
    });
    $('.start').click(function () {
        $('.banner').slick('slickPlay');
    });

    $('.toTop').on('click', function () {
        $('html,body').animate({ scrollTop: 0 }, 200);
    });

    $(window).on('scroll', function () {
        var sct = $(window).scrollTop();
        if (sct > 500) {
            $('.toTop').fadeIn(300)
        }
        else {
            $('.toTop').fadeOut(700)
        }
    })

})
