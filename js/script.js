var mySwiper = new Swiper('.reviews__container', {
	speed: 400,
	spaceBetween: 50,
	loop: false,
	slidesPerView: 2,

	// If we need pagination
	pagination: {
		el: '.swiper-pagination',
	},

	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

})