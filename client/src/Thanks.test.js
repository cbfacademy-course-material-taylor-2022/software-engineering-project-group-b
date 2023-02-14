import React from "react";
import { render, screen } from "@testing-library/react";
import Thanks from "./Thanks";

it("renders Thank you message", () => {
  render(<Thanks />); //thanks
  expect(screen.getByText("THANKS")).toBeInTheDocument();
});
