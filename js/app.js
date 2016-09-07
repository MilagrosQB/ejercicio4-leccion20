window.addEventListener("load", function() {
	var boton = document.getElementById("cambiar");
	boton.addEventListener("click", function myChange() {
 		 	
 	var time = parseInt(document.getElementById("time").value);

  	setInterval(randomColor, time*1000);

  	function randomColor(){
  			document.body.style.backgroundColor = '#'+Math.floor(Math.random()*16777215).toString(16)}
	});
});