import { useState } from "react";

import "./App.css";
import AddUser from "./components/users/AddUser";
import UserList from "./components/users/UserList";
import Cart from "./food-app/components/cart/Cart";
import Food_Header from "./food-app/components/layout/Header";

function App() {
  const [users, AddUsers] = useState([]);
  const AddUserHandler = (username, userage) => {
    AddUsers((preList) => {
      return [...preList, { name: username, age: userage }];
    });
  };

  return (
    <div className="App">
      <Food_Header></Food_Header>
      {/* User app - basics -1 
       <AddUser onAddUser={AddUserHandler}></AddUser>
      <UserList users={users}></UserList> */}
    </div>
  );
}

export default App;
