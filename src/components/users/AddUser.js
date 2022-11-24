import { useState } from "react";

import Card from "../ui/card";
import "./adduser.css";
import CustomButton from "../ui/button";
import ErrorModel from "../ui/ErrorModel";

const AddUser = (props) => {
  const [username, setUserName] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();
    if (username.trim().length === 0 || age.trim().length === 0) {
      setError({
        header: "Error..!",
        message: "User name or age should not be null!",
      });
    }
    if (+age < 1) {
      return;
    }
    props.onAddUser(username, age);
    setUserName("");
    setAge("");
  };

  const usernameChangeHandler = (event) => {
    setUserName(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setAge(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModel error={error} closeHandler={errorHandler}></ErrorModel>
      )}
      <Card>
        <form onSubmit={addUserHandler}>
          <div>
            <label htmlFor="username">User Name</label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={usernameChangeHandler}
            ></input>
          </div>
          <div>
            <label htmlFor="age">Age (Years)</label>
            <input
              id="age"
              type="number"
              onChange={ageChangeHandler}
              value={age}
            ></input>
          </div>
          <div>
            <CustomButton btnText={"Submit"}></CustomButton>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
