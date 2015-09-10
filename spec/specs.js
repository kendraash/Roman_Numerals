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
});
