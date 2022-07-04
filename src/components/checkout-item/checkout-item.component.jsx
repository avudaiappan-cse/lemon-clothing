import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import {
  Arrow,
  CheckOutItemContainer,
  Image,
  ImageContainer,
  Name,
  Price,
  Quantity,
  RemoveButton,
  Value,
} from "./checkout-item.styles";

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
    <CheckOutItemContainer>
      <ImageContainer>
        <Image src={imageUrl} alt={name} />
      </ImageContainer>
      <Name>{name}</Name>
      <Quantity className="quantity">
        <Arrow onClick={decrementItem}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={incrementItem}>&#10095;</Arrow>
      </Quantity>

      <Price>&#8377; {price * 76}</Price>
      <RemoveButton onClick={clearItem}>&#10005;</RemoveButton>
    </CheckOutItemContainer>
  );
};

export default CheckOutItem;
