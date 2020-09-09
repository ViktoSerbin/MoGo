$(function () {

    $('.search-btn').on('click', function () {
        $('.header__search').slideToggle();
    });


    $('.top-slider__inner').slick({
        arrows: false,
        dots: true,
    });

    $('.services__item-title').on('click', function () {
        $('.services__item').removeClass('services__item--active');
        $(this).parent().addClass('services__item--active');
    });

    $('.services__comment-slider').slick({
    });

    $('.menu__btn').on('click', function () {
        $('.menu__list').slideToggle();
    });

    $('.menu__btn').on('click', function(){
        $(this).toggleClass('menu__btn-active');
    });


});