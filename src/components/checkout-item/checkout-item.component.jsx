import { useDispatch, useSelector } from "react-redux";
import {
  addItemToCart,
  removeItemFromCart,
  clearCartItem,
} from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";
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
  const cartItems = useSelector(selectCartItems);

  const { name, price, quantity, imageUrl } = product;
  const dispatch = useDispatch();
  const incrementItem = () => {
    dispatch(addItemToCart(cartItems, product));
  };
  const decrementItem = () => {
    dispatch(removeItemFromCart(cartItems, product));
  };

  const clearItem = () => {
    dispatch(clearCartItem(cartItems, product));
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

      <Price>
        {new Intl.NumberFormat(
          "en-IN",
          { style: "currency", currency: "INR" },
          { maximumSignificantDigits: 3 }
        ).format(price * 76)}
      </Price>
      <RemoveButton onClick={clearItem}>&#10005;</RemoveButton>
    </CheckOutItemContainer>
  );
};

export default CheckOutItem;
