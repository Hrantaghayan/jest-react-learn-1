import "./App.css";
import MoreNames from "./MoreNames";
import { useState } from "react";
import UserForm from "./UserForm";
import UserList from "./UserList";
import RoleExample from "./RoleExample";
import IconButtons from "./IconButtons";
import AccessibleName from "./AccessibleName";
import ColorList from "./ColorList";
import LoadableColorList from "./LoadableColorList";

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
      <ColorList />
      <LoadableColorList />
    </div>
  );
}

export default App;
