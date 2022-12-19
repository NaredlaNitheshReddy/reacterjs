import CartSVG from "../cart/cartIcon";
import cssCasses from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  let btnText = props.text ?? "Cart";
  return (
    <div className={cssCasses["button-wrapper"]}>
      <span className="icon">
        <CartSVG />
      </span>
      <span className={cssCasses["button-text"]}>{btnText}</span>
      <span className={cssCasses["count-badge"]}>{"(" + 3 + ")"}</span>
    </div>
  );
};

export default HeaderCartButton;
