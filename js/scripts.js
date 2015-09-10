var romanNumeral = function(number) {
  var output = [];
  if(number >= 900 && number < 4000) {
    if (number > 999) {
      var count = Math.floor(number/1000);
      for(var i = 0; i < count; i++) {
        output.push("M");
      }
      number = number%1000;
    }
    if(number > 899 && number <= 999) {
      output.push("C", "M");
      number = number - 900;
    }
  }
  if(number > 89 && number < 900) {
    if(number >= 500) {
      output.push("D");
      number = number - 500;
    }
    //ADD for 400
    if(number > 399 && number <= 499) {
      output.push("C", "D");
      number = number - 400;
    }
    if (number > 99) {
      var count = Math.floor(number/100);
      for(var i = 0; i < count; i++) {
       output.push("C");
      }
      number = number%100;
    }
    if(number > 89 && number <= 99) {
      output.push("X", "C");
      number = number - 90;
    }
  }
  if (number >= 9 && number <= 89) {
    if(number >= 50) {
      output.push("L");
      number = number - 50;
    }
    // Add for 40
    if(number > 39 && number <= 49) {
      output.push("X", "L");
      number = number - 40;
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

var allRomanNumerals = function(number) {
  var result = []
  for(var i = 1; i < number; i++) {
    romanNumber = romanNumeral(i).toString();
    result.push(i, romanNumber);
  }
  return result;
}

$(document).ready(function() {
  $("form#roman-numeral").submit(function(event) {
    var number = parseInt($("input#number").val());
    var output = romanNumeral(number);
    output = output.toString().replace(/,/g, '');

    var allRoman = allRomanNumerals(number);
    var romAndNum;
    var arrayOfRomAndNum = [];
    // console.log(allRoman);
    for(var i=0; i < allRoman.length; i+=2) {
      romAndNum = ('<li>'+"Number: " + allRoman[i].toString() + " |" + " Roman: " + allRoman[i + 1].toString().replace(/,/g, '')+'</li>');
      // debugger;

      arrayOfRomAndNum.push(romAndNum);
    }
    // console.log(arrayOfRomAndNum);
    // arrayOfRomAndNum = arrayOfRomAndNum.toString();

    $(".number").text(number);
    $(".output").text(output);

    $(".allRoman").html(arrayOfRomAndNum);

    $("#result").show();
    event.preventDefault();
  });
});
