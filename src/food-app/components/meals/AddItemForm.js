import { Fragment, useContext } from "react";
import cssClasses from "./AddItemForm.module.css";
import Input from "../ui/Input";
import CartContext from "../../store/cart-context";

const AddItemForm = () => {
  const context = useContext(CartContext);
  return (
    <Fragment>
      <Input
        input={{ id: "sampleId", name: "sampleName" }}
        lableText="Quantity"
        qty="1"
      ></Input>
      <button
        className={cssClasses["add-btn"]}
        onClick={() => {
          context.addItem(1);
        }}
      >
        +Add
      </button>
    </Fragment>
  );
};

export default AddItemForm;
