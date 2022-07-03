import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import Button from "../button/button.component";
import "./product-card.styles.scss";

const ProductCard = ({ id, name, imageUrl, price }) => {
  const { addItemToCart } = useContext(CartContext);
  const addCart = () => addItemToCart({ id, name, imageUrl, price });
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={name} />
      <div className="footer">
        <span className="name">{name}</span>
        {/* for converting to Rupees multiplied by 76 */}
        <span className="price">&#8377;{price * 76} (INR)</span>
      </div>
      <Button buttonType="inverted" onClick={addCart}>
        Add to Cart
      </Button>
    </div>
  );
};
export default ProductCard;
