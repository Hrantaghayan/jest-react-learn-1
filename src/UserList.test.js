import { render, screen, within } from "@testing-library/react";
// within is used to scope queries to a specific element
// it allows us to find elements within a specific part of the component
import UserList from "./UserList";

// test("renders a list of users", () => {
//   const users = [
//     { name: "John Doe", email: "john@gmail.com" },
//     { name: "Jane Smith", email: "jane@gmail.com" },
//   ];

//   // render the component with the users
//   //   slution with query selector
//   //   const {container} = render(<UserList users={users} />);

//   render(<UserList users={users} />);
//   //find all the rows in the table
//   const rows = within(screen.getByTestId("users")).getAllByRole("row");
//   // const rows  = container.querySelectorAll("tbody tr");

//   //assertion correct number of rows
//   // expect(rows).toHaveLength(users?.length + 1); // +1 for the header
//   expect(rows).toHaveLength(users.length);
// });

// test("renders the email and name of each user", () => {
//   const users = [
//     { name: "John Doe", email: "john@gmail.com" },
//     { name: "Jane Smith", email: "jane@gmail.com" },
//   ];
//   // render the component with the users
//   render(<UserList users={users} />);
//   //   screen.logTestingPlaygroundURL();

//   for (let user of users) {
//     const name = screen.getByRole("cell", { name: user?.name });
//     const email = screen.getByRole("cell", { name: user?.email });

//     // assertion to check if the name and email are rendered correctly
//     expect(name).toBeInTheDocument();
//     expect(email).toBeInTheDocument();
//   }
// });

function renderComponent() {
  const users = [
    { name: "John Doe", email: "john@gmail.com" },
    { name: "Jane Smith", email: "jane@gmail.com" },
  ];
  // render the component with the users
  render(<UserList users={users} />);
  return {
    users,
  };
}

test("renders a list of users", () => {
  const { users } = renderComponent();
  //find all the rows in the table
  const rows = within(screen.getByTestId("users")).getAllByRole("row");
  // const rows  = container.querySelectorAll("tbody tr");

  //assertion correct number of rows
  // expect(rows).toHaveLength(users?.length + 1); // +1 for the header
  expect(rows).toHaveLength(users.length);
});

test("renders the email and name of each user", () => {
 const {users} = renderComponent();
  //   screen.logTestingPlaygroundURL();

  for (let user of users) {
    const name = screen.getByRole("cell", { name: user?.name });
    const email = screen.getByRole("cell", { name: user?.email });

    // assertion to check if the name and email are rendered correctly
    expect(name).toBeInTheDocument();
    expect(email).toBeInTheDocument();
  }
});
