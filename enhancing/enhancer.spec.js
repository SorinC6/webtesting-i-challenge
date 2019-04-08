const enhancer = require("./enhancer.js");
// test away!

describe("Challenge Project - tests", () => {
  describe("succed function", () => {
    it("Test  enhancement increases by 1", () => {
      expect(
        enhancer.succeed({
          name: "Hammer",
          durability: 95,
          enhancement: 0
        })
      ).toEqual({
        name: "Hammer",
        durability: 95,
        enhancement: 1
      });
    });

    it("Test  enhancement increases by 1", () => {
      expect(
        enhancer.succeed({
          name: "Hammer",
          durability: 95,
          enhancement: 10
        })
      ).toEqual({
        name: "Hammer",
        durability: 95,
        enhancement: 11
      });
    });
    //
  });
});
