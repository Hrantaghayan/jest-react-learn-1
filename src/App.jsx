import "./App.css";
import { useState } from "react";
import MoreNames from "./MoreNames";
import UserForm from "./UserForm";
import UserList from "./UserList";
import RoleExample from "./RoleExample";
import IconButtons from "./IconButtons";
import AccessibleName from "./AccessibleName";
import ColorList from "./ColorList";
import LoadableColorList from "./LoadableColorList";
import DataForm from "./DataForm";
import FormData from "./FormData";

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
      <DataForm />
      <FormData />
    </div>
  );
}

export default App;
