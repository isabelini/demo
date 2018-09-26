
document.querySelectorAll("div, p").forEach(function(elem){


	elem.addEventListener("dblclick", function(evt){
		console.log("se hizo click");
		elem.style["background-color"] = "pink";
		evt.stopImmediatePropagation();
	});
});
