import { render, screen } from "@testing-library/react";
import RoleExample from "./RoleExample";

test("renders elements with correct roles", () => {
  render(<RoleExample />);

  const roles = [
    "link",
    "button",
    "contentinfo",
    "heading",
    "img",
    "checkbox",
    "spinbutton",
    "radio",
    "textbox",
    "listitem",
    "list",
  ];

  for (let role of roles) {
    const element = screen.getByRole(role);
    expect(element).toBeInTheDocument();
  }
});


