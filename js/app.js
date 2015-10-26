$(document).ready(function() {

	// on hover show delete button
	$("div.content").on("mouseenter", "div.box", function() {
		$(this).children(".bawks").addClass("delete");
	});

	$("div.content").on("mouseleave", "div.box", function() {
		$(this).children(".bawks").removeClass("delete");
	});

	// add to list
	$("input").keydown(function() {
		if (event.which == 13) {
			var result = $("input").val();
			$("div.box:last").clone().insertAfter(".box:last");
			$("p:last").text(result);
			$("input:text").val('');
		}
	});

	// remove from list
	

});