import * as React from "react";

import Hello from "..";
import { create } from "react-test-renderer";

test("Component should show 'Blue' text 'Hello Christopher, this is a npm module!'", () => {
  const component = create(<Hello text="Christopher" />);
  const testInstance = component.root;

  expect(testInstance.findByType(Hello).props.text).toBe("Christopher");

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
