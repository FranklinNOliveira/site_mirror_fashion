/*function validaBusca(){	*/
document.querySelector('#form-busca').onsubmit = function(){
	if (document.querySelector('#q').value == ''){
		//alert('Favor preecher o campo de busca!');
		document.querySelector('#form-busca').style.background = 'red';
		return false;
	}
};
//document.querySelector('#form-busca').onsubmit = validaBusca;

var banners = ["img/destaque-home.png", "img/destaque-home-2.png"];
var bannerAtual = 0;

function trocaBanner() {
	bannerAtual = (bannerAtual + 1) % 2;
	document.querySelector('.destaque img').src = banners[bannerAtual];
}

//setInterval(trocaBanner, 4000);


var timer = setInterval(trocaBanner, 4000);
var controle = document.querySelector('.pause');

controle.onclick = function() {
	if (controle.className == 'pause') {
		clearInterval(timer);
		controle.className = 'play';
		controle.src = 'img/play.png';
	} else {
		timer = setInterval(trocaBanner, 4000);
		controle.className = 'pause';
		controle.src = 'img/pause.png';
	}
	return false;
};
