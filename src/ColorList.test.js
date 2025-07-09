import { render, screen } from "@testing-library/react";
import ColorList from "./ColorList";

test("getBy,queryBy,findBy finding 0 elements", async () => {
  render(<ColorList />);

  // getByRole throws immediately if element not found
  expect(() => screen.getByRole("textbox")).toThrow();

  // queryByRole returns null if element not found
  expect(screen.queryByRole("textbox")).toEqual(null);

  // findByRole waits for element, then throws after timeout
  let errorThrown = false;
  try {
    await screen.findByRole("textbox");
  } catch (error) {
    errorThrown = true;
  }
  expect(errorThrown).toEqual(true);
  // getByRole will throw an error if no elements are found
  // queryByRole will return null if no elements are found
  // findByRole will return a promise that REJECTS when the element is not found (after timeout)
});

test("getBy,queryBy,findBy finding 1 element", async () => {
  render(<ColorList />);

  // getByRole finds the element immediately

  expect(screen.getByRole("list")).toBeInTheDocument();

  // queryByRole also finds the element
  expect(screen.queryByRole("list")).toBeInTheDocument();

  expect(await screen.findByRole("list")).toBeInTheDocument();
});

test("getBy,queryBy,findBy when finding > 1  elements", async () => {
  render(<ColorList />);

  // getByRole throws immediately if element is greather than 1
  expect(() => screen.getByRole("listitem")).toThrow();

  expect(() => screen.queryByRole("listitem")).toThrow();

  // findByRole waits for element, then throws after timeout
  let errorThrown = false;
  try {
    await screen.findByRole("listitem");
  } catch (error) {
    errorThrown = true;
  }
  expect(errorThrown).toEqual(true);
});

test("getAllBy,queryAllBy,findAllBy finding 0 elements", async () => {
  render(<ColorList />);

  // getAllByRole throws immediately if no elements are found
  expect(() => screen.getAllByRole("textbox")).toThrow();

  // queryAllByRole returns an empty array if no elements are found
  expect(screen.queryAllByRole("textbox")).toEqual([]);

  // findAllByRole waits for elements, then throws after timeout
  let errorThrown = false;
  try {
    await screen.findAllByRole("textbox");
  } catch (error) {
    errorThrown = true;
  }
  expect(errorThrown).toEqual(true);
});

test("getAllBy,queryAllBy,findAllBy finding >1 elements", async () => {
  render(<ColorList />);

  expect(screen.getAllByRole("listitem")).toHaveLength(3);

  expect(screen.queryAllByRole("listitem")).toHaveLength(3);

  // findAllByRole waits for elements, then throws after timeout
  expect(await screen.findAllByRole("listitem")).toHaveLength(3);
});

test("favor using getBy to prove an element exists", () => {
  render(<ColorList />);
  const element = screen.getByRole("list");
     expect(element).toBeInTheDocument();
});

test("favor using queryBy to prove an element does not exist", () => {
  render(<ColorList />);
  const element = screen.queryByRole("textbox");
  expect(element).not.toBeInTheDocument()
});
