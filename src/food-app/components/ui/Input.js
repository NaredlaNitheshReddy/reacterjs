import { Fragment } from "react";
import cssClasses from "./Input.module.css";

const Input = (props) => {
  return (
    <div className={cssClasses["quantity-wrapper"]}>
      <label htmlFor={props.input.id} className={cssClasses["quantity-lable"]}>
        {props.lableText}
      </label>
      <input
        {...props.input}
        className={cssClasses["quantity-input"]}
        value={props.qty}
      ></input>
    </div>
  );
};

export default Input;
