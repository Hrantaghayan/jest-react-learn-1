import { render, screen } from "@testing-library/react";
import LoadableColorList from "./LoadableColorList";

test("favor findBy or findAllBy to prove an element exists", async () => {
  render(<LoadableColorList />);
  const element = await screen.findByRole("list");
  expect(element).toBeInTheDocument();
  const listItems = await screen.findAllByRole("listitem");
  expect(listItems).toHaveLength(3);

  listItems.forEach((item) => {
    expect(item).toBeInTheDocument();
  });
});
