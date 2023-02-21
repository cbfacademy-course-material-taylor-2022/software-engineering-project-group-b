import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import Thanks from "./Thanks";

// it("renders Thank you message", () => {
//   render(<Thanks />); //thanks
//   expect(screen.getByText("THANKS")).toBeInTheDocument();
// });

// test("renders THANKS component", async () => {
//   render(<Thanks />);

//   expect(screen.getByRole("yellow-border")).toBeInTheDocument();
// });

it("renders welcome message", () => {
  render(<Thanks />);
  expect(screen.getByText("HELLO")).toBeInTheDocument();
});
