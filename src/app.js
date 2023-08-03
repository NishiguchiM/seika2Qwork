let isActive = true;
let dialogBase = document.getElementsByClassName('dialog-base')[0];
	console.log(dialogBase);

let open = document.getElementById("openButton");
open.onclick = openDialog;
let close = document.getElementById("closeButton");
close.onclick = closeDialog;

function openDialog() {
	dialogBase.removeAttribute("hidden");
}

function closeDialog() {
	dialogBase.setAttribute("hidden", "hidden");
}


import anime from 'animejs/lib/anime.es.js';

anime({
	targets: '#finishedPromise #elem',
	translateX: 800,
	delay: 1450,
	easing: 'easeInOutSine'
});

