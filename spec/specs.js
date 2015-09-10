describe("romanNumeral", function() {
  it("returns the correct roman numberal up to 4", function() {
    expect(romanNumeral(4)).to.eql(['I','I','I','I']);
  });
});
