// Business interface logic
function Pizza (size,crust,cheese,toppings,custom) {
  this.FullName = name;
  this.InitialBalance = balance;
}



//user interface logic

$(document).ready(function() {

 //when delivery button is clicked, the address collection div should show and hide instore pick up button
$("#delivery").click( function(event) {
  event.preventDefault();
  $("#addressbox").removeClass('show-div');
  $("button#pickup").addClass('show-div');
});

//when inpick up button is clicked, the order pizza div should show and hide the add address form
$("#pickup").click( function(event) {
 event.preventDefault();
 $("#order").removeClass('show-div');
 $("button#delivery").addClass('show-div');
 $("p#pick-message").removeClass('show-div');
 $("button#pickup").addClass('show-div');
});

//when address info is submitted, this prompt appears. Address box will be hidden and the order box will appear
$("form#address-form").submit(function(event) {
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

 var inputtedPSize = $("input#new-name").val();
 var inputtedPCrust = $("input#new-name").val();
 var inputtedPCheese = $("input#new-name").val();
 var inputtedPType = $("input#new-name").val();
 var inputtedPCustomB = $("input#new-name").val();
 var inputtedPCustomV = $("input#new-name").val();
 var inputtedPCustomM = $("input#new-name").val();

 newPizza = new Pizza(inputtedFullName, inputtedInitialBalance);

 //code to show users info and current balance
   $("p#userinfo").append("<span class='userdetailsname'>" + newUser.FullName + "</span>");
   $("p#Cbalance").append("<span class='userdetailsbalance'>" + newUser.InitialBalance + ksh + "</span>");
 //hides submit button so users can't add another balance
   $("button#adduser").removeClass('btn btn-primary');
   $("button#adduser").addClass('show-contact');

   console.log(newUser.InitialBalance);

});



});
