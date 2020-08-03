// Business interface logic

//price of pizza
var totalPrice = 0;

//delvery information
var deliveryinfo = "A delivery cost of 200ksh has been added";
var nodeliveryinfo = "No delivery cost as instore pickup";

//collect info about pizza order, this is the pizza object
function Pizza (size,crust,cheese,type) {
  this.size = size;
  this.crust = crust;
  this.cheese = cheese;
  this.type = type;
  this.totalprice = 0;
}


//collect info about custom order
function CustomP (base,veggies,meat) {
  this.base = base;
  this.veggies = veggies;
  this.meat= meat;
}

//price
Pizza.prototype.pizzaCost = function () {
  if (this.size === "Small") {
    this.totalprice += 500;
  } else if (this.size === "Medium") {
    this.totalprice += 750;
  } else if (this.size === "Large") {
    this.totalprice += 900;
  }
  else if (this.size === "Extra-Large") {
    this.totalprice += 1200;
  }

  if (this.crust === "Crispy") {
    this.totalprice += 50;
  } else if (this.crust === "Stuffed") {
    this.totalprice += 100;
  } else if (this.crust === "Glutten-free") {
    this.totalprice += 150;
  }

  if (this.cheese === "Normal") {
    this.totalprice += 50;
  } else if (this.cheese === "Extra-cheesy") {
    this.totalprice += 100;
  } else if (this.cheese === "Vegan-cheese") {
    this.totalprice += 200;
  }

  if (this.type === "Margherita") {
    this.totalprice += 0;
  } else if (this.type === "Pepperoni") {
    this.totalprice += 100;
  } else if (this.type === "Hawaiian") {
    this.totalprice += 100;
  }
  else if (this.type === "Custom") {
    this.totalprice += 0;
  }
  return this.totalprice;
}

Pizza.prototype.finalCost = function () {
  totalPrice += this.totalprice;
}

//user interface logic
$(document).ready(function() {

 //when delivery button is clicked, the address collection div should show and hide instore pick up button
$("#delivery").click( function(event) {
  event.preventDefault();
  $("#addressbox").removeClass('show-div');
  $("button#pickup").addClass('show-div');
  $("button#delivery").addClass('show-div');

  //add delivery cost 200ksh
  totalPrice += 200;
  $("p#delivery-cost").append("<span class=' '>" + deliveryinfo + "</span>");

});

//when inpick up button is clicked, the order pizza div should show and hide the add address form
$("#pickup").click( function(event) {
 event.preventDefault();
 $("#order").removeClass('show-div');
 $("button#delivery").addClass('show-div');
 $("p#pick-message").removeClass('show-div');
 $("button#pickup").addClass('show-div');

 //add in-store pick cost 0
 totalPrice += 0;

 $("p#delivery-cost").append("<span class=' '>" + nodeliveryinfo + "</span>");
});

//when address info is submitted, this prompt appears. Address box will be hidden and the order box will appear
$("#address-btn").click(function(event) {
 event.preventDefault();
 alert("Your order will be delivered to your location! Make your order now");
  $("#order").removeClass('show-div');
  $("#addressbox").addClass('show-div');
  $("button#delivery").addClass('show-div');
  $("p#del-message").removeClass('show-div');
});

//when pizzaorder is submitted
$("form#pizza-form").submit(function(event) {
 event.preventDefault();

 var inputtedPSize = $("select#pizza-size").val();
 var inputtedPCrust = $("select#pizza-crust").val();
 var inputtedPCheese = $("select#pizza-cheese").val();
 var inputtedPType = $("select#pizza-type").val();
 var inputtedPCustomB = $("select#pizza-base").val();
 var inputtedPCustomV = $("select#pizza-veggies").val();
 var inputtedPCustomM = $("select#pizza-meat").val();

    newPizza = new Pizza(inputtedPSize, inputtedPCrust, inputtedPCheese, inputtedPType);
    newCPizza = new CustomP(inputtedPCustomB, inputtedPCustomV, inputtedPCustomM);

    var pizzaDetails = (inputtedPSize + " - " + inputtedPCrust + ", " + inputtedPCheese + ", " + inputtedPType + ". ");
    newPizza.pizzaCost();
    newPizza.finalCost();

    console.log(pizzaDetails);
/*
    $("#pizza-details-dropdown").show();
    $("#final-cost").text(newPizzaOrder.finalCost());
    $("#pizza-details").append("<ul><li>" + pizzaDetails + "</li></ul>");
    $("#size, #sauce, #cheese, #veggie1, #veggie2, #meat").val("");
  });
  $("#pizza-details-dropdown").click(function() {
    $("#pizza-details").toggle();


 //code to show users info and current balance
   $("p#userinfo").append("<span class='userdetailsname'>" + newUser.FullName + "</span>");
   $("p#Cbalance").append("<span class='userdetailsbalance'>" + newUser.InitialBalance + ksh + "</span>");
 //hides submit button so users can't add another balance
   $("button#adduser").removeClass('btn btn-primary');
   $("button#adduser").addClass('show-contact');

   */

});



});
