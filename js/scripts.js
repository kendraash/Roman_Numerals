var romanNumeral = function(number) {
  var output = [];

  if (number < 5) {
    for (var i=0; i < number; i++) {
      output.push("I");
    }
  }
  return output;
};
