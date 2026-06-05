var swiper = new Swiper(".swiper", {
    slidesPerView: 1,
    spaceBetween: 30,

    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 3
        }
    }
}); 