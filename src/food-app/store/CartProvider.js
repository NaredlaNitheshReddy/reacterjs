import { useContext } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  const context = useContext(CartContext);

  context.addItem = (val) => {
    context.items = [...context.items, val];
    console.log(context.items);
  };

  return (
    <CartContext.Provider value={context}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
