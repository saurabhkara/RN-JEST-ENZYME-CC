import React from "react";
import renderer from "react-test-renderer";
import {render} from '@testing-library/react-native'
import App from "./App";
import sum from "./01-matcher/sum";

describe("<App />", () => {
  it("has 1 child", () => {
    const tree: any = renderer.create(<App />).toJSON();
    expect(tree.children.length).toBe(2);
  });

  test("Sum of 2 and 3 is 5", () => {
    expect(sum(2, 3)).toBe(5);
  });

  test('has 2 child comonent',()=>{
    const tree:any = render(<App />).toJSON();
    console.log(tree)
    expect(tree.children.length).toBe(2)
  })

  test('First Child text on Screen', async ()=>{
      const screen = render(<App />);
      console.log(screen);
      expect(screen.getByText('First Child component!')).toBeDefined();
  })

 
  
});
