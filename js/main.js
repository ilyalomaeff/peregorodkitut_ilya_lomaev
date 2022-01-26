$(function () {
    $('.doors-button').on('click', function(event) {
        $('.doors-button').not(this).removeClass('active').next().slideUp(150);
        $(this).toggleClass('active').next().slideToggle(150).toggleClass('active')
    });
    $('.tab-btn').on('click', function() {
        $('.tab-btn').removeClass('active');
        $(this).addClass('active');
        $('.tab__item').removeClass('active');
    });
    $('.partitions-tab-button').on('click', function() {
        $('#partitions-tab').addClass('active');
    });
    $('.walls-tab-button').on('click', function() {
        $('#walls-tab').addClass('active');
    });
    $('.doors-tab-button').on('click', function() {
        $('#doors-tab').addClass('active');
    });
    $('.feedback-slider-wrap').slick({
        dots: true,
        arrows: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1160,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 1039,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 770,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
        ]
    });
    $('.burger').on('click', function() {
        $('.burger').toggleClass('active');
        $('.top-header-menu').toggleClass('active');
        $('body').toggleClass('scroll-lock');
    });
    $('.top-header-buttons__search').on('click', function() {
        $('.form-header-search').toggleClass('active');
        $('.top-header-buttons__search').toggleClass('active');
    });
    $('.overlay').on('click', function() {
        $('.popup_1-1').removeClass('active');
        $('.popup_2').removeClass('active');
        $('.popup_3').removeClass('active');
        $('.popup_4').removeClass('active');
        $('.popup_5').removeClass('active');
        $('.popup_que_1').removeClass('active');
        $('.popup_que_2').removeClass('active');
        $('.popup_que_3').removeClass('active');
        $('.popup_que_4').removeClass('active');
        $('.popup_que_11').removeClass('active');
        $('.popup_que_22').removeClass('active');
        $('.popup_que_33').removeClass('active');
        $('.popup_que_44').removeClass('active');
        $('.overlay').removeClass('active');
        $('body').toggleClass('scroll-lock');
    });
    $('.popup_1 button').on('click', function() {
        $('.popup_1-1').removeClass('active');
        $('.overlay').removeClass('active');
        $('body').toggleClass('scroll-lock');
    });
    $('.button-to-popup_1').on('click', function() {
        $('.popup_1-1').toggleClass('active');
        $('.overlay').toggleClass('active');
        $('body').toggleClass('scroll-lock');
    });
    $('.header-dropdowns-ad-gbl button').on('click', function() {
        $('.header-dropdowns-ad-gbl').removeClass('active');
        $('body').removeClass('scroll-lock');
    });

    $('.doors-button-ad-1').on('click', function() {
        $('.header-dropdowns-ad-doors').toggleClass('active');
        $('body').toggleClass('scroll-lock');
    });
    $('.doors-button-ad-2').on('click', function() {
        $('.header-dropdowns-ad-partitions').toggleClass('active');
        $('body').toggleClass('scroll-lock');
    });
    $('.doors-button-ad-3').on('click', function() {
        $('.header-dropdowns-ad-walls').toggleClass('active');
        $('body').toggleClass('scroll-lock');
    });
    


    $('.button-to-popup_2').on('click', function() {
        $('.popup_2').toggleClass('active');
        $('.overlay').toggleClass('active');
        $('body').toggleClass('scroll-lock');
    });
    $('.popup_2 button').on('click', function() {
        $('.popup_2').removeClass('active');
        $('.overlay').removeClass('active');
        $('body').removeClass('scroll-lock');
    });
    $('.button-to-popup_3').on('click', function() {
        $('.popup_3').toggleClass('active');
        $('.overlay').toggleClass('active');
        $('body').toggleClass('scroll-lock');
    });
    $('.popup_3 button').on('click', function() {
        $('.popup_3').removeClass('active');
        $('.overlay').removeClass('active');
        $('body').removeClass('scroll-lock');
    });
    $('.button-to-popup_4').on('click', function() {
        $('.popup_4').toggleClass('active');
        $('.overlay').toggleClass('active');
        $('body').toggleClass('scroll-lock');
    });
    $('.popup_4 button').on('click', function() {
        $('.popup_4').removeClass('active');
        $('.overlay').removeClass('active');
        $('body').removeClass('scroll-lock');
    });
    $('.button-to-popup_5').on('click', function() {
        $('.popup_5').toggleClass('active');
        $('.overlay').toggleClass('active');
        $('body').toggleClass('scroll-lock');
    });
    $('.popup_5 button').on('click', function() {
        $('.popup_5').removeClass('active');
        $('.overlay').removeClass('active');
        $('body').removeClass('scroll-lock');
    });
    $('.doors-button').hover(function() {
        $('.doors-button').not(this).removeClass('active').next().slideUp(150);
        $(this).toggleClass('active').next().slideToggle(150)
    }, function() {
    });
    $('.doors-dropdown').hover(function() {
    }, function() {
        $('.doors-button').not(this).removeClass('active').next().slideUp(150);
        $(this).toggleClass('active').next().slideToggle(150)
    });
    $(window).on('scroll', function() {
        if ($(this).scrollTop() >= 250) {
            $('.scroll-arrow').addClass('active');
        } else {
            $('.scroll-arrow').removeClass('active');
        }
    });
    $('.scroll-arrow').on('click', function() {
        $('html').animate({scrollTop: 0}, 500);
    });
    $('.info-slider').slick({     
    });
    $('.doors-sliders__toSlick1').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: $('.slickprev'),
        nextArrow: $('.slicknext'),
    });
    $('.doors-sliders__toSlick2').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: $('.slickprevv'),
        nextArrow: $('.slicknextt'),
    });
    $('.doors-sliders__toSlick3').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: $('.slickprevvv'),
        nextArrow: $('.slicknexttt'),
    });
    if ($(window).width() > 5450) {
        $('.modal-que-button-1').on('click', function() {
            $('.popup_que_1').toggleClass('active');
            $('.overlay').toggleClass('active');
        });
        $('.popup_que_1 button').on('click', function() {
            $('.popup_que_1').removeClass('active');
            $('.overlay').removeClass('active');
        });
        $('.modal-que-button-2').on('click', function() {
            $('.popup_que_2').toggleClass('active');
            $('.overlay').toggleClass('active');
        });
        $('.popup_que_2 button').on('click', function() {
            $('.popup_que_2').removeClass('active');
            $('.overlay').removeClass('active');
        });
        $('.modal-que-button-3').on('click', function() {
            $('.popup_que_3').toggleClass('active');
            $('.overlay').toggleClass('active');
        });
        $('.popup_que_3 button').on('click', function() {
            $('.popup_que_3').removeClass('active');
            $('.overlay').removeClass('active');
        });
        $('.modal-que-button-4').on('click', function() {
            $('.popup_que_4').toggleClass('active');
            $('.overlay').toggleClass('active');
        });
        $('.popup_que_4 button').on('click', function() {
            $('.popup_que_4').removeClass('active');
            $('.overlay').removeClass('active');
        });
    }
    else {
        $('.modal-que-button-1').on('click', function() {
            $('.popup_que_11').toggleClass('active');
            $('.overlay').toggleClass('active');
        });
        $('.popup_que_11 button').on('click', function() {
            $('.popup_que_11').removeClass('active');
            $('.overlay').removeClass('active');
        });
        $('.modal-que-button-2').on('click', function() {
            $('.popup_que_22').toggleClass('active');
            $('.overlay').toggleClass('active');
        });
        $('.popup_que_22 button').on('click', function() {
            $('.popup_que_22').removeClass('active');
            $('.overlay').removeClass('active');
        });
        $('.modal-que-button-3').on('click', function() {
            $('.popup_que_33').toggleClass('active');
            $('.overlay').toggleClass('active');
        });
        $('.popup_que_33 button').on('click', function() {
            $('.popup_que_33').removeClass('active');
            $('.overlay').removeClass('active');
        });
        $('.modal-que-button-4').on('click', function() {
            $('.popup_que_44').toggleClass('active');
            $('.overlay').toggleClass('active');
        });
        $('.popup_que_44 button').on('click', function() {
            $('.popup_que_44').removeClass('active');
            $('.overlay').removeClass('active');
        });
    }
})