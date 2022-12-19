import classes from "./Header.module.css";
import posterImage from "./../../shared/images/food-poster.webp";

import HeaderCartButton from "./HeaderCartButton";
import MealsHeader from "../meals/Meals-Header";
import MealsList from "../meals/Meals-List";

const { Fragment } = require("react");

const Food_Header = () => {
  return (
    <Fragment>
      <header className={classes["app-header"]}>
        <h1>Anithara</h1>
        <HeaderCartButton></HeaderCartButton>
      </header>
      <div className={classes["posterImageWrapper"]}>
        <img
          className={classes["posterImage"]}
          src={posterImage}
          alt="food poster"
        ></img>
      </div>
      <div className={classes["quote"]}>
        <MealsHeader></MealsHeader>
        <MealsList></MealsList>
      </div>
    </Fragment>
  );
};

export default Food_Header;
