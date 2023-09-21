import { render, screen } from "@testing-library/react";
import App from "./App";

// Test that the text "Sandra och Fredrik" is present in the App component
test("renders Sandra och Fredrik", () => {
  render(<App />);
  const linkElement = screen.getByText(/Sandra och Fredrik/i);
  expect(linkElement).toBeInTheDocument();
});

// Test that the link to the church is present in the App component
test("renders Mo Kyrka", () => {
  render(<App />);
  const linkElement = screen.getByText(/Mo Kyrka/i);
  expect(linkElement).toBeInTheDocument();
});

// Test that the down_right_corner image is at the bottom of screen
// test that it renders the image
// test that the image is at the bottom of the screen
// test that the image is at the right of the screen
test("renders down_right_corner", () => {
  render(<App />);
  const linkElement = screen.getByAltText("down_right_corner");
  expect(linkElement).toBeInTheDocument();
  expect(linkElement).toHaveStyle("bottom: 0px");
  expect(linkElement).toHaveStyle("right: 0px");
  expect(linkElement).not.toHaveStyle("top: 0px");
  expect(linkElement).not.toHaveStyle("left: 0px");
});

// Test that the upper_left_corner image is at the top of screen
// test that it renders the image
// test that the image is at the top of the screen
// test that the image is at the left of the screen
test("renders upper_left_corner", () => {
  render(<App />);
  const linkElement = screen.getByAltText("upper_left_corner");
  expect(linkElement).toBeInTheDocument();
  expect(linkElement).toHaveStyle("top: 0px");
  expect(linkElement).toHaveStyle("left: 0px");
  expect(linkElement).not.toHaveStyle("bottom: 0px");
  expect(linkElement).not.toHaveStyle("right: 0px");
});
