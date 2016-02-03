$(document).ready(function() {

	// on hover show delete button
	$("div.content").on("mouseenter", "div.box", function() {
		$(this).children(".bawks").addClass("delete");
	});

	$("div.content").on("mouseleave", "div.box", function() {
		$(this).children(".bawks").removeClass("delete");
	});

	// click to strike
	$("div.content").on("click", "div.box", function() {
		$(this).children("p").toggleClass("striked");
	});

	// enter key add to list
	$("input").keydown(function(evt) {
		var e = evt || event;
    	var code = e.keyCode || e.which;
		if (code == 13) {
			var result = $("input").val();
			if ($("div.box").length >= 1) {
				$("div.box:last").clone().insertAfter(".box:last");
				$("p:last").text(result);
				$("input:text").val('');
			}
			else {
				$("<div class='box'></div>").insertAfter("h2").html("<div class='bawks'></div><p>" + result + "</p></div>");
				$("input:text").val('');
			}
		}
	});

	// button add to list
	$("div.content").on("click", "button", function() {
		var result = $("input").val();
			if ($("div.box").length >= 1) {
				$("div.box:last").clone().insertAfter(".box:last");
				$("p:last").text(result);
				$("input:text").val('');
				
			}
			else {
				$("<div class='box'></div>").insertAfter("h2").html("<div class='bawks'></div><p>" + result + "</p></div>");
				$("input:text").val('');
			}
	});

	// remove from list
	$("div.content").on('click', "div.delete", function(e){
		e.preventDefault(); $(this).parent().remove()
	});

});