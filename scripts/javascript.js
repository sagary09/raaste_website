(function(){
	var hamburger = document.getElementById('navIcon');
	var menu = document.getElementById('menu');
	alert("I am an alert box!");
	var myString = "this is a string";
hamburger.addEventListener("click", function(){
	if(menu.classList.contains('shown')) {
		menu.classList.remove('shown')
	} else {
		menu.classList.add('shown')
	}
});
})();