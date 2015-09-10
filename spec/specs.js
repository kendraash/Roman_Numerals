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
  it("returns the correct roman numeral for 24", function() {
    expect(romanNumeral(24)).to.eql(['X',"X","I", "V"]);
  });
  it("returns the correct roman numeral for 39", function() {
    expect(romanNumeral(39)).to.eql(['X',"X","X","I","X"]);
  });
  it("returns the correct roman numeral for 50", function() {
    expect(romanNumeral(50)).to.eql(['L']);
  });
  it("returns the correct roman numeral for 63", function() {
    expect(romanNumeral(63)).to.eql(['L','X','I','I','I']);
  });
  it("returns the correct roman numeral for 89", function() {
    expect(romanNumeral(89)).to.eql(['L','X','X','X','I','X']);
  });
  it("returns the correct roman numeral for 99", function() {
    expect(romanNumeral(99)).to.eql(['X','C','I','X']);
  });
  it("returns the correct roman numeral for 887", function() {
    expect(romanNumeral(887)).to.eql(['D','C','C','C','L','X','X','X','V','I','I']);
  });
  it("returns the correct roman numeral for 997", function() {
    expect(romanNumeral(997)).to.eql(['C','M','X','C','V','I','I']);
  });
  it("returns the correct roman numeral for 3999", function() {
    expect(romanNumeral(3999)).to.eql(['M','M','M','C','M','X','C','I','X']);
  });
  it("returns the correct roman numeral for 400", function() {
    expect(romanNumeral(400)).to.eql(['C','D']);
  });
});
