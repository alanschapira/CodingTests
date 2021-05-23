const { duplicateCharacterChecker } = require("./duplicateCharacterChecker");

describe('duplicateCharacterChecker', () => {
    it('should return true for "abcdefghijklmnopqrstuvqxyza"', () => {
        expect(duplicateCharacterChecker("abcdefghijklmnopqrstuvqxyza")).toBeTruthy()
    })
    it('should return true for "!abcd!"', () => {
        expect(duplicateCharacterChecker("abcdefghijklmnopqrstuvqxyza")).toBeTruthy()

    })
    it('should return false for "asd"', () => {
        expect(duplicateCharacterChecker("asd")).toBeFalsy()
    })
    it('should return false for all ascii', () => {
        expect(duplicateCharacterChecker(" !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~")).toBeFalsy()
    })
})