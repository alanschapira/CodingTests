const {oneAway} = require("./oneAway")
describe ("One away", ( ) => {
    it("should return true for pale and ple" , () => {
        const result = oneAway("pale", "ple")
        expect(result).toBeTruthy()
    })
    it("should return true for pales and pale" , () => {
        const result = oneAway("pales", "pale")
        expect(result).toBeTruthy()
    })
    it("should return true for pale and bale" , () => {
        const result = oneAway("pale", "bale")
        expect(result).toBeTruthy()
    })
    it("should return false for pale and bake" , () => {
        const result = oneAway("pale", "bake")
        expect(result).toBeFalsy()
    })
})
