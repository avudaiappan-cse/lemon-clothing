import { useSelector } from "react-redux";
import CheckOutItem from "../../components/checkout-item/checkout-item.component";
import PaymentForm from "../../components/payment-form/payment-form.component";
import {
  selectCartItems,
  selectTotalPrice,
} from "../../store/cart/cart.selector";
import {
  CheckOutContainer,
  CheckOutHeader,
  HeaderBlock,
  Total,
} from "./checkout.styles";

const CheckOut = () => {
  const cartItems = useSelector(selectCartItems);
  const totalPrice = useSelector(selectTotalPrice);
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
      <Total>
        Total:{" "}
        {new Intl.NumberFormat(
          "en-IN",
          { style: "currency", currency: "INR" },
          { maximumSignificantDigits: 3 }
        ).format(totalPrice)}
      </Total>
      <PaymentForm />
    </CheckOutContainer>
  );
};

export default CheckOut;
