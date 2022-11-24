import UserItem from "./UserItem";
import React from "react";
import Card from "../ui/card";

const UserList = (props) => {
  const users = Array.from(props.users);

  return (
    <Card>
      <div>
        <ul>
          {users?.map((user) => (
            <UserItem
              key={Math.random()}
              username={user.name}
              age={user.age}
            ></UserItem>
          ))}
        </ul>
      </div>
    </Card>
  );
};

export default UserList;
