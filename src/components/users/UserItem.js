import "./UserItem.css";

const UserItem = (props) => {
  return <li>{props.username + " (" + props.age + ")"}</li>;
};

export default UserItem;
