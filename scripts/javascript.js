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
})();
function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    if (x == null || x == "") {
        alert("Name must be filled out");
        return false;
    }
}
var summerSlam = function(){    
return{
	formValidate: function(form){
		alert("hello there");             
		return false;         
		}    
	}
;}();
	
