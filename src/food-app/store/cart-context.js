import React from "react";
const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {
    this?.items.add(item);
  },
  removeItem: (id) => {},
});

export default CartContext;
