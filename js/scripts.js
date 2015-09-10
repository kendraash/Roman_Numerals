var romanNumeral = function(number) {
  var output = [];
  if (number >= 9 && number <= 89) {
    if(number >= 50) {
      output.push("L")
      number = number - 50
    }
    if (number > 9) {
      var count = Math.floor(number/10);
      for(var i = 0; i < count; i++) {
       output.push("X");
      }
      number = number%10;
    }
    if (number === 9) {
       output.push("I", "X");
       number = number - number;
    }
  }
  if(number >= 4 && number < 9) {
    if(number === 4) {
      output.push("I", "V");
      number = number - number;
    }
    else {
      output.push("V");
      number = number%5;
    }
  }
  if (number < 4) {
    for (var i=0; i < number; i++) {
      output.push("I");
    }
  }

  return output;
};
