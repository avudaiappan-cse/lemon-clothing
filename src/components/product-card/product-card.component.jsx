import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import {
  ProductCardContainer,
  Footer,
  ImageContainer,
  Name,
  Price,
  ProductCardButton,
} from "./product-card.styles";

const ProductCard = ({ id, name, imageUrl, price }) => {
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();
  const addCart = () =>
    dispatch(addItemToCart(cartItems, { id, name, imageUrl, price }));
  return (
    <ProductCardContainer>
      <ImageContainer src={imageUrl} alt={name} />
      <Footer>
        <Name>{name}</Name>
        {/* for converting to Rupees multiplied by 76 */}
        <Price>
          {new Intl.NumberFormat(
            "en-IN",
            { style: "currency", currency: "INR" },
            { maximumSignificantDigits: 3 }
          ).format(price * 76)}{" "}
          (INR)
        </Price>
      </Footer>
      <ProductCardButton
        as={Button}
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addCart}
      >
        Add to Cart
      </ProductCardButton>
    </ProductCardContainer>
  );
};
export default ProductCard;
