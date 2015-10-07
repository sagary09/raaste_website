(function(){
	var hamburger = document.getElementById('navIcon');
	var menu = document.getElementById('menu');
hamburger.addEventListener("click", function(){
	if(menu.classList.contains('shown')) {
		menu.classList.remove('shown')
	} else {
		menu.classList.add('shown')
	}
});
	function product(price, size, color) {
		this.price = price;
		this.size = size;
		this.color = color;
	}
	var mugs = new product("$20", "4x5", "blue");
	var bowls = new product("$30", "Rally", "green"); 

})();