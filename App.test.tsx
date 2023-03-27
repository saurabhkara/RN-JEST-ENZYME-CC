import React from "react";
import renderer from "react-test-renderer";
import App from "./App";
import sum from "./01-matcher/sum";

describe("<App />", () => {
  it("has 1 child", () => {
    const tree: any = renderer.create(<App />).toJSON();
    expect(tree.children.length).toBe(1);
  });

  test("Sum of 2 and 3 is 5", () => {
    expect(sum(2, 3)).toBe(5);
  });
  
});
