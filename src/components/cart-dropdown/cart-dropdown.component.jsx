import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/cart.context";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import {
  CartDropDownContainer,
  CartItems,
  EmptyMessage,
} from "./cart-dropdown.styles";

const CartDropDown = () => {
  const { cartItems, setIsCartOpen, isCartOpen } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckOutPage = () => {
    setIsCartOpen(!isCartOpen);
    navigate("/checkout");
  };

  return (
    <CartDropDownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>
            {cartItems.length === 0 && <span>Your cart is empty.</span>}
          </EmptyMessage>
        )}
      </CartItems>

      <Button onClick={goToCheckOutPage}>CHECKOUT</Button>
    </CartDropDownContainer>
  );
};

export default CartDropDown;
