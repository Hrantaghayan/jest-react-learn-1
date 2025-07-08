import { render,screen } from "@testing-library/react";
import MoreNames from "./MoreNames";
test("renders elements with correct roles", () => {
  render(<MoreNames />);

const emailInput = screen.getByRole("textbox", {
    name: /email/i, // find the email input by its label
  });
  const searchInput = screen.getByRole("textbox", {
    name: /search/i, // find the search input by its label
  });

  expect(emailInput).toBeInTheDocument();
  expect(searchInput).toBeInTheDocument();
  
});