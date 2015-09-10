describe("romanNumeral", function() {
  it("returns the correct roman numeral up to 3", function() {
    expect(romanNumeral(3)).to.eql(['I','I','I']);
  });
  it("returns the correct roman numeral for 5", function() {
    expect(romanNumeral(5)).to.eql(['V']);
  });
  it("returns the correct roman numeral up to 8", function() {
    expect(romanNumeral(8)).to.eql(['V', 'I', 'I','I']);
  });
  it("returns the correct roman numeral for 4", function() {
    expect(romanNumeral(4)).to.eql(['I','V']);
  });
  it("returns the correct roman numeral for 9", function() {
    expect(romanNumeral(9)).to.eql(['I','X']);
  });
  it("returns the correct roman numeral for 14", function() {
    expect(romanNumeral(14)).to.eql(['X','I','V']);
  });
  it("returns the correct roman numeral for 19", function() {
    expect(romanNumeral(19)).to.eql(['X',"I","X"]);
  });
});
