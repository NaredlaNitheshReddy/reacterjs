import { Fragment } from "react";
import cssClasses from "./Meals-Header.module.css";

const MealsHeader = () => {
  return (
    <Fragment>
      <div className={cssClasses["quoteWrapper"]}>
        <p>Food is symbolic of love when words are inadequate.</p>
      </div>
    </Fragment>
  );
};

export default MealsHeader;
