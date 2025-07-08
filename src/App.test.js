import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import App from "./App";

test("test whola app", () => {
  render(<App />);

  const nameInput = screen.getByRole("textbox", { name: /name/i });
  const emailInput = screen.getByRole("textbox", { name: /email/i });
  const submitButton = screen.getByRole("button", { name: /add user/i });

  user.click(nameInput);
  user.keyboard("John Doe");
  user.click(emailInput);
  user.keyboard("john@gmail.com");
  user.click(submitButton);

  const name = screen.getByRole("cell", { name: "John Doe" });
  const email = screen.getByRole("cell", { name: "john@gmail.com" });
  expect(name).toBeInTheDocument();
  expect(email).toBeInTheDocument();
});
