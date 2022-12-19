import { Fragment } from "react";
import cssClasses from "./AddItemForm.module.css";
import Input from "../ui/Input";

const AddItemForm = () => {
  return (
    <Fragment>
      <Input
        input={{ id: "sampleId", name: "sampleName" }}
        lableText="Quantity"
        qty="1"
      ></Input>
      <button className={cssClasses["add-btn"]}>+Add</button>
    </Fragment>
  );
};

export default AddItemForm;
