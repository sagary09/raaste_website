function product(price, size, color) {
		this.price = price;
		this.size = size;
		this.color = color;
	}
	var mugs = new product("$20", "4x5", "blue");
	var bowls = new product("$30", "Rally", "green"); 
	document.getElementById("test").innerHTML =
	"My father is " + bowls.price + ". My mother is " + mugs.price; 