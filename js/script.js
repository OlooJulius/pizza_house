// init js
$(document).ready(function () {
	//User Interface
	$("#pickup-btn").click(function () {
		$("#order-content").show();
		$("#landing-content").hide();
		$("#delivery-option").text("PICKUP BY CUSTOMER");
	});
	$("#delivery-btn").click(function () {
		$("#address").show();
		$("#pickup-btn,#delivery-btn,#landing-tagline").hide();
	});
	$("form#address-form").submit(function (event) {
		event.preventDefault();
		var streetAddress = $("input#street-add").val();
		var city = $("input#city-add").val();
		var state = $("select#state-select").val();
		var zipcode = $("input#zip-add").val();
		var newAddress = new Address(streetAddress, city, state, zipcode)
		$("#order-content").show();
		$("#landing-content").hide();
		$("#delivery-option").text("DELIVER TO: " + newAddress.deliveryAddress);
	});
	$("form#custom-pizza").submit(function (event) {
		event.preventDefault();
		var customSize = $("select#size").val();
		var sauce = $("select#sauce").val();
		var cheese = $("select#cheese").val();
		var veggie1 = $("select#veggie1").val();
		var veggie2 = $("select#veggie2").val();
		var meat = $("select#meat").val();
		var pizzaDetails = (customSize + " - " + sauce + ", " + cheese + ", " + veggie1 + ", " + veggie2 + ", " + meat);
		var newPizzaOrder = new Order(customSize, cheese);
		newPizzaOrder.pizzaCost();
		totalPriceArray.push(newPizzaOrder.pizzaPrice);
		$("#pizza-details-dropdown").show();
		$("#final-cost").text(newPizzaOrder.finalCost());
		$("#pizza-details").append("<ul><li>" + pizzaDetails + "</li></ul>");
		$("#size, #sauce, #cheese, #veggie1, #veggie2, #meat").val("");
	});
	$("#pizza-details-dropdown").click(function () {
		$("#pizza-details").toggle();
	});