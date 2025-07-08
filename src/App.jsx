import "./App.css";
import MoreNames from "./MoreNames";
import { useState } from "react";
import UserForm from "./UserForm";
import UserList from "./UserList";
import RoleExample from "./RoleExample";
import IconButtons from "./IconButtons";
import AccessibleName from "./AccessibleName";

function App() {
  const [users, setUsers] = useState([]);

  const onUserAdd = (user) => {
    setUsers([...users, user]);
  };

  return (
    <div>
      <UserForm onUserAdd={onUserAdd} />
      <hr />
      <UserList users={users} />
      <RoleExample />
      <AccessibleName />
      <MoreNames />
      <IconButtons />
    </div>
  );
}

export default App;
