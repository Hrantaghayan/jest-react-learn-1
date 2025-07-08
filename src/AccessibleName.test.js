import { render, screen } from "@testing-library/react";
import AccessibleName from "./AccessibleName";

test("renders buttons with accessible names", () => {
  render(<AccessibleName />);
  const buttonName = ["Submit", "Cancel"];
  buttonName.forEach((name) => {
    const button = screen.getByRole("button", { name });
    expect(button).toBeInTheDocument();
  });
});
