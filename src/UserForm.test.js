// we dont need to import tetst function because jest is global object and the methotd belongs to it
// first argument is the name of the test (description what we are going to test) and second is the function that will be executed
//expect provided by jest testing framwork is used to make assertions about the component
// we can use expect to check if the component is doing what we expect it to do

import { render, screen } from "@testing-library/react"; // we need to import render and screen from react testing library
// render is a function that will render the component and screen is an object that will give us
// screening methods to find elements in the component
// we can use screen to find elements in the component like getByText, getByRole
import user from "@testing-library/user-event"; // user is an object that will give us methods to interact with the component like a user would do
// we can use userEvent to simulate user interactions like clicking, typing, etc.
import UserForm from "./UserForm";

test("shows 2 inputs and a button", () => {
  // render the component
  render(<UserForm />);
  // manipulate the componenet and find an element in it
  const inputs = screen.getAllByRole("textbox"); // get all inputs in the component
  const button = screen.getByRole("button"); // get the button in the component

  // assertion - make sure the componenet is doing what we expect
  expect(inputs).toHaveLength(2); // check if there are 2 inputs in the component
  expect(button).toBeInTheDocument(); // check if the button is in the component
});

// test("test user interactions on inputs", () => {
//   // not the best implementation
//   const argsList = [];

//   const callBack = (...args) => {
//     argsList.push(...args);
//   };

//   // render the component with the mock function
//   render(<UserForm onUserAdd={callBack} />);

//   // find inputs
//   const [nameInput, emailInput] = screen.getAllByRole("textbox");

//   // simulate user typing in name
//   user.click(nameInput);
//   user.keyboard("John Doe");

//   // simulate user typing in email
//   user.click(emailInput);
//   user.keyboard("john@example.com");

//   // find the button
//   const submitButton = screen.getByRole("button", {
//     name: /add user/i, // find the button by its text
//   });

//   // simulate user clicking the button
//   user.click(submitButton);

//   // assertion to make sure onUserAdd gets called with correct arguments

//   // check if onUserAdd was called once
//   expect(argsList).toHaveLength(1);

//   expect(argsList[0]).toEqual({
//     name: "John Doe",
//     email: "john@example.com",
//   });

//   // check if the inputs are cleared after submission
//   expect(nameInput).toHaveValue(""); // check if the name input is cleared
//   expect(emailInput).toHaveValue(""); // check if the email input is cleared
// });

test("test user interactions on inputs", () => {
  // create a mock function to track calls
  const mockOnUserAdd = jest.fn();

  // render the component with the mock function
  render(<UserForm onUserAdd={mockOnUserAdd} />);

  // find inputs
  const nameInput = screen.getByRole("textbox", {
    name: /name/i, // find the name input by its label
  });
  const emailInput = screen.getByRole("textbox", {
    name: /email/i, // find the email input by its label
  });

  // simulate user typing in name
  user.click(nameInput);
  user.keyboard("John Doe");

  // simulate user typing in email
  user.click(emailInput);
  user.keyboard("john@example.com");

  // find the button
  const submitButton = screen.getByRole("button", {
    name: /add user/i, // find the button by its text
  });

  // simulate user clicking the button
  user.click(submitButton);

  // assertion to make sure onUserAdd gets called with correct arguments

  // check if onUserAdd was called once
  expect(mockOnUserAdd).toHaveBeenCalledTimes(1);

  // make sure it was called with the correct arguments
  expect(mockOnUserAdd).toHaveBeenCalledWith({
    name: "John Doe",
    email: "john@example.com",
  });
});

test("reset input after adding them to list ", () => {
  render(<UserForm onUserAdd={() => {}} />);
  const nameInput = screen.getByRole("textbox", { name: /name/i });
  const emailInput = screen.getByRole("textbox", { name: /email/i });
  const submitButton = screen.getByRole("button", { name: /add user/i });

  user.click(nameInput);
  user.keyboard("John Doe");
  user.click(emailInput);
  user.keyboard("john@example.com");
  user.click(submitButton);

  // check if the inputs are cleared after submission
  expect(nameInput).toHaveValue(""); // check if the name input is cleared
  expect(emailInput).toHaveValue(""); // check if the email input is cleared
});
