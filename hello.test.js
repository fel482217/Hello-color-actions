const hello = require("./hello");
describe("My hello", () => {
  test("works", () => {
    expect(hello.hello()).toEqual("Hoal Mundo, un nuevo amanece");
  });
});
