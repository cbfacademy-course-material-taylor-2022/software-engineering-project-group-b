import react from "react";
import Signature from "./Signature";
import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";

//describe('Signature', () => {
// xit('renders expected elements', () => {
//     const signature = render(<Signature />);
//     expect(document.querySelectorAll('img')).toHaveLength(1);
// });

//it('renders expected elements', () => {
//const signature = render(<BrowserRouter> <Signature /> </BrowserRouter>);
// expect(shallow(
//     <BrowserRouter>
//       <Signature />
//     </BrowserRouter>
//   ).length).toEqual(1);

//expect(document.querySelectorAll('h2')).toHaveLength(2);

//});

//});

it("renders welcome message", () => {
  render(<Signature />);
  expect(screen.getByText("First Name")).toBeInTheDocument();
});
