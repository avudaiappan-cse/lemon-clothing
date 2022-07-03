import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/cart.context";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import "./cart-dropdown.styles.scss";

const CartDropDown = (props) => {
  const { cartItems, setIsCartOpen, isCartOpen } = useContext(CartContext);
  const navigate = useNavigate();
  console.log(cartItems);

  const goToCheckOutPage = () => {
    setIsCartOpen(!isCartOpen);
    navigate("/checkout");
  };

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems &&
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)}
      </div>
      <Button onClick={goToCheckOutPage}>CHECKOUT</Button>
    </div>
  );
};

export default CartDropDown;
