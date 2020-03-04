// introduce the Business logic
var totalPrice = [];
function Order(customSize, cheese) {
	this.customSize = customSize;
	this.sauce = 1;
	this.cheese = cheese;
	this.veggie1 = 1;
	this.veggie2 = 1;
	this.meat = 2;
	this.pizzaPrice = 0;
}
//get the order and pricing
Order.prototype.pizzaCost = function () {
  if (this.customSize === "Small 10 in.") {
    this.pizzaPrice += 6;
  } else if (this.customSize === "Medium 14 in.") {
    this.pizzaPrice += 9;
  } else if (this.customSize === "Large 18 in.") {
    this.pizzaPrice += 12;
  }
  if (this.cheese === "cheese") {
    this.pizzaPrice += 1;
  } else if (this.cheese === "light cheese") {
    this.pizzaPrice += 0.5;
  } else if (this.cheese === "extra cheese") {
    this.pizzaPrice += 1.5;
  }
  this.pizzaPrice += this.sauce;
  this.pizzaPrice += this.veggie1;
  this.pizzaPrice += this.veggie2;
  this.pizzaPrice += this.meat;
  return this.pizzaPrice;
}
Order.prototype.sideCost = function () {
  return this.sidePrice;
}
Order.prototype.finalCost = function () {
  var cartTotalPrice = 0;
  for (var arrayElement = 0; arrayElement < totalPriceArray.length; arrayElement ++) {
    cartTotalPrice += totalPriceArray[arrayElement]////adding the contents of array order together
  }
  return cartTotalPrice;
}
function Address(streetAddress,city,zipcode){
	this.streetAddress =streetAddress;
	this.city = city;
	this.zipcode = zipcode;
	this.deliveryAddress = (streetAddress + "  " + city + ", "+ zipcode);
}
// init js
$(document).ready(function () {
	//User Interface
	$("#pickup-btn").click(function () {
		$("#menu").hide();
		$("#main").show();
		$("#delivery-option").text("PICKUP BY CUSTOMER");
	});
	$("#delivery-btn").click(function () {
		$("#address").toggle();
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