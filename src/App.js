import { useState } from "react";

import "./App.css";
import AddUser from "./components/users/AddUser";
import UserList from "./components/users/UserList";

function App() {
  const [users, AddUsers] = useState([]);
  const AddUserHandler = (username, userage) => {
    AddUsers((preList) => {
      return [...preList, { name: username, age: userage }];
    });
  };

  return (
    <div className="App">
      <AddUser onAddUser={AddUserHandler}></AddUser>
      <UserList users={users}></UserList>
    </div>
  );
}

export default App;
