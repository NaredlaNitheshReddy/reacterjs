import { useContext } from "react";
import CartSVG from "../cart/cartIcon";
import cssCasses from "./HeaderCartButton.module.css";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const context = useContext(CartContext);
  let btnText = props.text ?? "Cart";
  return (
    <div className={cssCasses["button-wrapper"]}>
      <span className="icon">
        <CartSVG />
      </span>
      <span className={cssCasses["button-text"]}>{btnText}</span>
      <span className={cssCasses["count-badge"]}>
        {"(" + context?.items ? context?.items?.length : 0 + ")"}
      </span>
    </div>
  );
};

export default HeaderCartButton;
