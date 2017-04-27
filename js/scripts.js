/////////// Business Logic ////////////
var add = (function(number1, number2, number3){
  return number1 + number2 + number3;
});


///////////// User Logic ///////////////
$(function () {
  $("#form-info").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#age").val());
    var number2 = parseInt($("#hair-color").val());
    var number3 = parseInt($("#income").val());
    if (add(number1, number2, number3) > 2 && add(number1, number2, number3) <= 5) {
      $("#charles").show();
      $("#mcduck").hide();
      $("#jackson").hide();
    }else if (add(number1, number2, number3) > 5 && add(number1, number2, number3) < 9) {
      $("#charles").hide();
      $("#mcduck").hide();
      $("#jackson").show();
    } else {
      $("#charles").hide();
      $("#mcduck").show();
      $("#jackson").hide();
    }
  })

});
