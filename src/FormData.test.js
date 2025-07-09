import { render, screen, within } from "@testing-library/react";
import FormData from "./FormData";

function toContainRole(container, role, quantity = 1) {
  const elements = within(container).queryAllByRole(role);
  if (elements.length === quantity) {
    return {
      pass: true,
    };
  } else {
    return {
      pass: false,
      message: () =>
        `expected to find ${quantity} ${role} elements. Found ${elements.length} instead.`,
    };
  }
}
// adding custom matcher to jest 
expect.extend({ toContainRole }); //giving custommatcher to exepect

test("form displays two buttons", async () => {
  render(<FormData />);

  // First find the form
  const form = screen.getByRole("form", { name: /form/i });

  // Then find all buttons within that specific form
  const buttons = within(form).getAllByRole("button");
  for(let button of buttons) {
    expect(button).toBeInTheDocument();
  }
  expect(buttons).toHaveLength(2);
  expect(form).toBeInTheDocument();
});

test("form displays two buttons", async () => {
  render(<FormData />);

  // First find the form
  const form = screen.getByRole("form", { name: /form/i });

  expect(form).toContainRole("button", 2);
});
