var romanNumeral = function(number) {
  var output = [];
  if(number >= 4 && number < 9) {
    output.push("V");
    number = number%5;
  }
  if (number < 4) {
    for (var i=0; i < number; i++) {
      output.push("I");
    }
  }
  return output;
};
