import {
  CartItemContainer,
  Image,
  ItemDetails,
  Name,
} from "./cart-item.styles";

const CartItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CartItemContainer>
      <Image src={imageUrl} alt={name} />
      <ItemDetails>
        <Name>{name}</Name>
        <span>
          {quantity} x{" "}
          {new Intl.NumberFormat(
            "en-IN",
            { style: "currency", currency: "INR" },
            { maximumSignificantDigits: 3 }
          ).format(price * 76)}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
