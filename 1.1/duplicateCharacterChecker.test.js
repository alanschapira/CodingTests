const { duplicateCharacterChecker } = require("./duplicateCharacterChecker");

describe("duplicateCharacterChecker", () => {
  it('should return true for "abcdefghijklmnopqrstuvqxyza"', () => {
    expect(duplicateCharacterChecker("abcdefghijklmnopqrstuvqxyza")).toEqual(
      true
    );
  });
  it('should return true for "!abcd!"', () => {
    expect(duplicateCharacterChecker("abcdefghijklmnopqrstuvqxyza")).toEqual(
      true
    );
  });
  it('should return false for "asd"', () => {
    expect(duplicateCharacterChecker("asd")).toEqual(false);
  });
  it("should return false for all ascii", () => {
    expect(
      duplicateCharacterChecker(
        " !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~"
      )
    ).toEqual(false);
  });
});
