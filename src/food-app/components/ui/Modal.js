import { Fragment } from "react";
import { createPortal } from "react-dom";
import cssClasses from "./Modal.module.css";

const Overlay = (props) => {
  return (
    <div className={cssClasses["overlay"]}>
      <div className={cssClasses["cart-model-header"]}>Cart Item List</div>
      <div className={cssClasses["cart-model-body"]}>{props.children}</div>
      <div className={cssClasses["cart-model-footer"]}>
        <button className={cssClasses["cart-model-button-primary"]}>Buy</button>
        <button className={cssClasses["cart-model-button"]}>Cancel</button>
      </div>
    </div>
  );
};

const BackDrop = () => {
  return <div className={cssClasses["backdrop"]}></div>;
};

const elm = document.getElementById("modal-placeholder");

const Modal = (props) => {
  return (
    <Fragment>
      {createPortal(<BackDrop></BackDrop>, elm)}
      {createPortal(<Overlay>{props.children}</Overlay>, elm)}
    </Fragment>
  );
};

export default Modal;
