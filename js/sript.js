const swiper = new Swiper('.swiper-container', {
	loop: true,
	slidesPerView: 1,
	navigation: {
		nextEl: '.swiper__button-next',
		prevEl: '.swiper__button-prev',
	},
	spaceBetween: 60,
	autoplay: {
		delay: 5000,
	},
	speed: 800,
});
const fullScreen = document.querySelector('.fullscreen');
const headerMenu = document.querySelector('.header__menu');

headerMenu.style.height = fullScreen.style.height;

const icons = document.querySelector('.icons');
let copyIcons = icons.cloneNode(true);

if (window.innerWidth < 768) { // Если медиа запрос совпадает
	headerMenu.appendChild(copyIcons);
}

const mediaQuery = window.matchMedia('(max-width: 768px)')
function handleTabletChange(e) {
	if (e.matches) {
		headerMenu.appendChild(copyIcons);
	} else if(headerMenu.hasChildNodes(copyIcons)){
		headerMenu.removeChild(copyIcons);
	}
}
mediaQuery.addEventListener("change", handleTabletChange);
handleTabletChange(mediaQuery);

const headClose = document.querySelector('.header__close');
const menuIcon = document.querySelector('.menu__icon');

headClose.addEventListener('click', () =>{
	headerMenu.style.left = "-100%"
});
menuIcon.addEventListener('click',() =>{
	headerMenu.style.left = "0px";
})
const body = document.body;
const aboutImg = document.querySelector('.about__img');
const img1 = document.querySelector('.img');
const img2 = document.querySelector('.imgg');
aboutImg.addEventListener('click',() =>{
	img1.classList.toggle('active');
	body.classList.add('hidd');
});
img1.addEventListener('click',(e) =>{
	if(!e.target.closest(".imgg")){
	img1.classList.toggle('active');
	body.classList.remove('hidd');
	}
});
