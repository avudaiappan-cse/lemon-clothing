import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import "./checkout-item.styles.scss";

const CheckOutItem = ({ product }) => {
  const { name, price, quantity, imageUrl } = product;
  const { addItemToCart, removeItemToCart, clearItemFromCart } =
    useContext(CartContext);
  const incrementItem = () => {
    addItemToCart(product);
  };
  const decrementItem = () => {
    removeItemToCart(product);
  };

  const clearItem = () => {
    clearItemFromCart();
  };

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={decrementItem}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={incrementItem}>
          &#10095;
        </div>
      </span>

      <span className="price">&#8377; {price * 76}</span>
      <div className="remove-button" onClick={clearItem}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckOutItem;
