const addCommas = require("./addCommas");

describe("#addCommas", () => {
  test("it is a function", () => {
    expect(typeof addCommas).toBe("function");
  });

  test("works for positive numbers with commas" , () =>{
    let res = addCommas(1000);
    expect(res).toEqual("1,000");
  })

  test("works for positive numbers under 1000", () => {
    let res = addCommas(100);
    expect(res).toEqual("100");
  })

  test("works with negative numbers over 1000", () =>{
    let res = addCommas(-3000);
    expect(res).toEqual("-3,000");
  })

  test("works with negative numbers under 1000", () =>{
    let res = addCommas(-100);
    expect(res).toEqual("-100");
  })
});
