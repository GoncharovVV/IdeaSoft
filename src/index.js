import Swiper from 'swiper';
import './main.scss';
// import './index.handlebars';
// import * as helperModule from './scripts/my-helper-module';
// console.log(helperModule.greetings);
var mySwiper = new Swiper('.swiper-container', {
    slidesPerView: 5,
    spaceBetween: 30,
    centeredSlides: true,
    scrollbar: {
        el: '.swiper-scrollbar',
        hide: false,
        draggable: true
    },
});
// console.log('hello');
// let addition = (a, b) => a + b;
// console.log(addition(1,2));