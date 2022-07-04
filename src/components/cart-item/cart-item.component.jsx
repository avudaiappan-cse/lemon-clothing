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
          {quantity} x &#8377; {price * 76}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
