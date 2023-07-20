import anime from 'animejs/lib/anime.es.js';

var finishedPromise = anime({
	targets: '#finishedPromise #elem',
	translateX: 800,
	delay: 1450,
	easing: 'easeInOutSine'
});