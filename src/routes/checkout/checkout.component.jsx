import { useContext } from "react";
import CheckOutItem from "../../components/checkout-item/checkout-item.component";
import { CartContext } from "../../contexts/cart.context";
import {
  CheckOutContainer,
  CheckOutHeader,
  HeaderBlock,
  Total,
} from "./checkout.styles";

const CheckOut = () => {
  const { cartItems, totalPrice } = useContext(CartContext);
  return (
    <CheckOutContainer>
      <CheckOutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckOutHeader>
      {cartItems &&
        cartItems.map((item) => <CheckOutItem key={item.id} product={item} />)}
      <Total>Total: &#8377; {totalPrice}</Total>
    </CheckOutContainer>
  );
};

export default CheckOut;
