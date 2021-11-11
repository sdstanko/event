let mySwiper = new Swiper('.reviews__container', {
	speed: 400,
	// spaceBetween: 50,
	loop: false,
	// slidesPerView: 2,

	// If we need pagination
	pagination: {
		el: '.swiper-pagination',
	},

	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

	breakpoints: {
			1024: {
				slidesPerView: 2,
				spaceBetween: 50,
			},
		}
})

function ibg() {

	let ibg = document.querySelectorAll(".ibg");
	for (var i = 0; i < ibg.length; i++) {
		if (ibg[i].querySelector('img')) {
			ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
		}
	}
}

ibg();



let burger = document.querySelector('.burger');
let nav = document.querySelector('.nav');
let login = document.querySelector('.login');

burger.addEventListener('click', function(event) {
	burger.classList.toggle('active');
	nav.classList.toggle('active');
	login.classList.toggle('active');
	document.querySelector('html').classList.toggle('lock');
});