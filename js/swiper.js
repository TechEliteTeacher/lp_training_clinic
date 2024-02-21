const sliderThumbnail = new Swiper(".slider-thumbnail", {
    slidesPerView: 3,
});
const slider = new Swiper(".slider", {
    loop: true,
    slidesPerView: 1,
    navigation: {
        nextEl: ".button-next",
        prevEl: ".button-prev",
    },
    thumbs: {
        swiper: sliderThumbnail,
    },
});