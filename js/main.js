
const owl = $('.owl-carousel');
owl.owlCarousel({
    center: true,  // это центрирует картинки
    loop: true,   // теперь мы можем перемещать картинки (бесконечная прокрутка)
    margin: 30,  // это 30px между картинками
    items: 3,
});

$('.slider__btn--prev').click(function() {
    owl.trigger('prev.owl.carousel');
})

$('.slider__btn--next').click(function() {
    owl.trigger('next.owl.carousel');
})

