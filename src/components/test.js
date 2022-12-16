const { default: Home } = require("./Home");

let expect = require("chai").expect;

let foo = <Home/>;

describe("foo", function () {
  it("expect an array", function () {
    expect(foo).is.an("array");
  });
});
