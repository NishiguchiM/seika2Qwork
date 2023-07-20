// import Swiper JS
import Swiper from 'swiper/bundle';
// import Swiper styles
import 'swiper/css/bundle';

const swiper = new Swiper('.swiper', {
	// Optional parameters
	// direction: 'vertical',
	// ↑縦向き
	loop: true,
	direction: 'horizontal',
	// ↑横向き

	// If we need pagination
	pagination: {
		el: '.swiper-pagination',
	},

	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

	// And if we need scrollbar
	// scrollbar: {
	// 	el: '.swiper-scrollbar',
	// 	hide: true,
	// },
});

// let title1 = document.createTextNode("スライド1を表示中");
// let title2 = document.createTextNode("スライド2を表示中");
// let title3 = document.createTextNode("スライド3を表示中");
// let title4 = document.createTextNode("スライド4を表示中");

const swipertitle = document.getElementById('swiperTitle');
const titleText = ('スライド' + swiper.realIndex + 'を表示中');
let titleElement = document.createTextNode(titleText);
swipertitle.appendChild(titleElement);
// リロード時に表示される最初の文字+繰り返し時にremoveする/後で使う変数を建てる時用のやつ

swiper.on('slideChange', function () {
	console.log('slide changed');
	console.log(swiper.realIndex);

	if(titleElement){
		titleElement.remove();
	}

	const titleText = 'スライド' + swiper.realIndex + 'を表示中';
	titleElement = document.createTextNode(titleText);

	swipertitle.appendChild(titleElement);
});


const swiper02 = new Swiper('.swiper02', {
	// Optional parameters
	// direction: 'vertical',
	// ↑縦向き
	loop: true,
	direction: 'horizontal',
	// ↑横向き

	// If we need pagination
	pagination: {
		el: '.swiper-pagination',
	},

	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

	// And if we need scrollbar
	scrollbar: {
		el: '.swiper-scrollbar',
	},
});




const swipertitle02 = document.getElementById('swiperTitle02');
const titles = [
	"ドンピシャ",
	"ぺちゃんこ",
	"鉄塔",
	"標準",
];

let titleElement02 = document.createTextNode(titles[swiper02.realIndex]);
swipertitle02.appendChild(titleElement02);

swiper02.on('slideChange', function () {
	console.log('slide changed');
	console.log(swiper02.realIndex);

	if(titleElement02){
		titleElement02.remove();
	}

	titleElement02 = document.createTextNode(titles[swiper02.realIndex]);

	swipertitle02.appendChild(titleElement02);
});


import JustValidate from 'just-validate';

const validator = new JustValidate('#basic_form');

validator
	.addField('#basic_name', [
		{
			rule: 'required',
			errorMessage: '必須入力項目です。',
		},
		{
			rule: 'minLength',
			value: 3,
			errorMessage: 'Invalid field',
		},
		{
			rule: 'maxLength',
			value: 15,
			errorMessage: 'Invalid field',
		},
	])
	.addField('#basic_email', [
		{
			rule: 'required',
			errorMessage: '必須入力項目です。',
		},
		{
			rule: 'required',
			errorMessage: 'Invalid field',
		},
		{
			rule: 'email',
			errorMessage: 'Invalid field',
		},
	])
	.addField('#basic_password', [
		{
			rule: 'required',
			errorMessage: '必須入力項目です。',
		},
		{
			rule: 'password',
			errorMessage: 'Invalid field',
		},
	])
	.addField('#basic_age', [
		{
			rule: 'required',
			errorMessage: '必須入力項目です。',
		},
		{
			rule: 'number',
			errorMessage: 'Invalid field',
		},
		{
			rule: 'minNumber',
			value: 18,
			errorMessage: 'Invalid field',
		},
		{
			rule: 'maxNumber',
			value: 150,
			errorMessage: 'Invalid field',
		},
	])
	.addField('#basic_address', [
		{
			rule: 'required',
			errorMessage: '必須入力項目です。',
		},
	])
	.onSuccess(onSubmit)
function onSubmit(event) {
	event.preventDefault();
	let formData = new FormData(event.target);
	console.log(formData.get("basic_name"));
	console.log(formData.get("basic_email"));
	console.log(formData.get("basic_password"));
};