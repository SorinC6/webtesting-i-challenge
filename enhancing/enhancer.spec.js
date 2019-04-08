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

    it("Test enhancement level over 20", () => {
      expect(
        enhancer.succeed({
          name: "Hammer",
          durability: 95,
          enhancement: 20
        })
      ).toEqual({
        error: "Cannot enhace item level over 20"
      });
    });

    it("Test - enter incorect data in the object: number instead of string", () => {
      expect(
        enhancer.succeed({
          name: "Hammer",
          durability: "95",
          enhancement: 20
        })
      ).toEqual({
        error: "Incorect data"
      });
    });

    it("Test - enter incorect data in the object: durability over 100", () => {
      expect(
        enhancer.succeed({
          name: "Hammer",
          durability: 120,
          enhancement: 20
        })
      ).toEqual({
        error: "Incorect data"
      });
    });

    it("Test - enter incorect data in the object: enhancement over 20", () => {
      expect(
        enhancer.succeed({
          name: "Hammer",
          durability: 80,
          enhancement: 22
        })
      ).toEqual({
        error: "Incorect data"
      });
    });

    describe("Fail function tests", () => {
      it("enhancement is less than 15, the durability of the item is decreased by 5.", () => {
        expect(
          enhancer.fail({
            name: "Hammer",
            durability: 95,
            enhancement: 10
          })
        ).toEqual({
          name: "Hammer",
          durability: 90,
          enhancement: 10
        });
      });

      
    });
    //
  });
});
