import { render, screen } from "@testing-library/react";
import DataForm from "./DataForm";

test("selecting different elements", () => {
  render(<DataForm />);
  const elemnts = [
    screen.getByRole("button"),
    screen.getByLabelText("Email"),
    screen.getByPlaceholderText("red"),
    screen.getByText("Enter Data"),
    screen.getByDisplayValue("asd@gmail.com"),
    screen.getByAltText("data.jpg"),
    screen.getByTitle("click when ready to submit"),
  ];

  for (let element of elemnts) {
    expect(element).toBeInTheDocument();
  }
  
});
