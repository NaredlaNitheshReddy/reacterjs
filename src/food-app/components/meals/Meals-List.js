import cssClasses from "./Meals-List.module.css";
import MealsListData from "../../Mock-Data/MealsListData";
import MenuItem from "./Menu-Item";

const MealsList = () => {
  const filterdList = MealsListData.map((meal) => (
    <MenuItem
      key={meal.itemId}
      itemName={meal.itemName}
      description={meal.description}
      currency={meal.currency}
      cost={meal.cost}
    ></MenuItem>
  ));
  return <div className={cssClasses["list-wrapper"]}>{filterdList}</div>;
};

export default MealsList;
