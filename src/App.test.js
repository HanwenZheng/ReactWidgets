import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import App from "./App";

// set up enzyme adapter
Enzyme.configure({ adapter: new EnzymeAdapter() });

const init = () => shallow(<App />);
const findByTestAttr = (wrapper, value) =>
  wrapper.find(`[data-test='${value}']`);

test("renders without error", () => {
  const wrapper = init();
  const component_app = findByTestAttr(wrapper, "component_app");
  expect(component_app.length).toBe(1);
});

test("renders counter display", () => {
  const wrapper = init();
  const component_counter = findByTestAttr(wrapper, "component_counter");
  expect(component_counter.length).toBe(1);
});

test("renders button", () => {
  const wrapper = init();
  const component_button = findByTestAttr(wrapper, "component_button");
  expect(component_button.length).toBe(1);
});

test("counter start from 0", () => {
  const wrapper = init();
  const count = parseInt(findByTestAttr(wrapper, "count").text());
  expect(count).toBe(0);
});

test("display +1 for click", () => {
  const wrapper = init();
  const component_button = findByTestAttr(wrapper, "component_button");
  component_button.simulate("click"); // click
  const count = parseInt(findByTestAttr(wrapper, "count").text());
  expect(count).toBe(1);
});
