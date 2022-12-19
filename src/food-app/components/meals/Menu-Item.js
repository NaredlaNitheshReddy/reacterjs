import { Fragment } from "react";
import AddItemForm from "./AddItemForm";
import cssClasses from "./Menu-Item.module.css";

const MenuItem = (props) => {
  return (
    <Fragment>
      <li className={cssClasses["list-item"]} key={props.itemId}>
        <span className={cssClasses["p"]}>
          <b>{props.itemName}</b>
        </span>
        <span className={cssClasses["p"]}>{props.description}</span>
        <span className={cssClasses["p"]}>
          {props.currency + " " + props.cost + " /- Only"}
        </span>
        <div className={cssClasses["input-form"]}>
          <AddItemForm></AddItemForm>
        </div>
      </li>
    </Fragment>
  );
};

export default MenuItem;
