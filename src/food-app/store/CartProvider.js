import CartContext from "./cart-context";

const CartProvider = (props) => {
  return (
    <CartContext.Provider value={props.value}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
