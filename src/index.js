import Swiper from 'swiper';
var mySwiper = new Swiper('.swiper-container', {
    slidesPerView: 5,
    spaceBetween: 30,
    centeredSlides: true,
    scrollbar: {
        el: '.swiper-scrollbar',
        hide: true,
    },
});
console.log('hello');
let addition = (a, b) => a + b;
console.log(addition(1,2));