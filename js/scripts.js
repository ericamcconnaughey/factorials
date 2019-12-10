//Business Logic
var factorialFunction = function(num) {
  if (isNaN(num)) {
    return false;
  } else {
    for (var product = 1; num > 0; num--) {
      product *= num; 
    }
    return product;
  }
}


//User Interface Logic
$(document).ready(function() {
  $("form#factorial").submit(function(event) {
    event.preventDefault();
    var number = parseInt($("input#numberInput").val());
    var result = factorialFunction(number);

    if (!result) {
      $(".answer").text("Please enter a number and try again.");
    } else {
      $(".answer").text(number + "! equals " + result);
    }
    
    
    $("#result").show();
  })

})