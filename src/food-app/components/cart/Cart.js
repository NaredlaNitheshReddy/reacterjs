import Modal from "../ui/Modal";
import cssClasses from "./Cart.module.css";

const Cart = () => {
  const cartItems = (
    <ul>
      {[{ id: "dummy", itemName: "Dummy", quantity: "dummy" }].map((item) => (
        <li id={item.id} key={item.id}>
          {item.itemName} - {item.quantity}
        </li>
      ))}
    </ul>
  );

  return <Modal>{cartItems}</Modal>;
};

export default Cart;
