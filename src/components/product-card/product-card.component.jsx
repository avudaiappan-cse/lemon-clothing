import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
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
  const { addItemToCart } = useContext(CartContext);
  const addCart = () => addItemToCart({ id, name, imageUrl, price });
  return (
    <ProductCardContainer>
      <ImageContainer src={imageUrl} alt={name} />
      <Footer>
        <Name>{name}</Name>
        {/* for converting to Rupees multiplied by 76 */}
        <Price>&#8377;{price * 76} (INR)</Price>
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
