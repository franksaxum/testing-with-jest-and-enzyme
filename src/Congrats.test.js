import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";

import Congrats from "./Congrats";
import { findByTestAttribute } from "../test/testUtils";

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = (props = {}) => {
  return shallow(<Congrats {...props} />);
};

test("renders without error", () => {
  const wrapper = setup();
  const component = findByTestAttribute(wrapper, "component-congrats");
  expect(component.length).toBe(1);
});
test("renders no text when succes prop is false", () => {
  const wrapper = setup({ success: false });
  const component = findByTestAttribute(wrapper, "component-congrats");
  expect(component.text()).toBe("");
});
test("renders non-empty congrats message when success prop is true", () => {
  const wrapper = setup({ success: true });
  const message = findByTestAttribute(wrapper, "congrats-message");
  expect(message.text().length).not.toBe(0);
});
