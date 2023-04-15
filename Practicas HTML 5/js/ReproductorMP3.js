var audio = document.getElementById("audioPlayer");
var playButton = document.getElementById("playButton");
var pauseButton = document.getElementById("pauseButton");
var volumeSlider = document.getElementById("volumeSlider");

playButton.addEventListener("click", function() {
	audio.play();
});

pauseButton.addEventListener("click", function() {
	audio.pause();
});

volumeSlider.addEventListener("input", function() {
	audio.volume = volumeSlider.value;
});


// variables listas
window.addEventListener("load", function() {
	 max = 400;
	 progressbar = document.getElementById("progressbar");
	 progreso = document.getElementById("progreso");
	 seekslider = document.getElementById("seekslider");
	 progressbar.addEventListener("click", mover, true);

	 // function que activara el play y el pause pero tambien la cuenta de progreso del audio o video n.n
play.addEventListener("click",function() {
if(!audio.paused && !audio.ended) {
audio.pause();
play.innerHTML = 'Play';
window.clearInterval(bucle);
} else {
audio.play();
play.innerHTML = 'Pause';
bucle=setInterval(status, 1000);
}
});

// estado del progreso
function status() {
if(!audio.ended) {
	var total=parseInt(audio.currentTime*max/audio.duration);
	progreso.style.width=total+'px';
} else {
  progreso.style.width = '0px';
  play.innerHTML = ("Play");
  window.clearInterval(bucle);
}
}

// function que movera la barra de progreso al click dado mientras que este este en play (esto puede ser cambiado)
function mover(e) {
  if(!audio.paused && !audio.ended) {
	   var ratonX=e.pageX-progressbar.offsetLeft;
	   var nuevoTiempo=ratonX*audio.duration/max;
	   audio.currentTime=nuevoTiempo;
	   progreso.style.width=ratonX+'px';
}
}

// xD ya no me acuerdo para que era esto creo que para el tiempo del progreso o.O o algo asi
function vidSeek() {
if(seekslider != seekslider && !audio.ended) {
   var seekto = audio.duration * (seekslider.value / 100);
   audio.currentTime = seekto;
value.style.width= '0px';
} else {
  play.innerHTML = ("Play");
}
}
});