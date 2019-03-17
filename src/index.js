import Swiper from 'swiper';
    import './main.scss';
    import * as helperModule from './scripts/my-helper-module';
window.addEventListener('load', ()=>{
    helperModule.toggleMenu();
    var mySwiper = new Swiper('.slider', {
        slidesPerView: 'auto',
        spaceBetween: 80,
        centeredSlides: true,
        scrollbar: {
            el: '.swiper-scrollbar',
            hide: false,
            snapOnRelease: true,
            dragSize: 140,
            draggable: true
        },
        breakpoints: {
            1024: {
                spaceBetween: 60,
                scrollbar: {
                    dragSize: 120,
                }
            },
                768: {
                spaceBetween: 40,
                scrollbar: {
                    dragSize: 100,
                }
            },
                640: {
                spaceBetween: 30,
                scrollbar: {
                    dragSize: 80,
                }
            },
                320: {
                spaceBetween: 15,
                scrollbar: {
                    dragSize: 60,
                }
            }
        }
    });
    var mySwiper = new Swiper('.slider-big', {
        slidesPerView: 'auto',
        spaceBetween: 30,
        centeredSlides: true,
        breakpoints: {
            640: {
                spaceBetween: 20,
            }
        }
    });
});
